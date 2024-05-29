import { Module } from 'apps/alarms/components/alarm.expander/content/styles';
import { SECURITY_QUESTION_ANSWER } from 'codegen/graphql';
import { Text, Flex } from 'components/ui';
import SSProvider from 'src/app.state/ssp/provider';

import { PasswordStatus, Row } from './styles';

const CancelReason = ({
  cancel_reason,
  password_state,
  setCancelReason,
}: {
  setCancelReason: (reason: string) => void;
  cancel_reason: string | null;
  password_state: SECURITY_QUESTION_ANSWER | 'not_answered' | 'not_available';
}) => {
  const { cancel_alarm_reasons } = SSProvider.useContext();

  return (
    <Flex direction="column" fluid>
      <Module>
        {cancel_alarm_reasons.map((reason: string) => (
          <Row
            key={reason}
            onClick={() => setCancelReason(reason)}
            selected={reason === cancel_reason}
          >
            <Text style={{ lineHeight: 1 }}>{reason}</Text>
          </Row>
        ))}
      </Module>
      <PasswordStatus>
        {(() => {
          switch (password_state) {
            case 'correct':
              return (
                <Text colorKey="emphasise">CUSTOMER PASSWORD IS CORRECT</Text>
              );
            case 'incorrect':
              return (
                <Text colorKey="error">CUSTOMER PASSWORD IS INCORRECT</Text>
              );
            case 'skipped':
              return <Text colorKey="warning">PASSWORD WAS SKIPPED</Text>;
            case 'not_available':
              return <Text colorKey="warning">PASSWORD NOT AVAILABLE</Text>;
            default:
              return null;
          }
        })()}
      </PasswordStatus>
    </Flex>
  );
};

export default CancelReason;
