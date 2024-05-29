import { ChangeEvent } from 'react';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

import { type DatePickerCustomSelectionType, DatePicker } from './DatePicker';

interface ControlledDatePickerProps<T extends FieldValues>
  extends UseControllerProps<T> {
  auto_complete?: boolean;
  disabled?: boolean;
  label?: string;
  max?: number;
  min?: number;
  placeholder?: string;
  small?: boolean;
  type?: string;
  unit?: string;
  onChangeCB?: (event: ChangeEvent<HTMLInputElement>) => void;
  custom_selection_type?: DatePickerCustomSelectionType;
  date_valid_from?: Date;
}

const ControlledDatePicker = <T extends FieldValues>({
  control,
  custom_selection_type,
  disabled = false,
  label,
  name,
  onChangeCB,
  rules,
  date_valid_from,
  small = false,
}: ControlledDatePickerProps<T>) => {
  const {
    field: { onChange, value },
    fieldState,
  } = useController({
    control,
    name,
    rules,
  });

  return (
    <DatePicker
      custom_selection_type={custom_selection_type}
      disabled={disabled}
      invalid={fieldState.invalid}
      error_message={fieldState.error?.message}
      label={label}
      onChange={event => {
        onChange(event as ChangeEvent<HTMLInputElement>);

        if (onChangeCB) {
          onChangeCB(event as ChangeEvent<HTMLInputElement>);
        }
      }}
      date_valid_from={date_valid_from}
      small={small}
      value={value}
    />
  );
};

export { ControlledDatePicker };
