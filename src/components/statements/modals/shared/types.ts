import { CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT } from 'src/apollo/codegen/graphql';

export type InvoiceOutstandingAmountSubset = Pick<
  CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT,
  'outstanding_amount' | 'currency'
>;
