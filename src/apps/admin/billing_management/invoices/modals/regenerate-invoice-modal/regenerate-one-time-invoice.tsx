import {
  CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT,
  REGENERATE_ONE_TIME_INVOICE_DOCUMENT,
} from 'src/apollo/codegen/graphql';
import { RegenerateModalStyles as S } from './styles';
import { useResponseStatus } from 'src/hooks';
import { useMutation } from '@apollo/client';
import { getErrorMessage } from 'src/apollo/utils/error_handeling';
import { SimpleActionModal } from 'components/ui';

interface OneTimeInvoice extends CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT {
  for_one_time_subscription: true;
}

function instanceOfOneTimeSubscriptionInvoice(
  invoice: CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT,
): invoice is OneTimeInvoice {
  return invoice.for_one_time_subscription === true;
}

interface RegenerateInvoiceModalProps {
  is_open: boolean;
  customer_id: number;
  invoice: OneTimeInvoice;
  onClose: () => unknown;
}

const RegenerateOneTimeInvoiceModal = ({
  is_open,
  customer_id,
  invoice,
  onClose,
}: RegenerateInvoiceModalProps) => {
  const { errorAlert, successAlert } = useResponseStatus();

  const [regenerate_one_time_invoice, { loading }] = useMutation(
    REGENERATE_ONE_TIME_INVOICE_DOCUMENT,
  );

  const onRegenerateOneTimeInvoiceModal = async () => {
    try {
      const response = await regenerate_one_time_invoice({
        variables: {
          customer_id: customer_id,
          invoice_id: invoice.id,
        },
      });

      successAlert(
        response.data?.regenerate_one_time_invoice || 'INVOICE REGENERATED',
      );

      onClose();
    } catch (error) {
      errorAlert(getErrorMessage(error) || 'COULD NOT REGENERATE INVOICE');
    }
  };

  return (
    <SimpleActionModal
      title="REGENERATE INVOICE"
      is_open={is_open}
      onClose={onClose}
      actions={[
        {
          title: 'CANCEL',
          onClick: onClose,
          isLoading: loading,
          variant: 'other-secondary',
        },
        {
          title: 'REGENERATE INVOICE',
          onClick: onRegenerateOneTimeInvoiceModal,
          variant: 'primary',
        },
      ]}
    >
      <S.WarningText>
        <b>NOTE:</b> <br />
        <br />
        <i>This will regenerate this invoice including the latest updates.</i>
      </S.WarningText>
    </SimpleActionModal>
  );
};

export { RegenerateOneTimeInvoiceModal, instanceOfOneTimeSubscriptionInvoice };
