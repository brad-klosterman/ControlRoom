import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Title } from 'apps/alarms/components/alarm.expander/content/styles';
import { Flex } from 'components';
import {
  AlarmGrid,
  Cell,
  LinkTitle,
} from 'apps/alarms/components/alarm.expander/grid';
import AlarmData from 'apps/alarms/components/alarm.information/alarm.data';
import AlarmMap from 'apps/alarms/components/alarm.map';
import AlarmMobileProfile from 'apps/alarms/components/alarm.mobile/alarm.mobile.profile';
import {
  AlarmZones,
  TriggeredZonesTitle,
} from 'apps/alarms/components/alarm.zones/alarm.zones.component';
import IncidentReport from 'apps/alarms/components/incident_report';
import AlarmLogs from 'apps/alarms/components/logs';
import AlarmNotes from 'apps/alarms/components/notes';
import ProceduralTimeline from 'apps/alarms/components/timeline';
import AlarmVideoImages from 'apps/alarms/components/video_images';
import { Expanded } from 'apps/dashboard/components/table';
import { getFragment } from 'codegen';
import {
  ALARM_CUSTOMER_FRAGMENT_DOC,
  CORE_ALARM_FRAGMENT_DOC,
  CORE_ALARM_INCIDENT_REPORT_FRAGMENT_DOC,
  FETCH_ALARM_DOCUMENT,
} from 'codegen/graphql';
import {
  useExpanderContext,
  useExpanderNodeContext,
} from 'components/ui/Expander';
import { AlarmHistoryTableItem } from './types';
import { IncidentImagesCell } from './styles';

import { CustomerNavLocationState } from '@customers/customer/types';

