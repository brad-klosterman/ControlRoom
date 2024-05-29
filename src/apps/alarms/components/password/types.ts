import { ALARM_SOURCE, Maybe, SECURITY_QUESTION_ANSWER } from 'codegen/graphql';

export interface AlarmPasswordProps {
  property_password: Maybe<string> | undefined;
  keyholder_password?: Maybe<string> | undefined;
  duress_password?: Maybe<string> | undefined;
  onPasswordSelected?(answer: SECURITY_QUESTION_ANSWER): void;
  setAlarmPasswordState?(answer: SECURITY_QUESTION_ANSWER): void;
  locked: boolean;
  alarm_id: number;
  alarm_source?: ALARM_SOURCE;
  variant: 'property_owner' | 'keyholder';
}
