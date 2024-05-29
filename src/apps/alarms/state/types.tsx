/* eslint-disable sort-keys-fix/sort-keys-fix */
import { CORE_ALARM_FRAGMENT } from 'codegen/graphql';

/**
 * Alarms State
 *
 */
export interface AlarmsState {
  EMERGENCY: StackContent;
  ENROUTE: StackContent;
  NON_EMERGENCY: StackContent;
}

export interface StackContent {
  alarms: CORE_ALARM_FRAGMENT[];
  unread_alarm_ids: Set<number>;
  total?: number;
}
