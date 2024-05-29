import { useCustomer } from 'apps/customers/customer/provider';
import CustomerStatementsPage from './customer-statements-page';

const CustomerStatementsRoute = () => {
  const { customer } = useCustomer();

  if (!customer) {
    return null;
  }

  return <CustomerStatementsPage customer={customer} />;
};

export default CustomerStatementsRoute;
