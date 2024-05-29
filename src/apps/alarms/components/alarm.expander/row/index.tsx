import { memo, useEffect, useMemo, useState } from 'react';

import { AssignmentStatus } from 'apps/alarms/components/alarm.expander/row/assignment_status';
import { InteractionStatesProps } from 'auxiliary';
import { getFragment } from 'codegen';
import {
  CORE_ALARM_FRAGMENT,
  CORE_TRANSMITTER_FRAGMENT_DOC,
} from 'codegen/graphql';
import { Grid, Text } from 'components/ui';
import {
  useExpanderContext,
  useExpanderNodeContext,
} from 'components/ui/Expander';
import { formatDateTime } from 'utils';
import { getReverseGeocode } from 'utils/geospatial/getReverseGeocode';

import {
  AlarmTimes,
  AlarmType,
  Container,
  LeftContent,
  Overlay,
} from './styles';
import {
  end_left,
  start_center,
  end_right,
  end_center,
  start_right,
} from '../grid';

export interface Props extends InteractionStatesProps {
  alarm: CORE_ALARM_FRAGMENT;
  should_show_unread_banner?: boolean;
}

const AlarmRow = ({
  alarm,
  should_show_unread_banner,
  ...interaction_props
}: Props) => {
  const { isOpen } = useExpanderNodeContext();
  const { expandedKeys } = useExpanderContext();
  const should_blur = expandedKeys.length === 1 && !isOpen;

  const [incident_address, setIncidentAddress] = useState('');

  useEffect(() => {
    (async () => {
      const coordinates = alarm.property.geospatial?.coordinates;
      let address = alarm.property.geospatial?.entire_address;

      if (!address && coordinates) {
        await getReverseGeocode(
          coordinates.latitude,
          coordinates.longitude,
        ).then(found_address => {
          address = found_address;
        });
      }

      if (!address) address = 'UNKNOWN INCIDENT LOCATION';

      setIncidentAddress(address.toUpperCase());
    })();
  }, [alarm.id]);

  const { alarm_created_at } = useMemo(
    () => ({
      alarm_created_at: formatDateTime({
        date: alarm.procedure_timestamps.created_at,
        format: 'time',
        locale: 'en-ZA',
      }),
      responder_dispatched_at: formatDateTime({
        date: alarm.procedure_timestamps.responder_dispatched_at,
        format: 'time',
        locale: 'en-ZA',
      }),
    }),
    [alarm.id, alarm.procedure_timestamps.responder_dispatched_at],
  );

  const testing_enabled = alarm.property.testing_enabled;
  return (
    <Container
      expanded={isOpen}
      left_status_bar_variant={should_show_unread_banner ? 'error' : undefined}
      unassigned={alarm.assigned_agents.length === 0}
      {...{ ...interaction_props }}
    >
      <Overlay visible={should_blur} />
      <Grid repeat={20} spacing="xLarge">
        {/*LEFT*/}
        <Grid.Cell alignItems="center" x={[0, end_left]} y={[0, 1]}>
          <AlarmTimes>
            <Text isBold size="displayRegular">
              {alarm_created_at}
            </Text>
          </AlarmTimes>
          <AlarmType>
            <Text size="displaySmall">{alarm.type.toUpperCase()}</Text>
            {testing_enabled && (
              <Text colorKey="warning" size="displaySmall">
                &nbsp;(TEST)
              </Text>
            )}
            {alarm.property.status === 'suspended' && (
              <Text colorKey="warning" size="displaySmall">
                &nbsp;(SUSPENDED)
              </Text>
            )}
          </AlarmType>
        </Grid.Cell>
        {/*CENTER*/}
        <Grid.Cell
          direction="column"
          justifyContent="center"
          spacing="xxSmall"
          x={[start_center, end_center]}
          y={[0, 1]}
        >
          <Text isTruncated size="displayRegular">
            {incident_address}
          </Text>
          {alarm.property.name && (
            <Text colorKey="secondary" size="displaySmall">
              {alarm.property.name.toUpperCase()}
            </Text>
          )}
        </Grid.Cell>
        {/*RIGHT*/}
        <Grid.Cell x={[start_right, end_right]} y={[0, 1]}>
          <AssignmentStatus
            alarm_state={alarm.alarm_state}
            assigned_agents={alarm.assigned_agents}
            assigned_responders={alarm.assigned_responders}
          />
        </Grid.Cell>
      </Grid>
    </Container>
  );
};

export default memo(AlarmRow);
