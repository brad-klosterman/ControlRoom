import { graphql } from 'codegen';

export const FETCH_CUSTOMER_SUBSCRIPTIONS = graphql(/* GraphQL */ `
  query customer_subscriptions($customer_id: Int!) {
    customer_billing_subscriptions(customer_id: $customer_id) {
      ...customer_billing_subscription_expanded
    }
  }
`);

export const FETCH_CUSTOMER_SUBSCRIPTION = graphql(/* GraphQL */ `
  query customer_subscription($id: Int!, $customer_id: Int!) {
    customer_billing_subscription(customer_id: $customer_id, id: $id) {
      ...customer_billing_subscription_expanded
    }
  }
`);

export const CUSTOMER_BILLING_SUBSCRIPTION_CONDENSED = graphql(/* GraphQL */ `
  fragment customer_billing_subscription_condensed on billing_subscription {
    id
    title
    status
    derived_status_as_of
    frequency
    effective_start_date
    effective_end_date
    initial_total_amount
    latest_total_amount
    individual_increase_rate
    last_invoice_generated_on
    next_execution_on
    paused_on
    resumed_on
    deactivated_on
    deactivation_reason
    billing_invoice_template_id
  }
`);

export const CUSTOMER_BILLING_SUBSCRIPTION_EXPANDED = graphql(/* GraphQL */ `
  fragment customer_billing_subscription_expanded on billing_subscription {
    id
    title
    status
    derived_status_as_of
    frequency
    effective_start_date
    effective_end_date
    initial_total_amount
    latest_total_amount
    total_tax
    individual_increase_rate
    last_invoice_generated_on
    next_execution_on
    paused_on
    resumed_on
    deactivated_on
    deactivation_reason
    billing_invoice_template {
      ...subscription_invoice_template
      billing_payment_option {
        ...subscription_payment_option
      }
    }
    billing_subscription_items {
      id
      type
      description
      quantity
      template {
        id
        name
        description
        type
      }
      property {
        id
        name
      }
      pricing_id
      starting_price
      current_price
      created_at
      updated_at
    }
  }
`);

export const CREATE_BILLING_SUBSCRIPTION = graphql(/* GraphQL */ `
  mutation create_billing_subscription(
    $customer_id: Int!
    $params: create_billing_subscription_params!
  ) {
    create_billing_subscription(customer_id: $customer_id, params: $params) {
      ...customer_billing_subscription_condensed
    }
  }
`);

export const UPDATE_BILLING_SUBSCRIPTION = graphql(/* GraphQL */ `
  mutation update_billing_subscription(
    $customer_id: Int!
    $subscription_id: Int!
    $params: update_billing_subscription_params!
  ) {
    update_billing_subscription(
      customer_id: $customer_id
      subscription_id: $subscription_id
      params: $params
    ) {
      ...customer_billing_subscription_condensed
    }
  }
`);

export const DELETE_BILLING_SUBSCRIPTION = graphql(/* GraphQL */ `
  mutation delete_billing_subscription(
    $customer_id: Int!
    $subscription_id: Int!
    $end_date: String!
  ) {
    delete_billing_subscription(
      customer_id: $customer_id
      subscription_id: $subscription_id
      end_date: $end_date
    ) {
      ...customer_billing_subscription_expanded
    }
  }
`);
