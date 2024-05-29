import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { getFragment } from 'codegen';
import { createContextProvider } from 'utils';

import {
  CUSTOMER_ACCOUNT_CONTACT_FRAGMENT_DOC,
  CUSTOMER_ACCOUNT_PROFILE_FRAGMENT_DOC,
  FETCH_CUSTOMER_ACCOUNT_DOCUMENT,
  SCHEDULED_STATUS_CHANGES_FRAGMENT_DOC,
} from 'codegen/graphql';
import { CUSTOMER_BILLING_PROFILE } from '@customers/API';
import type { CustomerContextValue, CustomerContextActions } from './types';

const [Context, useContext] =
  createContextProvider<CustomerContextValue>('CustomerContext');

/**
 * Customer Context Provider
 *
 */
const CustomerProvider = (props: {
  id: number | 'new_customer';
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();

  const creating_customer = props.id === 'new_customer';
  const [creating_property, setCreatingProperty] = useState(false);

  /**
   * API
   *
   */
  const CustomerAccountAPI = useQuery(FETCH_CUSTOMER_ACCOUNT_DOCUMENT, {
    variables: { id: props.id as number },
    skip: creating_customer,
  });

  /**
   * Customer Data
   *
   */
  const customer_account_fragment = getFragment(
    CUSTOMER_ACCOUNT_PROFILE_FRAGMENT_DOC,
    CustomerAccountAPI.data?.fetch_customer_account,
  );

  const customer = React.useMemo<CustomerContextValue['customer']>(() => {
    if (customer_account_fragment)
      return {
        ...customer_account_fragment,
        get contact() {
          return getFragment(
            CUSTOMER_ACCOUNT_CONTACT_FRAGMENT_DOC,
            customer_account_fragment.contact,
          );
        },
        get billing() {
          return getFragment(
            CUSTOMER_BILLING_PROFILE,
            customer_account_fragment.billing,
          );
        },
        get scheduled_status_changes() {
          return getFragment(
            SCHEDULED_STATUS_CHANGES_FRAGMENT_DOC,
            customer_account_fragment.scheduled_status_changes,
          );
        },
      };

    return null;
  }, [customer_account_fragment]);

  const actions: CustomerContextActions = {
    TOGGLE_NEW_PROPERTY: async params => {
      if (params?.new_property_id) {
        await CustomerAccountAPI.refetch();
        setCreatingProperty(false);
        navigate(`property/${params?.new_property_id}/property_details`);
      } else {
        navigate(
          creating_property
            ? 'customer_account/account_details'
            : 'property/new_property',
        );

        setCreatingProperty(prev => !prev);
      }

      return true;
    },
    REFETCH_CUSTOMER: async params => {
      if (params?.new_customer_id) {
        navigate(
          `/control_room/customers/customer/${params?.new_customer_id}/customer_account/account_details`,
        );
      } else {
        await CustomerAccountAPI.refetch();
      }

      return true;
    },
  };

  const dispatch = <
    A extends keyof CustomerContextActions,
    TParams extends CustomerContextActions[A] extends (p: infer P) => any
      ? P
      : undefined,
  >(
    action: A,
    params: TParams,
  ) => {
    return (actions[action] as (params: TParams) => Promise<boolean>)(params);
  };

  return (
    <Context.Provider
      value={{
        dispatch,
        customer,
        creating_customer,
        creating_property,
        loading: CustomerAccountAPI.loading,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export const useCustomer = useContext;

export default {
  Provider: React.memo(CustomerProvider),
  useContext,
};
