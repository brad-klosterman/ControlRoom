import { SubmitHandler, useForm } from 'react-hook-form';
import { ExpandedContainer } from '../../styles';
import { PropertyZoneForm, ZoneForm } from './zone-form';
import {
  CUSTOMER_PROFILE_PROPERTY_FRAGMENT,
  DELETE_PROPERTY_ZONE_DOCUMENT,
  PROPERTY_PROFILE_TRANSMITTER_FRAGMENT,
  PROPERTY_PROFILE_ZONE_FRAGMENT,
  PROPERTY_ZONE_PARAMS,
  UPDATE_PROPERTY_ZONE_DOCUMENT,
} from 'src/apollo/codegen/graphql';
import { Button, Flex, Grid, Text } from 'src/components';
import {
  RequiresUpdateCustomersPermission,
  useCanUpdateCustomers,
} from 'src/app.state/permissions/hooks/update-customers.permission';
import { formatDateTime } from 'src/utils';
import { RequiresPutZonesOnHoldPermission } from 'src/app.state/permissions/hooks/put-zones-on-hold.permission';
import { useMutation } from '@apollo/client';
import { useResponseStatus } from 'src/hooks';
import { useProperty } from '../../../provider';
import { useExpanderContext } from 'src/components/ui/Expander';

interface Props {
  customer_id: number;
  property: CUSTOMER_PROFILE_PROPERTY_FRAGMENT;
  zone: PROPERTY_PROFILE_ZONE_FRAGMENT;
  transmitters: readonly PROPERTY_PROFILE_TRANSMITTER_FRAGMENT[];
  onPutZoneOnHoldClicked: () => unknown;
}

const UpdateZone = ({
  customer_id,
  property,
  zone,
  transmitters,
  onPutZoneOnHoldClicked,
}: Props) => {
  const { dispatch } = useProperty();
  const { setExpandedKeys } = useExpanderContext();
  const user_authorized_to_update_customer = useCanUpdateCustomers();

  const { successAlert } = useResponseStatus();

  const [update_zone] = useMutation(UPDATE_PROPERTY_ZONE_DOCUMENT);
  const [delete_zone] = useMutation(DELETE_PROPERTY_ZONE_DOCUMENT);

  const form = useForm<PropertyZoneForm>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      decoder_name: '',
      description: zone.description ?? null,
      number: zone.number ?? null,
      transmitter_id: zone.transmitter?.id,
      transmitter_name: zone.transmitter?.id?.toString(),
      zone_type: zone.zone_type ?? null,
    },
  });

  const saveZone = async (params: PROPERTY_ZONE_PARAMS) => {
    const selected_transmitter = transmitters.find(
      transmitter => transmitter.id === params.transmitter_id,
    );

    await update_zone({
      variables: {
        params: {
          ...params,
          transmitter_name: selected_transmitter?.number,
        },
        property_id: property.id,
        customer_id: customer_id,
        zone_id: zone.id,
      },
    });

    successAlert('UPDATING ZONE');
    await dispatch('FETCH_PROPERTY', { id: property.id });
  };

  const onSubmit: SubmitHandler<PropertyZoneForm> = async params => {
    if (!params.number || !params.zone_type) {
      return;
    }

    saveZone({
      ...params,
      zone_type: params.zone_type,
      number: params.number,
    });
  };

  const onDeleteZone = async () => {
    await delete_zone({
      variables: {
        property_id: property.id,
        zone_id: zone.id,
      },
    });

    successAlert('DELETING ZONE');
    await dispatch('FETCH_PROPERTY', { id: property.id });
    setExpandedKeys([]);
  };

  return (
    <ExpandedContainer on_hold={zone.on_hold_mode?.enabled}>
      <Grid spacing="large">
        <ZoneForm
          form_control={form.control}
          transmitters={transmitters}
          disabled={!user_authorized_to_update_customer}
        />
        <Grid.Cell justifyContent="space-between" x={[0, 12]} y={[4, 5]}>
          {zone.on_hold_mode?.enabled ? (
            <Flex direction="column">
              <Text colorKey="warning">ZONE ON HOLD SINCE</Text>
              <Text colorKey="warning">
                {formatDateTime({
                  date: zone.on_hold_mode?.enabled_at,
                  format: 'dateTime',
                  locale: 'en-ZA',
                })}
              </Text>
            </Flex>
          ) : (
            <RequiresPutZonesOnHoldPermission>
              <Button
                onClick={onPutZoneOnHoldClicked}
                size="small"
                variant="other-secondary"
              >
                PUT ZONE ON HOLD
              </Button>
            </RequiresPutZonesOnHoldPermission>
          )}

          <RequiresUpdateCustomersPermission>
            <Flex gap="small">
              <Button onClick={onDeleteZone} size="small" variant="delete">
                DELETE
              </Button>

              <Button
                disabled={!form.formState.isValid}
                onClick={form.handleSubmit(onSubmit)}
                size="small"
              >
                SAVE
              </Button>
            </Flex>
          </RequiresUpdateCustomersPermission>
        </Grid.Cell>
      </Grid>
    </ExpandedContainer>
  );
};

export { UpdateZone };
