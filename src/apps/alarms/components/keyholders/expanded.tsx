import { useState } from 'react';

import {
  ExpandedContainer,
  ExpandedInner,
  PasswordStatus,
  StatusSelectWrap,
} from 'apps/alarms/components/keyholders/styles';
import { KeyholderCallStatus } from 'apps/alarms/components/keyholders/types';
import VerifyPassword from 'apps/alarms/components/password';
import {
  Maybe,
  PROPERTY_KEYHOLDER,
  SECURITY_QUESTION_ANSWER,
} from 'codegen/graphql';
import { Flex, Text } from 'components';
import { KeyholderCallState } from './utils';
import { toUpperSentence } from 'src/utils';

export const StatusSelect = (props: {
  variant: KeyholderCallStatus;
  call_state: KeyholderCallState;
  onSelectStatus(call_status: KeyholderCallStatus): void;
}) => {
  const getIsSelected = () => {
    if (props.variant === 'ANSWERED') {
      return (
        props.call_state === 'answered-password-correct' ||
        props.call_state === 'answered-password-incorrect'
      );
    }

    if (props.variant === 'NOT_ANSWERED') {
      return props.call_state === 'not-answered';
    }

    return false;
  };

  return (
    <StatusSelectWrap
      onClick={() => props.onSelectStatus(props.variant)}
      selected={getIsSelected()}
      variant={props.variant}
    >
      <Text>{toUpperSentence(props.variant)}</Text>
    </StatusSelectWrap>
  );
};

const ExpandedContent = (props: {
  keyholder: PROPERTY_KEYHOLDER;
  alarm_id: number;
  property_password: Maybe<string> | undefined;
  keyholder_call_state: KeyholderCallState;
  updateKeyholderLog(params: {
    keyholder_id: number;
    call_state: KeyholderCallState;
  }): void;
  setAlarmPasswordState(answer: SECURITY_QUESTION_ANSWER): void;
}) => {
  const keyholder_id = props.keyholder.id;
  const [show_password_selection, setShowPasswordSelection] =
    useState<boolean>(false);

  const doesAlarmRequirePassword = (): boolean => {
    return (
      Boolean(props.property_password) || Boolean(props.keyholder.password)
    );
  };

  const onCallStatusSelected = (call_status: KeyholderCallStatus) => {
    if (call_status === 'NOT_ANSWERED') {
      props.updateKeyholderLog({
        keyholder_id,
        call_state: 'not-answered',
      });
      setShowPasswordSelection(false);
      return;
    }

    if (!doesAlarmRequirePassword()) {
      props.updateKeyholderLog({
        keyholder_id,
        call_state: 'answered-password-correct',
      });
      setShowPasswordSelection(false);
      return;
    }

    setShowPasswordSelection(true);
    return;
  };

  const onPasswordSelected = (password_status: SECURITY_QUESTION_ANSWER) => {
    const new_status: KeyholderCallState =
      password_status === 'correct'
        ? 'answered-password-correct'
        : 'answered-password-incorrect';

    props.updateKeyholderLog({
      keyholder_id,
      call_state: new_status,
    });
    setShowPasswordSelection(false);
  };

  return (
    <ExpandedContainer>
      <ExpandedInner>
        <Flex gap="regular">
          <StatusSelect
            onSelectStatus={onCallStatusSelected}
            call_state={props.keyholder_call_state}
            variant="ANSWERED"
          />
          <StatusSelect
            onSelectStatus={onCallStatusSelected}
            call_state={props.keyholder_call_state}
            variant="NOT_ANSWERED"
          />
        </Flex>
        {show_password_selection && (
          <VerifyPassword
            alarm_id={props.alarm_id}
            keyholder_password={props.keyholder.password}
            locked={false}
            onPasswordSelected={onPasswordSelected}
            property_password={props.property_password}
            variant="keyholder"
          />
        )}
        {(() => {
          switch (props.keyholder_call_state) {
            case 'answered-password-correct':
              return (
                <PasswordStatus>
                  <Text colorKey="emphasise" isBold>
                    KEYHOLDER PASSWORD IS VERIFIED
                  </Text>
                </PasswordStatus>
              );
            case 'answered-password-incorrect':
              return (
                <PasswordStatus>
                  <Text colorKey="error" isBold>
                    KEYHOLDER PASSWORD IS NOT VERIFIED
                  </Text>
                </PasswordStatus>
              );
            default:
              return null;
          }
        })()}
      </ExpandedInner>
    </ExpandedContainer>
  );
};

export default ExpandedContent;
