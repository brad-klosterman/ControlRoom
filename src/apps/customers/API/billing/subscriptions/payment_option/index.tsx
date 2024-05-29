import { graphql } from 'codegen';

export const SUBSCRIPTION_PAYMENT_OPTION = graphql(/* GraphQL */ `
  fragment subscription_payment_option on billing_payment_option {
    id
    description
    account_owner_first_name
    account_owner_last_name
    account_owner_phone
    account_type
    bank_account_type
    bank_code
    card_type
    decrypted_bank_account_number
    decrypted_card_number
    expiry_date
  }
`);

export const CREATE_PAYMENT_TEMPLATE = graphql(/* GraphQL */ `
  mutation create_payment_option(
    $customer_id: Int!
    $params: billing_payment_option_params!
  ) {
    create_payment_option(customer_id: $customer_id, params: $params) {
      id
    }
  }
`);

export const UPDATE_PAYMENT_TEMPLATE = graphql(/* GraphQL */ `
  mutation update_payment_option(
    $customer_id: Int!
    $payment_template_id: Int!
    $params: billing_payment_option_params!
  ) {
    update_payment_option(
      customer_id: $customer_id
      payment_option_id: $payment_template_id
      params: $params
    ) {
      ...subscription_payment_option
    }
  }
`);

export const DELETE_PAYMENT_TEMPLATE = graphql(/* GraphQL */ `
  mutation delete_payment_option(
    $customer_id: Int!
    $payment_template_id: Int!
  ) {
    delete_payment_option(
      customer_id: $customer_id
      payment_option_id: $payment_template_id
    ) {
      ...subscription_payment_option
    }
  }
`);
