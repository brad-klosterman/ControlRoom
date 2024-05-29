import { useMemo } from 'react';
import { RouteObject, useRoutes, Navigate } from 'react-router-dom';

import RouteHOC from 'apps/dashboard/route';
import { useAuthContext } from 'src/app.state/auth/provider';
import { useCanViewAccounting } from 'src/app.state/permissions/hooks/view-accounting.permission';
import { useCanViewAdminAccounting } from 'src/app.state/permissions/hooks/view-admin-accounting.permission';
import { useCanViewAdmin } from 'src/app.state/permissions/hooks/view-admin.permission';
import { useCanViewAlarmHistory } from 'src/app.state/permissions/hooks/view-alarms-history.permission';
import { useCanViewAlarms } from 'src/app.state/permissions/hooks/view-alarms.permission';
import { useCanViewCustomers } from 'src/app.state/permissions/hooks/view-customers.permission';
import { useCanViewStatistics } from 'src/app.state/permissions/hooks/view-statistics.permission';

import { buildRoutesConfig } from './buildRoutesConfig';
import { ROUTE } from './route.plan';

/***
 * MAIN APPLICATION ROUTER
 * recursively builds application routes
 *
 */
const buildRoutes = <T extends ReadonlyArray<ROUTE>>(d: T): RouteObject[] =>
  d.reduce<RouteObject[]>((acc, route) => {
    if (route.hidden) return acc;

    let children: RouteObject[] | undefined = undefined;

    if ('routes' in route) {
      children = buildRoutes(route.routes);
      const with_redirect = !('redirect' in route && route.redirect === false);

      if (with_redirect) {
        children.push({
          index: true,
          element: <Navigate replace={true} to={route?.routes[0].path} />,
        });
      }
    }

    return [
      ...acc,
      {
        children,
        element: <RouteHOC {...route} />,
        path: route.path,
      },
    ];
  }, [] as RouteObject[]);

const MainRouter = () => {
  const {
    state: { auth_status, ssp_settings },
  } = useAuthContext();

  const view_admin_route = useCanViewAdmin();
  const billing_enabled = Boolean(ssp_settings?.billing_enabled);
  const view_admin_billing_route = useCanViewAdminAccounting();
  const view_customer_billing_route = useCanViewAccounting();
  const view_customers_route = useCanViewCustomers();
  const view_alarms_route = useCanViewAlarms();
  const view_analytics_route = useCanViewStatistics();
  const view_alarm_history_route = useCanViewAlarmHistory();

  const routes = useMemo(() => {
    return buildRoutes(
      buildRoutesConfig({
        route_permissions: {
          dashboard: auth_status === 'AUTHENTICATED',
          admin: view_admin_route,
          admin_billing: billing_enabled && view_admin_billing_route,
          customer_billing: billing_enabled && view_customer_billing_route,
          customers: view_customers_route,
          alarms: view_alarms_route,
          analytics: view_analytics_route,
          alarm_history: view_alarm_history_route,
        },
      }),
    );
  }, [auth_status]);

  const router = useRoutes(routes);

  if (auth_status === 'LOADING') return;

  return <>{router}</>;
};

export default MainRouter;
