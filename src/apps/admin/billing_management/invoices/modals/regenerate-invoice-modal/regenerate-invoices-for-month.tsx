import {
  CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT,
  REGENERATE_CUSTOMERS_INVOICES_DOCUMENT,
} from 'src/apollo/codegen/graphql';

import { RegenerateModalStyles as S } from './styles';
import { Form, ModalFormContent, SimpleActionModal } from 'components/ui';
import { ControlledDatePicker } from 'src/components/ui/DatePicker/controlled';
import { useResponseStatus } from 'src/hooks';
import { useMutation } from '@apollo/client';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  formatDate,
  formatYearMonthString,
} from 'src/utils/date.utils/formatDate';
import { getErrorMessage } from 'src/apollo/utils/error_handeling';

interface RegenerateInvoicesForMonthFormFields {
  issue_date_of_invoice: string | null;
  description: string | null;
}

interface Props {
  customer_id: number;
  invoice: CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT;
  is_open: boolean;
  onClose: () => unknown;
}

const RegenerateInvoicesForMonthModal = ({
  is_open,
  customer_id,
  invoice,
  onClose,
}: Props) => {
  const { errorAlert, successAlert } = useResponseStatus();

  const [regenerate_customers_invoices, { loading }] = useMutation(
    REGENERATE_CUSTOMERS_INVOICES_DOCUMENT,
  );

  const regenerate_invoice_form = useForm<RegenerateInvoicesForMonthFormFields>(
    {
      mode: 'onSubmit',
      defaultValues: {
        issue_date_of_invoice: formatDate(new Date()),
        description: invoice.description ?? null,
      },
    },
  );

  const onSubmit: SubmitHandler<
    RegenerateInvoicesForMonthFormFields
  > = async fields => {
    if (!fields.issue_date_of_invoice || !fields.description) {
      return;
    }

    try {
      const response = await regenerate_customers_invoices({
        variables: {
          customer_id: customer_id,
          month_of: formatYearMonthString(invoice.created_at),
          invoice_date: fields.issue_date_of_invoice,
          invoice_description: fields.description,
        },
      });

      successAlert(
        response.data?.regenerate_customers_invoices || 'INVOICE REGENERATED',
      );

      onClose();
    } catch (error) {
      errorAlert(getErrorMessage(error) || 'COULD NOT REGENERATE INVOICE');
    }
  };

  return (
    <SimpleActionModal
      is_open={is_open}
      title="REGENERATE INVOICE"
      onClose={onClose}
      actions={[
        {
          title: 'CANCEL',
          isLoading: loading,
          onClick: onClose,
          variant: 'other-secondary',
        },
        {
          title: 'REGENERATE INVOICE',
          isLoading: loading,
          onClick: regenerate_invoice_form.handleSubmit(onSubmit),
          variant: 'primary',
        },
      ]}
    >
      <ModalFormContent>
        <S.WarningText>
          <b>NOTE:</b> <br />
          <br />
          <i>
            Regenerating this invoice will regenerate all unpaid invoices for
            this customer for this month.
          </i>
        </S.WarningText>
        <Form.Input
          label="Invoice Description"
          name="description"
          control={regenerate_invoice_form.control}
        />
        <ControlledDatePicker
          label="Issue Date of Invoice"
          name="issue_date_of_invoice"
          control={regenerate_invoice_form.control}
        />
      </ModalFormContent>
    </SimpleActionModal>
  );
};

export { RegenerateInvoicesForMonthModal };
