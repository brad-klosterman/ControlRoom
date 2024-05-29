const formatNumberForDate = (number: number) =>
  number < 10 ? '0' + number : number;

export const formatDate = (date: Date | string) => {
  const date_value = typeof date === 'string' ? new Date(date) : date;

  const month = formatNumberForDate(date_value.getMonth() + 1);
  const day = formatNumberForDate(date_value.getDate());
  const year = date_value.getFullYear();
  return year + '-' + month + '-' + day;
};

export const formatYearMonthString = (date: Date | string) => {
  const date_value = typeof date === 'string' ? new Date(date) : date;

  const month = formatNumberForDate(date_value.getMonth() + 1);
  const year = date_value.getFullYear();
  return year + '-' + month;
};

export const extractMonth = (date: Date | string): number => {
  const date_value = typeof date === 'string' ? new Date(date) : date;

  return date_value.getMonth() + 1;
};

export const extractYearMonth = (
  date: Date | string,
): { year: string; month: string; day: string } => {
  const date_value = typeof date === 'string' ? new Date(date) : date;

  const month = formatNumberForDate(date_value.getMonth() + 1);
  const year = date_value.getFullYear();
  return { year: year.toString(), month: month.toString(), day: '1' };
};
