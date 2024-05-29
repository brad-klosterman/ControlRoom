import { TableDataItem } from 'components/ui/Listing/Data';

export interface TColumn<T> {
  column_key: string;
  dataProps(datum: T): TableDataItem;
}

export interface TRow<T> {
  value: T;
  label: string;
}

export interface Props<T> {
  rows: TRow<T>[];
  onClick: (value: T) => void;
  dataProps(datum: T): TableDataItem;
}

const Table = <T extends string>(props: Props<T>) => {
  return <></>;
};

export interface ActionLabel {
  action:
    | { label: string; status?: boolean; subLabel?: string }[]
    | (() => void);
  label: string;
}
