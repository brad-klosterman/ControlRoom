import { CORE_CUSTOMER_INVOICE_FRAGMENT } from 'codegen/graphql';
import { TableColumnConfig } from 'components/table/types';
import { getLocaleDateTimeString } from 'src/utils/formatDateTime';
import { formatDateTime, toUpperSentence } from 'utils';
import { withCurrency } from 'utils/currency/format.cents-currency';

export const table_columns: TableColumnConfig<CORE_CUSTOMER_INVOICE_FRAGMENT>[] =
  [
    {
      dataProps: d => ({
        label: d.number || '-',
      }),
      header: 'NUMBER',
      property: 'number',
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
      width: '14rem',
    },
    {
      dataProps: d => ({
        label: d.issue_date || '-',
      }),
      header: 'ISSUE DATE',
      property: 'issue_date',
      width: '14rem',
    },
    {
      dataProps: d => ({
        label: d.due_date || '-',
      }),
      header: 'DUE DATE',
      property: 'due_date',
      width: '14rem',
    },
    {
      dataProps: d => ({
        label: getLocaleDateTimeString(d.last_email_sent) ?? '-',
      }),
      header: 'EMAIL SENT AT',
      property: 'last_email_sent',
      width: '14rem',
    },
    {
      dataProps: d => ({
        label: d.status ? toUpperSentence(d.status) : '-',
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
            : d?.status === 'partially_paid'
            ? 'warning'
            : d?.status === 'canceled'
            ? 'inactive'
            : 'error',
      }),
      header: 'STATUS',
      property: 'status',
      width: '14rem',
    },
  ];
