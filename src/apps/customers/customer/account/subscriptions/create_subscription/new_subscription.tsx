import React, {
  useEffect,
  useState,
  memo,
  useCallback,
  useContext,
} from 'react';
import { FormProvider } from 'react-hook-form';

import {
  SUBSCRIPTION_INVOICE_TEMPLATE,
  SUBSCRIPTION_PAYMENT_OPTION,
} from 'apps/customers/API';
import { SubscriptionBillingItems } from 'apps/customers/customer/account/subscriptions/forms/billing_items';
import { InvoiceTemplate } from 'apps/customers/customer/account/subscriptions/forms/invoice_template';
import { PaymentTemplate } from 'apps/customers/customer/account/subscriptions/forms/payment_template';
import { SubscriptionTemplate } from 'apps/customers/customer/account/subscriptions/forms/subscription_template';
import { BillingItem } from 'apps/customers/customer/account/subscriptions/types';
import useSubscription from 'apps/customers/customer/account/subscriptions/useSubscription';
import { getFragment } from 'codegen';
import { CUSTOMER_BILLING_PROFILE_FRAGMENT } from 'codegen/graphql';
import { Button, Flex, Grid, Text } from 'components';
import { FormGrid, FormGridCol } from 'components/ui/Form/form.elements';
import { validWatchFields } from 'components/ui/Form/validation';
import Modal from 'components/ui/Modal/provider';
import Stepper from 'components/ui/Progress/Stepper';
import { toUpperSentence } from 'utils';
import { withCurrency } from 'utils/currency/format.cents-currency';
import { useValidDateRange } from 'utils/date.utils/daterange';
import { IntRange } from 'utils/type.helpers/number_range';

type Step = IntRange<1, 6>;

const steps = {
  1: { title: 'NAME & PROPERTY' },
  2: { title: 'PRODUCTS & DISCOUNTS' },
  3: { title: 'INVOICE DETAILS' },
  4: { title: 'PAYMENT DETAILS' },
  5: { title: 'DATES & CONFIRM' },
};

