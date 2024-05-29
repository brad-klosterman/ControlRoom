import { graphql } from 'codegen';

export const CREATE_CUSTOMER_PROPERTY = graphql(/* GraphQL */ `
  mutation create_customer_property(
    $customer_id: Int!
    $customer_first_name: String
    $customer_last_name: String
    $params: update_property_details_params!
  ) {
    create_customer_property(
      customer_id: $customer_id
      customer_first_name: $customer_first_name
      customer_last_name: $customer_last_name
      params: $params
    ) {
      success
      property {
        id
      }
    }
  }
`);

// code: String
// name: String!
// description: String
// type: property_type!
// instructions: property_instructions_input
// coordinates: coordinates_input
// entire_address: String
// password: String
