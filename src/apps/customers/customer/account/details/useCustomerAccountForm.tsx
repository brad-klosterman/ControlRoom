import React from 'react';
import { useForm } from 'react-hook-form';
import { useCanUpdateCustomers } from '@permissions';
import { useBillingContext } from 'src/app.state/billing';
import type { CustomerContextValue } from '@customers/customer/types';
import { useSSPSettingsContext } from '@admin/company_settings/settings/provider';
import { useUsersContext } from '@admin/user_management/users/provider';
import { IOptionNumber } from 'components/ui/Form/Options';
import type { CustomerAccountDetailsForm } from './types';
import {
  INVOICE_CLUBBING,
  PREFERRED_CUSTOMER_CONTACT_METHOD_TYPE,
} from 'codegen/graphql';

/**
 * useCustomerAccountForm
 *
 */
const useCustomerAccountForm = (props: {
  customer: CustomerContextValue['customer'];
  creating_customer: boolean;
}) => {
  /** Authentication & Permissions */
  const authorized_to_update = useCanUpdateCustomers();

  /** SSP Context */
  const SSPSettingsContext = useSSPSettingsContext();
  const UsersContext = useUsersContext();
  const BillingDepartmentsContext = useBillingContext();

  /** Customer Context Data */
  const { customer } = props;
  const customer_status = customer?.system_status?.status;

  /** Form Controller */
  const { reset, ...form_controller } = useForm<CustomerAccountDetailsForm>({
    reValidateMode: 'onChange',
  });

  /** Select Options */
  const PREFERRED_CONTACT_METHOD_OPTIONS: {
    label: PREFERRED_CUSTOMER_CONTACT_METHOD_TYPE;
    value: PREFERRED_CUSTOMER_CONTACT_METHOD_TYPE;
  }[] = [
    {
      label: 'EMAIL',
      value: 'EMAIL',
    },
    {
      label: 'MOBILE_NUMBER',
      value: 'MOBILE_NUMBER',
    },
    {
      label: 'LANDLINE_NUMBER',
      value: 'LANDLINE_NUMBER',
    },
    {
      label: 'OTHER_NUMBER',
      value: 'OTHER_NUMBER',
    },
  ];

  const INVOICE_CLUBBING_OPTIONS: {
    label: string;
    value: INVOICE_CLUBBING;
  }[] = [
    {
      label: 'ALL IN ONE INVOICE',
      value: 'all_clubbed',
    },
    {
      label: 'GROUP BY PROPERTY',
      value: 'by_property',
    },
    {
      label: 'GROUP BY SUBSCRIPTION',
      value: 'by_subscription',
    },
  ];

  const BILLING_DEPARTMENT_OPTIONS: IOptionNumber[] =
    BillingDepartmentsContext.state.billing_departments?.data?.map(
      billing_department => ({
        label: billing_department.name ?? '-',
        value: billing_department.id,
      }),
    ) ?? [];

  const DEFAULT_BILLING_DEPARTMENT_ID = BILLING_DEPARTMENT_OPTIONS?.[0]?.value;

  const ACCOUNT_MANAGER_OPTIONS = UsersContext.account_manager_options;

  const CURRENCY_OPTIONS = SSPSettingsContext.currency_options;

  React.useEffect(() => {
    if (customer) {
      reset({
        ...customer.contact,
        account_code: customer.account_code,
        account_description: customer.account_description,
        account_currency: customer.billing?.currency,
        account_manager_id: customer.billing?.account_manager_id,
        invoice_clubbing: customer.billing?.invoice_clubbing,
        billing_department_id: customer.billing?.billing_department?.id,
        document_id_number: customer.document_id_number,
      });
    }

    if (props.creating_customer && DEFAULT_BILLING_DEPARTMENT_ID) {
      reset({
        billing_department_id: DEFAULT_BILLING_DEPARTMENT_ID,
        invoice_clubbing: 'all_clubbed',
        preferred_contact_method: 'EMAIL',
      });
    }
  }, [customer?.contact, customer_status, DEFAULT_BILLING_DEPARTMENT_ID]);

  return {
    ...form_controller,
    disabled: !authorized_to_update,
    INVOICE_CLUBBING_OPTIONS,
    PREFERRED_CONTACT_METHOD_OPTIONS,
    BILLING_DEPARTMENT_OPTIONS,
    DEFAULT_BILLING_DEPARTMENT_ID,
    ACCOUNT_MANAGER_OPTIONS,
    CURRENCY_OPTIONS,
  };
};

export { useCustomerAccountForm };

/*

 */
