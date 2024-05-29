function getJsonObjectSafe(str: string | null | undefined): object | undefined {
  if (!str) return undefined;

  try {
    const val = JSON.parse(str);

    if (typeof val === 'object') {
      return val;
    }
  } catch {
    return undefined;
  }

  return undefined;
}

export { getJsonObjectSafe };
