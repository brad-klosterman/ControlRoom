import { CURRENCY_CODES } from 'src/apollo/codegen/graphql';
import formatDollarsToCents from 'utils/currency/format.dollars-cents';

interface FormatCentsParameters {
  amount: number; // amount in cents
  currency: CURRENCY_CODES;
}

const getLocaleFromCurrencyCode = (currency_code: CURRENCY_CODES): string => {
  const local = {
    EUR: 'en-EU',
    NAD: 'en-ZA',
    USD: 'en-US',
    ZAR: 'en-ZA',
  };

  const matching_local: string | undefined = local[currency_code];

  if (!matching_local) {
    return local.USD;
  }

  return matching_local;
};

export default function formatCentsCurrency({
  amount,
  currency,
}: FormatCentsParameters) {
  const local = getLocaleFromCurrencyCode(currency);

  try {
    return new Intl.NumberFormat(local, {
      currency,
      style: 'currency',
    }).format(amount / 100);
  } catch (e) {
    return null;
  }
}

export function withCurrency({
  amount,
  currency,
}: {
  amount: number | string;
  currency: CURRENCY_CODES;
}) {
  let number_amount = 0;

  const local = getLocaleFromCurrencyCode(currency);

  if (typeof amount === 'string') {
    number_amount = formatDollarsToCents(amount);
  } else {
    number_amount = amount;
  }

  try {
    return new Intl.NumberFormat(local, {
      currency,
      style: 'currency',
    }).format(number_amount);
  } catch (e) {
    return null;
  }
}
