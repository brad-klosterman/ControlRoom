import { ReactNode } from 'react';
import { useParams } from 'react-router-dom';

import CustomerContext from './provider';
import CustomerRouter from './sidenav/nav.router';
import { CustomerRouteParams } from './types';

const Providers = (props: { children: ReactNode }) => {
  const route_params = useParams<CustomerRouteParams>();

  if (!route_params.customer_id) return null;

  return (
    <CustomerContext.Provider
      id={
        route_params.customer_id === 'new_customer'
          ? 'new_customer'
          : parseInt(route_params.customer_id)
      }
    >
      {props.children}
    </CustomerContext.Provider>
  );
};

export default {
  Providers,
  Router: CustomerRouter,
  useContext: CustomerContext.useContext,
};
