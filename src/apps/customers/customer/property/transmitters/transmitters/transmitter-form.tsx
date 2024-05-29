import { Control } from 'react-hook-form';

import Areas from 'apps/admin/company_settings/areas/provider';
import Decoders from 'apps/admin/company_settings/decoders/provider';
import ControlledSelect from 'components/ui/Form/Field/Select/controlled';
import { UPDATE_TRANSMITTER_PARAMS } from 'src/apollo/codegen/graphql';
import {
  TEST_CYCLE_FAILED_TO_TEST_OPTIONS,
  TRANSMITTER_SET_NAMES_OPTIONS,
} from 'src/apps/admin/company_settings/transmitters/form.values';
import { Form } from 'src/components';
import { isRequired } from 'src/components/ui/Form/validation';

interface TransmitterFormProps {
  form_control: Control<UPDATE_TRANSMITTER_PARAMS>;
  disabled?: boolean;
}

const TransmitterForm = ({ disabled, form_control }: TransmitterFormProps) => {
  const { decoders_name_select } = Decoders.useContext();
  const { areas_select } = Areas.useContext();

  return (
    <>
      <Form.Input
        control={form_control}
        disabled={disabled}
        label="Transmitter ID"
        name="number"
        rules={isRequired}
      />
      <Form.Input
        control={form_control}
        disabled={disabled}
        label="Description (Optional)"
        name="description"
      />
      <ControlledSelect
        control={form_control}
        disabled={disabled}
        label="Decoder"
        name="decoder_name"
        options={decoders_name_select}
        rules={isRequired}
      />
      <ControlledSelect
        control={form_control}
        disabled={disabled}
        label="Area"
        name="area_id"
        options={areas_select}
        rules={isRequired}
      />
      <ControlledSelect
        control={form_control}
        disabled={disabled}
        label="Set Name"
        name="set_name"
        options={TRANSMITTER_SET_NAMES_OPTIONS}
        rules={isRequired}
      />
      <ControlledSelect
        control={form_control}
        disabled={disabled}
        label="Test Cycle (hours)"
        name="heartbeat_interval"
        options={TEST_CYCLE_FAILED_TO_TEST_OPTIONS}
        rules={isRequired}
      />
    </>
  );
};

export { TransmitterForm };
