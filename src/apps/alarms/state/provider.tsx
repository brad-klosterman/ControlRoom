import { createContext, useContext } from 'react';

import { AlarmsState } from './types';
import { useFetchAlarms } from './use.fetch.alarms';
import { useAlarmMutations, UseMutateAlarmsActions } from './use.mutate.alarms';

const _notImplementedFunction = () => {
  throw new Error('Function not implemented.');
};

const default_actions: AlarmsActions = {
  acknowledgeAlarmInstructions: _notImplementedFunction,
  updateAlarmNotes: _notImplementedFunction,
  cancelAlarm: _notImplementedFunction,
  closeAlarm: _notImplementedFunction,
  dispatchAlarm: _notImplementedFunction,
  increaseAlarm: _notImplementedFunction,
  refetchAlarms: _notImplementedFunction,
};

const default_state: AlarmsState = {
  EMERGENCY: {
    alarms: [],
    unread_alarm_ids: new Set(),
  },
  ENROUTE: {
    alarms: [],
    unread_alarm_ids: new Set(),
  },
  NON_EMERGENCY: {
    alarms: [],
    unread_alarm_ids: new Set(),
  },
};

interface AlarmsActions extends UseMutateAlarmsActions {
  refetchAlarms: () => Promise<void>;
}

const AlarmsContext = createContext<{
  actions: AlarmsActions;
  state: AlarmsState;
}>({
  actions: default_actions,
  state: default_state,
});

const AlarmsProvider = ({ children }: any) => {
  const emergency_alarms_state = useFetchAlarms({
    alarm_stack: 'EMERGENCY',
  });
  const enroute_alarms_state = useFetchAlarms({ alarm_stack: 'ENROUTE' });
  const non_emergency_alarms_state = useFetchAlarms({
    alarm_stack: 'NON_EMERGENCY',
  });

  const alarm_mutations = useAlarmMutations();

  const actions: AlarmsActions = {
    ...alarm_mutations,
    refetchAlarms: async (): Promise<void> => {
      emergency_alarms_state.actions.refetchAlarms();
      enroute_alarms_state.actions.refetchAlarms();
      non_emergency_alarms_state.actions.refetchAlarms();
    },
    acknowledgeAlarmInstructions: async (args): Promise<void> => {
      await alarm_mutations.acknowledgeAlarmInstructions(args);

      // We don't know which stack the alarm is in, so we try all
      emergency_alarms_state.actions.setAlarmToRead(args.alarm_id);
      enroute_alarms_state.actions.setAlarmToRead(args.alarm_id);
      non_emergency_alarms_state.actions.setAlarmToRead(args.alarm_id);
    },
  };

  const alarm_provider_state: AlarmsState = {
    EMERGENCY: {
      alarms: emergency_alarms_state.state.alarms.data ?? [],
      unread_alarm_ids: emergency_alarms_state.state.unread_alarm_id_set,
      total: emergency_alarms_state.state.total,
    },
    ENROUTE: {
      alarms: enroute_alarms_state.state.alarms.data ?? [],
      unread_alarm_ids: enroute_alarms_state.state.unread_alarm_id_set,
      total: enroute_alarms_state.state.total,
    },
    NON_EMERGENCY: {
      alarms: non_emergency_alarms_state.state.alarms.data ?? [],
      unread_alarm_ids: non_emergency_alarms_state.state.unread_alarm_id_set,
      total: non_emergency_alarms_state.state.total,
    },
  };

  return (
    <AlarmsContext.Provider value={{ state: alarm_provider_state, actions }}>
      {children}
    </AlarmsContext.Provider>
  );
};

const useAlarmsState = () => {
  const { actions, state } = useContext(AlarmsContext);

  return {
    actions,
    state,
  };
};

export { AlarmsProvider, useAlarmsState };
