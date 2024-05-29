import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentRight from 'apps/alarms/components/alarm.expander/content/right';
import { Cell, LinkTitle } from 'apps/alarms/components/alarm.expander/grid';
import { AlarmInformation } from 'apps/alarms/components/alarm.information/alarm.information';
import AlarmMap from 'apps/alarms/components/alarm.map';
import AlarmMobileProfile from 'apps/alarms/components/alarm.mobile/alarm.mobile.profile';
import {
  AlarmZones,
  TriggeredZonesTitle,
} from 'apps/alarms/components/alarm.zones/alarm.zones.component';
import IncidentReport from 'apps/alarms/components/incident_report';
import AlarmLogs from 'apps/alarms/components/logs';
import AlarmNotes from 'apps/alarms/components/notes';
import AlarmVideoImages from 'apps/alarms/components/video_images';
import { getFragment } from 'codegen';
import {
  ALARM_CUSTOMER_FRAGMENT_DOC,
  ALARM_STACK,
  CORE_ALARM_FRAGMENT,
  CORE_ALARM_INCIDENT_REPORT_FRAGMENT_DOC,
} from 'codegen/graphql';

import { useAuthContext } from 'src/app.state/auth/provider';
import { CustomerNavLocationState } from 'apps/customers/customer/types';
import { Grid, Flex } from 'components';
import {
  useExpanderContext,
  useExpanderNodeContext,
} from 'components/ui/Expander';

import { Main, Title } from './styles';
import { PanelInformationSection } from './panel-information-section';

const AlarmContent = ({
  alarm,
  alarm_stack,
  current_page,
  row_index,
}: {
  alarm: CORE_ALARM_FRAGMENT;
  alarm_stack: ALARM_STACK;
  row_index: number;
  current_page: number;
}) => {
  const navigate = useNavigate();

  const { isOpen: alarm_expanded } = useExpanderNodeContext();
  const { expandedKeys, setExpandedKeys } = useExpanderContext();

  useEffect(() => {
    if (row_index === 0) {
      setExpandedKeys([]);
    }
  }, [current_page]);

  const {
    state: { user },
  } = useAuthContext();

  const {
    alarm_state,
    assigned_agents,
    assigned_responders,
    id: alarm_id,
    keyholder_logs,
    procedure_timestamps: { customer_verified_password_at },
    property: {
      geospatial,
      id: property_id,
      images,
      keyholders,
      password: property_password,
      video_feeds,
    },
    source: alarm_source,
    triggered_zones,
  } = alarm;

  const customer = getFragment(ALARM_CUSTOMER_FRAGMENT_DOC, alarm.customer);

  const coordinates = geospatial?.coordinates;

  const primary_responder_id = assigned_responders?.[0]?.id;

  const incident_report = getFragment(
    CORE_ALARM_INCIDENT_REPORT_FRAGMENT_DOC,
    alarm?.incident_report,
  );

  const [assigned_to_user, setAssignedToUser] = useState(
    assigned_agents.some(assigned_agent => assigned_agent.id === user?.id),
  );

  const [instructions_expanded, setInstructionsExpanded] = useState(
    alarm_stack === 'EMERGENCY',
  );

  const images_visible = Boolean(
    assigned_to_user && images && images?.length > 0,
  );

  const navigateCustomerAccount = () => {
    navigate(`/control_room/customers/customer/${customer?.id}`, {
      state: {
        back_url: `/control_room/alarms/${alarm_stack.toLowerCase()}`,
        alarm: {
          expander_key: expandedKeys[0],
          stack_index: current_page,
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
            back_url: `/control_room/alarms/${alarm_stack.toLowerCase()}`,
            alarm: {
              expander_key: expandedKeys[0],
              stack_index: current_page,
            },
          } satisfies CustomerNavLocationState,
        },
      );
  };

  const onRemovedFromStack = () => {
    setExpandedKeys([]);
  };

  const onUserAssigned = () => {
    setAssignedToUser(true);
    setInstructionsExpanded(false);
  };

  return (
    <Main>
      <Grid padding="xLarge" repeat={20} spacing="xLarge">
        {/*LEFT*/}
        <Cell.L1>
          {alarm_source === 'USER_APP' ? (
            <Title icon="AccountPerson">
              {`${customer?.contact.first_name} ${customer?.contact.last_name}`.toUpperCase()}
            </Title>
          ) : (
            <TriggeredZonesTitle total={triggered_zones.length} />
          )}
        </Cell.L1>
        <Cell.L2
          y={[
            1,
            assigned_to_user && !images_visible && !alarm.panel_information
              ? 4
              : 2,
          ]}
        >
          <AlarmZones
            triggered_zones={triggered_zones}
            visible={alarm_source === 'TRANSMITTER'}
          />
        </Cell.L2>
        {images_visible && (
          <>
            <Cell.L3 visible={images_visible}>
              <Title icon="House7">VIDEO & IMAGES</Title>
            </Cell.L3>
            <Cell.L4 visible={images_visible}>
              <AlarmVideoImages images={images} videos={video_feeds} />
            </Cell.L4>
          </>
        )}
        {alarm.panel_information && (
          <Cell.L3 visible>
            <PanelInformationSection
              panel_information={alarm.panel_information}
            />
          </Cell.L3>
        )}
        <AlarmMobileProfile
          customer={customer}
          instructions_acknowledged={assigned_to_user}
          profile_picture={customer?.profile_picture}
          visible={alarm_source === 'USER_APP'}
        />

        {/*CENTER*/}
        <Cell.M1>
          <Title icon="Alarm">ALARM INFORMATION</Title>
          {alarm_source !== 'USER_APP' && (
            <Flex gap="large">
              <LinkTitle icon="Person" onClick={navigateCustomerAccount}>
                CUSTOMER ACCOUNT
              </LinkTitle>
              <LinkTitle icon="BrandClock" onClick={navigatePropertyHistory}>
                ALARM HISTORY
              </LinkTitle>
            </Flex>
          )}
        </Cell.M1>
        <Cell.M2>
          <AlarmInformation
            alarm={alarm}
            alarm_expanded={alarm_expanded}
            instructions_expanded={instructions_expanded}
            toggleInstructionsExpanded={() =>
              setInstructionsExpanded(prev => !prev)
            }
            visible={alarm_source !== 'USER_APP'}
          />
          <AlarmMap
            alarm_id={alarm_id}
            coordinates={coordinates}
            primary_responder_id={primary_responder_id}
            visible={alarm_expanded && alarm_source === 'USER_APP'}
          />
        </Cell.M2>

        {assigned_to_user && (
          <>
            <Cell.M3>
              <Title icon="Edit">ALARM LOGS & NOTES</Title>
            </Cell.M3>
            <Cell.M4>
              <AlarmLogs
                {...{ alarm_id, alarm_source }}
                enabled={assigned_to_user}
                expanded={alarm_expanded}
                should_poll={alarm_expanded}
              />
              {incident_report && (
                <IncidentReport incident_report={incident_report} />
              )}
              <AlarmNotes
                alarm_id={alarm_id}
                alarm_source={alarm_source}
                instructions_acknowledged={assigned_to_user}
              />
            </Cell.M4>
          </>
        )}

        <ContentRight
          alarm_coordinates={coordinates}
          {...{
            alarm_id,
            property_id,
            alarm_state,
            alarm_stack,
            alarm_source,
            property_password,
            customer_verified_password: Boolean(customer_verified_password_at),
            keyholders,
            assigned_to_user,
            onRemovedFromStack,
            onUserAssigned,
            keyholder_logs,
          }}
        />
      </Grid>
    </Main>
  );
};

export default AlarmContent;
