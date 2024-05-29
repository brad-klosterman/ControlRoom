import { Fragment, useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { BillingItemsForm } from 'apps/customers/customer/account/subscriptions/types';
import { BILLING_RECURRENCE, CURRENCY_CODES } from 'codegen/graphql';
import { Text, Grid, Form } from 'components';
import { Label, Delete, FormGridCol } from 'components/ui/Form/form.elements';
import FormExpander from 'components/ui/Form/form.expander';
import { isRequired } from 'components/ui/Form/validation';
import { withCurrency } from 'utils/currency/format.cents-currency';

export const SubscriptionBillingItems = (props: {
  currency: CURRENCY_CODES;
  recurrence: BILLING_RECURRENCE;
  editable: boolean;
  total_cost: number | undefined;
}) => {
  const form = useFormContext<BillingItemsForm>();

  const billing_items_array = useFieldArray({
    control: form.control,
    name: 'billing_items',
  });

  const billing_items = form.watch('billing_items');

  const onRemoveProduct = (index: number) => {
    billing_items_array.remove(index);
  };

  useEffect(() => {
    form.resetField('billing_items', { defaultValue: [] });
  }, [props.currency, props.recurrence]);

  return (
    billing_items?.length > 0 && (
      <>
        <Label>Products/Discounts</Label>
        <FormExpander>
          {billing_items?.map((item, i) => (
            <Fragment key={item.template_id}>
              <FormExpander.Row>
                <Text>
                  {item.template_name.toUpperCase()}{' '}
                  {billing_items[i].quantity > 1 &&
                    `X ${billing_items[i].quantity}`}
                </Text>
                <Text>
                  {withCurrency({
                    amount:
                      Number(item.current_price) * billing_items[i].quantity,
                    currency: props.currency,
                  })}{' '}
                  ({props.currency})
                </Text>
              </FormExpander.Row>
              <FormExpander.Content>
                <FormGridCol>
                  <Grid.Cell x={[0, 8]} y={[0, 1]}>
                    <Form.Input
                      control={form.control}
                      disabled={!props.editable}
                      label="Description Override - optional"
                      name={`billing_items.${i}.description_override`}
                      small
                    />
                  </Grid.Cell>
                  <Grid.Cell
                    alignItems="flex-end"
                    spacing="regular"
                    x={[8, 12]}
                    y={[0, 1]}
                  >
                    <Form.Input
                      control={form.control}
                      disabled={!props.editable}
                      label="Quantity"
                      name={`billing_items.${i}.quantity`}
                      rules={isRequired}
                      small
                      type="number"
                    />
                    {props.editable && (
                      <Delete onClick={() => onRemoveProduct(i)} size="small" />
                    )}
                  </Grid.Cell>
                  <Grid.Cell direction="column" x={[0, 12]} y={[1, 2]}>
                    <Label>Product Description</Label>
                    <Text>
                      {item.description_override || item.template_description}
                    </Text>
                  </Grid.Cell>
                </FormGridCol>
              </FormExpander.Content>
            </Fragment>
          ))}
        </FormExpander>
      </>
    )
  );
};
