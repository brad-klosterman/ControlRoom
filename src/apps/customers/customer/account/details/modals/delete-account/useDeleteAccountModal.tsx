import React from 'react';
import { Modal } from 'components/ui';
import { CustomerAccountProfile } from '@customers/customer/types';

/**
 * Delete Customer Account Modal
 *
 */
const useDeleteAccountModal = () => {
  const modal = React.useContext(Modal.Context);

  return {
    open(params: {
      customer: CustomerAccountProfile;
      onConfirm(): Promise<void>;
    }) {
      const account_description = params.customer.account_description;

      if (params.customer.id)
        modal.open({
          title: 'DELETE CUSTOMER ACCOUNT',
          subtitle: `Are you sure you want to delete customer account: ${account_description}?`,
          info: 'Note: Transmitters must be removed removed from',
          actions: [
            { type: 'cancel' },
            { type: 'confirm_dangerous', text: 'DELETE' },
          ],
          async onConfirm() {
            await params.onConfirm();
            modal.close();
          },
        });
    },
  };
};

export { useDeleteAccountModal };
