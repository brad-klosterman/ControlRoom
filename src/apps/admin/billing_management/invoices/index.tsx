import { useMutation } from '@apollo/client';
import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import ExpandedContent from 'apps/admin/billing_management/invoices/expanded';
import {
  EmailCustomersInvoiceFormParams,
  getEmailCustomersInvoiceForm,
  generate_customers_invoices_form,
  generate_monthly_report_form,
  getBulkPayForm,
  generate_revenue_report_form,
  DebitOrderFormValues,
} from 'apps/admin/billing_management/invoices/forms';
import {
  createInvoiceSearchParamsConfig,
  table_columns,
} from 'apps/admin/billing_management/invoices/table.config';
import { useSSPSettingsContext } from 'apps/admin/company_settings/settings/provider';
import { getFragment } from 'codegen';
import {
  DEBIT_ORDER_BULK_PROCESS_DOCUMENT,
  EMAIL_CUSTOMERS_INVOICES_ADVANCED_DOCUMENT,
  EMAIL_CUSTOMERS_INVOICES_ADVANCED_PARAMS,
  FETCH_SSP_INVOICES_DOCUMENT,
  FETCH_SSP_INVOICES_QUERY,
  GENERATE_CUSTOMERS_INVOICES_DOCUMENT,
  GENERATE_REVENUE_REPORT_DOCUMENT,
  GENERATE_SSP_BILLING_STATEMENTS_DOCUMENT,
  GENERATE_SSP_MONTHLY_BILLING_REPORT_DOCUMENT,
  QUERY_FETCH_SSP_INVOICES_ARGS,
  SSP_CUSTOMER_INVOICE_FRAGMENT,
  SSP_CUSTOMER_INVOICE_FRAGMENT_DOC,
} from 'codegen/graphql';
import Table from 'components/table';
import Modal from 'components/ui/Modal/provider';
import { useListing } from 'hooks';
import useResponseStatus from 'hooks/use.response-status';
import { getErrorMessage } from 'src/apollo/utils/error_handeling';
import {
  extractMonth,
  extractYearMonth,
  formatYearMonthString,
} from 'utils/date.utils/formatDate';
import { downloadLink } from 'utils/download_documents/downloadLink';
import { getEndOfDay, getStartOfDay } from 'utils/formatDateTime';

