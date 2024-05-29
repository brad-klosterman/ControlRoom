import { graphql } from 'codegen';

export const UPDATE_PROPERTY_DETAILS = graphql(/* GraphQL */ `
  mutation update_property_details(
    $customer_id: Int!
    $customer_first_name: String
    $customer_last_name: String
    $property_id: Int!
    $params: update_property_details_params!
  ) {
    update_property_details(
      customer_id: $customer_id
      customer_first_name: $customer_first_name
      customer_last_name: $customer_last_name
      property_id: $property_id
      params: $params
    ) {
      success
      message
    }
  }
`);
