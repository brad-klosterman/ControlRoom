import React, { ChangeEvent, CSSProperties } from 'react';
import {
  Control,
  FieldValues,
  Path,
  PathValue,
  useController,
  UseControllerProps,
} from 'react-hook-form';

import Error from '../../Error';
import Field from '../../Field';
import FieldGroup from '../../FieldGroup';
import Label from '../../Label';

export interface InputProps<T extends FieldValues>
  extends UseControllerProps<T> {
  control: Control<T>;
  auto_complete?: boolean;
  disabled?: boolean;
  label?: string;
  max?: number;
  min?: number;
  placeholder?: string;
  small?: boolean;
  type?: 'text' | 'number' | 'tel' | 'password' | 'time';
  unit?: string;
  icon?: React.ReactNode;
  onChangeCB?: (event: ChangeEvent<HTMLInputElement>) => void;
  field_style?: CSSProperties;
}

export const ControlledInput = <T extends FieldValues>({
  auto_complete = false,
  control,
  disabled = false,
  label,
  max,
  min = 0,
  name,
  onChangeCB,
  placeholder,
  rules,
  small = false,
  type = 'text',
  unit,
  icon: Icon,
  field_style,
}: InputProps<T>) => {
  const {
    field: { onBlur, onChange, ref, value },
    fieldState: { error, invalid },
  } = useController({
    control,
    name,
    rules,
  });

  const currentValue = value ? value : '';

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    let updated_value: string | number | null | undefined = event.target.value;

    if (type === 'number') {
      updated_value = updated_value ? Number(updated_value) : null;
    }

    onChange(updated_value as PathValue<T, Path<T>>);
    if (onChangeCB) onChangeCB(event);
  };

  return (
    <FieldGroup>
      {label && (
        <Label htmlFor={name} small={small}>
          {label}
        </Label>
      )}
      <Field disabled={disabled} small={small} style={field_style}>
        {unit && <Field.Unit>{unit}</Field.Unit>}
        <Field.Input
          {...{ onBlur }}
          autoComplete={auto_complete ? 'on' : 'new-password'}
          max={max}
          min={min}
          onChange={event => handleOnChange(event)}
          placeholder={placeholder || ''}
          ref={ref}
          type={type}
          value={currentValue}
        />
        {Icon && Icon}
      </Field>
      {invalid && <Error>{error?.message || ''}</Error>}
    </FieldGroup>
  );
};
