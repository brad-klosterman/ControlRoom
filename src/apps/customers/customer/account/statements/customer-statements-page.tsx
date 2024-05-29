import { useMutation, useQuery } from '@apollo/client';

import {
  Footer,
  FooterActions,
  TotalDisplay,
} from 'apps/customers/customer/account/statements/styles';
import {
  ADD_CREDIT_NOTE_DOCUMENT,
  ADD_DEBIT_NOTE_DOCUMENT,
  ADD_PAYMENT_DOCUMENT,
  CUSTOMER_ACCOUNT_PROFILE_FRAGMENT,
  CUSTOMER_BILLING_TRANSACTION_FRAGMENT,
  CUSTOMER_BILLING_TRANSACTION_FRAGMENT_DOC,
  FETCH_CUSTOMER_BILLING_TRANSACTIONS_DOCUMENT,
  GENERATE_CUSTOMER_STATEMENT_DOCUMENT,
} from 'codegen/graphql';
import { Button, Flex, Text } from 'components';
import { getFragment } from 'src/apollo/codegen';
import { RequiresExportStatisticsPermission } from 'src/app.state/permissions/hooks/export-statistics.permission';
import { withCurrency } from 'utils/currency/format.cents-currency';
import { CustomerStatementsTable } from './CustomerStatementsTable';
import { Files } from 'src/utils';
import { removeComma } from 'src/utils/currency';
import { useResponseStatus } from 'src/hooks';
import { useSSPSettingsContext } from 'src/apps/admin/company_settings/settings/provider';
import {
  useAddCreditNoteModal,
  useAddDebitNoteModal,
  useAddPaymentModal,
} from 'components/statements';

const MAX_TRANSACTIONS_TO_SHOW = 10;

interface CustomerStatementsPageProps {
  customer: CUSTOMER_ACCOUNT_PROFILE_FRAGMENT;
}

const CustomerStatementsPage = ({ customer }: CustomerStatementsPageProps) => {
  const add_credit_note_modal = useAddCreditNoteModal();
  const add_debit_note_modal = useAddDebitNoteModal();
  const add_payment_modal = useAddPaymentModal();
  const { errorAlert, successAlert } = useResponseStatus();
  const { payment_method_options } = useSSPSettingsContext();
  const { data, refetch } = useQuery(
    FETCH_CUSTOMER_BILLING_TRANSACTIONS_DOCUMENT,
    {
      variables: {
        customer_id: customer.id,
        pagination: { page: 1, per_page: 50 },
      },
    },
  );

  const [add_credit] = useMutation(ADD_CREDIT_NOTE_DOCUMENT);
  const [add_debit] = useMutation(ADD_DEBIT_NOTE_DOCUMENT);
  const [add_payment] = useMutation(ADD_PAYMENT_DOCUMENT);
  const [generate_customer_statement, { loading: generate_loading }] =
    useMutation(GENERATE_CUSTOMER_STATEMENT_DOCUMENT);

  const transactions = getFragment(
    CUSTOMER_BILLING_TRANSACTION_FRAGMENT_DOC,
    data?.fetch_billing_transactions.transactions,
  );

  const onGenerateStatement = async () => {
    const fetched_link = await generate_customer_statement({
      variables: {
        customer_id: customer.id,
      },
    });

    if (!fetched_link.data?.generate_customer_statement) {
      return;
    }

    Files.downloadFromUrl({
      file_name: 'Statement',
      url: fetched_link.data?.generate_customer_statement,
    });
  };

  const openAddCreditNoteModal = () => {
    add_credit_note_modal.open({
      onConfirm: async fields => {
        try {
          await add_credit({
            variables: {
              customer_id: customer.id,
              params: {
                amount: removeComma(fields.credit_amount),
                paid_on: fields.issue_date,
                payment_reference_number: fields.payment_reference_number,
              },
            },
          });
          add_credit_note_modal.close();
          refetch();
          successAlert('CREDIT NOTE ADDED');
        } catch {
          errorAlert('COULD NOT ADD CREDIT NOTE');
        }
      },
    });
  };

  const openAddDebitNoteModal = () => {
    add_debit_note_modal.open({
      onConfirm: async fields => {
        try {
          await add_debit({
            variables: {
              customer_id: customer.id,
              params: {
                amount: removeComma(fields.debit_amount),
                paid_on: fields.issue_date,
                payment_reference_number: fields.payment_reference_number,
              },
            },
          });
          add_debit_note_modal.close();
          refetch();
          successAlert('DEBIT NOTE ADDED');
        } catch {
          errorAlert('COULD NOT ADD DEBIT NOTE');
        }
      },
    });
  };

  const openAddPaymentModal = () => {
    add_payment_modal.open({
      payment_method_options,
      onConfirm: async fields => {
        try {
          await add_payment({
            variables: {
              customer_id: customer.id,
              params: {
                ...fields,
                amount: removeComma(fields.amount),
              },
            },
          });
          add_payment_modal.close();
          refetch();
          successAlert('PAYMENT ADDED');
        } catch {
          errorAlert('COULD NOT ADD PAYMENT');
        }
      },
    });
  };

  const getSlicedTransactions =
    (): readonly CUSTOMER_BILLING_TRANSACTION_FRAGMENT[] => {
      const sliced_transactions =
        transactions?.slice(0, MAX_TRANSACTIONS_TO_SHOW) ?? [];

      return sliced_transactions.reverse();
    };
  const latest_statement = transactions?.[0];
  const current_balance = latest_statement?.balance ?? 0;
  const total_transactions =
    data?.fetch_billing_transactions.pagination?.count ?? 0;

  const sliced_transactions = getSlicedTransactions();
  return (
    <Flex direction="column" fitWidth>
      <Text size="displayLarge" style={{ marginBottom: '1rem' }}>
        Showing latest {sliced_transactions.length} of {total_transactions}{' '}
        Statements
      </Text>
      <CustomerStatementsTable
        refetch={refetch}
        transactions={sliced_transactions}
        menu={[
          {
            label: 'Add Credit Note',
            onClick: openAddCreditNoteModal,
            icon: 'FileCurrency',
          },
          {
            label: 'Add Debit Note',
            onClick: openAddDebitNoteModal,
            icon: 'FileCurrency',
          },
          {
            label: 'Add Payment',
            onClick: openAddPaymentModal,
            icon: 'FileCurrency',
          },
        ]}
      />
      {total_transactions > 0 && latest_statement?.currency && (
        <Footer>
          <FooterActions>
            <RequiresExportStatisticsPermission>
              <Button
                disabled={!data?.fetch_billing_transactions.pagination.items}
                isLoading={generate_loading}
                onClick={onGenerateStatement}
                variant="other-secondary"
              >
                EXPORT STATEMENT WITH AGE ANALYSIS
              </Button>
            </RequiresExportStatisticsPermission>
          </FooterActions>
          <TotalDisplay>
            <Text isBold size="displayRegular">
              TOTAL AMOUNT DUE:{' '}
            </Text>
            <Text isBold size="displayRegular">
              {withCurrency({
                amount: current_balance,
                currency: latest_statement.currency,
              }) ?? ''}
            </Text>
          </TotalDisplay>
        </Footer>
      )}
    </Flex>
  );
};

export default CustomerStatementsPage;
