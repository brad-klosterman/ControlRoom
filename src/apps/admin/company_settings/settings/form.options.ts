import { ALARM_STACK } from 'codegen/graphql';

export interface ALARM_STACK_SELECT {
  label: string;
  value: ALARM_STACK;
}

export const ALARM_STACK_OPTIONS: ALARM_STACK_SELECT[] = [
  {
    label: 'EMERGENCY ALARMS',
    value: 'EMERGENCY',
  },
  {
    label: 'ENROUTE ALARMS',
    value: 'ENROUTE',
  },
  {
    label: 'NON EMERGENCY ALARMS',
    value: 'NON_EMERGENCY',
  },
];
