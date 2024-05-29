import { Control } from 'react-hook-form';
import { CUSTOMER_PROFILE_PROPERTY_FRAGMENT } from 'codegen/graphql';
import { Form } from 'components';

interface ActivatePropertyFormFields {
  activation_date: string;
}

const ActivatePropertyForm = (props: {
  property: CUSTOMER_PROFILE_PROPERTY_FRAGMENT;
  control: Control<ActivatePropertyFormFields>;
  disabled?: boolean;
}) => {
  return (
    <>
      <Form.DatePicker
        label="Activation Date"
        name="activation_date"
        control={props.control}
        disabled={props.disabled}
        date_valid_from={new Date()}
        rules={{
          required: true,
        }}
      />
    </>
  );
};

export type { ActivatePropertyFormFields };
export { ActivatePropertyForm };
