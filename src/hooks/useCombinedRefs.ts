import { useCallback } from 'react';
import type { Ref } from 'react';

export default function useCombinedRefs<T>(...refs: Array<Ref<T>>): Ref<T> {
  return useCallback(
    (element: T) => {
      refs.forEach(ref => {
        if (!ref) return;
        if (typeof ref === 'function') ref(element);
        // eslint-disable-next-line no-param-reassign
        else (ref as any).current = element;
      });
    },
    [...refs],
  );
}
