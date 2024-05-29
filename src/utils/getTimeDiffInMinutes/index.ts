export const getTimeDiffInMinutes = (
  start: string | null | undefined,
  end: string | null | undefined
) => {
  if (start && end) {
    const start_date = new Date(start);
    const end_date = new Date(end);

    const one_second = 1000;

    const difference_in_milliSecs = end_date.getTime() - start_date.getTime();

    const difference_in_seconds = Math.round(
      difference_in_milliSecs / one_second
    );

    const minutes = Math.floor(difference_in_seconds / 60);
    const seconds = difference_in_seconds - minutes * 60;

    return {
      minutes,
      seconds
    };
  }

  return null;
};
