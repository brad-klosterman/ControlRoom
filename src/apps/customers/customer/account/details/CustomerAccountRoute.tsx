import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Grid, Form } from 'components';
import { FormGrid, FormGridCol } from 'components/ui/Form/form.elements';
import { isRequired } from 'components/ui/Form/validation';
import { SubRouteWrap } from 'apps/dashboard/style';
import { useResponseStatus } from 'hooks';
import Customer from '@customers/customer';
import { useCustomerAccountAPI } from './useCustomerAccountAPI';
import { useCustomerAccountForm } from './useCustomerAccountForm';
import { CustomerAccountHeader } from './CustomerAccountHeader';
import { CustomerAccountActionButtons } from './CustomerAccountActionButtons';
import {
  CustomerAccountModals,
  useCustomerAccountModals,
} from './CustomerAccountModals';
import type {
  CREATE_CUSTOMER_ACCOUNT_MUTATION_VARIABLES,
  DELETE_CUSTOMER_ACCOUNT_MUTATION_VARIABLES,
  UPDATE_CUSTOMER_ACCOUNT_MUTATION_VARIABLES,
} from 'codegen/graphql';
import type { CustomerAccountActionHandler } from './types';

/**
 * Customer Account Route
 *
 */
const CustomerAccountRoute = () => {
  const navigate = useNavigate();

  /** Customer Context */
  const CustomerContext = Customer.useContext();
  const { customer, creating_customer } = CustomerContext;

  /** Customer Account API */
  const CustomerAccountAPI = useCustomerAccountAPI();

  /** Modals and Notifications */
  const modalHandler = useCustomerAccountModals();
  const toast = useResponseStatus();

  /** Form */
  const form = useCustomerAccountForm({ customer, creating_customer });

  /** Action Handlers */
  async function handleCreateCustomerAPI(
    variables: CREATE_CUSTOMER_ACCOUNT_MUTATION_VARIABLES,
    { onSuccess }: { onSuccess(customer_id: number): void },
  ) {
    try {
      await CustomerAccountAPI.createAccount({
        variables,
      }).then(({ data }) => {
        const new_customer_id = data?.create_customer_account.customer_id;
        if (new_customer_id) onSuccess(new_customer_id);
      });

      toast.successAlert(`CREATED CUSTOMER`);
    } catch (error: any) {
      toast.errorAlert(`COULD NOT CREATE CUSTOMER`);
    }
  }

  async function handleUpdateCustomerAPI(
    variables: UPDATE_CUSTOMER_ACCOUNT_MUTATION_VARIABLES,
    { onSuccess }: { onSuccess(): void },
  ) {
    try {
      await CustomerAccountAPI.updateAccount({
        variables,
      }).then(onSuccess);

      toast.successAlert(`UPDATED CUSTOMER`);
    } catch (error: any) {
      toast.errorAlert(`COULD NOT UPDATE CUSTOMER`);
    }
  }

  async function handleDeleteCustomerAPI(
    variables: DELETE_CUSTOMER_ACCOUNT_MUTATION_VARIABLES,
    { onSuccess }: { onSuccess(): void },
  ) {
    try {
      await CustomerAccountAPI.deleteAccount({
        variables,
      }).then(onSuccess);

      toast.successAlert(`DELETED CUSTOMER ACCOUNT`);
    } catch (error: any) {
      const error_message =
        error?.graphQLErrors[0]?.extensions?.response?.body?.message?.[0] ??
        `COULD NOT DELETE CUSTOMER ACCOUNT`;

      toast.errorAlert(error_message);
    }
  }

  const actionHandler: CustomerAccountActionHandler = {
    createCustomerAccount() {
      form.handleSubmit(async data =>
        handleCreateCustomerAPI(CustomerAccountAPI.mapParams(data), {
          onSuccess(new_customer_id: number) {
            CustomerContext.dispatch('REFETCH_CUSTOMER', { new_customer_id });
          },
        }),
      )();
    },
    updateCustomerAccount() {
      if (customer?.id)
        form.handleSubmit(async data => {
          const onConfirm = async () => {
            console.log('on confirm');

            await handleUpdateCustomerAPI(
              { id: customer?.id, ...CustomerAccountAPI.mapParams(data) },
              {
                onSuccess() {
                  CustomerContext.dispatch('REFETCH_CUSTOMER', {});
                },
              },
            );
          };

          const should_open_invoice_clubbing_modal =
            form.getFieldState('invoice_clubbing').isDirty &&
            data.invoice_clubbing === 'all_clubbed';

          if (should_open_invoice_clubbing_modal) {
            modalHandler.invoice_clubbing.open({
              onConfirm,
            });
          } else {
            await onConfirm();
          }
        })();
    },
    deleteCustomerAccount() {
      if (customer?.id)
        modalHandler.delete_account.open({
          customer,
          async onConfirm() {
            await handleDeleteCustomerAPI(
              { id: customer.id },
              {
                onSuccess() {
                  navigate('/control_room/customers', { replace: true });
                },
              },
            );
          },
        });
    },
    activateCustomerAccount() {
      modalHandler.activate_account.open();
    },
    deactivateCustomerAccount() {
      modalHandler.deactivate_account.open();
    },
    suspendCustomerProperties() {
      modalHandler.suspend_property.open();
    },
    downloadCustomerReport() {
      modalHandler.customer_report.open();
    },
  };

  const accountHeaderActionHandler = {
    downloadCustomerReport: actionHandler.downloadCustomerReport,
  };

  return (
    <>
      <SubRouteWrap direction="column" style={{ paddingTop: '2rem' }}>
        <CustomerAccountHeader actionHandler={accountHeaderActionHandler} />
        <FormGrid style={{ height: '100%' }}>
          <Grid.Cell x={[0, 6]} y={[0, 1]}>
            <FormGridCol>
              <Grid.Cell x={[0, 12]} y={[0, 1]}>
                <Form.Input
                  label="Account Description"
                  name="account_description"
                  control={form.control}
                  disabled={form.disabled}
                />
              </Grid.Cell>
              <Grid.Cell x={[0, 12]} y={[1, 2]}>
                <Form.Select
                  label="Billing Department"
                  name="billing_department_id"
                  options={form.BILLING_DEPARTMENT_OPTIONS}
                  type="number"
                  control={form.control}
                  disabled={form.disabled}
                />
              </Grid.Cell>
              <Grid.Cell x={[0, 6]} y={[2, 3]}>
                <Form.ReadonlyInput
                  label="Customer Code"
                  value={customer?.seon_account_code}
                />
              </Grid.Cell>
              <Grid.Cell x={[6, 12]} y={[2, 3]}>
                <Form.Input
                  label="Legacy Customer Code"
                  name="account_code"
                  control={form.control}
                  disabled={form.disabled}
                />
              </Grid.Cell>
              <Grid.Cell x={[0, 6]} y={[3, 4]}>
                <Form.Select
                  label="Account Currency"
                  name="account_currency"
                  options={form.CURRENCY_OPTIONS}
                  control={form.control}
                  disabled={form.disabled}
                />
              </Grid.Cell>
              <Grid.Cell x={[6, 12]} y={[3, 4]}>
                <Form.Select
                  label="Invoice Clubbing"
                  name="invoice_clubbing"
                  options={form.INVOICE_CLUBBING_OPTIONS}
                  control={form.control}
                  disabled={form.disabled}
                />
              </Grid.Cell>
              <Grid.Cell x={[0, 12]} y={[4, 5]}>
                <Form.Input
                  label="Document ID Number"
                  name="document_id_number"
                  control={form.control}
                  disabled={form.disabled}
                />
              </Grid.Cell>
            </FormGridCol>
          </Grid.Cell>
          <Grid.Cell x={[6, 12]} y={[0, 1]}>
            <FormGridCol>
              <Grid.Cell x={[0, 3]} y={[0, 1]}>
                <Form.Input
                  label="Title"
                  name="title"
                  control={form.control}
                  disabled={form.disabled}
                />
              </Grid.Cell>
              <Grid.Cell x={[3, 12]} y={[0, 1]}>
                <Form.Input
                  label="Last Name"
                  name="last_name"
                  control={form.control}
                  disabled={form.disabled}
                  rules={isRequired}
                />
              </Grid.Cell>
              <Grid.Cell x={[0, 12]} y={[1, 2]}>
                <Form.Input
                  label="First Name(s)"
                  name="first_name"
                  control={form.control}
                  disabled={form.disabled}
                  rules={isRequired}
                />
              </Grid.Cell>
              <Grid.Cell x={[0, 6]} y={[2, 3]}>
                <Form.Input
                  label="Email"
                  name="email"
                  control={form.control}
                  disabled={form.disabled}
                  rules={isRequired}
                />
              </Grid.Cell>
              <Grid.Cell x={[6, 12]} y={[2, 3]}>
                <Form.Input
                  label="Mobile Phone"
                  name="mobile_phone"
                  control={form.control}
                  disabled={form.disabled}
                />
              </Grid.Cell>
              <Grid.Cell x={[0, 6]} y={[3, 4]}>
                <Form.Input
                  label="Landline Phone"
                  name="landline_phone"
                  control={form.control}
                  disabled={form.disabled}
                />
              </Grid.Cell>
              <Grid.Cell x={[6, 12]} y={[3, 4]}>
                <Form.Input
                  label="Other Phone"
                  name="other_phone"
                  control={form.control}
                  disabled={form.disabled}
                />
              </Grid.Cell>
              <Grid.Cell x={[0, 6]} y={[4, 5]}>
                <Form.Select
                  label="Preferred Contact Method"
                  name="preferred_contact_method"
                  control={form.control}
                  disabled={form.disabled}
                  options={form.PREFERRED_CONTACT_METHOD_OPTIONS}
                  rules={isRequired}
                />
              </Grid.Cell>
              <Grid.Cell x={[6, 12]} y={[4, 5]}>
                <Form.Select
                  label="Account Manager"
                  name="account_manager_id"
                  control={form.control}
                  disabled={form.disabled}
                  options={form.ACCOUNT_MANAGER_OPTIONS}
                />
              </Grid.Cell>
            </FormGridCol>
          </Grid.Cell>
          <Grid.Cell x={[0, 12]} y={[1, 2]}>
            <CustomerAccountActionButtons
              {...{
                actionHandler,
                form: { valid: form.formState.isValid },
                loading: CustomerAccountAPI.loading,
              }}
            />
          </Grid.Cell>
        </FormGrid>
      </SubRouteWrap>
      <CustomerAccountModals {...modalHandler} />
    </>
  );
};

export default React.memo(CustomerAccountRoute);
