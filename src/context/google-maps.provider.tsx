import { useJsApiLoader } from '@react-google-maps/api';
import { createContext, ReactNode, useContext } from 'react';
import Geocoder from 'react-geocode';

const googleMapsApiKey =
  process.env.REACT_APP_GOOGLE_MAPS_KEY ||
  'AIzaSyCZ0GwtkfcDCdTUCVpxajJXfX4A5sx7les';

interface GoogleMapsContextState {
  isLoaded: boolean;
}

const GoogleMapsContext = createContext<GoogleMapsContextState>({
  isLoaded: false
});

export interface GoogleMapCoordinates {
  lat: number;
  lng: number;
}

const GoogleMapsProvider = ({ children }: { children?: ReactNode }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey,
    id: 'seon_maps',
    libraries: [
      'places',
      'geometry',
      'localContext',
      'visualization',
      'drawing'
    ]
  });

  Geocoder.setApiKey(googleMapsApiKey);

  return (
    <GoogleMapsContext.Provider value={{ isLoaded }}>
      {children}
    </GoogleMapsContext.Provider>
  );
};

const useGoogleMapsState = () => {
  const { isLoaded } = useContext(GoogleMapsContext);

  return {
    isLoaded
  };
};

export { GoogleMapsProvider, useGoogleMapsState };
