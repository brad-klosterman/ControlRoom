import React from 'react';
import { FieldValues } from 'react-hook-form';
import { ControlledInput, InputProps } from './controlled';
import { VisibilityToggleIcon } from './VisibilityToggleIcon';

type ControlledPasswordInputProps<T extends FieldValues> = Omit<
  InputProps<T>,
  'type' | 'icon'
> & {
  permissions: { view: boolean };
};

const ControlledPasswordInput = <T extends FieldValues>(
  props: ControlledPasswordInputProps<T>,
) => {
  const [visible, setVisible] = React.useState(false);

  const getIcon = () =>
    props.permissions.view && (
      <VisibilityToggleIcon
        visible
        onClick={() => setVisible(prevState => !prevState)}
      />
    );

  return (
    <ControlledInput
      {...props}
      disabled={props.disabled}
      type={visible ? 'text' : 'password'}
      icon={getIcon()}
      field_style={{ paddingRight: 0 }}
    />
  );
};

export { ControlledPasswordInput };
