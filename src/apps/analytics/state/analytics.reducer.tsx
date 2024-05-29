import { AnalyticsState, ReducerActions } from './analytics.interfaces';

export function analyticsReducer(
  state: AnalyticsState,
  action: ReducerActions,
): AnalyticsState {
  switch (action.type) {
    case 'STORE_DATE_RANGE': {
      return { ...state, date_range: action.payload };
    }
    default:
      return state;
  }
}
