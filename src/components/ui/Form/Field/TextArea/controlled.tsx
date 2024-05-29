import { CSSProperties, TextareaHTMLAttributes, forwardRef } from 'react';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

import { FieldGroupWrapper } from 'components/ui/Form/Field/TextArea/styles';

import Error from '../../Error';
import Field from '../../Field';
import FieldGroup from '../../FieldGroup';
import Label from '../../Label';

export interface TextAreaProps<T extends FieldValues>
  extends UseControllerProps<T> {
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  rows?: number;
  style?: CSSProperties;
}

const TextArea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => {
  return <textarea {...props} ref={ref} />;
});

export const ControlledTextArea = <T extends FieldValues>({
  control,
  disabled = false,
  label,
  name,
  placeholder,
  rows = 9,
  rules,
  style,
}: TextAreaProps<T>) => {
  const {
    field: { onBlur, onChange, ref, value },
    fieldState: { error, invalid },
  } = useController({
    control,
    name,
    rules,
  });

  const currentValue = value ? `${value}` : '';

  return (
    <FieldGroupWrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Field isTextArea>
        <TextArea
          {...{ onBlur, onChange }}
          disabled={disabled}
          placeholder={placeholder || ''}
          ref={ref}
          rows={rows}
          style={{ ...style, cursor: disabled ? 'not-allowed' : 'inherit' }}
          value={currentValue}
        />
      </Field>
      {invalid && <Error>{error?.message || ''}</Error>}
    </FieldGroupWrapper>
  );
};
