import { TableColumnConfig } from 'apps/dashboard/components/table/types';
import { CUSTOMER_CONDENSED_INVOICE } from 'codegen/graphql';
import { formatDateTime } from 'utils';
import { withCurrency } from 'utils/currency/format.cents-currency';

const invoice_table_columns: TableColumnConfig<CUSTOMER_CONDENSED_INVOICE>[] = [
  {
    dataProps: d => ({
      label: d.number || '-',
    }),
    header: 'NUMBER',
    property: 'number',
    width: '16rem',
  },
  {
    dataProps: d => ({
      label: d?.remarks?.toUpperCase() || '-',
      // subLabel: d?.billing_address?.toUpperCase(),
    }),
    header: 'DESCRIPTION',
    property: 'description',
  },
  {
    dataProps: d => ({
      label:
        withCurrency({ amount: d.total_amount, currency: d.currency }) || '-',
    }),
    header: 'TOTAL AMOUNT',
    property: 'total_amount',
    width: '16rem',
  },

  {
    dataProps: d => ({
      label: d.due_date || '-',
    }),
    header: 'DUE DATE',
    property: 'due_date',
    width: '16rem',
  },
  {
    dataProps: d => ({
      label: d.status.toUpperCase() || '-',
      subLabel:
        (d?.status === 'paid' &&
          formatDateTime({
            date: d.paid_on,
            format: 'date',
            locale: 'en-ZA',
          })) ||
        undefined,
      status:
        d?.status === 'paid'
          ? 'success'
          : d?.status === 'refunded'
          ? 'info'
          : d?.status === 'unpaid'
          ? 'warning'
          : d?.status === 'canceled'
          ? 'inactive'
          : 'error',
    }),
    header: 'STATUS',
    property: 'status',
    width: '16rem',
  },
];

export { invoice_table_columns };
