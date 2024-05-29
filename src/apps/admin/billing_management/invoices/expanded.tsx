import React, { memo, useContext } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { getFragment } from 'codegen';
import {
  ADD_CREDIT_NOTE_DOCUMENT,
  ADD_DEBIT_NOTE_DOCUMENT,
  ADD_PAYMENT_DOCUMENT,
  CANCEL_REFUND_INVOICE_DOCUMENT,
  CANCEL_REFUND_INVOICE_TYPE,
  CORE_CUSTOMER_INVOICE_FRAGMENT,
  CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT_DOC,
  CUSTOMER_BILLING_TRANSACTION_FRAGMENT_DOC,
  FETCH_CUSTOMER_INVOICE_DOCUMENT,
  INVOICE_STATUS,
  SSP_CUSTOMER_INVOICE_FRAGMENT,
} from 'codegen/graphql';
import useResponseStatus from 'hooks/use.response-status';

import { getErrorMessage } from 'src/apollo/utils/error_handeling';
import { RequiresManageAccountingPermission } from 'src/app.state/permissions/hooks/manage-accounting.permission';
import { formatDateTime } from 'utils';
import { removeComma } from 'utils/currency';
import { withCurrency } from 'utils/currency/format.cents-currency';
import { Flex, Button, Text, Grid, useSimpleModalState } from 'components';
import { type PaymentMethodOption } from 'apps/admin/company_settings/settings/types';
import {
  TransactionRow,
  TransactionsContainer,
} from 'apps/customers/customer/account/invoices/styles';
import { Expanded } from 'components/table';
import Modal from 'components/ui/Modal/provider';
import { useExpanderNodeContext } from 'components/ui/Expander';
import { RegenerateInvoiceModal } from './modals';
import { TransactionActions } from 'apps/customers/customer/account/statements/TransactionActions';
import {
  useAddCreditNoteModal,
  useAddDebitNoteModal,
  useAddPaymentModal,
} from 'components/statements';

type ExpandedInvoiceContentProps = {
  customer_id: number;
  onInvoiceStatusUpdated(status: INVOICE_STATUS): void;
  payment_method_options: PaymentMethodOption[];
} & (
  | {
      type: 'ssp';
      row: SSP_CUSTOMER_INVOICE_FRAGMENT;
      onViewCustomer: (id: number) => void;
    }
  | {
      type: 'customer';
      row: CORE_CUSTOMER_INVOICE_FRAGMENT;
    }
);

