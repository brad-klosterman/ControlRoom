import { DateRangeProps } from 'components/ui/DateRange/DateRange.types';

import Form from '../Form';
import IconButton from '../IconButton';

const DateRange = ({
  label,
  onClearRange,
  onSelectValue,
  small = false,
  value,
}: DateRangeProps) => {
  const onChange = (event: any) => {
    if (event.target.name === 'from') {
      onSelectValue({ from: event.target.value, to: value.to });
    }

    if (event.target.name === 'to') {
      onSelectValue({ from: value.from, to: event.target.value });
    }
  };

  return (
    <Form.FieldGroup>
      <Form.Label htmlFor="input" small={small}>
        {label ?? ''}
      </Form.Label>
      <Form.Field small={small}>
        <Form.Field.Input
          defaultValue={value.from ?? ''}
          id="from"
          name="from"
          onChange={onChange}
          placeholder="Start Date"
          type="date"
        />
        <Form.Field.Input
          defaultValue={value.to ?? ''}
          id="to"
          name="to"
          onChange={onChange}
          placeholder="End Data"
          style={{ paddingLeft: 0 }}
          type="date"
        />
        {value.from && value.to && (
          <IconButton.Cross
            label="Close"
            onClick={onClearRange}
            style={{ background: 'transparent', border: 'none' }}
          />
        )}
      </Form.Field>
    </Form.FieldGroup>
  );
};

export default DateRange;
