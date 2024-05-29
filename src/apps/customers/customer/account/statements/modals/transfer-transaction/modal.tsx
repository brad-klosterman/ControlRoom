import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { getFragment } from 'codegen';
import {
  CORE_CUSTOMER_INVOICE_FRAGMENT,
  CORE_CUSTOMER_INVOICE_FRAGMENT_DOC,
  CUSTOMER_BILLING_TRANSACTION_FRAGMENT,
  CUSTOMERS_SEARCH_PARAMS,
  CUSTOMERS_TABLE_ROW,
  FETCH_CUSTOMER_INVOICES_DOCUMENT,
  FETCH_CUSTOMERS_DOCUMENT,
} from 'codegen/graphql';
import Table from 'components/table';
import {
  Flex,
  Text,
  Button,
  SimpleModal,
  ModalTitleContainer,
  ModalActionButtons,
  ModalBackButton,
} from 'components/ui';

import type { TransferTransactionParams } from '../../types';
import {
  CUSTOMERS_TABLE_COLUMN_CONFIG,
  INVOICES_TABLE_COLUMN_CONFIG,
  CUSTOMERS_SEARCHBAR_CONFIG,
} from './config';
import ExpandedInvoiceContent from './expanded.invoice';
import { NoticeType } from 'hooks/useListing';

