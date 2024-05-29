import { Dispatch, SetStateAction } from 'react';

import { InteractionStatesProps } from 'auxiliary';
import { PROPERTY_PROFILE_ZONE_FRAGMENT } from 'codegen/graphql';
import { Grid, Text } from 'components/ui';
import { Expander, useExpanderNodeContext } from 'components/ui/Expander';

import { Row, RowInner } from '../styles';

const ZoneRow = (
  props: InteractionStatesProps & {
    zone: PROPERTY_PROFILE_ZONE_FRAGMENT;
    selected_zone_id: number | null;
    setSelectedZoneId: Dispatch<SetStateAction<number | null>>;
  },
) => {
  const { zone, ...rest } = props;

  const { isOpen: expanded } = useExpanderNodeContext();

  const selected = props.selected_zone_id === zone.id;

  return (
    <Row
      {...{
        ...rest,
        expanded,
        selected,
      }}
      on_hold={zone.on_hold_mode?.enabled}
    >
      <RowInner
        onClick={() =>
          props.setSelectedZoneId(
            props.selected_zone_id === zone.id ? null : zone.id,
          )
        }
      >
        <Grid>
          <Grid.Cell alignItems="center" x={[0, 3]} y={[0, 1]}>
            <Text>{zone?.number}</Text>
          </Grid.Cell>
          <Grid.Cell x={[3, 8]} y={[0, 1]}>
            <Text>{zone?.description}</Text>
          </Grid.Cell>
          <Grid.Cell x={[8, 11]} y={[0, 1]}>
            <Text>{zone?.transmitter?.number}</Text>
          </Grid.Cell>
          <Grid.Cell justifyContent="flex-end" x={[11, 12]} y={[0, 1]}>
            {zone && <Expander.Arrow />}
          </Grid.Cell>
        </Grid>
      </RowInner>
    </Row>
  );
};

const ZoneHeader = () => {
  return (
    <RowInner>
      <Grid>
        <Grid.Cell alignItems="center" x={[0, 3]} y={[0, 1]}>
          <Text>NUMBER</Text>
        </Grid.Cell>
        <Grid.Cell x={[3, 8]} y={[0, 1]}>
          <Text>DESCRIPTION</Text>
        </Grid.Cell>
        <Grid.Cell x={[8, 12]} y={[0, 1]}>
          <Text>TRANSMITTER</Text>
        </Grid.Cell>
      </Grid>
    </RowInner>
  );
};

export { ZoneHeader, ZoneRow };
