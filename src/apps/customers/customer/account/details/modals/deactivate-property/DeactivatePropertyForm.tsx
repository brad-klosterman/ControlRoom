import { Control } from 'react-hook-form';
import { CUSTOMER_PROFILE_PROPERTY_FRAGMENT } from 'codegen/graphql';
import { Form } from 'components';

interface DeactivatePropertyFormFields {
  deactivation_date: string;
}

const DeactivatePropertyForm = (props: {
  property: CUSTOMER_PROFILE_PROPERTY_FRAGMENT;
  control: Control<DeactivatePropertyFormFields>;
}) => {
  return (
    <>
      <Form.DatePicker
        label="Dectivation Date"
        name="deactivation_date"
        control={props.control}
        date_valid_from={new Date()}
        rules={{
          required: true,
        }}
      />
    </>
  );
};

export type { DeactivatePropertyFormFields };
export { DeactivatePropertyForm };
