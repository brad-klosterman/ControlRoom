import React from 'react';
import { Control } from 'react-hook-form';
import { CUSTOMER_ACCOUNT_PROFILE_FRAGMENT } from 'codegen/graphql';
import { Form } from 'components';
import { useSSPSettingsContext } from '@admin/company_settings/settings/provider';
import { usePropertyOptions } from '@customers/customer/property/property_selector';
import { formatDate } from 'utils';

interface SuspendPropertiesFormFields {
  /**
   * A value of -1 one here indicates all properties!
   */
  property_id: number;
  suspend_reason_id: number;
  suspend_date: string;
  reactivation_date?: string;
}

const SuspendPropertiesForm = (props: {
  customer: CUSTOMER_ACCOUNT_PROFILE_FRAGMENT;
  control: Control<SuspendPropertiesFormFields>;
  disabled?: boolean;
  selectedDefaultProperty(property_id: number): void;
}) => {
  const { account_suspension_reason_options } = useSSPSettingsContext();

  const available_property_options = usePropertyOptions().options;
  const PROPERTY_OPTIONS = (() => {
    if (available_property_options.length > 1) {
      return [
        {
          label: 'All Properties',
          value: -1,
        },
        ...available_property_options,
      ];
    }

    return [...available_property_options];
  })();

  const property_id_label = (() => {
    if (available_property_options.length > 1) {
      return 'Properties';
    }

    return 'Property';
  })();

  React.useEffect(() => {
    props.selectedDefaultProperty(PROPERTY_OPTIONS[0].value);
  }, [PROPERTY_OPTIONS.length]);

  return (
    <>
      <Form.Select
        label={property_id_label}
        name="property_id"
        control={props.control}
        options={PROPERTY_OPTIONS}
        disabled={props.disabled}
        rules={{ required: true }}
      />
      <Form.DatePicker
        label="Suspend Date"
        name="suspend_date"
        control={props.control}
        disabled={props.disabled}
        date_valid_from={new Date()}
        defaultValue={formatDate(new Date())}
        rules={{ required: true }}
      />
      <Form.Select
        label="Reason"
        name="suspend_reason_id"
        control={props.control}
        options={account_suspension_reason_options}
        disabled={props.disabled}
        rules={{ required: true }}
      />
      <Form.DatePicker
        label="Scheduled Reactivation Date (Optional)"
        name="reactivation_date"
        control={props.control}
        date_valid_from={new Date()}
        disabled={props.disabled}
      />
    </>
  );
};

export type { SuspendPropertiesFormFields };
export { SuspendPropertiesForm };
