import { DeepPartial, FieldValues, Path, PathValue } from 'react-hook-form';

export type SearchBarField<T> = {
  name: Path<T>;
  label: string;
  default_value?: PathValue<T, Path<T>>;
  hidden?: boolean;
  disabled?: boolean;
  advanced?: boolean;
} & (
  | {
      type:
        | 'Input'
        | 'InputNumber'
        | 'DatePicker'
        | 'AlarmTypes'
        | 'TransmitterSelector'
        | 'MonthPicker';
    }
  | {
      type: 'Select' | 'MultiSelect';
      options: { label: string; value: PathValue<T, Path<T>> }[];
    }
);

export type SearchBarProps<T extends FieldValues> = {
  title?: string | null;
  params: SearchBarField<T>[];
  onSearch: (params?: T) => void;
  stored_params?: DeepPartial<T> | null | undefined;
  default_expanded?: boolean;
  number_of_columns?: number;
  use_enter_key?: boolean;
};
