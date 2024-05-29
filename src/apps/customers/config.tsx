import {
  CUSTOMERS_SEARCH_PARAMS,
  CUSTOMERS_TABLE_ROW,
  PROPERTY_TYPE,
} from 'codegen/graphql';
import { SearchBarField } from 'components/table/search/types';
import { TableColumnConfig } from 'components/table/types';
import { IOption, IOptionNumber } from 'components/ui/Form/Options';
import { TableDataItem } from 'components/ui/Listing/Data';

export const table_columns: TableColumnConfig<CUSTOMERS_TABLE_ROW>[] = [
  {
    dataProps: customer => ({
      label: customer.seon_account_code?.toUpperCase() || '-',
      subLabel: customer.account_code?.toUpperCase(),
    }),
    header: 'CUSTOMER CODE',
    property: 'account_code',
    width: '14rem',
  },
  {
    dataProps: customer => {
      const data_item: TableDataItem = {
        label: customer.customer_name.toUpperCase() || '-',
        status: customer?.account_status === 'active' ? 'success' : 'error',
      };

      if (customer.account_description) {
        data_item.subLabel = customer.account_description?.toUpperCase() || '-';
      }

      return data_item;
    },
    header: 'ACCOUNT NAME & DESCRIPTION',
    property: 'customer_name',
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
];

export const ACCOUNT_STATUS_OPTIONS = [
  { label: 'ACTIVE', value: 'active' },
  { label: 'INACTIVE', value: 'inactive' },
];

export const PROPERTY_STATUS_OPTIONS = [
  { label: 'ACTIVE', value: 'active' },
  { label: 'INACTIVE', value: 'inactive' },
  { label: 'SUSPENDED', value: 'suspended' },
];

export const PROPERTY_TYPE_OPTIONS: {
  label: string;
  value: PROPERTY_TYPE;
}[] = [
  { label: 'RESIDENTIAL', value: 'RESIDENTIAL' },
  { label: 'BUSINESS', value: 'BUSINESS' },
];

export const getCustomersSearchParamsConfig = (params: {
  account_manager_options: IOptionNumber[];
  areas_select: IOptionNumber[];
  decoder_selects: IOption[];
}): SearchBarField<CUSTOMERS_SEARCH_PARAMS>[] => [
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
    label: 'Account Manager',
    name: 'account_manager_id',
    type: 'Select',
    options: params.account_manager_options,
  },
  {
    label: 'Account Status',
    name: 'account_status',
    type: 'Select',
    options: ACCOUNT_STATUS_OPTIONS,
  },
  // TableSearchButtons
  /** Row 2 */
  {
    label: 'Property Address',
    name: 'property_address',
    type: 'Input',
  },
  {
    label: 'Property Type',
    name: 'property_type',
    type: 'Select',
    options: PROPERTY_TYPE_OPTIONS,
  },
  {
    label: 'Property Area',
    name: 'property_area_ids',
    type: 'MultiSelect',
    options: params.areas_select,
  },
  {
    label: 'Property Transmitter',
    name: 'property_transmitter_id',
    type: 'TransmitterSelector',
  },
  {
    label: 'Decoder',
    name: 'property_decoder_name',
    type: 'Select',
    options: params.decoder_selects,
  },
  {
    label: 'Property Status',
    name: 'property_status',
    type: 'Select',
    options: PROPERTY_STATUS_OPTIONS,
  },
  {
    label: 'Property ID',
    name: 'account_system_id_property_system_id',
    type: 'InputNumber',
  },
];
