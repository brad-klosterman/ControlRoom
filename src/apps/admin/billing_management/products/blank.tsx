/* eslint-disable sort-keys-fix/sort-keys-fix */
import { useMutation } from '@apollo/client';
import { Fragment } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

import { RECURRING_BILLING_OPTIONS } from 'apps/admin/billing_management/form.options';
import { CurrencyOption } from 'apps/admin/company_settings/settings/types';
import {
  ExpandedContainer,
  ExpandedInner,
} from 'apps/dashboard/components/table/expanded';
import {
  CREATE_PRODUCT_PRICE_INPUT,
  CREATE_PRODUCT_TEMPLATE_DOCUMENT,
  CREATE_PRODUCT_TEMPLATE_MUTATION_VARIABLES,
} from 'codegen/graphql';
import { Form, Grid, Text } from 'components';
import { maskToCurrency } from 'components/ui/Form/Field/MaskedInput/currency.input';
import { ControlledMaskedInput } from 'components/ui/Form/Field/MaskedInput/masked-input.controlled';
import ControlledSelect from 'components/ui/Form/Field/Select/controlled';
import {
  Actions,
  Add,
  Cancel,
  Delete,
  Label,
  Save,
} from 'components/ui/Form/form.elements';
import FormExpander from 'components/ui/Form/form.expander';
import { isRequired } from 'components/ui/Form/validation';
import useResponseStatus from 'hooks/use.response-status';
import { withCurrency } from 'utils/currency/format.cents-currency';

const NewTemplate = (props: {
  onComplete(): void;
  onCancel(): void;
  currency_options: CurrencyOption[];
}) => {
  const { errorAlert, successAlert } = useResponseStatus();

  const form = useForm<{
    name: string;
    description: string;
    tax_percentage: string;
    product_pricings: CREATE_PRODUCT_PRICE_INPUT[];
  }>({
    defaultValues: {
      tax_percentage: '15',
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const prices = useFieldArray({
    control: form.control,
    name: 'product_pricings',
  });

  /**
   * NEW PRICE FORM
   */
  const price_form = useForm<CREATE_PRODUCT_PRICE_INPUT>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const [create_product_template] = useMutation(
    CREATE_PRODUCT_TEMPLATE_DOCUMENT,
  );

  const onCreateProductTemplate: SubmitHandler<
    CREATE_PRODUCT_TEMPLATE_MUTATION_VARIABLES
  > = async variables => {
    create_product_template({
      variables: {
        ...variables,
        tax_percentage: variables.tax_percentage || '0.00',
      },
    }).then(res => {
      if (res.data?.create_product_template.success) {
        successAlert(`SUCCESS CREATING TEMPLATE`);
        props.onComplete();
      } else {
        errorAlert(`ERROR CREATING TEMPLATE`);
      }
    });
  };

  const onAddProductPrice: SubmitHandler<
    CREATE_PRODUCT_PRICE_INPUT
  > = async input => {
    prices.append({
      ...input,
      price_excl_tax: input.price_excl_tax,
    });

    price_form.reset();
  };

  const onRemoveProductPrice = (i: number) => {
    prices.remove(i);
  };

  return (
    <ExpandedContainer full_border>
      <ExpandedInner>
        <Grid repeat={20} spacing="large">
          <Grid.Cell x={[0, 10]} y={[0, 1]}>
            <Form.Input
              control={form.control}
              label="Product Name"
              name="name"
              rules={isRequired}
            />
          </Grid.Cell>
          <Grid.Cell x={[0, 10]} y={[1, 2]}>
            <Form.Input
              control={form.control}
              label="Tax (in %)"
              name="tax_percentage"
              rules={{
                required: true,
              }}
            />
          </Grid.Cell>
          <Grid.Cell x={[0, 10]} y={[2, 3]}>
            <Form.TextArea
              control={form.control}
              label="Product Description"
              name="description"
              rows={12}
              rules={isRequired}
              style={{ resize: 'none' }}
            />
          </Grid.Cell>
          <Grid.Cell
            alignItems="flex-end"
            spacing="regular"
            x={[10, 20]}
            y={[0, 1]}
          >
            <ControlledSelect
              control={price_form.control}
              label="Recurrence"
              name="recurrence"
              options={RECURRING_BILLING_OPTIONS}
              rules={isRequired}
            />
            <ControlledSelect
              control={price_form.control}
              label="Currency"
              name="currency"
              options={props.currency_options}
              rules={{
                required: true,
              }}
            />
            <ControlledMaskedInput
              beforeMaskedStateChange={maskToCurrency}
              control={price_form.control}
              label="Price (excl tax)"
              mask="999999999999"
              name="price_excl_tax"
              rules={{
                required: true,
              }}
            />
            <Add onClick={price_form.handleSubmit(onAddProductPrice)} />
          </Grid.Cell>
          <Grid.Cell direction="column" x={[10, 20]} y={[1, 4]}>
            <Label>Pricing Matrix</Label>
            <FormExpander>
              {prices.fields.map((p, i) => (
                <Fragment key={p.id}>
                  <FormExpander.Row>
                    <Text>{p.recurrence.toUpperCase()}</Text>
                    <Text>
                      {withCurrency({
                        amount: p.price_excl_tax,
                        currency: p.currency,
                      })}{' '}
                      ({p.currency})
                    </Text>
                  </FormExpander.Row>
                  <FormExpander.Content>
                    <ControlledMaskedInput
                      beforeMaskedStateChange={maskToCurrency}
                      control={form.control}
                      key={p.id + 'price'}
                      label="Product Price"
                      mask="999999999999"
                      name={`product_pricings.${i}.price_excl_tax`}
                    />
                    <Delete onClick={() => onRemoveProductPrice(i)} />
                  </FormExpander.Content>
                </Fragment>
              ))}
            </FormExpander>
          </Grid.Cell>
          <Grid.Cell x={[0, 20]} y={[4, 5]}>
            <Actions>
              <Cancel onClick={props.onCancel}>CANCEL</Cancel>
              <Save
                disabled={!form.formState.isValid}
                onClick={form.handleSubmit(onCreateProductTemplate)}
              >
                CREATE
              </Save>
            </Actions>
          </Grid.Cell>
        </Grid>
      </ExpandedInner>
    </ExpandedContainer>
  );
};

export default NewTemplate;
