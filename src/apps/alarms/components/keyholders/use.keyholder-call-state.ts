import { useMutation } from '@apollo/client';
import {
  ALARM_KEYHOLDER_LOG_FRAGMENT,
  LOG_KEYHOLDER_CALL_DOCUMENT,
  PROPERTY_KEYHOLDER,
} from 'src/apollo/codegen/graphql';
import {
  KeyholderCallState,
  determineKeyholderCallState,
  getMostRecentCallLogForKeyholder,
} from './utils';
import { useEffect, useState } from 'react';

interface KeyholderCallStateMap {
  [keyholder_id: number]: KeyholderCallState;
}

interface KeyholderCallStateProps {
  alarm_id: number;
  keyholders: PROPERTY_KEYHOLDER[];
  keyholder_logs: ALARM_KEYHOLDER_LOG_FRAGMENT[];
}

const useKeyholderCallState = ({
  alarm_id,
  keyholders,
  keyholder_logs,
}: KeyholderCallStateProps) => {
  const [keyholder_call_state_map, setKeyholderStateMap] =
    useState<KeyholderCallStateMap>({});
  const [log_keyholder_call] = useMutation(LOG_KEYHOLDER_CALL_DOCUMENT);

  const getKeyholderCallState = (keyholder_id: number): KeyholderCallState => {
    return keyholder_call_state_map[keyholder_id] ?? 'unknown';
  };

  const updateStateMap = (
    keyholder_id: number,
    new_call_state: KeyholderCallState,
  ): void => {
    const updated_call_state_map = { ...keyholder_call_state_map };
    updated_call_state_map[keyholder_id] = new_call_state;
    setKeyholderStateMap(updated_call_state_map);
  };

  useEffect(() => {
    if (!keyholders?.length) {
      return;
    }

    const new_call_state_map: KeyholderCallStateMap = {};
    for (const keyholder of keyholders) {
      const latest_log = getMostRecentCallLogForKeyholder(
        keyholder,
        keyholder_logs,
      );
      const keyholder_state = determineKeyholderCallState(latest_log);
      new_call_state_map[keyholder.id] = keyholder_state;
    }
    setKeyholderStateMap(new_call_state_map);
  }, [keyholder_logs.length]);

  const updateKeyholderLog = async (params: {
    keyholder_id: number;
    call_state: KeyholderCallState;
  }): Promise<{
    password_correct?: boolean;
  }> => {
    if (params.call_state === 'unknown') {
      return {};
    }

    let keyholder_was_reached = false;
    let password_verified = false;

    if (params.call_state === 'answered-password-correct') {
      keyholder_was_reached = true;
      password_verified = true;
    }

    if (params.call_state === 'answered-password-incorrect') {
      keyholder_was_reached = true;
    }

    try {
      const log_response = await log_keyholder_call({
        variables: {
          alarm_id: alarm_id,
          keyholder_id: params.keyholder_id,
          keyholder_was_reached,
          password_verified,
        },
      });

      if (!log_response.data) {
        throw 'Keyholder log mutation had bad data';
      }

      updateStateMap(params.keyholder_id, params.call_state);
      if (password_verified) {
        return {
          password_correct: true,
        };
      }
    } catch (error: any) {
      console.error(error);
    }

    return {};
  };

  return {
    getKeyholderCallState,
    updateKeyholderLog,
  };
};

export { useKeyholderCallState };
