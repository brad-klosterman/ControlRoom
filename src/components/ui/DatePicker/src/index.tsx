import { useEffect, useState } from 'react';

import Form from '../../Form';

export interface DatePickerProps {
  className?: string;
  defaultValue?: string | number;
  value?: string | number;
  disabled?: boolean;
  info?: string;
  label?: string;
  min?: string;
  onDateSelected?: (date: string | number) => void;
  small?: boolean;
}

const DatePicker = ({
  className = '',
  defaultValue = '',
  disabled = false,
  info,
  label,
  min,
  onDateSelected = () => null,
  small = false,
  value = '',
}: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState(defaultValue);

  useEffect(() => {
    onDateSelected(selectedDate);
  }, []);

  useEffect(() => {
    setSelectedDate(value);
  }, [value]);

  const onChange = (e: any) => {
    setSelectedDate(e.target.value);
    onDateSelected(e.target.value);
  };

  return (
    <Form.FieldGroup>
      {label && <Form.Label htmlFor="date">{label}</Form.Label>}
      <Form.Field disabled={disabled} small={small}>
        <Form.Field.Input
          className={className}
          disabled={disabled}
          id="date"
          min={min}
          name="date"
          onChange={onChange}
          placeholder="Date"
          type="date"
          value={selectedDate}
        />
      </Form.Field>
      {info && <Form.Info>{info}</Form.Info>}
    </Form.FieldGroup>
  );
};

export default DatePicker;
