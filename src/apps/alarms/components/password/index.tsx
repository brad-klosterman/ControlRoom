import { useMutation } from '@apollo/client';
import { memo, useMemo, useState } from 'react';

import { shuffleArray } from 'auxiliary';
import {
  LOG_SECURITY_QUESTION_DOCUMENT,
  SECURITY_QUESTION_ANSWER,
} from 'codegen/graphql';
import { Button, Flex } from 'components';
import { pickRandomWord } from 'components/password-verify';
import { Text } from 'components/ui';

import { Row } from './styles';
import { AlarmPasswordProps } from './types';

const default_options = {
  not_in_list: 'GIVEN PASSWORD IS NOT IN LIST',
  not_verified: 'PASSWORD NOT VERIFIED',
  continue_without_verify: 'CONTINUE WITHOUT VERIFY',
};

const VerifyPassword = ({
  alarm_id,
  alarm_source,
  keyholder_password,
  locked,
  onPasswordSelected,
  property_password,
  setAlarmPasswordState,
  variant,
}: AlarmPasswordProps) => {
  const [selected_password, setSelectedPassword] = useState<string>();

  const password_options = useMemo(() => {
    const password_array = [
      pickRandomWord().toUpperCase(),
      pickRandomWord().toUpperCase(),
      pickRandomWord().toUpperCase(),
      pickRandomWord().toUpperCase(),
      pickRandomWord().toUpperCase(),
    ];

    if (property_password) {
      password_array.push(property_password.toUpperCase());
    }

    if (keyholder_password) {
      password_array.push(keyholder_password.toUpperCase());
    }

    return [
      ...shuffleArray(password_array),
      variant === 'property_owner'
        ? default_options.not_in_list
        : default_options.not_verified,
      default_options.continue_without_verify,
    ];
  }, []);

  const [log_security_question, { loading }] = useMutation(
    LOG_SECURITY_QUESTION_DOCUMENT,
  );

  const verifyPropertyPassword = async () => {
    let answer: SECURITY_QUESTION_ANSWER;

    if (selected_password === default_options.continue_without_verify) {
      answer = 'skipped';
    } else if (
      selected_password === default_options.not_in_list ||
      selected_password?.toLowerCase() !== property_password?.toLowerCase()
    ) {
      answer = 'incorrect';
    } else {
      answer = 'correct';
    }

    if (alarm_source)
      log_security_question({
        variables: {
          alarm_id,
          alarm_source,
          answer,
        },
      }).then(() => {
        if (setAlarmPasswordState) setAlarmPasswordState(answer);
      });
  };

  const verifyKeyholderPassword = async () => {
    let answer: SECURITY_QUESTION_ANSWER = 'incorrect';

    if (
      selected_password?.toLowerCase() === property_password?.toLowerCase() ||
      selected_password?.toLowerCase() === keyholder_password?.toLowerCase()
    ) {
      answer = 'correct';
    }

    if (onPasswordSelected) onPasswordSelected(answer);
  };

  return (
    <Flex direction="column" fitWidth gap="xxSmall">
      {password_options.map((option: string) => (
        <Row
          dangerous={[
            default_options.not_in_list,
            default_options.not_verified,
            default_options.continue_without_verify,
          ].includes(option)}
          key={option}
          locked={locked}
          onClick={() => setSelectedPassword(option)}
          onVerify={
            variant === 'property_owner'
              ? verifyPropertyPassword
              : verifyKeyholderPassword
          }
          option={option}
          selected={option === selected_password}
          isLoading={loading}
        />
      ))}
    </Flex>
  );
};

export default memo(VerifyPassword);

/*

  {option === selected_password && (
            <Button
              onClick={
                variant === 'property_owner'
                  ? verifyPropertyPassword
                  : verifyKeyholderPassword
              }
              size="small"
              variant={
                [
                  default_options.not_in_list,
                  default_options.not_verified,
                  default_options.continue_without_verify,
                ].includes(option)
                  ? 'dangerous'
                  : 'primary'
              }
            >
              {[
                default_options.not_in_list,
                default_options.not_verified,
                default_options.continue_without_verify,
              ].includes(option)
                ? 'CONTINUE'
                : 'VERIFY'}
            </Button>
          )}
 */
