import { useMutation } from '@apollo/client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SimpleActionModal, ModalFormContent } from 'components/ui';
import { useResponseStatus } from 'hooks';
import { formatDate } from 'utils';
import {
  CUSTOMER_PROFILE_PROPERTY_FRAGMENT,
  UPDATE_PROPERTY_STATUS_DOCUMENT,
} from 'codegen/graphql';
import {
  ActivatePropertyForm,
  type ActivatePropertyFormFields,
} from './ActivatePropertyForm';

const ActivatePropertyModal = (props: {
  property: CUSTOMER_PROFILE_PROPERTY_FRAGMENT;
  is_open: boolean;
  onClose: () => unknown;
  onSuccess?: () => unknown;
}) => {
  const property_id = props.property.id;

  const [updatePropertyStatusAPI, { loading }] = useMutation(
    UPDATE_PROPERTY_STATUS_DOCUMENT,
  );
  const form = useForm<ActivatePropertyFormFields>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      activation_date: formatDate(new Date()),
    },
  });

  const closeModal = () => {
    form.reset();
    props.onClose();
  };

  const { errorAlert, successAlert } = useResponseStatus({
    id: 'activate-property-modal',
  });

  const onSubmit: SubmitHandler<ActivatePropertyFormFields> = async fields => {
    try {
      await updatePropertyStatusAPI({
        variables: {
          property_id,
          params: {
            status: 'active',
            change_status_at: fields.activation_date,
          },
        },
      });

      props.onSuccess?.();
      successAlert('PROPERTY ACTIVATED');
      closeModal();
    } catch {
      errorAlert('COULD NOT ACTIVATE PROPERTY');
    }
  };

  return (
    <SimpleActionModal
      title="ACTIVATE PROPERTY"
      actions={[
        {
          title: 'CANCEL',
          onClick: closeModal,
          variant: 'other-secondary',
          isLoading: loading,
        },
        {
          title: 'ACTIVATE',
          onClick: form.handleSubmit(onSubmit),
          variant: 'secondary',
          disabled: !form.formState.isValid,
          isLoading: loading,
        },
      ]}
      is_open={props.is_open}
      onClose={closeModal}
    >
      <ModalFormContent>
        <ActivatePropertyForm
          property={props.property}
          control={form.control}
          disabled={loading}
        />
      </ModalFormContent>
    </SimpleActionModal>
  );
};

export { ActivatePropertyModal };
