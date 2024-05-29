import { createContext } from 'react';

import { ALARM_STATE } from 'codegen/graphql';
import { GoogleMapCoordinates } from 'context/google-maps.provider';
import { LiveTrackedResponder } from '../admin/user_management/responders/responder-tracking';

export type Actions = {
  SELECT_RESPONDER(params: {
    responder: LiveTrackedResponder | null;
  }): Promise<void>;
  SELECT_ALARM(params: { alarm: AlarmData | null }): Promise<void>;
  TOGGLE_TRAFFIC_LAYER(): Promise<void>;
};

export type AlarmData = {
  id: number;
  created_at: string;
  address: string | null;
  type: string | null;
  alarm_state: ALARM_STATE;
  position: GoogleMapCoordinates | null;
};

export type MapTheme = 'dark' | 'light';

export type Dispatch = <
  A extends keyof Actions,
  TParams extends Actions[A] extends (p: infer P) => any ? P : never,
>(
  action: A,
  params: TParams,
) => Promise<any>;

export const Context = createContext<ProviderContext>({
  dispatch: async () => null,
  selected_alarm: null,
  selected_responder: null,
  emergency_alarms: [],
  enroute_alarms: [],
  online_responders: [],
  map_theme: 'dark',
  traffic_layer: false,
});

export type ProviderContext = {
  dispatch: Dispatch;
  selected_alarm: AlarmData | null;
  selected_responder: LiveTrackedResponder | null;
  emergency_alarms: AlarmData[];
  enroute_alarms: AlarmData[];
  online_responders: LiveTrackedResponder[];
  map_theme: MapTheme;
  traffic_layer: boolean;
};
