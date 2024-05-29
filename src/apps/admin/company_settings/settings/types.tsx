import { createContext } from 'react';

import {
  ACCOUNT_SUSPENSION_REASON_FRAGMENT,
  CORE_SSP_SETTINGS_FRAGMENT,
  CURRENCY_CODES,
} from 'codegen/graphql';
import { IOptionNumber } from 'src/components/ui/Form/Options';

export type PaymentMethodOption = { label: string; value: string };
export type CurrencyOption = { label: CURRENCY_CODES; value: CURRENCY_CODES };
export type CollectionDayOption = { label: string; value: number };

export type ProviderContext = {
  loading: boolean;
  ssp_settings: CORE_SSP_SETTINGS_FRAGMENT | null | undefined;
  currency_options: CurrencyOption[];
  collection_days_options: CollectionDayOption[];
  payment_method_options: PaymentMethodOption[];
  account_suspension_reasons: readonly ACCOUNT_SUSPENSION_REASON_FRAGMENT[];
  account_suspension_reason_options: IOptionNumber[];
  refetch: () => void;
};

export const Context = createContext<ProviderContext>({
  loading: true,
  ssp_settings: null,
  currency_options: [],
  collection_days_options: [],
  payment_method_options: [],
  account_suspension_reasons: [],
  account_suspension_reason_options: [],
  refetch: () => null,
});
