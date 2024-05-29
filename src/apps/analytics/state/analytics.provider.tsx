/* eslint-disable sort-keys-fix/sort-keys-fix */

import { createContext, memo, Reducer, useContext, useReducer } from 'react';

import { default_state } from './analytics.defaults';
import { ReducerActions, AnalyticsState } from './analytics.interfaces';
import { analyticsReducer } from './analytics.reducer';

export const AnalyticsContext = createContext<{
  state: AnalyticsState;
}>({
  state: default_state,
});

export const AnalyticsProvider = memo(({ children }: any) => {
  const [state] = useReducer<Reducer<AnalyticsState, ReducerActions>>(
    analyticsReducer,
    default_state,
  );

  return (
    <AnalyticsContext.Provider value={{ state }}>
      {children}
    </AnalyticsContext.Provider>
  );
});

export const useAnalyticsState = () => {
  const { state } = useContext(AnalyticsContext);

  return {
    state,
  };
};
