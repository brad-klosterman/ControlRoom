import { LIVE_RESPONDER_FRAGMENT } from 'src/apollo/codegen/graphql';
import { GoogleMapCoordinates } from 'src/context/google-maps.provider';
import {
  createLiveTrackedResponders,
  createLiveTrackedRespondersOrderedByDistanceAndStatus,
} from './responder-tracking';

const mapToSeonPosition = (coordinations: GoogleMapCoordinates) => {
  return {
    latitude: coordinations.lat.toString(),
    longitude: coordinations.lng.toString(),
  };
};

const mocked_locations = {
  destination: {
    lat: 0,
    lng: 0,
  },
  very_near: {
    lat: 1,
    lng: 0,
  },
  near: {
    lat: 2,
    lng: 0,
  },
  far: {
    lat: 3,
    lng: 0,
  },
};

const mocked_responder_fragments: LIVE_RESPONDER_FRAGMENT[] = [
  {
    id: 1,
    name: 'Occupied and Very Near',
    status: 'OCCUPIED',
    position: mapToSeonPosition(mocked_locations.very_near),
  },
  {
    id: 2,
    name: 'Operating and Very Near',
    status: 'OPERATING',
    position: mapToSeonPosition(mocked_locations.very_near),
  },
  {
    id: 3,
    name: 'Available and Far',
    status: 'AVAILABLE',
    position: mapToSeonPosition(mocked_locations.far),
  },
  {
    id: 4,
    name: 'Operating and Near',
    status: 'OPERATING',
    position: mapToSeonPosition(mocked_locations.near),
  },
  {
    id: 5,
    name: 'Occupied and Far',
    status: 'OCCUPIED',
    position: mapToSeonPosition(mocked_locations.far),
  },
  {
    id: 6,
    name: 'Available and Near',
    status: 'AVAILABLE',
    position: mapToSeonPosition(mocked_locations.near),
  },
];

const mockGoogleMaps = () => {
  global.google = {
    maps: {
      geometry: {
        spherical: {
          computeHeading: (
            _: GoogleMapCoordinates,
            __: GoogleMapCoordinates,
          ) => {
            return 5;
          },
          computeDistanceBetween: (
            a: GoogleMapCoordinates,
            b: GoogleMapCoordinates,
          ) => {
            return Math.abs(a.lat - b.lat) * 1000;
          },
        } as typeof google.maps.geometry.spherical,
      } as typeof google.maps.geometry,
    } as typeof google.maps,
  };
};

describe('Responder Tracking', () => {
  beforeEach(() => {
    mockGoogleMaps();
  });

  it('Creates Live Tracked Responders from Responder Fragments (First Time) (No Destination)', () => {
    const live_tracked_responders = createLiveTrackedResponders(
      null,
      mocked_responder_fragments,
    );

    expect(live_tracked_responders.length).toBe(6);
    expect(live_tracked_responders[0]).toMatchObject({
      position: mocked_locations.very_near,
    });
    expect(live_tracked_responders[0].heading).toBeUndefined();
    expect(live_tracked_responders[0].prev_position).toBeUndefined();
    expect(
      live_tracked_responders[0].km_distance_to_destination,
    ).toBeUndefined();
  });

  it('Creates Live Tracked Responders from Responder Fragments (With One Previous) (No Destination)', () => {
    const live_tracked_responders = createLiveTrackedResponders(
      [
        {
          id: 1,
          name: 'Occupied and Very Near',
          status: 'OCCUPIED',
          position: {
            lat: 5,
            lng: 10,
          },
        },
      ],
      mocked_responder_fragments,
    );

    expect(live_tracked_responders.length).toBe(6);
    expect(live_tracked_responders[0].heading).toEqual('5.00deg');
    expect(live_tracked_responders[0].prev_position).toMatchObject({
      lat: 5,
      lng: 10,
    });
    expect(
      live_tracked_responders[0].km_distance_to_destination,
    ).toBeUndefined();
  });

  it('Responders ordered by Distance and Status', () => {
    const live_tracked_responders =
      createLiveTrackedRespondersOrderedByDistanceAndStatus(
        null,
        mocked_responder_fragments,
        mocked_locations.destination,
      );

    expect(live_tracked_responders).toMatchObject([
      {
        id: 6,
        status: 'AVAILABLE',
        position: mocked_locations.near,
      },
      {
        id: 3,
        status: 'AVAILABLE',
        position: mocked_locations.far,
      },
      {
        id: 2,
        status: 'OPERATING',
        position: mocked_locations.very_near,
      },
      {
        id: 4,
        status: 'OPERATING',
        position: mocked_locations.near,
      },
      {
        id: 1,
        status: 'OCCUPIED',
        position: mocked_locations.very_near,
      },
      {
        id: 5,
        status: 'OCCUPIED',
        position: mocked_locations.far,
      },
    ]);
  });
});
