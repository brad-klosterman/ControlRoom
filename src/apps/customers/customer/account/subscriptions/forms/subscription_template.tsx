import { ChangeEvent, memo, useContext, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { RECURRING_BILLING_OPTIONS } from 'apps/admin/billing_management/form.options';
import { useAvailableBillingItems } from 'apps/customers/customer/account/subscriptions/forms/useAvailableBillingItems';
import {
  BillingItem,
  SubscriptionForm,
} from 'apps/customers/customer/account/subscriptions/types';
import { usePropertyOptions } from 'apps/customers/customer/property/property_selector';
import { BILLING_RECURRENCE, CURRENCY_CODES } from 'codegen/graphql';
import { Button, Form, Grid, Flex } from 'components';
import { ControlledDatePicker } from 'components/ui/DatePicker/controlled';
import { DatePickerCustomSelectionType } from 'components/ui/DatePicker/DatePicker';
import { maskToCurrency } from 'components/ui/Form/Field/MaskedInput/currency.input';
import { BasicSelect } from 'components/ui/Form/Field/Select/select.components';
import { FormGridCol } from 'components/ui/Form/form.elements';
import { IOptionNumber } from 'components/ui/Form/Options';
import { isRequired } from 'components/ui/Form/validation';
import Modal from 'components/ui/Modal/provider';
import { isDateInThePast } from 'utils';
import { formatDate } from 'utils/date.utils/formatDate';

const getDatePickerType = (
  frequency: BILLING_RECURRENCE,
): DatePickerCustomSelectionType | undefined => {
  if (frequency !== 'one_time' && frequency !== 'monthly') {
    return 'start_of_month';
  }

  return undefined;
};

const SubscriptionTemplate = memo(
  ({
    addBillingItem,
    authorized_to_edit,
    currency,
    edit_type,
    editing_subscription,
    generateSubscriptionName,
    small,
    total_cost,
  }: {
    currency: CURRENCY_CODES;
    authorized_to_edit: boolean;
    small: boolean;
    generateSubscriptionName?(): void;
    total_cost: number | undefined | null;
    editing_subscription?: boolean;
    edit_type:
      | 'creating_subscription'
      | 'confirming_subscription'
      | 'updating_subscription';
    addBillingItem?(billing_item: BillingItem): Promise<void>;
  }) => {
    const modal = useContext(Modal.Context);
    /**
     * Form Context
     *
     */
    const form = useFormContext<SubscriptionForm>();
    const { control } = form;

    const property_id = form.watch('property_id');
    const frequency = form.watch('frequency');

    const { options: property_options } = usePropertyOptions();

    // AVAILABLE BILLING ITEMS PRODUCTS/DISCOUNTS
    const { discounts, products } = useAvailableBillingItems({
      currency,
      frequency,
    });

    const date_picker_type = getDatePickerType(frequency);

    useEffect(() => {
      if (
        edit_type === 'creating_subscription' &&
        property_options &&
        !property_id
      ) {
        form.setValue('property_id', property_options[0]?.value);
      }
    }, [property_options]);

    useEffect(() => {
      if (frequency === 'one_time') {
        form.setValue('individual_increase_rate', '');

        if (edit_type !== 'updating_subscription') {
          form.setValue('effective_start_date', formatDate(new Date()));
        }
      }
    }, [frequency]);

    const selectBillingItem = async (
      type: 'product' | 'discount',
      option: IOptionNumber,
    ) => {
      let billing_item: BillingItem | null | undefined = null;

      if (type === 'product')
        billing_item = products.options_detailed.find(
          a => a.price_id === option.value,
        );

      if (type === 'discount')
        billing_item = discounts.options_detailed.find(
          a => a.price_id === option.value,
        );

      if (billing_item && addBillingItem) await addBillingItem(billing_item);
    };

    const onStartDateChanged = (event: ChangeEvent<HTMLInputElement>) => {
      const start_date_passed = isDateInThePast(event.target.value);

      if (start_date_passed) {
        modal.open({
          title: 'START DATE IS SET IN THE PAST!',
          subtitle:
            'If invoices for this month were already generated, please generate this invoice manually, and send the email to the customer.',
          actions: [{ type: 'cancel', text: 'OK' }],
        });
      }
    };

    if (edit_type === 'updating_subscription') {
      const editable = authorized_to_edit && editing_subscription;

      return (
        <>
          <Grid.Cell x={[0, 6]} y={[0, 1]}>
            <ControlledDatePicker
              control={control}
              custom_selection_type={date_picker_type}
              disabled={!editable}
              label={
                date_picker_type === 'start_of_month'
                  ? 'Start Date (1st of the month)'
                  : 'Start Date'
              }
              name="effective_start_date"
              onChangeCB={onStartDateChanged}
              small={small}
            />
          </Grid.Cell>
          <Grid.Cell x={[6, 12]} y={[0, 1]}>
            <ControlledDatePicker
              control={control}
              disabled={!editable || frequency !== 'monthly'}
              label="End Date - optional"
              name="effective_end_date"
              small={small}
            />
          </Grid.Cell>
          <Grid.Cell x={[0, 12]} y={[1, 2]}>
            <Form.MaskedInput
              label="Yearly Increase Rate (in %) - optional"
              name="individual_increase_rate"
              control={control}
              disabled={!editable || frequency === 'one_time'}
              beforeMaskedStateChange={maskToCurrency}
              mask="99999"
              small={small}
            />
          </Grid.Cell>
        </>
      );
    }

    if (edit_type === 'confirming_subscription') {
      return (
        <Grid.Cell direction="column" spacing="regular" x={[0, 12]} y={[0, 1]}>
          <Flex gap="regular" fitWidth>
            <ControlledDatePicker
              control={control}
              custom_selection_type={date_picker_type}
              label={
                date_picker_type === 'start_of_month'
                  ? 'Start Date (1st of the month)'
                  : 'Start Date'
              }
              name="effective_start_date"
              small={small}
            />
            {frequency !== 'one_time' && (
              <ControlledDatePicker
                control={control}
                custom_selection_type={date_picker_type}
                label="End Date - optional"
                name="effective_end_date"
                small={small}
              />
            )}
          </Flex>
          <Form.Input
            control={control}
            label="Subscription Name"
            name="title"
            rules={isRequired}
            small={small}
          />
        </Grid.Cell>
      );
    }

    const editable =
      authorized_to_edit && edit_type === 'creating_subscription';

    return (
      <Grid.Cell x={[0, 12]} y={[0, 1]} spacing="regular">
        <FormGridCol>
          <Grid.Cell x={[0, 12]} y={[0, 1]}>
            <Form.Input
              control={control}
              label="Subscription Name"
              name="title"
              rules={isRequired}
              small={small}
            />
          </Grid.Cell>
          <Grid.Cell x={[0, 12]} y={[1, 2]}>
            <Form.Select
              control={control}
              disabled={!editable}
              label="Property"
              name="property_id"
              options={property_options}
              rules={isRequired}
              small={small}
            />
          </Grid.Cell>
          <Grid.Cell x={[0, 12]} y={[2, 3]} spacing="regular">
            <Form.Select
              control={control}
              disabled={!editable}
              label="Recurrence"
              name="frequency"
              options={RECURRING_BILLING_OPTIONS}
              rules={isRequired}
              small={small}
            />
            {frequency !== 'one_time' && (
              <Form.MaskedInput
                label="Yearly Increase Rate (in %) - optional"
                name="individual_increase_rate"
                control={control}
                disabled={!editable}
                beforeMaskedStateChange={maskToCurrency}
                mask="99999"
                small={small}
              />
            )}
          </Grid.Cell>
          <Grid.Cell x={[0, 12]} y={[3, 4]}>
            <BasicSelect<IOptionNumber>
              disabled={!editable}
              id="product_selector"
              label="Add a Product"
              options={products.options}
              selected={undefined}
              setSelected={option => selectBillingItem('product', option)}
              small={small}
            />
          </Grid.Cell>
          <Grid.Cell x={[0, 12]} y={[4, 5]}>
            <BasicSelect<IOptionNumber>
              disabled={!editable}
              id="discount_selector"
              label="Add a Discount"
              options={discounts.options}
              selected={undefined}
              setSelected={option => selectBillingItem('discount', option)}
              small={small}
            />
          </Grid.Cell>
          <Grid.Cell x={[6, 12]} y={[5, 6]}>
            <Button
              disabled={Boolean(!total_cost || total_cost === 0)}
              fullWidth
              onClick={generateSubscriptionName && generateSubscriptionName}
              size="small"
              style={{ marginTop: '1rem' }}
              variant="info-secondary"
            >
              GENERATE SUBSCRIPTION NAME
            </Button>
          </Grid.Cell>
        </FormGridCol>
      </Grid.Cell>
    );
  },
);

export { SubscriptionTemplate };
