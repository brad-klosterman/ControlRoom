import { COORDINATES, Maybe } from 'src/apollo/codegen/graphql';
import { GoogleMapCoordinates } from 'src/context/google-maps.provider';

const mapSeonToGoogleCoordinates = (
  seon_coordinates: Maybe<COORDINATES> | undefined,
): GoogleMapCoordinates | undefined => {
  if (!seon_coordinates) {
    return undefined;
  }

  const lat = parseFloat(seon_coordinates.latitude);
  const lng = parseFloat(seon_coordinates.longitude);

  if (isNaN(lat) || isNaN(lng)) {
    return undefined;
  }

  return {
    lat,
    lng,
  };
};

const calculateHeading = ({
  prev_position,
  position,
}: {
  prev_position: GoogleMapCoordinates;
  position: GoogleMapCoordinates;
}): string | undefined => {
  const meter_distance_between_points =
    google.maps.geometry.spherical.computeDistanceBetween(
      prev_position,
      position,
    );

  if (meter_distance_between_points < 10) {
    return undefined;
  }

  return (
    google.maps.geometry.spherical
      .computeHeading(prev_position, position)
      .toFixed(2) + 'deg'
  );
};

const calculateKmDistance = (
  origin: GoogleMapCoordinates,
  destination: GoogleMapCoordinates,
): number => {
  return (
    google.maps.geometry.spherical.computeDistanceBetween(origin, destination) /
    1000
  );
};

export { mapSeonToGoogleCoordinates, calculateHeading, calculateKmDistance };
