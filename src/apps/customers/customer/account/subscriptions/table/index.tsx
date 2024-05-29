import { Fragment, memo } from 'react';

import {
  ContentWrap,
  TableHeader,
  RowWrap,
} from 'apps/customers/customer/account/subscriptions/styles';
import { TemplatesUsage } from 'apps/customers/customer/account/subscriptions/types';
import {
  CURRENCY_CODES,
  CUSTOMER_BILLING_SUBSCRIPTION_EXPANDED_FRAGMENT,
  SUBSCRIPTION_INVOICE_TEMPLATE_FRAGMENT,
  SUBSCRIPTION_PAYMENT_OPTION_FRAGMENT,
} from 'codegen/graphql';
import {
  Flex,
  Grid,
  Text,
  StatusTag,
  StatusTagColorVariants,
} from 'components';
import { Expander } from 'components/ui/Expander';
import { toUpperSentence } from 'utils';
import formatCentsCurrency from 'utils/currency/format.cents-currency';

import Expanded from './expanded';
import { toCents } from 'src/utils/currency/format.dollars-cents';

const SubscriptionsTable = ({
  currency,
  customer_id,
  invoice_templates,
  payment_templates,
  subscriptionCanceled,
  subscriptions,
  subscriptionSaved,
  templates_usage,
}: {
  customer_id: number;
  currency: CURRENCY_CODES;
  subscriptions:
    | readonly CUSTOMER_BILLING_SUBSCRIPTION_EXPANDED_FRAGMENT[]
    | undefined
    | null;
  templates_usage: TemplatesUsage | null;
  payment_templates: readonly SUBSCRIPTION_PAYMENT_OPTION_FRAGMENT[];
  invoice_templates: readonly SUBSCRIPTION_INVOICE_TEMPLATE_FRAGMENT[];
  subscriptionSaved(): void;
  subscriptionCanceled(): void;
}) => {
  if (!subscriptions) return null;
  return (
    <Flex direction="column" fitWidth gap="regular" style={{ padding: '2rem' }}>
      <TableHeader>
        <Grid.Cell x={[0, 5]} y={[0, 1]}>
          <Text colorKey="secondary" isBold>
            TITLE
          </Text>
        </Grid.Cell>
        <Grid.Cell x={[5, 7]} y={[0, 1]}>
          <Text colorKey="secondary" isBold>
            TOTAL AMOUNT
          </Text>
        </Grid.Cell>
        <Grid.Cell x={[7, 9]} y={[0, 1]}>
          <Text colorKey="secondary" isBold>
            RECURRENCE
          </Text>
        </Grid.Cell>
        <Grid.Cell x={[9, 11]} y={[0, 1]}>
          <Text colorKey="secondary" isBold>
            START & END DATES
          </Text>
        </Grid.Cell>
      </TableHeader>
      <Expander id="subscriptions_table">
        {subscriptions.map(subscription => (
          <Fragment key={`${subscription.id}`}>
            <RowWrap>
              <Grid spacing="regular">
                <Grid.Cell alignItems="center" x={[0, 5]} y={[0, 1]}>
                  <div>
                    <Text isTruncated size="labelLarge">
                      {subscription.title?.toUpperCase()}
                    </Text>
                    <Text isTruncated colorKey="secondary" size="labelLarge">
                      {
                        subscription.billing_subscription_items?.[0]?.property
                          ?.name
                      }
                    </Text>
                  </div>
                </Grid.Cell>
                <Grid.Cell alignItems="center" x={[5, 7]} y={[0, 1]}>
                  <Text>
                    {formatCentsCurrency({
                      amount:
                        toCents(subscription?.initial_total_amount) +
                        toCents(subscription?.total_tax),
                      currency,
                    })}
                  </Text>
                </Grid.Cell>
                <Grid.Cell alignItems="center" x={[7, 9]} y={[0, 1]}>
                  <Text>{toUpperSentence(subscription.frequency)}</Text>
                </Grid.Cell>
                <Grid.Cell
                  direction="column"
                  justifyContent="center"
                  spacing="xSmall"
                  x={[9, 11]}
                  y={[0, 1]}
                >
                  {subscription.effective_start_date && (
                    <Flex gap="small">
                      <Text>{subscription.effective_start_date} </Text>
                      <Text colorKey="secondary">(START)</Text>
                    </Flex>
                  )}
                  {subscription.effective_end_date && (
                    <Flex gap="small">
                      <Text>{subscription.effective_end_date} </Text>
                      <Text colorKey="secondary">(END)</Text>
                    </Flex>
                  )}
                </Grid.Cell>
                <Grid.Cell
                  alignItems="center"
                  justifyContent="flex-end"
                  x={[10, 12]}
                  y={[0, 1]}
                >
                  <StatusTag
                    text={
                      subscription.derived_status_as_of?.toUpperCase() ||
                      'INACTIVE'
                    }
                    variant={
                      {
                        active: 'success',
                        paused: 'warning',
                        inactive: 'error',
                        canceled: 'error',
                      }[
                        subscription.derived_status_as_of
                      ] as StatusTagColorVariants
                    }
                    style={{
                      width: '8rem',
                    }}
                  />
                </Grid.Cell>
              </Grid>
            </RowWrap>
            <ContentWrap>
              <Expanded
                {...{
                  customer_id,
                  currency,
                  invoice_templates,
                  payment_templates,
                  templates_usage,
                  subscription,
                  subscriptionSaved,
                  subscriptionCanceled,
                }}
              />
            </ContentWrap>
          </Fragment>
        ))}
      </Expander>
    </Flex>
  );
};

export default memo(SubscriptionsTable);
