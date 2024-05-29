import { DependencyList, useEffect } from 'react';

import useTimeout from './useTimeout';

export default function useDebounce(
  callback: (...props: any) => any,
  delay = 0,
  deps: DependencyList = [],
) {
  const { cancel, isReady, reset } = useTimeout(callback, delay);
  useEffect(reset, [...deps, reset]);
  return { cancel, isReady };
}
