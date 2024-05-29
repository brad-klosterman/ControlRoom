import { memo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { TRANSMITTER_STATUS } from 'codegen/graphql';
import { Form, SimpleActionModal, ModalFormContent } from 'components/ui';

const UnassignTransmitterModal = (props: {
  is_open: boolean;
  onSubmit(payload: { transmitter_state: TRANSMITTER_STATUS }): void;
  onCancel(): void;
}) => {
  const form = useForm<{ transmitter_state: TRANSMITTER_STATUS }>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const watch_transmitter_state = form.watch('transmitter_state');

  const onSubmit: SubmitHandler<{
    transmitter_state: TRANSMITTER_STATUS;
  }> = async payload => {
    props.onSubmit(payload);
  };

  return (
    <SimpleActionModal
      title="UNASSIGNING TRANSMITTER"
      subtitle="Do you want to unassign a transmitter from this property?"
      is_open={props.is_open}
      actions={[
        {
          title: 'CANCEL',
          onClick: props.onCancel,
          variant: 'other-secondary',
        },
        {
          title: 'DEACTIVATE',
          onClick: form.handleSubmit(onSubmit),
          variant: 'dangerous',
          disabled: !watch_transmitter_state,
        },
      ]}
    >
      <ModalFormContent>
        <Form.Select
          control={form.control}
          label="Transmitter State"
          name="transmitter_state"
          options={[
            { label: 'Send Transmitter back to stock', value: 'IN_STOCK' },
            { label: 'Send Transmitter for repairs', value: 'IN_REPAIRS' },
          ]}
        />
      </ModalFormContent>
    </SimpleActionModal>
  );
};

export default memo(UnassignTransmitterModal);
