import { gql } from '@apollo/client';

export const HEARTBEAT_SUBSCRIPTION = gql`
  subscription heartbeat {
    heartbeat {
      success
      authenticated
    }
  }
`;
