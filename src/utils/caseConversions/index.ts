import { isArray, isPlainObject } from 'auxiliary';

export const toLowerCaseFirstLetter = (string: string) => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};

export const toUpperCaseFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const toCamelCase = (s: string) => {
  const updated = s.replace(/([-_][a-z])/gi, $1 => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });

  return toLowerCaseFirstLetter(updated);
};

export const keysToCamel = (o: any) => {
  if (isPlainObject(o)) {
    const n = {};

    Object.keys(o).forEach(k => {
      n[toCamelCase(k)] = keysToCamel(o[k]);
    });

    return n;
  }

  if (isArray(o))
    o.map((i: any) => {
      return keysToCamel(i);
    });

  return o;
};

export function toKebab(string: string) {
  return string
    .split('')
    .map(letter => {
      if (/[A-Z]/.test(letter)) {
        return ` ${letter.toLowerCase()}`;
      }

      return letter;
    })
    .join('')
    .trim();
}

export function toSentence(string: string) {
  const interim = toKebab(string).replace(/[-_]/g, ' ');
  return interim.slice(0, 1).toUpperCase() + interim.slice(1);
}

export function toSentenceUpper(string: string) {
  const interim = toKebab(string).replace(/[-_]/g, ' ');
  return interim.toUpperCase();
}

export const toUpperSentence = (string: string) =>
  string.replace(/[-_]/g, ' ').toUpperCase();
