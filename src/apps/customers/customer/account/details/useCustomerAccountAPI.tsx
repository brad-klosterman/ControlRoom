import { useMutation } from '@apollo/client';

/**
 * useCustomerAccountAPI
 *
 */
import type { CustomerAccountDetailsForm } from './types';
import {
  CREATE_CUSTOMER_ACCOUNT_DOCUMENT,
  CREATE_CUSTOMER_ACCOUNT_MUTATION_VARIABLES,
  DELETE_CUSTOMER_ACCOUNT_DOCUMENT,
  UPDATE_CUSTOMER_ACCOUNT_DOCUMENT,
  UPDATE_CUSTOMER_ACCOUNT_MUTATION_VARIABLES,
} from 'codegen/graphql';

const useCustomerAccountAPI = () => {
  const [createAccount, { loading: loading_create }] = useMutation(
    CREATE_CUSTOMER_ACCOUNT_DOCUMENT,
  );
  const [updateAccount, { loading: loading_update }] = useMutation(
    UPDATE_CUSTOMER_ACCOUNT_DOCUMENT,
  );
  const [deleteAccount, { loading: loading_delete }] = useMutation(
    DELETE_CUSTOMER_ACCOUNT_DOCUMENT,
  );

  const loading = loading_create || loading_update || loading_delete;

  return {
    createAccount,
    updateAccount,
    deleteAccount,
    loading,
    mapParams,
  };
};

function mapParams<T extends CustomerAccountDetailsForm>(
  input: T,
):
  | CREATE_CUSTOMER_ACCOUNT_MUTATION_VARIABLES
  | Omit<UPDATE_CUSTOMER_ACCOUNT_MUTATION_VARIABLES, 'id'> {
  return {
    account_code: input.account_code,
    account_description: input.account_description,
    account_currency: input.account_currency,
    account_manager_id: input.account_manager_id,
    invoice_clubbing: input.invoice_clubbing,
    billing_department_id: input.billing_department_id,
    document_id_number: input.document_id_number,
    contact_details: {
      title: input.title,
      first_name: input.first_name,
      last_name: input.last_name,
      landline_phone: input.landline_phone,
      mobile_phone: input.mobile_phone,
      other_phone: input.other_phone,
      email: input.email,
      preferred_contact_method: input.preferred_contact_method,
    },
  };
}

export { useCustomerAccountAPI };
