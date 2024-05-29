import { Control, FieldValues, Path } from 'react-hook-form';

export type SearchBarField<T> = {
  name: Path<T>;
  label: string;
  type: 'Input' | 'Select' | 'MultiSelect' | 'Lookup' | 'DatePicker';
};

export type SearchBarProps<T extends FieldValues> = {
  control: Control<T>;
  fields: SearchBarField<T>[];
};
