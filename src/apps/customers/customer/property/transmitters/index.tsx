import { memo } from 'react';

import { PROPERTY_PROFILE_TRANSMITTER } from 'apps/customers/API';
import { useCustomer } from 'apps/customers/customer/provider';
import { getFragment } from 'codegen';
import { useProperty } from '../provider';
import { TransmittersContainer } from './transmitters';
import { ZonesContainer } from './zones';
import { TransmitterStyles as S } from './styles';
import { PROPERTY_PROFILE_ZONE_FRAGMENT_DOC } from 'src/apollo/codegen/graphql';

const PropertyTransmittersRoute = () => {
  const { property } = useProperty();
  const { customer } = useCustomer();

  const property_id = property?.id;

  const transmitters = getFragment(
    PROPERTY_PROFILE_TRANSMITTER,
    property?.equipment?.transmitters,
  );

  const zones = getFragment(
    PROPERTY_PROFILE_ZONE_FRAGMENT_DOC,
    property?.geospatial?.zones,
  );

  if (!customer || !property_id) return null;

  return (
    <S.Page>
      <S.PageColumn>
        <TransmittersContainer
          property_id={property_id}
          transmitters={transmitters ?? []}
        />
      </S.PageColumn>
      <S.PageColumn>
        <ZonesContainer
          customer_id={customer.id}
          property={property}
          zones={zones ?? []}
          transmitters={transmitters ?? []}
        />
      </S.PageColumn>
    </S.Page>
  );
};

export default memo(PropertyTransmittersRoute);