const TransferTransactionModal = (props: {
  open: boolean;
  transaction: CUSTOMER_BILLING_TRANSACTION_FRAGMENT;
  handleTransferTransaction: (
    params: TransferTransactionParams,
  ) => Promise<boolean>;
  handleCloseModal(): void;
  loading?: boolean;
}) => {
  const { transaction } = props;
  const transfer_amount = transaction.amount?.replace('-', '');

  /** API */
  const [
    searchCustomerAPI,
    { data: customers_data, loading: customers_loading },
  ] = useLazyQuery(FETCH_CUSTOMERS_DOCUMENT, {
    variables: { pagination: { page: 1, per_page: 50 } },
  });
  const [
    fetchCustomerInvoices,
    { data: invoices_data, loading: invoices_loading },
  ] = useLazyQuery(FETCH_CUSTOMER_INVOICES_DOCUMENT, {});

  /** Selected Account/Invoice */
  const [selected_customer, setSelectedCustomer] =
    useState<CUSTOMERS_TABLE_ROW | null>(null);
  const [selected_invoice, setSelectedInvoice] =
    useState<CORE_CUSTOMER_INVOICE_FRAGMENT | null>(null);

  /** Modal State */
  const [modal_step, setModalStep] = useState(1);

  React.useEffect(() => {
    if (!props.open) {
      setModalStep(1);
    }
  }, [props.open]);

  /** Modal Display */
  const modal_title =
    modal_step === 1
      ? `TRANSFERRING ${transaction.transaction_type.toUpperCase()}`
      : modal_step === 2
      ? `TRANSFERRING ${transaction.transaction_type.toUpperCase()} TO ${selected_customer?.customer_name.toUpperCase()}`
      : 'TRANSFER COMPLETE';
  const modal_subtitle =
    modal_step === 1
      ? `SELECT A CUSTOMER ACCOUNT TO TRANSFER ${transaction.transaction_type.toUpperCase()}`
      : modal_step === 2
      ? `SELECT THE INVOICE TO ${transaction.transaction_type.toUpperCase()} ${transfer_amount}`
      : `TRANSFERRED ${transaction.transaction_type.toUpperCase()} OF TO ${
          selected_invoice?.number
        }`;

  function handleBackButton() {
    setModalStep(1);
  }

  function onClickCloseModal() {
    props.handleCloseModal();
    setSelectedCustomer(null);
    setSelectedInvoice(null);
    setModalStep(1);
  }

  /** Table Data */
  const found_customers = customers_data?.fetch_customers.customers || [];
  const found_invoices =
    getFragment(
      CORE_CUSTOMER_INVOICE_FRAGMENT_DOC,
      invoices_data?.fetch_customer_invoices.invoices,
    ) || [];

  /** Table Actions */
  async function searchCustomer(
    search_params?: CUSTOMERS_SEARCH_PARAMS | undefined,
  ) {
    await searchCustomerAPI({
      variables: { search_params, pagination: { page: 1, per_page: 50 } },
    });

    return;
  }

  async function selectCustomer(customer: CUSTOMERS_TABLE_ROW) {
    await fetchCustomerInvoices({
      variables: {
        customer_id: customer.id,
        pagination: { page: 1, per_page: 100 },
      },
    });

    setSelectedCustomer(customer);

    setModalStep(2);
  }

  const selectInvoice = React.useCallback(
    async function (
      event: React.SyntheticEvent<Element, Event>,
      keys: string[],
    ) {
      const index = keys[0];
      if (modal_step === 2)
        setSelectedInvoice(index ? found_invoices[index] : null);
    },
    [found_invoices, modal_step],
  );

  /** Table Props */
  const customers_table_visible = modal_step === 1;
  const customers_table_props = {
    columns_config: CUSTOMERS_TABLE_COLUMN_CONFIG,
    data: found_customers,
    notice:
      !customers_loading && found_customers.length === 0
        ? NoticeType.noResults
        : undefined,
    async onSelectRow(row: any) {
      if ('id' in row) await selectCustomer(row);
    },
    search: {
      params: CUSTOMERS_SEARCHBAR_CONFIG,
      number_of_columns: 4,
      onSearch: searchCustomer,
      use_enter_key: true,
    },
    total: found_customers.length,
  };

  const invoices_table_visible = modal_step === 2 || modal_step === 3;
  const invoices_table_props = {
    columns_config: INVOICES_TABLE_COLUMN_CONFIG,
    data: found_invoices,
    notice:
      !invoices_loading && found_invoices.length === 0
        ? NoticeType.noResults
        : undefined,
    total: found_invoices.length,
  };

  /** Transfer Transaction */
  async function onClickTransfer() {
    if (selected_customer && selected_invoice) {
      await props
        .handleTransferTransaction({
          transferring_account_id: selected_customer.id,
          transferring_invoice_id: selected_invoice.id,
        })
        .then(async success => {
          if (success) {
            await fetchCustomerInvoices({
              variables: {
                customer_id: selected_customer.id,
                pagination: { page: 1, per_page: 50 },
              },
            });

            setModalStep(3);
          } else {
            console.log('HANDLE NO SUCCESS');
          }
        });
    }
  }

  return (
    <SimpleModal is_open={props.open} onClose={onClickCloseModal}>
      <Flex direction="column" style={{ width: '70vw', height: '70vh' }}>
        <ModalTitleContainer
          layout
          style={{ marginBottom: '3rem', position: 'relative' }}
        >
          <ModalBackButton
            onClick={handleBackButton}
            visible={modal_step === 2}
          />
          <Text isBold size="displayLarge" style={{ textAlign: 'center' }}>
            {modal_title}
          </Text>
          <Text size="displayRegular" style={{ textAlign: 'center' }}>
            {modal_subtitle}
          </Text>
        </ModalTitleContainer>
        {customers_table_visible && <Table {...customers_table_props} />}
        {invoices_table_visible && (
          <Table
            {...invoices_table_props}
            onExpansionChange={selectInvoice}
            expandable
            renderExpanded={row =>
              'id' in row ? <ExpandedInvoiceContent row={row} /> : null
            }
          />
        )}

        <ModalActionButtons>
          {modal_step !== 3 ? (
            <>
              <Button
                variant="other-secondary"
                isLoading={props.loading}
                onClick={onClickCloseModal}
              >
                CANCEL
              </Button>
              <Button
                disabled={!selected_invoice}
                isLoading={props.loading}
                onClick={onClickTransfer}
              >
                TRANSFER
              </Button>
            </>
          ) : (
            <Button variant="other-secondary" onClick={onClickCloseModal}>
              CLOSE
            </Button>
          )}
        </ModalActionButtons>
      </Flex>
    </SimpleModal>
  );
};

export { TransferTransactionModal };
