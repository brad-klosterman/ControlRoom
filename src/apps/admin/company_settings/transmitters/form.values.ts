import { TRANSMITTER_STATUS } from 'codegen/graphql';

export const TRANSMITTER_STATUS_OPTIONS: {
  label: string;
  value: TRANSMITTER_STATUS;
}[] = [
  {
    label: 'IN STOCK',
    value: 'IN_STOCK',
  },
  {
    label: 'IN USE (ACTIVE)',
    value: 'IN_USE',
  },
  {
    label: 'LOST',
    value: 'LOST',
  },
  {
    label: 'SENT IN FOR REPAIRS',
    value: 'IN_REPAIRS',
  },
  {
    label: 'UNKNOWN CUSTOMER',
    value: 'UNKNOWN_CUSTOMER',
  },
];

export const TRANSMITTER_SET_NAMES_OPTIONS = [
  {
    label: 'CALLME',
    value: 'CALLME',
  },
  {
    label: 'DEEP',
    value: 'DEEP',
  },
  {
    label: 'KP',
    value: 'KP',
  },
  {
    label: 'PID-BL',
    value: 'PID-BL',
  },
  {
    label: 'PID-O/C',
    value: 'PID-O/C',
  },
  {
    label: 'PID-VS',
    value: 'PID-VS',
  },
  {
    label: 'RDC-VS',
    value: 'RDC-VS',
  },
  {
    label: 'SIA',
    value: 'SIA',
  },
  {
    label: '4X2',
    value: '4X2',
  },
  {
    label: 'VIDEOFIED',
    value: 'VIDEOFIED',
  },
  {
    label: 'AVL',
    value: 'AVL',
  },
  {
    label: 'UNKNOWN',
    value: 'UNKNOWN',
  },
];

export const TEST_CYCLE_FAILED_TO_TEST_OPTIONS = [
  {
    label: '15 minutes',
    value: 0.25,
  },
  {
    label: '1 hour',
    value: 1.0,
  },
  {
    label: '8 hours',
    value: 8.0,
  },
  {
    label: '12 hours',
    value: 12.0,
  },
  {
    label: '24 hours',
    value: 24.0,
  },
  {
    label: '48 hours',
    value: 48.0,
  },
];

export const ZONE_TESTING_TIMES = [
  {
    label: '1 Hour',
    value: '60',
  },
  {
    label: '8 Hours',
    value: '480',
  },
  {
    label: '12 Hours',
    value: '720',
  },
  {
    label: '24 Hours',
    value: '1440',
  },
];
