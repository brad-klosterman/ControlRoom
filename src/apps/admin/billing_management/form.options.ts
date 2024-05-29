import { BANK_ACCOUNT_TYPE, CARD_TYPE } from 'codegen/graphql';

export const RECURRING_BILLING_OPTIONS = [
  {
    label: 'ONE TIME',
    value: 'one_time',
  },
  {
    label: 'MONTHLY',
    value: 'monthly',
  },
  {
    label: 'QUARTERLY',
    value: 'quarterly',
  },
  {
    label: 'BI ANNUALLY',
    value: 'bi_annually',
  },
  {
    label: 'ANNUALLY',
    value: 'annually',
  },
];

export const BANK_ACCOUNT_TYPE_OPTIONS: {
  label: string;
  value: BANK_ACCOUNT_TYPE;
}[] = [
  {
    label: 'CHECKING',
    value: 'checking',
  },
  {
    label: 'SAVINGS',
    value: 'savings',
  },
];

export const CARD_TYPE_OPTIONS: {
  label: string;
  value: CARD_TYPE;
}[] = [
  {
    label: 'VISA',
    value: 'visa',
  },
  {
    label: 'MASTERCARD',
    value: 'mastercard',
  },
  {
    label: 'DISCOVER',
    value: 'discover',
  },
  {
    label: 'AMERICAN EXPRESS',
    value: 'american_express',
  },
];
