// export default function formatDollarsToCents(amount: number | string): number {
//   const amountFloat = typeof amount === 'string' ? parseFloat(amount) : amount;
//
//   return amountFloat * 100;
// }

export default function formatDollarsToCents(amount: number | string): number {
  if (!amount) return 0;

  const adjustString = (a: string) => {
    const has_decimal = a.includes('.');

    const a_new = a.replace(',', '');

    if (has_decimal) {
      return parseFloat(a_new);
    } else {
      return parseFloat(a_new) * 100;
    }
  };

  const adjustNumber = (a: number) => {
    const has_decimal = a - Math.floor(a) !== 0;

    if (has_decimal) {
      return a * 100;
    } else {
      return a;
    }
  };

  return typeof amount === 'string'
    ? adjustString(amount)
    : adjustNumber(amount);
}

export function removeDecimal(amount: number | string): number {
  if (!amount) return 0;

  const adjustString = (a: string) => {
    return Number(a.replace(/[.,-]/g, ''));
  };

  const adjustNumber = (a: number) => {
    const has_decimal = a - Math.floor(a) !== 0;

    if (has_decimal) {
      return a * 100;
    } else {
      return a;
    }
  };

  return typeof amount === 'string'
    ? adjustString(amount)
    : adjustNumber(amount);
}

export function toCents(amount: string | null | undefined): number {
  if (!amount) return 0;

  return Number(amount.replace(',', '').replace('.', ''));
}
