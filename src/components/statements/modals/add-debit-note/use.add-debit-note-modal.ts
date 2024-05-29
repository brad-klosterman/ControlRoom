import { useContext } from 'react';
import { Modal } from 'src/components';
import { todays_date } from '../shared/constants';

interface AddDebitForm {
  debit_amount: string;
  issue_date?: string;
  payment_reference_number?: string;
}

interface ModalOpenParams {
  onConfirm: (fields: AddDebitForm) => unknown;
}

const useAddDebitNoteModal = () => {
  const modal = useContext(Modal.Context);

  const openAddDebitModal = ({ onConfirm }: ModalOpenParams) => {
    modal.open({
      title: 'ADD  DEBIT NOTE',
      actions: [{ type: 'cancel' }, { type: 'confirm', text: 'DEBIT' }],
      form: [
        {
          label: 'Debit Note Amount',
          name: 'debit_amount',
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
      openAddDebitModal(params);
    },
    close: modal.close,
  };
};

export { useAddDebitNoteModal };
