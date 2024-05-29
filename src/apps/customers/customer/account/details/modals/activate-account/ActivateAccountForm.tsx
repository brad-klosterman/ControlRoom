import { Control } from 'react-hook-form';
import { Form } from 'components/ui';

interface ActivateAccountFormFields {
  activation_date: string;
}

const ActivateAccountForm = (props: {
  control: Control<ActivateAccountFormFields>;
}) => {
  return (
    <Form.DatePicker
      name="activation_date"
      label="Activation Date"
      control={props.control}
      date_valid_from={new Date()}
      rules={{ required: true }}
    />
  );
};

export type { ActivateAccountFormFields };
export { ActivateAccountForm };
