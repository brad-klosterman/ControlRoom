/* eslint-disable @typescript-eslint/return-await */
import React, {
  memo,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import { FormProvider } from 'react-hook-form';
import { InvoiceTemplate } from 'apps/customers/customer/account/subscriptions/forms/invoice_template';
import { ConfirmEditTemplate } from 'apps/customers/customer/account/subscriptions/forms/modals';
import { PaymentTemplate } from 'apps/customers/customer/account/subscriptions/forms/payment_template';
import { SubscriptionTemplate } from 'apps/customers/customer/account/subscriptions/forms/subscription_template';
import {
  BillingItem,
  ResetFormParams,
  TemplatesUsage,
} from 'apps/customers/customer/account/subscriptions/types';
import {
  CURRENCY_CODES,
  CUSTOMER_BILLING_SUBSCRIPTION_EXPANDED_FRAGMENT,
  SUBSCRIPTION_INVOICE_TEMPLATE_FRAGMENT,
  SUBSCRIPTION_PAYMENT_OPTION_FRAGMENT,
} from 'codegen/graphql';
import { Button, Flex, Form, Grid, Text } from 'components';
import {
  RequiresManageAccountingPermission,
  useCanManageAccounting,
} from 'src/app.state/permissions/hooks/manage-accounting.permission';
import { isDateInThePast, toUpperSentence } from 'utils';
import formatCentsCurrency, {
  withCurrency,
} from 'utils/currency/format.cents-currency';
import { toCents } from 'utils/currency/format.dollars-cents';
import { useValidDateRange } from 'utils/date.utils/daterange';
import { formatDate } from 'utils/date.utils/formatDate';
import Modal from 'components/ui/Modal/provider';
import { isRequired } from 'components/ui/Form/validation';
import { FormGridCol } from 'components/ui/Form/form.elements';
import { Expander } from 'components/ui/Expander';

import {
  ExpanderContent,
  ExpanderRow,
  InvoiceContainer,
  InvoiceExpanderContent,
  InvoiceFooter,
  InvoiceFooterRow,
  InvoiceHeader,
  InvoiceItemRow,
  InvoiceItems,
  TitleWrap,
} from '../styles';
import useSubscription from '../useSubscription';

// TODO: Clean this types up at the source
type billing_subscription_item = NonNullable<
  CUSTOMER_BILLING_SUBSCRIPTION_EXPANDED_FRAGMENT['billing_subscription_items']
>[number];

const today = new Date();

const ExpandedContent = ({
  currency,
  customer_id,
  invoice_templates,
  payment_templates,
  subscription,
  subscriptionCanceled,
  subscriptionSaved,
  templates_usage,
}: {
  customer_id: number;
  currency: CURRENCY_CODES;
  subscription: CUSTOMER_BILLING_SUBSCRIPTION_EXPANDED_FRAGMENT;
  payment_templates: readonly SUBSCRIPTION_PAYMENT_OPTION_FRAGMENT[];
  invoice_templates: readonly SUBSCRIPTION_INVOICE_TEMPLATE_FRAGMENT[];
  templates_usage: TemplatesUsage | null;
  subscriptionSaved(): void;
  subscriptionCanceled(): void;
}) => {
  const authorized_to_manage_customer_billing = useCanManageAccounting();
  const modal = useContext(Modal.Context);

  // CURRENT SUBSCRIPTION
  const subscription_id = subscription?.id;

  const {
    dispatch,
    invoice_template_form,
    invoice_template_options,
    payment_template_form,
    payment_template_options,
    subscription_form,
  } = useSubscription({
    current_subscription: subscription,
    invoice_templates,
    payment_templates,
  });

  const total_amount =
    toCents(subscription?.initial_total_amount) +
    toCents(subscription?.total_tax);

  const billing_items = subscription?.billing_subscription_items || [];

  const start_date = subscription_form.watch('effective_start_date');
  const end_date = subscription_form.watch('effective_end_date');

  const invoice_template_id = invoice_template_form.watch('id');
  const new_invoice_template = invoice_template_form.watch('new_template');
  const is_invoice_template_unselected = new_invoice_template === undefined;
  const invoice_payment_method = invoice_template_form.watch('payment_method');

  const payment_template_id = payment_template_form.watch('id');
  const new_payment_template = payment_template_form.watch('new_template');

  // EDITING SUBSCRIPTION
  const [editing_subscription, setEditingSubscription] = useState(false);

  const valid_date_range = useValidDateRange({
    start_date,
    end_date,
    onInvalidRange() {
      if (editing_subscription)
        modal.open({
          title: 'INVALID DATE RANGE!',
          subtitle: 'The start date must be before the end date',
          actions: [{ type: 'cancel', text: 'OK' }],
        });
    },
    onEndDateInPast() {
      if (editing_subscription)
        modal.open({
          title: 'END DATE IS SET IN THE PAST!',
          subtitle:
            'If invoices for this month were already generated, please generate this invoice manually, and send the email to the customer.',
          actions: [{ type: 'cancel', text: 'OK' }],
        });
    },
  });

  const subscription_template_valid =
    subscription_form.formState.isValid &&
    Boolean(start_date && valid_date_range !== false);
  const invoice_template_valid = invoice_template_form.formState.isValid;
  const payment_template_valid = payment_template_form.formState.isValid;

  const invoice_template_dirty = invoice_template_form.formState.isDirty;
  const payment_template_dirty = payment_template_form.formState.isDirty;

  const setForm = async (params: ResetFormParams) => {
    return await dispatch('RESET_FORM_VALUES', params);
  };

  const editSubscription = async () => {
    setEditingSubscription(true);
  };

  const cancelEditingSubscription = async () => {
    await dispatch('CANCEL_EDITING_SUBSCRIPTION', {});
    setEditingSubscription(false);
    return;
  };

  const checkTemplateUsage = async (
    template: 'INVOICE' | 'PAYMENT',
  ): Promise<boolean> => {
    if (template === 'INVOICE' && !invoice_template_id) return true;
    if (template === 'PAYMENT' && !payment_template_id) return true;
    if (!templates_usage) return true;

    const usage =
      template === 'INVOICE'
        ? templates_usage.invoice_templates[Number(invoice_template_id)]
        : templates_usage.payment_templates[Number(payment_template_id)];

    if (usage && usage?.length > 1) {
      return new Promise<boolean>(resolve => {
        modal.open({
          title: 'ARE YOU SURE?',
          component: () => <ConfirmEditTemplate {...{ usage, template }} />,
          actions: [
            {
              handleClick: () => {
                cancelEditingSubscription();
                modal.close();
                resolve(false);
              },
              text: `CANCEL EDITING`,
              type: 'cancel',
            },
            {
              handleClick: () => {
                modal.close();
                resolve(true);
              },
              text: `CONTINUE EDITING ${template} TEMPLATE`,
              type: 'delete',
            },
          ],
        });
      }).then(proceed => proceed);
    } else {
      return true;
    }
  };

  useEffect(() => {
    if (editing_subscription && invoice_template_dirty) {
      checkTemplateUsage('INVOICE');
    }
  }, [invoice_template_dirty]);

  useEffect(() => {
    if (editing_subscription && payment_template_dirty) {
      checkTemplateUsage('PAYMENT');
    }
  }, [payment_template_dirty]);

  const saveSubscription = async () => {
    if (!subscription_id) return;

    await subscription_form.trigger();
    await invoice_template_form.trigger();
    await payment_template_form.trigger();

    if (
      invoice_template_valid &&
      payment_template_valid &&
      subscription_template_valid
    ) {
      const success = await dispatch('UPDATE_SUBSCRIPTION', {
        subscription_id,
      });

      if (success) {
        subscriptionSaved();
        setEditingSubscription(false);
      }
    }
  };

  const openPauseSubscription = async () => {
    modal.open({
      title: 'PAUSING BILLING SUBSCRIPTION',
      subtitle: 'Do you want to pause this subscription?',
      actions: [
        { type: 'cancel' },
        { type: 'confirm_dangerous', text: 'PAUSE SUBSCRIPTION' },
      ],
      form: [
        {
          label: 'Pause Date',
          name: 'pause_date',
          type: 'DatePicker',
          required: true,
          default_value: formatDate(today),
        },
        {
          label: 'Resume Date',
          name: 'resume_date',
          type: 'DatePicker',
          required: true,
        },
      ],
      onConfirm: async (params: any) => {
        const success = await dispatch('PAUSE_SUBSCRIPTION', {
          subscription_id,
          customer_id,
          pause_date: params.pause_date,
          resume_date: params.resume_date,
        });

        if (success) {
          subscriptionSaved();
          modal.close();
        }
      },
    });
  };

  const cancelSubscription = async () => {
    modal.open({
      title: 'DEACTIVATE/REMOVE BILLING SUBSCRIPTION',
      subtitle: 'Do you want to permanently deactivate this subscription?',
      actions: [
        { type: 'cancel', text: 'GO BACK' },
        { type: 'confirm_dangerous', text: 'REMOVE SUBSCRIPTION' },
      ],
      form: [
        {
          label: 'Effective End Date',
          name: 'end_date',
          type: 'DatePicker',
          required: true,
        },
      ],
      onConfirm: async (params: any) => {
        const success = await dispatch('DELETE_SUBSCRIPTION', {
          subscription_id,
          customer_id,
          end_date: params.end_date,
        });

        if (success) {
          subscriptionCanceled();
          modal.close();
        }
      },
    });
  };

  const addBillingItem = useCallback(async (billing_item: BillingItem) => {
    await dispatch('ADD_BILLING_ITEM', {
      billing_item,
    });
  }, []);

  const getItemTitleLabel = (
    billing_subscription_item: billing_subscription_item,
  ): string | null => {
    if (!billing_subscription_item) {
      return null;
    }

    const item_name = billing_subscription_item.template.name.toUpperCase();

    if (
      !billing_subscription_item.quantity ||
      billing_subscription_item.quantity <= 1
    ) {
      return item_name;
    }

    return `${item_name} (x${billing_subscription_item.quantity})`;
  };

  const getTotalItemCostLabel = (
    billing_subscription_item: billing_subscription_item,
  ): string | null => {
    if (!billing_subscription_item) {
      return null;
    }

    if (
      !billing_subscription_item.quantity ||
      billing_subscription_item.quantity <= 1
    ) {
      return withCurrency({
        amount: billing_subscription_item?.current_price || 0,
        currency,
      });
    }

    const converted_price = Number(billing_subscription_item.current_price);

    if (isNaN(converted_price)) {
      return null;
    }

    return withCurrency({
      amount: converted_price * billing_subscription_item.quantity,
      currency,
    });
  };

  const getItemCostCalculationLabel = (
    billing_subscription_item: billing_subscription_item,
  ): string | null => {
    if (!billing_subscription_item) {
      return null;
    }

    if (
      !billing_subscription_item.quantity ||
      billing_subscription_item.quantity <= 1
    ) {
      return null;
    }

    const currency_text = withCurrency({
      amount: billing_subscription_item?.current_price || 0,
      currency,
    });

    return `(${billing_subscription_item.quantity}x ${currency_text})`;
  };

  if (!subscription) return null;

  const canSaveSubscription = (): boolean => {
    return is_invoice_template_unselected || !subscription_template_valid;
  };

  const showPaymentTemplateForm = (): boolean => {
    if (invoice_payment_method === 'cash') {
      return false;
    }

    // !!! HACKY !!!
    //
    // Below is required for instances where Payment Option is null
    // but isn't of payment method "cash". This is not allowed in the
    // frontend or middle-layer – however, it is legal in the backend and
    // can happen during inputs.
    //
    // However, this is a bit fragile & hacky:
    // It can be inferred that if new_payment_template is undefined,
    // then the user is not attempting to create a Payment Option.
    //
    // However, if anything changes in the way the invoice form handles it's data
    // or in how the subscription flow saves data, this could break and
    // new_payment_template may not operate as assumed.
    //
    // Human readable logic:
    // "If there is no Billing Payment Option and the user did not decide to
    //  explicitly create a Payment Option, do not show the Payment Template form."
    if (
      subscription.billing_invoice_template?.billing_payment_option === null &&
      new_payment_template === undefined
    ) {
      return false;
    }

    return true;
  };

  return (
    <Grid spacing="xLarge">
      <Grid.Cell direction="column" spacing="regular" x={[0, 6]} y={[0, 1]}>
        <FormGridCol>
          <Grid.Cell direction="column" spacing="large" x={[0, 12]} y={[0, 1]}>
            <InvoiceContainer>
              <TitleWrap>
                {editing_subscription ? (
                  <Form.Input
                    control={subscription_form.control}
                    label="Subscription Name"
                    name="title"
                    rules={isRequired}
                    small={false}
                  />
                ) : (
                  <Text size="displayRegular">{subscription.title}</Text>
                )}
              </TitleWrap>
              <InvoiceHeader>
                <Text size="displaySmall">PRODUCT</Text>
                <Text size="displaySmall">PRICE ({currency})</Text>
              </InvoiceHeader>
              <InvoiceItems>
                {billing_items.map(
                  item =>
                    item && (
                      <Flex
                        direction="column"
                        fitWidth
                        gap="xSmall"
                        key={item.id}
                      >
                        <InvoiceItemRow>
                          <Text size="labelLarge">
                            {getItemTitleLabel(item)}
                          </Text>
                          <Text size="labelLarge">
                            {getTotalItemCostLabel(item)}
                          </Text>
                        </InvoiceItemRow>
                        <InvoiceItemRow>
                          <Text colorKey="secondary" size="labelLarge">
                            {item?.template.description}
                          </Text>
                          <Text colorKey="secondary" size="labelLarge">
                            {getItemCostCalculationLabel(item)}
                          </Text>
                        </InvoiceItemRow>
                      </Flex>
                    ),
                )}
              </InvoiceItems>
              <InvoiceFooter>
                <InvoiceFooterRow>
                  <Text colorKey="secondary" size="labelLarge">
                    VAT TOTAL
                  </Text>
                  <Text colorKey="secondary" size="labelLarge">
                    {withCurrency({
                      amount: subscription?.total_tax || '0',
                      currency,
                    })}
                  </Text>
                </InvoiceFooterRow>
                <InvoiceFooterRow>
                  <Text size="displaySmall">
                    {toUpperSentence(subscription?.frequency)} TOTAL
                  </Text>
                  <Text isBold size="displaySmall">
                    {formatCentsCurrency({
                      amount: total_amount,
                      currency,
                    })}
                  </Text>
                </InvoiceFooterRow>
              </InvoiceFooter>
            </InvoiceContainer>
            <Flex direction="column" gap="small">
              {subscription.deactivated_on && (
                <Text colorKey="error" size="displaySmall">
                  {isDateInThePast(subscription.deactivated_on)
                    ? 'The subscription was deactivated on '
                    : 'The subscription will deactivate on  '}
                  {subscription.deactivated_on}
                </Text>
              )}
              {subscription.status === 'paused' &&
                subscription.resumed_on &&
                !isDateInThePast(subscription.resumed_on) && (
                  <Text colorKey="warning" size="displaySmall">
                    {`The subscription is paused from ${subscription.paused_on} to
                   ${subscription.resumed_on}`}
                  </Text>
                )}
            </Flex>
          </Grid.Cell>
        </FormGridCol>
        <FormGridCol>
          <Grid.Cell
            direction="column"
            spacing="xSmall"
            x={[0, 12]}
            y={[0, 1]}
          ></Grid.Cell>
        </FormGridCol>
      </Grid.Cell>
      <Grid.Cell x={[6, 12]} y={[0, 1]}>
        <FormGridCol style={{ height: '100%' }}>
          <Grid.Cell direction="column" spacing="xSmall" x={[0, 12]} y={[0, 1]}>
            <Expander
              defaultExpandedKeys={['1']}
              expansionMode="multiple"
              id={`${subscription.id.toString()}_expander`}
            >
              <>
                <ExpanderRow>
                  <Text>DATES & INCREASE RATE</Text>
                </ExpanderRow>
                <ExpanderContent>
                  <Grid spacing="small">
                    <FormProvider {...subscription_form}>
                      <SubscriptionTemplate
                        addBillingItem={addBillingItem}
                        authorized_to_edit={
                          authorized_to_manage_customer_billing
                        }
                        currency={currency}
                        edit_type="updating_subscription"
                        editing_subscription={editing_subscription}
                        small={true}
                        total_cost={total_amount}
                      />
                    </FormProvider>
                  </Grid>
                </ExpanderContent>
              </>
              <>
                <ExpanderRow>
                  <Text>INVOICE DETAILS</Text>
                </ExpanderRow>
                <InvoiceExpanderContent
                  editing_subscription={editing_subscription}
                >
                  <Grid spacing="small">
                    <FormProvider {...invoice_template_form}>
                      <InvoiceTemplate
                        authorized_to_edit={
                          authorized_to_manage_customer_billing
                        }
                        checkTemplateUsage={checkTemplateUsage}
                        creating_subscription={false}
                        editing_template={editing_subscription}
                        existing_options={invoice_template_options}
                        setForm={setForm}
                        small={true}
                      />
                    </FormProvider>
                  </Grid>
                </InvoiceExpanderContent>
              </>
              {showPaymentTemplateForm() && (
                <>
                  <ExpanderRow>
                    <Text>PAYMENT OPTION DETAILS</Text>
                  </ExpanderRow>
                  <ExpanderContent>
                    <FormGridCol>
                      <FormProvider {...payment_template_form}>
                        <PaymentTemplate
                          authorized_to_edit={
                            authorized_to_manage_customer_billing
                          }
                          checkTemplateUsage={checkTemplateUsage}
                          creating_subscription={false}
                          editing_template={editing_subscription}
                          existing_options={payment_template_options}
                          invoice_template_id={invoice_template_id}
                          setForm={setForm}
                        />
                      </FormProvider>
                    </FormGridCol>
                  </ExpanderContent>
                </>
              )}
            </Expander>
          </Grid.Cell>
        </FormGridCol>
      </Grid.Cell>
      <Grid.Cell
        alignItems="flex-end"
        justifyContent="flex-end"
        spacing="regular"
        x={[0, 12]}
        y={[1, 2]}
      >
        <RequiresManageAccountingPermission>
          {!editing_subscription && (
            <>
              {!['inactive'].includes(subscription.derived_status_as_of) && (
                <Button onClick={cancelSubscription} variant="delete">
                  DEACTIVATE SUBSCRIPTION
                </Button>
              )}
              {!['paused', 'inactive'].includes(
                subscription.derived_status_as_of,
              ) && (
                <Button onClick={openPauseSubscription} variant="warning">
                  PAUSE SUBSCRIPTION
                </Button>
              )}
              {!['inactive'].includes(subscription.derived_status_as_of) && (
                <Button onClick={editSubscription} variant="primary">
                  EDIT SUBSCRIPTION
                </Button>
              )}
            </>
          )}
          {editing_subscription && (
            <>
              <Button onClick={cancelEditingSubscription} variant="delete">
                CANCEL EDITING
              </Button>
              <Button
                disabled={canSaveSubscription()}
                onClick={saveSubscription}
              >
                SAVE SUBSCRIPTION
              </Button>
            </>
          )}
        </RequiresManageAccountingPermission>
      </Grid.Cell>
    </Grid>
  );
};

export default memo(ExpandedContent);
