import { Fragment, memo } from 'react';

import ExpandedContent from 'apps/alarms/components/keyholders/expanded';
import {
  Details,
  PhoneIcon,
  RowInner,
  Row,
} from 'apps/alarms/components/keyholders/styles';
import {
  ALARM_KEYHOLDER_LOG_FRAGMENT,
  Maybe,
  PROPERTY_KEYHOLDER,
  SECURITY_QUESTION_ANSWER,
} from 'codegen/graphql';
import { Icon, Text } from 'components';
import { Expander } from 'components/ui/Expander';
import { KeyholderCallState } from './utils';
import { useKeyholderCallState } from './use.keyholder-call-state';
import { useTheme } from 'styled-components';

const CallIcon = ({ call_state }: { call_state: KeyholderCallState }) => {
  const theme = useTheme();

  const getIconColor = (): string | undefined => {
    switch (call_state) {
      case 'answered-password-correct':
        return theme.colors.success[500];
      case 'answered-password-incorrect':
        return theme.colors.error[500];
      case 'not-answered':
        return theme.colors.warning[500];
      default:
        return undefined;
    }
  };

  const getIcon = (): JSX.Element | null => {
    switch (call_state) {
      case 'answered-password-correct':
        return <Icon.CheckMark />;
      case 'answered-password-incorrect':
        return <Icon.Cross />;
      case 'not-answered':
        return <Icon.NoAnswerPhone />;
      default:
        return null;
    }
  };

  if (call_state === 'unknown') {
    return null;
  }

  return (
    <Text
      size="displayRegular"
      style={{
        paddingRight: '1rem',
        color: getIconColor(),
      }}
    >
      {getIcon()}
    </Text>
  );
};

const Keyholders = (props: {
  alarm_id: number;
  property_id: number | null;
  property_password: Maybe<string> | undefined;
  keyholders: Maybe<PROPERTY_KEYHOLDER[]> | undefined;
  keyholder_logs: ALARM_KEYHOLDER_LOG_FRAGMENT[];
  setAlarmPasswordState(answer: SECURITY_QUESTION_ANSWER): void;
}) => {
  const { getKeyholderCallState, updateKeyholderLog } = useKeyholderCallState({
    alarm_id: props.alarm_id,
    keyholders: props.keyholders ?? [],
    keyholder_logs: props.keyholder_logs,
  });

  const onSaveCallLog = async (params: {
    keyholder_id: number;
    call_state: KeyholderCallState;
  }) => {
    const call_log_response = await updateKeyholderLog(params);
    if (call_log_response.password_correct) {
      props.setAlarmPasswordState('correct');
    }
  };

  if (!props.keyholders) return null;

  return (
    <Expander id={props.alarm_id + 'keyholders'}>
      {props.keyholders.map((keyholder, index) => (
        <Fragment key={keyholder.id}>
          <Row
            first={index == 0}
            last={Boolean(
              props.keyholders && index + 1 === props.keyholders.length,
            )}
          >
            <RowInner>
              <PhoneIcon />
              <Details>
                <Text size="displaySmall" style={{ lineHeight: 1 }}>
                  {keyholder.name?.toUpperCase() ||
                    keyholder.description?.toUpperCase() ||
                    'KEYHOLDER'}
                </Text>
                <Text
                  colorKey="secondary"
                  size="displaySmall"
                  style={{ lineHeight: 1 }}
                >
                  {keyholder.mobile_phone || keyholder.landline_phone}
                </Text>
              </Details>
              <CallIcon call_state={getKeyholderCallState(keyholder.id)} />
              <Expander.Arrow />
            </RowInner>
          </Row>
          <ExpandedContent
            alarm_id={props.alarm_id}
            keyholder={keyholder}
            keyholder_call_state={getKeyholderCallState(keyholder.id)}
            property_password={props.property_password}
            setAlarmPasswordState={props.setAlarmPasswordState}
            updateKeyholderLog={onSaveCallLog}
          />
        </Fragment>
      ))}
    </Expander>
  );
};

export default memo(Keyholders);