const AlarmHistoryTableRow = (props: { item: AlarmHistoryTableItem }) => {
  const navigate = useNavigate();
  const { isOpen: item_expanded } = useExpanderNodeContext();
  const { expandedKeys } = useExpanderContext();

  const [fetch_alarm, { data }] = useLazyQuery(FETCH_ALARM_DOCUMENT);

  const alarm = getFragment(CORE_ALARM_FRAGMENT_DOC, data?.alarm);
  const alarm_id = props.item.id;
  const alarm_source =
    props.item.alarm_type === 'MOBILE_PANIC' ? 'USER_APP' : alarm?.source;

  const incident_report = getFragment(
    CORE_ALARM_INCIDENT_REPORT_FRAGMENT_DOC,
    alarm?.incident_report,
  );

  const customer =
    getFragment(ALARM_CUSTOMER_FRAGMENT_DOC, alarm?.customer) ||
    props.item.customer;
  const property_id = alarm?.property.id;

  const images = alarm?.property.images;
  const video_feeds = alarm?.property.video_feeds;
  const images_visible = Boolean(images && images.length > 0);

  const getExpandedData = async () => {
    if (props.item.alarm_type !== 'MOBILE_PANIC')
      await fetch_alarm({
        variables: { id: alarm_id },
      });
  };

  useEffect(() => {
    if (item_expanded) getExpandedData();
  }, [item_expanded]);

  const navigateCustomerAccount = () => {
    navigate(`/control_room/customers/customer/${customer?.id}`, {
      state: {
        back_url: `/control_room/alarm_history`,
        alarm: {
          expander_key: expandedKeys[0],
          stack_index: 1,
        },
      } satisfies CustomerNavLocationState,
    });
  };

  const navigatePropertyHistory = () => {
    if (property_id)
      navigate(
        `/control_room/customers/customer/${customer?.id}/property/${property_id}/alarm_history`,
        {
          state: {
            back_url: `/control_room/alarm_history`,
            alarm: {
              expander_key: expandedKeys[0],
              stack_index: 1,
            },
          } satisfies CustomerNavLocationState,
        },
      );
  };

  return (
    <Expanded>
      <Expanded.Inner direction="column">
        <AlarmGrid>
          {/*LEFT*/}
          <Cell.L1>
            {alarm_source === 'USER_APP' ? (
              <Title icon="AccountPerson">
                {`${customer?.contact.first_name} ${customer?.contact.last_name}`.toUpperCase()}
              </Title>
            ) : (
              <TriggeredZonesTitle total={alarm?.triggered_zones.length} />
            )}
          </Cell.L1>
          {alarm_source === 'USER_APP' ? (
            <AlarmMobileProfile
              customer={customer}
              instructions_acknowledged={true}
              profile_picture={customer?.profile_picture}
              visible={alarm_source === 'USER_APP'}
            />
          ) : (
            <Cell.L2 y={[1, 2]}>
              <AlarmZones
                triggered_zones={alarm?.triggered_zones}
                visible={alarm_source === 'TRANSMITTER'}
              />
            </Cell.L2>
          )}

          {images_visible && (
            <>
              <Cell.L3 visible={images_visible}>
                <Title icon="AccountPerson">VIDEO & IMAGES</Title>
              </Cell.L3>
              <Cell.L4 visible={images_visible}>
                <AlarmVideoImages images={images} videos={video_feeds} />
              </Cell.L4>
            </>
          )}

          {alarm_source === 'USER_APP' && <AlarmData alarm={alarm} /> ? (
            <>
              <Cell.M1>
                <Title icon="Info">ALARM LOCATION</Title>
              </Cell.M1>
              <Cell.M2>
                <AlarmMap
                  alarm_id={alarm_id}
                  coordinates={props.item.coordinates}
                  primary_responder_id={null}
                  use_live_responders={false}
                  visible={alarm_source === 'USER_APP'}
                />
              </Cell.M2>
              <Cell.M3>
                <Title icon="Edit">ALARM LOGS</Title>
              </Cell.M3>
              <Cell.M4>
                <AlarmLogs
                  {...{ alarm_id, alarm_source }}
                  enabled={true}
                  expanded={item_expanded}
                  should_poll={item_expanded}
                  show_date={true}
                />
                {incident_report && (
                  <IncidentReport incident_report={incident_report} />
                )}
                <AlarmNotes
                  alarm_id={alarm_id}
                  alarm_source={alarm_source}
                  instructions_acknowledged={false}
                  quick_options_enabled={false}
                />
              </Cell.M4>
            </>
          ) : (
            <>
              <Cell.M1>
                <Title icon="Alarm">ALARM INFORMATION</Title>
                <Flex gap="large">
                  <LinkTitle icon="Person" onClick={navigateCustomerAccount}>
                    CUSTOMER ACCOUNT
                  </LinkTitle>
                  <LinkTitle
                    icon="BrandClock"
                    onClick={navigatePropertyHistory}
                  >
                    ALARM HISTORY
                  </LinkTitle>
                </Flex>
              </Cell.M1>
              <Cell.M2>
                <AlarmData alarm={alarm} />
                <AlarmLogs
                  {...{ alarm_id, alarm_source }}
                  enabled={true}
                  expanded={item_expanded}
                  should_poll={item_expanded}
                  show_date
                />
                {incident_report && (
                  <IncidentReport incident_report={incident_report} />
                )}
                <AlarmNotes
                  alarm_id={alarm_id}
                  alarm_source={alarm_source}
                  instructions_acknowledged={false}
                  quick_options_enabled={false}
                />
              </Cell.M2>
              <Cell.M3>
                <Title icon="Edit">PROCEDURAL TIMELINE</Title>
              </Cell.M3>
              <Cell.M4>
                <ProceduralTimeline timestamps={alarm?.procedure_timestamps} />
              </Cell.M4>
            </>
          )}

          <Cell.R1>
            <Title icon="BrandDocTopFold">INCIDENT IMAGES</Title>
          </Cell.R1>
          <IncidentImagesCell>
            {Boolean(images && images?.length > 0) && (
              <AlarmVideoImages images={images} videos={video_feeds} />
            )}
          </IncidentImagesCell>
        </AlarmGrid>
      </Expanded.Inner>
    </Expanded>
  );
};

export { AlarmHistoryTableRow };
