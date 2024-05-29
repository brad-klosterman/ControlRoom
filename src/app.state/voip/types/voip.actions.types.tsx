import { AGENT_VOIP } from 'codegen/graphql';
import { VoipActiveCall } from 'src/app.state/voip/types/voip.state.types';

/**
 * Reducer Actions
 * - Local Voip state
 */

type StoreAgentVoip = {
  payload: { voip: Omit<AGENT_VOIP, 'enabled'>; enabled: boolean };
  type: 'STORE_AGENT_VOIP';
};

type StoreActiveCall = {
  payload: VoipActiveCall | undefined;
  type: 'STORE_ACTIVE_CALL';
};

export type ReducerActions = StoreAgentVoip | StoreActiveCall;

/**
 * Dispatcher Actions
 * - Yeastar API
 */
type VOIP_START_CALL = {
  payload: {
    call_to: string;
    keyholder_id: number;
  };
  type: 'VOIP_START_CALL';
};

type VOIP_END_CALL = {
  payload: {
    keyholder_id: number;
  };
  type: 'VOIP_END_CALL';
};

export type DispatcherActions = VOIP_START_CALL | VOIP_END_CALL;

/**
 * Action Handlers
 */
export type ReducerActionHandler<T, P extends keyof T> = {
  [K in T[P] & string]: (
    payload: Extract<ReducerActions, Record<P, K>>,
  ) => void;
};

export type DispatcherActionHandler<T, P extends keyof T> = {
  [K in T[P] & string]: (
    payload: Extract<DispatcherActions, Record<P, K>>,
  ) => void;
};
