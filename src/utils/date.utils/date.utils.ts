/**
 * daysInMonth
 * @param month
 * @param year
 */
import { DateTime } from 'luxon';

export function daysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

/**
 * daysUntil
 * @param first_date
 * @param second_date
 */
export function daysUntil(first_date: Date, second_date: Date): number {
  return Math.round(
    (second_date.getTime() - first_date.getTime()) / (1000 * 60 * 60 * 24),
  );
}

/**
 * isValidDate
 * @param date
 */
export function isValidDate(date: any): boolean {
  return (
    typeof date === 'object' &&
    date !== null &&
    typeof date.getTime === 'function' &&
    !isNaN(date)
  );
}

/**
 * generateDate: yyyy/mm/dd
 * @param year
 * @param month
 * @param day
 */
export const generateDate = (year: number, month: number, day: number) => {
  const formatted_month = month < 10 ? `0${month}` : month;
  const formatted_day = day < 10 ? `0${day}` : day;

  return year + '-' + formatted_month + '-' + formatted_day;
};

export const dateToString = (date: Date): string => {
  const date_year = date.getFullYear();
  let date_month: string | number = date.getMonth() + 1;
  let date_day: string | number = date.getDate();

  date_month = date_month < 10 ? `0${date_month}` : date_month;
  date_day = date_day < 10 ? `0${date_day}` : date_day;

  return date_year + '-' + date_month + '-' + date_day;
};

/**
 * generateValidDate
 * @param year
 * @param month
 * @param day
 */
export const generateValidDate = (
  year: number,
  month: number,
  day: number,
): { day: number; month: number; year: number } => {
  let new_year = year;
  let new_month = month;
  let new_day = day;

  if (month > 12) {
    // check if it is new year
    new_month = month - 12;
    new_year = year + 1;
    // check if day exist in new month
    const days_in_new_month = daysInMonth(new_month, new_year);

    if (days_in_new_month < new_day) {
      // if new_day does not exist make the last day of the new month
      new_day = days_in_new_month;
    }
  } else {
    // check if day exist in month
    const days_in_new_month = daysInMonth(new_month, new_year);

    if (days_in_new_month < new_day) {
      // make the last day of the month
      new_day = days_in_new_month;
    }
  }

  return { day: new_day, month: new_month, year: new_year };
};

const dayInMonthExists = (date: Date): boolean => {
  const date_year = date.getFullYear();
  const date_month = date.getMonth() + 1; // + 1 because Jan = 0
  const date_day = date.getDate();

  const days_in_month = daysInMonth(date_month, date_year);

  return days_in_month >= date_day;
};

const lastDateOfMonth = (date: Date): Date => {
  const date_year = date.getFullYear();
  const date_month = date.getMonth() + 1; // + 1 because Jan = 0

  const days_in_month = daysInMonth(date_month, date_year);

  return new Date(date_year, date_month, days_in_month);
};

/**
 * addMonthsToDate
 * @param start_date
 * @param number_of_months
 */
export function addMonthsToDate(
  start_date: Date,
  number_of_months: number,
): Date {
  const new_date = new Date(start_date);

  new_date.setMonth(new_date.getMonth() + Number(number_of_months));

  if (dayInMonthExists(new_date)) {
    return new_date;
  } else {
    return lastDateOfMonth(new_date);
  }
}

export function getLastWeeksDate() {
  const now = new Date();

  return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
}

export function isDateBetween(start_date: string, end_date: string) {
  const start = Date.parse(start_date);
  const d = Date.now();
  const end = Date.parse(end_date);

  return d.valueOf() >= start.valueOf() && d.valueOf() <= end.valueOf();
}

export const getLuxonDate = (
  date_string: string | null | undefined,
): string => {
  if (!date_string) return '-';

  const luxon_date = DateTime.fromISO(date_string);

  if (!luxon_date.isValid) return '-';

  return luxon_date.toLocaleString(DateTime.DATE_FULL).toUpperCase();
};

export function isDateInTheFuture(date: Date | string) {
  const date_value = typeof date === 'string' ? new Date(date) : date;

  const today = new Date();

  return date_value > today;
}

export function isDateInThePast(date: Date | string) {
  const date_value = typeof date === 'string' ? new Date(date) : date;

  const today = new Date();

  return date_value < today;
}
