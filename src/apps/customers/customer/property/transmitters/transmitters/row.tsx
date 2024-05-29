import { Dispatch, SetStateAction } from 'react';

import { PROPERTY_PROFILE_TRANSMITTER } from 'apps/customers/API';
import { InteractionStatesProps } from 'auxiliary';
import { FragmentType, getFragment } from 'codegen';
import { PROPERTY_PROFILE_TRANSMITTER_FRAGMENT } from 'codegen/graphql';
import { Grid, Text } from 'components/ui';
import { Expander, useExpanderNodeContext } from 'components/ui/Expander';

import { Row, RowInner } from '../styles';

const TransmitterRow = (
  props: InteractionStatesProps & {
    transmitter:
      | FragmentType<typeof PROPERTY_PROFILE_TRANSMITTER>
      | PROPERTY_PROFILE_TRANSMITTER_FRAGMENT;
    selected_transmitter_id: number | null;
    setSelectedTransmitterId: Dispatch<SetStateAction<number | null>>;
  },
) => {
  const transmitter =
    'id' in props.transmitter
      ? props.transmitter
      : getFragment(PROPERTY_PROFILE_TRANSMITTER, props.transmitter);

  const { isOpen: expanded } = useExpanderNodeContext();

  return (
    <Row
      {...{
        ...props,
        expanded,
        selected: props.selected_transmitter_id === transmitter.id,
      }}
    >
      <RowInner onClick={() => props.setSelectedTransmitterId(transmitter.id)}>
        <Grid>
          <Grid.Cell alignItems="center" x={[0, 4]} y={[0, 1]}>
            <Text>{transmitter.number}</Text>
          </Grid.Cell>
          <Grid.Cell x={[4, 11]} y={[0, 1]}>
            <Text>{transmitter.decoder?.name}</Text>
          </Grid.Cell>
          <Grid.Cell justifyContent="flex-end" x={[11, 12]} y={[0, 1]}>
            <Expander.Arrow />
          </Grid.Cell>
        </Grid>
      </RowInner>
    </Row>
  );
};

export default TransmitterRow;
