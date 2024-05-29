import { gql } from '@apollo/client';

gql`
  input create_phone_alarm_input {
    alarm_type_id: Int!
    client_id: Int!
  }
`;

interface CreateAlarmResponse {
  create_phone_alarm: {
    alarm: { id: number };
  };
}

const CREATE_PHONE_ALARM = gql`
  mutation create_phone_alarm($input: create_phone_alarm_input) {
    create_phone_alarm(input: $input)
      @rest(path: "/alarms/phone_in", method: "POST", endpoint: "Base") {
      alarm
    }
  }
`;

export { CreateAlarmResponse, CREATE_PHONE_ALARM };
