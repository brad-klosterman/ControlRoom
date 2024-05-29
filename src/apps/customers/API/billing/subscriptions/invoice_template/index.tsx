import { graphql } from 'codegen';

export const SUBSCRIPTION_INVOICE_TEMPLATE = graphql(/* GraphQL */ `
  fragment subscription_invoice_template on billing_invoice_template {
    id
    description
    legal_name
    company_name
    company_registration_number
    vat_number
    email
    cc_email
    billing_address
    invoice_due_days
    collection_day_of_month
    payment_method
    billing_payment_option {
      id
    }
    billing_payment_option_id
  }
`);

export const CREATE_INVOICE_TEMPLATE = graphql(/* GraphQL */ `
  mutation create_invoice_template(
    $customer_id: Int!
    $params: invoice_template_params!
  ) {
    create_invoice_template(customer_id: $customer_id, params: $params) {
      id
    }
  }
`);

export const UPDATE_INVOICE_TEMPLATE = graphql(/* GraphQL */ `
  mutation update_invoice_template(
    $customer_id: Int!
    $invoice_template_id: Int!
    $params: invoice_template_params!
  ) {
    update_invoice_template(
      customer_id: $customer_id
      invoice_template_id: $invoice_template_id
      params: $params
    ) {
      ...subscription_invoice_template
    }
  }
`);

export const DELETE_INVOICE_TEMPLATE = graphql(/* GraphQL */ `
  mutation delete_invoice_template(
    $customer_id: Int!
    $invoice_template_id: Int!
  ) {
    delete_invoice_template(
      customer_id: $customer_id
      invoice_template_id: $invoice_template_id
    ) {
      ...subscription_invoice_template
    }
  }
`);
