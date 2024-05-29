import { useState } from 'react';
import { RequiresUpdateCustomersPermission } from 'src/app.state/permissions/hooks/update-customers.permission';
import { Button, Text } from 'src/components';
import { PROPERTY_PROFILE_TRANSMITTER_FRAGMENT } from 'src/apollo/codegen/graphql';

import { TransmitterStyles } from '../styles';
import { TransmitterCreationView } from './create-transmitter';
import { TransmitterListView } from './list-view';

interface TransmittersContainerProps {
  property_id: number;
  transmitters: readonly PROPERTY_PROFILE_TRANSMITTER_FRAGMENT[];
}

const TransmittersContainer = ({
  property_id,
  transmitters,
}: TransmittersContainerProps) => {
  const [is_creating_new_transmitter, setCreatingNewTransmitter] =
    useState<boolean>(false);

  const openTransmitterCreation = () => {
    setCreatingNewTransmitter(true);
  };

  const closeTransmitterCreation = () => {
    setCreatingNewTransmitter(false);
  };

  return (
    <>
      <TransmitterStyles.PageColumnHeader>
        <Text size="displayRegular">TRANSMITTERS</Text>
        <RequiresUpdateCustomersPermission>
          {!is_creating_new_transmitter && (
            <Button
              onClick={openTransmitterCreation}
              size="small"
              variant="secondary"
            >
              NEW TRANSMITTER
            </Button>
          )}
        </RequiresUpdateCustomersPermission>
      </TransmitterStyles.PageColumnHeader>
      {is_creating_new_transmitter ? (
        <TransmitterCreationView
          property_id={property_id}
          onCancel={closeTransmitterCreation}
          onTransmitterCreated={closeTransmitterCreation}
        />
      ) : (
        <TransmitterListView
          property_id={property_id}
          transmitters={transmitters}
        />
      )}
    </>
  );
};

export { TransmittersContainer };
