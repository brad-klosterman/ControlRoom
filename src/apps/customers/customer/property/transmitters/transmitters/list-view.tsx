import { Fragment, useState } from 'react';
import { PROPERTY_PROFILE_TRANSMITTER_FRAGMENT } from 'src/apollo/codegen/graphql';
import { Expander } from 'src/components/ui/Expander';
import TransmitterRow from './row';
import { ExpandedTransmitterContent } from './expanded';
import { Grid, Text } from 'src/components';
import styled from 'styled-components';
import { RowInner } from '../styles';

namespace S {
  export const ListWrapper = styled.div`
    > * {
      margin-bottom: 1rem;
    }
  `;
}

interface TransmitterListViewProps {
  property_id: number;
  transmitters: readonly PROPERTY_PROFILE_TRANSMITTER_FRAGMENT[];
}

const TransmitterListView = ({
  property_id,
  transmitters,
}: TransmitterListViewProps) => {
  const [selected_transmitter_id, setSelectedTransmitterId] = useState<
    number | null
  >(null);

  return (
    <S.ListWrapper>
      <RowInner>
        <Grid>
          <Grid.Cell alignItems="center" x={[0, 4]} y={[0, 1]}>
            <Text>TRANSMITTER ID</Text>
          </Grid.Cell>
          <Grid.Cell x={[4, 11]} y={[0, 1]}>
            <Text>DECODER</Text>
          </Grid.Cell>
        </Grid>
      </RowInner>
      <Expander aria-label="transmitters" gap="large">
        {transmitters.map(
          (transmitter, i) =>
            transmitter && (
              <Fragment key={`transmitter:${transmitter.id}`}>
                <TransmitterRow
                  {...{
                    transmitter,
                    selected_transmitter_id,
                    setSelectedTransmitterId,
                  }}
                />
                <ExpandedTransmitterContent
                  {...{
                    transmitter,
                    property_id,
                    assigning_transmitter: false,
                    transmitter_assignment_type: 'from_stock',
                  }}
                />
              </Fragment>
            ),
        )}
      </Expander>
    </S.ListWrapper>
  );
};

export { TransmitterListView };
