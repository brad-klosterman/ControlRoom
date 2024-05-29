import { TableColumnConfig } from 'components/table/types';
import { CORE_TECHNICIAN_FRAGMENT } from 'src/apollo/codegen/graphql';
import { formatDateTime } from 'utils';

export const table_columns: TableColumnConfig<CORE_TECHNICIAN_FRAGMENT>[] = [
  {
    dataProps: item => ({
      label: item?.id.toString() || '-',
    }),
    header: 'ID',
    property: 'id',
  },
  {
    dataProps: item => ({
      label: item?.name?.toUpperCase() || '-',
    }),
    header: 'NAME',
    property: 'username',
    sortable: true,
  },
  {
    dataProps: item => ({
      label: item?.phone_number?.toUpperCase() || '-',
    }),
    header: 'PHONE NUMBER',
    property: 'phone_number',
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
  // {
  //   dataProps: item => ({
  //     label: item?.active || '-',
  //   }),
  //   header: 'ACTIVE',
  //   property: 'status',
  // },
];
