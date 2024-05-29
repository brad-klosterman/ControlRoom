import React from 'react';
import styled, { css } from 'styled-components';
import {
  RequiresCreateCustomersPermission,
  RequiresUpdateCustomersPermission,
  RequiresDestroyCustomersPermission,
  RequiresSuspendCustomersPermission,
} from '@permissions';
import { Flex, Icon, Button } from 'components';

/**
 * Customer Account Action Buttons
 *
 */
import Customer from '@customers/customer';
import type { CustomerAccountActionHandler } from './types';

const CustomerAccountActionButtons = (props: {
  actionHandler: CustomerAccountActionHandler;
  form: {
    valid: boolean;
  };
  loading: boolean;
}) => {
  const actionHandler = props.actionHandler;

  /**
   * Customer Context
   *
   */
  const CustomerContext = Customer.useContext();
  const { customer, creating_customer } = CustomerContext;
  const customer_status = customer?.system_status?.status;
  // TODO: If there is a pending status change update the activate/deactivate button to update pending status and
  //  the modal then allows you to change the date or change the pending status
  //const scheduled_status_changes = customer?.scheduled_status_changes;

  if (creating_customer) {
    return (
      <Container>
        <RequiresCreateCustomersPermission>
          <Button
            onClick={actionHandler.createCustomerAccount}
            isLoading={props.loading}
            disabled={!props.form.valid}
          >
            CREATE ACCOUNT
          </Button>
        </RequiresCreateCustomersPermission>
      </Container>
    );
  }

  if (!customer) {
    return null;
  }

  if (customer_status === 'inactive') {
    return (
      <Container>
        <RequiresDestroyCustomersPermission>
          <Button
            onClick={actionHandler.deleteCustomerAccount}
            variant="delete"
            isLoading={props.loading}
          >
            <Icon.Trash /> DELETE ACCOUNT
          </Button>
        </RequiresDestroyCustomersPermission>
        <RequiresSuspendCustomersPermission>
          <Button
            onClick={actionHandler.activateCustomerAccount}
            variant="secondary"
            isLoading={props.loading}
          >
            ACTIVATE ACCOUNT
          </Button>
        </RequiresSuspendCustomersPermission>
        <RequiresUpdateCustomersPermission>
          <Button
            onClick={actionHandler.updateCustomerAccount}
            isLoading={props.loading}
            disabled={!props.form.valid}
          >
            UPDATE ACCOUNT
          </Button>
        </RequiresUpdateCustomersPermission>
      </Container>
    );
  }

  return (
    <Container>
      <RequiresSuspendCustomersPermission>
        <Button
          onClick={actionHandler.suspendCustomerProperties}
          variant="delete"
          isLoading={props.loading}
        >
          SUSPEND PROPERTIES
        </Button>
        <Button
          onClick={actionHandler.deactivateCustomerAccount}
          variant="delete"
          isLoading={props.loading}
        >
          DEACTIVATE ACCOUNT
        </Button>
      </RequiresSuspendCustomersPermission>
      <RequiresUpdateCustomersPermission>
        <Button
          onClick={actionHandler.updateCustomerAccount}
          isLoading={props.loading}
          disabled={!props.form.valid}
        >
          UPDATE ACCOUNT
        </Button>
      </RequiresUpdateCustomersPermission>
    </Container>
  );
};

const Container = styled(Flex)(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    align-items: flex-end;
    justify-content: flex-end;
    gap: ${theme.space.regular};
  `,
);

export { CustomerAccountActionButtons };

// const editable =
//   (authorized_to_update || creating_customer) &&
//   !loading_create &&
//   !loading_update;
