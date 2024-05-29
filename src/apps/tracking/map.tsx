import {
  GoogleMap,
  OverlayViewF,
  OVERLAY_MOUSE_TARGET,
  TrafficLayer,
} from '@react-google-maps/api';
import { memo, useState, useEffect, useCallback } from 'react';

import { useGoogleMapsState } from 'src/context/google-maps.provider';

import MapKey from './components/key/key';
import PulsingMarker, {
  centerOverlay,
  ResponderMarker,
} from './components/markers/PulsingMarker';
import { InfoContent, ResponderInfo } from './components/markers/styles';
import { mapContainerStyle } from './config';
import { useTrackingMap } from './provider';
import { MAP_DARK_THEME, MAP_LIGHT_THEME } from './styles/map-themes';

const TrackingRoute = () => {
  const { isLoaded: google_maps_loaded } = useGoogleMapsState();

  const {
    dispatch,
    emergency_alarms,
    enroute_alarms,
    map_theme,
    online_responders,
    selected_alarm,
    selected_responder,
    traffic_layer,
  } = useTrackingMap();

  const [map_ref, setMapRef] = useState<google.maps.Map | null>(null);

  const onLoadMap = (map: google.maps.Map) => {
    const bounds = new google.maps.LatLngBounds();

    [...emergency_alarms, ...enroute_alarms].forEach(
      ({ position }) => position && bounds.extend(position),
    );

    map.fitBounds(bounds);
    setMapRef(map);
  };

  useEffect(() => {
    if (selected_alarm?.position && map_ref) {
      map_ref.panTo(selected_alarm.position);
    }
  }, [selected_alarm]);

  useEffect(() => {
    if (selected_responder?.position && map_ref) {
      map_ref.panTo(selected_responder.position);
    }
  }, [selected_responder]);

  useEffect(() => {
    if (map_ref && !selected_alarm && !selected_responder) {
      if (emergency_alarms.length || enroute_alarms.length) {
        const bounds = new google.maps.LatLngBounds();

        [...emergency_alarms, ...enroute_alarms].forEach(
          ({ position }) => position && bounds.extend(position),
        );

        map_ref.fitBounds(bounds);
      }
    }
  }, [emergency_alarms.length, enroute_alarms.length]);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMapRef(null);
  }, []);

  return google_maps_loaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      onLoad={onLoadMap}
      onUnmount={onUnmount}
      options={{
        disableDefaultUI: true,
        styles: map_theme === 'dark' ? MAP_DARK_THEME : MAP_LIGHT_THEME,
      }}
      //tilt={47.5}
    >
      {emergency_alarms.map(
        alarm =>
          alarm.position && (
            <OverlayViewF
              getPixelPositionOffset={centerOverlay}
              mapPaneName={OVERLAY_MOUSE_TARGET}
              position={alarm.position}
            >
              <PulsingMarker
                onClick={() => dispatch('SELECT_ALARM', { alarm })}
                selected={selected_alarm?.id === alarm.id}
                variant="emergency"
              >
                <InfoContent alarm={alarm} />
              </PulsingMarker>
            </OverlayViewF>
          ),
      )}
      {enroute_alarms.map(
        alarm =>
          alarm.position && (
            <OverlayViewF
              getPixelPositionOffset={centerOverlay}
              mapPaneName={OVERLAY_MOUSE_TARGET}
              position={alarm.position}
            >
              <PulsingMarker
                onClick={() => dispatch('SELECT_ALARM', { alarm })}
                selected={selected_alarm?.id === alarm.id}
                variant="enroute"
              >
                <InfoContent alarm={alarm} />
              </PulsingMarker>
            </OverlayViewF>
          ),
      )}
      {online_responders.map(responder => (
        <OverlayViewF
          getPixelPositionOffset={centerOverlay}
          mapPaneName={OVERLAY_MOUSE_TARGET}
          position={responder.position}
        >
          <ResponderMarker
            onClick={() => dispatch('SELECT_RESPONDER', { responder })}
            responder={responder}
            selected={selected_responder?.id === responder.id}
          >
            <ResponderInfo responder={responder} />
          </ResponderMarker>
        </OverlayViewF>
      ))}
      {traffic_layer && <TrafficLayer />}
      <MapKey />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default memo(TrackingRoute);
