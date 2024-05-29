import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { memo, useState, useEffect } from 'react';

import { MAP_DARK_THEME } from 'apps/tracking/styles/map-themes';
import { Button, Flex, Text } from 'components';
import { COORDINATES } from 'src/apollo/codegen/graphql';
import styled, { css } from 'styled-components';

const MAP_HEIGHT = 25.25;

const containerStyle = {
  height: `${MAP_HEIGHT}rem`,
  width: '100%',
  borderRadius: '0.5rem',
  marginTop: '0.5rem',
};

interface AddressMarker {
  lat: number;
  lng: number;
}

export const EmptyMap = styled(Flex)(
  ({ theme }) => css`
    height: ${MAP_HEIGHT}rem;
    background: ${theme.colors.bg[300]};
    margin-top: 0.5rem;
    border-radius: 0.5rem;
  `,
);

const AddressMap = ({
  coordinates,
  onLookupAddress,
  setCoordinates,
}: {
  coordinates: COORDINATES | null | undefined;
  setCoordinates: (latitude: string, longitude: string) => void;
  onLookupAddress?(): void;
}) => {
  const [marker, setMarker] = useState<AddressMarker>({
    lat: 0,
    lng: 0,
  });

  const is_coordinates = coordinates?.latitude && coordinates?.longitude;

  useEffect(() => {
    if (is_coordinates) {
      setMarker({
        lat: parseFloat(coordinates.latitude),
        lng: parseFloat(coordinates.longitude),
      });
    }
  }, [coordinates]);

  const onMarkerDragEnd = (e: any) => {
    setCoordinates(e.latLng.lat().toString(), e.latLng.lng().toString());
  };

  if (!is_coordinates) {
    return (
      <EmptyMap alignItems="center" fitWidth justifyContent="center">
        <Text>MAP NOT AVAILABLE</Text>
      </EmptyMap>
    );
  }

  return (
    <GoogleMap
      center={marker}
      mapContainerStyle={containerStyle}
      options={{
        backgroundColor: 'none',
        disableDefaultUI: true,
        styles: MAP_DARK_THEME,
      }}
      zoom={18}
    >
      <MarkerF draggable={true} onDragEnd={onMarkerDragEnd} position={marker} />
      {onLookupAddress && (
        <Button
          onClick={onLookupAddress}
          size="small"
          style={{
            position: 'absolute',
            bottom: 8,
            right: 8,
            background: 'rgb(138, 138, 138)',
            color: 'white',
          }}
          variant="other-secondary"
        >
          LOOKUP ADDRESS
        </Button>
      )}
    </GoogleMap>
  );
};

export default memo(AddressMap);
