/* eslint-disable sort-destructure-keys/sort-destructure-keys */
import { useMemo } from 'react';

import {
  Container,
  HMSBox,
  TimeBox,
  Timestamp,
  Title,
} from 'apps/alarms/components/timeline/styles';
import { ALARM_PROCEDURE_TIMESTAMPS, Maybe } from 'codegen/graphql';
import { Flex } from 'components';
import { formatDateTime } from 'utils';
import { differenceHMS } from 'utils/convertTime/convertHMS';

type ProcedureData = {
  name: string;
  hms: string;
  time_stamp: Maybe<string> | undefined;
};

const ProceduralTimeline = (props: {
  timestamps: ALARM_PROCEDURE_TIMESTAMPS | undefined;
}) => {
  if (!props.timestamps) return null;

  const {
    created_at,
    agent_acknowledged_instructions_at,
    agent_phoned_first_keyholder_at,
    keyholder_confirmed_emergency_at,
    responder_dispatched_at,
    responder_enroute_at,
    responder_arrived_at,
    responder_saved_property_at,
    responder_closed_report_at,
    alarm_completed_at,
    alarm_reopened_at,
    keyholder_cancelled_at,
    customer_verified_password_at,
  } = props.timestamps;

  const times = useMemo<ProcedureData[]>(() => {
    return [
      {
        name: 'CREATED',
        hms: '00:00:00',
        time_stamp: created_at,
      },
      {
        name: 'ASSIGNED',
        hms:
          differenceHMS(created_at, agent_acknowledged_instructions_at) ||
          '--:--:--',
        time_stamp: agent_acknowledged_instructions_at,
      },
      {
        name: 'PHONED',
        hms:
          differenceHMS(
            agent_acknowledged_instructions_at,
            agent_phoned_first_keyholder_at,
          ) || '--:--:--',
        time_stamp: agent_acknowledged_instructions_at,
      },
      {
        name: 'DISPATCHED',
        hms:
          differenceHMS(
            agent_acknowledged_instructions_at,
            responder_dispatched_at,
          ) || '--:--:--',
        time_stamp: responder_dispatched_at,
      },
      {
        name: 'ENROUTE',
        hms:
          differenceHMS(responder_dispatched_at, responder_enroute_at) ||
          '--:--:--',
        time_stamp: responder_enroute_at,
      },
      {
        name: 'ARRIVED',
        hms:
          differenceHMS(responder_enroute_at, responder_arrived_at) ||
          '--:--:--',
        time_stamp: responder_arrived_at,
      },
      {
        name: 'SAVED',
        hms:
          differenceHMS(created_at, responder_saved_property_at) || '--:--:--',
        time_stamp: responder_saved_property_at,
      },
    ];
  }, [props.timestamps]);

  return (
    <Container>
      {times.map((time, index) => (
        <TimeBox key={index}>
          <HMSBox>{time.hms}</HMSBox>
          <Flex fitWidth gap="xxSmall" justifyContent="center">
            <Title>{time.name}</Title>
          </Flex>
          {/*<Timestamp>*/}
          {/*  {formatDateTime({*/}
          {/*    date: time.time_stamp,*/}
          {/*    format: 'time',*/}
          {/*    locale: 'en-ZA'*/}
          {/*  })}*/}
          {/*</Timestamp>*/}
        </TimeBox>
      ))}
    </Container>
  );
};

export default ProceduralTimeline;
