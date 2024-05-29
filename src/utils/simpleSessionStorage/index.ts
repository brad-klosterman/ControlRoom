const _safeJsonParse = <T>(data: string | null | undefined): T | undefined => {
  if (data === null || data === undefined) {
    return undefined;
  }

  try {
    return JSON.parse(data);
  } catch {
    return undefined;
  }
};

/**
 * A wrapper for making session storage opinionated and simple.
 *
 * Data can be sent in directly without needing to be parsed and
 * can be removed by simply sending undefined.
 *
 * Data can also be safely and easily accessed without needing to
 * do any parsing.
 */
namespace SimpleSessionStorage {
  /**
   * Adds or removes an item into session storage.
   * If the data is not undefined, then it will be added via JSON stringify.
   * IFF the data is undefined, then the item will be removed instead.
   *
   * @param key The key in session storage
   * @param data The data to be JSON stringified or stored. Undefined will remove the item.
   * @returns The data or undefined if not present.
   */
  export const setItem = <T>(key: string, data: T) => {
    if (data === undefined) {
      sessionStorage.removeItem(key);
      return;
    }

    sessionStorage.setItem(key, JSON.stringify(data));
  };

  /**
   * Finds and JSON parses the item.
   * If the data is absent or corrupt, undefined is returned.
   *
   * @param key The key of the item
   * @returns The item if found or undefined
   */
  export const getItem = <T>(key: string): T | undefined => {
    const item = sessionStorage.getItem(key);
    return _safeJsonParse(item);
  };
}

export { SimpleSessionStorage };
