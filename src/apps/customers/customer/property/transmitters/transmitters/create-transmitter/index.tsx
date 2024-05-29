import { useState } from 'react';
import styled from 'styled-components';
import { Flex, Toggle } from 'components/ui';
import { CreateTransmitterFromStockView } from './from-stock';
import { CreateTransmitterFromScratchView } from './from-scratch';

namespace S {
  export const ContentWrapper = styled(Flex)`
    margin-bottom: 1rem;
  `;
}

type TRANSMITTER_CREATION_TYPE = 'NEW TRANSMITTER' | 'FROM STOCK';

interface Props {
  property_id: number;
  onTransmitterCreated: () => unknown;
  onCancel: () => unknown;
}

const TransmitterCreationView = ({
  property_id,
  onTransmitterCreated,
  onCancel,
}: Props) => {
  const [creation_type, setTransmitterCreationType] =
    useState<TRANSMITTER_CREATION_TYPE>('FROM STOCK');

  return (
    <Flex direction="column" gap="large">
      <S.ContentWrapper fitWidth>
        <Toggle
          name="transmitter_creation_view"
          values={['NEW TRANSMITTER', 'FROM STOCK']}
          onChange={setTransmitterCreationType}
          value={creation_type}
          size="small"
        />
      </S.ContentWrapper>
      {creation_type === 'FROM STOCK' ? (
        <CreateTransmitterFromStockView
          property_id={property_id}
          onTransmitterCreated={onTransmitterCreated}
          onCancel={onCancel}
        />
      ) : (
        <CreateTransmitterFromScratchView
          property_id={property_id}
          onTransmitterCreated={onTransmitterCreated}
          onCancel={onCancel}
        />
      )}
    </Flex>
  );
};

export { TransmitterCreationView };
