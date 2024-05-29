import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import {
  CUSTOMER_PROFILE_PROPERTY_FRAGMENT,
  UPDATE_PROPERTY_STATUS_DOCUMENT,
} from 'codegen/graphql';
import { useResponseStatus } from 'hooks';
import { formatDate } from 'utils';
import { SimpleActionModal, ModalFormContent } from 'components/ui';
import {
  DeactivatePropertyForm,
  type DeactivatePropertyFormFields,
} from './DeactivatePropertyForm';

const DeactivatePropertyModal = (props: {
  property: CUSTOMER_PROFILE_PROPERTY_FRAGMENT;
  is_open: boolean;
  onClose: () => unknown;
  onSuccess?: () => unknown;
}) => {
  const property_id = props.property.id;

  /** API */
  const [updatePropertyStatusAPI, { loading }] = useMutation(
    UPDATE_PROPERTY_STATUS_DOCUMENT,
  );

  /** Form */
  const deactivate_property_form = useForm<DeactivatePropertyFormFields>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      deactivation_date: formatDate(new Date()),
    },
  });

  const { successAlert, errorAlert } = useResponseStatus();

  const closeModal = () => {
    deactivate_property_form.reset();
    props.onClose();
  };

  const onSubmit: SubmitHandler<
    DeactivatePropertyFormFields
  > = async fields => {
    try {
      await updatePropertyStatusAPI({
        variables: {
          property_id,
          params: {
            status: 'inactive',
            change_status_at: fields.deactivation_date,
          },
        },
      });

      props.onSuccess?.();
      successAlert('Property Deactivated');
      closeModal();
    } catch {
      errorAlert('Error Deactivating Property');
    }
  };

  return (
    <SimpleActionModal
      is_open={props.is_open}
      onClose={closeModal}
      title="DEACTIVATE PROPERTY"
      actions={[
        {
          title: 'CANCEL',
          onClick: closeModal,
          variant: 'other-secondary',
          isLoading: loading,
        },
        {
          title: 'DEACTIVATE',
          onClick: deactivate_property_form.handleSubmit(onSubmit),
          variant: 'dangerous',
          disabled: !deactivate_property_form.formState.isValid,
          isLoading: loading,
        },
      ]}
    >
      <ModalFormContent>
        <DeactivatePropertyForm
          property={props.property}
          control={deactivate_property_form.control}
        />
      </ModalFormContent>
    </SimpleActionModal>
  );
};

export { DeactivatePropertyModal };
