import { gql } from '@apollo/client';

export const FETCH_OFFLINE_IPS = gql`
  query fetchOfflineIps {
    result @rest(endpoint: "Offline", path: "/cloud_boxes") {
      cloud_boxes
    }
  }
`;
