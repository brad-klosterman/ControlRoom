import { useLazyQuery } from '@apollo/client';
import { useEffect, useMemo } from 'react';

import { BillingItem } from 'apps/customers/customer/account/subscriptions/types';
import { getFragment } from 'codegen';
import {
  BILLING_RECURRENCE,
  CURRENCY_CODES,
  CUSTOMER_BILLING_SUBSCRIPTION_EXPANDED_FRAGMENT,
  DISCOUNT_PRICE_CORE_FRAGMENT_DOC,
  DISCOUNT_TEMPLATE_CORE_FRAGMENT_DOC,
  FETCH_DISCOUNT_TEMPLATES_DOCUMENT,
  FETCH_PRODUCT_TEMPLATES_DOCUMENT,
  PRODUCT_PRICE_CORE_FRAGMENT_DOC,
  PRODUCT_TEMPLATE_CORE_FRAGMENT_DOC,
} from 'codegen/graphql';
import { IOptionNumber } from 'components/ui/Form/Options';
import { withCurrency } from 'utils/currency/format.cents-currency';

type AvailableData = {
  options: IOptionNumber[];
  options_detailed: BillingItem[];
};

export const useAvailableBillingItems = (props: {
  currency: CURRENCY_CODES | null;
  frequency: BILLING_RECURRENCE | null;
  subscription?:
    | CUSTOMER_BILLING_SUBSCRIPTION_EXPANDED_FRAGMENT
    | null
    | undefined;
}): {
  products: AvailableData & {
    selected: BillingItem[];
  };
  discounts: AvailableData & {
    selected: BillingItem[];
  };
} => {
  const [fetch_product_templates, { data: products_data }] = useLazyQuery(
    FETCH_PRODUCT_TEMPLATES_DOCUMENT,
    {
      variables: { currency: props.currency },
    },
  );

  const [fetch_discount_templates, { data: discounts_data }] = useLazyQuery(
    FETCH_DISCOUNT_TEMPLATES_DOCUMENT,
    {
      variables: { currency: props.currency },
    },
  );

  useEffect(() => {
    if (props.currency && props.frequency) {
      fetch_product_templates();
      fetch_discount_templates();
    }
  }, [props.currency, props.frequency]);

  const product_templates =
    (products_data &&
      getFragment(
        PRODUCT_TEMPLATE_CORE_FRAGMENT_DOC,
        products_data.product_templates.product_templates,
      )) ||
    [];

  const filtered_products = useMemo(
    () =>
      product_templates.reduce<{
        options: IOptionNumber[];
        options_detailed: BillingItem[];
      }>(
        (acc, cur) => {
          const price_matrix =
            getFragment(PRODUCT_PRICE_CORE_FRAGMENT_DOC, cur.price_matrix) ||
            [];

          const options: IOptionNumber[] = [];

          const options_detailed: BillingItem[] = [];

          price_matrix.forEach(price_item => {
            if (
              price_item.currency === props.currency &&
              price_item.recurrence === props.frequency
            ) {
              options.push({
                label:
                  cur.name.toUpperCase() +
                  '  ---  ' +
                  withCurrency({
                    amount: price_item.price_excl_tax,
                    currency: price_item.currency,
                  }) +
                  ' / ' +
                  props.frequency?.toUpperCase(),
                value: price_item.id,
              });

              options_detailed.push({
                current_price: price_item.price_excl_tax,
                tax_percentage: cur.tax_percentage,
                price_id: price_item.id,
                template_description: cur.description,
                template_id: cur.id,
                template_name: cur.name,
                quantity: 1,
                type: 'product',
              });
            }
          });

          return {
            options_detailed: [...acc.options_detailed, ...options_detailed],
            options: [...acc.options, ...options],
          };
        },
        { options_detailed: [], options: [] },
      ),
    [products_data],
  );

  const discount_templates =
    (discounts_data &&
      getFragment(
        DISCOUNT_TEMPLATE_CORE_FRAGMENT_DOC,
        discounts_data.discount_templates.discount_templates,
      )) ||
    [];

  const filtered_discounts = useMemo<AvailableData>(
    () =>
      [...discount_templates].reduce<{
        options: IOptionNumber[];
        options_detailed: BillingItem[];
      }>(
        (acc, cur) => {
          const price_matrix =
            getFragment(DISCOUNT_PRICE_CORE_FRAGMENT_DOC, cur.price_matrix) ||
            [];

          const options: IOptionNumber[] = [];

          const options_detailed: BillingItem[] = [];

          price_matrix.forEach(price_item => {
            if (
              price_item.currency === props.currency &&
              price_item.recurrence === props.frequency
            ) {
              options.push({
                label:
                  cur.name.toUpperCase() +
                  '  ---  ' +
                  withCurrency({
                    amount: price_item.price_excl_tax,
                    currency: price_item.currency,
                  }) +
                  ' / ' +
                  props.frequency?.toUpperCase(),
                value: price_item.id,
              });

              options_detailed.push({
                current_price: price_item.price_excl_tax,
                tax_percentage: cur.tax_percentage,
                price_id: price_item.id,
                template_description: cur.description,
                template_id: cur.id,
                template_name: cur.name,
                quantity: 1,
                type: 'discount',
              });
            }
          });

          return {
            options_detailed: [...acc.options_detailed, ...options_detailed],
            options: [...acc.options, ...options],
          };
        },
        { options_detailed: [], options: [] },
      ),
    [discounts_data],
  );

  return {
    products: {
      ...filtered_products,
      selected: [],
    },
    discounts: {
      ...filtered_discounts,
      selected: [],
    },
  };
};
