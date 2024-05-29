import { createContext } from 'react';

import { DispatcherActions, ReducerActions } from './types/voip.actions.types';
import { VoipState } from './types/voip.state.types';

export type Dispatcher<A> = (value: A) => void | Promise<any>; // to do dispatcher response type
export type Reducer<A> = (value: A) => void;

export const INITIAL_VOIP_STATE: VoipState = {
  active_call: undefined,
  agent: {
    extension: '',
    pbx_url: '',
    token: '',
  },
  enabled: false,
};

export const VoipContext = createContext<{
  dispatcher: Dispatcher<DispatcherActions>;
  reducer: Reducer<ReducerActions>;
  state: VoipState;
}>({
  dispatcher: async () => undefined,
  reducer: () => undefined,
  state: INITIAL_VOIP_STATE,
});
