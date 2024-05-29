import { AGENT_VOIP, VOIP_CALL_MEMBER_STATUS } from 'codegen/graphql';

export interface VoipActiveCall {
  call_id?: string;
  call_to: string;
  channel_id?: string;
  keyholder_id: number;
  status: VOIP_CALL_MEMBER_STATUS;
  time_start?: string;
}

export interface VoipState {
  active_call?: VoipActiveCall;
  agent: Omit<AGENT_VOIP, 'enabled'>;
  enabled: boolean;
}

export type KeyholderVoipStatus =
  | 'READY'
  | 'DISABLED'
  | 'RINGING'
  | 'CONNECTED'
  | 'DISCONNECTED'
  | 'ON_HOLD';
