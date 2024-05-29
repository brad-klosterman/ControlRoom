import {
  GoogleMap,
  OverlayViewF,
  OVERLAY_MOUSE_TARGET,
} from '@react-google-maps/api';
import { memo, useCallback, useEffect, useState } from 'react';

import useLiveResponders from 'apps/admin/user_management/responders/useLiveResponders';
import PulsingMarker, {
  centerOverlay,
  ResponderMarker,
} from 'apps/tracking/components/markers/PulsingMarker';
import { ResponderInfo } from 'apps/tracking/components/markers/styles';
import { mapContainerStyle } from 'apps/tracking/config';
import { MAP_DARK_THEME } from 'apps/tracking/styles/map-themes';
import { COORDINATES, Maybe } from 'codegen/graphql';
import {
  GoogleMapCoordinates,
  useGoogleMapsState,
} from 'context/google-maps.provider';
import { mapSeonToGoogleCoordinates } from 'src/utils/geospatial';

const AlarmMap = (props: {
  alarm_coordinates: GoogleMapCoordinates | undefined;
  primary_responder_id: number | null | undefined;
  use_live_responders?: boolean;
}) => {
  const { isLoaded: google_maps_loaded } = useGoogleMapsState();

  const { live_responders } = useLiveResponders({
    destination_coordinates: props.alarm_coordinates,
    skip: props.use_live_responders === false,
  });

  const primary_responder =
    live_responders && props.primary_responder_id
      ? live_responders.find(
          responders => responders.id === props.primary_responder_id,
        )
      : null;

  const [map_ref, setMapRef] = useState<google.maps.Map | null>(null);

  const onLoadMap = (map: google.maps.Map) => {
    const bounds = new google.maps.LatLngBounds();

    if (props.alarm_coordinates && primary_responder) {
      bounds.extend(props.alarm_coordinates);
      bounds.extend(primary_responder.position);
      map.fitBounds(bounds);
    } else if (props.alarm_coordinates) {
      map.setCenter(props.alarm_coordinates);
      map.setZoom(18);
    }

    setMapRef(map);
  };

  useEffect(() => {
    if (map_ref && props.alarm_coordinates && primary_responder) {
      const bounds = new google.maps.LatLngBounds();
      bounds.extend(props.alarm_coordinates);
      bounds.extend(primary_responder.position);

      map_ref.fitBounds(bounds);
    }
  }, [primary_responder]);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMapRef(null);
  }, []);

  if (!props.alarm_coordinates) {
    return null;
  }

  return google_maps_loaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      onLoad={onLoadMap}
      onUnmount={onUnmount}
      options={{
        disableDefaultUI: true,
        styles: MAP_DARK_THEME,
      }}
    >
      <OverlayViewF
        getPixelPositionOffset={centerOverlay}
        mapPaneName={OVERLAY_MOUSE_TARGET}
        position={props.alarm_coordinates}
      >
        <PulsingMarker variant="emergency" />
      </OverlayViewF>

      {primary_responder && (
        <OverlayViewF
          getPixelPositionOffset={centerOverlay}
          mapPaneName={OVERLAY_MOUSE_TARGET}
          position={primary_responder.position}
        >
          <ResponderMarker responder={primary_responder} selected={true}>
            <ResponderInfo responder={primary_responder} />
          </ResponderMarker>
        </OverlayViewF>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

const ConditionalWrapper = ({
  coordinates,
  visible,
  ...props
}: {
  alarm_id: number;
  coordinates: Maybe<COORDINATES> | undefined;
  primary_responder_id: number | null | undefined;
  visible: boolean;
  use_live_responders?: boolean;
}) => {
  if (!visible) return null;

  const alarm_coordinates = mapSeonToGoogleCoordinates(coordinates);

  return <AlarmMap {...{ alarm_coordinates, ...props }} />;
};

export default memo(ConditionalWrapper);
