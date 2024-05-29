import {
  CUSTOMER_PROFILE_PROPERTY_FRAGMENT,
  PROPERTY_PROFILE_ZONE_FRAGMENT,
  SET_ZONE_ON_HOLD_MODE_DOCUMENT,
} from 'src/apollo/codegen/graphql';
import { ExpandedContainer } from '../../styles';
import { Button, Grid } from 'src/components';
import { BasicSelect } from 'src/components/ui/Form/Field/Select/select.components';
import { useCanUpdateCustomers } from 'src/app.state/permissions/hooks/update-customers.permission';
import { ZONE_TESTING_TIMES } from 'src/apps/admin/company_settings/transmitters/form.values';
import { useState } from 'react';
import PasswordVerify from 'src/components/password-verify';
import { RequiresPutZonesOnHoldPermission } from 'src/app.state/permissions/hooks/put-zones-on-hold.permission';
import { useMutation } from '@apollo/client';
import { useResponseStatus } from 'src/hooks';
import { useProperty } from '../../../provider';

interface Props {
  property: CUSTOMER_PROFILE_PROPERTY_FRAGMENT;
  zone: PROPERTY_PROFILE_ZONE_FRAGMENT;
  onClose: () => unknown;
}

const PutZoneOnHold = ({ property, zone, onClose }: Props) => {
  const { dispatch } = useProperty();
  const user_authorized_to_update_customer = useCanUpdateCustomers();
  const [password_verified, setPasswordVerified] = useState(false);
  const [testing_time, setTestingTime] = useState({
    label: '1 Hour',
    value: '60',
  });

  const { successAlert } = useResponseStatus();

  const [set_zone_on_hold_mode] = useMutation(SET_ZONE_ON_HOLD_MODE_DOCUMENT);

  const onStartTesting = async () => {
    await set_zone_on_hold_mode({
      variables: {
        property_id: property.id,
        zone_id: zone.id,
        on_hold_time: testing_time.value,
      },
    });

    successAlert('ENABLING TESTING MODE');
    await dispatch('FETCH_PROPERTY', { id: property.id });
    onClose();
  };

  return (
    <ExpandedContainer on_hold={zone.on_hold_mode?.enabled}>
      <Grid spacing="large">
        <Grid.Cell x={[0, 12]} y={[0, 1]}>
          <BasicSelect
            disabled={!user_authorized_to_update_customer}
            id={`${zone.id}-testing-time`}
            label="On Hold Time"
            options={ZONE_TESTING_TIMES}
            selected={testing_time}
            setSelected={time => setTestingTime(time)}
          />
        </Grid.Cell>
        <Grid.Cell x={[0, 12]} y={[1, 2]}>
          <PasswordVerify
            isInitVerified={!property.password}
            label="Property Password"
            onSelectOption={value => setPasswordVerified(value)}
            password={property.password}
          />
        </Grid.Cell>

        <Grid.Cell
          justifyContent="flex-end"
          spacing="small"
          x={[0, 12]}
          y={[2, 3]}
        >
          <RequiresPutZonesOnHoldPermission>
            <Button
              disabled={!password_verified}
              onClick={onStartTesting}
              size="small"
              variant="secondary"
            >
              PUT ZONE ON HOLD
            </Button>
          </RequiresPutZonesOnHoldPermission>
          <Button onClick={onClose} size="small" variant="delete">
            CANCEL SETUP
          </Button>
        </Grid.Cell>
      </Grid>
    </ExpandedContainer>
  );
};

export { PutZoneOnHold };
