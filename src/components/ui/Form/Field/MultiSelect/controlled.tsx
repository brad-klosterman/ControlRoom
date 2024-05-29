import {
  FieldValues,
  PathValue,
  useController,
  UseControllerProps,
  Path,
} from 'react-hook-form';

import { Checkbox, Text } from 'components';

import Error from '../../Error';
import Form from '../../index';
import Label from '../../Label';
import { IOption } from '../../Options';

export interface MultiSelectProps<T extends FieldValues>
  extends UseControllerProps<T> {
  label?: string;
  options: IOption[];
  placeholder?: string;
  small?: boolean;
  type?: string;
  disabled?: boolean;
}

const ControlledMultiSelect = <T extends FieldValues>({
  control,
  label,
  name,
  options,
  placeholder,
  rules,
  small = false,
  disabled,
}: MultiSelectProps<T>) => {
  const {
    field: { onChange, value: values },
    fieldState: { error, invalid },
  } = useController({
    control,
    name,
    rules,
  });

  return (
    <Form.FieldGroup>
      {label && (
        <Label htmlFor={name} small={small}>
          {label}
        </Label>
      )}
      <Form.Field small={small} disabled={disabled}>
        <Form.Field.MultiSelect
          error={invalid}
          id={name}
          name={name}
          options={options}
          placeholder={placeholder}
          setSelected={items => {
            onChange(items as PathValue<T, Path<T>>);
          }}
          values={values || []}
        >
          {(items, selectValue, activeIndex) =>
            items.length &&
            items.map((option, index) => (
              <Form.Option
                active={activeIndex === index}
                key={option.value}
                onClick={() => selectValue(option)}
                selected={values?.includes(option.value)}
              >
                <Checkbox
                  size={small ? 'sm' : 'md'}
                  value={values?.includes(option.value)}
                />
                <Text isTruncated size="labelRegular">
                  {option.label}
                </Text>
              </Form.Option>
            ))
          }
        </Form.Field.MultiSelect>
      </Form.Field>
      {invalid && <Error>{error?.message || ''}</Error>}
    </Form.FieldGroup>
  );
};

export default ControlledMultiSelect;
