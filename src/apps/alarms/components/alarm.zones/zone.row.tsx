import { Text } from 'components';
import { PROPERTY_ZONE } from 'src/apollo/codegen/graphql';
import { formatDateTime } from 'utils';

import {
  Row,
  Time,
  Description,
  Indicator,
  RowInner,
  TimeText,
} from './zones.styles';

interface PropertyZone extends PROPERTY_ZONE {
  is_new_zone: boolean;
}

function ZoneRow({
  description,
  // id,
  is_new_zone,
  // is_overactive,
  on_hold_mode: { enabled },
  time_triggered,
  zone_type,
}: PropertyZone) {
  return (
    <Row>
      <Indicator isNew={is_new_zone} />
      <RowInner>
        <Time>
          <TimeText isBold size="labelRegular">
            {formatDateTime({
              date: time_triggered,
              format: 'time',
              locale: 'en-GB',
            })}
          </TimeText>
        </Time>
        <Description>
          <Text size="labelRegular" style={{ lineHeight: 1 }}>
            {zone_type}
          </Text>
          <Text
            colorKey="secondary"
            size="labelRegular"
            style={{ lineHeight: 1 }}
          >
            {description}
          </Text>
        </Description>
      </RowInner>
    </Row>
  );
}

export default ZoneRow;
