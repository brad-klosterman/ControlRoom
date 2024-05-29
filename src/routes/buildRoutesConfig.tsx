import { Navigate } from 'react-router-dom';
import AdminDiscountsRoute from 'apps/admin/billing_management/discounts';
import SSPCustomersInvoicesRoute from 'apps/admin/billing_management/invoices';
import AdminBillingSettingsRoute from 'apps/admin/billing_management/settings/settings';
import { RolesRoute } from 'apps/admin/user_management/roles';
import CreateAlarmRoute from 'apps/alarms/create_alarm';
import {
  Admin,
  AdminProductsRoute,
  AdminSettingsRoute,
  UsersRoute,
  AlarmTypesRoute,
  Alarms,
  AlarmHistoryRoute,
  AreasRoute,
  AreasStatusRoute,
  ContactDetailsRoute,
  Customer,
  Customers,
  DecodersRoute,
  CustomerInvoicesRoute,
  PropertyAlarmHistoryRoute,
  PropertyDetailsRoute,
  PropertyKeyholdersRoute,
  PropertyProvider,
  PropertyScheduleRoute,
  PropertyStatisticsRoute,
  PropertyTransmittersRoute,
  CompanyReportsRoute,
  RespondersRoute,
  CustomerStatementsRoute,
  SubscriptionsRoute,
  TechniciansRoute,
  TrackingMap,
  TransmittersRoute,
} from 'apps/exports';
import { Flex } from 'components';
import CustomerSystemEventsAuditRoute from 'src/apps/customers/customer/account/system_events_audit';
import { OfflineLinksRoute } from 'src/apps/offline/OfflineLinksRoute';
import UnknownRoute from 'src/routes/404/unknown_route';
import { DebitOrderRunsRoute } from 'src/apps/admin/billing_management/debit-order-runs';
import SSPSystemEventsAuditRoute from 'apps/admin/reports_audits/system_events_audit';

import { ROUTE, RoutePermissions } from './route.plan';
import AnalyticsApp from '../apps/analytics/analytics.app';
import { LoginRoute, LogoutRoute } from '../apps/dashboard/components';
import DashboardProvider from '../apps/dashboard/provider';

const Component = ({ path }: { path: string }) => (
  <Flex style={{ flex: 1 }}>{path}</Flex>
);

