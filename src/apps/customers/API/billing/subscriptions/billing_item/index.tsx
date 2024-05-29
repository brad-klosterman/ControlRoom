import { graphql } from 'codegen';

export const CUSTOMER_SUBSCRIPTION_BILLING_ITEM = graphql(/* GraphQL */ `
  fragment customer_subscription_billing_item on billing_subscription_item {
    id
    type
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
`);

export const CREATE_BILLING_SUBSCRIPTION_ITEM = graphql(/* GraphQL */ `
  mutation create_billing_subscription_item(
    $customer_id: Int!
    $subscription_id: Int!
    $params: create_billing_subscription_item_params!
  ) {
    create_billing_subscription_item(
      customer_id: $customer_id
      subscription_id: $subscription_id
      params: $params
    ) {
      ...customer_subscription_billing_item
    }
  }
`);

export const UPDATE_BILLING_SUBSCRIPTION_ITEM = graphql(/* GraphQL */ `
  mutation update_billing_subscription_item(
    $customer_id: Int!
    $subscription_id: Int!
    $subscription_item_id: Int!
    $params: update_billing_subscription_item_params!
  ) {
    update_billing_subscription_item(
      customer_id: $customer_id
      subscription_id: $subscription_id
      subscription_item_id: $subscription_item_id
      params: $params
    ) {
      ...customer_subscription_billing_item
    }
  }
`);

export const DELETE_BILLING_SUBSCRIPTION_ITEM = graphql(/* GraphQL */ `
  mutation delete_billing_subscription_item(
    $customer_id: Int!
    $subscription_id: Int!
    $subscription_item_id: Int!
  ) {
    delete_billing_subscription_item(
      customer_id: $customer_id
      subscription_id: $subscription_id
      subscription_item_id: $subscription_item_id
    ) {
      ...customer_subscription_billing_item
    }
  }
`);
