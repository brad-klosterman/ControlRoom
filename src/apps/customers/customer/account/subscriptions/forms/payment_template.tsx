import React, { useState, memo, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  BANK_ACCOUNT_TYPE_OPTIONS,
  CARD_TYPE_OPTIONS,
} from 'apps/admin/billing_management/form.options';
import {
  PaymentTemplateForm,
  ResetFormParams,
  TemplateOption,
} from 'apps/customers/customer/account/subscriptions/types';
import { Button, Flex, Form, Grid } from 'components';
import ControlledSelect from 'components/ui/Form/Field/Select/controlled';
import { BasicSelect } from 'components/ui/Form/Field/Select/select.components';
import { isRequired } from 'components/ui/Form/validation';

export const PaymentTemplate = memo(
  ({
    authorized_to_edit,
    checkTemplateUsage,
    creating_subscription,
    editing_template,
    existing_options,
    invoice_template_id,
    setForm,
    small = true,
  }: {
    authorized_to_edit: boolean;
    invoice_template_id: number | null | undefined;
    editing_template: boolean;
    creating_subscription: boolean;
    existing_options: TemplateOption[] | null;
    small?: boolean;
    setForm(params: ResetFormParams): Promise<boolean>;
    checkTemplateUsage?(template: 'INVOICE' | 'PAYMENT'): Promise<boolean>;
  }) => {
    const form = useFormContext<PaymentTemplateForm>();
    const { control } = form;

    const new_template = form.watch('new_template');
    const account_type = form.watch('account_type');
    const editable = authorized_to_edit && (new_template || editing_template);

    const [selecting_template, setSelectingTemplate] = useState<boolean>(
      creating_subscription
        ? Boolean(new_template === undefined && existing_options)
        : false,
    );

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

    const clearFormFields = async (params: {
      new_template: boolean | undefined;
    }) => {
      await setForm({
        form: 'PAYMENT',
        type: 'CLEAR',
        new_template: params.new_template,
      });
    };

    const showTemplateSelector = async () => {
      const proceed = checkTemplateUsage
        ? await checkTemplateUsage('PAYMENT')
        : true;

      if (proceed) {
        await clearFormFields({ new_template: undefined });
        setSelectingTemplate(true);
      }
    };

    const onSelectTemplate = async (value: number | 'new_template') => {
      if (value === 'new_template') {
        await setForm({
          form: 'PAYMENT',
          type: 'NEW_AUTO_SUGGESTED',
        }).then(success => success && setSelectingTemplate(false));
      } else {
        await setForm({
          form: 'PAYMENT',
          type: 'SELECTED_ID',
          id: value,
        }).then(success => success && setSelectingTemplate(false));
      }
    };

    if (existing_options && selecting_template) {
      return (
        <Grid.Cell x={[0, 12]} y={[0, 1]}>
          <BasicSelect<TemplateOption>
            id="payment_template_selector"
            label="Payment Template"
            options={existing_options}
            placeholder="SELECT A PAYMENT TEMPLATE"
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
            label="Payment Template Reference (for re-usage)"
            name="description"
            rules={isRequired}
            small={small}
          />
        </Grid.Cell>

        <Grid.Cell direction="column" spacing="regular" x={[0, 12]} y={[1, 2]}>
          {account_type === 'bank' && (
            <ControlledSelect
              control={control}
              disabled={!editable}
              label="Bank Account Type"
              name="bank_account_type"
              options={BANK_ACCOUNT_TYPE_OPTIONS}
              rules={isRequired}
              small={small}
            />
          )}
          {account_type === 'card' && (
            <ControlledSelect
              control={control}
              disabled={!editable}
              label="Card Type"
              name="card_type"
              options={CARD_TYPE_OPTIONS}
              rules={isRequired}
              small={small}
            />
          )}
        </Grid.Cell>
        <Grid.Cell direction="column" spacing="regular" x={[0, 12]} y={[2, 3]}>
          <Flex fitWidth gap="regular">
            {account_type === 'bank' && (
              <>
                <Form.Password
                  control={control}
                  disabled={!editable}
                  permissions={{
                    view: authorized_to_edit,
                  }}
                  label="Bank Account Number"
                  name="decrypted_bank_account_number"
                  rules={isRequired}
                  small={small}
                />
                <Form.Input
                  control={control}
                  disabled={!editable}
                  label="Bank Code"
                  name="bank_code"
                  rules={isRequired}
                  small={small}
                />
              </>
            )}
            {account_type === 'card' && (
              <>
                <Form.Password
                  control={control}
                  disabled={!editable}
                  permissions={{
                    view: authorized_to_edit,
                  }}
                  label="Card Number"
                  name="decrypted_card_number"
                  rules={{
                    required: account_type === 'card',
                  }}
                  small={small}
                />
                <Form.Input
                  control={control}
                  disabled={!editable}
                  label="Card Expiry Date"
                  name="expiry_date"
                  rules={{
                    required: account_type === 'card',
                  }}
                  small={small}
                />
              </>
            )}
          </Flex>
        </Grid.Cell>
        <Grid.Cell x={[0, 12]} y={[3, 4]}>
          <Form.Input
            control={control}
            disabled={!editable}
            label="Account Owner First Name"
            name="account_owner_first_name"
            rules={isRequired}
            small={small}
          />
        </Grid.Cell>
        <Grid.Cell x={[0, 12]} y={[4, 5]}>
          <Form.Input
            control={control}
            disabled={!editable}
            label="Account Owner Last Name"
            name="account_owner_last_name"
            rules={isRequired}
            small={small}
          />
        </Grid.Cell>
        <Grid.Cell x={[0, 12]} y={[5, 6]}>
          <Form.Input
            control={control}
            disabled={!editable}
            label="Account Owner Phone"
            name="account_owner_phone"
            rules={isRequired}
            small={small}
          />
        </Grid.Cell>
        {new_template && (
          <Grid.Cell x={[0, 6]} y={[6, 7]}>
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
        {existing_options &&
          Boolean(
            creating_subscription ? !invoice_template_id : editing_template,
          ) && (
            <Grid.Cell x={[6, 12]} y={selecting_template ? [1, 2] : [6, 7]}>
              <Button
                fullWidth
                onClick={showTemplateSelector}
                size="small"
                style={{ marginTop: '1rem' }}
                variant="info-secondary"
              >
                SELECT/CREATE PAYMENT TEMPLATE
              </Button>
            </Grid.Cell>
          )}
      </>
    );
  },
);