const ExpandedInvoiceContent = (props: ExpandedInvoiceContentProps) => {
  const { isOpen } = useExpanderNodeContext();
  const add_payment_modal = useAddPaymentModal();
  const add_credit_note_modal = useAddCreditNoteModal();
  const add_debit_note_modal = useAddDebitNoteModal();
  const FetchInvoiceAPI = useQuery(FETCH_CUSTOMER_INVOICE_DOCUMENT, {
    variables: {
      id: props.row.id,
      customer_id: props.customer_id,
    },
    skip: !isOpen,
  });

  const invoice = getFragment(
    CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT_DOC,
    FetchInvoiceAPI.data?.fetch_customer_invoice,
  );
  const customer_id = props.customer_id;
  const invoice_id = props.row.id;
  const invoice_status = invoice?.status ?? props.row.status;
  const amount_paid = invoice?.amount_paid;
  const outstanding_amount = invoice?.outstanding_amount ?? '0';
  const currency = props.row.currency;
  const payment_method_options = props.payment_method_options;

  const transactions =
    getFragment(
      CUSTOMER_BILLING_TRANSACTION_FRAGMENT_DOC,
      invoice?.billing_transactions,
    ) || [];

  const [cancel_or_refund_invoice, { loading: cancel_refund_invoice_loading }] =
    useMutation(CANCEL_REFUND_INVOICE_DOCUMENT);
  const [credit_invoices, { loading: credit_customer_invoices_loading }] =
    useMutation(ADD_CREDIT_NOTE_DOCUMENT);
  const [debit_invoice, { loading: debit_customer_invoice_loading }] =
    useMutation(ADD_DEBIT_NOTE_DOCUMENT);
  const [pay_customer_invoice, { loading: pay_customer_invoice_loading }] =
    useMutation(ADD_PAYMENT_DOCUMENT);

  const loading =
    cancel_refund_invoice_loading ||
    credit_customer_invoices_loading ||
    debit_customer_invoice_loading ||
    pay_customer_invoice_loading;

  const modal = useContext(Modal.Context);
  const toast = useResponseStatus();
  const regenerate_invoice_modal_state = useSimpleModalState();

  const refetchInvoice = async (params: { update_table_row?: boolean }) => {
    await FetchInvoiceAPI.refetch().then(({ data }) => {
      if (params.update_table_row) {
        const updated_invoice = getFragment(
          CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT_DOC,
          data.fetch_customer_invoice,
        );
        props.onInvoiceStatusUpdated(updated_invoice.status);
      }
    });
  };

  const onResponse = async (
    msg: string,
    success: boolean | undefined,
    update_table_row?: boolean,
  ) => {
    if (success) {
      await refetchInvoice({ update_table_row });

      modal.close();
      toast.successAlert(msg);
    } else {
      toast.errorAlert(msg);
    }
  };

  const openRefundOrCancelModal = (type: CANCEL_REFUND_INVOICE_TYPE) => {
    modal.open({
      title: `${type === 'refunded' ? 'REFUND' : 'CANCEL'} INVOICE ${
        invoice?.reference_number || ''
      }`,
      subtitle: `Do you want to ${type === 'refunded' ? 'refund' : 'cancel'} ${
        invoice?.payable_amount
      }?`,
      actions: [
        { type: 'cancel' },
        {
          type: 'confirm_dangerous',
          text: `${type === 'refunded' ? 'REFUND' : 'CANCEL'} INVOICE`,
        },
      ],
      async onConfirm() {
        try {
          await cancel_or_refund_invoice({
            variables: {
              customer_id,
              invoice_id,
              params: {
                type,
              },
            },
          });

          await onResponse(
            `${type === 'refunded' ? 'REFUNDED' : 'CANCELED'} INVOICE ${
              invoice?.reference_number || ''
            }`,
            true,
            true,
          );
        } catch (error: any) {
          await onResponse(
            getErrorMessage(error) || 'FAILED TO PROCESS',
            false,
          );
        }
      },
    });
  };

  const openAddPaymentModal = () => {
    add_payment_modal.open({
      payment_method_options,
      invoice,
      onConfirm: async fields => {
        try {
          await pay_customer_invoice({
            variables: {
              customer_id,
              params: {
                ...fields,
                invoice_id,
                amount: removeComma(fields.amount),
              },
            },
          });

          await onResponse('PAYMENT ADDED', true, true);
        } catch (error: any) {
          await onResponse(getErrorMessage(error) || 'ADDING PAYMENT', false);
        }
      },
    });
  };

  const openCreditInvoiceModal = () => {
    add_credit_note_modal.open({
      invoice,
      onConfirm: async fields => {
        try {
          await credit_invoices({
            variables: {
              customer_id,
              params: {
                invoice_ids: [invoice_id],
                amount: removeComma(fields.credit_amount),
                paid_on: fields.issue_date,
                payment_reference_number: fields.payment_reference_number,
              },
            },
          });

          await onResponse('CREDITED INVOICE', true, true);
        } catch (error: any) {
          await onResponse(
            getErrorMessage(error) || 'COULD NOT CREDIT INVOICE',
            false,
          );
        }
      },
    });
  };

  const openAddDebitModal = () => {
    add_debit_note_modal.open({
      onConfirm: async fields => {
        try {
          await debit_invoice({
            variables: {
              customer_id,
              params: {
                invoice_id,
                amount: removeComma(fields.debit_amount),
                paid_on: fields.issue_date,
                payment_reference_number: fields.payment_reference_number,
              },
            },
          });

          await onResponse('DEBITED INVOICE', true, true);
        } catch (error: any) {
          await onResponse(
            getErrorMessage(error) || 'COULD NOT DEBIT INVOICE',
            false,
          );
        }
      },
    });
  };

  return (
    <>
      <Expanded>
        <Expanded.Inner direction="column" style={{ gap: '2rem' }}>
          <Flex alignItems="flex-end" fitWidth justifyContent="space-between">
            <Text colorKey="secondary" isBold size="displayRegular">
              TRANSACTIONS
            </Text>
            <Flex fitWidth gap="regular" justifyContent="flex-end">
              <RequiresManageAccountingPermission>
                {['unpaid', 'overdue'].includes(invoice_status) && (
                  <Button
                    isLoading={loading}
                    onClick={regenerate_invoice_modal_state.open}
                    size="small"
                    style={{ width: '12rem', padding: 0 }}
                    variant="other-secondary"
                  >
                    REGENERATE INVOICE
                  </Button>
                )}
                {['unpaid', 'partially_paid', 'overdue'].includes(
                  invoice_status,
                ) && (
                  <Button
                    isLoading={loading}
                    onClick={openAddPaymentModal}
                    size="small"
                    style={{ width: '12rem', padding: 0 }}
                    variant="other"
                  >
                    ADD PAYMENT
                  </Button>
                )}
                {['unpaid', 'partially_paid', 'overdue'].includes(
                  invoice_status,
                ) && (
                  <Button
                    isLoading={loading}
                    onClick={openCreditInvoiceModal}
                    size="small"
                    style={{ width: '12rem', padding: 0 }}
                    variant="other"
                  >
                    ADD CREDIT
                  </Button>
                )}
                {['paid'].includes(invoice_status) && (
                  <Button
                    isLoading={loading}
                    onClick={openAddDebitModal}
                    size="small"
                    style={{ width: '12rem', padding: 0 }}
                    variant="secondary"
                  >
                    ADD DEBIT NOTE
                  </Button>
                )}
                {['paid'].includes(invoice_status) && (
                  <Button
                    isLoading={loading}
                    onClick={() => openRefundOrCancelModal('refunded')}
                    size="small"
                    style={{ width: '12rem', padding: 0 }}
                    variant="other-secondary"
                  >
                    REFUND INVOICE
                  </Button>
                )}
                {['unpaid', 'overdue'].includes(invoice_status) && (
                  <Button
                    isLoading={loading}
                    onClick={() => openRefundOrCancelModal('canceled')}
                    size="small"
                    style={{ width: '12rem', padding: 0 }}
                    variant="delete"
                  >
                    CANCEL INVOICE
                  </Button>
                )}
              </RequiresManageAccountingPermission>
            </Flex>
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
                      <TransactionActions
                        cached_invoice={invoice ?? undefined}
                        refetch={() =>
                          refetchInvoice({ update_table_row: true })
                        }
                        transaction={transaction}
                      />
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
          <Flex alignItems="flex-end" fitWidth justifyContent="space-between">
            <Flex>
              {props.type === 'ssp' && (
                <Button
                  onClick={() => props.onViewCustomer(customer_id)}
                  size="small"
                  style={{ width: '12rem', padding: 0 }}
                  variant="other-secondary"
                >
                  VIEW CUSTOMER
                </Button>
              )}
            </Flex>
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
      {invoice && (
        <RegenerateInvoiceModal
          customer_id={customer_id}
          invoice={invoice}
          is_open={regenerate_invoice_modal_state.is_open}
          onClose={regenerate_invoice_modal_state.close}
        />
      )}
    </>
  );
};

export default memo(ExpandedInvoiceContent);
