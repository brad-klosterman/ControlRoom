import React from 'react';
import { useLazyQuery } from '@apollo/client';
import { getFragment } from 'codegen';
import {
  CORE_CUSTOMER_INVOICE_FRAGMENT,
  CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT_DOC,
  CUSTOMER_BILLING_TRANSACTION_FRAGMENT_DOC,
  FETCH_CUSTOMER_INVOICE_DOCUMENT,
} from 'codegen/graphql';

import { formatDateTime } from 'utils';
import { withCurrency } from 'utils/currency/format.cents-currency';
import { Flex, Text, Grid } from 'components';
import { Expanded } from 'components/table';
import { useExpanderNodeContext } from 'components/ui/Expander';

import {
  TransactionRow,
  TransactionsContainer,
} from 'apps/customers/customer/account/invoices/styles';

const ExpandedInvoiceContent = (props: {
  row: CORE_CUSTOMER_INVOICE_FRAGMENT;
}) => {
  const { isOpen } = useExpanderNodeContext();

  const [fetchInvoice, { data: invoice_data }] = useLazyQuery(
    FETCH_CUSTOMER_INVOICE_DOCUMENT,
    {
      variables: {
        id: props.row.id,
        customer_id: props.row.billing_account_id,
      },
    },
  );

  React.useEffect(() => {
    if (isOpen) {
      fetchInvoice();
    }
  }, [isOpen, props.row.status, props.row.amount_paid]);

  const invoice = getFragment(
    CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT_DOC,
    invoice_data?.fetch_customer_invoice,
  );

  const amount_paid = invoice?.amount_paid;
  const outstanding_amount = invoice?.outstanding_amount ?? '0';
  const currency = props.row.currency;

  const transactions =
    getFragment(
      CUSTOMER_BILLING_TRANSACTION_FRAGMENT_DOC,
      invoice?.billing_transactions,
    ) || [];

  return (
    <Expanded>
      <Expanded.Inner direction="column" style={{ gap: '2rem' }}>
        <Flex alignItems="flex-end" fitWidth justifyContent="space-between">
          <Text colorKey="secondary" isBold size="displayRegular">
            TRANSACTIONS
          </Text>
        </Flex>
        <Flex fitWidth>
          <TransactionsContainer>
            {transactions.map(transaction => (
              <TransactionRow key={transaction.id}>
                <Grid repeat={20} spacing="regular">
                  <Grid.Cell
                    alignItems="center"
                    spacing="xLarge"
                    x={[0, 10]}
                    y={[0, 1]}
                  >
                    <Text style={{ lineHeight: 1 }}>
                      {transaction.description?.toUpperCase()}
                    </Text>
                  </Grid.Cell>
                  <Grid.Cell alignItems="center" x={[10, 14]} y={[0, 1]}>
                    <Text>
                      {formatDateTime({
                        date: transaction.created_at,
                        format: 'dateTime',
                        locale: 'en-ZA',
                      }) || '-'}
                    </Text>
                  </Grid.Cell>
                  <Grid.Cell
                    alignItems="center"
                    justifyContent="flex-end"
                    x={[14, 20]}
                    y={[0, 1]}
                  >
                    <Text>
                      {transaction.amount && transaction.currency
                        ? withCurrency({
                            amount: transaction.amount,
                            currency: transaction.currency,
                          })
                        : '-'}
                    </Text>
                  </Grid.Cell>
                </Grid>
              </TransactionRow>
            ))}
          </TransactionsContainer>
        </Flex>
        <Flex alignItems="flex-end" fitWidth justifyContent="flex-end">
          <Flex gap="xxLarge">
            <Flex alignItems="flex-end" direction="column" gap="small">
              <Text colorKey="secondary" isBold size="displaySmall">
                AMOUNT PAID
              </Text>
              <Text isBold size="displayRegular">
                OUTSTANDING
              </Text>
            </Flex>
            <Flex alignItems="flex-end" direction="column" gap="small">
              <Text colorKey="secondary" isBold size="displaySmall">
                {withCurrency({
                  amount: amount_paid || 0,
                  currency,
                })}
              </Text>
              <Text isBold size="displayRegular">
                {withCurrency({
                  amount: outstanding_amount,
                  currency,
                })}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Expanded.Inner>
    </Expanded>
  );
};

export default React.memo(ExpandedInvoiceContent);
