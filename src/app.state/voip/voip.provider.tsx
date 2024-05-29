import { useMutation, useSubscription } from '@apollo/client';
import React, {
  ReactNode,
  memo,
  useContext,
  useReducer,
  useEffect,
} from 'react';

import {
  VOIP_CALL_ENDED_REPORT_PAYLOAD,
  VOIP_CALL_FAILED_REPORT_PAYLOAD,
  VOIP_CALL_STATUS_UPDATED_PAYLOAD,
  VOIP_CALL_MEMBER_STATUS,
  VOIP_START_CALL_DOCUMENT,
  VOIP_END_CALL_DOCUMENT,
  VOIP_HEARTBEAT_DOCUMENT,
} from 'codegen/graphql';
import {
  VOIP_CALL_ENDED_REPORT_SUBSCRIPTION,
  VOIP_CALL_FAILED_REPORT_SUBSCRIPTION,
  VOIP_CALL_STATUS_UPDATED_SUBSCRIPTION,
} from 'src/apollo/subscriptions/voip';
import { useAuthContext } from 'src/app.state/auth/provider';

import {
  DispatcherActionHandler,
  DispatcherActions,
  ReducerActions,
} from './types/voip.actions.types';
import { VoipState } from './types/voip.state.types';
import { INITIAL_VOIP_STATE, VoipContext } from './voip.context';
import { VoipReducer } from './voip.reducer';

export const VoipProvider = memo(({ children }: { children?: ReactNode }) => {
  const {
    state: { user },
  } = useAuthContext();
  /**
   * Voip State Machine
   *
   * [state]: access to voip state
   * [reducer]: dispatch actions to store voip state
   */
  const [state, reducer] = useReducer<React.Reducer<VoipState, ReducerActions>>(
    VoipReducer,
    INITIAL_VOIP_STATE,
  );

  /**
   * Store the agents phone extension and token fetched from login
   * - triggered once on load
   */
  useEffect(() => {
    const voip = null;
    const enabled = false;

    if (voip) {
      reducer({
        payload: {
          voip: voip,
          enabled: Boolean(enabled),
        },
        type: 'STORE_AGENT_VOIP',
      });
    }
  }, []);

  /**
   * API Requests
   *
   */
  const [voipStartCall] = useMutation(VOIP_START_CALL_DOCUMENT);

  const [voipEndCall] = useMutation(VOIP_END_CALL_DOCUMENT);

  const [voipHeartbeat] = useMutation(VOIP_HEARTBEAT_DOCUMENT);

  useEffect(() => {
    if (state.enabled && state.agent.token) {
      setInterval(
        () =>
          voipHeartbeat({
            variables: {
              pbx_url: state.agent.pbx_url,
              token: state.agent.token,
            },
          }),
        900000,
      );
    }
  }, [state.enabled, state.agent.token]);

  /**
   * Event Listeners
   * [subscribe]: events microservice
   *
   */

  useSubscription<{
    voip_call_status_updated: VOIP_CALL_STATUS_UPDATED_PAYLOAD;
  }>(VOIP_CALL_STATUS_UPDATED_SUBSCRIPTION, {
    onSubscriptionData: ({
      subscriptionData: {
        // @TODO Fix this
        // @ts-ignore
        data: { voip_call_status_updated },
      },
    }) => {
      let active_call = undefined;

      const customer_status =
        voip_call_status_updated?.outbound_member?.outbound?.memberstatus;

      const agent_status =
        voip_call_status_updated?.extension_member?.ext?.memberstatus;

      const call_id = voip_call_status_updated?.call_id;

      const channel_id =
        voip_call_status_updated?.extension_member?.ext?.channelid;

      if (
        customer_status === 'BYE' ||
        !agent_status ||
        agent_status === 'BYE'
      ) {
        active_call = undefined;
      } else if (call_id && channel_id) {
        let status: VOIP_CALL_MEMBER_STATUS = state.active_call!.status;

        if (customer_status && customer_status !== state.active_call!.status) {
          status = customer_status;
        }

        active_call = {
          ...state.active_call!,
          call_id,
          channel_id,
          status,
        };
      }

      reducer({
        payload: active_call,
        type: 'STORE_ACTIVE_CALL',
      });
    },
    skip: !state.enabled,
  });

  useSubscription<{
    voip_call_ended_report: VOIP_CALL_ENDED_REPORT_PAYLOAD;
  }>(VOIP_CALL_ENDED_REPORT_SUBSCRIPTION, {
    onSubscriptionData: ({ subscriptionData: { data } }) => {
      console.log('voip_call_ended_report', data?.voip_call_ended_report);

      reducer({
        payload: undefined,
        type: 'STORE_ACTIVE_CALL',
      });
    },
    skip: !state.enabled,
  });

  useSubscription<{
    voip_call_failed_report: VOIP_CALL_FAILED_REPORT_PAYLOAD;
  }>(VOIP_CALL_FAILED_REPORT_SUBSCRIPTION, {
    onSubscriptionData: ({ subscriptionData: { data } }) => {
      console.log('voip_call_failed_report', data?.voip_call_failed_report);

      reducer({
        payload: undefined,
        type: 'STORE_ACTIVE_CALL',
      });
    },
    skip: !state.enabled,
  });

  /**
   * Dispatcher Action Handlers
   * - handles actions dispatched from UI components
   */
  const handlers: DispatcherActionHandler<DispatcherActions, 'type'> = {
    VOIP_END_CALL: async ({ payload: { keyholder_id } }) => {
      if (state.enabled && keyholder_id === state.active_call?.keyholder_id) {
        await voipEndCall({
          variables: {
            channel_id: state.active_call.channel_id!,
            pbx_url: state.agent.pbx_url,
            token: state.agent.token,
          },
        });
      }
    },
    VOIP_START_CALL: async ({ payload: { call_to, keyholder_id } }) => {
      if (state.enabled && !state.active_call) {
        reducer({
          payload: {
            call_to,
            keyholder_id,
            status: 'RING',
          },
          type: 'STORE_ACTIVE_CALL',
        });

        await voipStartCall({
          variables: {
            ...state.agent,
            number: call_to,
          },
        });
      }
    },
  };

  /**
   * Dispatcher provided to UI components
   */
  const dispatcher = (event: DispatcherActions) => {
    return (
      handlers[event.type] as (
        params: Extract<DispatcherActions, { type: (typeof event)['type'] }>,
      ) => Promise<any>
    )(event);
  };

  return (
    <VoipContext.Provider value={{ dispatcher, reducer, state }}>
      {children}
    </VoipContext.Provider>
  );
});

/**
 * Hook used in UI components to gain access to the Voip Context
 */
export const useVoipState = () => {
  const { dispatcher, reducer, state } = useContext(VoipContext);
  return {
    dispatcher,
    reducer,
    state,
  };
};

export default { useVoipState, VoipProvider };
