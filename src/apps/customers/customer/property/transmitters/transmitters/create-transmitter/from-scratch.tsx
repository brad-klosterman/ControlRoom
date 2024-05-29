import { useMutation } from '@apollo/client';
import {
  CREATE_TRANSMITTER_DOCUMENT,
  UPDATE_TRANSMITTER_PARAMS,
} from 'src/apollo/codegen/graphql';
import { TransmitterForm } from '../transmitter-form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RequiresUpdateCustomersPermission } from 'src/app.state/permissions/hooks/update-customers.permission';
import { Button, Flex } from 'src/components';
import { useState } from 'react';
import { useResponseStatus } from 'src/hooks';
import { useProperty } from '../../../provider';

interface Props {
  property_id: number;
  onTransmitterCreated: () => unknown;
  onCancel: () => unknown;
}

const CreateTransmitterFromScratchView = ({
  property_id,
  onTransmitterCreated,
  onCancel,
}: Props) => {
  const [is_form_loading, setIsFormLoading] = useState(false);
  const { dispatch } = useProperty();
  const { errorAlert, successAlert } = useResponseStatus();
  const { control, formState, handleSubmit } =
    useForm<UPDATE_TRANSMITTER_PARAMS>({
      mode: 'onSubmit',
      reValidateMode: 'onChange',
      defaultValues: {
        number: null,
        area_id: null,
        decoder_name: null,
        heartbeat_interval: null,
        set_name: null,
        description: null,
      },
    });

  const [create_transmitter] = useMutation(CREATE_TRANSMITTER_DOCUMENT);

  const onSubmitForm: SubmitHandler<
    UPDATE_TRANSMITTER_PARAMS
  > = async params => {
    setIsFormLoading(true);

    try {
      await create_transmitter({
        variables: {
          params: {
            ...params,
            number: params.number!,
            decoder_name: params.decoder_name!,
            set_name: params.set_name!,
            property_id,
          },
        },
      });

      successAlert('UPDATING TRANSMITTER');
      await dispatch('FETCH_PROPERTY', { id: property_id });
    } catch (error: any) {
      const transmitter_error =
        error?.graphQLErrors[0]?.extensions?.response?.body?.errors
          ?.transmitter[0];
      errorAlert(transmitter_error);
    }

    setIsFormLoading(false);
    onTransmitterCreated();
  };

  return (
    <>
      <TransmitterForm form_control={{ ...control }} />
      <RequiresUpdateCustomersPermission>
        <Flex
          gap="small"
          justifyContent="flex-end"
          style={{ marginTop: '1rem' }}
        >
          <Button size="small" variant="other-secondary" onClick={onCancel}>
            CANCEL
          </Button>
          <Button
            isLoading={is_form_loading}
            disabled={!formState.isValid}
            onClick={handleSubmit(onSubmitForm)}
            size="small"
          >
            CREATE
          </Button>
        </Flex>
      </RequiresUpdateCustomersPermission>
    </>
  );
};

export { CreateTransmitterFromScratchView };
