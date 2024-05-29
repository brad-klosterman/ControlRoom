import Form, { IOption } from '../../index';

export interface BasicSelectProps<OptionProps> {
  disabled?: boolean;
  id: string;
  label?: string;
  options: OptionProps[];
  placeholder?: string;
  selected: OptionProps | undefined;
  setSelected(option: OptionProps): void;
  small?: boolean;
  loading?: boolean;
}

export const BasicSelect = <OptionProps extends IOption>(
  props: BasicSelectProps<OptionProps>,
) => {
  return (
    <Form.FieldGroup>
      {props.label && <Form.Label htmlFor={props.id}>{props.label}</Form.Label>}
      <Form.Field disabled={props.disabled} small={props.small}>
        <Form.Field.Select<OptionProps>
          busy={props.loading}
          disabled={props.disabled ?? false}
          id={props.id}
          name={props.id}
          options={props.options}
          placeholder={props.placeholder}
          selected={props.selected}
          setSelected={item => {
            if (item) props.setSelected(item);
          }}
          value={props.selected?.value || ''}
        >
          {(items, selectValue, activeIndex) =>
            items.length &&
            items.map((option, index) => (
              <Form.Option
                active={activeIndex === index}
                key={option.value}
                onClick={() => selectValue(option)}
                selected={option.value === props.selected?.value}
              >
                {option.label}
              </Form.Option>
            ))
          }
        </Form.Field.Select>
      </Form.Field>
    </Form.FieldGroup>
  );
};
