import { graphql } from 'codegen';

export const CUSTOMER_BILLING_PROFILE = graphql(/* GraphQL */ `
  fragment CUSTOMER_BILLING_PROFILE on customer_billing_profile {
    billing_subscriptions {
      ...customer_billing_subscription_condensed
    }
    payment_options {
      ...subscription_payment_option
    }
    invoice_templates {
      ...subscription_invoice_template
    }
    invoice_clubbing
    currency
    billing_address
    account_manager_id
    billing_department {
      id
      name
    }
  }
`);