const NewSubscription = memo(
  (props: {
    customer_id: number;
    billing_profile: CUSTOMER_BILLING_PROFILE_FRAGMENT;
    onComplete(): void;
    onCancel(): void;
  }) => {
    const modal = useContext(Modal.Context);

    const { billing_profile } = props;
    const { currency } = billing_profile;

    const invoice_templates = getFragment(
      SUBSCRIPTION_INVOICE_TEMPLATE,
      billing_profile?.invoice_templates,
    );

    const payment_templates = getFragment(
      SUBSCRIPTION_PAYMENT_OPTION,
      billing_profile?.payment_options,
    );

    const {
      billing_items_form,
      cost,
      dispatch,
      invoice_template_form,
      invoice_template_options,
      loading,
      payment_template_form,
      payment_template_options,
      subscription_form,
    } = useSubscription({
      current_subscription: null,
      invoice_templates,
      payment_templates,
    });

    const subscription_name = subscription_form.watch('title');
    const property_id = subscription_form.watch('property_id');
    const frequency = subscription_form.watch('frequency');
    const start_date = subscription_form.watch('effective_start_date');
    const end_date = subscription_form.watch('effective_end_date');
    const billing_items = billing_items_form.watch('billing_items');
    const invoice_template_id = invoice_template_form.watch('id');
    const is_new_invoice_template = invoice_template_form.watch('new_template');
    const invoice_payment_method =
      invoice_template_form.watch('payment_method');

    const addBillingItem = useCallback(async (billing_item: BillingItem) => {
      await dispatch('ADD_BILLING_ITEM', {
        billing_item,
      });
    }, []);

    // STEP CONTROLS
    const [step, setStep] = useState<Step>(1);

    const payment_template_valid = payment_template_form.formState.isValid;
    const invoice_template_valid = invoice_template_form.formState.isValid;

    const valid_step_1 = validWatchFields([property_id]);

    const valid_date_range = useValidDateRange({
      start_date,
      end_date,
      onInvalidRange() {
        modal.open({
          title: 'INVALID DATE RANGE!',
          subtitle: 'The start date must be before the end date',
          actions: [{ type: 'cancel', text: 'OK' }],
        });
      },
      onEndDateInPast() {
        modal.open({
          title: 'END DATE IS SET IN THE PAST!',
          subtitle:
            'If invoices for this month were already generated, please generate this invoice manually, and send the' +
            ' email to the customer.',
          actions: [{ type: 'cancel', text: 'OK' }],
        });
      },
    });

    const valid_step = {
      1: valid_step_1,
      2: cost.total > 0 && validWatchFields([subscription_name, frequency]),
      3: typeof is_new_invoice_template === 'boolean' && invoice_template_valid,
      4: payment_template_valid,
      5: start_date && valid_date_range !== false,
    };

    useEffect(() => {
      if (step === 1 || step === 2) {
        setStep(valid_step_1 ? 2 : 1);
      }
    }, [step, valid_step]);

    const onNext = async () => {
      if (step === 3) {
        if (invoice_payment_method === 'cash') {
          setStep(5);
          return;
        }
      }

      if (step === 5) {
        await dispatch('CREATE_SUBSCRIPTION', {}).then(response => {
          if (response) props.onComplete();
          return;
        });
      }

      if (step < 6) {
        setStep(prev => (prev + 1) as Step);
        return;
      }
    };

    const onPrev = async () => {
      if (step === 5) {
        if (invoice_payment_method === 'cash') {
          setStep(3);
          return;
        }
      }

      setStep(prev => (prev - 1) as Step);
      return;
    };

    // FORM INPUTS
    const subscription_form_component =
      step < 3 ? (
        <FormProvider {...subscription_form}>
          <SubscriptionTemplate
            addBillingItem={addBillingItem}
            authorized_to_edit={true}
            currency={currency}
            edit_type="creating_subscription"
            generateSubscriptionName={() =>
              dispatch('GENERATE_SUBSCRIPTION_NAME', {})
            }
            small={false}
            total_cost={cost.total}
          />
        </FormProvider>
      ) : null;

    const invoice_template_component =
      step === 3 ? (
        <FormProvider {...invoice_template_form}>
          <InvoiceTemplate
            authorized_to_edit={true}
            creating_subscription={true}
            editing_template={false}
            existing_options={invoice_template_options}
            setForm={params => dispatch('RESET_FORM_VALUES', params)}
            small={false}
          />
        </FormProvider>
      ) : null;

    const payment_option_component =
      step === 4 ? (
        <FormProvider {...payment_template_form}>
          <PaymentTemplate
            authorized_to_edit={true}
            creating_subscription={true}
            editing_template={false}
            existing_options={payment_template_options}
            invoice_template_id={invoice_template_id}
            setForm={params => dispatch('RESET_FORM_VALUES', params)}
            small={false}
          />
        </FormProvider>
      ) : null;

    const subscription_dates_submit =
      step === 5 ? (
        <FormProvider {...subscription_form}>
          <SubscriptionTemplate
            authorized_to_edit={true}
            currency={currency}
            edit_type="confirming_subscription"
            small={false}
            total_cost={cost.total}
          />
        </FormProvider>
      ) : null;

    return (
      <Flex direction="column" fluid gap="xxxLarge">
        <Stepper
          active_step={step}
          show_step_overview={false}
          steps={Object.values(steps)}
        />
        <FormGrid>
          <Grid.Cell x={[0, 6]} y={[0, 1]}>
            <FormGridCol>
              {subscription_form_component}
              {payment_option_component}
              {invoice_template_component}
              {subscription_dates_submit}
            </FormGridCol>
          </Grid.Cell>
          <Grid.Cell x={[6, 12]} y={[0, 1]}>
            <FormGridCol>
              <FormProvider {...billing_items_form}>
                <Grid.Cell direction="column" x={[0, 12]} y={[0, 6]}>
                  <SubscriptionBillingItems
                    currency={currency}
                    editable={step < 3}
                    recurrence={frequency}
                    total_cost={cost.total}
                  />
                  {billing_items && billing_items.length > 0 && (
                    <Flex
                      direction="column"
                      fitWidth
                      gap="regular"
                      style={{ padding: '1.5rem 0.75rem' }}
                    >
                      <Flex
                        alignItems="center"
                        fitWidth
                        justifyContent="space-between"
                      >
                        <Text colorKey="secondary" size="labelLarge">
                          VAT TOTAL
                        </Text>
                        <Text colorKey="secondary" size="labelLarge">
                          {withCurrency({
                            amount: cost.vat,
                            currency,
                          })}
                        </Text>
                      </Flex>
                      <Flex
                        alignItems="center"
                        fitWidth
                        justifyContent="space-between"
                      >
                        <Text size="displaySmall">
                          {toUpperSentence(frequency)} TOTAL
                        </Text>
                        <Text isBold size="displaySmall">
                          {withCurrency({
                            amount: cost.total,
                            currency,
                          })}
                        </Text>
                      </Flex>
                    </Flex>
                  )}
                </Grid.Cell>
              </FormProvider>
            </FormGridCol>
          </Grid.Cell>
        </FormGrid>
        <Flex
          alignItems="flex-end"
          gap="regular"
          justifyContent="center"
          style={{ height: '100%' }}
        >
          <Button
            disabled={step < 3}
            isLoading={loading}
            onClick={onPrev}
            variant="other-secondary"
          >
            BACK
          </Button>
          <Button
            disabled={step === 1 || !valid_step[step]}
            isLoading={loading}
            onClick={onNext}
          >
            {step === 5 ? 'SUBMIT' : 'NEXT'}
          </Button>
        </Flex>
      </Flex>
    );
  },
);

export default NewSubscription;
