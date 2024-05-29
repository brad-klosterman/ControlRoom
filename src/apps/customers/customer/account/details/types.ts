import {
  CURRENCY_CODES,
  CUSTOMER_CONTACT_PARAMS,
  INVOICE_CLUBBING,
  Maybe,
} from 'codegen/graphql';

type CustomerAccountDetailsForm = CUSTOMER_CONTACT_PARAMS & {
  account_code: Maybe<string>;
  account_description: Maybe<string>;
  account_currency: Maybe<CURRENCY_CODES>;
  account_manager_id: Maybe<number>;
  invoice_clubbing: Maybe<INVOICE_CLUBBING>;
  billing_department_id: Maybe<number>;
  document_id_number: Maybe<string>;
};

type CustomerAccountActionHandler = {
  createCustomerAccount(): void;
  updateCustomerAccount(): void;
  deleteCustomerAccount(): void;
  activateCustomerAccount(): void;
  deactivateCustomerAccount(): void;
  suspendCustomerProperties(): unknown;
  downloadCustomerReport(): void;
};

export type { CustomerAccountDetailsForm, CustomerAccountActionHandler };
