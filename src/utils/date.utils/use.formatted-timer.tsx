import { useEffect, useState } from 'react';
import { convertHMS } from 'utils';

interface FormattedTimerProps {
  onTimerEnd?: () => unknown;
}

export const useFormattedTimer = ({ onTimerEnd }: FormattedTimerProps) => {
  const [initial_total_duration, setInitialTotalDuration] = useState<
    number | null
  >(null);
  const [seconds_remaining, setSecondsRemaining] = useState<number | null>(
    null,
  );

  useEffect(() => {
    if (initial_total_duration === null) {
      setSecondsRemaining(null);
      return;
    }

    setSecondsRemaining(initial_total_duration);
    const interval = setInterval(() => {
      setSecondsRemaining(seconds => {
        if (!seconds || seconds <= 0) {
          onTimerEnd?.();
          setInitialTotalDuration(null);
          return null;
        } else {
          return seconds - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [initial_total_duration]);

  const startTimer = (minutes: number) => {
    const seconds = Math.round(minutes * 60);
    setInitialTotalDuration(seconds);
  };

  const stopTimer = () => {
    setInitialTotalDuration(null);
  };

  const getFormattedTime = (): string | null => {
    if (!seconds_remaining) {
      return null;
    }

    return convertHMS(seconds_remaining);
  };

  return {
    startTimer,
    stopTimer,
    seconds_remaining,
    formatted_time: getFormattedTime(),
  };
};
