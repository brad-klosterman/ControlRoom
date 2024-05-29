/* eslint-disable import/no-named-as-default-member */
import Geocoder from 'react-geocode';

import { COORDINATES, Maybe } from 'codegen/graphql';

export const getReverseGeocode = async (
  latitude?: number | string,
  longitude?: number | string,
): Promise<string | null> => {
  if (!latitude || !longitude) return null;

  let address: string | null = null;

  await Geocoder.fromLatLng(latitude.toString(), longitude.toString()).then(
    response => {
      address = response?.results[0]?.formatted_address;
    },
    error => {
      console.error('getReverseGeocode', error);
      return null;
    },
  );

  return address;
};

/*
 * Get latitude & longitude from address.
 */
export const getGeocode = async (
  address: Maybe<string>,
): Promise<COORDINATES | null> => {
  if (!address) {
    return null;
  }

  return Geocoder.fromAddress(address).then(
    response => {
      const location = response.results[0]?.geometry?.location;

      if (location) {
        return {
          latitude: location.lat.toString(),
          longitude: location.lng.toString(),
        };
      } else {
        return null;
      }
    },
    error => {
      console.error('getGeocode', error);
      return null;
    },
  );
};
