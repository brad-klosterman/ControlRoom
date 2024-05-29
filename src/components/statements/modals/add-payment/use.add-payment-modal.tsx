import { useContext } from 'react';
import { PaymentMethodOption } from 'src/apps/admin/company_settings/settings/types';
import { Modal } from 'src/components';
import { formatDate } from 'src/utils/date.utils/formatDate';
import { OutstandingAmountText } from '../shared/components';
import { InvoiceOutstandingAmountSubset } from '../shared/types';
import { todays_date } from '../shared/constants';

interface AddPaymentForm {
  amount: string;
  paid_on?: string;
  actual_payment_method?: string;
  payment_reference_number?: string;
}

interface ModalOpenParams {
  payment_method_options: PaymentMethodOption[];
  invoice?: InvoiceOutstandingAmountSubset | null;
  onConfirm: (fields: AddPaymentForm) => unknown;
}

const useAddPaymentModal = () => {
  const modal = useContext(Modal.Context);

  const openAddPaymenttModal = ({
    onConfirm,
    payment_method_options,
    invoice,
  }: ModalOpenParams) => {
    modal.open({
      title: 'ADD PAYMENT',
      actions: [{ type: 'cancel' }, { type: 'confirm', text: 'ADD PAYMENT' }],
      component: () =>
        invoice ? (
          <OutstandingAmountText
            currency={invoice.currency}
            outstanding_amount={invoice.outstanding_amount}
          />
        ) : undefined,
      form: [
        {
          label: 'Total Amount To Pay',
          name: 'amount',
          type: 'Currency',
          required: true,
          default_value: invoice?.outstanding_amount,
        },
        {
          label: 'Paid On',
          name: 'paid_on',
          type: 'DatePicker',
          default_value: todays_date,
        },
        {
          label: 'Actual Payment Method',
          name: 'actual_payment_method',
          options: payment_method_options,
          type: 'Select',
        },
        {
          label: 'Payment Reference Number',
          name: 'payment_reference_number',
          type: 'Input',
        },
      ],
      onConfirm,
    });
  };

  return {
    open: (params: ModalOpenParams) => {
      openAddPaymenttModal(params);
    },
    close: modal.close,
  };
};

export { useAddPaymentModal };
