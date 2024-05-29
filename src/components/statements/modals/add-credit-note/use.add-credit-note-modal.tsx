import { useContext } from 'react';
import { Modal } from 'src/components';
import { InvoiceOutstandingAmountSubset } from '../shared/types';
import { OutstandingAmountText } from '../shared/components';
import { todays_date } from '../shared/constants';

interface AddCreditForm {
  credit_amount: string;
  issue_date?: string;
  payment_reference_number?: string;
}

interface ModalOpenParams {
  invoice?: InvoiceOutstandingAmountSubset | null;
  onConfirm: (fields: AddCreditForm) => unknown;
}

const useAddCreditNoteModal = () => {
  const modal = useContext(Modal.Context);

  const openAddCreditModal = ({ invoice, onConfirm }: ModalOpenParams) => {
    modal.open({
      title: 'ADD CREDIT NOTE',
      actions: [{ type: 'cancel' }, { type: 'confirm', text: 'CREDIT' }],
      component: () =>
        invoice ? (
          <OutstandingAmountText
            currency={invoice.currency}
            outstanding_amount={invoice.outstanding_amount}
          />
        ) : undefined,
      form: [
        {
          label: 'Credit Note Amount',
          name: 'credit_amount',
          type: 'Currency',
          required: true,
        },
        {
          label: 'Issue Date',
          name: 'issue_date',
          type: 'DatePicker',
          default_value: todays_date,
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
      openAddCreditModal(params);
    },
    close: modal.close,
  };
};

export { useAddCreditNoteModal };
