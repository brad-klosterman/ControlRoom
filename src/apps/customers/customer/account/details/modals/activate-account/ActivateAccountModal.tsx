import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { UPDATE_CUSTOMER_STATUS_DOCUMENT } from 'codegen/graphql';
import { SimpleActionModal, ModalFormContent } from 'components/ui';
import { useResponseStatus } from 'hooks';
import { formatDate } from 'utils';
import {
  ActivateAccountForm,
  type ActivateAccountFormFields,
} from './ActivateAccountForm';
import type { CustomerAccountProfile } from '@customers/customer/types';

const ActivateAccountModal = (props: {
  customer: CustomerAccountProfile;
  is_open: boolean;
  onClose: () => unknown;
  onSuccess?: () => unknown;
}) => {
  const { customer } = props;
  const account_description = customer.account_description;

  /** API */
  const [updateCustomerStatusAPI, { loading: api_loading }] = useMutation(
    UPDATE_CUSTOMER_STATUS_DOCUMENT,
  );

  /** Form */
  const form = useForm<ActivateAccountFormFields>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      activation_date: formatDate(new Date()),
    },
  });

  function handleCloseModal() {
    form.reset();
    props.onClose();
  }

  const onSubmit: SubmitHandler<ActivateAccountFormFields> = fields => {
    updateCustomerStatusAPI({
      variables: {
        customer_id: customer.id,
        params: {
          status: 'active',
          change_status_at: fields.activation_date,
        },
      },
    })
      .then(() => {
        successAlert('ACCOUNT ACTIVATED');
        props.onSuccess?.();
        handleCloseModal();
      })
      .catch(() => {
        errorAlert('COULD NOT ACTIVATE ACCOUNT');
      });
  };

  const { errorAlert, successAlert } = useResponseStatus({
    id: 'activate-account-modal',
  });

  const modal_elements = (() => {
    return {
      title: 'ACTIVATE CUSTOMER ACCOUNT',
      subtitle: `Account: ${account_description}`,
    };
  })();

  return (
    <SimpleActionModal
      is_open={props.is_open}
      onClose={handleCloseModal}
      title={modal_elements.title}
      subtitle={modal_elements.subtitle}
      actions={[
        {
          title: 'CANCEL',
          onClick: handleCloseModal,
          variant: 'other-secondary',
          isLoading: api_loading,
        },
        {
          title: 'ACTIVATE',
          onClick: form.handleSubmit(onSubmit),
          variant: 'secondary',
          disabled: !form.formState.isValid,
          isLoading: api_loading,
        },
      ]}
    >
      <ModalFormContent>
        <ActivateAccountForm control={form.control} />
      </ModalFormContent>
    </SimpleActionModal>
  );
};

export { ActivateAccountModal };
