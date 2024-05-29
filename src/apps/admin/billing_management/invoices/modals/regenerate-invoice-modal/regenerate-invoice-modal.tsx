import { CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT } from 'src/apollo/codegen/graphql';
import { RegenerateInvoicesForMonthModal } from './regenerate-invoices-for-month';
import {
  RegenerateOneTimeInvoiceModal,
  instanceOfOneTimeSubscriptionInvoice,
} from './regenerate-one-time-invoice';

interface RegenerateInvoiceModalProps {
  customer_id: number;
  invoice: CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT;
  is_open: boolean;
  onClose: () => unknown;
}

const RegenerateInvoiceModal = ({
  customer_id,
  invoice,
  is_open,
  onClose,
}: RegenerateInvoiceModalProps) => {
  if (instanceOfOneTimeSubscriptionInvoice(invoice)) {
    return (
      <RegenerateOneTimeInvoiceModal
        is_open={is_open}
        customer_id={customer_id}
        invoice={invoice}
        onClose={onClose}
      />
    );
  }

  return (
    <RegenerateInvoicesForMonthModal
      is_open={is_open}
      customer_id={customer_id}
      invoice={invoice}
      onClose={onClose}
    />
  );
};

export { RegenerateInvoiceModal };
