import {
  CUSTOMER_ACCOUNT_CONTACT_FRAGMENT,
  CUSTOMER_ACCOUNT_PROFILE_FRAGMENT,
  CUSTOMER_BILLING_PROFILE_FRAGMENT,
  SCHEDULED_STATUS_CHANGES_FRAGMENT,
} from 'codegen/graphql';

type CustomerContextValue = {
  customer: CustomerAccountProfile | null;
  creating_customer: boolean;
  creating_property: boolean;
  dispatch: Dispatch;
  loading: boolean;
};

type CustomerAccountProfile = CUSTOMER_ACCOUNT_PROFILE_FRAGMENT & {
  contact: CUSTOMER_ACCOUNT_CONTACT_FRAGMENT;
  billing: CUSTOMER_BILLING_PROFILE_FRAGMENT | undefined | null;
  scheduled_status_changes:
    | SCHEDULED_STATUS_CHANGES_FRAGMENT
    | undefined
    | null;
};

type CustomerContextActions = {
  TOGGLE_NEW_PROPERTY(params?: { new_property_id?: number }): Promise<boolean>;
  REFETCH_CUSTOMER(params?: { new_customer_id?: number }): Promise<boolean>;
};

type Dispatch = <
  A extends keyof CustomerContextActions,
  TParams extends CustomerContextActions[A] extends (p: infer P) => any
    ? P
    : undefined,
>(
  action: A,
  params: TParams,
) => Promise<boolean>;

type CustomerRouteParams = {
  customer_id: string;
  property_id: string;
};

type CustomerNavLocationState = {
  back_url: string;
  alarm?: {
    expander_key: string;
    stack_index: number;
  };
};

export type {
  CustomerContextValue,
  CustomerAccountProfile,
  CustomerContextActions,
  CustomerRouteParams,
  CustomerNavLocationState,
};
