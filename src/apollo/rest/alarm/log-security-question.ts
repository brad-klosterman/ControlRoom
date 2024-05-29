import { gql } from '@apollo/client';

export const LOG_SECURITY_QUESTION = gql`
  mutation log_security_question($alarm_id: alarm_id, $answer: answer) {
    log_security_question(alarm_id: $alarm_id, answer: $answer)
      @rest(
        path: "/{args.alarm_id}/log_security_question"
        endpoint: "Alarms"
        method: "POST"
        bodyKey: "answer"
      ) {
      data
    }
  }
`;
