import React, { useEffect, useState, memo } from 'react';
import { useFormContext } from 'react-hook-form';

import { useSSPSettingsContext } from '@admin/company_settings/settings/provider';
import {
  InvoiceTemplateForm,
  ResetFormParams,
  TemplateOption,
} from '@customers/customer/account/subscriptions/types';
import Customer from '@customers/customer';
import { Button, Form, Grid } from 'components';
import { BasicSelect } from 'components/ui/Form/Field/Select/select.components';
import { isRequired } from 'components/ui/Form/validation';

export const InvoiceTemplate = memo(
  ({
    authorized_to_edit,
    checkTemplateUsage,
    creating_subscription,
    editing_template,
    existing_options,
    setForm,
    small = true,
  }: {
    small: boolean;
    authorized_to_edit: boolean;
    editing_template: boolean;
    creating_subscription: boolean;
    existing_options: TemplateOption[] | null;
    setForm(params: ResetFormParams): Promise<boolean>;
    checkTemplateUsage?(template: 'INVOICE' | 'PAYMENT'): Promise<boolean>;
  }) => {
    /** Context Providers */
    const SSPSettingsContext = useSSPSettingsContext();
    const CustomerContext = Customer.useContext();
    const { customer } = CustomerContext;
    const clubbed_invoices = Boolean(
      customer?.billing?.invoice_clubbing === 'all_clubbed',
    );

    /** Form */
    const form = useFormContext<InvoiceTemplateForm>();
    const { control } = form;

    const PAYMENT_METHOD_OPTIONS = SSPSettingsContext.payment_method_options;
    const COLLECTION_DAY_OPTIONS = SSPSettingsContext.collection_days_options;

    const new_template = form.watch('new_template');
    const editable = authorized_to_edit && (new_template || editing_template);

    /** Form State */
    const [selecting_template, setSelectingTemplate] = useState<boolean>(() => {
      if (clubbed_invoices) {
        return false;
      }

      if (creating_subscription) {
        return Boolean(new_template === undefined && existing_options);
      }

      return false;
    });

    useEffect(() => {
      if (new_template === undefined && !existing_options) {
        setForm({
          form: 'INVOICE',
          type: 'NEW_AUTO_SUGGESTED',
        }).then();
      }
    }, []);

    useEffect(() => {
      if (!creating_subscription && !editing_template) {
        setSelectingTemplate(false);
      }
    }, [editing_template]);

    /** Action Handlers */
    const clearFormFields = async (params: {
      new_template: boolean | undefined;
    }) => {
      await setForm({
        form: 'INVOICE',
        type: 'CLEAR',
        new_template: params.new_template,
      });
    };

    const showTemplateSelector = async () => {
      const proceed = checkTemplateUsage
        ? await checkTemplateUsage('INVOICE')
        : true;

      if (proceed) {
        await clearFormFields({ new_template: undefined });
        setSelectingTemplate(true);
      }
    };

    const onSelectTemplate = async (value: number | 'new_template') => {
      if (value === 'new_template') {
        await setForm({
          form: 'INVOICE',
          type: 'NEW_AUTO_SUGGESTED',
        }).then(success => success && setSelectingTemplate(false));
      } else {
        await setForm({
          form: 'INVOICE',
          type: 'SELECTED_ID',
          id: value,
        }).then(success => success && setSelectingTemplate(false));
      }
    };

    const onPaymentMethodSelected = async () => {
      await setForm({
        form: 'PAYMENT',
        type: 'NEW_AUTO_SUGGESTED',
      });
    };

    function getSelectInvoiceButtonVisibility() {
      return (
        existing_options &&
        Boolean(creating_subscription || editing_template) &&
        !clubbed_invoices
      );
    }

    if (existing_options && selecting_template) {
      return (
        <Grid.Cell x={[0, 12]} y={[0, 1]}>
          <BasicSelect<TemplateOption>
            id="invoice_template_selector"
            label="Invoice Template"
            options={existing_options}
            placeholder="SELECT AN INVOICE TEMPLATE"
            selected={undefined}
            setSelected={option => onSelectTemplate(option.value)}
            small={small}
          />
        </Grid.Cell>
      );
    }

    return (
      <>
        <Grid.Cell x={[0, 12]} y={[0, 1]}>
          <Form.Input
            control={control}
            disabled={!editable}
            label="Invoice Template Reference (for re-usage)"
            name="description"
            rules={isRequired}
            small={small}
          />
        </Grid.Cell>
        <Grid.Cell x={[0, 12]} y={[1, 2]}>
          <Form.Select
            control={control}
            disabled={!editable}
            label="Payment Method"
            name="payment_method"
            onSelected={onPaymentMethodSelected}
            options={PAYMENT_METHOD_OPTIONS}
            rules={isRequired}
            small={small}
          />
        </Grid.Cell>
        <Grid.Cell x={[0, 6]} y={[2, 3]}>
          <Form.Select
            control={control}
            disabled={!editable}
            label="Collection Day of the Month"
            name="collection_day_of_month"
            options={COLLECTION_DAY_OPTIONS}
            rules={isRequired}
            small={small}
          />
        </Grid.Cell>
        <Grid.Cell x={[6, 12]} y={[2, 3]}>
          <Form.Input
            control={control}
            disabled={!editable}
            label="Invoice Due Days"
            name="invoice_due_days"
            rules={isRequired}
            small={small}
            type="number"
          />
        </Grid.Cell>
        <Grid.Cell x={[0, 12]} y={[3, 4]}>
          <Form.Input
            control={control}
            disabled={!editable}
            label="Legal Name (on invoice)"
            name="legal_name"
            rules={isRequired}
            small={small}
          />
        </Grid.Cell>
        <Grid.Cell x={[0, 12]} y={[4, 5]}>
          <Form.Input
            control={control}
            disabled={!editable}
            label="Company Name - optional"
            name="company_name"
            small={small}
          />
        </Grid.Cell>
        <Grid.Cell x={[0, 6]} y={[5, 6]}>
          <Form.Input
            control={control}
            disabled={!editable}
            label="Registration Number - optional"
            name="company_registration_number"
            small={small}
          />
        </Grid.Cell>
        <Grid.Cell x={[6, 12]} y={[5, 6]}>
          <Form.Input
            control={control}
            disabled={!editable}
            label="VAT Number - optional"
            name="vat_number"
            small={small}
          />
        </Grid.Cell>
        <Grid.Cell x={[0, 12]} y={[6, 7]}>
          <Form.Input
            control={control}
            disabled={!editable}
            label="Billing Address"
            name="billing_address"
            rules={isRequired}
            small={small}
          />
        </Grid.Cell>
        <Grid.Cell x={[0, 6]} y={[7, 8]}>
          <Form.Input
            control={control}
            disabled={!editable}
            label="Email"
            name="email"
            rules={isRequired}
            small={small}
          />
        </Grid.Cell>
        <Grid.Cell x={[6, 12]} y={[7, 8]}>
          <Form.Input
            control={control}
            disabled={!editable}
            label="Email CC - optional"
            name="cc_email"
            small={small}
          />
        </Grid.Cell>
        {new_template && (
          <Grid.Cell x={[0, 6]} y={[8, 9]}>
            <Button
              fullWidth
              onClick={() => clearFormFields({ new_template: true })}
              size="small"
              style={{ marginTop: '1rem' }}
              variant="delete"
            >
              CLEAR FORM DETAILS
            </Button>
          </Grid.Cell>
        )}
        {getSelectInvoiceButtonVisibility() && (
          <Grid.Cell x={[6, 12]} y={selecting_template ? [1, 2] : [8, 9]}>
            <Button
              fullWidth
              onClick={showTemplateSelector}
              size="small"
              style={{ marginTop: '1rem' }}
              variant="info-secondary"
            >
              SELECT/CREATE INVOICE TEMPLATE
            </Button>
          </Grid.Cell>
        )}
      </>
    );
  },
);

// <BasicSelect<{ label: string; value: PAYMENT_METHOD_TYPE }>
//   id="payment_method"
//   label="Payment Method"
//   options={PAYMENT_METHOD_TYPE_OPTIONS}
//   placeholder="SELECT AN INVOICE TEMPLATE"
//   selected={payment_method}
//   setSelected={option => onSelectPaymentMethod(option.value)}
//   small={small}
// />

// useEffect(() => {
//   setTimeout(async () => {
//     if (!selecting_template)
//       await form.trigger(undefined, { shouldFocus: false });
//   }, 500);
// }, [selecting_template]);
