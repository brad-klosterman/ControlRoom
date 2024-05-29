import { Fragment, useState } from 'react';
import {
  CUSTOMER_PROFILE_PROPERTY_FRAGMENT,
  PROPERTY_PROFILE_TRANSMITTER_FRAGMENT,
  PROPERTY_PROFILE_ZONE_FRAGMENT,
} from 'src/apollo/codegen/graphql';
import { Expander } from 'src/components/ui/Expander';
import { ZoneHeader, ZoneRow } from './row';
import styled from 'styled-components';
import { ZoneContent } from './expanded';

namespace S {
  export const ListWrapper = styled.div`
    > * {
      margin-bottom: 1rem;
    }
  `;
}

interface ZoneListViewProps {
  customer_id: number;
  property: CUSTOMER_PROFILE_PROPERTY_FRAGMENT;
  zones: readonly PROPERTY_PROFILE_ZONE_FRAGMENT[];
  transmitters: readonly PROPERTY_PROFILE_TRANSMITTER_FRAGMENT[];
}

const ZoneListView = ({
  customer_id,
  property,
  zones,
  transmitters,
}: ZoneListViewProps) => {
  const [selected_zone_id, setSelectedZoneId] = useState<number | null>(null);

  return (
    <S.ListWrapper>
      <ZoneHeader />
      <Expander aria-label="zones" gap="large">
        {zones.map(
          (zone, i) =>
            zone && (
              <Fragment key={`zones:${zone.id}`}>
                <ZoneRow
                  zone={zone}
                  {...{
                    selected_zone_id,
                    setSelectedZoneId,
                  }}
                />
                <ZoneContent
                  customer_id={customer_id}
                  property={property}
                  zone={zone}
                  transmitters={transmitters}
                />
              </Fragment>
            ),
        )}
      </Expander>
    </S.ListWrapper>
  );
};

export { ZoneListView };
