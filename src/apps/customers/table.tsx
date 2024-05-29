import { memo, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Areas from 'apps/admin/company_settings/areas/provider';
import Decoders from 'apps/admin/company_settings/decoders/provider';
import { useUsersContext } from 'apps/admin/user_management/users/provider';
import { useCustomersTable } from 'apps/customers/provider';
import { RouteWrap } from 'apps/dashboard/style';
import { CUSTOMERS_SEARCH_PARAMS, CUSTOMERS_TABLE_ROW } from 'codegen/graphql';
import Table from 'components/table';
import { SearchBarField } from 'components/table/search/types';

import { getCustomersSearchParamsConfig, table_columns } from './config';

const CustomersTable = (props: {
  onSelectCustomer(customer: CUSTOMERS_TABLE_ROW): void;
  variant: 'create_alarm' | 'customers_management';
}) => {
  const navigate = useNavigate();
  const { table } = useCustomersTable();
  const { account_manager_options } = useUsersContext();

  const { decoders_name_select } = Decoders.useContext();
  const { areas_select } = Areas.useContext();

  const onSearch = (search_params?: CUSTOMERS_SEARCH_PARAMS | undefined) => {
    table.onSearch({ search_params });
  };

  const setCreatingCustomer = () => {
    navigate(`customer/new_customer`, {
      preventScrollReset: true,
      state: { first_name: 'CREATING NEW CUSTOMER', status: 'PENDING' },
    });
  };

  const search_params_config = useMemo<
    SearchBarField<CUSTOMERS_SEARCH_PARAMS>[]
  >(() => {
    return getCustomersSearchParamsConfig({
      account_manager_options,
      areas_select,
      decoder_selects: decoders_name_select,
    });
  }, [account_manager_options, areas_select, decoders_name_select]);

  return (
    <RouteWrap direction="column" gap="regular">
      <Table
        columns_config={table_columns}
        data={table.renderedItems}
        loadPages={table.loadPages}
        menu={
          props.variant === 'customers_management'
            ? [
                {
                  icon: 'Pencil',
                  label: 'CREATE A NEW CUSTOMER',
                  onClick: setCreatingCustomer,
                  visible: true,
                },
              ]
            : undefined
        }
        notice={table.notice}
        onSelectRow={row => {
          if ('id' in row) props.onSelectCustomer(row);
        }}
        search={{
          title:
            props.variant === 'customers_management'
              ? table.mounted && table.total
                ? `CUSTOMERS (${table.total})`
                : 'CUSTOMERS'
              : 'CREATE ALARM',
          params: search_params_config,
          stored_params: table.search_params,
          number_of_columns: 7,
          onSearch,
          use_enter_key: true,
        }}
        total={table.total}
      />
    </RouteWrap>
  );
};

export default memo(CustomersTable);
