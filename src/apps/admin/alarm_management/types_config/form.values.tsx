import {
  AlarmTypePriority,
  AlarmTypeStackAllocation,
} from 'apps/admin/alarm_management/types_config/types';
import { CORE_ALARM_TYPE_FRAGMENT } from 'codegen/graphql';

export const ALARM_TYPE_STACK_OPTIONS: {
  label: string;
  value: AlarmTypeStackAllocation;
}[] = [
  {
    label: 'EMERGENCY',
    value: 'EMERGENCY',
  },
  {
    label: 'HISTORY',
    value: 'HISTORY',
  },
  {
    label: 'NON EMERGENCY',
    value: 'NON_EMERGENCY',
  },
];

export const ALARM_TYPE_PRIORITY_OPTIONS: {
  label: string;
  value: AlarmTypePriority;
}[] = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
  { label: '6', value: 6 },
  { label: '7', value: 7 },
  { label: '8', value: 8 },
  { label: '9', value: 9 },
];

export const getAlarmTypeStackAllocation = (
  alarm_type: CORE_ALARM_TYPE_FRAGMENT,
): AlarmTypeStackAllocation => {
  return alarm_type?.non_emc
    ? 'NON_EMERGENCY'
    : alarm_type.history
    ? 'HISTORY'
    : 'EMERGENCY';
};
