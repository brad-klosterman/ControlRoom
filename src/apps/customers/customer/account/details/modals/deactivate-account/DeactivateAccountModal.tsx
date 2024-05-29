import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { UPDATE_CUSTOMER_STATUS_DOCUMENT } from 'codegen/graphql';
import { SimpleActionModal, ModalFormContent } from 'components';
import { useResponseStatus } from 'hooks';
import { formatDate } from 'utils';
import { type CustomerAccountProfile } from '@customers/customer/types';
import {
  DeactivateAccountForm,
  type DeactivateAccountFormFields,
} from './DeactivateAccountForm';

const DeactivateAccountModal = (props: {
  customer: CustomerAccountProfile;
  is_open: boolean;
  onClose: () => unknown;
  onSuccess?: () => unknown;
}) => {
  const { customer } = props;
  const account_description = customer.account_description || '';

  const [step, setStep] = useState<1 | 2>(1);

  /** API */
  const [updateCustomerStatusAPI, { loading: api_loading }] = useMutation(
    UPDATE_CUSTOMER_STATUS_DOCUMENT,
  );

  /** Form */
  const form = useForm<DeactivateAccountFormFields>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      deactivation_date: formatDate(new Date()),
    },
  });

  useEffect(() => {
    if (props.is_open) {
      form.reset();
      setStep(1);
    }
  }, [props.is_open]);

  const { errorAlert, successAlert } = useResponseStatus({
    id: 'deactivate-account-modal',
  });

  function handleCloseModal() {
    form.reset();
    props.onClose();
  }

  const onSubmit: SubmitHandler<DeactivateAccountFormFields> = fields => {
    updateCustomerStatusAPI({
      variables: {
        customer_id: customer.id,
        params: {
          status: 'inactive',
          change_status_at: fields.deactivation_date,
          status_changed_reason_id: fields.deactivation_reason_id,
        },
      },
    })
      .then(() => {
        successAlert('Account Deactivated');
        props.onSuccess?.();
        handleCloseModal();
      })
      .catch(() => {
        errorAlert('Error Deactivating Account');
      });
  };

  async function handleConfirmDeactivation() {
    if (step === 1) {
      setStep(2);
    }

    if (step === 2) {
      await form.handleSubmit(onSubmit)();
    }
  }

  const modal_elements = (() => {
    if (step === 1)
      return {
        title: 'DEACTIVATING CUSTOMER ACCOUNT',
        subtitle: `${account_description}`,
      };

    return {
      title: 'DEACTIVATE CUSTOMER ACCOUNT',
      subtitle: `Are you sure you want to deactivate this account?`,
      info: 'This will deactivate all properties and cancel running subscriptions.',
    };
  })();

  return (
    <>
      <SimpleActionModal
        title={modal_elements.title}
        subtitle={modal_elements.subtitle}
        info={modal_elements.info}
        is_open={props.is_open}
        onClose={handleCloseModal}
        actions={[
          {
            title: 'CANCEL',
            onClick: handleCloseModal,
            variant: 'other-secondary',
            isLoading: api_loading,
          },
          {
            title: 'DEACTIVATE',
            onClick: handleConfirmDeactivation,
            variant: 'dangerous',
            disabled: !form.formState.isValid,
            isLoading: api_loading,
          },
        ]}
      >
        <ModalFormContent style={{ width: '40rem' }}>
          <DeactivateAccountForm control={form.control} />
        </ModalFormContent>
      </SimpleActionModal>
    </>
  );
};

export { DeactivateAccountModal };
