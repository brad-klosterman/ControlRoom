import { Label } from './styles';

export interface ToggleActiveProps<T extends string> {
  name: string;
  values: T[];
  onChange: (value: T) => void;
  value: T | null;
  size?: 'small' | 'regular' | 'large';
  use_emphasise?: boolean;
}

const ToggleActive = <T extends string>({
  name,
  onChange,
  size = 'regular',
  use_emphasise = false,
  value,
  values,
}: ToggleActiveProps<T>) => {
  const emphasise_state =
    !use_emphasise || !value
      ? null
      : value === values[0]
      ? 'active'
      : 'inactive';

  return (
    <Label emphasise_state={emphasise_state} htmlFor={name} size={size}>
      <span
        className={value === values[0] ? 'active' : 'inactive'}
        onClick={() => onChange(values[0])}
      >
        {values[0]}
      </span>
      <span
        className={value === values[1] ? 'active' : 'inactive'}
        onClick={() => onChange(values[1])}
      >
        {values[1]}
      </span>
    </Label>
  );
};

export default ToggleActive;
