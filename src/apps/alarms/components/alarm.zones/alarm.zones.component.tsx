import {
  Module,
  Title
} from 'apps/alarms/components/alarm.expander/content/styles';
import Zones from 'apps/alarms/components/alarm.zones/alarm.zones';
import {
  Maybe,
  PROPERTY_IMAGE,
  PROPERTY_ZONE
} from 'src/apollo/codegen/graphql';

export const AlarmZones = ({
  triggered_zones,
  visible
}: {
  visible: boolean;
  triggered_zones: PROPERTY_ZONE[] | undefined;
}) => {
  if (!visible) return null;
  return (
    <Module>{triggered_zones && <Zones zones={triggered_zones} />}</Module>
  );
};

export const TriggeredZonesTitle = (props: {
  total: number | null | undefined;
}) => (
  <Title icon="SignalTower">
    ZONES TRIGGERED {props.total ? `(${props.total.toString()})` : ''}
  </Title>
);
