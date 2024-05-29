import { DECODER } from 'codegen/graphql';
import { TableColumnConfig } from 'components/table/types';

export const table_columns: TableColumnConfig<DECODER>[] = [
  {
    dataProps: r => ({
      label: r?.id ? r.id.toString() : '-',
    }),
    header: 'ID',
    property: 'id',
  },
  {
    dataProps: r => ({
      label: r?.name?.toUpperCase() || '-',
    }),
    header: 'NAME',
    property: 'name',
  },
];
