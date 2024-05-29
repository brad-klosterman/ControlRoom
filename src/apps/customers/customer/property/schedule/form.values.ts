import {
  PROPERTY_PROFILE_SCHEDULE_FRAGMENT,
  PROPERTY_TIME_SCHEDULE_PARAMS,
} from 'codegen/graphql';

export const default_time_schedule_fields: Omit<
  PROPERTY_TIME_SCHEDULE_PARAMS,
  'day'
> = {
  close_end: '',
  close_start: '',
  open_end: '',
  open_start: '',
};
export const default_schedule: PROPERTY_TIME_SCHEDULE_PARAMS[] = [
  {
    day: 'MONDAY',
    ...default_time_schedule_fields,
  },
  {
    day: 'TUESDAY',
    ...default_time_schedule_fields,
  },
  {
    day: 'WEDNESDAY',
    ...default_time_schedule_fields,
  },
  {
    day: 'THURSDAY',
    ...default_time_schedule_fields,
  },
  {
    day: 'FRIDAY',
    ...default_time_schedule_fields,
  },
  {
    day: 'SATURDAY',
    ...default_time_schedule_fields,
  },
  {
    day: 'SUNDAY',
    ...default_time_schedule_fields,
  },
];
