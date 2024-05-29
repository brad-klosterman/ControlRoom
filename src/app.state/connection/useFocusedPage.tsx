import { useEffect, useState } from 'react';
import { useEventListener } from 'utils';

const useFocusedPage = (props: {
  logout(): void;
  time_limit: number;
  skip: boolean;
}) => {
  const [lost_focus_timer, setLostFocusTimer] = useState<number | null>(null);
  const [lost_focus, setLostFocus] = useState(false);

  useEffect(() => {
    if (lost_focus) {
      const interval = setInterval(() => {
        setLostFocusTimer(seconds =>
          seconds !== null ? seconds - 1 : props.time_limit,
        );
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setLostFocusTimer(null);
      return;
    }
  }, [lost_focus]);

  useEffect(() => {
    if (lost_focus_timer === 0) {
      props.logout();
    }
  }, [lost_focus_timer]);

  const handleVisibilityChange = () => {
    if (!props.skip) {
      setLostFocus(document.visibilityState === 'hidden');
    }
  };

  useEventListener('visibilitychange', handleVisibilityChange);
};

export default useFocusedPage;
