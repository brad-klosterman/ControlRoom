import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { getFragment } from 'codegen';
import {
  CUSTOMER_PROFILE_PROPERTY_FRAGMENT_DOC,
  UPDATE_PROPERTY_STATUS_DOCUMENT,
} from 'codegen/graphql';
import { ModalFormContent, SimpleActionModal } from 'components';
import { useResponseStatus } from 'hooks';

import { CustomerAccountProfile } from '@customers/customer/types';
import {
  SuspendPropertiesForm,
  SuspendPropertiesFormFields,
} from './SuspendPropertiesForm';

const SuspendPropertiesModal = (props: {
  customer: CustomerAccountProfile;
  is_open: boolean;
  onClose: () => unknown;
  onSuccess?: () => unknown;
}) => {
  const { customer } = props;
  const account_description = customer.account_description || '';

  const [step, setStep] = useState<1 | 2>(1);

  /** API */
  const [updatePropertyStatusAPI, { loading: api_loading }] = useMutation(
    UPDATE_PROPERTY_STATUS_DOCUMENT,
  );

  /** Form */
  const form = useForm<SuspendPropertiesFormFields>();

  function resetForm() {
    setStep(1);
    form.reset();
  }

  const { errorAlert, successAlert } = useResponseStatus({
    id: 'deactivate-account-modal',
  });

  function handleCloseModal() {
    resetForm();
    props.onClose();
  }

  const shouldSuspendAllProperties = (
    fields: SuspendPropertiesFormFields,
  ): boolean => {
    return fields.property_id === -1;
  };

  const suspendProperty = async (
    property_id: number,
    fields: Omit<SuspendPropertiesFormFields, 'property_id'>,
  ) => {
    return updatePropertyStatusAPI({
      variables: {
        property_id,
        params: {
          status: 'suspended',
          change_status_at: fields.suspend_date,
          status_changed_reason_id: fields.suspend_reason_id,
          reactivation_date: fields.reactivation_date,
        },
      },
    });
  };

  const suspendAllProperties = async (
    fields: Omit<SuspendPropertiesFormFields, 'property_id'>,
  ) => {
    const customer_properties = getFragment(
      CUSTOMER_PROFILE_PROPERTY_FRAGMENT_DOC,
      customer.properties,
    );
    const all_property_ids = customer_properties.map(property => property.id);
    return Promise.all(
      all_property_ids.map(property_id => suspendProperty(property_id, fields)),
    );
  };

  const submitForm: SubmitHandler<
    SuspendPropertiesFormFields
  > = async fields => {
    const valid_reactivation_date = (() =>
      !fields.reactivation_date ||
      !fields.suspend_date ||
      fields.suspend_date < fields.reactivation_date)();

    if (!valid_reactivation_date) {
      form.setError('reactivation_date', {
        type: 'custom',
        message: 'Reactivation date must be after Suspension Date',
      });
    } else {
      try {
        if (shouldSuspendAllProperties(fields)) {
          await suspendAllProperties(fields);
          successAlert('ALL PROPERTIES SUSPENDED');
        } else {
          await suspendProperty(fields.property_id, fields);
          successAlert('PROPERTY SUSPENDED');
        }

        props.onSuccess?.();
        handleCloseModal();
      } catch {
        errorAlert('COULD NOT SUSPEND PROPERTY');
      }
    }
  };

  async function onClickSuspend() {
    if (step === 1) {
      setStep(2);
    }

    if (step === 2) {
      await form.handleSubmit(submitForm)();
    }
  }

  const modal_elements = (() => {
    if (step === 1) {
      return {
        title: `SUSPEND PROPERTY`,
        subtitle: `Customer Account: ${account_description}`,
        confirm_button: 'PROCEED',
      };
    }

    return {
      title: `SUSPEND PROPERTY`,
      subtitle: `Are you sure you want to suspend?`,
      info: `This will send incoming alarm signals to the Non-Emergency Stack.
        It will not change running subscriptions.`,
      confirm_button: 'SUSPEND',
    };
  })();

  function selectedDefaultProperty(property_id: number) {
    form.setValue('property_id', property_id);
  }

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
            title: modal_elements.confirm_button,
            onClick: onClickSuspend,
            variant: 'dangerous',
            disabled: !form.formState.isValid,
            isLoading: api_loading,
          },
        ]}
      >
        <ModalFormContent style={{ width: '48rem' }}>
          <SuspendPropertiesForm
            customer={customer}
            control={form.control}
            selectedDefaultProperty={selectedDefaultProperty}
          />
        </ModalFormContent>
      </SimpleActionModal>
    </>
  );
};

export { SuspendPropertiesModal };
