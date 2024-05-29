import JSON_CurrencyObject from 'src/static/json/currency-list-all.json';

interface CurrencyProperties {
  symbol: string;
  name: string;
  symbol_native: string;
  decimal_digits: number;
  rounding: number;
  code: string;
  name_plural: string;
}

interface GetAllCurrenciesExposes {
  currency_map: typeof JSON_CurrencyObject;
  currencies: CurrencyProperties[];
  currency_codes: string[];
}

const getCurrencies = (): CurrencyProperties[] => {
  return Object.keys(JSON_CurrencyObject).map(key => JSON_CurrencyObject[key]);
};

const getCurrencyCodes = (currencies?: CurrencyProperties[]): string[] => {
  const currency_array = currencies ?? getCurrencies();
  return currency_array.map(currency => currency.code);
};

const useGetAllCurrencies = (): GetAllCurrenciesExposes => {
  const currencies: CurrencyProperties[] = getCurrencies();
  const currency_codes: string[] = getCurrencyCodes(currencies);

  return {
    currencies,
    currency_codes,
    currency_map: JSON_CurrencyObject,
  };
};

export { getCurrencies, getCurrencyCodes, useGetAllCurrencies };
