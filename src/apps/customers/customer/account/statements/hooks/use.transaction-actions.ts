import { useState } from 'react';
import { useMutation } from '@apollo/client';
import {
  CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT,
  CUSTOMER_BILLING_TRANSACTION_FRAGMENT,
  EMAIL_CUSTOMERS_INVOICES_DOCUMENT,
  EMAIL_CUSTOMER_TRANSACTION_DOCUMENT,
  MUTATION_TRANSFER_TRANSACTION_ARGS,
  REJECT_BILLING_TRANSACTION_DOCUMENT,
  TRANSFER_TRANSACTION_DOCUMENT,
} from 'codegen/graphql';
import { Files } from 'utils';
import { useTransactionInvoice } from './use.transaction-invoice';
import { fetchReport } from 'utils/download_documents/fetchReport';
import { API_ROOT } from 'src/apollo/config/endpoints';

import { formatDate } from 'src/utils/date.utils/formatDate';
import type {
  EmailTransactionParams,
  TransferTransactionParams,
} from '../types';

interface UseTransactionActionsArgs {
  transaction: CUSTOMER_BILLING_TRANSACTION_FRAGMENT;
  /**
   * Performance Argument:
   *
   * If an invoice is already available, it can be provided here to avoid the necessity of
   * fetching the invoice related to the transaction.
   *
   * If this is undefined, an invoice will be requested from the server
   */
  cached_invoice?: CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT;
}

interface UseTransactionsActionsReturn {
  transfer_transaction_allowed: boolean;
  reject_transaction_allowed: boolean;
  downloadTransaction: () => Promise<void>;
  emailTransaction: (params?: EmailTransactionParams) => Promise<void>;
  rejectTransaction: () => Promise<void>;
  transferTransaction: (params: TransferTransactionParams) => Promise<void>;
  loading: boolean;
}

const useTransactionActions = ({
  transaction,
  cached_invoice,
}: UseTransactionActionsArgs): UseTransactionsActionsReturn => {
  const [loading, setLoading] = useState<boolean>(false);

  const [emailCustomersInvoicesAPI] = useMutation(
    EMAIL_CUSTOMERS_INVOICES_DOCUMENT,
  );
  const [emailCustomerTransactionAPI] = useMutation(
    EMAIL_CUSTOMER_TRANSACTION_DOCUMENT,
  );
  const [rejectBillingTransactionAPI] = useMutation(
    REJECT_BILLING_TRANSACTION_DOCUMENT,
  );
  const [transferTransactionAPI] = useMutation(TRANSFER_TRANSACTION_DOCUMENT);
  const { fetchInvoice } = useTransactionInvoice({
    transaction,
  });

  const isTransferAllowed = (): boolean => {
    if (transaction.transaction_status === 'Canceled') {
      return false;
    }

    return ![
      'invoice',
      'payment_reject',
      'transfer_credit',
      'transfer_debit',
    ].includes(transaction.document_type);
  };

  const isRejectionAllowed = (): boolean => {
    if (transaction.transaction_status === 'Canceled') {
      return false;
    }

    return ![
      'invoice',
      'payment_reject',
      'transfer_credit',
      'transfer_debit',
      'credit_note',
    ].includes(transaction.document_type);
  };

  const _withLoading = async (
    fn_promise: () => Promise<unknown>,
  ): Promise<void> => {
    setLoading(true);

    await fn_promise().finally(() => {
      setLoading(false);
    });
  };

  const _getInvoice =
    async (): Promise<CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT> => {
      return cached_invoice ?? (await fetchInvoice());
    };

  const _downloadInvoice = async (): Promise<void> => {
    const invoice = await _getInvoice();

    if (!invoice.download_link) {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw 'Fetched invoice had no download link';
    }

    Files.downloadFromUrl({
      file_name: `Invoice: ${invoice.id}`,
      url: invoice.download_link,
    });
  };

  const _downloadTransaction = async (): Promise<void> => {
    await fetchReport({
      filename: transaction.description ?? transaction.document_type,
      link: `${API_ROOT}/v3/service_provider/mis/billing/${transaction.billing_account_id}/transactions/${transaction.id}/download`,
    });
  };

  const _emailInvoice = async (
    params?: EmailTransactionParams,
  ): Promise<void> => {
    const invoice = await _getInvoice();

    await emailCustomersInvoicesAPI({
      variables: {
        month_of: formatDate(invoice.created_at),
        email_body_text: params?.email_body_text,
        invoice_ids: [invoice.id],
      },
    });
  };

  const _emailTransaction = async (
    params?: EmailTransactionParams,
  ): Promise<void> => {
    await emailCustomerTransactionAPI({
      variables: {
        customer_id: transaction.billing_account_id!,
        transaction_id: transaction.id,
        email_body_text: params?.email_body_text,
      },
    });
  };

  const _rejectTransaction = async (): Promise<void> => {
    const invoice = await _getInvoice();

    await rejectBillingTransactionAPI({
      variables: {
        customer_id: transaction.billing_account_id!,
        invoice_id: invoice.id,
        transaction_id: transaction.id,
      },
    });
  };

  const _transferTransaction = async (
    params: TransferTransactionParams,
  ): Promise<void> => {
    const invoice = await _getInvoice();
    const variables: MUTATION_TRANSFER_TRANSACTION_ARGS = {
      customer_id: transaction.billing_account_id!,
      params: {
        invoice_id: invoice.id,
        transaction_id: transaction.id,
        transaction_type: transaction.transaction_type,
        transferring_account_id: params.transferring_account_id,
      },
    };

    if (transaction.transaction_type === 'credit') {
      variables.params.transferring_invoice_id = params.transferring_invoice_id;
    }

    await transferTransactionAPI({
      variables,
    });
  };

  const downloadTransaction = async () => {
    return _withLoading(async () => {
      if (transaction.document_type === 'invoice') {
        await _downloadInvoice();
      } else {
        await _downloadTransaction();
      }
    });
  };

  const emailTransaction = async (params?: EmailTransactionParams) => {
    return _withLoading(async () => {
      if (transaction.document_type === 'invoice') {
        await _emailInvoice(params);
      } else {
        await _emailTransaction(params);
      }
    });
  };

  const rejectTransaction = async () => {
    return _withLoading(async () => {
      await _rejectTransaction();
    });
  };

  const transferTransaction = async (fields: TransferTransactionParams) => {
    return _withLoading(async () => {
      await _transferTransaction(fields);
    });
  };

  return {
    loading,
    reject_transaction_allowed: isRejectionAllowed(),
    transfer_transaction_allowed: isTransferAllowed(),
    downloadTransaction,
    emailTransaction,
    rejectTransaction,
    transferTransaction,
  };
};

export { useTransactionActions };
