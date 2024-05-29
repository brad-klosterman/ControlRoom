import { useState } from 'react';
import { ControlRoomApolloClient } from 'src/apollo/apollo-client';
import { getFragment } from 'src/apollo/codegen';
import {
  CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT,
  CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT_DOC,
  CUSTOMER_BILLING_TRANSACTION_FRAGMENT,
  FETCH_CUSTOMER_INVOICE_DOCUMENT,
} from 'src/apollo/codegen/graphql';

interface UseTransactionInvoiceReturn {
  fetchInvoice: () => Promise<CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT>;
}

const useTransactionInvoice = (props: {
  transaction: CUSTOMER_BILLING_TRANSACTION_FRAGMENT;
}): UseTransactionInvoiceReturn => {
  const customer_id = props.transaction.billing_account_id!;

  const [saved_invoice, setSavedInvoice] =
    useState<CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT>();

  const _fetchFirstInvoice =
    async (): Promise<CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT> => {
      const invoice_response = await ControlRoomApolloClient.query({
        query: FETCH_CUSTOMER_INVOICE_DOCUMENT,
        variables: {
          customer_id,
          id: props.transaction.billing_invoice_ids![0],
        },
      });
      const invoice = getFragment(
        CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT_DOC,
        invoice_response.data.fetch_customer_invoice,
      );
      setSavedInvoice(invoice);
      return invoice;
    };

  const fetchInvoice =
    async (): Promise<CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT> => {
      if (saved_invoice) {
        return saved_invoice;
      }

      return _fetchFirstInvoice();
    };

  return {
    fetchInvoice,
  };
};

export { useTransactionInvoice };
