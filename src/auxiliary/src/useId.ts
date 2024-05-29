import { useId as useAutoId } from 'react';

import { isNil } from './assertions';

// This utility will initially trigger a re-render.
export function useId(userId?: string, prefix?: string) {
  // BK EDIT userId to userId?
  const uuid = useAutoId();

  // Unfortunatelly, providing a user id to useAutoId, doesn't always works, sometimes the user id is ignored.
  // To fix this, we handle it manually.
  if (!isNil(userId)) {
    return userId;
  }

  return !isNil(prefix) ? `${prefix}-${uuid}` : uuid;
}
