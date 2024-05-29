import { gql } from '@apollo/client';

export const ACKNOWLEDGE_ALARM_INSTRUCTIONS = gql`
  mutation acknowledge_alarm_instructions($alarm_id: Int!) {
    acknowledge_alarm_instructions(alarm_id: $alarm_id)
      @rest(
        path: "/{args.alarm_id}/acknowledge_instructions"
        endpoint: "Alarms"
        method: "POST"
        bodyKey: "alarm_id"
      ) {
      data
    }
  }
`;
