import { CSSProperties } from 'react';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { BeforeMaskedStateChangeStates, InputState } from 'react-input-mask';

import Error from '../../Error';
import Field from '../../Field';
import FieldGroup from '../../FieldGroup';
import Label from '../../Label';

export interface InputProps<T extends FieldValues>
  extends UseControllerProps<T> {
  beforeMaskedStateChange?(states: BeforeMaskedStateChangeStates): InputState;
  disabled?: boolean;
  label?: string;
  mask: string;
  maskPlaceholder?: string | null | undefined;
  placeholder?: string;
  small?: boolean;
  style?: CSSProperties | undefined;
  type?: string;
  unit?: string;
}

export const ControlledMaskedInput = <T extends FieldValues>({
  beforeMaskedStateChange,
  control,
  disabled = false,
  label,
  mask,
  name,
  placeholder,
  rules,
  small = false,
  style,
  type = 'text',
  unit,
}: InputProps<T>) => {
  const {
    field: { onBlur, onChange, value },
    fieldState: { error, invalid },
  } = useController({
    control,
    name,
    rules,
  });

  const currentValue = value ? `${value}` : '';

  return (
    <FieldGroup>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Field disabled={disabled} small={small}>
        {unit && <Field.Unit>{unit}</Field.Unit>}
        <Field.MaskedInput
          {...{ onBlur, onChange }}
          alwaysShowMask={false}
          beforeMaskedStateChange={beforeMaskedStateChange}
          mask={mask}
          placeholder={placeholder || ''}
          // ref={ref}
          style={style}
          type={type}
          value={currentValue}
        />
      </Field>
      {invalid && <Error>{error?.message || ''}</Error>}
    </FieldGroup>
  );
};
