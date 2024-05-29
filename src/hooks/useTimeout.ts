import { useCallback, useEffect, useRef } from 'react';

export default function useTimeout(
  callback: (...props: any) => any,
  delay = 0,
) {
  const isReady = useRef(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const callbackRef = useRef(callback);

  const cancel = useCallback(() => {
    isReady.current = false;
    if (timeout.current) clearTimeout(timeout.current);
  }, []);

  const set = useCallback(() => {
    cancel();

    timeout.current = setTimeout(() => {
      isReady.current = true;
      callbackRef.current();
    }, delay);
  }, [cancel, delay]);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    set();
    return cancel;
  }, [cancel, set]);

  return {
    cancel,
    isReady: isReady.current,
    reset: set,
  };
}
