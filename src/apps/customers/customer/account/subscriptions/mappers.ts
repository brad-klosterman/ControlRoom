import { BILLING_ACCOUNT_TYPE } from 'src/apollo/codegen/graphql';

/**
 * !!! FRAGILE !!!
 *
 * Determine what the `account_type` of `billing_payment_option` should be.
 *
 * This is fragile, because any new payment_method types that are introduced could
 * and very well will lead to this method not properly mapping.
 *
 * @param payment_method The payment method string (i.e. "cash", "bank_fnb", "etf", ...)
 * @returns The BILLING_ACCOUNT_TYPE or undefined if unable to match
 */
const mapPaymentMethodToAccountType = (
  payment_method: string | null | undefined,
): BILLING_ACCOUNT_TYPE | undefined => {
  if (payment_method?.includes('bank') || payment_method === 'eft') {
    return 'bank';
  }

  if (payment_method?.includes('card')) {
    return 'card';
  }

  return undefined;
};

export { mapPaymentMethodToAccountType };
