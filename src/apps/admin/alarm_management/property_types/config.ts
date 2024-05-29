import { TableColumnConfig } from 'apps/dashboard/components/table/types';
import { AREA } from 'codegen/graphql';

export const table_columns: TableColumnConfig<AREA>[] = [
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
    sortable: true,
  },
];
