import { gql } from '@apollo/client';

export const FETCH_CANCEL_ALARM_REASONS = gql`
  query cancel_alarm_reasons {
    cancel_alarm_reasons
      @rest(path: "/alarms/list_close_reasons", endpoint: "Base") {
      alarm_close_reasons
    }
  }
`;
