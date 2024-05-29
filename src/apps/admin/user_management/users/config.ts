import { TableColumnConfig } from 'components/table/types';
import { CORE_AGENT_FRAGMENT } from 'src/apollo/codegen/graphql';
import { formatDateTime } from 'utils';

export const table_columns: TableColumnConfig<CORE_AGENT_FRAGMENT>[] = [
  {
    dataProps: item => ({
      label: item?.id.toString() || '-',
    }),
    header: 'ID',
    property: 'id',
  },
  {
    dataProps: item => ({
      label: item?.username?.toUpperCase() || '-',
    }),
    header: 'NAME',
    property: 'username',
    sortable: true,
  },
  {
    dataProps: item => ({
      label:
        formatDateTime({
          date: item.created_at,
          format: 'date',
          locale: 'en-ZA',
        }) || '-',
    }),
    header: 'CREATED ON',
    property: 'created_at',
  },
  {
    dataProps: item => ({
      label:
        formatDateTime({
          date: item.updated_at,
          format: 'date',
          locale: 'en-ZA',
        }) || '-',
    }),
    header: 'UPDATED ON',
    property: 'updated_at',
  },
];
