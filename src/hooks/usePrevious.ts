import { useEffect, useRef } from 'react';

export default function usePrevious(value: any, initialValue: any) {
  const ref = useRef(initialValue);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
