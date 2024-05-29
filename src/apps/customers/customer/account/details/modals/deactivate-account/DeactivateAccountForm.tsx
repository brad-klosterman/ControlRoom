import { Control } from 'react-hook-form';

import { useSSPSettingsContext } from '@admin/company_settings/settings/provider';
import { Form } from 'components';

interface DeactivateAccountFormFields {
  deactivation_date: string;
  deactivation_reason_id: number;
}

const DeactivateAccountForm = (props: {
  control: Control<DeactivateAccountFormFields>;
}) => {
  const { account_suspension_reason_options } = useSSPSettingsContext();

  return (
    <>
      <Form.DatePicker
        label="Deactivation Date"
        name="deactivation_date"
        control={props.control}
        date_valid_from={new Date()}
      />
      <Form.Select
        label="Reason"
        name="deactivation_reason_id"
        control={props.control}
        options={account_suspension_reason_options}
        rules={{ required: true }}
      />
    </>
  );
};

export type { DeactivateAccountFormFields };
export { DeactivateAccountForm };
