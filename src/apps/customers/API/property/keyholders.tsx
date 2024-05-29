import { graphql } from 'codegen';

export const UPDATE_PROPERTY_KEYHOLDER_ORDER = graphql(/* GraphQL */ `
  mutation Mutation(
    $customer_id: Int!
    $property_id: Int!
    $keyholder_ids_priority: [Int!]!
  ) {
    update_property_keyholder_call_order(
      customer_id: $customer_id
      property_id: $property_id
      keyholder_ids_priority: $keyholder_ids_priority
    ) {
      success
    }
  }
`);

export const CREATE_KEYHOLDER = graphql(/* GraphQL */ `
  mutation create_property_keyholder(
    $customer_id: Int!
    $property_id: Int!
    $register_app: Boolean!
    $params: property_keyholder_params!
  ) {
    create_property_keyholder(
      customer_id: $customer_id
      property_id: $property_id
      register_app: $register_app
      params: $params
    ) {
      success
      keyholder {
        id
      }
    }
  }
`);

export const UPDATE_KEYHOLDER = graphql(/* GraphQL */ `
  mutation update_property_keyholder(
    $customer_id: Int!
    $property_id: Int!
    $keyholder_id: Int!
    $register_app: Boolean!
    $params: property_keyholder_params!
  ) {
    update_property_keyholder(
      customer_id: $customer_id
      property_id: $property_id
      keyholder_id: $keyholder_id
      register_app: $register_app
      params: $params
    ) {
      success
      keyholder {
        id
      }
    }
  }
`);

export const DELETE_KEYHOLDER = graphql(/* GraphQL */ `
  mutation delete_property_keyholder(
    $customer_id: Int!
    $property_id: Int!
    $keyholder_id: Int!
  ) {
    delete_property_keyholder(
      customer_id: $customer_id
      property_id: $property_id
      keyholder_id: $keyholder_id
    ) {
      success
    }
  }
`);
