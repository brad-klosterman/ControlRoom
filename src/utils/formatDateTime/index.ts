import { DateTime } from 'luxon';

import { Maybe } from 'codegen/graphql';

const DEFAULT_TIME_ZONE = 'Africa/Johannesburg';

interface DateRange {
  start: DateTime;
  end: DateTime;
}

/**
 * Create a date range for an entire day in the specified time zone.
 *
 * @param simple_date Date string in the format of "yyyy-MM-dd"
 * @param time_zone The time zone to create this dates in (E.G. – "America/New_York")
 */
const createFullDayDateRange = (
  simple_date: string,
  time_zone: string,
): DateRange | undefined => {
  const start = DateTime.fromISO(simple_date, {
    zone: time_zone,
  }).set({ hour: 0, minute: 0, second: 0 });
  const end = DateTime.fromISO(simple_date, {
    zone: time_zone,
  }).set({ hour: 23, minute: 59, second: 59 });

  if (!start.isValid || !end.isValid) {
    return undefined;
  }

  return {
    start,
    end,
  };
};

/**
 * Get Start of Day
 */
const getStartOfDay = (
  simple_date: string | null | undefined,
  time_zone: string | null | undefined,
): DateTime | undefined => {
  if (!simple_date) {
    return undefined;
  }

  const date = DateTime.fromISO(simple_date, {
    zone: time_zone || DEFAULT_TIME_ZONE,
  }).set({ hour: 0, minute: 0, second: 0 });

  if (!date.isValid) {
    return undefined;
  }

  return date;
};

/**
 * Get End of Day
 */
const getEndOfDay = (
  simple_date: string | null | undefined,
  time_zone: string | null | undefined,
): DateTime | undefined => {
  if (!simple_date) {
    return undefined;
  }

  const date = DateTime.fromISO(simple_date, {
    zone: time_zone || DEFAULT_TIME_ZONE,
  }).set({ hour: 23, minute: 59, second: 59 });

  if (!date.isValid) {
    return undefined;
  }

  return date;
};

const formatDateTimeToUtcIso = (
  date: DateTime | undefined,
): string | undefined => {
  return date?.toUTC().toISO() ?? undefined;
};

const getStartOfDayUtcIso = (
  simple_date: string | null | undefined,
  time_zone: string | null | undefined,
): string | undefined => {
  return formatDateTimeToUtcIso(getStartOfDay(simple_date, time_zone));
};

const getEndtOfDayUtcIso = (
  simple_date: string | null | undefined,
  time_zone: string | null | undefined,
): string | undefined => {
  return formatDateTimeToUtcIso(getEndOfDay(simple_date, time_zone));
};

const getLocaleDateTimeString = (
  date_string: string | null | undefined,
  options?: {
    time_zone?: string;
  },
): string | undefined => {
  if (!date_string) {
    return undefined;
  }

  const date = DateTime.fromISO(date_string, {
    zone: options?.time_zone || DEFAULT_TIME_ZONE,
  });

  if (!date.isValid) {
    return undefined;
  }

  return date.toLocaleString(DateTime.DATETIME_MED);
};

enum FormatOptions {
  'date',
  'dateTime',
  'time',
}

interface DateTimeParams {
  date: Maybe<string | number | Date> | undefined;
  format?: keyof typeof FormatOptions;
  locale: string;
}

function formatDateTime({ date, format = 'date', locale }: DateTimeParams) {
  if (!date) {
    return null;
  }

  try {
    const event = new Date(date);
    const eventDate = event.toLocaleDateString(locale).replaceAll('/', '-');
    const eventTime = event.toLocaleTimeString(locale);

    if (format === 'date') {
      return eventDate;
    }

    if (format === 'time') {
      return eventTime;
    }

    return `${eventDate} ${eventTime}`;
  } catch (e) {
    return null;
  }
}

/**
 * Create a time in the local timezone (i.e. 06:00 -> 04:00 if UTC+2)
 *
 * @param time Time string in the format of "XX:YY"
 * @param time_zone The time zone to create this dates in (E.G. – "America/New_York")
 */
const convertToUtcTimeString = (
  time: string,
  time_zone: string,
): string | undefined => {
  const date_in_utc = DateTime.fromISO(time, {
    zone: time_zone,
  }).toUTC();

  if (!date_in_utc.isValid) {
    return undefined;
  }

  return date_in_utc.toFormat('HH:mm');
};

const getRelativeDateString = (
  date_string: string | null | undefined,
  options?: {
    time_zone?: string;
  },
): string | undefined => {
  if (!date_string) {
    return undefined;
  }

  const converted_date_time = DateTime.fromISO(date_string);

  if (!converted_date_time.isValid) {
    return undefined;
  }

  return converted_date_time.toRelative() ?? undefined;
};

export type { DateRange };
export {
  createFullDayDateRange,
  formatDateTime,
  convertToUtcTimeString,
  getStartOfDay,
  getEndOfDay,
  formatDateTimeToUtcIso,
  getStartOfDayUtcIso,
  getEndtOfDayUtcIso,
  getLocaleDateTimeString,
  getRelativeDateString,
};
