import { useState } from 'react';
import { Button, Text } from 'src/components';
import { TransmitterStyles } from '../styles';
import { RequiresUpdateCustomersPermission } from 'src/app.state/permissions/hooks/update-customers.permission';
import {
  CUSTOMER_PROFILE_PROPERTY_FRAGMENT,
  PROPERTY_PROFILE_TRANSMITTER_FRAGMENT,
  PROPERTY_PROFILE_ZONE_FRAGMENT,
} from 'src/apollo/codegen/graphql';
import { CreateZoneView } from './create-zone';
import { ZoneListView } from './list-view';

interface ZonesContainerProps {
  customer_id: number;
  property: CUSTOMER_PROFILE_PROPERTY_FRAGMENT;
  zones: readonly PROPERTY_PROFILE_ZONE_FRAGMENT[];
  transmitters: readonly PROPERTY_PROFILE_TRANSMITTER_FRAGMENT[];
}

const ZonesContainer = ({
  customer_id,
  property,
  zones,
  transmitters,
}: ZonesContainerProps) => {
  const [is_creating_new_zone, setIsCreatingNewZone] = useState<boolean>(false);

  const openZoneCreation = () => {
    setIsCreatingNewZone(true);
  };

  const closeZoneCreation = () => {
    setIsCreatingNewZone(false);
  };

  return (
    <>
      <TransmitterStyles.PageColumnHeader>
        <Text size="displayRegular">PROPERTY ZONES</Text>
        <RequiresUpdateCustomersPermission>
          {!is_creating_new_zone && (
            <Button onClick={openZoneCreation} size="small" variant="secondary">
              NEW PROPERTY ZONE
            </Button>
          )}
        </RequiresUpdateCustomersPermission>
      </TransmitterStyles.PageColumnHeader>
      {is_creating_new_zone ? (
        <CreateZoneView
          customer_id={customer_id}
          property={property}
          transmitters={transmitters}
          onClose={closeZoneCreation}
        />
      ) : (
        <ZoneListView
          customer_id={customer_id}
          property={property}
          transmitters={transmitters}
          zones={zones}
        />
      )}
    </>
  );
};

export { ZonesContainer };
