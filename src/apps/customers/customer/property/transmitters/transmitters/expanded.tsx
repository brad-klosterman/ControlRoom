import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useProperty } from 'apps/customers/customer/property/provider';
import { ExpandedContainer } from 'apps/customers/customer/property/transmitters/styles';
import UnassignTransmitterModal from 'src/apps/customers/customer/property/transmitters/transmitters/unassign-modal';
import {
  UPDATE_TRANSMITTER_STATUS_DOCUMENT,
  PROPERTY_PROFILE_TRANSMITTER_FRAGMENT,
  UPDATE_TRANSMITTER_DOCUMENT,
  TRANSMITTER_STATUS,
  UPDATE_TRANSMITTER_PARAMS,
} from 'codegen/graphql';
import { Button, Flex } from 'components/ui';
import { useResponseStatus } from 'hooks';
import {
  RequiresUpdateCustomersPermission,
  useCanUpdateCustomers,
} from 'src/app.state/permissions/hooks/update-customers.permission';
import { TransmitterForm } from './transmitter-form';
import { useExpanderContext } from 'src/components/ui/Expander';

const ExpandedTransmitterContent = (props: {
  transmitter: PROPERTY_PROFILE_TRANSMITTER_FRAGMENT;
  property_id: number;
}) => {
  const { property_id, transmitter } = props;
  const { dispatch } = useProperty();
  const [is_form_loading, setIsFormLoading] = useState(false);
  const [is_unassign_modal_open, setIsUnassignModalOpen] = useState(false);
  const { setExpandedKeys } = useExpanderContext();
  const user_authorized_to_update_customer = useCanUpdateCustomers();

  const { control, formState, handleSubmit } =
    useForm<UPDATE_TRANSMITTER_PARAMS>({
      mode: 'onSubmit',
      reValidateMode: 'onChange',
      defaultValues: {
        number: transmitter.number || null,
        area_id: transmitter.area?.id ?? null,
        decoder_name: transmitter.decoder?.name ?? null,
        heartbeat_interval: transmitter.heartbeat_interval ?? null,
        set_name: transmitter.set_name || null,
        description: transmitter.description || null,
      },
    });

  const [update_transmitter] = useMutation(UPDATE_TRANSMITTER_DOCUMENT);

  const [update_transmitter_status] = useMutation(
    UPDATE_TRANSMITTER_STATUS_DOCUMENT,
  );

  const { errorAlert, successAlert } = useResponseStatus();

  const onSubmitForm: SubmitHandler<
    UPDATE_TRANSMITTER_PARAMS
  > = async variables => {
    setIsFormLoading(true);
    try {
      await update_transmitter({
        variables: {
          id: transmitter.id,
          params: {
            ...variables,
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
  };

  const unassignTransmitter = async (payload: {
    transmitter_state: TRANSMITTER_STATUS;
  }) => {
    await update_transmitter_status({
      variables: {
        id: transmitter.id,
        property_id: null,
        status: payload.transmitter_state,
      },
    });

    successAlert('UNASSIGNED TRANSMITTER');
    await dispatch('FETCH_PROPERTY', { id: property_id });
    setExpandedKeys([]);
    setIsUnassignModalOpen(false);
  };

  const openUnassignTransmitterModal = async () => {
    setIsUnassignModalOpen(true);
  };

  return (
    <>
      <ExpandedContainer>
        <TransmitterForm
          disabled={!user_authorized_to_update_customer || is_form_loading}
          form_control={{ ...control }}
        />
        <RequiresUpdateCustomersPermission>
          <Flex
            gap="small"
            justifyContent="flex-end"
            style={{ marginTop: '1rem' }}
          >
            <Button
              onClick={openUnassignTransmitterModal}
              size="small"
              variant="delete"
            >
              UNASSIGN
            </Button>
            <Button
              isLoading={is_form_loading}
              disabled={!formState.isValid}
              onClick={handleSubmit(onSubmitForm)}
              size="small"
            >
              SAVE
            </Button>
          </Flex>
        </RequiresUpdateCustomersPermission>
      </ExpandedContainer>
      <UnassignTransmitterModal
        onCancel={() => setIsUnassignModalOpen(false)}
        onSubmit={unassignTransmitter}
        is_open={is_unassign_modal_open}
      />
    </>
  );
};

export { ExpandedTransmitterContent };
