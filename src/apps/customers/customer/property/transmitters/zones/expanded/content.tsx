import { useState } from 'react';
import {
  PROPERTY_PROFILE_ZONE_FRAGMENT,
  CUSTOMER_PROFILE_PROPERTY_FRAGMENT,
  PROPERTY_PROFILE_TRANSMITTER_FRAGMENT,
} from 'codegen/graphql';
import { PutZoneOnHold } from './put-zone-on-hold';
import { UpdateZone } from './update-zone';

type ZoneWizardState = 'ZONE_UPDATE_VIEW' | 'ZONE_ON_HOLD_VIEW';

const ZoneContent = (props: {
  customer_id: number;
  property: CUSTOMER_PROFILE_PROPERTY_FRAGMENT;
  zone: PROPERTY_PROFILE_ZONE_FRAGMENT;
  transmitters: readonly PROPERTY_PROFILE_TRANSMITTER_FRAGMENT[];
}) => {
  const [zone_wizard_state, setZoneWizardState] =
    useState<ZoneWizardState>('ZONE_UPDATE_VIEW');

  const switchToZoneUpdateView = () => {
    setZoneWizardState('ZONE_UPDATE_VIEW');
  };

  const switchToZoneOnHoldView = () => {
    setZoneWizardState('ZONE_ON_HOLD_VIEW');
  };

  if (zone_wizard_state === 'ZONE_ON_HOLD_VIEW') {
    return (
      <PutZoneOnHold
        property={props.property}
        zone={props.zone}
        onClose={switchToZoneUpdateView}
      />
    );
  }

  return (
    <UpdateZone
      customer_id={props.customer_id}
      property={props.property}
      transmitters={props.transmitters}
      zone={props.zone}
      onPutZoneOnHoldClicked={switchToZoneOnHoldView}
    />
  );
};

export { ZoneContent };
