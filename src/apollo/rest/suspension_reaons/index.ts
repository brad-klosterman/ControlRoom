import { gql } from '@apollo/client';

export interface SuspensionReason {
  id: number;
  company_id: number;
  created_at: string;
  discarded_at: string | null;
  reason: string;
  updated_at: string | null;
}

export interface SuspensionReasonsResponse {
  getSettings: {
    suspension_reasons: SuspensionReason[];
  };
}

export const GET_SUSPENSION_REASONS = gql`
  query getSettings {
    getSettings @rest(endpoint: "Mis", path: "/suspension-reasons") {
      suspension_reasons
    }
  }
`;
