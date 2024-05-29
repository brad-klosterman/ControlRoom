import { useMutation } from '@apollo/client';
import { Fragment, useContext, useEffect } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

import { CurrencyOption } from 'apps/admin/company_settings/settings/types';
import { getFragment } from 'codegen';
import {
  CREATE_PRODUCT_PRICE_DOCUMENT,
  CREATE_PRODUCT_PRICE_INPUT,
  DELETE_PRODUCT_PRICE_DOCUMENT,
  DELETE_PRODUCT_TEMPLATE_DOCUMENT,
  PRODUCT_PRICE_CORE_FRAGMENT,
  PRODUCT_PRICE_CORE_FRAGMENT_DOC,
  PRODUCT_TEMPLATE_CORE_FRAGMENT,
  UPDATE_PRODUCT_PRICE_DOCUMENT,
  UPDATE_PRODUCT_TEMPLATE_DOCUMENT,
  UPDATE_PRODUCT_TEMPLATE_MUTATION_VARIABLES,
} from 'codegen/graphql';
import { Button, Form, Grid, Text } from 'components';
import { Expanded } from 'components/table';
import { maskToCurrency } from 'components/ui/Form/Field/MaskedInput/currency.input';
import { ControlledMaskedInput } from 'components/ui/Form/Field/MaskedInput/masked-input.controlled';
import ControlledSelect from 'components/ui/Form/Field/Select/controlled';
import {
  Actions,
  Add,
  Delete,
  Label,
  Save,
  Update,
} from 'components/ui/Form/form.elements';
import FormExpander from 'components/ui/Form/form.expander';
import { isRequired } from 'components/ui/Form/validation';
import Modal from 'components/ui/Modal/provider';
import useResponseStatus from 'hooks/use.response-status';
import { toUpperSentence } from 'utils';
import { withCurrency } from 'utils/currency/format.cents-currency';

import { RECURRING_BILLING_OPTIONS } from '../form.options';

