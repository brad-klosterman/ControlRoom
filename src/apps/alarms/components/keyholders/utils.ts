import {
  ALARM_KEYHOLDER_LOG_FRAGMENT,
  PROPERTY_KEYHOLDER,
} from 'src/apollo/codegen/graphql';

const getMostRecentCallLogForKeyholder = (
  keyholder: PROPERTY_KEYHOLDER,
  alarm_call_logs: ALARM_KEYHOLDER_LOG_FRAGMENT[],
): ALARM_KEYHOLDER_LOG_FRAGMENT | undefined => {
  return alarm_call_logs
    .sort((a, b) => (a.created_at > b.created_at ? -1 : 1))
    .find(log => {
      return (
        log.client_keyholder_id === keyholder.id ||
        log.keyholder_phone === keyholder.mobile_phone ||
        log.keyholder_phone === keyholder.landline_phone
      );
    });
};

type KeyholderCallState =
  | 'unknown'
  | 'answered-password-correct'
  | 'answered-password-incorrect'
  | 'not-answered';

const determineKeyholderCallState = (
  most_recent_call_log: ALARM_KEYHOLDER_LOG_FRAGMENT | undefined,
): KeyholderCallState => {
  if (!most_recent_call_log) {
    return 'unknown';
  }

  if (!most_recent_call_log.reached) {
    return 'not-answered';
  }

  if (!most_recent_call_log.password_verified) {
    return 'answered-password-incorrect';
  }

  return 'answered-password-correct';
};

export type { KeyholderCallState };
export { getMostRecentCallLogForKeyholder, determineKeyholderCallState };
