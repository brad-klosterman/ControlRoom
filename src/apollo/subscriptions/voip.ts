import { gql } from '@apollo/client';

export const VOIP_CALL_STATUS_UPDATED_SUBSCRIPTION = gql`
  subscription voip_call_status_updated {
    voip_call_status_updated {
      call_id
      extension_member {
        ext {
          memberstatus
          channelid
        }
      }
      inbound_member {
        inbound {
          memberstatus
          channelid
        }
      }
      outbound_member {
        outbound {
          memberstatus
          channelid
        }
      }
    }
  }
`;

export const VOIP_CALL_ENDED_REPORT_SUBSCRIPTION = gql`
  subscription voip_call_ended_report {
    voip_call_ended_report {
      call_id
      timestart
      callfrom
      callto
      callduraction
      talkduraction
      status
      recording
    }
  }
`;

export const VOIP_CALL_FAILED_REPORT_SUBSCRIPTION = gql`
  subscription voip_call_failed_report {
    voip_call_failed_report {
      call_id
      reason
    }
  }
`;
