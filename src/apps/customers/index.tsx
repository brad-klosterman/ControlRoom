import { Outlet, useNavigate } from 'react-router-dom';

import CustomersTableProvider from 'apps/customers/provider';
import { CUSTOMERS_TABLE_ROW } from 'codegen/graphql';

import CustomersTable from './table';

const CustomersRoute = () => {
  const navigate = useNavigate();

  const table_visible = !location.pathname.split('/').includes('customer');

  const onSelectCustomer = (customer: CUSTOMERS_TABLE_ROW) => {
    navigate(`customer/${customer.id}`, {
      preventScrollReset: true,
      state: { ...customer },
    });
  };

  return (
    <>
      {table_visible && (
        <CustomersTable
          onSelectCustomer={onSelectCustomer}
          variant="customers_management"
        />
      )}
      <Outlet />
    </>
  );
};

export default {
  Provider: CustomersTableProvider,
  Route: CustomersRoute,
};
