import { ChangeEvent } from 'react';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

import { Flex, Text } from 'components';

import Switch from './index';

export interface ControlledSwitchProps<T extends FieldValues>
  extends UseControllerProps<T> {
  disabled?: boolean;
  label?: string;
  small?: boolean;
}

export const ControlledSwitch = <T extends FieldValues>({
  control,
  label,
  name,
  rules,
}: ControlledSwitchProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
    rules,
  });

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <Flex alignItems="center" gap="large" style={{ height: '3rem' }}>
      <Switch
        checked={value}
        name={name}
        onChange={event => handleOnChange(event)}
      />
      <Text as="label" colorKey="secondary" size="regular">
        {label}
      </Text>
    </Flex>
  );
};
