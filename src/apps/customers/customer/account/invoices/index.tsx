import ExpandedContent from 'apps/admin/billing_management/invoices/expanded';
import { createInvoiceSearchParamsConfig } from 'apps/admin/billing_management/invoices/table.config';
import { useSSPSettingsContext } from 'apps/admin/company_settings/settings/provider';
import { useCustomer } from 'apps/customers/customer/provider';
import { getFragment } from 'codegen';
import Table from 'components/table';
import { useListing } from 'hooks';
import {
  FETCH_CUSTOMER_INVOICES_DOCUMENT,
  FETCH_CUSTOMER_INVOICES_QUERY,
  QUERY_FETCH_CUSTOMER_INVOICES_ARGS,
  CORE_CUSTOMER_INVOICE_FRAGMENT,
  CORE_CUSTOMER_INVOICE_FRAGMENT_DOC,
} from 'src/apollo/codegen/graphql';
import { getEndOfDay, getStartOfDay } from 'utils/formatDateTime';

import { table_columns } from './config';

const CustomerInvoicesRoute = () => {
  const { payment_method_options, ssp_settings } = useSSPSettingsContext();

  const { customer } = useCustomer();
  const customer_id = customer?.id;

  const table = useListing<
    FETCH_CUSTOMER_INVOICES_QUERY,
    QUERY_FETCH_CUSTOMER_INVOICES_ARGS,
    CORE_CUSTOMER_INVOICE_FRAGMENT
  >({
    document: FETCH_CUSTOMER_INVOICES_DOCUMENT,
    response_map: {
      getItems: d => {
        const items =
          getFragment(
            CORE_CUSTOMER_INVOICE_FRAGMENT_DOC,
            d?.fetch_customer_invoices?.invoices,
          ) || [];
        return [...items]; // todo fix fragment read only
      },
      getTotal: d => d?.fetch_customer_invoices?.pagination.count || 0,
    },
    vars: {
      customer_id,
      pagination: { page: 1, per_page: 50 },
    },
  });

  const onInvoiceUpdated = (
    updated_invoice: CORE_CUSTOMER_INVOICE_FRAGMENT,
  ) => {
    table.updateRowItem(updated_invoice);
  };

  if (!customer_id) return null;

  return (
    <Table
      columns_config={table_columns}
      data={table.renderedItems}
      expandable
      loadPages={table.loadPages}
      renderExpanded={row =>
        'id' in row ? (
          <ExpandedContent
            customer_id={customer_id}
            onInvoiceStatusUpdated={status =>
              onInvoiceUpdated({ ...row, status })
            }
            payment_method_options={payment_method_options}
            row={row}
            type="customer"
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

export default CustomerInvoicesRoute;
