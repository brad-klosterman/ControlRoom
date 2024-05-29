import { Control, useForm } from 'react-hook-form';
import { PROPERTY_PROFILE_TRANSMITTER_FRAGMENT } from 'src/apollo/codegen/graphql';
import { Form, Grid } from 'src/components';
import ControlledSelect from 'src/components/ui/Form/Field/Select/controlled';
import { isRequired } from 'src/components/ui/Form/validation';

interface PropertyZoneForm {
  decoder_name: string;
  description: string | null;
  number: string | null;
  zone_type: string | null;
  transmitter_id?: number | null;
  transmitter_name?: string | null;
}

interface TransmitterFormProps {
  form_control: Control<PropertyZoneForm>;
  transmitters: readonly PROPERTY_PROFILE_TRANSMITTER_FRAGMENT[];
  disabled?: boolean;
}

const ZoneForm = ({
  form_control,
  transmitters,
  disabled,
}: TransmitterFormProps) => {
  const transmitter_options = transmitters.map(transmitter => ({
    label: transmitter.number ?? '-',
    value: transmitter.id,
  }));

  return (
    <>
      <Grid.Cell x={[0, 6]} y={[0, 1]}>
        <Form.Input
          control={form_control}
          disabled={disabled}
          label="Zone Number"
          name="number"
          rules={isRequired}
        />
      </Grid.Cell>
      <Grid.Cell x={[6, 12]} y={[0, 1]}>
        <Form.Input
          control={form_control}
          disabled={disabled}
          label="Zone Type"
          name="zone_type"
          rules={isRequired}
        />
      </Grid.Cell>
      <Grid.Cell x={[0, 12]} y={[1, 2]}>
        <Form.Input
          control={form_control}
          disabled={disabled}
          label="Zone Description"
          name="description"
          rules={isRequired}
        />
      </Grid.Cell>
      <Grid.Cell x={[0, 12]} y={[2, 3]}>
        <ControlledSelect
          control={form_control}
          disabled={disabled}
          label="Zone Transmitter"
          name="transmitter_id"
          options={transmitter_options}
        />
      </Grid.Cell>
    </>
  );
};

export type { PropertyZoneForm };
export { ZoneForm };
