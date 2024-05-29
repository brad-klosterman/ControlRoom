import { CUSTOMERS_SEARCH_PARAMS, CUSTOMERS_TABLE_ROW } from 'codegen/graphql';
import { TableColumnConfig } from 'components/table/types';
import { TableDataItem } from 'components/ui/Listing/Data';
import { table_columns } from 'apps/customers/customer/account/invoices/config';
import { SearchBarField } from 'components/table/search/types';

const CUSTOMERS_TABLE_COLUMN_CONFIG: TableColumnConfig<CUSTOMERS_TABLE_ROW>[] =
  [
    {
      dataProps: customer => {
        const data_item: TableDataItem = {
          label: customer.customer_name.toUpperCase() || '-',
          status: customer?.account_status === 'active' ? 'success' : 'error',
        };

        if (customer.account_description) {
          data_item.subLabel =
            customer.account_description?.toUpperCase() || '-';
        }

        return data_item;
      },
      header: 'ACCOUNT NAME & DESCRIPTION',
      property: 'customer_name',
    },
    {
      dataProps: customer => {
        return customer.properties.map(property => ({
          label: property.address?.toUpperCase() || '-',
          subLabel: property.property_code?.toUpperCase() || '-',
        }));
      },
      header: 'PROPERTIES',
      property: 'properties',
    },
    {
      dataProps: customer => {
        return {
          label: customer.customer_email?.toUpperCase() || '-',
        };
      },
      header: 'EMAIL',
      property: 'customer_email',
    },
  ];

const CUSTOMERS_SEARCHBAR_CONFIG: SearchBarField<CUSTOMERS_SEARCH_PARAMS>[] = [
  {
    label: 'Customer Name',
    name: 'account_description_customer_name_keyholder_name',
    type: 'Input',
  },
  {
    label: 'Phone Number',
    name: 'account_customer_phone_keyholder_phone',
    type: 'Input',
  },
  {
    label: 'Email',
    name: 'account_customer_email',
    type: 'Input',
  },
  {
    label: 'Customer Code',
    name: 'account_code_property_code',
    type: 'Input',
  },

  {
    label: 'Property/Company Name',
    name: 'property_company_name',
    type: 'Input',
  },
  {
    label: 'Property Address',
    name: 'property_address',
    type: 'Input',
  },
  {
    label: 'Property ID',
    name: 'account_system_id_property_system_id',
    type: 'InputNumber',
  },
];

const INVOICES_TABLE_COLUMN_CONFIG = table_columns;

export {
  CUSTOMERS_TABLE_COLUMN_CONFIG,
  CUSTOMERS_SEARCHBAR_CONFIG,
  INVOICES_TABLE_COLUMN_CONFIG,
};
