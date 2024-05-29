import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  TRANSMITTER,
  UPDATE_TRANSMITTER_DOCUMENT,
  UPDATE_TRANSMITTER_PARAMS,
  UPDATE_TRANSMITTER_STATUS_DOCUMENT,
} from 'src/apollo/codegen/graphql';
import {
  TransmitterSelector,
  TransmitterSelectorPayload,
} from 'src/apps/admin/company_settings/transmitters/selector';
import { TransmitterForm } from '../transmitter-form';
import { useProperty } from '../../../provider';
import { useResponseStatus } from 'src/hooks';
import { RequiresUpdateCustomersPermission } from 'src/app.state/permissions/hooks/update-customers.permission';
import { Button, Flex } from 'src/components';
import { useMutation } from '@apollo/client';

interface UpdateFromStockFormProps extends CreateTransmitterFromStockViewProps {
  transmitter: TRANSMITTER | undefined;
}

const UpdateFromStockForm = ({
  property_id,
  transmitter,
  onTransmitterCreated,
  onCancel,
}: UpdateFromStockFormProps) => {
  const [is_form_loading, setIsFormLoading] = useState(false);
  const { dispatch } = useProperty();
  const { errorAlert, successAlert } = useResponseStatus();

  const [update_transmitter_status] = useMutation(
    UPDATE_TRANSMITTER_STATUS_DOCUMENT,
  );
  const [update_transmitter] = useMutation(UPDATE_TRANSMITTER_DOCUMENT);

  const { control, formState, handleSubmit, reset, clearErrors } =
    useForm<UPDATE_TRANSMITTER_PARAMS>({
      mode: 'onSubmit',
      defaultValues: {
        number: null,
        area_id: null,
        decoder_name: null,
        heartbeat_interval: null,
        set_name: null,
      },
    });

  useEffect(() => {
    if (!transmitter) {
      return;
    }

    reset({
      number: transmitter?.number || null,
      area_id: transmitter?.area?.id ?? null,
      decoder_name: transmitter?.decoder?.name ?? null,
      heartbeat_interval: transmitter?.heartbeat_interval ?? null,
      set_name: transmitter?.set_name || null,
    });

    // Clear errors, since this is a previously saved transmitter
    clearErrors();
  }, [transmitter?.id]);

  const onSubmitForm: SubmitHandler<
    UPDATE_TRANSMITTER_PARAMS
  > = async params => {
    if (!transmitter) {
      return;
    }

    setIsFormLoading(true);

    try {
      await update_transmitter_status({
        variables: {
          id: transmitter.id,
          property_id,
          status: 'IN_USE',
        },
      });

      await update_transmitter({
        variables: {
          id: transmitter.id,
          params,
        },
      });

      successAlert('TRANSMITTER UPDATED');
      await dispatch('FETCH_PROPERTY', { id: property_id });
      onTransmitterCreated();
    } catch (error: any) {
      const transmitter_error =
        error?.graphQLErrors[0]?.extensions?.response?.body?.errors
          ?.transmitter[0];
      errorAlert(transmitter_error);
    }

    setIsFormLoading(false);
  };

  return (
    <>
      {transmitter && (
        <TransmitterForm disabled={is_form_loading} form_control={control} />
      )}
      <RequiresUpdateCustomersPermission>
        <Flex
          gap="small"
          justifyContent="flex-end"
          style={{ marginTop: '1rem' }}
        >
          <Button onClick={onCancel} size="small" variant="other-secondary">
            CANCEL
          </Button>
          <Button
            isLoading={is_form_loading}
            disabled={!transmitter || !formState.isValid}
            onClick={handleSubmit(onSubmitForm)}
            size="small"
          >
            SAVE
          </Button>
        </Flex>
      </RequiresUpdateCustomersPermission>
    </>
  );
};

interface CreateTransmitterFromStockViewProps {
  property_id: number;
  onTransmitterCreated: () => unknown;
  onCancel: () => unknown;
}

const CreateTransmitterFromStockView = ({
  property_id,
  onTransmitterCreated,
  onCancel,
}: CreateTransmitterFromStockViewProps) => {
  const [selected_transmitter, setSelectedTransmitter] = useState<
    TRANSMITTER | undefined
  >();

  const onSelectTransmitter = ({
    selected_transmitter,
  }: TransmitterSelectorPayload) => {
    setSelectedTransmitter(selected_transmitter);
  };

  return (
    <>
      <TransmitterSelector
        selected_transmitter_id={selected_transmitter?.id}
        selectTransmitter={onSelectTransmitter}
        statuses={['IN_REPAIRS', 'IN_STOCK', 'UNKNOWN_CUSTOMER']}
      />
      <UpdateFromStockForm
        property_id={property_id}
        onTransmitterCreated={onTransmitterCreated}
        onCancel={onCancel}
        transmitter={selected_transmitter}
      />
    </>
  );
};

export { CreateTransmitterFromStockView };
