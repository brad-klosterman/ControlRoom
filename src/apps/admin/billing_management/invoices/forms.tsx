import { DateTime } from 'luxon';
import {
  type CollectionDayOption,
  type PaymentMethodOption,
} from 'apps/admin/company_settings/settings/types';
import {
  EMAIL_INVOICE_ATTACHMENT_TYPE,
  GENERATE_CUSTOMERS_INVOICES_MUTATION_VARIABLES,
  INVOICE_STATUS,
} from 'codegen/graphql';
import { type IOptionString } from 'src/components/ui/Form/Options';
import { formatDate } from 'utils/date.utils/formatDate';
import { type ModalFormConfig } from 'components/ui/Modal/types';

const getYearOptions = (starting_year: number): IOptionString[] => {
  const current_year = DateTime.now().year;
  const number_of_years = current_year - starting_year + 1;

  if (number_of_years <= 0) {
    return [];
  }

  const years_array = Array.from(
    { length: number_of_years },
    (_, i) => DateTime.now().minus({ years: i }).year,
  ).reverse();
  return years_array.map(year => ({
    label: year.toString(),
    value: year.toString(),
  }));
};

const _today = new Date();
const todays_date = formatDate(new Date());
const first_day_of_this_month = formatDate(
  new Date(_today.getFullYear(), _today.getMonth(), 1),
);

const generate_customers_invoices_form: ModalFormConfig<GENERATE_CUSTOMERS_INVOICES_MUTATION_VARIABLES> =
  {
    title: `GENERATE CUSTOMER INVOICES`,
    actions: [{ type: 'cancel' }, { type: 'confirm', text: 'GENERATE' }],
    form: [
      {
        label: 'Invoice Description',
        name: 'invoice_description',
        type: 'Input',
        required: true,
      },
      {
        label: 'Issue Date of Invoice',
        name: 'invoice_date',
        type: 'DatePicker',
        default_value: todays_date,
        required: true,
      },
      {
        label: 'Month Of',
        name: 'month_of',
        type: 'MonthPicker',
        default_value: todays_date,
        required: true,
      },
    ],
  };

interface DebitOrderFormValues {
  debit_order_format_type: string;
  collection_day: number;
  collection_month: string;
}

const getBulkPayForm = (params: {
  payment_method_options: PaymentMethodOption[];
  collection_days_options: CollectionDayOption[];
  type: 'bulk_process' | 'debit_run';
}): ModalFormConfig<DebitOrderFormValues> => {
  const findFirstBankPaymentOption = (
    payment_method_options: PaymentMethodOption[],
  ): PaymentMethodOption | undefined => {
    return payment_method_options.filter(payment_method_option =>
      payment_method_option.value.toLowerCase().includes('bank'),
    )[0];
  };

  const getDefaultDebitOrderFormat = (
    payment_method_options: PaymentMethodOption[],
  ): string | undefined => {
    return (
      findFirstBankPaymentOption(payment_method_options)?.value ??
      payment_method_options[0].value
    );
  };

  return {
    title:
      params.type === 'debit_run'
        ? 'GENERATE DEBIT ORDER RUN'
        : 'BULK PAY DEBIT ORDERS',
    actions: [
      { type: 'cancel' },
      {
        type: 'confirm',
        text: params.type === 'debit_run' ? 'GENERATE' : 'BULK PAY',
      },
    ],
    form: [
      {
        label: 'Debit Order Format',
        name: 'debit_order_format_type',
        type: 'Select',
        options: params.payment_method_options,
        default_value: getDefaultDebitOrderFormat(
          params.payment_method_options,
        ),
        required: true,
      },
      {
        label: 'Collection Day of Month',
        name: 'collection_day',
        type: 'Select',
        options: params.collection_days_options,
        default_value: params.collection_days_options[0]?.value,
        required: true,
      },
      {
        label: 'Collection Month',
        name: 'collection_month',
        type: 'MonthPicker',
        default_value: todays_date,
        required: true,
      },
    ],
  };
};

interface EmailCustomersInvoiceFormParams {
  month_of: string;
  attachment_type: EMAIL_INVOICE_ATTACHMENT_TYPE;
  status: INVOICE_STATUS | 'all';
  email_body_text: string;
  payment_method: string | 'all';
  amount_due: 'above_zero' | 'zero' | 'below_zero';
  send_email_to: 'all' | 'only_unsent';
}

