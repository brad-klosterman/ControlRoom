export function removeNullFields<T extends object>(object: T): T {
  return (Object.keys(object) as Array<keyof T>).reduce((acc: T, key) => {
    const value = object[key];

    if (value === null || value === undefined || value === '') {
      return acc;
    }

    return { ...acc, [key]: value };
  }, {} as T);
}
