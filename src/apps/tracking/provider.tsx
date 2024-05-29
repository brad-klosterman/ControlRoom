/* eslint-disable sort-keys-fix/sort-keys-fix */

import { memo, ReactNode, useContext, useMemo, useState } from 'react';

import useLiveResponders from 'apps/admin/user_management/responders/useLiveResponders';
import { useAlarmsState } from 'apps/alarms/state/provider';
import { prepareAlarmData } from 'apps/tracking/alarms.data';
import {
  Actions,
  AlarmData,
  Context,
  Dispatch,
  MapTheme,
} from 'apps/tracking/types';
import { LiveTrackedResponder } from '../admin/user_management/responders/responder-tracking';

const TrackingMapProvider = (props: { children: ReactNode }) => {
  const {
    state: { EMERGENCY, ENROUTE },
  } = useAlarmsState();

  const emergency_alarms = useMemo<AlarmData[]>(() => {
    return prepareAlarmData(EMERGENCY.alarms);
  }, [EMERGENCY.total]);

  const enroute_alarms = useMemo<AlarmData[]>(() => {
    return prepareAlarmData(ENROUTE.alarms);
  }, [ENROUTE.alarms]);

  const { live_responders } = useLiveResponders();

  // STATE
  const [map_theme] = useState<MapTheme>('dark');
  const [traffic_layer, setTrafficLayer] = useState(false);
  const [selected_alarm, setSelectedAlarm] = useState<AlarmData | null>(null);
  const [selected_responder, setSelectedResponder] =
    useState<LiveTrackedResponder | null>(null);

  // MAP ACTIONS
  const actions: Actions = {
    SELECT_RESPONDER: async params => {
      if (selected_responder?.id === params?.responder?.id) {
        setSelectedResponder(null);
      } else {
        setSelectedResponder(params.responder);
      }
    },
    SELECT_ALARM: async params => {
      if (selected_alarm?.id === params?.alarm?.id) {
        setSelectedAlarm(null);
      } else {
        setSelectedAlarm(params.alarm);
      }
    },
    TOGGLE_TRAFFIC_LAYER: async () => {
      setTrafficLayer(prev => !prev);
    },
  };

  const dispatch: Dispatch = <
    A extends keyof Actions,
    TParams extends Actions[A] extends (p: infer P) => any ? P : never,
  >(
    action: A,
    params: TParams,
  ) => {
    return (actions[action] as (params: TParams) => Promise<any>)(params);
  };

  return (
    <Context.Provider
      value={{
        dispatch,
        selected_alarm,
        selected_responder,
        emergency_alarms,
        enroute_alarms,
        online_responders: live_responders,
        map_theme,
        traffic_layer,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export const useTrackingMap = () => {
  return useContext(Context);
};

export default memo(TrackingMapProvider);
