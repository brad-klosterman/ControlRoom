import { memo, ReactNode, useContext, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { getFragment } from 'codegen';
import {
  ACCOUNT_SUSPENSION_REASON_FRAGMENT_DOC,
  ACCOUNT_SUSPENSION_REASONS_DOCUMENT,
  CORE_SSP_SETTINGS_FRAGMENT_DOC,
  FETCH_AVAILABLE_PAYMENT_METHODS_DOCUMENT,
  FETCH_SSP_SETTINGS_DOCUMENT,
} from 'codegen/graphql';
import { useAuthenticationPermission } from 'src/app.state/permissions/hooks/authentication.permission';
import { toUpperSentence } from 'utils';

import {
  Context,
  CollectionDayOption,
  CurrencyOption,
  PaymentMethodOption,
} from './types';
import { IOptionNumber } from 'src/components/ui/Form/Options';

const SSPSettingsProvider = (props: { children: ReactNode }) => {
  const auth_permission = useAuthenticationPermission();

  const {
    data: settings_data,
    loading,
    refetch,
  } = useQuery(FETCH_SSP_SETTINGS_DOCUMENT, {
    skip: auth_permission !== 'ALLOWED',
  });

  const { data: payment_methods_data } = useQuery(
    FETCH_AVAILABLE_PAYMENT_METHODS_DOCUMENT,
    {
      skip: auth_permission !== 'ALLOWED',
    },
  );

  const { data: account_suspension_reasons_data } = useQuery(
    ACCOUNT_SUSPENSION_REASONS_DOCUMENT,
    {
      skip: auth_permission !== 'ALLOWED',
    },
  );

  const ssp_settings = getFragment(
    CORE_SSP_SETTINGS_FRAGMENT_DOC,
    settings_data?.ssp_company_details,
  );

  const account_suspension_reasons = getFragment(
    ACCOUNT_SUSPENSION_REASON_FRAGMENT_DOC,
    account_suspension_reasons_data?.account_suspension_reasons,
  );

  const currency_options = useMemo<CurrencyOption[]>(() => {
    if (!ssp_settings) return [];
    return ssp_settings.currencies.map(currency_code => ({
      label: currency_code,
      value: currency_code,
    }));
  }, [ssp_settings]);

  const collection_days_options = useMemo<CollectionDayOption[]>(() => {
    if (!ssp_settings) return [];

    return ssp_settings.collection_days.map(collection_day => ({
      label: collection_day.toString(),
      value: collection_day,
    }));
  }, [ssp_settings]);

  const payment_method_options = useMemo<PaymentMethodOption[]>(() => {
    if (!payment_methods_data) return [];

    return payment_methods_data.fetch_available_payment_methods.map(
      payment_method => ({
        label: toUpperSentence(payment_method),
        value: payment_method,
      }),
    );
  }, [payment_methods_data]);

  const account_suspension_reason_options = useMemo<IOptionNumber[]>(() => {
    if (!account_suspension_reasons) return [];

    return account_suspension_reasons.map(suspension_reason => ({
      label: suspension_reason.reason,
      value: suspension_reason.id,
    }));
  }, [account_suspension_reasons]);

  const refetchSSPSettings = async () => {
    await refetch();
  };

  return (
    <Context.Provider
      value={{
        loading,
        ssp_settings,
        currency_options,
        collection_days_options,
        payment_method_options,
        account_suspension_reasons: account_suspension_reasons ?? [],
        account_suspension_reason_options,
        refetch: refetchSSPSettings,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export const useSSPSettingsContext = () => {
  return useContext(Context);
};

export default memo(SSPSettingsProvider);