const getEmailCustomersInvoiceForm = (params: {
  payment_method_options: PaymentMethodOption[];
}): ModalFormConfig<EmailCustomersInvoiceFormParams> => {
  return {
    title: `SEND OUT EMAILS`,
    actions: [{ type: 'cancel' }, { type: 'confirm', text: 'SEND EMAILS' }],
    form: [
      {
        label: 'Document Type',
        name: 'attachment_type',
        type: 'Select',
        default_value: 'invoice',
        options: [
          {
            label: 'Invoices',
            value: 'invoice',
          },
          {
            label: 'Statements',
            value: 'statement',
          },
        ],
        required: true,
      },
      {
        label: 'Month Of',
        name: 'month_of',
        type: 'MonthPicker',
        default_value: first_day_of_this_month,
        required: true,
      },
      {
        label: 'Invoice Status',
        name: 'status',
        type: 'Select',
        default_value: 'unpaid',
        options: [
          {
            label: 'Paid',
            value: 'paid',
          },
          {
            label: 'Unpaid',
            value: 'unpaid',
          },
          {
            label: 'Partially Paid',
            value: 'partially_paid',
          },
          {
            label: 'Overdue',
            value: 'overdue',
          },
          {
            label: 'Canceled',
            value: 'canceled',
          },
          {
            label: 'Refunded',
            value: 'refunded',
          },
          {
            label: 'All Statuses',
            value: 'all',
          },
        ],
        required: true,
      },
      {
        label: 'Payment Method',
        name: 'payment_method',
        type: 'Select',
        default_value: 'all', // unpaid partially_paid
        options: [
          ...params.payment_method_options,
          { label: 'ALL PAYMENT METHODS', value: 'all' },
        ],
        required: true,
      },
      {
        label: 'Amount Due',
        name: 'amount_due',
        type: 'Select',
        default_value: 'all', // unpaid partially_paid
        options: [
          {
            label: 'All',
            value: 'all',
          },
          {
            label: '> 0',
            value: 'above_zero',
          },
          {
            label: '= 0',
            value: 'zero',
          },
          {
            label: '< 0',
            value: 'below_zero',
          },
        ],
        required: true,
      },
      {
        label: 'Email Invoices To',
        name: 'send_email_to',
        type: 'Select',
        default_value: 'only_unsent',
        options: [
          {
            label: 'Only customers who were not sent an email this month',
            value: 'only_unsent',
          },
          {
            label:
              'All customers irrespective of whether they were sent an email this month',
            value: 'all',
          },
        ],
      },
      {
        label: 'Email Body Text (Optional)',
        name: 'email_body_text',
        type: 'TextArea',
        default_value: '',
      },
    ],
  };
};

const generate_monthly_report_form: ModalFormConfig<{
  year_month: string;
}> = {
  title: `GENERATE MONTHLY BILLING REPORT`,
  actions: [{ type: 'cancel' }, { type: 'confirm', text: 'GENERATE' }],
  form: [
    {
      label: 'Month Of Report',
      name: 'year_month',
      type: 'MonthPicker',
      default_value: todays_date,
      required: true,
    },
  ],
};

const revenue_report_starting_year = 2023;
const revenue_report_year_options = getYearOptions(
  revenue_report_starting_year,
);
const revenue_report_default_year = DateTime.now().year.toString();

const generate_revenue_report_form: ModalFormConfig<{
  year: string;
}> = {
  title: `GENERATE REVENUE REPORT`,
  actions: [{ type: 'cancel' }, { type: 'confirm', text: 'GENERATE' }],
  form: [
    {
      label: 'Year of Report',
      name: 'year',
      type: 'Select',
      default_value: revenue_report_default_year,
      options: revenue_report_year_options,
      required: true,
    },
  ],
};

export {
  type DebitOrderFormValues,
  getBulkPayForm,
  type EmailCustomersInvoiceFormParams,
  getEmailCustomersInvoiceForm,
  generate_customers_invoices_form,
  generate_monthly_report_form,
  generate_revenue_report_form,
};
