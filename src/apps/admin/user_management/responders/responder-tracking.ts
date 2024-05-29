import { LIVE_RESPONDER_FRAGMENT } from 'codegen/graphql';
import { GoogleMapCoordinates } from 'context/google-maps.provider';
import {
  calculateHeading,
  calculateKmDistance,
  mapSeonToGoogleCoordinates,
} from 'src/utils/geospatial';
import { LiveTrackedResponder } from './types';

const UNKNOWN_DISTANCE_WEIGHT = 1000;

function instanceOfLiveTrackedResponder(obj: any): obj is LiveTrackedResponder {
  return 'position' in obj && 'lat' in obj.position;
}

const getResponderPosition = (
  responder: LiveTrackedResponder | LIVE_RESPONDER_FRAGMENT,
): GoogleMapCoordinates | undefined => {
  if (!responder.position) {
    return undefined;
  }

  if (instanceOfLiveTrackedResponder(responder)) {
    return responder.position;
  }

  return mapSeonToGoogleCoordinates(responder.position);
};

const createLiveTrackedResponders = (
  prev_live_tracked_responders: LiveTrackedResponder[] | null,
  responders: LIVE_RESPONDER_FRAGMENT[],
  destination_coordinates?: GoogleMapCoordinates,
): LiveTrackedResponder[] => {
  const positioned_responders: LiveTrackedResponder[] = [];
  for (const responder of responders) {
    const position = getResponderPosition(responder);

    if (!position) {
      continue;
    }

    const prev_responder = prev_live_tracked_responders?.find(
      prev => prev.id === responder.id,
    );
    const prev_position = prev_responder
      ? getResponderPosition(prev_responder)
      : undefined;
    const heading = prev_position
      ? calculateHeading({ prev_position, position })
      : undefined;
    const km_distance_to_destination = destination_coordinates
      ? calculateKmDistance(position, destination_coordinates)
      : undefined;

    positioned_responders.push({
      ...responder,
      position,
      prev_position,
      heading,
      km_distance_to_destination,
    });
  }

  return positioned_responders;
};

const liveTrackedResponderDistanceSort = (
  a: LiveTrackedResponder,
  b: LiveTrackedResponder,
): number => {
  const a_distance = a.km_distance_to_destination ?? UNKNOWN_DISTANCE_WEIGHT;
  const b_distance = b.km_distance_to_destination ?? UNKNOWN_DISTANCE_WEIGHT;

  return a_distance - b_distance;
};

const orderLiveTrackedRespondersByStatus = (
  live_tracked_responders: LiveTrackedResponder[],
): LiveTrackedResponder[] => {
  const available_responders: LiveTrackedResponder[] = [];
  const operating_responders: LiveTrackedResponder[] = [];
  const occupied_responders: LiveTrackedResponder[] = [];

  for (const live_tracked_responder of live_tracked_responders) {
    switch (live_tracked_responder.status) {
      case 'AVAILABLE':
        available_responders.push(live_tracked_responder);
        continue;
      case 'OPERATING':
        operating_responders.push(live_tracked_responder);
        continue;
      case 'OCCUPIED':
        occupied_responders.push(live_tracked_responder);
        continue;
    }
  }

  return [
    ...available_responders,
    ...operating_responders,
    ...occupied_responders,
  ];
};

const createLiveTrackedRespondersOrderedByDistanceAndStatus = (
  prev_live_tracked_responders: LiveTrackedResponder[] | null,
  responders: LIVE_RESPONDER_FRAGMENT[],
  destination_coordinates?: GoogleMapCoordinates,
): LiveTrackedResponder[] => {
  const live_tracked_responders = createLiveTrackedResponders(
    prev_live_tracked_responders,
    responders,
    destination_coordinates,
  );
  const live_tracked_responders_by_distance = live_tracked_responders.sort(
    liveTrackedResponderDistanceSort,
  );
  const live_tracked_responders_by_distance_and_status =
    orderLiveTrackedRespondersByStatus(live_tracked_responders_by_distance);
  return live_tracked_responders_by_distance_and_status;
};

export type { LiveTrackedResponder };
export {
  createLiveTrackedResponders,
  createLiveTrackedRespondersOrderedByDistanceAndStatus,
};