const ExpandedContent = (props: {
  product: PRODUCT_TEMPLATE_CORE_FRAGMENT;
  refetch(): void;
  currency_options: CurrencyOption[];
}) => {
  const { product } = props;

  const toast = useResponseStatus();
  const modal = useContext(Modal.Context);

  /**
   * PRODUCT FORM
   */
  const product_form = useForm<UPDATE_PRODUCT_TEMPLATE_MUTATION_VARIABLES>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    product_form.reset(product);
  }, [product.id]);

  /**
   * PRICE MATRIX FORM
   */
  const price_matrix =
    getFragment(PRODUCT_PRICE_CORE_FRAGMENT_DOC, product.price_matrix) || [];

  const price_matrix_form = useForm<{
    prices: PRODUCT_PRICE_CORE_FRAGMENT[];
  }>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const prices = useFieldArray({
    control: price_matrix_form.control,
    name: 'prices',
  });

  const touched_prices = price_matrix_form.formState.dirtyFields.prices;

  useEffect(() => {
    price_matrix_form.reset({
      prices: [...price_matrix],
    });
  }, [price_matrix]);

  /**
   * NEW PRICE FORM
   */
  const new_price_form = useForm<CREATE_PRODUCT_PRICE_INPUT>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  /**
   * MUTATIONS
   */
  const [update_product_template] = useMutation(
    UPDATE_PRODUCT_TEMPLATE_DOCUMENT,
  );
  const [delete_product_template] = useMutation(
    DELETE_PRODUCT_TEMPLATE_DOCUMENT,
  );
  const [create_product_price] = useMutation(CREATE_PRODUCT_PRICE_DOCUMENT);
  const [update_product_price] = useMutation(UPDATE_PRODUCT_PRICE_DOCUMENT);
  const [delete_product_price] = useMutation(DELETE_PRODUCT_PRICE_DOCUMENT);

  const onUpdateProductTemplate: SubmitHandler<
    UPDATE_PRODUCT_TEMPLATE_MUTATION_VARIABLES
  > = async form_values => {
    modal.open({
      title: 'UPDATING PRODUCT TEMPLATE',
      subtitle: `Do you want to update ${product.name} product template?`,
      actions: [
        { type: 'cancel' },
        { type: 'confirm_dangerous', text: 'UPDATE' },
      ],
      async onConfirm() {
        try {
          await update_product_template({
            variables: {
              id: product.id,
              name: form_values.name,
              description: form_values.description,
              tax_percentage: form_values.tax_percentage,
            },
          });

          toast.successAlert('UPDATED PRODUCT TEMPLATE');
          props.refetch();
          modal.close();
        } catch (error) {
          toast.errorAlert('COULD NOT UPDATED PRODUCT TEMPLATE');
        }
      },
    });
  };

  const onCreatePriceItem: SubmitHandler<
    CREATE_PRODUCT_PRICE_INPUT
  > = async input => {
    try {
      await create_product_price({
        variables: {
          product_id: product.id,
          product_price: {
            ...input,
            price_excl_tax: input.price_excl_tax,
          },
        },
      });

      toast.successAlert('UPDATED THE PRICING MATRIX');
      new_price_form.reset();
      props.refetch();
    } catch (error: any) {
      toast.errorAlert('COULD NOT UPDATED THE PRICING MATRIX');
    }
  };

  const onUpdatePriceItem = async (i: number) => {
    const price_item = price_matrix_form.getValues(`prices`)[i];
    const price = withCurrency({
      amount: price_item.price_excl_tax,
      currency: price_item.currency,
    });

    modal.open({
      title: 'UPDATING PRICING MATRIX',
      subtitle: `Do you want to update ${price} ${toUpperSentence(
        price_item.recurrence,
      )} in the pricing matrix?`,
      actions: [
        { type: 'cancel' },
        { type: 'confirm_dangerous', text: 'UPDATE' },
      ],
      async onConfirm() {
        try {
          await update_product_price({
            variables: {
              product_id: product.id,
              price_id: price_item.id,
              price_excl_tax: price_item.price_excl_tax,
            },
          });

          toast.successAlert('UPDATED THE PRICING MATRIX');
          props.refetch();
          modal.close();
        } catch (error) {
          toast.errorAlert('COULD NOT UPDATED THE PRICING MATRIX');
        }
      },
    });
  };

  const onDeletePriceItem = async (i: number) => {
    const price_item = price_matrix_form.getValues(`prices`)[i];
    const price = withCurrency({
      amount: price_item.price_excl_tax,
      currency: price_item.currency,
    });

    modal.open({
      title: 'REMOVING ITEM FROM THE PRICING MATRIX',
      subtitle: `Do you want to remove ${price} ${toUpperSentence(
        price_item.recurrence,
      )} from the pricing matrix?`,
      actions: [
        { type: 'cancel' },
        { type: 'confirm_dangerous', text: 'REMOVE' },
      ],
      async onConfirm() {
        try {
          await delete_product_price({
            variables: {
              product_id: product.id,
              price_id: price_item.id,
            },
          });

          toast.successAlert('DELETED ITEM FROM THE PRICING MATRIX');
          props.refetch();
          modal.close();
        } catch (error) {
          toast.errorAlert('COULD NOT DELETE PRODUCT PRICE ITEM');
        }
      },
    });
  };

  const openDeleteProduct = async () => {
    modal.open({
      title: 'DELETING PRODUCT TEMPLATE',
      subtitle: `Do you want to delete ${product.name}?`,
      actions: [
        { type: 'cancel' },
        { type: 'confirm_dangerous', text: 'DELETE' },
      ],
      async onConfirm() {
        try {
          await delete_product_template({
            variables: {
              id: product.id,
            },
          });

          toast.successAlert('DELETED PRODUCT TEMPLATE');
          props.refetch();
          modal.close();
        } catch (error) {
          toast.errorAlert('COULD NOT DELETE PRODUCT TEMPLATE');
        }
      },
    });
  };

  return (
    <Expanded>
      <Expanded.Inner>
        <Grid repeat={20} spacing="large">
          <Grid.Cell x={[0, 10]} y={[0, 1]}>
            <Form.Input
              control={product_form.control}
              label="Product Name"
              name="name"
              rules={isRequired}
            />
          </Grid.Cell>
          <Grid.Cell x={[0, 10]} y={[1, 2]}>
            <Form.Input
              control={product_form.control}
              label="Tax (in %)"
              name="tax_percentage"
            />
          </Grid.Cell>
          <Grid.Cell x={[0, 10]} y={[2, 3]}>
            <Form.TextArea
              control={product_form.control}
              label="Product Description"
              name="description"
              rows={12}
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
              control={new_price_form.control}
              label="Recurrence"
              name="recurrence"
              options={RECURRING_BILLING_OPTIONS}
              rules={isRequired}
            />
            <ControlledSelect
              control={new_price_form.control}
              label="Currency"
              name="currency"
              options={props.currency_options}
              rules={{
                required: true,
              }}
            />
            <ControlledMaskedInput
              beforeMaskedStateChange={maskToCurrency}
              control={new_price_form.control}
              label="Price (excl tax)"
              mask="999999999999"
              name="price_excl_tax"
              rules={{
                required: true,
              }}
            />
            <Add onClick={new_price_form.handleSubmit(onCreatePriceItem)} />
          </Grid.Cell>
          <Grid.Cell direction="column" x={[10, 20]} y={[1, 4]}>
            <Label>Pricing Matrix</Label>
            <FormExpander>
              {prices.fields.map((p, i) => (
                <Fragment key={p.id}>
                  <FormExpander.Row>
                    <Text>{toUpperSentence(p.recurrence)}</Text>
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
                      control={price_matrix_form.control}
                      key={p.id + 'price'}
                      label="Price"
                      mask="999999999999"
                      name={`prices.${i}.price_excl_tax`}
                      rules={isRequired}
                    />

                    {touched_prices && touched_prices[i] && (
                      <Update onClick={() => onUpdatePriceItem(i)} />
                    )}
                    <Delete onClick={() => onDeletePriceItem(i)} />
                  </FormExpander.Content>
                </Fragment>
              ))}
            </FormExpander>
          </Grid.Cell>
          <Grid.Cell x={[0, 20]} y={[4, 5]}>
            <Actions>
              <Button onClick={openDeleteProduct} variant="delete">
                DELETE
              </Button>
              <Save
                disabled={!product_form.formState.isDirty}
                onClick={product_form.handleSubmit(onUpdateProductTemplate)}
              >
                SAVE
              </Save>
            </Actions>
          </Grid.Cell>
        </Grid>
      </Expanded.Inner>
    </Expanded>
  );
};

export default ExpandedContent;
