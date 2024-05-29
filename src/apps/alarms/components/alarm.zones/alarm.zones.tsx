import { memo } from 'react';

import { PROPERTY_ZONE } from 'src/apollo/codegen/graphql';

import Row from './zone.row';
import { Container } from './zones.styles';

/**
 *
 * @param zones
 * this is used in the alarm stack and history stack
 */

const Zones = ({ zones }: { zones: PROPERTY_ZONE[] }) => {
  const init_zone_time =
    zones && zones.length !== 0 ? zones[zones.length - 1]?.time_triggered : '';

  return (
    <Container>
      {zones.map(
        ({ description, id, on_hold_mode, time_triggered, zone_type }, idx) => (
          <Row
            description={description}
            id={id}
            is_new_zone={init_zone_time !== time_triggered}
            key={`${id}-${idx}`}
            on_hold_mode={on_hold_mode}
            time_triggered={time_triggered}
            zone_type={zone_type}
          />
        ),
      )}
    </Container>
  );
};

export default memo(Zones);
