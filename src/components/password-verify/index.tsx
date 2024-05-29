import { memo, useEffect, useState } from 'react';

import { shuffleArray } from 'auxiliary';
import { Maybe } from 'codegen/graphql';
import { Button, Flex, Form, Grid } from 'components/ui';
import { IOption } from 'components/ui/Form/Options';

import { randomWords } from './randomWords';

export const pickRandomWord = () =>
  randomWords[Math.floor(Math.random() * randomWords.length)];

const PasswordVerify = ({
  isInitVerified,
  label,
  only_proceed_with_password = false,
  onSelectOption,
  password,
}: {
  label?: string;
  isInitVerified: boolean;
  onSelectOption: (correct: boolean) => void;
  password: Maybe<string> | undefined;
  only_proceed_with_password?: boolean;
}) => {
  const [selected, setSelected] = useState<IOption>();
  const [is_verified, setIsVerified] = useState(false);
  const [error, setError] = useState(false);
  const [locked, setLocked] = useState(false);

  const [options, setOptions] = useState<IOption[]>([]);

  useEffect(() => {
    let available_options = password
      ? shuffleArray([
          {
            label: password.toUpperCase(),
            value: 'correct',
          },
          {
            label: pickRandomWord().toUpperCase(),
            value: '1',
          },
          {
            label: pickRandomWord().toUpperCase(),
            value: '2',
          },
          {
            label: pickRandomWord().toUpperCase(),
            value: '3',
          },
          {
            label: pickRandomWord().toUpperCase(),
            value: '4',
          },
        ])
      : [];

    if (!only_proceed_with_password) {
      available_options = [
        {
          label: 'CONTINUE WITHOUT VERIFY',
          value: 'skipped',
        },
        {
          label: 'GIVEN PASSWORD IS NOT IN LIST',
          value: 'incorrect',
        },
        ...available_options,
      ];
    }

    setOptions(available_options);
  }, [password]);

  const onVerify = async () => {
    const is_correct_answer =
      selected?.value === 'correct' || selected?.value === 'skipped';

    onSelectOption(is_correct_answer);
    setIsVerified(is_correct_answer);
    setError(!is_correct_answer);
    setLocked(true);
  };

  useEffect(() => {
    if (isInitVerified) {
      onSelectOption(true);
      setIsVerified(true);
      setLocked(true);
    }
  }, [isInitVerified]);

  return (
    <Grid>
      <Grid.Cell x={[0, 12]} y={[0, 1]}>
        <Form.FieldGroup>
          {label && <Form.Label>{label}</Form.Label>}
          <Form.Field disabled={locked}>
            <Form.Field.Select
              error={error}
              id="verifyPassword"
              name="verifyPassword"
              options={options}
              placeholder={
                isInitVerified
                  ? 'User Password Verified'
                  : 'Select to Verify Password'
              }
              selected={selected}
              setSelected={item => {
                setSelected(item);
              }}
              value={selected?.value || ''}
            >
              {(items, selectValue, activeIndex) =>
                items.length &&
                items.map((option, index) => (
                  <Form.Option
                    active={activeIndex === index}
                    key={option.value}
                    onClick={() => selectValue(option)}
                    selected={option.value === selected?.value}
                  >
                    {option.label}
                  </Form.Option>
                ))
              }
            </Form.Field.Select>
            {selected && !error && !is_verified && (
              <Button
                onClick={onVerify}
                style={{
                  borderColor: 'rgba(40,167,69,1)',
                  marginLeft: '1rem',
                  marginRight: '-1rem',
                  padding: '0rem',
                  width: '8rem',
                }}
                variant="primary"
              >
                VERIFY
              </Button>
            )}
          </Form.Field>
          {error && (
            <Flex style={{ marginTop: '0.025rem' }}>
              <Form.Error>Incorrect Password</Form.Error>
            </Flex>
          )}

          {is_verified && (
            <Flex style={{ marginTop: '0.025rem' }}>
              <Form.Info color="emphasise">User Password Is Verified</Form.Info>
            </Flex>
          )}
        </Form.FieldGroup>
      </Grid.Cell>
    </Grid>
  );
};

export default memo(PasswordVerify);
