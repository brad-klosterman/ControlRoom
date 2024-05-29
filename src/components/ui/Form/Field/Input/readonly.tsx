import Field from '../../Field';
import FieldGroup from '../../FieldGroup';
import Label from '../../Label';

export const ReadonlyInput = ({
  label,
  name,
  small = false,
  unit,
  value,
}: {
  small?: boolean;
  name?: string;
  value: number | string | null | undefined;
  unit?: string;
  label?: string;
}) => {
  return (
    <FieldGroup>
      {label && (
        <Label htmlFor={name} small={small}>
          {label}
        </Label>
      )}
      <Field disabled={true} readonly={true} small={small}>
        {unit && <Field.Unit>{unit}</Field.Unit>}
        <Field.Input value={value || ''} />
      </Field>
    </FieldGroup>
  );
};
