/* eslint-disable sort-keys-fix/sort-keys-fix */

// AREAS
export { default as AreasStatusRoute } from './areas';
// ADMIN: COMPANY SETTINGS
export { default as Admin } from './admin';
export { default as AdminSettingsRoute } from 'apps/admin/company_settings/settings';
export { AreasRoute } from 'apps/admin/company_settings/areas';
import AlarmTypesProvider from 'apps/admin/alarm_management/types_config/provider';
import Areas from 'apps/admin/company_settings/areas/provider';
import Decoders from 'apps/admin/company_settings/decoders/provider';
export { DecodersRoute } from 'apps/admin/company_settings/decoders';
export { TransmittersRoute } from 'apps/admin/company_settings/transmitters';
// ADMIN: ALARM MANAGEMENT
export { default as AlarmTypesRoute } from 'apps/admin/alarm_management/types_config/';
// ADMIN: USER MANAGEMENT
export { default as UsersRoute } from 'apps/admin/user_management/users/';
export { default as TechniciansRoute } from 'apps/admin/user_management/technicians';
export { default as RespondersRoute } from 'apps/admin/user_management/responders';
// ADMIN: BILLING
export { default as AdminProductsRoute } from 'apps/admin/billing_management/products';
// ADMIN:REPORTING
export { default as CompanyReportsRoute } from 'apps/admin/reports_audits/company_reports/index';
// ALARMS
export { default as Alarms } from './alarms';
// ALARMS HISTORY
export { AlarmHistoryRoute } from './alarms/history';
// TRACKING
export { default as TrackingMap } from './tracking';
// CUSTOMERS
export { default as Customers } from './customers';
export { default as Customer } from './customers/customer';
export { default as ContactDetailsRoute } from './customers/customer/account/details/CustomerAccountRoute';
export { default as SubscriptionsRoute } from './customers/customer/account/subscriptions';
export { default as CustomerStatementsRoute } from './customers/customer/account/statements';
export { default as CustomerInvoicesRoute } from './customers/customer/account/invoices';
// CUSTOMER PROPERTY
export { default as PropertyProvider } from 'apps/customers/customer/property/provider';
export { default as PropertyDetailsRoute } from 'apps/customers/customer/property/property_details';
export { default as PropertyTransmittersRoute } from 'apps/customers/customer/property/transmitters';
export { default as PropertyKeyholdersRoute } from 'apps/customers/customer/property/keyholders';
export { default as PropertyScheduleRoute } from 'apps/customers/customer/property/schedule';
export { default as PropertyStatisticsRoute } from 'apps/customers/customer/property/statistics';
export { PropertyAlarmHistoryRoute } from 'apps/customers/customer/property/alarm_history';
// GLOBAL APP PROVIDERS
import RespondersProvider from 'apps/admin/user_management/responders/provider';
import TechniciansProvider from 'apps/admin/user_management/technicians/provider';
import UsersProvider from 'apps/admin/user_management/users/provider';
import { AlarmsProvider } from 'apps/alarms/state/provider';
import SSP from 'src/app.state/ssp/provider';

export const Provider = {
  Responders: RespondersProvider,
  Users: UsersProvider,
  Technicians: TechniciansProvider,
  SSP: SSP.Provider,
  Alarms: AlarmsProvider,
  AlarmTypes: AlarmTypesProvider,
  Areas: Areas.Provider,
  Decoders: Decoders.Provider,
};
