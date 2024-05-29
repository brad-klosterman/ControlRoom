import { memo, ReactNode, useContext } from 'react';

import {
  CUSTOMERS_TABLE_ROW,
  FETCH_CUSTOMERS_DOCUMENT,
  FETCH_CUSTOMERS_QUERY,
  QUERY_FETCH_CUSTOMERS_ARGS,
} from 'codegen/graphql';
import { useListing } from 'hooks';

import { Context } from './types';

const CustomersTableProvider = (props: { children: ReactNode }) => {
  const table = useListing<
    FETCH_CUSTOMERS_QUERY,
    QUERY_FETCH_CUSTOMERS_ARGS,
    CUSTOMERS_TABLE_ROW
  >({
    document: FETCH_CUSTOMERS_DOCUMENT,
    response_map: {
      getItems: data => data?.fetch_customers?.customers || [],
      getTotal: data => data?.fetch_customers?.pagination.count || 0,
    },
    vars: { pagination: { page: 1, per_page: 50 } },
  });

  const query_args = table.search_variables as QUERY_FETCH_CUSTOMERS_ARGS;

  return (
    <Context.Provider
      value={{
        table: {
          loadPages: table.loadPages,
          notice: table.notice,
          onSearch: table.onSearch,
          search_params: query_args.search_params,
          updateRowItem: table.updateRowItem,
          renderedItems: table.renderedItems,
          total: table.total,
          mounted: table.mounted,
        },
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export const useCustomersTable = () => {
  return useContext(Context);
};

export default memo(CustomersTableProvider);
