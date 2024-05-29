// export function sortObjects<Type extends object>(
//   arr: Array<Type>,
//   sort_key: string,
//   reverse?: boolean,
// ): Array<Type> {
//   const sorted = arr.sort((a, b) => a[sort_key].localeCompare(b[sort_key]));
//
//   if (reverse) {
//     return sorted.reverse();
//   }
//
//   return sorted;
// }

type ValueGetter<T = any> = (item: T) => string | number;
export type SortingOrder = 'ascending' | 'descending';

export function sortObjectBy<T extends object>(
  array: T[],
  key: ValueGetter<T>,
  order: SortingOrder = 'ascending',
) {
  if (order === 'ascending') {
    return [...array].sort((a, b) => (key(a) > key(b) ? 1 : -1));
  }

  return [...array].sort((a, b) => (key(a) > key(b) ? -1 : 1));
}
