import { useMemo } from 'react';

import { useRespondersContext } from 'apps/admin/user_management/responders/provider';
import { useUsersContext } from 'apps/admin/user_management/users/provider';
import {
  ALARM_STATE,
  ASSIGNED_AGENT,
  ASSIGNED_RESPONDER,
  Maybe,
} from 'src/apollo/codegen/graphql';
import { Grid } from 'src/components';
import { StatusTag, StatusTagProps } from 'src/components/ui/StatusTag';
import styled from 'styled-components';

namespace S {
  export const AssignmentStatusTag = styled(StatusTag)`
    width: 100%;
  `;
}

const AssignmentStatus = (props: {
  assigned_responders: ASSIGNED_RESPONDER[];
  assigned_agents: ASSIGNED_AGENT[];
  alarm_state: ALARM_STATE;
}) => {
  const { responders } = useRespondersContext();
  const { agents } = useUsersContext();

  const assigned_agents_text = props.assigned_agents.reduce((prev, cur) => {
    let name = '';

    const matched_agent = agents.find(a => a.id === cur.id);

    if (matched_agent?.name) {
      name = matched_agent.name;
    }

    const shouldAddComma = prev !== '';
    const prefix = shouldAddComma ? `${prev}, ` : '';
    return prefix + name;
  }, '');

  const primary_responder = props.assigned_responders[0];

  const responder_details = useMemo<ASSIGNED_RESPONDER | null>(() => {
    if (primary_responder) {
      const name = primary_responder?.name;
      if (name) return { ...primary_responder, name };

      const matched_responder = responders.find(
        r => r.id === primary_responder.id,
      );

      return { ...primary_responder, name: matched_responder?.name };
    }

    return null;
  }, [primary_responder, props.assigned_responders.length, responders]);

  const getResponderDisplay = (
    responder: Maybe<ASSIGNED_RESPONDER>,
  ): StatusTagProps | undefined => {
    switch (props.alarm_state) {
      case 'RESPONDER_DISPATCHED':
        return {
          text: 'ASSIGNED',
          variant: 'warning',
        };
      case 'RESPONDER_ENROUTE':
        if (responder?.offline) {
          return {
            text: 'DISPATCHED OFFLINE',
            variant: 'warning',
          };
        }

        return {
          text: 'ON THEIR WAY',
          variant: 'warning',
        };
      case 'RESPONDER_ARRIVED':
        return {
          text: 'ARRIVED',
          variant: 'warning',
        };
      case 'RESPONDER_SAVED_PROPERTY':
        return {
          text: 'CUSTOMER TO CONFIRM',
          variant: 'success',
        };
      case 'ALARM_COMPLETED':
        return {
          text: 'CUSTOMER CONFIRMED SAFE',
          variant: 'success',
        };
      case 'KEYHOLDER_CANCELLED':
        return {
          text: 'CUSTOMER CLOSED ALARM',
          variant: 'success',
        };
      default:
        return undefined;
    }
  };

  const primary_responder_status_tag_props =
    getResponderDisplay(primary_responder);

  return (
    <Grid repeat={3} spacing="small">
      <Grid.Cell x={[0, 1]} y={[0, 1]}>
        {responder_details?.name && (
          <S.AssignmentStatusTag text={responder_details.name} />
        )}
      </Grid.Cell>
      <Grid.Cell x={[1, 2]} y={[0, 1]}>
        {primary_responder_status_tag_props && (
          <S.AssignmentStatusTag {...primary_responder_status_tag_props} />
        )}
      </Grid.Cell>
      <Grid.Cell x={[2, 3]} y={[0, 1]}>
        {assigned_agents_text && (
          <S.AssignmentStatusTag text={assigned_agents_text} variant="info" />
        )}
      </Grid.Cell>
    </Grid>
  );
};

export { AssignmentStatus };
