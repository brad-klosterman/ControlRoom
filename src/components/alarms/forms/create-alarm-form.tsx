import { Control } from 'react-hook-form';
import { Grid } from 'src/components/ui';
import ControlledSelect from 'src/components/ui/Form/Field/Select/controlled';
import { IOption, IOptionNumber } from 'src/components/ui/Form/Options';

interface AlarmTypeSubset {
  id: number;
  description?: string | null;
}

interface PropertySubset {
  id: number;
  address?: string | null;
}

interface CreateAlarmFormParams {
  property_id: number | null;
  alarm_type_id: number | null;
}

interface CreateAlarmFormProps {
  form_control: Control<CreateAlarmForm>;
  properties: readonly PropertySubset[];
  alarm_types: readonly AlarmTypeSubset[];
}

interface CreateAlarmForm {
  property_id: number | null;
  alarm_type_id: number | null;
}

const CreateAlarmForm = ({
  form_control,
  alarm_types,
  properties
}: CreateAlarmFormProps) => {
  const property_options: IOptionNumber[] = properties.map(property => ({
    value: property.id,
    label: property.address ?? '-'
  }));

  const mapAlarmTypeOptions = (): IOption[] => {
    return alarm_types.map(alarm_type => ({
      value: alarm_type.id,
      label: alarm_type.description ?? '-'
    }));
  };

  return (
    <Grid spacing="regular">
      <Grid.Cell x={[0, 12]} y={[0, 1]}>
        <ControlledSelect
          control={form_control}
          label="Property"
          name="property_id"
          options={property_options}
        />
      </Grid.Cell>
      <Grid.Cell x={[0, 12]} y={[1, 2]}>
        <ControlledSelect
          control={form_control}
          label="Alarm Type"
          name="alarm_type_id"
          options={mapAlarmTypeOptions()}
        />
      </Grid.Cell>
    </Grid>
  );
};

export type { PropertySubset, AlarmTypeSubset, CreateAlarmFormParams };
export { CreateAlarmForm };
