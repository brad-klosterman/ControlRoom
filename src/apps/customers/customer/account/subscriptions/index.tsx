import { useLazyQuery, useMutation } from '@apollo/client';
import { useState, useEffect, useMemo } from 'react';

import {
  CUSTOMER_BILLING_PROFILE,
  CUSTOMER_BILLING_SUBSCRIPTION_EXPANDED,
  FETCH_CUSTOMER_SUBSCRIPTIONS,
  SUBSCRIPTION_INVOICE_TEMPLATE,
  SUBSCRIPTION_PAYMENT_OPTION,
} from 'apps/customers/API';
import NewSubscription from 'apps/customers/customer/account/subscriptions/create_subscription/new_subscription';
import SubscriptionsTable from 'apps/customers/customer/account/subscriptions/table';
import { TemplatesUsage } from 'apps/customers/customer/account/subscriptions/types';
import { useCustomer } from 'apps/customers/customer/provider';
import { SubRouteWrap } from 'apps/dashboard/style';
import { getFragment } from 'codegen';
import { Button, Flex } from 'components';
import useResponseStatus from 'hooks/use.response-status';
import { RequiresManageAccountingPermission } from 'src/app.state/permissions/hooks/manage-accounting.permission';

import { CancelCreating } from './styles';

const SubscriptionsRoute = () => {
  const { customer, dispatch } = useCustomer();
  const customer_id = customer?.id;
  const billing_profile =
    customer && getFragment(CUSTOMER_BILLING_PROFILE, customer.billing);

  const [
    fetch_customer_subscriptions,
    { data, refetch: refetchSubscriptions },
  ] = useLazyQuery(FETCH_CUSTOMER_SUBSCRIPTIONS);

  useEffect(() => {
    if (customer_id)
      fetch_customer_subscriptions({
        variables: {
          customer_id,
        },
      });
  }, [customer_id]);

  const subscriptions = getFragment(
    CUSTOMER_BILLING_SUBSCRIPTION_EXPANDED,
    data?.customer_billing_subscriptions,
  );

  const templates_usage = useMemo(() => {
    if (!subscriptions) return null;

    return subscriptions.reduce<TemplatesUsage>(
      (acc, subscription) => {
        const subscription_id = subscription.id;
        const subscription_name = subscription.title;

        const invoice_template = getFragment(
          SUBSCRIPTION_INVOICE_TEMPLATE,
          subscription?.billing_invoice_template,
        );

        const payment_template = getFragment(
          SUBSCRIPTION_PAYMENT_OPTION,
          subscription?.billing_invoice_template?.billing_payment_option,
        );

        if (!invoice_template && !payment_template) {
          return acc;
        }

        return {
          invoice_templates: invoice_template
            ? {
                ...acc.invoice_templates,
                [invoice_template.id]: acc.invoice_templates[
                  invoice_template.id
                ]
                  ? [
                      ...acc.invoice_templates[invoice_template.id],
                      { subscription_id, subscription_name },
                    ]
                  : [{ subscription_id, subscription_name }],
              }
            : acc.invoice_templates,
          payment_templates: payment_template
            ? {
                ...acc.payment_templates,
                [payment_template.id]: acc.payment_templates[
                  payment_template.id
                ]
                  ? [
                      ...acc.payment_templates[payment_template.id],
                      { subscription_id, subscription_name },
                    ]
                  : [{ subscription_id, subscription_name }],
              }
            : acc.payment_templates,
        };
      },
      {
        invoice_templates: {},
        payment_templates: {},
      } as TemplatesUsage,
    );
  }, [subscriptions]);

  const invoice_templates = getFragment(
    SUBSCRIPTION_INVOICE_TEMPLATE,
    billing_profile?.invoice_templates || [],
  );

  const payment_templates = getFragment(
    SUBSCRIPTION_PAYMENT_OPTION,
    billing_profile?.payment_options || [],
  );

  const [creating_subscription, setCreatingSubscription] = useState(false);

  const { successAlert } = useResponseStatus();

  const subscriptionSaved = async (save_type: 'created' | 'updated') => {
    successAlert(
      `${save_type === 'created' ? 'CREATING' : 'UPDATING'} SUBSCRIPTION`,
    );

    setCreatingSubscription(false);
    await dispatch('REFETCH_CUSTOMER', {});
    await refetchSubscriptions();
  };

  const subscriptionCanceled = async () => {
    successAlert('DELETING SUBSCRIPTION');
    await dispatch('REFETCH_CUSTOMER', {});
    await refetchSubscriptions();
  };

  if (!customer_id || !billing_profile) return null;

  const { currency } = billing_profile;

  if (creating_subscription) {
    return (
      <SubRouteWrap style={{ position: 'relative' }}>
        <CancelCreating
          onClick={() => setCreatingSubscription(false)}
          size="small"
          variant="delete"
        >
          CANCEL CREATING
        </CancelCreating>
        <NewSubscription
          billing_profile={billing_profile}
          customer_id={customer.id}
          onCancel={() => setCreatingSubscription(false)}
          onComplete={() => subscriptionSaved('created')}
        />
      </SubRouteWrap>
    );
  }

  return (
    <SubRouteWrap direction="column" style={{ padding: 0 }}>
      {subscriptions && subscriptions.length ? (
        <>
          <Flex alignItems="flex-end" fitWidth justifyContent="flex-end">
            <RequiresManageAccountingPermission>
              <Button onClick={() => setCreatingSubscription(true)}>
                CREATE SUBSCRIPTION
              </Button>
            </RequiresManageAccountingPermission>
          </Flex>
          <SubscriptionsTable
            {...{
              customer_id,
              currency,
              invoice_templates,
              payment_templates,
              subscriptions,
              templates_usage,
            }}
            subscriptionCanceled={subscriptionCanceled}
            subscriptionSaved={() => subscriptionSaved('updated')}
          />
        </>
      ) : (
        <Flex fitWidth justifyContent="center" style={{ height: '100%' }}>
          <RequiresManageAccountingPermission>
            <Button
              onClick={() => setCreatingSubscription(true)}
              size="large"
              variant="primary"
            >
              SETUP CUSTOMERS BILLING SUBSCRIPTION
            </Button>
          </RequiresManageAccountingPermission>
        </Flex>
      )}
    </SubRouteWrap>
  );
};

export default SubscriptionsRoute;
