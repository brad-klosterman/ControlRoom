import { PRODUCT_TEMPLATE_CORE_FRAGMENT } from 'codegen/graphql';
import { TableColumnConfig } from 'components/table/types';
import { formatDateTime } from 'utils';

export const table_columns: TableColumnConfig<PRODUCT_TEMPLATE_CORE_FRAGMENT>[] =
  [
    {
      dataProps: r => ({
        label: r.name.toUpperCase(),
      }),
      header: 'NAME',
      property: 'name',
      sortable: false,
    },
    {
      dataProps: r => ({
        label: r.description.toUpperCase(),
      }),
      header: 'DESCRIPTION',
      property: 'description',
      sortable: false,
    },
    {
      dataProps: r => ({
        label:
          formatDateTime({
            date: r.created_at,
            format: 'date',
            locale: 'en-ZA',
          }) || '-',
      }),
      header: 'CREATED ON',
      property: 'created_at',
      sortable: false,
    },
  ];
