import { useEffect, useState } from 'react';

import { isDateInThePast, isValidDate } from 'utils';

export function isValidDateRange(params: {
  start_date: Date | string;
  end_date: Date | string;
}) {
  const start_date =
    typeof params.start_date === 'string'
      ? new Date(params.start_date)
      : params.start_date;
  const end_date =
    typeof params.end_date === 'string'
      ? new Date(params.end_date)
      : params.end_date;

  if (isValidDate(start_date) && isValidDate(end_date)) {
    return end_date > start_date;
  }

  return false;
}

export const useValidDateRange = ({
  end_date,
  onEndDateInPast,
  onInvalidRange,
  start_date,
}: {
  start_date: Date | string | null | undefined;
  end_date: Date | string | null | undefined;
  onInvalidRange(): void;
  onEndDateInPast?(): void;
}): boolean | undefined => {
  const [valid, setValid] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (start_date && end_date) {
      const valid_range = isValidDateRange({
        start_date,
        end_date,
      });

      if (!valid_range) {
        onInvalidRange();
      }

      setValid(valid_range);
    } else {
      setValid(undefined);
    }

    if (end_date) {
      const end_date_in_past = isDateInThePast(end_date);

      if (end_date_in_past && onEndDateInPast) {
        onEndDateInPast();
      }
    }
  }, [start_date, end_date]);

  return valid;
};