const buildRoutesConfig = ({
  route_permissions,
}: {
  route_permissions: RoutePermissions;
}): ROUTE[] => {
  return [
    { path: '/', component: () => <Navigate replace={true} to="login" /> },
    { path: 'login', component: LoginRoute },
    { path: 'logout', component: LogoutRoute },
    { path: 'offline', component: OfflineLinksRoute },
    {
      path: 'control_room',
      hidden: !route_permissions.dashboard,
      provider: DashboardProvider,
      nav: 'dashboard',
      routes: [
        {
          path: 'admin',
          icon: 'Admin',
          hidden: !route_permissions.admin,
          nav: 'sidenav',
          router: Admin.Router,
          routes: [
            {
              path: 'company_settings',
              nav: 'tabs',
              routes: [
                { path: 'settings', component: AdminSettingsRoute },
                { path: 'transmitters', component: TransmittersRoute },
                { path: 'decoders', component: DecodersRoute },
                { path: 'areas', component: AreasRoute },
              ],
            },
            {
              path: 'alarm_management',
              nav: 'tabs',
              routes: [
                {
                  path: 'alarm_types',
                  component: AlarmTypesRoute,
                },
                {
                  path: 'alarm_groups',
                  disabled: true,
                  component: Component,
                },
                {
                  path: 'alarm_codes',
                  disabled: true,
                  component: Component,
                },
                {
                  path: 'set_names',
                  disabled: true,
                  component: Component,
                },
                {
                  path: 'property_types',
                  disabled: true,
                  component: Component,
                },
                {
                  path: 'notification_groups',
                  disabled: true,
                  component: Component,
                },
              ],
            },
            {
              path: 'users_management',
              nav: 'tabs',
              routes: [
                { path: 'responders', component: RespondersRoute },
                { path: 'technicians', component: TechniciansRoute },
                { path: 'users', component: UsersRoute },
                { path: 'user_roles', component: RolesRoute },
              ],
            },
            {
              path: 'billing_management',
              hidden: !route_permissions.admin_billing,
              nav: 'tabs',
              routes: [
                { path: 'invoices', component: SSPCustomersInvoicesRoute },
                { path: 'products', component: AdminProductsRoute },
                { path: 'discounts', component: AdminDiscountsRoute },
                { path: 'debit_order_runs', component: DebitOrderRunsRoute },
                { path: 'settings', component: AdminBillingSettingsRoute },
              ],
            },
            {
              path: 'reports_and_audits',
              nav: 'tabs',
              routes: [
                { path: 'company_reports', component: CompanyReportsRoute },
                { path: 'audit_history', component: SSPSystemEventsAuditRoute },
              ],
            },
          ],
        },
        {
          path: 'alarms',
          icon: 'Alarm',
          hidden: !route_permissions.alarms,
          component: Alarms.Router,
          routes: [
            { path: 'emergency', component: Alarms.EMERGENCY },
            { path: 'enroute', component: Alarms.ENROUTE },
            { path: 'non_emergency', component: Alarms.NON_EMERGENCY },
          ],
        },
        {
          path: 'create_alarm',
          component: CreateAlarmRoute,
        },
        {
          path: 'tracking',
          icon: 'Navigation',
          hidden: !route_permissions.alarms,
          provider: TrackingMap.Provider,
          component: TrackingMap.Route,
        },
        {
          path: 'customers',
          icon: 'Customers',
          redirect: false,
          hidden: !route_permissions.customers,
          component: Customers.Route,
          routes: [
            {
              path: 'customer/:customer_id',
              provider: Customer.Providers,
              router: Customer.Router,
              nav: 'sidenav',
              routes: [
                {
                  path: 'customer_account',
                  icon: 'BrandPerson',
                  nav: 'tabs',
                  routes: [
                    {
                      path: 'account_details',
                      component: ContactDetailsRoute,
                    },
                    {
                      path: 'subscriptions',
                      hidden: !route_permissions.customer_billing,
                      component: SubscriptionsRoute,
                    },
                    {
                      path: 'statements',
                      hidden: !route_permissions.customer_billing,
                      component: CustomerStatementsRoute,
                    },
                    {
                      path: 'invoices',
                      hidden: !route_permissions.customer_billing,
                      component: CustomerInvoicesRoute,
                    },
                    {
                      path: 'audit_trail',
                      component: CustomerSystemEventsAuditRoute,
                    },
                  ],
                },
                {
                  path: 'property/:property_id',
                  icon: 'HomeWifi',
                  provider: PropertyProvider,
                  nav: 'tabs',
                  routes: [
                    {
                      path: 'property_details',
                      component: PropertyDetailsRoute,
                    },
                    {
                      path: 'transmitters',
                      component: PropertyTransmittersRoute,
                    },
                    {
                      path: 'keyholders',
                      component: PropertyKeyholdersRoute,
                    },
                    {
                      path: 'schedule',
                      component: PropertyScheduleRoute,
                    },
                    {
                      path: 'alarm_history',
                      hidden: !route_permissions.alarm_history,
                      component: PropertyAlarmHistoryRoute,
                    },
                    {
                      path: 'statistics',
                      disabled: true,
                      component: PropertyStatisticsRoute,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          path: 'alarm_history',
          icon: 'History',
          hidden: !route_permissions.alarm_history,
          component: AlarmHistoryRoute,
        },
        {
          path: 'analytics',
          icon: 'Dashboard',
          hidden: !route_permissions.analytics,
          component: AnalyticsApp,
        },
        {
          path: 'areas',
          icon: 'MapPinUser',
          hidden: !route_permissions.alarms,
          component: AreasStatusRoute,
        },
      ],
    },
    {
      path: '*',
      component: UnknownRoute,
    },
  ];
};

export { buildRoutesConfig };
