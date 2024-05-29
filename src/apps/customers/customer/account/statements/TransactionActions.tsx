import { useContext } from 'react';
import {
  CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT,
  CUSTOMER_BILLING_TRANSACTION_FRAGMENT,
} from 'src/apollo/codegen/graphql';
import { Flex, Modal, useSimpleModalState } from 'components';
import { useResponseStatus } from 'src/hooks';

import { ActionIcon } from 'src/apps/admin/billing_management/invoices/style';
import { useTransactionActions } from './hooks';
import type {
  EmailTransactionParams,
  TransferTransactionParams,
} from './types';
import { TransferTransactionModal } from './modals/transfer-transaction/modal';

interface TransactionActionsProps {
  transaction: CUSTOMER_BILLING_TRANSACTION_FRAGMENT;
  cached_invoice?: CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT;
  refetch(): void;
}

const TransactionActions = ({
  cached_invoice,
  refetch,
  transaction,
}: TransactionActionsProps) => {
  const modal = useContext(Modal.Context);
  const transfer_transaction_modal = useSimpleModalState();
  const { errorAlert, successAlert } = useResponseStatus();

  const {
    downloadTransaction,
    emailTransaction,
    rejectTransaction,
    transferTransaction,
    reject_transaction_allowed,
    transfer_transaction_allowed,
    loading,
  } = useTransactionActions({
    transaction,
    cached_invoice,
  });

  const onDownloadTransaction = () => {
    downloadTransaction()
      .then(() => {
        successAlert('Transaction downloaded');
      })
      .catch(() => {
        errorAlert('Could not download Transaction');
      });
  };

  const onEmailTransaction = async () => {
    async function onConfirm(fields?: EmailTransactionParams) {
      return emailTransaction(fields)
        .then(() => {
          successAlert('Transaction emailed');
          modal.close();
        })
        .catch(() => {
          errorAlert('Could not email Transaction');
        });
    }

    modal.open<{ email_body_text: string | undefined }>({
      title: 'SEND OUT EMAIL',
      actions: [{ type: 'cancel' }, { type: 'confirm', text: 'SEND EMAIL' }],
      form: [
        {
          label: 'Email Body Text (Optional)',
          name: 'email_body_text',
          type: 'TextArea',
          default_value: '',
        },
      ],
      onConfirm,
    });
  };

  const openRejectTransactionModal = () => {
    modal.open({
      title: 'REJECT TRANSACTION',
      subtitle: 'Do you want to reject this transaction?',
      actions: [
        { type: 'cancel' },
        { type: 'confirm_dangerous', text: 'REJECT' },
      ],
      async onConfirm() {
        return rejectTransaction()
          .then(() => {
            successAlert('Transaction rejected');
            modal.close();
            refetch();
          })
          .catch(() => {
            errorAlert('Could not reject transaction');
          });
      },
    });
  };

  async function handleTransferTransaction(
    params: TransferTransactionParams,
  ): Promise<boolean> {
    return transferTransaction(params)
      .then(() => {
        successAlert('Transaction transferred');
        refetch();
        return true;
      })
      .catch(() => {
        errorAlert('Could not transfer transaction');
        return false;
      });
  }

  return (
    <>
      <Flex alignItems="center" gap="small">
        <ActionIcon
          disabled={loading}
          icon="Download"
          label="DOWNLOAD PDF"
          onClick={onDownloadTransaction}
        />
        <ActionIcon
          disabled={loading}
          icon="MailSend"
          label="EMAIL PDF"
          onClick={onEmailTransaction}
        />
        <ActionIcon
          disabled={!transfer_transaction_allowed || loading}
          icon="TransferAccounts"
          label={`TRANSFER ${transaction.transaction_type?.toUpperCase()}`}
          onClick={transfer_transaction_modal.open}
        />
        <ActionIcon
          disabled={!reject_transaction_allowed || loading}
          icon="TrashCross"
          label={`REJECT TRANSACTION`}
          onClick={openRejectTransactionModal}
          variant="dangerous"
        />
      </Flex>
      <TransferTransactionModal
        open={transfer_transaction_modal.is_open}
        loading={loading}
        handleTransferTransaction={handleTransferTransaction}
        handleCloseModal={transfer_transaction_modal.close}
        transaction={transaction}
      />
    </>
  );
};

export type { TransactionActionsProps };
export { TransactionActions };
