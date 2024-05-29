import { createContext } from 'react';

import {
  CORE_RESPONDER_FRAGMENT,
  LIVE_RESPONDER_FRAGMENT,
} from 'codegen/graphql';
import { GoogleMapCoordinates } from 'context/google-maps.provider';

export type OnlineResponder = Omit<LIVE_RESPONDER_FRAGMENT, 'position'> & {
  position?: GoogleMapCoordinates;
};

export interface LiveTrackedResponder extends OnlineResponder {
  position: GoogleMapCoordinates;
  prev_position?: GoogleMapCoordinates;
  heading?: string;
  km_distance_to_destination?: number;
}

export type ProviderContext = {
  loading: boolean;
  responders: readonly CORE_RESPONDER_FRAGMENT[];
  refetch: () => void;
};

export const Context = createContext<ProviderContext>({
  loading: true,
  responders: [],
  refetch: () => null,
});
