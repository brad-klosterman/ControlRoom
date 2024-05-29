import { TableColumnConfig } from 'components/table/types';
import { CORE_RESPONDER_FRAGMENT } from 'src/apollo/codegen/graphql';
import { formatDateTime } from 'utils';

export const table_columns: TableColumnConfig<CORE_RESPONDER_FRAGMENT>[] = [
  {
    dataProps: item => ({
      label: item?.id.toString() || '-'
    }),
    header: 'ID',
    property: 'id'
  },
  {
    dataProps: item => ({
      label: item?.name?.toUpperCase() || '-'
    }),
    header: 'NAME',
    property: 'username',
    sortable: true
  },
  {
    dataProps: item => ({
      label: item?.email?.toUpperCase() || '-'
    }),
    header: 'EMAIL',
    property: 'email',
    sortable: true
  },
  {
    dataProps: item => ({
      label:
        formatDateTime({
          date: item.created_on,
          format: 'date',
          locale: 'en-ZA'
        }) || '-'
    }),
    header: 'CREATED ON',
    property: 'created_at'
  },
  {
    dataProps: item => ({
      label:
        formatDateTime({
          date: item.updated_on,
          format: 'date',
          locale: 'en-ZA'
        }) || '-'
    }),
    header: 'UPDATED ON',
    property: 'updated_at'
  }
];
