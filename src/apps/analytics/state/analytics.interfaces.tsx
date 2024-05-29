/**
 * State
 */
import { DateRangeInput } from 'components/ui/DateRange/DateRange.types';

export interface BarChartProps {
  burger: number;
  type: string;
  label: string;
}

export interface IFetchedCompanyStats {
  total_alarms: number;
  total_true_alarms: number;
  total_false_alarms: number;
  total_sms_sent: number;
  total_answered_calls: number;
  total_unanswered_calls: number;
  total_push_notifications_sent: number;
  false_alarms_percent: number;
  positive_alarms_percent: number;
}

export interface IFetchedSystemStatistics {
  agents_online: number;
  agents_total: number;
  active_clients: number;
  inactive_clients: number;
  responders_operational: number;
  responders_total: number;
  user_app_installed: number;
}
export interface IFetchedAverageAlarmTimes {
  close_times: number;
  save_times: number;
  dispatch_times: number;
  response_times: number;
  acknowledge_times: number;
  call_times: number;
  arrival_times: number;
  clear_times: number;
  total_alarms: number;
  late_alarms: number;
  total_canceled_control_room: number;
  total_canceled_user_app: number;
  total_system_generated_allocated: number;
  total_history_allocated: number;
  total_non_emergency_allocated: number;
  total_emergency_allocated: number;
  total_phone_in_allocated: number;
}

export interface ICallsData {
  color: string;
  id: string;
  label: string;
  value: number;
}

export interface AnalyticsState {
  date_range: DateRangeInput;
}

/**
 * Dispatcher
 */

export interface ChangeDateRange {
  payload: DateRangeInput;
  type: 'CHANGE_DATE_RANGE';
}

export type DispatcherActions = ChangeDateRange;

export type DispatchProvider<A> = (value: A) => any;

/**
 * Reducer
 */

export interface StoreDateRange {
  payload: DateRangeInput;
  type: 'STORE_DATE_RANGE';
}

export type ReducerActions = StoreDateRange;

export type DispatchReducer<A> = (value: A) => void;

export type ActionHandlers<T, P extends keyof T> = {
  [K in T[P] & string]: (
    payload: Extract<DispatcherActions, Record<P, K>>,
  ) => void;
};
