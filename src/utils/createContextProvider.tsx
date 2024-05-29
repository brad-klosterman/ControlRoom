import React from 'react';

/**
 * createContextProvider
 * @param id
 *
 * Allows for creating context without default params
 * Solves the problem of typing out default values
 *
 */
const createContextProvider = <T,>(
  id?: string,
): [React.Context<T | null>, () => T] => {
  const context = React.createContext<T | null>(null);

  return [
    context,
    (): T => {
      const context_value = React.useContext(context);

      if (context_value === null) {
        throw new Error(`${id} Context value is null`);
      }

      return context_value;
    },
  ];
};

export { createContextProvider };
