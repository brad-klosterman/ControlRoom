import { Maybe } from 'codegen/graphql';

export interface DateRangeInput {
  from: Maybe<string>;
  to: Maybe<string>;
}

export interface DateRangeProps {
  value: DateRangeInput;
  label?: string;
  small?: boolean;
  onSelectValue: ({ from, to }: DateRangeInput) => void;
  onClearRange: () => void;
}
