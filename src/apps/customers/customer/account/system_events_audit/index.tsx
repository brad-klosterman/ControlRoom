import { SystemEventsTable } from 'apps/admin/reports_audits/system_events_audit/table';
import { useCustomer } from 'apps/customers/customer/provider';

const CustomerSystemEventsAuditRoute = () => {
  const { customer } = useCustomer();

  if (!customer?.id) return null;

  return <SystemEventsTable customer_id={customer.id} />;
};

export default CustomerSystemEventsAuditRoute;