const SSPCustomersInvoicesRoute = () => {
  const navigate = useNavigate();

  const { collection_days_options, payment_method_options, ssp_settings } =
    useSSPSettingsContext();

  const modal = useContext(Modal.Context);

  const table = useListing<
    FETCH_SSP_INVOICES_QUERY,
    QUERY_FETCH_SSP_INVOICES_ARGS,
    SSP_CUSTOMER_INVOICE_FRAGMENT
  >({
    document: FETCH_SSP_INVOICES_DOCUMENT,
    response_map: {
      getItems: d => {
        const items =
          getFragment(
            SSP_CUSTOMER_INVOICE_FRAGMENT_DOC,
            d?.fetch_ssp_invoices?.invoices,
          ) || [];
        return [...items]; // todo proper fragment cache
      },

      getTotal: d => d?.fetch_ssp_invoices?.pagination.count || 0,
    },
    vars: { pagination: { page: 1, per_page: 50 } },
  });

  const onInvoiceUpdated = (updated_invoice: SSP_CUSTOMER_INVOICE_FRAGMENT) => {
    table.updateRowItem(updated_invoice);
  };

  const [generate_customers_invoices] = useMutation(
    GENERATE_CUSTOMERS_INVOICES_DOCUMENT,
  );
  const [debit_order_bulk_process] = useMutation(
    DEBIT_ORDER_BULK_PROCESS_DOCUMENT,
  );
  const [email_customers_invoices_advanced] = useMutation(
    EMAIL_CUSTOMERS_INVOICES_ADVANCED_DOCUMENT,
  );
  const [generate_monthly_report] = useMutation(
    GENERATE_SSP_MONTHLY_BILLING_REPORT_DOCUMENT,
  );
  const [generate_statements] = useMutation(
    GENERATE_SSP_BILLING_STATEMENTS_DOCUMENT,
  );
  const [generate_revenue_report] = useMutation(
    GENERATE_REVENUE_REPORT_DOCUMENT,
  );

  const toast = useResponseStatus({ id: 'invoices' });

  const onResponse = (msg: string, success: boolean | undefined) => {
    if (success) {
      modal.close();
      toast.successAlert(msg);
    } else {
      toast.errorAlert(msg);
    }
  };

  const openGenerateInvoices = useCallback(() => {
    modal.open({
      ...generate_customers_invoices_form,
      async onConfirm(fields: any) {
        try {
          const { data } = await generate_customers_invoices({
            variables: {
              ...fields,
              month_of: formatYearMonthString(fields.month_of),
            },
          });

          onResponse(
            data?.generate_customers_invoices || 'GENERATED INVOICES',
            true,
          );
        } catch (error: any) {
          onResponse(
            getErrorMessage(error) || 'COULD NOT GENERATE INVOICES',
            false,
          );
        }
      },
    });
  }, []);

  const openGenerateRevenueReport = useCallback(() => {
    modal.open({
      ...generate_revenue_report_form,
      async onConfirm(fields: any) {
        try {
          const { data } = await generate_revenue_report({
            variables: {
              ...fields,
            },
          });

          onResponse('REVENUE REPORT DOWNLOADING', true);
          downloadLink(data?.generate_revenue_report.report.download_link);
        } catch (error: any) {
          onResponse(
            getErrorMessage(error) || 'COULD NOT GENERATE REVENUE REPORT',
            false,
          );
        }
      },
    });
  }, []);

  const openDebitOrderBulkPay = useCallback(() => {
    modal.open({
      ...getBulkPayForm({
        type: 'bulk_process',
        payment_method_options,
        collection_days_options,
      }),
      async onConfirm(fields: DebitOrderFormValues) {
        try {
          const { data } = await debit_order_bulk_process({
            variables: {
              debit_order_format_type: fields.debit_order_format_type,
              collection_day: fields.collection_day,
              collection_month: extractMonth(fields.collection_month),
            },
          });

          onResponse(
            data?.debit_order_bulk_process.message || 'PROCESSING',
            true,
          );
        } catch (error: any) {
          onResponse(getErrorMessage(error) || 'COULD NOT PROCESS', false);
        }
      },
    });
  }, [collection_days_options]);

  const openEmailCustomerInvoices = useCallback(() => {
    modal.open<EmailCustomersInvoiceFormParams>({
      ...getEmailCustomersInvoiceForm({ payment_method_options }),
      async onConfirm(fields) {
        const _getPaymentMethod = (): string | undefined => {
          if (fields.payment_method === 'all') {
            return undefined;
          }

          return fields.payment_method;
        };

        const _getBalanceParams = (): Pick<
          EMAIL_CUSTOMERS_INVOICES_ADVANCED_PARAMS,
          'amount_due_lt' | 'amount_due_gt' | 'amount_due_eq'
        > => {
          switch (fields.amount_due) {
            case 'zero':
              return { amount_due_eq: 0 };
            case 'above_zero':
              return { amount_due_gt: 0 };
            case 'below_zero':
              return { amount_due_lt: 0 };
            default:
              return {};
          }
        };

        const invoice_status = fields.status === 'all' ? null : fields.status;

        try {
          const { data } = await email_customers_invoices_advanced({
            variables: {
              params: {
                ..._getBalanceParams(),
                month_of: formatYearMonthString(fields.month_of),
                attachment_type: fields.attachment_type,
                status: invoice_status,
                email_body_text: fields.email_body_text,
                payment_method: _getPaymentMethod(),
                email_sent:
                  fields.send_email_to === 'only_unsent' ? false : undefined,
              },
            },
          });

          onResponse(
            data?.email_customers_invoices_advanced || 'SENDING',
            true,
          );
        } catch (error: any) {
          onResponse(getErrorMessage(error) || 'FAILED TO SEND', false);
        }
      },
    });
  }, []);

  const openDownloadMonthlyReport = useCallback(() => {
    modal.open({
      ...generate_monthly_report_form,
      async onConfirm(fields: any) {
        const { month: billing_month, year: billing_year } = extractYearMonth(
          fields.year_month,
        );

        try {
          const { data } = await generate_monthly_report({
            variables: { billing_month, billing_year },
          });

          onResponse(
            'GENERATED REPORT',
            downloadLink(data?.generate_ssp_monthly_billing_report),
          );
        } catch (error: any) {
          onResponse(
            getErrorMessage(error) || 'COULD NOT GENERATE REPORT',
            false,
          );
        }
      },
    });
  }, []);

  const onDownloadStatements = useCallback(async () => {
    try {
      const { data } = await generate_statements();

      onResponse(
        'DOWNLOADING REPORT',
        downloadLink(data?.generate_ssp_billing_statements),
      );
    } catch (error: any) {
      onResponse(getErrorMessage(error) || 'DOWNLOADING', false);
    }
  }, []);

  const onViewCustomer = useCallback((customer_id: number) => {
    navigate(
      `/control_room/customers/customer/${customer_id}/customer_account/subscriptions`,
      {
        state: { back_nav: `/control_room/admin/billing_management/invoices` },
      },
    );
  }, []);

  return (
    <Table
      columns_config={table_columns}
      data={table.renderedItems}
      expandable
      loadPages={table.loadPages}
      menu={[
        {
          icon: 'FileCurrency',
          label: 'GENERATE INVOICES',
          onClick: openGenerateInvoices,
        },
        {
          icon: 'CheckboxMultiple',
          label: 'DEBIT ORDER BULK PAY',
          onClick: openDebitOrderBulkPay,
        },
        {
          icon: 'MailSend',
          label: 'SEND OUT EMAILS',
          onClick: openEmailCustomerInvoices,
        },
        {
          icon: 'FileDownload',
          label: 'DOWNLOAD DEBTORS STATEMENTS REPORT',
          onClick: onDownloadStatements,
        },
        {
          icon: 'FileHistory',
          label: 'DOWNLOAD MONTHLY REPORT',
          onClick: openDownloadMonthlyReport,
        },
        {
          icon: 'FileCurrency',
          label: 'GENERATE REVENUE REPORT',
          onClick: openGenerateRevenueReport,
        },
      ]}
      renderExpanded={row =>
        'id' in row && row.billing_account_id ? (
          <ExpandedContent
            customer_id={row.billing_account_id}
            onInvoiceStatusUpdated={status =>
              onInvoiceUpdated({ ...row, status })
            }
            onViewCustomer={onViewCustomer}
            payment_method_options={payment_method_options}
            row={row}
            type="ssp"
          />
        ) : null
      }
      search={{
        params: createInvoiceSearchParamsConfig(payment_method_options),
        onSearch(search_params) {
          const date_from =
            search_params?.date_range_start &&
            getStartOfDay(
              search_params?.date_range_start,
              ssp_settings?.time_zone,
            );

          const date_to =
            search_params?.date_range_end &&
            getEndOfDay(search_params?.date_range_end, ssp_settings?.time_zone);

          table.onSearch(
            search_params && {
              search_params: {
                ...search_params,
                date_range_start: date_from && date_from.toUTC().toISO(),
                date_range_end: date_to && date_to.toUTC().toISO(),
              },
            },
          );
        },
      }}
      total={table.total}
    />
  );
};

export default SSPCustomersInvoicesRoute;
