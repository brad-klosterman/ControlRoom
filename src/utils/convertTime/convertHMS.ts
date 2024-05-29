export const convertHMS = (d: number): string | null => {
  if (d) {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor((d % 3600) / 60);
    const s = Math.floor((d % 3600) % 60);

    const hDisplay = h < 10 ? `0${h}` : `${h}`;
    const mDisplay = m < 10 ? `0${m}` : `${m}`;
    const sDisplay = s < 10 ? `0${s}` : `${s}`;
    return hDisplay + ':' + mDisplay + ':' + sDisplay;
  }

  return null;
};

export const differenceHMS = (
  start: string | null | undefined,
  end: string | null | undefined
): string | null => {
  if (start && end) {
    const start_date = new Date(start);
    const end_date = new Date(end);

    const ms = end_date.getTime() - start_date.getTime();

    const seconds = Math.round(ms / 1000);

    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);

    const hDisplay = h < 10 ? `0${h}` : `${h}`;
    const mDisplay = m < 10 ? `0${m}` : `${m}`;
    const sDisplay = s < 10 ? `0${s}` : `${s}`;
    return hDisplay + ':' + mDisplay + ':' + sDisplay;
  }

  return null;
};
