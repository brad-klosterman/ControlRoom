import {
  FETCH_INVOICES_PARAMS,
  INVOICE_STATUS,
  SSP_CUSTOMER_INVOICE_FRAGMENT,
} from 'codegen/graphql';
import { SearchBarField } from 'components/table/search/types';
import { TableColumnConfig } from 'components/table/types';
import { getLocaleDateTimeString } from 'src/utils/formatDateTime';
import { formatDateTime, toUpperSentence } from 'utils';
import { withCurrency } from 'utils/currency/format.cents-currency';
import { PaymentMethodOption } from '../../company_settings/settings/types';

export const table_columns: TableColumnConfig<SSP_CUSTOMER_INVOICE_FRAGMENT>[] =
  [
    {
      dataProps: d => ({
        label: d?.account_description?.toUpperCase() || '-',
        subLabel: d?.account_code?.toUpperCase(),
      }),
      header: 'CUSTOMER',
      property: 'account_description',
    },
    {
      dataProps: d => ({
        label: d.number || '-',
      }),
      header: 'NUMBER',
      property: 'number',
    },
    {
      dataProps: d => ({
        label: d.reference_number || '-',
      }),
      header: 'REF NUMBER',
      property: 'reference_number',
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

const INVOICE_STATUS_OPTIONS: {
  label: string;
  value: INVOICE_STATUS | '';
}[] = [
  {
    label: '-',
    value: '',
  },
  {
    label: 'PAID',
    value: 'paid',
  },
  {
    label: 'PARTIALLY PAID',
    value: 'partially_paid',
  },
  {
    label: 'UNPAID',
    value: 'unpaid',
  },
  {
    label: 'OVERDUE',
    value: 'overdue',
  },
  {
    label: 'REFUNDED',
    value: 'refunded',
  },
  {
    label: 'CANCELLED',
    value: 'canceled',
  },
];
// PaymentMethodOption
export const createInvoiceSearchParamsConfig = (
  payment_method_options: PaymentMethodOption[],
): SearchBarField<FETCH_INVOICES_PARAMS>[] => {
  return [
    {
      name: 'status',
      type: 'Select',
      label: 'Invoice Status',
      options: INVOICE_STATUS_OPTIONS,
    },
    {
      name: 'number',
      type: 'Input',
      label: 'Number',
    },
    {
      name: 'reference_number',
      type: 'Input',
      label: 'Reference Number',
    },
    {
      name: 'payment_method',
      type: 'Select',
      label: 'Payment Method',
      options: payment_method_options,
    },
    {
      name: 'email_sent',
      type: 'Select',
      label: 'Email Sent?',
      options: [
        {
          label: 'Yes',
          value: true,
        },
        {
          label: 'No',
          value: false,
        },
      ],
    },
    {
      name: 'month_of',
      type: 'MonthPicker',
      label: 'Month Of',
    },
    {
      name: 'date_range_start',
      type: 'DatePicker',
      label: 'Due Date From',
    },
    {
      name: 'date_range_end',
      type: 'DatePicker',
      label: 'Due Date To',
    },
  ];
};
