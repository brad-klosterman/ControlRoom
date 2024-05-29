import React from 'react';
import { useSimpleModalState } from 'components';

/**
 * Customer Account Modals
 *
 */
import { ActivateAccountModal } from './modals/activate-account/ActivateAccountModal';
import { DeactivateAccountModal } from './modals/deactivate-account/DeactivateAccountModal';
import { SuspendPropertiesModal } from './modals/suspend-properties/SuspendPropertiesModal';
import { useDeleteAccountModal } from './modals/delete-account/useDeleteAccountModal';
import { useInvoiceClubbingModal } from './modals/invoice-clubbing/useInvoiceClubbingModal';
import { useCustomerReportModal } from './modals/customer-report/useCustomerReportModal';
import Customer from '@customers/customer';

const useCustomerAccountModals = () => {
  const activate_account = useSimpleModalState();
  const deactivate_account = useSimpleModalState();
  const delete_account = useDeleteAccountModal();
  const suspend_property = useSimpleModalState();
  const invoice_clubbing = useInvoiceClubbingModal();
  const customer_report = useCustomerReportModal();

  return {
    activate_account,
    deactivate_account,
    delete_account,
    suspend_property,
    invoice_clubbing,
    customer_report,
  };
};

const CustomerAccountModals = React.memo(
  (props: ReturnType<typeof useCustomerAccountModals>) => {
    const CustomerContext = Customer.useContext();
    const { customer } = CustomerContext;

    async function onSuccess() {
      await CustomerContext.dispatch('REFETCH_CUSTOMER', {});
    }

    if (!customer) return null;
    return (
      <>
        <ActivateAccountModal
          customer={customer}
          is_open={props.activate_account.is_open}
          onClose={props.activate_account.close}
          onSuccess={onSuccess}
        />
        <DeactivateAccountModal
          customer={customer}
          is_open={props.deactivate_account.is_open}
          onClose={props.deactivate_account.close}
          onSuccess={onSuccess}
        />
        <SuspendPropertiesModal
          customer={customer}
          is_open={props.suspend_property.is_open}
          onClose={props.suspend_property.close}
          onSuccess={onSuccess}
        />
      </>
    );
  },
);

export { CustomerAccountModals, useCustomerAccountModals };
