import { isFunction, isNil } from 'auxiliary';

export function match<
  TValue extends string | number = string,
  TReturnValue = unknown,
>(
  value: TValue,
  lookup: Record<TValue, TReturnValue | ((...arg: any[]) => TReturnValue)>,
  ...args: any[]
): TReturnValue {
  const handler = lookup[value];

  if (!isNil(handler)) {
    return isFunction(handler) ? handler(...args) : handler;
  }

  const error = new Error(
    `Tried to handle "${value}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      lookup,
    )
      .map(key => `"${key}"`)
      .join(', ')}.`,
  );

  if (Error.captureStackTrace) {
    Error.captureStackTrace(error, match);
  }

  throw error;
}
