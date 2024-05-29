import { AlarmRow } from 'apps/tracking/components/key/alarm.row';
import { ResponderRow } from 'apps/tracking/components/key/responder.row';
import { useTrackingMap } from 'apps/tracking/provider';
import { AlarmData } from 'apps/tracking/types';
import { Checkbox, Flex, Text } from 'components';

import {
  Container,
  Scrollable,
  Section,
  SectionTitle,
  CheckBoxRow,
  SectionDivider
} from './styles';

const MapKey = () => {
  const {
    dispatch,
    emergency_alarms,
    enroute_alarms,
    online_responders,
    selected_alarm,
    selected_responder,
    traffic_layer
  } = useTrackingMap();

  const sectionHeight = (rows: number) => {
    if (rows > 8) {
      return '24rem';
    }

    return `${rows * 3}rem`;
  };

  const displayAddress = (alarm: AlarmData): string => {
    if (alarm.address) {
      return alarm.address;
    }

    if (alarm.type === 'MOBILE_PANIC') {
      // todo reverse geocode
      return 'MOBILE_PANIC';
    }

    return 'ADDRESS UNAVAILABLE';
  };

  return (
    <Container>
      {Boolean(emergency_alarms.length) && (
        <>
          <SectionTitle variant="emergency">{`${emergency_alarms.length} EMERGENCY ALARMS`}</SectionTitle>
          <Section height={sectionHeight(emergency_alarms.length)}>
            <Scrollable>
              {emergency_alarms.map(alarm => (
                <AlarmRow
                  address={displayAddress(alarm)}
                  key={alarm.id}
                  onSelect={() => dispatch('SELECT_ALARM', { alarm })}
                  selected={alarm.id === selected_alarm?.id}
                  type={alarm.type}
                />
              ))}
            </Scrollable>
          </Section>
        </>
      )}
      {Boolean(enroute_alarms.length) && (
        <>
          <SectionTitle variant="enroute">{`${enroute_alarms.length} ENROUTE ALARMS`}</SectionTitle>
          <Section height={sectionHeight(enroute_alarms.length)}>
            <Scrollable>
              {enroute_alarms.map(alarm => (
                <AlarmRow
                  address={displayAddress(alarm)}
                  key={alarm.id}
                  onSelect={() => dispatch('SELECT_ALARM', { alarm })}
                  selected={alarm.id === selected_alarm?.id}
                  type={alarm.type}
                />
              ))}
            </Scrollable>
          </Section>
        </>
      )}
      <Flex alignItems="center" gap="small">
        <Text size="displaySmall">{`${online_responders.length} ONLINE RESPONDERS`}</Text>
      </Flex>
      <Section height={sectionHeight(online_responders.length)}>
        <Scrollable>
          {online_responders.map(responder => (
            <ResponderRow
              key={responder.id}
              name={responder.name || 'NAME UNAVAILABLE'}
              onSelect={() => dispatch('SELECT_RESPONDER', { responder })}
              selected={responder.id === selected_responder?.id}
              status={responder.status || 'INACTIVE'}
            />
          ))}
        </Scrollable>
      </Section>
      <SectionDivider />
      <CheckBoxRow>
        <Checkbox
          onChange={() => dispatch('TOGGLE_TRAFFIC_LAYER', {})}
          value={traffic_layer}
        />
        <Text>TRAFFIC LAYER</Text>
      </CheckBoxRow>
      {/*<S.Mode>*/}
      {/*  <Switch*/}
      {/*    checked={isDarkMode}*/}
      {/*    name="map-theme"*/}
      {/*    onChange={event => onToggleTheme(event.target.checked)}*/}
      {/*  />*/}
      {/*  <Text size="displaySmall">DARK MODE</Text>*/}
      {/*</S.Mode>*/}
    </Container>
  );
};

export default MapKey;
