type EmailTransactionParams = {
  email_body_text?: string | undefined;
};

type TransferTransactionParams = {
  transferring_account_id: number;
  transferring_invoice_id: number;
};

export type { EmailTransactionParams, TransferTransactionParams };
