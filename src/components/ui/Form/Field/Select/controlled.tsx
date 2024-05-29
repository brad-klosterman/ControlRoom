import {
  FieldValues,
  PathValue,
  useController,
  UseControllerProps,
  Path,
} from 'react-hook-form';

import Error from '../../Error';
import Field from '../../Field';
import FieldGroup from '../../FieldGroup';
import Label from '../../Label';
import { IOption } from '../../Options';
import { Option } from '../../Options/Option';

export interface SelectProps<T extends FieldValues>
  extends UseControllerProps<T> {
  disabled?: boolean;
  label?: string;
  options: IOption[];
  placeholder?: string;
  small?: boolean;
  type?: string;
  onSelected?(): void;
}

const ControlledSelect = <T extends FieldValues>({
  control,
  disabled = false,
  label,
  name,
  onSelected,
  options,
  placeholder,
  rules,
  small = false,
}: SelectProps<T>) => {
  const {
    field: { onBlur, onChange, value },
    fieldState: { error, invalid },
  } = useController({
    control,
    name,
    rules,
  });

  const currentValue = value !== undefined && value !== null ? `${value}` : '';

  return (
    <FieldGroup>
      {label && (
        <Label htmlFor={name} small={small}>
          {label}
        </Label>
      )}
      <Field disabled={disabled} small={small}>
        <Field.Select
          {...{ onBlur }}
          error={invalid}
          id={name}
          name={name}
          options={options}
          placeholder={placeholder}
          setSelected={item => {
            onChange(item!.value as PathValue<T, Path<T>>);
            if (onSelected) onSelected();
          }}
          value={currentValue}
        >
          {(items, selectValue, activeIndex) =>
            items.length &&
            items.map((option, index) => (
              <Option
                active={activeIndex === index}
                key={`${option.value}-${index}`}
                onClick={() => selectValue(option)}
                selected={option.value === value}
              >
                {option.label}
              </Option>
            ))
          }
        </Field.Select>
      </Field>
      {invalid && <Error>{error?.message || ''}</Error>}
    </FieldGroup>
  );
};

export default ControlledSelect;
