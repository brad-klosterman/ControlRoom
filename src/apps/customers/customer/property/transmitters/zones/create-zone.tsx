import { useResponseStatus } from 'src/hooks';
import { useProperty } from '../../provider';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PropertyZoneForm, ZoneForm } from './expanded/zone-form';
import { useMutation } from '@apollo/client';
import {
  CREATE_PROPERTY_ZONE_DOCUMENT,
  CUSTOMER_PROFILE_PROPERTY_FRAGMENT,
  PROPERTY_PROFILE_TRANSMITTER_FRAGMENT,
  PROPERTY_PROFILE_ZONE_FRAGMENT,
  PROPERTY_ZONE_PARAMS,
} from 'src/apollo/codegen/graphql';
import { ExpandedContainer } from '../styles';
import { Button, Flex, Grid } from 'src/components';
import {
  RequiresUpdateCustomersPermission,
  useCanUpdateCustomers,
} from 'src/app.state/permissions/hooks/update-customers.permission';

interface Props {
  customer_id: number;
  property: CUSTOMER_PROFILE_PROPERTY_FRAGMENT;
  transmitters: readonly PROPERTY_PROFILE_TRANSMITTER_FRAGMENT[];
  onClose: () => unknown;
}

const CreateZoneView = ({
  customer_id,
  property,
  transmitters,
  onClose,
}: Props) => {
  const { dispatch } = useProperty();
  const user_authorized_to_update_customer = useCanUpdateCustomers();
  const { successAlert } = useResponseStatus();
  const { control, formState, handleSubmit } = useForm<PropertyZoneForm>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      decoder_name: '',
      description: null,
      number: null,
      transmitter_id: null,
      transmitter_name: null,
      zone_type: null,
    },
  });

  const [create_zone] = useMutation(CREATE_PROPERTY_ZONE_DOCUMENT);

  const createNewZone = async (params: PROPERTY_ZONE_PARAMS) => {
    const selected_transmitter = transmitters.find(
      transmitter => transmitter.id === params.transmitter_id,
    );

    await create_zone({
      variables: {
        params: {
          ...params,
          transmitter_name: selected_transmitter?.number,
        },
        property_id: property.id,
        customer_id: customer_id,
      },
    });

    successAlert('ZONE CREATED');
    await dispatch('FETCH_PROPERTY', { id: property.id });
    onClose();
  };

  const onSubmit: SubmitHandler<PropertyZoneForm> = async params => {
    if (!params.number || !params.zone_type) {
      return;
    }

    createNewZone({
      ...params,
      zone_type: params.zone_type,
      number: params.number,
    });
  };

  return (
    <Grid spacing="large">
      <ZoneForm
        form_control={control}
        transmitters={transmitters}
        disabled={!user_authorized_to_update_customer}
      />
      <Grid.Cell justifyContent="flex-end" x={[0, 12]} y={[4, 5]}>
        <RequiresUpdateCustomersPermission>
          <Flex gap="small">
            <Button onClick={onClose} size="small" variant="other-secondary">
              CANCEL
            </Button>

            <Button
              disabled={!formState.isValid}
              onClick={handleSubmit(onSubmit)}
              size="small"
            >
              CREATE
            </Button>
          </Flex>
        </RequiresUpdateCustomersPermission>
      </Grid.Cell>
    </Grid>
  );
};

export { CreateZoneView };
