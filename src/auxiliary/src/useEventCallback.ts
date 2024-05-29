// Copied from https://github.com/react-restart/hooks/blob/master/src/useEventCallback.ts.

import { useCallback } from 'react';

import { isNil } from './assertions';
import { useCommittedRef } from './useCommittedRef';

export function useEventCallback<TCallback extends (...args: any[]) => void>(
  callback: TCallback | null,
): TCallback {
  const ref = useCommittedRef(callback);

  return useCallback(
    (...args: any[]) => {
      if (!isNil(ref.current)) {
        ref.current(...args);
      }
    },
    [ref],
  ) as any;
}
