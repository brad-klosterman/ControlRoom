import { useQuery } from '@apollo/client';
import { useState } from 'react';
import {
  LIVE_RESPONDER,
  TRACK_RESPONDERS,
} from 'apps/admin/user_management/API/responders/live.responders';
import { getFragment } from 'codegen';
import { GoogleMapCoordinates } from 'context/google-maps.provider';
import { LIVE_RESPONDER_FRAGMENT } from 'src/apollo/codegen/graphql';

import {
  LiveTrackedResponder,
  createLiveTrackedRespondersOrderedByDistanceAndStatus,
} from './responder-tracking';

const createFilteredActiveResponders = (
  responders: readonly LIVE_RESPONDER_FRAGMENT[],
): LIVE_RESPONDER_FRAGMENT[] => {
  return responders.filter(
    responder => responder.status !== 'INACTIVE' && responder.position,
  );
};

const useLiveResponders = (props?: {
  destination_coordinates?: GoogleMapCoordinates;
  skip?: boolean;
}): {
  live_responders: LiveTrackedResponder[];
} => {
  const [live_responders, setLiveResponders] = useState<LiveTrackedResponder[]>(
    [],
  );

  useQuery(TRACK_RESPONDERS, {
    pollInterval: 1000,
    onCompleted: data => {
      const responders = getFragment(LIVE_RESPONDER, data?.responders);
      const active_responders = createFilteredActiveResponders(responders);

      setLiveResponders(prev_responders =>
        createLiveTrackedRespondersOrderedByDistanceAndStatus(
          prev_responders,
          active_responders,
          props?.destination_coordinates,
        ),
      );
    },
    skip: props?.skip,
  });

  return {
    live_responders,
  };
};

export default useLiveResponders;
