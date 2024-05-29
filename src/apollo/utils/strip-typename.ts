export function stripTypename<T>(input: T) {
  if (!input) return input;

  const newish = { ...input };

  for (const prop in newish) {
    if (prop === '__typename') {
      delete newish[prop];
    } else if (Array.isArray(newish[prop])) {
      for (const next in newish[prop]) {
        newish[prop][next] = stripTypename(newish[prop][next]);
      }
    } else if (typeof newish[prop] === 'object') {
      newish[prop] = stripTypename(newish[prop]);
    }
  }

  return newish;
}

/**
 * Todo messes with arrays turns them into objects
 * @param input
 * @param keys_to_omit
 */
export function omitKeys(input: any, keys_to_omit: Array<string>) {
  if (!input) return input;

  let newish;

  if (Array.isArray(input)) {
    newish = [...input];

    for (let i = 0; i < newish.length; i++) {
      newish[i] = omitKeys(newish[i], keys_to_omit);
    }

    return newish;
  } else {
    newish = { ...input };

    for (const key in newish) {
      if (keys_to_omit.includes(key)) {
        delete newish[key];
      } else if (typeof newish[key] === 'object') {
        newish[key] = omitKeys(newish[key], keys_to_omit);
      }
    }

    return newish;
  }
}

export const useKeys = (input: any, keys_to_keep: Array<string>) => {
  if (!input) return input;

  let newish;

  if (Array.isArray(input)) {
    newish = [...input];

    for (let i = 0; i < newish.length; i++) {
      newish[i] = useKeys(newish[i], keys_to_keep);
    }
  } else {
    newish = { ...input };

    for (const key in newish) {
      if (!keys_to_keep.includes(key)) {
        delete newish[key];
      } else if (typeof newish[key] === 'object') {
        newish[key] = useKeys(newish[key], keys_to_keep);
      }
    }
  }

  return newish;
};
