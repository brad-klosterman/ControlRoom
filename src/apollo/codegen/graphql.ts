/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type CACHE_CONTROL_SCOPE = 'PRIVATE' | 'PUBLIC';

export type MUTATION = {
  acknowledge_alarm_instructions: Scalars['Boolean']['output'];
  add_credit_note: Scalars['Boolean']['output'];
  add_debit_note: Scalars['Boolean']['output'];
  add_payment: Scalars['Boolean']['output'];
  assign_agent_areas: ASSIGN_AGENT_AREAS_RESPONSE;
  assign_responder: Scalars['Boolean']['output'];
  cancel_alarm: Scalars['Boolean']['output'];
  cancel_refund_invoice: Scalars['Boolean']['output'];
  close_alarm: Scalars['Boolean']['output'];
  close_alarms: Scalars['Boolean']['output'];
  create_agent: UPDATE_AGENT_RESPONSE;
  create_alarm_type: ALARM_TYPE_MUTATION_RESPONSE;
  create_billing_subscription: BILLING_SUBSCRIPTION;
  create_billing_subscription_item: BILLING_SUBSCRIPTION_ITEM;
  create_customer_account: CREATE_CUSTOMER_ACCOUNT_RESPONSE;
  create_customer_property: UPDATE_CUSTOMER_PROPERTY_RESPONSE;
  create_decoder: DECODER_MUTATION_RESPONSE;
  create_discount_price: DISCOUNT_TEMPLATE_MUTATION_RESPONSE;
  create_discount_template: DISCOUNT_TEMPLATE_MUTATION_RESPONSE;
  create_invoice_template: BILLING_INVOICE_TEMPLATE;
  create_payment_option: BILLING_PAYMENT_OPTION;
  create_product_price: PRODUCT_TEMPLATE_MUTATION_RESPONSE;
  create_product_template: PRODUCT_TEMPLATE_MUTATION_RESPONSE;
  create_property_keyholder: PROPERTY_KEYHOLDER_MUTATION_RESPONSE;
  create_property_zone: PROPERTY_ZONE_MUTATION_RESPONSE;
  create_responder: RESPONDER_MUTATION_RESPONSE;
  create_role: ROLE_RESPONSE;
  create_ssp_area?: Maybe<AREA_MUTATION_RESPONSE>;
  create_technician: Scalars['Boolean']['output'];
  create_transmitter: TRANSMITTER_MUTATION_RESPONSE;
  debit_order_bulk_process: DEBIT_ORDER_BULK_PROCESS_RESPONSE;
  delete_agent: DELETE_AGENT_RESPONSE;
  delete_alarm_type: DELETE_ALARM_TYPE_RESPONSE;
  delete_billing_subscription: BILLING_SUBSCRIPTION;
  delete_billing_subscription_item?: Maybe<BILLING_SUBSCRIPTION_ITEM>;
  delete_customer_account: Scalars['Boolean']['output'];
  delete_decoder: DELETE_DECODER_RESPONSE;
  delete_discount_price: DISCOUNT_TEMPLATE_MUTATION_RESPONSE;
  delete_discount_template: DISCOUNT_TEMPLATE_MUTATION_RESPONSE;
  delete_invoice_template?: Maybe<BILLING_INVOICE_TEMPLATE>;
  delete_payment_option?: Maybe<BILLING_PAYMENT_OPTION>;
  delete_product_price: PRODUCT_TEMPLATE_MUTATION_RESPONSE;
  delete_product_template: PRODUCT_TEMPLATE_MUTATION_RESPONSE;
  delete_property_keyholder: PROPERTY_KEYHOLDER_DELETION_RESPONSE;
  delete_property_zone: Scalars['Boolean']['output'];
  delete_responder: DELETE_RESPONDER_RESPONSE;
  delete_role?: Maybe<Scalars['Boolean']['output']>;
  delete_technician: Scalars['Boolean']['output'];
  disable_property_testing: Scalars['Boolean']['output'];
  discard_ssp_area?: Maybe<DISCARD_AREA_AND_REASSIGN_TRANSMITTERS_MUTATION_RESPONSE>;
  email_customer_transaction: Scalars['String']['output'];
  email_customers_invoices: Scalars['String']['output'];
  email_customers_invoices_advanced: Scalars['String']['output'];
  enable_property_testing: Scalars['Boolean']['output'];
  generate_customer_statement: Scalars['String']['output'];
  generate_customers_invoices: Scalars['String']['output'];
  generate_debit_order_run: GENERATE_DEBIT_ORDER_RUN_RESPONSE;
  generate_revenue_report: REVENUE_REPORT_RESPONSE;
  generate_ssp_billing_statements: Scalars['String']['output'];
  generate_ssp_monthly_billing_report: Scalars['String']['output'];
  group_customer_invoices: Scalars['Boolean']['output'];
  increase_alarm: Scalars['Boolean']['output'];
  log_keyholder_call: Scalars['Boolean']['output'];
  log_security_question: Scalars['Boolean']['output'];
  login: LOGIN_RESPONSE;
  login_control_room: LOGIN_CONTROL_ROOM_RESPONSE;
  login_user: LOGIN_USER_RESPONSE;
  logout: LOGOUT_RESPONSE;
  logout_control_room: LOGOUT_RESPONSE;
  logout_user: Scalars['Boolean']['output'];
  pause_billing_subscription: BILLING_SUBSCRIPTION;
  regenerate_customers_invoices: Scalars['String']['output'];
  regenerate_one_time_invoice: Scalars['String']['output'];
  reject_billing_transaction: Scalars['Boolean']['output'];
  set_zone_on_hold_mode: Scalars['Boolean']['output'];
  transfer_transaction: Scalars['Boolean']['output'];
  unassign_agent_areas: UNASSIGN_AGENT_AREAS_RESPONSE;
  update_agent: UPDATE_AGENT_RESPONSE;
  update_agent_role: UPDATE_AGENT_RESPONSE;
  update_alarm_notes: Scalars['Boolean']['output'];
  update_alarm_type: ALARM_TYPE_MUTATION_RESPONSE;
  update_billing_subscription: BILLING_SUBSCRIPTION;
  update_billing_subscription_item: BILLING_SUBSCRIPTION_ITEM;
  update_customer_account: Scalars['Boolean']['output'];
  update_customer_contact: CUSTOMER_MUTATION_RESPONSE;
  update_customer_invoice: Scalars['Boolean']['output'];
  update_customer_status: Scalars['Boolean']['output'];
  update_decoder: DECODER_MUTATION_RESPONSE;
  update_discount_price: DISCOUNT_TEMPLATE_MUTATION_RESPONSE;
  update_discount_template: DISCOUNT_TEMPLATE_MUTATION_RESPONSE;
  update_invoice_template: BILLING_INVOICE_TEMPLATE;
  update_payment_option: BILLING_PAYMENT_OPTION;
  update_product_price: PRODUCT_TEMPLATE_MUTATION_RESPONSE;
  update_product_template: PRODUCT_TEMPLATE_MUTATION_RESPONSE;
  update_property_details: UPDATE_CUSTOMER_PROPERTY_RESPONSE;
  update_property_keyholder: PROPERTY_KEYHOLDER_MUTATION_RESPONSE;
  update_property_keyholder_call_order: PROPERTY_KEYHOLDERS_MUTATION_RESPONSE;
  update_property_schedule: PROPERTY_SCHEDULE_MUTATION_RESPONSE;
  update_property_status: UPDATE_CUSTOMER_PROPERTY_RESPONSE;
  update_property_zone: PROPERTY_ZONE_MUTATION_RESPONSE;
  update_responder: RESPONDER_MUTATION_RESPONSE;
  update_role: ROLE_RESPONSE;
  update_ssp_area?: Maybe<AREA_MUTATION_RESPONSE>;
  update_ssp_company_details: Scalars['Boolean']['output'];
  update_technician: Scalars['Boolean']['output'];
  update_transmitter: TRANSMITTER_MUTATION_RESPONSE;
  update_transmitter_status: TRANSMITTER_MUTATION_RESPONSE;
  voip_end_call: VOIP_END_CALL_RESPONSE;
  voip_heartbeat: VOIP_HEARTBEAT_RESPONSE;
  voip_log_call: VOIP_LOG_CALL_RESPONSE;
  voip_start_call: VOIP_START_CALL_RESPONSE;
};

export type MUTATION_ACKNOWLEDGE_ALARM_INSTRUCTIONS_ARGS = {
  alarm_id: Scalars['Int']['input'];
  alarm_source: ALARM_SOURCE;
};

export type MUTATION_ADD_CREDIT_NOTE_ARGS = {
  customer_id: Scalars['Int']['input'];
  params: ADD_CREDIT_NOTE_PARAMS;
};

export type MUTATION_ADD_DEBIT_NOTE_ARGS = {
  customer_id: Scalars['Int']['input'];
  params: ADD_DEBIT_NOTE_PARAMS;
};

export type MUTATION_ADD_PAYMENT_ARGS = {
  customer_id: Scalars['Int']['input'];
  params: ADD_PAYMENT_PARAMS;
};

export type MUTATION_ASSIGN_AGENT_AREAS_ARGS = {
  areas?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type MUTATION_ASSIGN_RESPONDER_ARGS = {
  alarm_id: Scalars['Int']['input'];
  alarm_source: ALARM_SOURCE;
  offline_name?: InputMaybe<Scalars['String']['input']>;
  reassigning: Scalars['Boolean']['input'];
  responder_id?: InputMaybe<Scalars['Int']['input']>;
};

export type MUTATION_CANCEL_ALARM_ARGS = {
  alarm_id: Scalars['Int']['input'];
  alarm_source: ALARM_SOURCE;
  cancel_reason: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
};

export type MUTATION_CANCEL_REFUND_INVOICE_ARGS = {
  customer_id: Scalars['Int']['input'];
  invoice_id: Scalars['Int']['input'];
  params: CANCEL_REFUND_INVOICE_PARAMS;
};

export type MUTATION_CLOSE_ALARM_ARGS = {
  alarm_id: Scalars['Int']['input'];
  alarm_source: ALARM_SOURCE;
  close_reason: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
};

export type MUTATION_CLOSE_ALARMS_ARGS = {
  alarm_stack: ALARM_STACK;
  alarm_type?: InputMaybe<Scalars['String']['input']>;
  close_reason: Scalars['String']['input'];
};

export type MUTATION_CREATE_AGENT_ARGS = {
  params: AGENT_PARAMS;
};

export type MUTATION_CREATE_ALARM_TYPE_ARGS = {
  params: ALARM_TYPE_PARAMS;
};

export type MUTATION_CREATE_BILLING_SUBSCRIPTION_ARGS = {
  customer_id: Scalars['Int']['input'];
  params: CREATE_BILLING_SUBSCRIPTION_PARAMS;
};

export type MUTATION_CREATE_BILLING_SUBSCRIPTION_ITEM_ARGS = {
  customer_id: Scalars['Int']['input'];
  params: CREATE_BILLING_SUBSCRIPTION_ITEM_PARAMS;
  subscription_id: Scalars['Int']['input'];
};

export type MUTATION_CREATE_CUSTOMER_ACCOUNT_ARGS = {
  account_code?: InputMaybe<Scalars['String']['input']>;
  account_currency?: InputMaybe<CURRENCY_CODES>;
  account_description?: InputMaybe<Scalars['String']['input']>;
  account_manager_id?: InputMaybe<Scalars['Int']['input']>;
  billing_department_id?: InputMaybe<Scalars['Int']['input']>;
  contact_details: CUSTOMER_CONTACT_PARAMS;
  document_id_number?: InputMaybe<Scalars['String']['input']>;
  invoice_clubbing?: InputMaybe<INVOICE_CLUBBING>;
};

export type MUTATION_CREATE_CUSTOMER_PROPERTY_ARGS = {
  customer_first_name?: InputMaybe<Scalars['String']['input']>;
  customer_id: Scalars['Int']['input'];
  customer_last_name?: InputMaybe<Scalars['String']['input']>;
  params: UPDATE_PROPERTY_DETAILS_PARAMS;
};

export type MUTATION_CREATE_DECODER_ARGS = {
  params: CREATE_DECODER_INPUT;
};

export type MUTATION_CREATE_DISCOUNT_PRICE_ARGS = {
  discount_id: Scalars['Int']['input'];
  discount_price: CREATE_DISCOUNT_PRICE_INPUT;
};

export type MUTATION_CREATE_DISCOUNT_TEMPLATE_ARGS = {
  description: Scalars['String']['input'];
  discount_pricings?: InputMaybe<Array<CREATE_DISCOUNT_PRICE_INPUT>>;
  name: Scalars['String']['input'];
  tax_percentage: Scalars['String']['input'];
};

export type MUTATION_CREATE_INVOICE_TEMPLATE_ARGS = {
  customer_id: Scalars['Int']['input'];
  params: INVOICE_TEMPLATE_PARAMS;
};

export type MUTATION_CREATE_PAYMENT_OPTION_ARGS = {
  customer_id: Scalars['Int']['input'];
  params: BILLING_PAYMENT_OPTION_PARAMS;
};

export type MUTATION_CREATE_PRODUCT_PRICE_ARGS = {
  product_id: Scalars['Int']['input'];
  product_price: CREATE_PRODUCT_PRICE_INPUT;
};

export type MUTATION_CREATE_PRODUCT_TEMPLATE_ARGS = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  product_pricings?: InputMaybe<Array<CREATE_PRODUCT_PRICE_INPUT>>;
  tax_percentage: Scalars['String']['input'];
};

export type MUTATION_CREATE_PROPERTY_KEYHOLDER_ARGS = {
  customer_id: Scalars['Int']['input'];
  params: PROPERTY_KEYHOLDER_PARAMS;
  property_id: Scalars['Int']['input'];
  register_app: Scalars['Boolean']['input'];
};

export type MUTATION_CREATE_PROPERTY_ZONE_ARGS = {
  customer_id: Scalars['Int']['input'];
  params: PROPERTY_ZONE_PARAMS;
  property_id: Scalars['Int']['input'];
};

export type MUTATION_CREATE_RESPONDER_ARGS = {
  params: RESPONDER_PARAMS;
};

export type MUTATION_CREATE_ROLE_ARGS = {
  role: CREATE_ROLE_INPUT;
};

export type MUTATION_CREATE_SSP_AREA_ARGS = {
  area_name?: InputMaybe<Scalars['String']['input']>;
};

export type MUTATION_CREATE_TECHNICIAN_ARGS = {
  params: TECHNICIAN_PARAMS;
};

export type MUTATION_CREATE_TRANSMITTER_ARGS = {
  params: CREATE_TRANSMITTER_PARAMS;
};

export type MUTATION_DEBIT_ORDER_BULK_PROCESS_ARGS = {
  collection_day: Scalars['Int']['input'];
  collection_month: Scalars['Int']['input'];
  debit_order_format_type: Scalars['String']['input'];
};

export type MUTATION_DELETE_AGENT_ARGS = {
  agent_id: Scalars['Int']['input'];
};

export type MUTATION_DELETE_ALARM_TYPE_ARGS = {
  id: Scalars['Int']['input'];
};

export type MUTATION_DELETE_BILLING_SUBSCRIPTION_ARGS = {
  customer_id: Scalars['Int']['input'];
  end_date: Scalars['String']['input'];
  subscription_id: Scalars['Int']['input'];
};

export type MUTATION_DELETE_BILLING_SUBSCRIPTION_ITEM_ARGS = {
  customer_id: Scalars['Int']['input'];
  subscription_id: Scalars['Int']['input'];
  subscription_item_id: Scalars['Int']['input'];
};

export type MUTATION_DELETE_CUSTOMER_ACCOUNT_ARGS = {
  id: Scalars['Int']['input'];
};

export type MUTATION_DELETE_DECODER_ARGS = {
  id: Scalars['Int']['input'];
};

export type MUTATION_DELETE_DISCOUNT_PRICE_ARGS = {
  discount_id: Scalars['Int']['input'];
  price_id: Scalars['Int']['input'];
};

export type MUTATION_DELETE_DISCOUNT_TEMPLATE_ARGS = {
  id: Scalars['Int']['input'];
};

export type MUTATION_DELETE_INVOICE_TEMPLATE_ARGS = {
  customer_id: Scalars['Int']['input'];
  invoice_template_id: Scalars['Int']['input'];
};

export type MUTATION_DELETE_PAYMENT_OPTION_ARGS = {
  customer_id: Scalars['Int']['input'];
  payment_option_id: Scalars['Int']['input'];
};

export type MUTATION_DELETE_PRODUCT_PRICE_ARGS = {
  price_id: Scalars['Int']['input'];
  product_id: Scalars['Int']['input'];
};

export type MUTATION_DELETE_PRODUCT_TEMPLATE_ARGS = {
  id: Scalars['Int']['input'];
};

export type MUTATION_DELETE_PROPERTY_KEYHOLDER_ARGS = {
  customer_id: Scalars['Int']['input'];
  keyholder_id: Scalars['Int']['input'];
  property_id: Scalars['Int']['input'];
};

export type MUTATION_DELETE_PROPERTY_ZONE_ARGS = {
  property_id: Scalars['Int']['input'];
  zone_id: Scalars['Int']['input'];
};

export type MUTATION_DELETE_RESPONDER_ARGS = {
  id: Scalars['Int']['input'];
};

export type MUTATION_DELETE_ROLE_ARGS = {
  id: Scalars['Int']['input'];
};

export type MUTATION_DELETE_TECHNICIAN_ARGS = {
  id: Scalars['Int']['input'];
};

export type MUTATION_DISABLE_PROPERTY_TESTING_ARGS = {
  property_id: Scalars['Int']['input'];
};

export type MUTATION_DISCARD_SSP_AREA_ARGS = {
  area_id: Scalars['Int']['input'];
  reassign_to_area: Scalars['Int']['input'];
};

export type MUTATION_EMAIL_CUSTOMER_TRANSACTION_ARGS = {
  customer_id: Scalars['Int']['input'];
  email_body_text?: InputMaybe<Scalars['String']['input']>;
  transaction_id: Scalars['Int']['input'];
};

export type MUTATION_EMAIL_CUSTOMERS_INVOICES_ARGS = {
  email_body_text?: InputMaybe<Scalars['String']['input']>;
  invoice_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  month_of: Scalars['String']['input'];
};

export type MUTATION_EMAIL_CUSTOMERS_INVOICES_ADVANCED_ARGS = {
  params: EMAIL_CUSTOMERS_INVOICES_ADVANCED_PARAMS;
};

export type MUTATION_ENABLE_PROPERTY_TESTING_ARGS = {
  keyholder_id?: InputMaybe<Scalars['Int']['input']>;
  property_id: Scalars['Int']['input'];
  technician_id?: InputMaybe<Scalars['Int']['input']>;
  testing_time: Scalars['String']['input'];
};

export type MUTATION_GENERATE_CUSTOMER_STATEMENT_ARGS = {
  customer_id: Scalars['Int']['input'];
};

export type MUTATION_GENERATE_CUSTOMERS_INVOICES_ARGS = {
  invoice_date: Scalars['String']['input'];
  invoice_description: Scalars['String']['input'];
  month_of: Scalars['String']['input'];
};

export type MUTATION_GENERATE_DEBIT_ORDER_RUN_ARGS = {
  collection_day: Scalars['Int']['input'];
  collection_month: Scalars['Int']['input'];
  debit_order_format_type: Scalars['String']['input'];
};

export type MUTATION_GENERATE_REVENUE_REPORT_ARGS = {
  year: Scalars['String']['input'];
};

export type MUTATION_GENERATE_SSP_MONTHLY_BILLING_REPORT_ARGS = {
  billing_month: Scalars['String']['input'];
  billing_year: Scalars['String']['input'];
};

export type MUTATION_GROUP_CUSTOMER_INVOICES_ARGS = {
  customer_id: Scalars['Int']['input'];
  invoice_template_id: Scalars['Int']['input'];
};

export type MUTATION_INCREASE_ALARM_ARGS = {
  alarm_id: Scalars['Int']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
};

export type MUTATION_LOG_KEYHOLDER_CALL_ARGS = {
  alarm_id: Scalars['Int']['input'];
  keyholder_id: Scalars['Int']['input'];
  keyholder_was_reached: Scalars['Boolean']['input'];
  password_verified: Scalars['Boolean']['input'];
};

export type MUTATION_LOG_SECURITY_QUESTION_ARGS = {
  alarm_id: Scalars['Int']['input'];
  alarm_source: ALARM_SOURCE;
  answer: SECURITY_QUESTION_ANSWER;
};

export type MUTATION_LOGIN_ARGS = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MUTATION_LOGIN_CONTROL_ROOM_ARGS = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  user_type: USER_TYPE;
};

export type MUTATION_LOGIN_USER_ARGS = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MUTATION_LOGOUT_CONTROL_ROOM_ARGS = {
  user_type?: InputMaybe<USER_TYPE>;
};

export type MUTATION_PAUSE_BILLING_SUBSCRIPTION_ARGS = {
  customer_id: Scalars['Int']['input'];
  pause_date: Scalars['String']['input'];
  resume_date: Scalars['String']['input'];
  subscription_id: Scalars['Int']['input'];
};

export type MUTATION_REGENERATE_CUSTOMERS_INVOICES_ARGS = {
  customer_id: Scalars['Int']['input'];
  invoice_date: Scalars['String']['input'];
  invoice_description: Scalars['String']['input'];
  month_of: Scalars['String']['input'];
};

export type MUTATION_REGENERATE_ONE_TIME_INVOICE_ARGS = {
  customer_id: Scalars['Int']['input'];
  invoice_id: Scalars['Int']['input'];
};

export type MUTATION_REJECT_BILLING_TRANSACTION_ARGS = {
  customer_id: Scalars['Int']['input'];
  invoice_id?: InputMaybe<Scalars['Int']['input']>;
  transaction_id: Scalars['Int']['input'];
};

export type MUTATION_SET_ZONE_ON_HOLD_MODE_ARGS = {
  on_hold_time: Scalars['String']['input'];
  property_id: Scalars['Int']['input'];
  zone_id: Scalars['Int']['input'];
};

export type MUTATION_TRANSFER_TRANSACTION_ARGS = {
  customer_id: Scalars['Int']['input'];
  params: TRANSFER_TRANSACTION_PARAMS;
};

export type MUTATION_UNASSIGN_AGENT_AREAS_ARGS = {
  areas?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type MUTATION_UPDATE_AGENT_ARGS = {
  id: Scalars['Int']['input'];
  params: AGENT_PARAMS;
};

export type MUTATION_UPDATE_AGENT_ROLE_ARGS = {
  id: Scalars['Int']['input'];
  role_id: Scalars['Int']['input'];
};

export type MUTATION_UPDATE_ALARM_NOTES_ARGS = {
  alarm_id: Scalars['Int']['input'];
  alarm_source: ALARM_SOURCE;
  notes: Scalars['String']['input'];
};

export type MUTATION_UPDATE_ALARM_TYPE_ARGS = {
  id: Scalars['Int']['input'];
  params: ALARM_TYPE_PARAMS;
};

export type MUTATION_UPDATE_BILLING_SUBSCRIPTION_ARGS = {
  customer_id: Scalars['Int']['input'];
  params: UPDATE_BILLING_SUBSCRIPTION_PARAMS;
  subscription_id: Scalars['Int']['input'];
};

export type MUTATION_UPDATE_BILLING_SUBSCRIPTION_ITEM_ARGS = {
  customer_id: Scalars['Int']['input'];
  params: UPDATE_BILLING_SUBSCRIPTION_ITEM_PARAMS;
  subscription_id: Scalars['Int']['input'];
  subscription_item_id: Scalars['Int']['input'];
};

export type MUTATION_UPDATE_CUSTOMER_ACCOUNT_ARGS = {
  account_code?: InputMaybe<Scalars['String']['input']>;
  account_currency?: InputMaybe<CURRENCY_CODES>;
  account_description?: InputMaybe<Scalars['String']['input']>;
  account_manager_id?: InputMaybe<Scalars['Int']['input']>;
  billing_department_id?: InputMaybe<Scalars['Int']['input']>;
  contact_details: CUSTOMER_CONTACT_PARAMS;
  document_id_number?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  invoice_clubbing?: InputMaybe<INVOICE_CLUBBING>;
};

export type MUTATION_UPDATE_CUSTOMER_CONTACT_ARGS = {
  id: Scalars['Int']['input'];
  params: CUSTOMER_CONTACT_PARAMS;
};

export type MUTATION_UPDATE_CUSTOMER_INVOICE_ARGS = {
  customer_id: Scalars['Int']['input'];
  invoice_id: Scalars['Int']['input'];
  params: UPDATE_CUSTOMER_INVOICE_PARAMS;
};

export type MUTATION_UPDATE_CUSTOMER_STATUS_ARGS = {
  customer_id: Scalars['Int']['input'];
  params: UPDATE_CUSTOMER_STATUS_PARAMS;
};

export type MUTATION_UPDATE_DECODER_ARGS = {
  params: UPDATE_DECODER_INPUT;
};

export type MUTATION_UPDATE_DISCOUNT_PRICE_ARGS = {
  discount_id: Scalars['Int']['input'];
  price_excl_tax: Scalars['String']['input'];
  price_id: Scalars['Int']['input'];
};

export type MUTATION_UPDATE_DISCOUNT_TEMPLATE_ARGS = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  tax_percentage?: InputMaybe<Scalars['String']['input']>;
};

export type MUTATION_UPDATE_INVOICE_TEMPLATE_ARGS = {
  customer_id: Scalars['Int']['input'];
  invoice_template_id: Scalars['Int']['input'];
  params: INVOICE_TEMPLATE_PARAMS;
};

export type MUTATION_UPDATE_PAYMENT_OPTION_ARGS = {
  customer_id: Scalars['Int']['input'];
  params: BILLING_PAYMENT_OPTION_PARAMS;
  payment_option_id: Scalars['Int']['input'];
};

export type MUTATION_UPDATE_PRODUCT_PRICE_ARGS = {
  price_excl_tax: Scalars['String']['input'];
  price_id: Scalars['Int']['input'];
  product_id: Scalars['Int']['input'];
};

export type MUTATION_UPDATE_PRODUCT_TEMPLATE_ARGS = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  tax_percentage?: InputMaybe<Scalars['String']['input']>;
};

export type MUTATION_UPDATE_PROPERTY_DETAILS_ARGS = {
  customer_first_name?: InputMaybe<Scalars['String']['input']>;
  customer_id: Scalars['Int']['input'];
  customer_last_name?: InputMaybe<Scalars['String']['input']>;
  params: UPDATE_PROPERTY_DETAILS_PARAMS;
  property_id: Scalars['Int']['input'];
};

export type MUTATION_UPDATE_PROPERTY_KEYHOLDER_ARGS = {
  customer_id: Scalars['Int']['input'];
  keyholder_id: Scalars['Int']['input'];
  params: PROPERTY_KEYHOLDER_PARAMS;
  property_id: Scalars['Int']['input'];
  register_app: Scalars['Boolean']['input'];
};

export type MUTATION_UPDATE_PROPERTY_KEYHOLDER_CALL_ORDER_ARGS = {
  customer_id: Scalars['Int']['input'];
  keyholder_ids_priority: Array<Scalars['Int']['input']>;
  property_id: Scalars['Int']['input'];
};

export type MUTATION_UPDATE_PROPERTY_SCHEDULE_ARGS = {
  customer_id: Scalars['Int']['input'];
  property_id: Scalars['Int']['input'];
  schedules: Array<PROPERTY_TIME_SCHEDULE_PARAMS>;
};

export type MUTATION_UPDATE_PROPERTY_STATUS_ARGS = {
  params: UPDATE_PROPERTY_STATUS_PARAMS;
  property_id: Scalars['Int']['input'];
};

export type MUTATION_UPDATE_PROPERTY_ZONE_ARGS = {
  customer_id: Scalars['Int']['input'];
  params: PROPERTY_ZONE_PARAMS;
  property_id: Scalars['Int']['input'];
  zone_id: Scalars['Int']['input'];
};

export type MUTATION_UPDATE_RESPONDER_ARGS = {
  id: Scalars['Int']['input'];
  params: RESPONDER_PARAMS;
};

export type MUTATION_UPDATE_ROLE_ARGS = {
  id: Scalars['Int']['input'];
  params: UPDATE_ROLE_INPUT;
};

export type MUTATION_UPDATE_SSP_AREA_ARGS = {
  area_id: Scalars['Int']['input'];
  area_name?: InputMaybe<Scalars['String']['input']>;
};

export type MUTATION_UPDATE_SSP_COMPANY_DETAILS_ARGS = {
  params: SSP_COMPANY_DETAILS_INPUT;
};

export type MUTATION_UPDATE_TECHNICIAN_ARGS = {
  id: Scalars['Int']['input'];
  params: TECHNICIAN_PARAMS;
};

export type MUTATION_UPDATE_TRANSMITTER_ARGS = {
  id: Scalars['Int']['input'];
  params: UPDATE_TRANSMITTER_PARAMS;
};

export type MUTATION_UPDATE_TRANSMITTER_STATUS_ARGS = {
  id: Scalars['Int']['input'];
  property_id?: InputMaybe<Scalars['Int']['input']>;
  status: TRANSMITTER_STATUS;
};

export type MUTATION_VOIP_END_CALL_ARGS = {
  channel_id: Scalars['String']['input'];
  pbx_url: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type MUTATION_VOIP_HEARTBEAT_ARGS = {
  pbx_url: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type MUTATION_VOIP_LOG_CALL_ARGS = {
  alarm_id: Scalars['Int']['input'];
  client_id: Scalars['Int']['input'];
  keyholder_id: Scalars['Int']['input'];
  keyholder_was_reached: Scalars['Boolean']['input'];
};

export type MUTATION_VOIP_START_CALL_ARGS = {
  extension: Scalars['String']['input'];
  number: Scalars['String']['input'];
  pbx_url: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type QUERY = {
  account_suspension_reasons: Array<ACCOUNT_SUSPENSION_REASON>;
  agent: AGENT;
  agents: FETCH_AGENTS_RESPONSE;
  agents_statistics: Array<AGENTS_PERFORMANCE>;
  alarm: ALARM;
  alarm_logs: Array<ALARM_LOG>;
  alarm_types: FETCH_ALARM_TYPES_RESPONSE;
  alarms: FETCH_ALARMS_RESPONSE;
  areas: FETCH_AREAS_RESPONSE;
  billing_departments: BILLING_DEPARTMENT_RESPONSE;
  customer_billing_invoice_template: BILLING_INVOICE_TEMPLATE;
  customer_billing_subscription: BILLING_SUBSCRIPTION;
  customer_billing_subscriptions?: Maybe<Array<BILLING_SUBSCRIPTION>>;
  customer_property: FETCH_CUSTOMER_PROPERTY_RESPONSE;
  customer_suspension_reasons: Array<Maybe<SUSPENSION_REASONS>>;
  decoder: FETCH_DECODER_RESPONSE;
  decoders: FETCH_DECODERS_RESPONSE;
  discount_templates: FETCH_DISCOUNT_TEMPLATES_RESPONSE;
  fetch_areas_status: FETCH_AREAS_STATUS_RESPONSE;
  fetch_available_payment_methods: Array<Scalars['String']['output']>;
  fetch_billing_transactions: BILLING_TRANSACTIONS_RESPONSE;
  fetch_customer_account: CUSTOMER;
  fetch_customer_invoice: CUSTOMER_TRANSACTIONS_INVOICE;
  fetch_customer_invoices: CUSTOMER_INVOICES_RESPONSE;
  fetch_customers: FETCH_CUSTOMERS_RESPONSE;
  fetch_debit_order_exports: Array<DEBIT_ORDER_EXPORT>;
  fetch_ssp_invoices: CUSTOMER_INVOICES_RESPONSE;
  fetch_ssp_reports?: Maybe<FETCH_SSP_REPORTS_RESPONSE>;
  fetch_system_change_types?: Maybe<Array<Scalars['String']['output']>>;
  fetch_system_events_audit: SYSTEM_EVENTS_AUDIT_RESPONSE;
  fetch_technicians: Array<TECHNICIAN>;
  generate_customers_keyholders_report: Scalars['Boolean']['output'];
  generate_customers_properties_report: Scalars['Boolean']['output'];
  generate_false_alarms_report: Scalars['Boolean']['output'];
  generate_home_alarm_report: Scalars['Boolean']['output'];
  generate_ob_stats_report: Scalars['Boolean']['output'];
  generate_overactive_alarms_report: Scalars['Boolean']['output'];
  generate_responders_delegations_report: Scalars['Boolean']['output'];
  generate_transmitters_stock_report: Scalars['Boolean']['output'];
  generate_work_shift_report: Scalars['Boolean']['output'];
  history_alarms: HISTORY_ALARMS_RESPONSE;
  permissions: FETCH_PERMISSIONS_RESPONSE;
  product_templates: FETCH_PRODUCT_TEMPLATES_RESPONSE;
  responder: RESPONDER;
  responders: Array<RESPONDER>;
  responders_statistics: Array<RESPONDERS_PERFORMANCE>;
  roles: FETCH_ROLES_RESPONSE;
  ssp_company_details: SSP_COMPANY_DETAILS;
  transmitter: FETCH_TRANSMITTER_RESPONSE;
  transmitters: FETCH_TRANSMITTERS_RESPONSE;
  validate_heartbeat: VALIDATE_HEARTBEAT_RESPONSE;
};

export type QUERY_AGENT_ARGS = {
  agent_id: Scalars['Int']['input'];
};

export type QUERY_AGENTS_STATISTICS_ARGS = {
  params: FETCH_AGENTS_STATISTICS_PARAMS;
};

export type QUERY_ALARM_ARGS = {
  id: Scalars['Int']['input'];
  source?: InputMaybe<ALARM_SOURCE>;
};

export type QUERY_ALARM_LOGS_ARGS = {
  alarm_id: Scalars['Int']['input'];
  alarm_source: ALARM_SOURCE;
};

export type QUERY_ALARM_TYPES_ARGS = {
  pagination: PAGINATION_INPUT;
};

export type QUERY_ALARMS_ARGS = {
  alarm_stack: ALARM_STACK;
};

export type QUERY_AREAS_ARGS = {
  pagination: PAGINATION_INPUT;
};

export type QUERY_CUSTOMER_BILLING_INVOICE_TEMPLATE_ARGS = {
  customer_id: Scalars['Int']['input'];
  invoice_template_id: Scalars['Int']['input'];
};

export type QUERY_CUSTOMER_BILLING_SUBSCRIPTION_ARGS = {
  customer_id: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
};

export type QUERY_CUSTOMER_BILLING_SUBSCRIPTIONS_ARGS = {
  customer_id: Scalars['Int']['input'];
};

export type QUERY_CUSTOMER_PROPERTY_ARGS = {
  property_id: Scalars['Int']['input'];
};

export type QUERY_DECODER_ARGS = {
  id: Scalars['Int']['input'];
};

export type QUERY_DECODERS_ARGS = {
  pagination: PAGINATION_INPUT;
};

export type QUERY_DISCOUNT_TEMPLATES_ARGS = {
  currency?: InputMaybe<CURRENCY_CODES>;
};

export type QUERY_FETCH_BILLING_TRANSACTIONS_ARGS = {
  customer_id: Scalars['Int']['input'];
  pagination: PAGINATION_INPUT;
};

export type QUERY_FETCH_CUSTOMER_ACCOUNT_ARGS = {
  id: Scalars['Int']['input'];
};

export type QUERY_FETCH_CUSTOMER_INVOICE_ARGS = {
  customer_id: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
};

export type QUERY_FETCH_CUSTOMER_INVOICES_ARGS = {
  customer_id: Scalars['Int']['input'];
  pagination: PAGINATION_INPUT;
  params?: InputMaybe<FETCH_INVOICES_PARAMS>;
};

export type QUERY_FETCH_CUSTOMERS_ARGS = {
  pagination: PAGINATION_INPUT;
  search_params?: InputMaybe<CUSTOMERS_SEARCH_PARAMS>;
};

export type QUERY_FETCH_SSP_INVOICES_ARGS = {
  pagination: PAGINATION_INPUT;
  params?: InputMaybe<FETCH_INVOICES_PARAMS>;
};

export type QUERY_FETCH_SSP_REPORTS_ARGS = {
  pagination: PAGINATION_INPUT;
};

export type QUERY_FETCH_SYSTEM_EVENTS_AUDIT_ARGS = {
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  pagination: PAGINATION_INPUT;
  params?: InputMaybe<SYSTEM_EVENTS_AUDIT_SEARCH_PARAMS>;
};

export type QUERY_GENERATE_CUSTOMERS_KEYHOLDERS_REPORT_ARGS = {
  area_ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  property_active?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QUERY_GENERATE_CUSTOMERS_PROPERTIES_REPORT_ARGS = {
  area_ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  property_active?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QUERY_GENERATE_FALSE_ALARMS_REPORT_ARGS = {
  alarm_type?: InputMaybe<Scalars['String']['input']>;
  area_ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_from?: InputMaybe<Scalars['String']['input']>;
  date_to?: InputMaybe<Scalars['String']['input']>;
};

export type QUERY_GENERATE_HOME_ALARM_REPORT_ARGS = {
  alarm_type?: InputMaybe<Scalars['String']['input']>;
  area_ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_from?: InputMaybe<Scalars['String']['input']>;
  date_to?: InputMaybe<Scalars['String']['input']>;
};

export type QUERY_GENERATE_OB_STATS_REPORT_ARGS = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  alarm_type?: InputMaybe<Scalars['String']['input']>;
  area_ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_from?: InputMaybe<Scalars['String']['input']>;
  date_to?: InputMaybe<Scalars['String']['input']>;
};

export type QUERY_GENERATE_OVERACTIVE_ALARMS_REPORT_ARGS = {
  alarm_type?: InputMaybe<Scalars['String']['input']>;
  area_ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_from?: InputMaybe<Scalars['String']['input']>;
  date_to?: InputMaybe<Scalars['String']['input']>;
};

export type QUERY_GENERATE_RESPONDERS_DELEGATIONS_REPORT_ARGS = {
  area_ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_from?: InputMaybe<Scalars['String']['input']>;
  date_to?: InputMaybe<Scalars['String']['input']>;
};

export type QUERY_GENERATE_TRANSMITTERS_STOCK_REPORT_ARGS = {
  area_ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  decoder_name?: InputMaybe<Scalars['String']['input']>;
  transmitter_status?: InputMaybe<TRANSMITTER_STATUS>;
};

export type QUERY_GENERATE_WORK_SHIFT_REPORT_ARGS = {
  date_from: Scalars['String']['input'];
  date_to: Scalars['String']['input'];
  day_shift_start: Scalars['String']['input'];
  night_shift_start: Scalars['String']['input'];
};

export type QUERY_HISTORY_ALARMS_ARGS = {
  pagination: PAGINATION_INPUT;
  search_params?: InputMaybe<HISTORY_ALARMS_PARAMS>;
};

export type QUERY_PRODUCT_TEMPLATES_ARGS = {
  currency?: InputMaybe<CURRENCY_CODES>;
};

export type QUERY_RESPONDER_ARGS = {
  id: Scalars['Int']['input'];
};

export type QUERY_RESPONDERS_STATISTICS_ARGS = {
  params: FETCH_RESPONDERS_STATISTICS_PARAMS;
};

export type QUERY_TRANSMITTER_ARGS = {
  id: Scalars['Int']['input'];
};

export type QUERY_TRANSMITTERS_ARGS = {
  pagination: PAGINATION_INPUT;
  search_params?: InputMaybe<FETCH_TRANSMITTERS_PARAMS>;
};

export type SUBSCRIPTION = {
  alarms_updated?: Maybe<Scalars['Boolean']['output']>;
};

export type SUBSCRIPTION_ALARMS_UPDATED_ARGS = {
  alarm_stack: ALARM_STACK;
};

export type ACCOUNT_SUSPENSION_REASON = {
  id: Scalars['Int']['output'];
  reason: Scalars['String']['output'];
};

export type ADD_CREDIT_NOTE_PARAMS = {
  actual_payment_method?: InputMaybe<Scalars['String']['input']>;
  amount: Scalars['String']['input'];
  invoice_ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  paid_on?: InputMaybe<Scalars['String']['input']>;
  payment_reference_number?: InputMaybe<Scalars['String']['input']>;
};

export type ADD_DEBIT_NOTE_PARAMS = {
  actual_payment_method?: InputMaybe<Scalars['String']['input']>;
  amount: Scalars['String']['input'];
  invoice_id?: InputMaybe<Scalars['Int']['input']>;
  paid_on?: InputMaybe<Scalars['String']['input']>;
  payment_reference_number?: InputMaybe<Scalars['String']['input']>;
};

export type ADD_PAYMENT_PARAMS = {
  actual_payment_method?: InputMaybe<Scalars['String']['input']>;
  amount: Scalars['String']['input'];
  invoice_id?: InputMaybe<Scalars['Int']['input']>;
  paid_on?: InputMaybe<Scalars['String']['input']>;
  payment_reference_number?: InputMaybe<Scalars['String']['input']>;
};

export type AGENT = {
  created_at?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  role_id?: Maybe<Scalars['Int']['output']>;
  ssp?: Maybe<SSP>;
  status?: Maybe<AGENT_STATUS>;
  type?: Maybe<USER_TYPE>;
  updated_at?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  voip?: Maybe<AGENT_VOIP>;
};

export type AGENT_ADMIN_RESPONSE = {
  created_at: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
};

export type AGENT_PARAMS = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  password_confirmation?: InputMaybe<Scalars['String']['input']>;
  role_id?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type AGENT_STATUS = 'INTERRUPTED' | 'OFFLINE' | 'ONLINE';

export type AGENT_VOIP = {
  enabled: Scalars['Boolean']['output'];
  extension: Scalars['String']['output'];
  pbx_url: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type AGENTS_PERFORMANCE = {
  acknowledge_times: Scalars['Float']['output'];
  call_times: Scalars['Float']['output'];
  dispatch_times: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  late_alarms: Scalars['Float']['output'];
  name?: Maybe<Scalars['String']['output']>;
  save_times: Scalars['Float']['output'];
  total_alarms: Scalars['Float']['output'];
};

export type ALARM = {
  alarm_state: ALARM_STATE;
  assigned_agents: Array<ASSIGNED_AGENT>;
  assigned_responders: Array<ASSIGNED_RESPONDER>;
  customer?: Maybe<CUSTOMER>;
  id: Scalars['Int']['output'];
  incident_report?: Maybe<ALARM_INCIDENT_REPORT>;
  keyholder_logs: Array<ALARM_KEYHOLDER_LOG>;
  notes: Array<ALARM_NOTE>;
  panel_information?: Maybe<PANEL_INFORMATION>;
  priority: Scalars['Int']['output'];
  procedure_timestamps: ALARM_PROCEDURE_TIMESTAMPS;
  property: CUSTOMER_PROPERTY;
  source: ALARM_SOURCE;
  triggered_transmitter?: Maybe<TRANSMITTER>;
  triggered_zones: Array<PROPERTY_ZONE>;
  type: Scalars['String']['output'];
};

export type ALARM_INCIDENT_REPORT = {
  alarm_id?: Maybe<Scalars['Int']['output']>;
  all_in_order?: Maybe<Scalars['Boolean']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  damage?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  false_alarm?: Maybe<Scalars['Boolean']['output']>;
  handed_over_to_police_or_ems?: Maybe<Scalars['Boolean']['output']>;
  home_alarm_id?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  incident_report_images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  no_visible_intrusion?: Maybe<Scalars['Boolean']['output']>;
  open_door?: Maybe<Scalars['Boolean']['output']>;
  open_garage?: Maybe<Scalars['Boolean']['output']>;
  open_window?: Maybe<Scalars['Boolean']['output']>;
  possible_intrusion?: Maybe<Scalars['Boolean']['output']>;
  property_accessed?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  vagrants_in_area?: Maybe<Scalars['Boolean']['output']>;
};

export type ALARM_KEYHOLDER_LOG = {
  client_keyholder_id?: Maybe<Scalars['Int']['output']>;
  created_at: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  keyholder_name?: Maybe<Scalars['String']['output']>;
  keyholder_phone?: Maybe<Scalars['String']['output']>;
  password_verified?: Maybe<Scalars['Boolean']['output']>;
  reached?: Maybe<Scalars['Boolean']['output']>;
};

export type ALARM_LOG = {
  agent_name?: Maybe<Scalars['String']['output']>;
  alarm_id?: Maybe<Scalars['Int']['output']>;
  created_at: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  level?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  panic_alarm_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type ALARM_NOTE = {
  agent_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  note?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type ALARM_PROCEDURE_TIMESTAMPS = {
  agent_acknowledged_instructions_at?: Maybe<Scalars['String']['output']>;
  agent_phoned_first_keyholder_at?: Maybe<Scalars['String']['output']>;
  alarm_completed_at?: Maybe<Scalars['String']['output']>;
  alarm_reopened_at?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['String']['output'];
  customer_verified_password_at?: Maybe<Scalars['String']['output']>;
  keyholder_cancelled_at?: Maybe<Scalars['String']['output']>;
  keyholder_confirmed_emergency_at?: Maybe<Scalars['String']['output']>;
  responder_arrived_at?: Maybe<Scalars['String']['output']>;
  responder_closed_report_at?: Maybe<Scalars['String']['output']>;
  responder_dispatched_at?: Maybe<Scalars['String']['output']>;
  responder_enroute_at?: Maybe<Scalars['String']['output']>;
  responder_saved_property_at?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type ALARM_SOURCE = 'RESPONDER_APP' | 'TRANSMITTER' | 'USER_APP';

export type ALARM_STACK = 'EMERGENCY' | 'ENROUTE' | 'NON_EMERGENCY';

export type ALARM_STATE =
  | 'AGENT_ACKNOWLEDGED_INSTRUCTIONS'
  | 'AGENT_PHONED_FIRST_KEYHOLDER'
  | 'ALARM_COMPLETED'
  | 'ALARM_CREATED'
  | 'ALARM_REOPENED'
  | 'KEYHOLDER_CANCELLED'
  | 'KEYHOLDER_CONFIRMED_EMERGENCY'
  | 'RESPONDER_ARRIVED'
  | 'RESPONDER_DISPATCHED'
  | 'RESPONDER_ENROUTE'
  | 'RESPONDER_SAVED_PROPERTY';

export type ALARM_TYPE = {
  alarm_description?: Maybe<Scalars['String']['output']>;
  alarm_type_name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  history: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  message_to_user?: Maybe<Scalars['String']['output']>;
  non_emc: Scalars['Boolean']['output'];
  priority: Scalars['Int']['output'];
  sends_push_notifications: Scalars['Boolean']['output'];
};

export type ALARM_TYPE_MUTATION_RESPONSE = {
  alarm_type?: Maybe<ALARM_TYPE>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type ALARM_TYPE_PARAMS = {
  alarm_description?: InputMaybe<Scalars['String']['input']>;
  alarm_type_name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  history: Scalars['Boolean']['input'];
  message_to_user?: InputMaybe<Scalars['String']['input']>;
  non_emc: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  sends_push_notifications: Scalars['Boolean']['input'];
};

export type AREA = {
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type AREA_ASSIGNMENT = {
  active_alarms_count?: Maybe<Scalars['Int']['output']>;
  assigned_agents_count?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
};

export type AREA_MUTATION_RESPONSE = {
  area?: Maybe<AREA>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type ASSIGN_AGENT_AREAS_INPUT = {
  areas?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type ASSIGN_AGENT_AREAS_RESPONSE = {
  areas?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type ASSIGNED_AGENT = {
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type ASSIGNED_RESPONDER = {
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  offline: Scalars['Boolean']['output'];
};

export type BANK_ACCOUNT_TYPE = 'checking' | 'savings';

export type BILLING_ACCOUNT_TYPE = 'bank' | 'card';

export type BILLING_DEPARTMENT = {
  created_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type BILLING_DEPARTMENT_RESPONSE = {
  departments: Array<BILLING_DEPARTMENT>;
  pagination: PAGINATION;
};

export type BILLING_INVOICE_TEMPLATE = {
  billing_address: Scalars['String']['output'];
  billing_payment_option?: Maybe<BILLING_PAYMENT_OPTION>;
  billing_payment_option_id?: Maybe<Scalars['Int']['output']>;
  cc_email?: Maybe<Scalars['String']['output']>;
  collection_day_of_month?: Maybe<Scalars['Int']['output']>;
  company_name?: Maybe<Scalars['String']['output']>;
  company_registration_number?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  invoice_due_days?: Maybe<Scalars['Int']['output']>;
  legal_name: Scalars['String']['output'];
  payment_method?: Maybe<Scalars['String']['output']>;
  vat_number?: Maybe<Scalars['String']['output']>;
};

export type BILLING_ITEM = {
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  type: BILLING_ITEM_TYPE;
};

export type BILLING_ITEM_PRICE = {
  active?: Maybe<Scalars['Boolean']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  currency: CURRENCY_CODES;
  discarded_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  price_excl_tax: Scalars['String']['output'];
  recurrence: BILLING_RECURRENCE;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type BILLING_ITEM_TYPE = 'discount' | 'product';

export type BILLING_PAYMENT_OPTION = {
  account_owner_first_name: Scalars['String']['output'];
  account_owner_last_name: Scalars['String']['output'];
  account_owner_phone: Scalars['String']['output'];
  account_type: BILLING_ACCOUNT_TYPE;
  bank_account_type?: Maybe<BANK_ACCOUNT_TYPE>;
  bank_code?: Maybe<Scalars['String']['output']>;
  card_type?: Maybe<CARD_TYPE>;
  decrypted_bank_account_number?: Maybe<Scalars['String']['output']>;
  decrypted_card_number?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  expiry_date?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
};

export type BILLING_PAYMENT_OPTION_PARAMS = {
  account_owner_first_name: Scalars['String']['input'];
  account_owner_last_name: Scalars['String']['input'];
  account_owner_phone: Scalars['String']['input'];
  account_type: BILLING_ACCOUNT_TYPE;
  bank_account_number?: InputMaybe<Scalars['String']['input']>;
  bank_account_type?: InputMaybe<BANK_ACCOUNT_TYPE>;
  bank_code?: InputMaybe<Scalars['String']['input']>;
  card_number?: InputMaybe<Scalars['String']['input']>;
  card_type?: InputMaybe<CARD_TYPE>;
  description: Scalars['String']['input'];
  expiry_date?: InputMaybe<Scalars['String']['input']>;
};

export type BILLING_RECURRENCE =
  | 'annually'
  | 'bi_annually'
  | 'monthly'
  | 'one_time'
  | 'quarterly';

export type BILLING_SUBSCRIPTION = {
  billing_invoice_template?: Maybe<BILLING_INVOICE_TEMPLATE>;
  billing_invoice_template_id?: Maybe<Scalars['Int']['output']>;
  billing_subscription_items?: Maybe<Array<Maybe<BILLING_SUBSCRIPTION_ITEM>>>;
  company_annual_increase?: Maybe<Scalars['String']['output']>;
  customer_id?: Maybe<Scalars['Int']['output']>;
  deactivated_on?: Maybe<Scalars['String']['output']>;
  deactivation_reason?: Maybe<Scalars['String']['output']>;
  derived_status_as_of: SUBSCRIPTION_STATUS;
  effective_end_date?: Maybe<Scalars['String']['output']>;
  effective_start_date?: Maybe<Scalars['String']['output']>;
  frequency: BILLING_RECURRENCE;
  id: Scalars['Int']['output'];
  individual_increase_rate?: Maybe<Scalars['String']['output']>;
  initial_total_amount?: Maybe<Scalars['String']['output']>;
  last_invoice_generated_on?: Maybe<Scalars['String']['output']>;
  latest_total_amount?: Maybe<Scalars['String']['output']>;
  next_execution_on?: Maybe<Scalars['String']['output']>;
  paused_on?: Maybe<Scalars['String']['output']>;
  resumed_on?: Maybe<Scalars['String']['output']>;
  status: SUBSCRIPTION_STATUS;
  title: Scalars['String']['output'];
  total_tax?: Maybe<Scalars['String']['output']>;
};

export type BILLING_SUBSCRIPTION_ITEM = {
  created_at?: Maybe<Scalars['String']['output']>;
  current_price: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  pricing_id: Scalars['Int']['output'];
  property?: Maybe<CUSTOMER_PROPERTY>;
  quantity: Scalars['Int']['output'];
  starting_price?: Maybe<Scalars['String']['output']>;
  template: BILLING_ITEM;
  type: BILLING_ITEM_TYPE;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type BILLING_TRANSACTION = {
  amount?: Maybe<Scalars['String']['output']>;
  balance?: Maybe<Scalars['String']['output']>;
  billing_account_id?: Maybe<Scalars['Int']['output']>;
  billing_invoice_ids?: Maybe<Array<Scalars['Int']['output']>>;
  billing_invoices?: Maybe<Array<BILLING_TRANSACTION_INVOICE>>;
  cancelation_reference_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<CURRENCY_CODES>;
  description?: Maybe<Scalars['String']['output']>;
  document_type: TRANSACTION_DOCUMENT_TYPE;
  id: Scalars['Int']['output'];
  transaction_status?: Maybe<Scalars['String']['output']>;
  transaction_type: TRANSACTION_TYPE;
};

export type BILLING_TRANSACTION_INVOICE = {
  due_date?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  number?: Maybe<Scalars['String']['output']>;
  reference_number?: Maybe<Scalars['String']['output']>;
};

export type BILLING_TRANSACTIONS_RESPONSE = {
  pagination: PAGINATION;
  transactions: Array<BILLING_TRANSACTION>;
};

export type CANCEL_REFUND_INVOICE_PARAMS = {
  type: CANCEL_REFUND_INVOICE_TYPE;
};

export type CANCEL_REFUND_INVOICE_TYPE = 'canceled' | 'refunded';

export type CARD_TYPE = 'american_express' | 'discover' | 'mastercard' | 'visa';

export type COMPANY_REPORT_TYPE =
  | 'CUSTOMERS_KEYHOLDERS'
  | 'CUSTOMERS_PROPERTIES'
  | 'FALSE_ALARMS'
  | 'HOME_ALARM'
  | 'OB_STATS'
  | 'OVERACTIVE_ALARMS'
  | 'RESPONDERS_DELEGATIONS'
  | 'TRANSMITTERS_STOCK'
  | 'UNKNOWN'
  | 'WORK_SHIFT';

export type COORDINATES = {
  latitude: Scalars['String']['output'];
  longitude: Scalars['String']['output'];
};

export type COORDINATES_INPUT = {
  latitude: Scalars['String']['input'];
  longitude: Scalars['String']['input'];
};

export type CREATE_AGENT = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  password_confirmation?: InputMaybe<Scalars['String']['input']>;
};

export type CREATE_AREA_INPUT = {
  area_name?: InputMaybe<Scalars['String']['input']>;
};

export type CREATE_BILLING_SUBSCRIPTION_ITEM_PARAMS = {
  billing_product_pricing_id: Scalars['Int']['input'];
  billing_property_id: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  starting_price?: InputMaybe<Scalars['String']['input']>;
};

export type CREATE_BILLING_SUBSCRIPTION_PARAMS = {
  billing_invoice_template_id?: InputMaybe<Scalars['Int']['input']>;
  billing_items?: InputMaybe<
    Array<InputMaybe<CREATE_BILLING_SUBSCRIPTION_ITEM_PARAMS>>
  >;
  effective_end_date?: InputMaybe<Scalars['String']['input']>;
  effective_start_date?: InputMaybe<Scalars['String']['input']>;
  frequency: BILLING_RECURRENCE;
  individual_increase_rate?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SUBSCRIPTION_STATUS>;
  title: Scalars['String']['input'];
};

export type CREATE_CUSTOMER_ACCOUNT_RESPONSE = {
  customer_id: Scalars['Int']['output'];
};

export type CREATE_DECODER_INPUT = {
  decoder_name: Scalars['String']['input'];
};

export type CREATE_DISCOUNT_PRICE_INPUT = {
  currency: CURRENCY_CODES;
  price_excl_tax: Scalars['String']['input'];
  recurrence: BILLING_RECURRENCE;
};

export type CREATE_PRODUCT_PRICE_INPUT = {
  currency: CURRENCY_CODES;
  price_excl_tax: Scalars['String']['input'];
  recurrence: BILLING_RECURRENCE;
};

export type CREATE_ROLE_INPUT = {
  name: Scalars['String']['input'];
  permission_ids: Array<Scalars['Int']['input']>;
};

export type CREATE_TRANSMITTER_PARAMS = {
  area_id?: InputMaybe<Scalars['Int']['input']>;
  decoder_name: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  heartbeat_interval?: InputMaybe<Scalars['Float']['input']>;
  number: Scalars['String']['input'];
  property_id?: InputMaybe<Scalars['Int']['input']>;
  set_name: Scalars['String']['input'];
};

export type CURRENCY_CODES =
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ARS'
  | 'AUD'
  | 'AZN'
  | 'BAM'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BND'
  | 'BOB'
  | 'BRL'
  | 'BWP'
  | 'BYN'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'CRC'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EEK'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'EUR'
  | 'GBP'
  | 'GEL'
  | 'GHS'
  | 'GNF'
  | 'GTQ'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KHR'
  | 'KMF'
  | 'KRW'
  | 'KWD'
  | 'KZT'
  | 'LBP'
  | 'LKR'
  | 'LTL'
  | 'LVL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MOP'
  | 'MUR'
  | 'MXN'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SOS'
  | 'SYP'
  | 'THB'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'UYU'
  | 'UZS'
  | 'VEF'
  | 'VND'
  | 'XAF'
  | 'XOF'
  | 'YER'
  | 'ZAR'
  | 'ZMK'
  | 'ZWL';

export type CUSTOMER = {
  account_code?: Maybe<Scalars['String']['output']>;
  account_description?: Maybe<Scalars['String']['output']>;
  billing?: Maybe<CUSTOMER_BILLING_PROFILE>;
  contact: CUSTOMER_CONTACT;
  description?: Maybe<Scalars['String']['output']>;
  document_id_number?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  medical?: Maybe<CUSTOMER_MEDICAL>;
  profile_picture?: Maybe<Scalars['String']['output']>;
  properties: Array<CUSTOMER_PROPERTY>;
  scheduled_status_changes?: Maybe<SCHEDULED_STATUS_CHANGES>;
  seon_account_code?: Maybe<Scalars['String']['output']>;
  system_status?: Maybe<CUSTOMER_SYSTEM_STATUS>;
};

export type CUSTOMER_BILLING_PROFILE = {
  account_manager_id?: Maybe<Scalars['Int']['output']>;
  billing_address?: Maybe<Scalars['String']['output']>;
  billing_department?: Maybe<BILLING_DEPARTMENT>;
  billing_subscriptions?: Maybe<Array<BILLING_SUBSCRIPTION>>;
  currency: CURRENCY_CODES;
  customer_id: Scalars['Int']['output'];
  invoice_clubbing: INVOICE_CLUBBING;
  invoice_templates: Array<BILLING_INVOICE_TEMPLATE>;
  payment_options: Array<BILLING_PAYMENT_OPTION>;
};

export type CUSTOMER_BILLING_PROFILE_PARAMS = {
  account_manager_id?: InputMaybe<Scalars['Int']['input']>;
  billing_address?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<CURRENCY_CODES>;
  invoice_clubbing?: InputMaybe<INVOICE_CLUBBING>;
};

export type CUSTOMER_CONDENSED_INVOICE = {
  account_code?: Maybe<Scalars['String']['output']>;
  account_description?: Maybe<Scalars['String']['output']>;
  amount_paid?: Maybe<Scalars['String']['output']>;
  billing_account_id: Scalars['Int']['output'];
  created_at: Scalars['String']['output'];
  currency: CURRENCY_CODES;
  description?: Maybe<Scalars['String']['output']>;
  due_date: Scalars['String']['output'];
  email_sent?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Int']['output'];
  issue_date?: Maybe<Scalars['String']['output']>;
  last_email_sent?: Maybe<Scalars['String']['output']>;
  number: Scalars['String']['output'];
  outstanding_amount?: Maybe<Scalars['String']['output']>;
  paid_on?: Maybe<Scalars['String']['output']>;
  reference_number?: Maybe<Scalars['String']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  status: INVOICE_STATUS;
  tax?: Maybe<Scalars['String']['output']>;
  total_amount: Scalars['String']['output'];
};

export type CUSTOMER_CONTACT = {
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  landline_phone?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  mobile_phone?: Maybe<Scalars['String']['output']>;
  other_phone?: Maybe<Scalars['String']['output']>;
  preferred_contact_method?: Maybe<PREFERRED_CUSTOMER_CONTACT_METHOD_TYPE>;
  title?: Maybe<Scalars['String']['output']>;
};

export type CUSTOMER_CONTACT_PARAMS = {
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  landline_phone?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  mobile_phone?: InputMaybe<Scalars['String']['input']>;
  other_phone?: InputMaybe<Scalars['String']['input']>;
  preferred_contact_method?: InputMaybe<PREFERRED_CUSTOMER_CONTACT_METHOD_TYPE>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CUSTOMER_DELETION_RESPONSE = {
  customer_id?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type CUSTOMER_INVOICES_RESPONSE = {
  invoices: Array<CUSTOMER_CONDENSED_INVOICE>;
  pagination: PAGINATION;
};

export type CUSTOMER_MEDICAL = {
  age?: Maybe<Scalars['Int']['output']>;
  bloodtype?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  insurance_name?: Maybe<Scalars['String']['output']>;
  insurance_policy_id?: Maybe<Scalars['String']['output']>;
  medical_conditions?: Maybe<Scalars['String']['output']>;
};

export type CUSTOMER_MUTATION_RESPONSE = {
  customer?: Maybe<CUSTOMER>;
  customer_id?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type CUSTOMER_PROPERTY = {
  code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duress_password?: Maybe<Scalars['String']['output']>;
  equipment?: Maybe<PROPERTY_EQUIPMENT>;
  geospatial?: Maybe<PROPERTY_GEOSPATIAL>;
  id: Scalars['Int']['output'];
  images?: Maybe<Array<PROPERTY_IMAGE>>;
  instructions?: Maybe<PROPERTY_INSTRUCTIONS>;
  keyholders?: Maybe<Array<PROPERTY_KEYHOLDER>>;
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  scheduled_status_changes?: Maybe<SCHEDULED_STATUS_CHANGES>;
  schedules?: Maybe<Array<PROPERTY_TIME_SCHEDULE>>;
  status?: Maybe<PROPERTY_STATUS>;
  status_changed_at?: Maybe<Scalars['String']['output']>;
  status_changed_by_agent_id?: Maybe<Scalars['Int']['output']>;
  status_changed_reason?: Maybe<Scalars['String']['output']>;
  status_changed_reason_id?: Maybe<Scalars['Int']['output']>;
  suspend_reason?: Maybe<Scalars['String']['output']>;
  suspended_at?: Maybe<Scalars['String']['output']>;
  suspended_by?: Maybe<Scalars['Int']['output']>;
  testing_enabled?: Maybe<Scalars['Boolean']['output']>;
  testing_time?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<PROPERTY_TYPE>;
  video_feeds?: Maybe<Array<PROPERTY_VIDEO_FEED>>;
};

export type CUSTOMER_STATUS = 'active' | 'inactive';

export type CUSTOMER_STATUS_HISTORY_LOG = {
  notes?: Maybe<Scalars['String']['output']>;
  status: CUSTOMER_STATUS;
  timestamp: Scalars['String']['output'];
};

export type CUSTOMER_SYSTEM_STATUS = {
  created_on?: Maybe<Scalars['String']['output']>;
  has_overactive_alarms?: Maybe<Scalars['Boolean']['output']>;
  status: CUSTOMER_STATUS;
  status_history?: Maybe<Array<Maybe<CUSTOMER_STATUS_HISTORY_LOG>>>;
  suspend_date?: Maybe<Scalars['String']['output']>;
  suspend_reason?: Maybe<Scalars['String']['output']>;
};

export type CUSTOMER_TRANSACTIONS_INVOICE = {
  amount_paid: Scalars['String']['output'];
  billing_account_id: Scalars['Int']['output'];
  billing_subscription_ids: Array<Scalars['Int']['output']>;
  billing_transactions: Array<BILLING_TRANSACTION>;
  created_at: Scalars['String']['output'];
  currency: CURRENCY_CODES;
  description?: Maybe<Scalars['String']['output']>;
  download_link?: Maybe<Scalars['String']['output']>;
  due_date: Scalars['String']['output'];
  email_sent?: Maybe<Scalars['Boolean']['output']>;
  for_one_time_subscription?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Int']['output'];
  issue_date?: Maybe<Scalars['String']['output']>;
  last_email_sent?: Maybe<Scalars['String']['output']>;
  number: Scalars['String']['output'];
  outstanding_amount: Scalars['String']['output'];
  paid_on?: Maybe<Scalars['String']['output']>;
  payable_amount?: Maybe<Scalars['String']['output']>;
  reference_number?: Maybe<Scalars['String']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  status: INVOICE_STATUS;
  tax?: Maybe<Scalars['String']['output']>;
  total_amount: Scalars['String']['output'];
};

export type CUSTOMERS_SEARCH_PARAMS = {
  account_billing_subscription_status?: InputMaybe<SUBSCRIPTION_STATUS>;
  account_code_property_code?: InputMaybe<Scalars['String']['input']>;
  account_customer_email?: InputMaybe<Scalars['String']['input']>;
  account_customer_phone_keyholder_phone?: InputMaybe<
    Scalars['String']['input']
  >;
  account_description_customer_name_keyholder_name?: InputMaybe<
    Scalars['String']['input']
  >;
  account_manager_id?: InputMaybe<Scalars['Int']['input']>;
  account_status?: InputMaybe<CUSTOMER_STATUS>;
  account_system_id_property_system_id?: InputMaybe<Scalars['Int']['input']>;
  property_address?: InputMaybe<Scalars['String']['input']>;
  property_area_ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  property_company_name?: InputMaybe<Scalars['String']['input']>;
  property_decoder_name?: InputMaybe<Scalars['String']['input']>;
  property_status?: InputMaybe<PROPERTY_STATUS>;
  property_transmitter_id?: InputMaybe<Scalars['Int']['input']>;
  property_type?: InputMaybe<PROPERTY_TYPE>;
};

export type CUSTOMERS_TABLE_ROW = {
  account_code?: Maybe<Scalars['String']['output']>;
  account_description?: Maybe<Scalars['String']['output']>;
  account_status: CUSTOMER_STATUS;
  customer_email?: Maybe<Scalars['String']['output']>;
  customer_name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  document_id_number?: Maybe<Scalars['String']['output']>;
  email_address?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  joined?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  properties: Array<CUSTOMERS_TABLE_ROW_PROPERTY>;
  seon_account_code?: Maybe<Scalars['String']['output']>;
  status?: Maybe<CUSTOMER_STATUS>;
  title?: Maybe<Scalars['String']['output']>;
};

export type CUSTOMERS_TABLE_ROW_PROPERTY = {
  address?: Maybe<Scalars['String']['output']>;
  household_company_name?: Maybe<Scalars['String']['output']>;
  household_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  property_code?: Maybe<Scalars['String']['output']>;
  property_name?: Maybe<Scalars['String']['output']>;
};

export type DAYS_OF_THE_WEEK_TYPE =
  | 'FRIDAY'
  | 'MONDAY'
  | 'SATURDAY'
  | 'SUNDAY'
  | 'THURSDAY'
  | 'TUESDAY'
  | 'WEDNESDAY';

export type DEBIT_ORDER_ATTACHED_FILE = {
  created_at?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type DEBIT_ORDER_BULK_PROCESS_RESPONSE = {
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type DEBIT_ORDER_EXPORT = {
  all_attached_files: Array<DEBIT_ORDER_ATTACHED_FILE>;
  collection_date?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  month_of: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
};

export type DECODER = {
  created_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type DECODER_MUTATION_RESPONSE = {
  decoder?: Maybe<DECODER>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type DELETE_AGENT_INPUT = {
  agent_id: Scalars['Int']['input'];
};

export type DELETE_AGENT_RESPONSE = {
  agent?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type DELETE_ALARM_TYPE_RESPONSE = {
  alarm_type_id?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type DELETE_DECODER_RESPONSE = {
  decoder?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type DELETE_RESPONDER_RESPONSE = {
  message?: Maybe<Scalars['String']['output']>;
  responder_id?: Maybe<Scalars['Int']['output']>;
  success: Scalars['Boolean']['output'];
};

export type DISCARD_AREA_AND_REASSIGN_TRANSMITTERS_INPUT = {
  area_id: Scalars['Int']['input'];
  reassign_to_area: Scalars['Int']['input'];
};

export type DISCARD_AREA_AND_REASSIGN_TRANSMITTERS_MUTATION_RESPONSE = {
  area: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type DISCOUNT_PRICE = BILLING_ITEM_PRICE & {
  active: Scalars['Boolean']['output'];
  created_at: Scalars['String']['output'];
  currency: CURRENCY_CODES;
  discarded_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  price_excl_tax: Scalars['String']['output'];
  recurrence: BILLING_RECURRENCE;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type DISCOUNT_TEMPLATE = BILLING_ITEM & {
  created_at: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  price_matrix: Array<DISCOUNT_PRICE>;
  tax_percentage: Scalars['String']['output'];
  type: BILLING_ITEM_TYPE;
  updated_at: Scalars['String']['output'];
};

export type DISCOUNT_TEMPLATE_MUTATION_RESPONSE = {
  discount_template?: Maybe<DISCOUNT_TEMPLATE>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type EMAIL_CUSTOMERS_INVOICES_ADVANCED_PARAMS = {
  amount_due_eq?: InputMaybe<Scalars['Float']['input']>;
  amount_due_gt?: InputMaybe<Scalars['Float']['input']>;
  amount_due_lt?: InputMaybe<Scalars['Float']['input']>;
  attachment_type: EMAIL_INVOICE_ATTACHMENT_TYPE;
  billing_account_ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  email_body_text?: InputMaybe<Scalars['String']['input']>;
  email_sent?: InputMaybe<Scalars['Boolean']['input']>;
  month_of: Scalars['String']['input'];
  payment_method?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<INVOICE_STATUS>;
};

export type EMAIL_INVOICE_ATTACHMENT_TYPE = 'invoice' | 'statement';

export type ENABLED_SEON_PRODUCTS = {
  customer_billing_enabled: Scalars['Boolean']['output'];
  user_app_enabled: Scalars['Boolean']['output'];
  video_monitoring_enabled: Scalars['Boolean']['output'];
  voip_enabled: Scalars['Boolean']['output'];
};

export type ERROR = {
  code?: Maybe<ERROR_CODE>;
  error: Scalars['String']['output'];
};

export type ERROR_CODE = 'server_error' | 'unknown_error';

export type FETCH_AGENTS_RESPONSE = {
  agents: Array<AGENT>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  total: Scalars['Int']['output'];
};

export type FETCH_AGENTS_STATISTICS_PARAMS = {
  period_end: Scalars['String']['input'];
  period_start: Scalars['String']['input'];
};

export type FETCH_AGENTS_STATISTICS_RESPONSE = {
  agents: Array<Maybe<AGENTS_PERFORMANCE>>;
  success: Scalars['Boolean']['output'];
};

export type FETCH_ALARM_TYPES_RESPONSE = {
  alarm_types: Array<ALARM_TYPE>;
  message?: Maybe<Scalars['String']['output']>;
  pagination: PAGINATION;
  success: Scalars['Boolean']['output'];
};

export type FETCH_ALARMS_RESPONSE = {
  alarms: Array<ALARM>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  total: Scalars['Int']['output'];
};

export type FETCH_AREAS_RESPONSE = {
  areas: Array<AREA>;
  message?: Maybe<Scalars['String']['output']>;
  pagination: PAGINATION;
  success: Scalars['Boolean']['output'];
};

export type FETCH_AREAS_STATUS_RESPONSE = {
  areas: Array<AREA_ASSIGNMENT>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type FETCH_CUSTOMER_PROPERTY_RESPONSE = {
  message?: Maybe<Scalars['String']['output']>;
  property: CUSTOMER_PROPERTY;
  success: Scalars['Boolean']['output'];
};

export type FETCH_CUSTOMER_RESPONSE = {
  customer: CUSTOMER;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type FETCH_CUSTOMERS_RESPONSE = {
  customers: Array<CUSTOMERS_TABLE_ROW>;
  message?: Maybe<Scalars['String']['output']>;
  pagination: PAGINATION;
  success: Scalars['Boolean']['output'];
};

export type FETCH_DECODER_RESPONSE = {
  decoder: DECODER;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type FETCH_DECODERS_RESPONSE = {
  decoders: Array<DECODER>;
  message?: Maybe<Scalars['String']['output']>;
  pagination: PAGINATION;
  success: Scalars['Boolean']['output'];
};

export type FETCH_DISCOUNT_TEMPLATES_RESPONSE = {
  discount_templates: Array<DISCOUNT_TEMPLATE>;
  message?: Maybe<Scalars['String']['output']>;
  pagination: PAGINATION;
  success: Scalars['Boolean']['output'];
};

export type FETCH_INVOICES_PARAMS = {
  date_range_end?: InputMaybe<Scalars['String']['input']>;
  date_range_start?: InputMaybe<Scalars['String']['input']>;
  email_sent?: InputMaybe<Scalars['Boolean']['input']>;
  month_of?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  payment_method?: InputMaybe<Scalars['String']['input']>;
  reference_number?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<INVOICE_STATUS>;
};

export type FETCH_PERMISSIONS_RESPONSE = {
  permissions: Array<PERMISSION>;
};

export type FETCH_PRODUCT_TEMPLATES_RESPONSE = {
  message?: Maybe<Scalars['String']['output']>;
  pagination: PAGINATION;
  product_templates: Array<PRODUCT_TEMPLATE>;
  success: Scalars['Boolean']['output'];
};

export type FETCH_RESPONDERS_STATISTICS_PARAMS = {
  period_end: Scalars['String']['input'];
  period_start: Scalars['String']['input'];
};

export type FETCH_RESPONDERS_STATISTICS_RESPONSE = {
  responders: Array<RESPONDERS_PERFORMANCE>;
  success: Scalars['Boolean']['output'];
};

export type FETCH_ROLES_RESPONSE = {
  roles: Array<USER_ROLE>;
};

export type FETCH_SSP_REPORTS_RESPONSE = {
  pagination: PAGINATION;
  reports: Array<SSP_REPORT_EXPORT>;
};

export type FETCH_TRANSMITTER_RESPONSE = {
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  transmitter: TRANSMITTER;
};

export type FETCH_TRANSMITTERS_PARAMS = {
  area_ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  decoder_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  statuses?: InputMaybe<Array<TRANSMITTER_STATUS>>;
};

export type FETCH_TRANSMITTERS_RESPONSE = {
  message?: Maybe<Scalars['String']['output']>;
  pagination: PAGINATION;
  success: Scalars['Boolean']['output'];
  transmitters: Array<TRANSMITTER>;
};

export type GENERATE_DEBIT_ORDER_RUN_RESPONSE = {
  debit_order_export?: Maybe<DEBIT_ORDER_EXPORT>;
  message: Scalars['String']['output'];
};

export type GENERATE_SSP_REPORT_FILTERS = {
  active?: Maybe<Scalars['String']['output']>;
  alarm_type_eq?: Maybe<Scalars['String']['output']>;
  area_id_in?: Maybe<Array<Scalars['Int']['output']>>;
  created_at_gteq?: Maybe<Scalars['String']['output']>;
  created_at_lteq?: Maybe<Scalars['String']['output']>;
  decoder_eq?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['Int']['output']>;
};

export type HISTORY_ALARM_CONDENSED = {
  address?: Maybe<Scalars['String']['output']>;
  agent_id?: Maybe<Scalars['Int']['output']>;
  alarm_state: ALARM_STATE;
  alarm_type: Scalars['String']['output'];
  area_id?: Maybe<Scalars['Int']['output']>;
  arrived_at?: Maybe<Scalars['String']['output']>;
  closed_at?: Maybe<Scalars['String']['output']>;
  coordinates?: Maybe<COORDINATES>;
  created_at: Scalars['String']['output'];
  customer?: Maybe<CUSTOMER>;
  enroute_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  procedure_timestamps: ALARM_PROCEDURE_TIMESTAMPS;
  responder_assigned_at?: Maybe<Scalars['String']['output']>;
  saved_at?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['String']['output'];
};

export type HISTORY_ALARMS_PARAMS = {
  address?: InputMaybe<Scalars['String']['input']>;
  agent_ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  alarm_id?: InputMaybe<Scalars['String']['input']>;
  alarm_signal?: InputMaybe<Array<InputMaybe<HISTORY_PARAMS_ALARM_SIGNAL>>>;
  alarm_source?: InputMaybe<Array<InputMaybe<HISTORY_PARAMS_ALARM_SOURCE>>>;
  alarm_type?: InputMaybe<Scalars['String']['input']>;
  area_ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  customer_name?: InputMaybe<Scalars['String']['input']>;
  date_from?: InputMaybe<Scalars['String']['input']>;
  date_to?: InputMaybe<Scalars['String']['input']>;
  incident_report?: InputMaybe<
    Array<InputMaybe<HISTORY_PARAMS_INCIDENT_REPORT>>
  >;
  mobile?: InputMaybe<Scalars['Boolean']['input']>;
  property_id?: InputMaybe<Scalars['String']['input']>;
  responder_delegation?: InputMaybe<HISTORY_PARAMS_RESPONDER_DELEGATION>;
  responder_dispatched?: InputMaybe<Scalars['Boolean']['input']>;
  responder_id?: InputMaybe<Scalars['String']['input']>;
};

export type HISTORY_ALARMS_RESPONSE = {
  alarms: Array<HISTORY_ALARM_CONDENSED>;
  pagination: PAGINATION;
  success: Scalars['Boolean']['output'];
};

export type HISTORY_PARAMS_ALARM_SIGNAL =
  | 'multi_zone'
  | 'overactive'
  | 'video_feed';

export type HISTORY_PARAMS_ALARM_SOURCE =
  | 'property'
  | 'responder_app'
  | 'user_app';

export type HISTORY_PARAMS_INCIDENT_REPORT =
  | 'property_accessed'
  | 'property_damage';

export type HISTORY_PARAMS_RESPONDER_DELEGATION =
  | 'responder_dispatched'
  | 'responder_not_dispatched';

export type INVOICE_CLUBBING =
  | 'all_clubbed'
  | 'by_property'
  | 'by_subscription';

export type INVOICE_STATUS =
  | 'canceled'
  | 'overdue'
  | 'paid'
  | 'partially_paid'
  | 'refunded'
  | 'unpaid';

export type INVOICE_TEMPLATE_PARAMS = {
  billing_address: Scalars['String']['input'];
  billing_payment_option_id?: InputMaybe<Scalars['Int']['input']>;
  cc_email?: InputMaybe<Scalars['String']['input']>;
  collection_day_of_month?: InputMaybe<Scalars['Int']['input']>;
  company_name?: InputMaybe<Scalars['String']['input']>;
  company_registration_number?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  invoice_due_days?: InputMaybe<Scalars['Int']['input']>;
  legal_name: Scalars['String']['input'];
  payment_method?: InputMaybe<Scalars['String']['input']>;
  vat_number?: InputMaybe<Scalars['String']['input']>;
};

export type LOGIN_CONTROL_ROOM_INPUT = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  user_type?: InputMaybe<USER_TYPE>;
};

export type LOGIN_CONTROL_ROOM_RESPONSE = {
  agent?: Maybe<AGENT>;
  message: Scalars['String']['output'];
  seon_auth_headers?: Maybe<SEON_AUTH_HEADERS>;
  success: Scalars['Boolean']['output'];
};

export type LOGIN_RESPONSE = {
  seon_auth_headers?: Maybe<SEON_AUTH_HEADERS>;
  user: USER;
};

export type LOGIN_USER_RESPONSE = {
  seon_auth_headers: SEON_AUTH_HEADERS;
  ssp_settings: USER_SSP_SETTINGS;
  user: USER;
};

export type LOGOUT_RESPONSE = {
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type PAGINATION = {
  count: Scalars['Int']['output'];
  items: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
};

export type PAGINATION_INPUT = {
  page: Scalars['Int']['input'];
  per_page: Scalars['Int']['input'];
};

export type PANEL_INFORMATION = {
  panel_id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PERMISSION = {
  action: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  subject_class: Scalars['String']['output'];
};

export type PLATFORM_PROVIDERS = {
  revio?: Maybe<REVIO_PROFILE>;
  servcraft?: Maybe<SERVCRAFT_PROFILE>;
};

export type PLATFORM_STATUS = 'ACTIVE' | 'CANCELLED' | 'ON_TRIAL' | 'SUSPENDED';

export type PREFERRED_CUSTOMER_CONTACT_METHOD_TYPE =
  | 'EMAIL'
  | 'LANDLINE_NUMBER'
  | 'MOBILE_NUMBER'
  | 'OTHER_NUMBER';

export type PRODUCT_PRICE = BILLING_ITEM_PRICE & {
  active: Scalars['Boolean']['output'];
  created_at: Scalars['String']['output'];
  currency: CURRENCY_CODES;
  discarded_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  price_excl_tax: Scalars['String']['output'];
  recurrence: BILLING_RECURRENCE;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type PRODUCT_TEMPLATE = BILLING_ITEM & {
  created_at: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  price_matrix: Array<PRODUCT_PRICE>;
  tax_percentage: Scalars['String']['output'];
  type: BILLING_ITEM_TYPE;
  updated_at: Scalars['String']['output'];
};

export type PRODUCT_TEMPLATE_MUTATION_RESPONSE = {
  message?: Maybe<Scalars['String']['output']>;
  product_template?: Maybe<PRODUCT_TEMPLATE>;
  success: Scalars['Boolean']['output'];
};

export type PROPERTY_EQUIPMENT = {
  transmitters?: Maybe<Array<TRANSMITTER>>;
};

export type PROPERTY_GEOSPATIAL = {
  area?: Maybe<AREA>;
  city?: Maybe<Scalars['String']['output']>;
  coordinates?: Maybe<COORDINATES>;
  country?: Maybe<Scalars['String']['output']>;
  entire_address?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  zip_code?: Maybe<Scalars['String']['output']>;
  zones?: Maybe<Array<PROPERTY_ZONE>>;
};

export type PROPERTY_IMAGE = {
  id?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type PROPERTY_INSTRUCTION = {
  id: Scalars['Int']['output'];
  note?: Maybe<Scalars['String']['output']>;
  type: PROPERTY_INSTRUCTION_TYPE;
  validity_end?: Maybe<Scalars['String']['output']>;
  validity_start?: Maybe<Scalars['String']['output']>;
};

export type PROPERTY_INSTRUCTION_INPUT = {
  id?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  validity_end?: InputMaybe<Scalars['String']['input']>;
  validity_start?: InputMaybe<Scalars['String']['input']>;
};

export type PROPERTY_INSTRUCTION_TYPE =
  | 'AGENT'
  | 'HOLIDAY'
  | 'KEY'
  | 'NOTE'
  | 'RESPONDER';

export type PROPERTY_INSTRUCTIONS = {
  AGENT?: Maybe<PROPERTY_INSTRUCTION>;
  HOLIDAY?: Maybe<PROPERTY_INSTRUCTION>;
  KEY?: Maybe<PROPERTY_INSTRUCTION>;
  NOTE?: Maybe<PROPERTY_INSTRUCTION>;
  RESPONDER?: Maybe<PROPERTY_INSTRUCTION>;
};

export type PROPERTY_INSTRUCTIONS_INPUT = {
  AGENT?: InputMaybe<PROPERTY_INSTRUCTION_INPUT>;
  HOLIDAY?: InputMaybe<PROPERTY_INSTRUCTION_INPUT>;
  KEY?: InputMaybe<PROPERTY_INSTRUCTION_INPUT>;
  NOTE?: InputMaybe<PROPERTY_INSTRUCTION_INPUT>;
  RESPONDER?: InputMaybe<PROPERTY_INSTRUCTION_INPUT>;
};

export type PROPERTY_KEYHOLDER = {
  call_order?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  landline_phone?: Maybe<Scalars['String']['output']>;
  mobile_phone?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  push_notifications_enabled?: Maybe<Scalars['Boolean']['output']>;
  sms_notifications_enabled?: Maybe<Scalars['Boolean']['output']>;
  triggered_panics_allowed?: Maybe<Scalars['Boolean']['output']>;
  user_app_id?: Maybe<Scalars['Int']['output']>;
};

export type PROPERTY_KEYHOLDER_DELETION_RESPONSE = {
  keyholder_id?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type PROPERTY_KEYHOLDER_MUTATION_RESPONSE = {
  keyholder?: Maybe<PROPERTY_KEYHOLDER>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type PROPERTY_KEYHOLDER_PARAMS = {
  call_order?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  landline_phone?: InputMaybe<Scalars['String']['input']>;
  mobile_phone?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  push_notifications_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  sms_notifications_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  triggered_panics_allowed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PROPERTY_KEYHOLDERS_MUTATION_RESPONSE = {
  keyholders: Array<PROPERTY_KEYHOLDER>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type PROPERTY_SCHEDULE_MUTATION_RESPONSE = {
  message?: Maybe<Scalars['String']['output']>;
  schedules?: Maybe<Array<Maybe<PROPERTY_TIME_SCHEDULE>>>;
  success: Scalars['Boolean']['output'];
};

export type PROPERTY_STATUS = 'active' | 'inactive' | 'suspended';

export type PROPERTY_TIME_SCHEDULE = {
  close_end?: Maybe<Scalars['String']['output']>;
  close_start?: Maybe<Scalars['String']['output']>;
  day: DAYS_OF_THE_WEEK_TYPE;
  id: Scalars['Int']['output'];
  open_end?: Maybe<Scalars['String']['output']>;
  open_start?: Maybe<Scalars['String']['output']>;
};

export type PROPERTY_TIME_SCHEDULE_PARAMS = {
  close_end: Scalars['String']['input'];
  close_start?: InputMaybe<Scalars['String']['input']>;
  day: DAYS_OF_THE_WEEK_TYPE;
  id?: InputMaybe<Scalars['Int']['input']>;
  open_end?: InputMaybe<Scalars['String']['input']>;
  open_start: Scalars['String']['input'];
};

export type PROPERTY_TYPE = 'BUSINESS' | 'RESIDENTIAL';

export type PROPERTY_VIDEO_FEED = {
  id?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type PROPERTY_ZONE = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  is_overactive?: Maybe<Scalars['Boolean']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  on_hold_mode: ZONE_ON_HOLD_MODE;
  time_triggered?: Maybe<Scalars['String']['output']>;
  transmitter?: Maybe<TRANSMITTER>;
  zone_type?: Maybe<Scalars['String']['output']>;
};

export type PROPERTY_ZONE_MUTATION_RESPONSE = {
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  zone?: Maybe<PROPERTY_ZONE>;
};

export type PROPERTY_ZONE_PARAMS = {
  decoder_name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  number: Scalars['String']['input'];
  transmitter_id?: InputMaybe<Scalars['Int']['input']>;
  transmitter_name?: InputMaybe<Scalars['String']['input']>;
  zone_type: Scalars['String']['input'];
};

export type RESPONDER = {
  area_ids: Array<Scalars['Int']['output']>;
  created_on?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  position?: Maybe<COORDINATES>;
  status: RESPONDER_STATUS;
  updated_on?: Maybe<Scalars['String']['output']>;
};

export type RESPONDER_MUTATION_RESPONSE = {
  message?: Maybe<Scalars['String']['output']>;
  responder?: Maybe<RESPONDER>;
  success: Scalars['Boolean']['output'];
};

export type RESPONDER_PARAMS = {
  area_ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  password_confirmation?: InputMaybe<Scalars['String']['input']>;
};

export type RESPONDER_STATUS =
  | 'AVAILABLE'
  | 'INACTIVE'
  | 'OCCUPIED'
  | 'OPERATING';

export type RESPONDERS_PERFORMANCE = {
  arrival_times: Scalars['Float']['output'];
  clear_times: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  late_alarms: Scalars['Float']['output'];
  name?: Maybe<Scalars['String']['output']>;
  response_times: Scalars['Float']['output'];
  save_times: Scalars['Float']['output'];
  total_alarms: Scalars['Float']['output'];
};

export type REVENUE_REPORT = {
  download_link: Scalars['String']['output'];
};

export type REVENUE_REPORT_RESPONSE = {
  report: REVENUE_REPORT;
};

export type REVIO_PROFILE = {
  abbreviated_name?: Maybe<Scalars['String']['output']>;
  account_number?: Maybe<Scalars['String']['output']>;
  api_key?: Maybe<Scalars['String']['output']>;
  brand_id?: Maybe<Scalars['String']['output']>;
  profile_code?: Maybe<Scalars['String']['output']>;
};

export type ROLE_RESPONSE = {
  role: USER_ROLE;
};

export type SCHEDULED_STATUS_CHANGES = {
  change_status_at?: Maybe<Scalars['String']['output']>;
  reactivation_date?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  status_changed_by_agent_id?: Maybe<Scalars['Int']['output']>;
  status_changed_reason?: Maybe<Scalars['String']['output']>;
  status_changed_reason_id?: Maybe<Scalars['Int']['output']>;
};

export type SECURITY_QUESTION_ANSWER = 'correct' | 'incorrect' | 'skipped';

export type SEON_AUTH_HEADERS = {
  client?: Maybe<Scalars['String']['output']>;
  expiry?: Maybe<Scalars['String']['output']>;
  servcraft_token?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
};

export type SERVCRAFT_PROFILE = {
  api_key?: Maybe<Scalars['String']['output']>;
};

export type SSP = {
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  revio_company_api_key?: Maybe<Scalars['String']['output']>;
  revio_company_brand_id?: Maybe<Scalars['String']['output']>;
  revio_service_enabled?: Maybe<Scalars['Boolean']['output']>;
  servcraft_company_api_key?: Maybe<Scalars['String']['output']>;
  servcraft_service_enabled?: Maybe<Scalars['Boolean']['output']>;
  ssp_direct_debit?: Maybe<SSP_DIRECT_DEBIT>;
};

export type SSP_BRANDING = {
  logo_url?: Maybe<Scalars['String']['output']>;
};

export type SSP_COMPANY_DETAILS = {
  abbreviated_name?: Maybe<Scalars['String']['output']>;
  account_number?: Maybe<Scalars['String']['output']>;
  banking_username?: Maybe<Scalars['String']['output']>;
  billing_enabled: Scalars['Boolean']['output'];
  collection_days: Array<Scalars['Int']['output']>;
  country_code?: Maybe<Scalars['String']['output']>;
  currencies: Array<CURRENCY_CODES>;
  email?: Maybe<Scalars['String']['output']>;
  invoice_banking_details?: Maybe<Scalars['String']['output']>;
  invoice_due_days?: Maybe<Scalars['Int']['output']>;
  invoice_footer_information?: Maybe<Scalars['String']['output']>;
  invoice_job_last_run?: Maybe<Scalars['String']['output']>;
  invoice_job_status?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  reaction_test_time?: Maybe<Scalars['Int']['output']>;
  responsetime?: Maybe<Scalars['Int']['output']>;
  terms_and_conditions?: Maybe<Scalars['String']['output']>;
  time_zone?: Maybe<Scalars['String']['output']>;
  timeout?: Maybe<Scalars['Int']['output']>;
  trading_number?: Maybe<Scalars['String']['output']>;
  web_link?: Maybe<Scalars['String']['output']>;
};

export type SSP_COMPANY_DETAILS_INPUT = {
  abbreviated_name?: InputMaybe<Scalars['String']['input']>;
  account_number?: InputMaybe<Scalars['String']['input']>;
  banking_username?: InputMaybe<Scalars['String']['input']>;
  collection_days?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  currencies?: InputMaybe<Array<InputMaybe<CURRENCY_CODES>>>;
  email?: InputMaybe<Scalars['String']['input']>;
  invoice_banking_details?: InputMaybe<Scalars['String']['input']>;
  invoice_due_days?: InputMaybe<Scalars['Int']['input']>;
  invoice_footer_information?: InputMaybe<Scalars['String']['input']>;
  invoice_job_last_run?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reaction_test_time?: InputMaybe<Scalars['Int']['input']>;
  responsetime?: InputMaybe<Scalars['Int']['input']>;
  terms_and_conditions?: InputMaybe<Scalars['String']['input']>;
  timeout?: InputMaybe<Scalars['Int']['input']>;
  trading_number?: InputMaybe<Scalars['String']['input']>;
  web_link?: InputMaybe<Scalars['String']['input']>;
};

export type SSP_CONTACTS = {
  headquarters: SSP_HEADQUARTERS;
  owner?: Maybe<SSP_OWNER>;
  technical_contact: SSP_TECHNICAL_CONTACT;
};

export type SSP_DIRECT_DEBIT = {
  abbreviated_name?: Maybe<Scalars['String']['output']>;
  account_number?: Maybe<Scalars['String']['output']>;
  profile_code?: Maybe<Scalars['String']['output']>;
};

export type SSP_EQUIPMENT = {
  decoders: Array<Maybe<DECODER>>;
  transmitters: Array<Maybe<TRANSMITTER>>;
};

export type SSP_GEOSPATIAL = {
  areas: Array<AREA>;
};

export type SSP_HEADQUARTERS = {
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  primary_phone?: Maybe<Scalars['String']['output']>;
  secondary_phone?: Maybe<Scalars['String']['output']>;
};

export type SSP_OWNER = {
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  mobile_phone?: Maybe<Scalars['String']['output']>;
  primary_phone?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SSP_PLATFORM = {
  enabled_seon_products: ENABLED_SEON_PRODUCTS;
  providers?: Maybe<PLATFORM_PROVIDERS>;
  status: PLATFORM_STATUS;
};

export type SSP_REPORT_EXPORT = {
  created_at?: Maybe<Scalars['String']['output']>;
  date_from?: Maybe<Scalars['String']['output']>;
  date_to?: Maybe<Scalars['String']['output']>;
  download_link?: Maybe<Scalars['String']['output']>;
  filters?: Maybe<GENERATE_SSP_REPORT_FILTERS>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  records_count?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<COMPANY_REPORT_TYPE>;
};

export type SSP_TECHNICAL_CONTACT = {
  email: Scalars['String']['output'];
  primary_phone?: Maybe<Scalars['String']['output']>;
  secondary_phone?: Maybe<Scalars['String']['output']>;
};

export type SUBSCRIPTION_STATUS = 'active' | 'canceled' | 'inactive' | 'paused';

export type SUSPENSION_REASONS = {
  id: Scalars['Int']['output'];
  reason: Scalars['String']['output'];
};

export type SYSTEM_CHANGE_EVENT = {
  changed_by_id: Scalars['String']['output'];
  changed_date: Scalars['String']['output'];
  changed_type: Scalars['String']['output'];
  changes?: Maybe<Array<SYSTEM_CHANGE_EVENT_VALUE>>;
  event_type: SYSTEM_CHANGE_EVENT_TYPE;
  log_id: Scalars['Int']['output'];
};

export type SYSTEM_CHANGE_EVENT_TYPE =
  | 'create'
  | 'delete'
  | 'destroy'
  | 'update';

export type SYSTEM_CHANGE_EVENT_VALUE = {
  key?: Maybe<Scalars['String']['output']>;
  new_value?: Maybe<Scalars['String']['output']>;
  old_value?: Maybe<Scalars['String']['output']>;
};

export type SYSTEM_EVENTS_AUDIT_RESPONSE = {
  pagination: PAGINATION;
  system_change_events: Array<SYSTEM_CHANGE_EVENT>;
};

export type SYSTEM_EVENTS_AUDIT_SEARCH_PARAMS = {
  changed_by_id?: InputMaybe<Scalars['String']['input']>;
  changed_type?: InputMaybe<Scalars['String']['input']>;
  date_range_end?: InputMaybe<Scalars['String']['input']>;
  date_range_start?: InputMaybe<Scalars['String']['input']>;
  event_type?: InputMaybe<SYSTEM_CHANGE_EVENT_TYPE>;
};

export type TECHNICIAN = {
  active: Scalars['Boolean']['output'];
  available: Scalars['Boolean']['output'];
  created_at: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  phone_number?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type TECHNICIAN_PARAMS = {
  name?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
};

export type TRANSACTION_DOCUMENT_TYPE =
  | 'credit_note'
  | 'debit_bounce'
  | 'debit_note'
  | 'invoice'
  | 'payment'
  | 'payment_reject'
  | 'transfer_credit'
  | 'transfer_debit';

export type TRANSACTION_TYPE = 'credit' | 'debit';

export type TRANSFER_TRANSACTION_PARAMS = {
  invoice_id?: InputMaybe<Scalars['Int']['input']>;
  transaction_id: Scalars['Int']['input'];
  transaction_type: TRANSACTION_TYPE;
  transferring_account_id: Scalars['Int']['input'];
  transferring_invoice_id?: InputMaybe<Scalars['Int']['input']>;
};

export type TRANSMITTER = {
  area?: Maybe<AREA>;
  decoder?: Maybe<DECODER>;
  description?: Maybe<Scalars['String']['output']>;
  heartbeat_interval?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  number?: Maybe<Scalars['String']['output']>;
  set_name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<TRANSMITTER_STATUS>;
};

export type TRANSMITTER_MUTATION_RESPONSE = {
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  transmitter?: Maybe<TRANSMITTER>;
};

export type TRANSMITTER_STATUS =
  | 'IN_REPAIRS'
  | 'IN_STOCK'
  | 'IN_USE'
  | 'LOST'
  | 'UNKNOWN_CUSTOMER';

export type TRANSMITTER_TESTING_MODE = {
  duration?: Maybe<Scalars['Int']['output']>;
  enabled: Scalars['Boolean']['output'];
  enabled_at?: Maybe<Scalars['String']['output']>;
};

export type UNASSIGN_AGENT_AREAS_INPUT = {
  areas?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type UNASSIGN_AGENT_AREAS_RESPONSE = {
  areas?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type UPDATE_AGENT = {
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  password_confirmation?: InputMaybe<Scalars['String']['input']>;
};

export type UPDATE_AGENT_RESPONSE = {
  agent: AGENT;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type UPDATE_AREA_INPUT = {
  area_id: Scalars['Int']['input'];
  area_name?: InputMaybe<Scalars['String']['input']>;
};

export type UPDATE_BILLING_SUBSCRIPTION_ITEM_PARAMS = {
  description?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
};

export type UPDATE_BILLING_SUBSCRIPTION_PARAMS = {
  billing_invoice_template_id?: InputMaybe<Scalars['Int']['input']>;
  billing_items?: InputMaybe<
    Array<InputMaybe<CREATE_BILLING_SUBSCRIPTION_ITEM_PARAMS>>
  >;
  effective_end_date?: InputMaybe<Scalars['String']['input']>;
  effective_start_date?: InputMaybe<Scalars['String']['input']>;
  individual_increase_rate?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SUBSCRIPTION_STATUS>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UPDATE_CUSTOMER_INVOICE_PARAMS = {
  paid_on?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<INVOICE_STATUS>;
};

export type UPDATE_CUSTOMER_PROPERTY_RESPONSE = {
  message?: Maybe<Scalars['String']['output']>;
  property: CUSTOMER_PROPERTY;
  success: Scalars['Boolean']['output'];
};

export type UPDATE_CUSTOMER_STATUS_PARAMS = {
  change_status_at: Scalars['String']['input'];
  status: CUSTOMER_STATUS;
  status_changed_reason_id?: InputMaybe<Scalars['Int']['input']>;
};

export type UPDATE_DECODER_INPUT = {
  decoder_id: Scalars['Int']['input'];
  decoder_name: Scalars['String']['input'];
};

export type UPDATE_PROPERTY_DETAILS_PARAMS = {
  code?: InputMaybe<Scalars['String']['input']>;
  coordinates?: InputMaybe<COORDINATES_INPUT>;
  description?: InputMaybe<Scalars['String']['input']>;
  duress_password?: InputMaybe<Scalars['String']['input']>;
  entire_address?: InputMaybe<Scalars['String']['input']>;
  instructions?: InputMaybe<PROPERTY_INSTRUCTIONS_INPUT>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PROPERTY_TYPE>;
};

export type UPDATE_PROPERTY_STATUS_PARAMS = {
  change_status_at: Scalars['String']['input'];
  reactivation_date?: InputMaybe<Scalars['String']['input']>;
  status: PROPERTY_STATUS;
  status_changed_reason_id?: InputMaybe<Scalars['Int']['input']>;
};

export type UPDATE_ROLE_INPUT = {
  name?: InputMaybe<Scalars['String']['input']>;
  permission_ids?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type UPDATE_TRANSMITTER_PARAMS = {
  area_id?: InputMaybe<Scalars['Int']['input']>;
  decoder_name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  heartbeat_interval?: InputMaybe<Scalars['Float']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  property_id?: InputMaybe<Scalars['Int']['input']>;
  set_name?: InputMaybe<Scalars['String']['input']>;
};

export type USER = {
  created_at?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  role: USER_ROLE;
  status?: Maybe<USER_STATUS>;
  updated_at?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type USER_ROLE = {
  company_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  discarded_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  permissions: Array<PERMISSION>;
};

export type USER_SSP_SETTINGS = {
  billing_enabled: Scalars['Boolean']['output'];
  logo_image_url: Scalars['String']['output'];
  ssp_id: Scalars['Int']['output'];
};

export type USER_STATUS = 'INTERRUPTED' | 'OFFLINE' | 'ONLINE';

export type USER_TYPE = 'AGENT' | 'MIS';

export type VALIDATE_HEARTBEAT_RESPONSE = {
  authenticated?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type VOIP_CALL_ENDED_REPORT_PAYLOAD = {
  call_id: Scalars['String']['output'];
  callduraction?: Maybe<Scalars['String']['output']>;
  callfrom?: Maybe<Scalars['String']['output']>;
  callto?: Maybe<Scalars['String']['output']>;
  recording?: Maybe<Scalars['String']['output']>;
  status: VOIP_CALL_ENDED_STATUS;
  talkduraction?: Maybe<Scalars['String']['output']>;
  timestart?: Maybe<Scalars['String']['output']>;
};

export type VOIP_CALL_ENDED_STATUS =
  | 'ANSWERED'
  | 'BUSY'
  | 'NO_ANSWER'
  | 'NO_ANSWERED'
  | 'VOICEMAIL';

export type VOIP_CALL_FAILED_REPORT_PAYLOAD = {
  call_id: Scalars['String']['output'];
  reason: Scalars['String']['output'];
};

export type VOIP_CALL_MEMBER = {
  channelid: Scalars['String']['output'];
  memberstatus: VOIP_CALL_MEMBER_STATUS;
};

export type VOIP_CALL_MEMBER_STATUS =
  | 'ALERT'
  | 'ANSWER'
  | 'ANSWERED'
  | 'BYE'
  | 'HOLD'
  | 'RING';

export type VOIP_CALL_STATUS_UPDATED_PAYLOAD = {
  call_id: Scalars['String']['output'];
  extension_member?: Maybe<VOIP_EXTENSION_MEMBER>;
  inbound_member?: Maybe<VOIP_INBOUND_MEMBER>;
  outbound_member?: Maybe<VOIP_OUTBOUND_MEMBER>;
};

export type VOIP_END_CALL_INPUT = {
  channel_id: Scalars['String']['input'];
  pbx_url: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type VOIP_END_CALL_RESPONSE = {
  call_id?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type VOIP_EXTENSION_MEMBER = {
  ext: VOIP_CALL_MEMBER;
};

export type VOIP_HEARTBEAT_RESPONSE = {
  success: Scalars['Boolean']['output'];
};

export type VOIP_INBOUND_MEMBER = {
  inbound: VOIP_CALL_MEMBER;
};

export type VOIP_LOG_CALL_INPUT = {
  alarm_id: Scalars['Int']['input'];
  client_id: Scalars['Int']['input'];
  keyholder_id: Scalars['Int']['input'];
  keyholder_was_reached: Scalars['Boolean']['input'];
};

export type VOIP_LOG_CALL_RESPONSE = {
  success: Scalars['Boolean']['output'];
};

export type VOIP_OUTBOUND_MEMBER = {
  outbound: VOIP_CALL_MEMBER;
};

export type VOIP_START_CALL_INPUT = {
  extension: Scalars['String']['input'];
  number: Scalars['String']['input'];
  pbx_url: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type VOIP_START_CALL_RESPONSE = {
  call_id?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type ZONE_ON_HOLD_MODE = {
  duration?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  enabled_at?: Maybe<Scalars['String']['output']>;
};

export type CORE_AGENTS_PERFORMANCE_FRAGMENT = {
  id: number;
  name?: string | null;
  total_alarms: number;
  dispatch_times: number;
  save_times: number;
  acknowledge_times: number;
  call_times: number;
  late_alarms: number;
} & { ' $fragmentName'?: 'CORE_AGENTS_PERFORMANCE_FRAGMENT' };

export type CORE_RESPONDERS_PERFORMANCE_FRAGMENT = {
  id: number;
  name?: string | null;
  save_times: number;
  response_times: number;
  arrival_times: number;
  clear_times: number;
  late_alarms: number;
  total_alarms: number;
} & { ' $fragmentName'?: 'CORE_RESPONDERS_PERFORMANCE_FRAGMENT' };

export type CORE_SSP_BRANDING_FRAGMENT = { logo_url?: string | null } & {
  ' $fragmentName'?: 'CORE_SSP_BRANDING_FRAGMENT';
};

export type CORE_SSP_CONTACTS_FRAGMENT = {
  headquarters: {
    primary_phone?: string | null;
    secondary_phone?: string | null;
    email: string;
    city?: string | null;
    country?: string | null;
    address?: string | null;
  };
  owner?: {
    title?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    primary_phone?: string | null;
    mobile_phone?: string | null;
    email?: string | null;
  } | null;
  technical_contact: {
    primary_phone?: string | null;
    secondary_phone?: string | null;
    email: string;
  };
} & { ' $fragmentName'?: 'CORE_SSP_CONTACTS_FRAGMENT' };

export type FETCH_AGENTS_STATISTICS_QUERY_VARIABLES = Exact<{
  params: FETCH_AGENTS_STATISTICS_PARAMS;
}>;

export type FETCH_AGENTS_STATISTICS_QUERY = {
  agents_statistics: Array<{
    ' $fragmentRefs'?: {
      CORE_AGENTS_PERFORMANCE_FRAGMENT: CORE_AGENTS_PERFORMANCE_FRAGMENT;
    };
  }>;
};

export type FETCH_RESPONDERS_STATISTICS_QUERY_VARIABLES = Exact<{
  params: FETCH_RESPONDERS_STATISTICS_PARAMS;
}>;

export type FETCH_RESPONDERS_STATISTICS_QUERY = {
  responders_statistics: Array<{
    ' $fragmentRefs'?: {
      CORE_RESPONDERS_PERFORMANCE_FRAGMENT: CORE_RESPONDERS_PERFORMANCE_FRAGMENT;
    };
  }>;
};

export type FETCH_PERMISSIONS_QUERY_VARIABLES = Exact<{ [key: string]: never }>;

export type FETCH_PERMISSIONS_QUERY = {
  permissions: {
    permissions: Array<{
      id: number;
      action: string;
      name: string;
      subject_class: string;
    }>;
  };
};

export type CREATE_ROLE_MUTATION_VARIABLES = Exact<{
  role: CREATE_ROLE_INPUT;
}>;

export type CREATE_ROLE_MUTATION = {
  create_role: {
    role: {
      id: number;
      company_id?: number | null;
      created_at?: string | null;
      discarded_at?: string | null;
      name: string;
      permissions: Array<{
        id: number;
        action: string;
        name: string;
        subject_class: string;
      }>;
    };
  };
};

export type UPDATE_ROLE_MUTATION_VARIABLES = Exact<{
  updateRoleId: Scalars['Int']['input'];
  params: UPDATE_ROLE_INPUT;
}>;

export type UPDATE_ROLE_MUTATION = {
  update_role: {
    role: {
      id: number;
      company_id?: number | null;
      created_at?: string | null;
      discarded_at?: string | null;
      name: string;
      permissions: Array<{
        id: number;
        action: string;
        name: string;
        subject_class: string;
      }>;
    };
  };
};

export type FETCH_ROLES_QUERY_VARIABLES = Exact<{ [key: string]: never }>;

export type FETCH_ROLES_QUERY = {
  roles: {
    roles: Array<{
      id: number;
      company_id?: number | null;
      created_at?: string | null;
      discarded_at?: string | null;
      name: string;
      permissions: Array<{
        id: number;
        action: string;
        name: string;
        subject_class: string;
      }>;
    }>;
  };
};

export type DELETE_ROLE_MUTATION_VARIABLES = Exact<{
  deleteRoleId: Scalars['Int']['input'];
}>;

export type DELETE_ROLE_MUTATION = { delete_role?: boolean | null };

export type VOIP_START_CALL_MUTATION_VARIABLES = Exact<{
  number: Scalars['String']['input'];
  token: Scalars['String']['input'];
  pbx_url: Scalars['String']['input'];
  extension: Scalars['String']['input'];
}>;

export type VOIP_START_CALL_MUTATION = {
  voip_start_call: { success: boolean; call_id?: string | null };
};

export type VOIP_END_CALL_MUTATION_VARIABLES = Exact<{
  token: Scalars['String']['input'];
  pbx_url: Scalars['String']['input'];
  channel_id: Scalars['String']['input'];
}>;

export type VOIP_END_CALL_MUTATION = { voip_end_call: { success: boolean } };

export type VOIP_LOG_CALL_MUTATION_VARIABLES = Exact<{
  alarm_id: Scalars['Int']['input'];
  keyholder_id: Scalars['Int']['input'];
  keyholder_was_reached: Scalars['Boolean']['input'];
  client_id: Scalars['Int']['input'];
}>;

export type VOIP_LOG_CALL_MUTATION = { voip_log_call: { success: boolean } };

export type VOIP_HEARTBEAT_MUTATION_VARIABLES = Exact<{
  token: Scalars['String']['input'];
  pbx_url: Scalars['String']['input'];
}>;

export type VOIP_HEARTBEAT_MUTATION = { voip_heartbeat: { success: boolean } };

export type VALIDATE_HEARTBEAT_QUERY_VARIABLES = Exact<{
  [key: string]: never;
}>;

export type VALIDATE_HEARTBEAT_QUERY = {
  validate_heartbeat: {
    success: boolean;
    authenticated?: boolean | null;
    message?: string | null;
  };
};

export type BILLING_DEPARTMENT_FRAGMENT_FRAGMENT = {
  id: number;
  created_at?: string | null;
  name?: string | null;
} & { ' $fragmentName'?: 'BILLING_DEPARTMENT_FRAGMENT_FRAGMENT' };

export type FETCH_BILLING_DEPARTMENTS_QUERY_VARIABLES = Exact<{
  [key: string]: never;
}>;

export type FETCH_BILLING_DEPARTMENTS_QUERY = {
  billing_departments: {
    departments: Array<{
      ' $fragmentRefs'?: {
        BILLING_DEPARTMENT_FRAGMENT_FRAGMENT: BILLING_DEPARTMENT_FRAGMENT_FRAGMENT;
      };
    }>;
  };
};

export type CORE_ALARM_TYPE_FRAGMENT = {
  id: number;
  priority: number;
  alarm_description?: string | null;
  alarm_type_name?: string | null;
  description?: string | null;
  history: boolean;
  message_to_user?: string | null;
  non_emc: boolean;
  sends_push_notifications: boolean;
} & { ' $fragmentName'?: 'CORE_ALARM_TYPE_FRAGMENT' };

export type FETCH_ALARM_TYPES_QUERY_VARIABLES = Exact<{
  pagination: PAGINATION_INPUT;
}>;

export type FETCH_ALARM_TYPES_QUERY = {
  alarm_types: {
    success: boolean;
    message?: string | null;
    alarm_types: Array<{
      ' $fragmentRefs'?: { CORE_ALARM_TYPE_FRAGMENT: CORE_ALARM_TYPE_FRAGMENT };
    }>;
    pagination: { count: number; items: number; page: number };
  };
};

export type CREATE_ALARM_TYPE_MUTATION_VARIABLES = Exact<{
  params: ALARM_TYPE_PARAMS;
}>;

export type CREATE_ALARM_TYPE_MUTATION = {
  create_alarm_type: {
    success: boolean;
    message?: string | null;
    alarm_type?: {
      ' $fragmentRefs'?: { CORE_ALARM_TYPE_FRAGMENT: CORE_ALARM_TYPE_FRAGMENT };
    } | null;
  };
};

export type UPDATE_ALARM_TYPE_MUTATION_VARIABLES = Exact<{
  id: Scalars['Int']['input'];
  params: ALARM_TYPE_PARAMS;
}>;

export type UPDATE_ALARM_TYPE_MUTATION = {
  update_alarm_type: {
    success: boolean;
    message?: string | null;
    alarm_type?: {
      ' $fragmentRefs'?: { CORE_ALARM_TYPE_FRAGMENT: CORE_ALARM_TYPE_FRAGMENT };
    } | null;
  };
};

export type DELETE_ALARM_TYPE_MUTATION_VARIABLES = Exact<{
  id: Scalars['Int']['input'];
}>;

export type DELETE_ALARM_TYPE_MUTATION = {
  delete_alarm_type: {
    alarm_type_id?: number | null;
    success: boolean;
    message?: string | null;
  };
};

export type DEBIT_ORDER_ATTACHED_FILE_FRAGMENT = {
  type?: string | null;
  created_at?: string | null;
  url?: string | null;
} & { ' $fragmentName'?: 'DEBIT_ORDER_ATTACHED_FILE_FRAGMENT' };

export type DEBIT_ORDER_EXPORT_FRAGMENT = {
  id: number;
  month_of: string;
  collection_date?: string | null;
  status?: string | null;
  all_attached_files: Array<{
    ' $fragmentRefs'?: {
      DEBIT_ORDER_ATTACHED_FILE_FRAGMENT: DEBIT_ORDER_ATTACHED_FILE_FRAGMENT;
    };
  }>;
} & { ' $fragmentName'?: 'DEBIT_ORDER_EXPORT_FRAGMENT' };

export type FETCH_DEBIT_ORDER_EXPORTS_QUERY_VARIABLES = Exact<{
  [key: string]: never;
}>;

export type FETCH_DEBIT_ORDER_EXPORTS_QUERY = {
  fetch_debit_order_exports: Array<{
    ' $fragmentRefs'?: {
      DEBIT_ORDER_EXPORT_FRAGMENT: DEBIT_ORDER_EXPORT_FRAGMENT;
    };
  }>;
};

export type DEBIT_ORDER_BULK_PROCESS_MUTATION_VARIABLES = Exact<{
  debit_order_format_type: Scalars['String']['input'];
  collection_day: Scalars['Int']['input'];
  collection_month: Scalars['Int']['input'];
}>;

export type DEBIT_ORDER_BULK_PROCESS_MUTATION = {
  debit_order_bulk_process: { message: string; success: boolean };
};

export type GENERATE_DEBIT_ORDER_RUN_MUTATION_VARIABLES = Exact<{
  debit_order_format_type: Scalars['String']['input'];
  collection_day: Scalars['Int']['input'];
  collection_month: Scalars['Int']['input'];
}>;

export type GENERATE_DEBIT_ORDER_RUN_MUTATION = {
  generate_debit_order_run: {
    message: string;
    debit_order_export?: {
      id: number;
      all_attached_files: Array<{ type?: string | null; url?: string | null }>;
    } | null;
  };
};

export type CORE_CUSTOMER_INVOICE_FRAGMENT = {
  id: number;
  billing_account_id: number;
  number: string;
  reference_number?: string | null;
  status: INVOICE_STATUS;
  description?: string | null;
  remarks?: string | null;
  currency: CURRENCY_CODES;
  amount_paid?: string | null;
  total_amount: string;
  issue_date?: string | null;
  due_date: string;
  paid_on?: string | null;
  created_at: string;
  email_sent?: boolean | null;
  last_email_sent?: string | null;
} & { ' $fragmentName'?: 'CORE_CUSTOMER_INVOICE_FRAGMENT' };

export type SSP_CUSTOMER_INVOICE_FRAGMENT = {
  id: number;
  billing_account_id: number;
  account_code?: string | null;
  account_description?: string | null;
  number: string;
  reference_number?: string | null;
  status: INVOICE_STATUS;
  description?: string | null;
  remarks?: string | null;
  currency: CURRENCY_CODES;
  amount_paid?: string | null;
  total_amount: string;
  outstanding_amount?: string | null;
  issue_date?: string | null;
  due_date: string;
  paid_on?: string | null;
  created_at: string;
  email_sent?: boolean | null;
  last_email_sent?: string | null;
} & { ' $fragmentName'?: 'SSP_CUSTOMER_INVOICE_FRAGMENT' };

export type CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT = {
  id: number;
  billing_account_id: number;
  number: string;
  status: INVOICE_STATUS;
  description?: string | null;
  reference_number?: string | null;
  remarks?: string | null;
  currency: CURRENCY_CODES;
  amount_paid: string;
  total_amount: string;
  payable_amount?: string | null;
  outstanding_amount: string;
  tax?: string | null;
  billing_subscription_ids: Array<number>;
  download_link?: string | null;
  issue_date?: string | null;
  due_date: string;
  paid_on?: string | null;
  created_at: string;
  for_one_time_subscription?: boolean | null;
  billing_transactions: Array<{
    ' $fragmentRefs'?: {
      CUSTOMER_BILLING_TRANSACTION_FRAGMENT: CUSTOMER_BILLING_TRANSACTION_FRAGMENT;
    };
  }>;
} & { ' $fragmentName'?: 'CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT' };

export type CUSTOMER_BILLING_TRANSACTION_FRAGMENT = {
  id: number;
  description?: string | null;
  transaction_type: TRANSACTION_TYPE;
  document_type: TRANSACTION_DOCUMENT_TYPE;
  transaction_status?: string | null;
  currency?: CURRENCY_CODES | null;
  amount?: string | null;
  balance?: string | null;
  cancelation_reference_id?: string | null;
  billing_account_id?: number | null;
  billing_invoice_ids?: Array<number> | null;
  created_at?: string | null;
} & { ' $fragmentName'?: 'CUSTOMER_BILLING_TRANSACTION_FRAGMENT' };

export type FETCH_CUSTOMER_INVOICE_QUERY_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
}>;

export type FETCH_CUSTOMER_INVOICE_QUERY = {
  fetch_customer_invoice: {
    ' $fragmentRefs'?: {
      CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT: CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT;
    };
  };
};

export type FETCH_CUSTOMER_INVOICES_QUERY_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  pagination: PAGINATION_INPUT;
  search_params?: InputMaybe<FETCH_INVOICES_PARAMS>;
}>;

export type FETCH_CUSTOMER_INVOICES_QUERY = {
  fetch_customer_invoices: {
    invoices: Array<{
      ' $fragmentRefs'?: {
        CORE_CUSTOMER_INVOICE_FRAGMENT: CORE_CUSTOMER_INVOICE_FRAGMENT;
      };
    }>;
    pagination: { count: number; items: number; page: number };
  };
};

export type FETCH_SSP_INVOICES_QUERY_VARIABLES = Exact<{
  pagination: PAGINATION_INPUT;
  search_params?: InputMaybe<FETCH_INVOICES_PARAMS>;
}>;

export type FETCH_SSP_INVOICES_QUERY = {
  fetch_ssp_invoices: {
    invoices: Array<{
      ' $fragmentRefs'?: {
        SSP_CUSTOMER_INVOICE_FRAGMENT: SSP_CUSTOMER_INVOICE_FRAGMENT;
      };
    }>;
    pagination: { count: number; items: number; page: number };
  };
};

export type UPDATE_CUSTOMER_INVOICE_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  invoice_id: Scalars['Int']['input'];
  params: UPDATE_CUSTOMER_INVOICE_PARAMS;
}>;

export type UPDATE_CUSTOMER_INVOICE_MUTATION = {
  update_customer_invoice: boolean;
};

export type ADD_PAYMENT_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  params: ADD_PAYMENT_PARAMS;
}>;

export type ADD_PAYMENT_MUTATION = { add_payment: boolean };

export type ADD_CREDIT_NOTE_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  params: ADD_CREDIT_NOTE_PARAMS;
}>;

export type ADD_CREDIT_NOTE_MUTATION = { add_credit_note: boolean };

export type ADD_DEBIT_NOTE_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  params: ADD_DEBIT_NOTE_PARAMS;
}>;

export type ADD_DEBIT_NOTE_MUTATION = { add_debit_note: boolean };

export type CANCEL_REFUND_INVOICE_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  invoice_id: Scalars['Int']['input'];
  params: CANCEL_REFUND_INVOICE_PARAMS;
}>;

export type CANCEL_REFUND_INVOICE_MUTATION = { cancel_refund_invoice: boolean };

export type REJECT_BILLING_TRANSACTION_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  transaction_id: Scalars['Int']['input'];
  invoice_id?: InputMaybe<Scalars['Int']['input']>;
}>;

export type REJECT_BILLING_TRANSACTION_MUTATION = {
  reject_billing_transaction: boolean;
};

export type TRANSFER_TRANSACTION_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  params: TRANSFER_TRANSACTION_PARAMS;
}>;

export type TRANSFER_TRANSACTION_MUTATION = { transfer_transaction: boolean };

export type GENERATE_CUSTOMERS_INVOICES_MUTATION_VARIABLES = Exact<{
  invoice_date: Scalars['String']['input'];
  invoice_description: Scalars['String']['input'];
  month_of: Scalars['String']['input'];
}>;

export type GENERATE_CUSTOMERS_INVOICES_MUTATION = {
  generate_customers_invoices: string;
};

export type REGENERATE_CUSTOMERS_INVOICES_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  invoice_date: Scalars['String']['input'];
  invoice_description: Scalars['String']['input'];
  month_of: Scalars['String']['input'];
}>;

export type REGENERATE_CUSTOMERS_INVOICES_MUTATION = {
  regenerate_customers_invoices: string;
};

export type REGENERATE_ONE_TIME_INVOICE_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  invoice_id: Scalars['Int']['input'];
}>;

export type REGENERATE_ONE_TIME_INVOICE_MUTATION = {
  regenerate_one_time_invoice: string;
};

export type EMAIL_CUSTOMERS_INVOICES_MUTATION_VARIABLES = Exact<{
  month_of: Scalars['String']['input'];
  email_body_text?: InputMaybe<Scalars['String']['input']>;
  invoice_ids?: InputMaybe<
    | Array<InputMaybe<Scalars['Int']['input']>>
    | InputMaybe<Scalars['Int']['input']>
  >;
}>;

export type EMAIL_CUSTOMERS_INVOICES_MUTATION = {
  email_customers_invoices: string;
};

export type EMAIL_CUSTOMERS_INVOICES_ADVANCED_MUTATION_VARIABLES = Exact<{
  params: EMAIL_CUSTOMERS_INVOICES_ADVANCED_PARAMS;
}>;

export type EMAIL_CUSTOMERS_INVOICES_ADVANCED_MUTATION = {
  email_customers_invoices_advanced: string;
};

export type EMAIL_CUSTOMER_TRANSACTION_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  transaction_id: Scalars['Int']['input'];
  email_body_text?: InputMaybe<Scalars['String']['input']>;
}>;

export type EMAIL_CUSTOMER_TRANSACTION_MUTATION = {
  email_customer_transaction: string;
};

export type FETCH_CUSTOMER_BILLING_TRANSACTIONS_QUERY_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  pagination: PAGINATION_INPUT;
}>;

export type FETCH_CUSTOMER_BILLING_TRANSACTIONS_QUERY = {
  fetch_billing_transactions: {
    transactions: Array<{
      ' $fragmentRefs'?: {
        CUSTOMER_BILLING_TRANSACTION_FRAGMENT: CUSTOMER_BILLING_TRANSACTION_FRAGMENT;
      };
    }>;
    pagination: { count: number; items: number; page: number };
  };
};

export type GENERATE_CUSTOMER_STATEMENT_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
}>;

export type GENERATE_CUSTOMER_STATEMENT_MUTATION = {
  generate_customer_statement: string;
};

export type FETCH_AVAILABLE_PAYMENT_METHODS_QUERY_VARIABLES = Exact<{
  [key: string]: never;
}>;

export type FETCH_AVAILABLE_PAYMENT_METHODS_QUERY = {
  fetch_available_payment_methods: Array<string>;
};

export type GENERATE_SSP_MONTHLY_BILLING_REPORT_MUTATION_VARIABLES = Exact<{
  billing_month: Scalars['String']['input'];
  billing_year: Scalars['String']['input'];
}>;

export type GENERATE_SSP_MONTHLY_BILLING_REPORT_MUTATION = {
  generate_ssp_monthly_billing_report: string;
};

export type GENERATE_SSP_BILLING_STATEMENTS_MUTATION_VARIABLES = Exact<{
  [key: string]: never;
}>;

export type GENERATE_SSP_BILLING_STATEMENTS_MUTATION = {
  generate_ssp_billing_statements: string;
};

export type GENERATE_REVENUE_REPORT_MUTATION_VARIABLES = Exact<{
  year: Scalars['String']['input'];
}>;

export type GENERATE_REVENUE_REPORT_MUTATION = {
  generate_revenue_report: { report: { download_link: string } };
};

export type DISCOUNT_TEMPLATE_CORE_FRAGMENT = {
  id: number;
  name: string;
  description: string;
  tax_percentage: string;
  created_at: string;
  updated_at: string;
  price_matrix: Array<{
    ' $fragmentRefs'?: {
      DISCOUNT_PRICE_CORE_FRAGMENT: DISCOUNT_PRICE_CORE_FRAGMENT;
    };
  }>;
} & { ' $fragmentName'?: 'DISCOUNT_TEMPLATE_CORE_FRAGMENT' };

export type DISCOUNT_PRICE_CORE_FRAGMENT = {
  id: number;
  recurrence: BILLING_RECURRENCE;
  price_excl_tax: string;
  currency: CURRENCY_CODES;
  active: boolean;
  discarded_at?: string | null;
  created_at: string;
  updated_at?: string | null;
} & { ' $fragmentName'?: 'DISCOUNT_PRICE_CORE_FRAGMENT' };

export type FETCH_DISCOUNT_TEMPLATES_QUERY_VARIABLES = Exact<{
  currency?: InputMaybe<CURRENCY_CODES>;
}>;

export type FETCH_DISCOUNT_TEMPLATES_QUERY = {
  discount_templates: {
    success: boolean;
    message?: string | null;
    discount_templates: Array<{
      ' $fragmentRefs'?: {
        DISCOUNT_TEMPLATE_CORE_FRAGMENT: DISCOUNT_TEMPLATE_CORE_FRAGMENT;
      };
    }>;
    pagination: { count: number; items: number; page: number };
  };
};

export type CREATE_DISCOUNT_TEMPLATE_MUTATION_VARIABLES = Exact<{
  name: Scalars['String']['input'];
  description: Scalars['String']['input'];
  tax_percentage: Scalars['String']['input'];
  discount_pricings?: InputMaybe<
    Array<CREATE_DISCOUNT_PRICE_INPUT> | CREATE_DISCOUNT_PRICE_INPUT
  >;
}>;

export type CREATE_DISCOUNT_TEMPLATE_MUTATION = {
  create_discount_template: { success: boolean; message?: string | null };
};

export type UPDATE_DISCOUNT_TEMPLATE_MUTATION_VARIABLES = Exact<{
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  tax_percentage?: InputMaybe<Scalars['String']['input']>;
}>;

export type UPDATE_DISCOUNT_TEMPLATE_MUTATION = {
  update_discount_template: { success: boolean };
};

export type DELETE_DISCOUNT_TEMPLATE_MUTATION_VARIABLES = Exact<{
  id: Scalars['Int']['input'];
}>;

export type DELETE_DISCOUNT_TEMPLATE_MUTATION = {
  delete_discount_template: { success: boolean };
};

export type CREATE_DISCOUNT_PRICE_MUTATION_VARIABLES = Exact<{
  discount_id: Scalars['Int']['input'];
  discount_price: CREATE_DISCOUNT_PRICE_INPUT;
}>;

export type CREATE_DISCOUNT_PRICE_MUTATION = {
  create_discount_price: { success: boolean };
};

export type UPDATE_DISCOUNT_PRICE_MUTATION_VARIABLES = Exact<{
  discount_id: Scalars['Int']['input'];
  price_id: Scalars['Int']['input'];
  price_excl_tax: Scalars['String']['input'];
}>;

export type UPDATE_DISCOUNT_PRICE_MUTATION = {
  update_discount_price: { success: boolean };
};

export type DELETE_DISCOUNT_PRICE_MUTATION_VARIABLES = Exact<{
  discount_id: Scalars['Int']['input'];
  price_id: Scalars['Int']['input'];
}>;

export type DELETE_DISCOUNT_PRICE_MUTATION = {
  delete_discount_price: { success: boolean };
};

export type PRODUCT_TEMPLATE_CORE_FRAGMENT = {
  id: number;
  name: string;
  description: string;
  tax_percentage: string;
  created_at: string;
  updated_at: string;
  price_matrix: Array<{
    ' $fragmentRefs'?: {
      PRODUCT_PRICE_CORE_FRAGMENT: PRODUCT_PRICE_CORE_FRAGMENT;
    };
  }>;
} & { ' $fragmentName'?: 'PRODUCT_TEMPLATE_CORE_FRAGMENT' };

export type PRODUCT_PRICE_CORE_FRAGMENT = {
  id: number;
  recurrence: BILLING_RECURRENCE;
  price_excl_tax: string;
  currency: CURRENCY_CODES;
  active: boolean;
  discarded_at?: string | null;
  created_at: string;
  updated_at?: string | null;
} & { ' $fragmentName'?: 'PRODUCT_PRICE_CORE_FRAGMENT' };

export type FETCH_PRODUCT_TEMPLATES_QUERY_VARIABLES = Exact<{
  currency?: InputMaybe<CURRENCY_CODES>;
}>;

export type FETCH_PRODUCT_TEMPLATES_QUERY = {
  product_templates: {
    success: boolean;
    message?: string | null;
    product_templates: Array<{
      ' $fragmentRefs'?: {
        PRODUCT_TEMPLATE_CORE_FRAGMENT: PRODUCT_TEMPLATE_CORE_FRAGMENT;
      };
    }>;
    pagination: { count: number; items: number; page: number };
  };
};

export type CREATE_PRODUCT_TEMPLATE_MUTATION_VARIABLES = Exact<{
  name: Scalars['String']['input'];
  description: Scalars['String']['input'];
  tax_percentage: Scalars['String']['input'];
  product_pricings?: InputMaybe<
    Array<CREATE_PRODUCT_PRICE_INPUT> | CREATE_PRODUCT_PRICE_INPUT
  >;
}>;

export type CREATE_PRODUCT_TEMPLATE_MUTATION = {
  create_product_template: { success: boolean; message?: string | null };
};

export type UPDATE_PRODUCT_TEMPLATE_MUTATION_VARIABLES = Exact<{
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  tax_percentage?: InputMaybe<Scalars['String']['input']>;
}>;

export type UPDATE_PRODUCT_TEMPLATE_MUTATION = {
  update_product_template: { success: boolean };
};

export type DELETE_PRODUCT_TEMPLATE_MUTATION_VARIABLES = Exact<{
  id: Scalars['Int']['input'];
}>;

export type DELETE_PRODUCT_TEMPLATE_MUTATION = {
  delete_product_template: { success: boolean };
};

export type CREATE_PRODUCT_PRICE_MUTATION_VARIABLES = Exact<{
  product_id: Scalars['Int']['input'];
  product_price: CREATE_PRODUCT_PRICE_INPUT;
}>;

export type CREATE_PRODUCT_PRICE_MUTATION = {
  create_product_price: { success: boolean };
};

export type UPDATE_PRODUCT_PRICE_MUTATION_VARIABLES = Exact<{
  product_id: Scalars['Int']['input'];
  price_id: Scalars['Int']['input'];
  price_excl_tax: Scalars['String']['input'];
}>;

export type UPDATE_PRODUCT_PRICE_MUTATION = {
  update_product_price: { success: boolean };
};

export type DELETE_PRODUCT_PRICE_MUTATION_VARIABLES = Exact<{
  product_id: Scalars['Int']['input'];
  price_id: Scalars['Int']['input'];
}>;

export type DELETE_PRODUCT_PRICE_MUTATION = {
  delete_product_price: { success: boolean };
};

export type CORE_AREA_FRAGMENT = { id: number; name?: string | null } & {
  ' $fragmentName'?: 'CORE_AREA_FRAGMENT';
};

export type CREATE_SSP_AREA_MUTATION_VARIABLES = Exact<{
  name: Scalars['String']['input'];
}>;

export type CREATE_SSP_AREA_MUTATION = {
  create_ssp_area?: {
    success: boolean;
    message?: string | null;
    area?: {
      ' $fragmentRefs'?: { CORE_AREA_FRAGMENT: CORE_AREA_FRAGMENT };
    } | null;
  } | null;
};

export type UPDATE_SSP_AREA_MUTATION_VARIABLES = Exact<{
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
}>;

export type UPDATE_SSP_AREA_MUTATION = {
  update_ssp_area?: {
    success: boolean;
    message?: string | null;
    area?: {
      ' $fragmentRefs'?: { CORE_AREA_FRAGMENT: CORE_AREA_FRAGMENT };
    } | null;
  } | null;
};

export type DISCARD_SSP_AREA_MUTATION_VARIABLES = Exact<{
  id: Scalars['Int']['input'];
  reassign_to_area: Scalars['Int']['input'];
}>;

export type DISCARD_SSP_AREA_MUTATION = {
  discard_ssp_area?: { area: number; success: boolean; message: string } | null;
};

export type FETCH_AREAS_QUERY_VARIABLES = Exact<{
  pagination: PAGINATION_INPUT;
}>;

export type FETCH_AREAS_QUERY = {
  areas: {
    success: boolean;
    message?: string | null;
    areas: Array<{
      ' $fragmentRefs'?: { CORE_AREA_FRAGMENT: CORE_AREA_FRAGMENT };
    }>;
    pagination: { count: number; items: number; page: number };
  };
};

export type CORE_DECODER_FRAGMENT = { id: number; name?: string | null } & {
  ' $fragmentName'?: 'CORE_DECODER_FRAGMENT';
};

export type CREATE_DECODER_MUTATION_VARIABLES = Exact<{
  params: CREATE_DECODER_INPUT;
}>;

export type CREATE_DECODER_MUTATION = {
  create_decoder: {
    success: boolean;
    message?: string | null;
    decoder?: {
      ' $fragmentRefs'?: { CORE_DECODER_FRAGMENT: CORE_DECODER_FRAGMENT };
    } | null;
  };
};

export type UPDATE_DECODER_MUTATION_VARIABLES = Exact<{
  params: UPDATE_DECODER_INPUT;
}>;

export type UPDATE_DECODER_MUTATION = {
  update_decoder: {
    success: boolean;
    message?: string | null;
    decoder?: {
      ' $fragmentRefs'?: { CORE_DECODER_FRAGMENT: CORE_DECODER_FRAGMENT };
    } | null;
  };
};

export type DELETE_DECODER_MUTATION_VARIABLES = Exact<{
  id: Scalars['Int']['input'];
}>;

export type DELETE_DECODER_MUTATION = {
  delete_decoder: {
    decoder?: number | null;
    success: boolean;
    message?: string | null;
  };
};

export type FETCH_DECODER_QUERY_VARIABLES = Exact<{
  id: Scalars['Int']['input'];
}>;

export type FETCH_DECODER_QUERY = {
  decoder: {
    success: boolean;
    message?: string | null;
    decoder: {
      ' $fragmentRefs'?: { CORE_DECODER_FRAGMENT: CORE_DECODER_FRAGMENT };
    };
  };
};

export type FETCH_DECODERS_QUERY_VARIABLES = Exact<{
  pagination: PAGINATION_INPUT;
}>;

export type FETCH_DECODERS_QUERY = {
  decoders: {
    success: boolean;
    message?: string | null;
    decoders: Array<{
      ' $fragmentRefs'?: { CORE_DECODER_FRAGMENT: CORE_DECODER_FRAGMENT };
    }>;
    pagination: { count: number; items: number; page: number };
  };
};

export type CORE_SSP_SETTINGS_FRAGMENT = {
  name?: string | null;
  email?: string | null;
  time_zone?: string | null;
  reaction_test_time?: number | null;
  responsetime?: number | null;
  timeout?: number | null;
  billing_enabled: boolean;
  banking_username?: string | null;
  abbreviated_name?: string | null;
  trading_number?: string | null;
  account_number?: string | null;
  currencies: Array<CURRENCY_CODES>;
  invoice_banking_details?: string | null;
  invoice_footer_information?: string | null;
  collection_days: Array<number>;
  invoice_due_days?: number | null;
  invoice_job_last_run?: string | null;
  invoice_job_status?: string | null;
  web_link?: string | null;
  terms_and_conditions?: string | null;
} & { ' $fragmentName'?: 'CORE_SSP_SETTINGS_FRAGMENT' };

export type FETCH_SSP_SETTINGS_QUERY_VARIABLES = Exact<{
  [key: string]: never;
}>;

export type FETCH_SSP_SETTINGS_QUERY = {
  ssp_company_details: {
    ' $fragmentRefs'?: {
      CORE_SSP_SETTINGS_FRAGMENT: CORE_SSP_SETTINGS_FRAGMENT;
    };
  };
};

export type UPDATE_SSP_SETTINGS_MUTATION_VARIABLES = Exact<{
  params: SSP_COMPANY_DETAILS_INPUT;
}>;

export type UPDATE_SSP_SETTINGS_MUTATION = {
  update_ssp_company_details: boolean;
};

export type CORE_TRANSMITTER_FRAGMENT = {
  id: number;
  number?: string | null;
  set_name?: string | null;
  description?: string | null;
  status?: TRANSMITTER_STATUS | null;
  heartbeat_interval?: number | null;
  area?: { id: number; name?: string | null } | null;
  decoder?: { id: number; name?: string | null } | null;
} & { ' $fragmentName'?: 'CORE_TRANSMITTER_FRAGMENT' };

export type CREATE_TRANSMITTER_MUTATION_VARIABLES = Exact<{
  params: CREATE_TRANSMITTER_PARAMS;
}>;

export type CREATE_TRANSMITTER_MUTATION = {
  create_transmitter: {
    success: boolean;
    message?: string | null;
    transmitter?: {
      ' $fragmentRefs'?: {
        CORE_TRANSMITTER_FRAGMENT: CORE_TRANSMITTER_FRAGMENT;
      };
    } | null;
  };
};

export type UPDATE_TRANSMITTER_MUTATION_VARIABLES = Exact<{
  id: Scalars['Int']['input'];
  params: UPDATE_TRANSMITTER_PARAMS;
}>;

export type UPDATE_TRANSMITTER_MUTATION = {
  update_transmitter: {
    success: boolean;
    message?: string | null;
    transmitter?: {
      ' $fragmentRefs'?: {
        CORE_TRANSMITTER_FRAGMENT: CORE_TRANSMITTER_FRAGMENT;
      };
    } | null;
  };
};

export type UPDATE_TRANSMITTER_STATUS_MUTATION_VARIABLES = Exact<{
  id: Scalars['Int']['input'];
  property_id?: InputMaybe<Scalars['Int']['input']>;
  status: TRANSMITTER_STATUS;
}>;

export type UPDATE_TRANSMITTER_STATUS_MUTATION = {
  update_transmitter_status: {
    success: boolean;
    message?: string | null;
    transmitter?: {
      ' $fragmentRefs'?: {
        CORE_TRANSMITTER_FRAGMENT: CORE_TRANSMITTER_FRAGMENT;
      };
    } | null;
  };
};

export type FETCH_TRANSMITTERS_QUERY_VARIABLES = Exact<{
  search_params?: InputMaybe<FETCH_TRANSMITTERS_PARAMS>;
  pagination: PAGINATION_INPUT;
}>;

export type FETCH_TRANSMITTERS_QUERY = {
  transmitters: {
    success: boolean;
    message?: string | null;
    transmitters: Array<{
      ' $fragmentRefs'?: {
        CORE_TRANSMITTER_FRAGMENT: CORE_TRANSMITTER_FRAGMENT;
      };
    }>;
    pagination: { count: number; items: number; page: number };
  };
};

export type FETCH_SSP_REPORTS_QUERY_VARIABLES = Exact<{
  pagination: PAGINATION_INPUT;
}>;

export type FETCH_SSP_REPORTS_QUERY = {
  fetch_ssp_reports?: {
    reports: Array<{
      id: number;
      name: string;
      status?: string | null;
      download_link?: string | null;
      records_count?: number | null;
      date_from?: string | null;
      date_to?: string | null;
      created_at?: string | null;
      filters?: {
        active?: string | null;
        state?: number | null;
        area_id_in?: Array<number> | null;
        decoder_eq?: string | null;
        alarm_type_eq?: string | null;
        created_at_gteq?: string | null;
        created_at_lteq?: string | null;
      } | null;
    }>;
    pagination: { count: number; items: number; page: number };
  } | null;
};

export type GENERATE_FALSE_ALARMS_REPORT_QUERY_VARIABLES = Exact<{
  area_ids?: InputMaybe<
    Array<Scalars['Int']['input']> | Scalars['Int']['input']
  >;
  alarm_type?: InputMaybe<Scalars['String']['input']>;
  date_from?: InputMaybe<Scalars['String']['input']>;
  date_to?: InputMaybe<Scalars['String']['input']>;
}>;

export type GENERATE_FALSE_ALARMS_REPORT_QUERY = {
  generate_false_alarms_report: boolean;
};

export type GENERATE_OVERACTIVE_ALARMS_REPORT_QUERY_VARIABLES = Exact<{
  area_ids?: InputMaybe<
    Array<Scalars['Int']['input']> | Scalars['Int']['input']
  >;
  alarm_type?: InputMaybe<Scalars['String']['input']>;
  date_from?: InputMaybe<Scalars['String']['input']>;
  date_to?: InputMaybe<Scalars['String']['input']>;
}>;

export type GENERATE_OVERACTIVE_ALARMS_REPORT_QUERY = {
  generate_overactive_alarms_report: boolean;
};

export type GENERATE_HOME_ALARM_REPORT_QUERY_VARIABLES = Exact<{
  area_ids?: InputMaybe<
    Array<Scalars['Int']['input']> | Scalars['Int']['input']
  >;
  alarm_type?: InputMaybe<Scalars['String']['input']>;
  date_from?: InputMaybe<Scalars['String']['input']>;
  date_to?: InputMaybe<Scalars['String']['input']>;
}>;

export type GENERATE_HOME_ALARM_REPORT_QUERY = {
  generate_home_alarm_report: boolean;
};

export type GENERATE_TRANSMITTERS_STOCK_REPORT_QUERY_VARIABLES = Exact<{
  area_ids?: InputMaybe<
    Array<Scalars['Int']['input']> | Scalars['Int']['input']
  >;
  transmitter_status?: InputMaybe<TRANSMITTER_STATUS>;
  decoder_name?: InputMaybe<Scalars['String']['input']>;
}>;

export type GENERATE_TRANSMITTERS_STOCK_REPORT_QUERY = {
  generate_transmitters_stock_report: boolean;
};

export type GENERATE_RESPONDERS_DELEGATIONS_REPORT_QUERY_VARIABLES = Exact<{
  area_ids?: InputMaybe<
    Array<Scalars['Int']['input']> | Scalars['Int']['input']
  >;
  date_from?: InputMaybe<Scalars['String']['input']>;
  date_to?: InputMaybe<Scalars['String']['input']>;
}>;

export type GENERATE_RESPONDERS_DELEGATIONS_REPORT_QUERY = {
  generate_responders_delegations_report: boolean;
};

export type GENERATE_OB_STATS_REPORT_QUERY_VARIABLES = Exact<{
  area_ids?: InputMaybe<
    Array<Scalars['Int']['input']> | Scalars['Int']['input']
  >;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  alarm_type?: InputMaybe<Scalars['String']['input']>;
  date_from?: InputMaybe<Scalars['String']['input']>;
  date_to?: InputMaybe<Scalars['String']['input']>;
}>;

export type GENERATE_OB_STATS_REPORT_QUERY = {
  generate_ob_stats_report: boolean;
};

export type GENERATE_CUSTOMERS_PROPERTIES_REPORT_QUERY_VARIABLES = Exact<{
  area_ids?: InputMaybe<
    Array<Scalars['Int']['input']> | Scalars['Int']['input']
  >;
  property_active?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type GENERATE_CUSTOMERS_PROPERTIES_REPORT_QUERY = {
  generate_customers_properties_report: boolean;
};

export type GENERATE_CUSTOMERS_KEYHOLDERS_REPORT_QUERY_VARIABLES = Exact<{
  area_ids?: InputMaybe<
    Array<Scalars['Int']['input']> | Scalars['Int']['input']
  >;
  property_active?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type GENERATE_CUSTOMERS_KEYHOLDERS_REPORT_QUERY = {
  generate_customers_keyholders_report: boolean;
};

export type GENERATE_WORK_SHIFT_REPORT_QUERY_VARIABLES = Exact<{
  day_shift_start: Scalars['String']['input'];
  date_from: Scalars['String']['input'];
  date_to: Scalars['String']['input'];
  night_shift_start: Scalars['String']['input'];
}>;

export type GENERATE_WORK_SHIFT_REPORT_QUERY = {
  generate_work_shift_report: boolean;
};

export type FETCH_SYSTEM_EVENTS_AUDIT_QUERY_VARIABLES = Exact<{
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  search_params?: InputMaybe<SYSTEM_EVENTS_AUDIT_SEARCH_PARAMS>;
  pagination: PAGINATION_INPUT;
}>;

export type FETCH_SYSTEM_EVENTS_AUDIT_QUERY = {
  fetch_system_events_audit: {
    system_change_events: Array<{
      ' $fragmentRefs'?: {
        SYSTEM_CHANGE_EVENT_FRAGMENT: SYSTEM_CHANGE_EVENT_FRAGMENT;
      };
    }>;
    pagination: { count: number; items: number; page: number };
  };
};

export type FETCH_SYSTEM_CHANGE_TYPES_QUERY_VARIABLES = Exact<{
  [key: string]: never;
}>;

export type FETCH_SYSTEM_CHANGE_TYPES_QUERY = {
  fetch_system_change_types?: Array<string> | null;
};

export type SYSTEM_CHANGE_EVENT_FRAGMENT = {
  log_id: number;
  event_type: SYSTEM_CHANGE_EVENT_TYPE;
  changed_type: string;
  changed_date: string;
  changed_by_id: string;
  changes?: Array<{
    ' $fragmentRefs'?: {
      SYSTEM_CHANGE_EVENT_VALUE_FRAGMENT: SYSTEM_CHANGE_EVENT_VALUE_FRAGMENT;
    };
  }> | null;
} & { ' $fragmentName'?: 'SYSTEM_CHANGE_EVENT_FRAGMENT' };

export type SYSTEM_CHANGE_EVENT_VALUE_FRAGMENT = {
  key?: string | null;
  old_value?: string | null;
  new_value?: string | null;
} & { ' $fragmentName'?: 'SYSTEM_CHANGE_EVENT_VALUE_FRAGMENT' };

export type TRACK_RESPONDERS_QUERY_VARIABLES = Exact<{ [key: string]: never }>;

export type TRACK_RESPONDERS_QUERY = {
  responders: Array<{
    ' $fragmentRefs'?: { LIVE_RESPONDER_FRAGMENT: LIVE_RESPONDER_FRAGMENT };
  }>;
};

export type LIVE_RESPONDER_FRAGMENT = {
  id: number;
  name: string;
  status: RESPONDER_STATUS;
  updated_on?: string | null;
  position?: { longitude: string; latitude: string } | null;
} & { ' $fragmentName'?: 'LIVE_RESPONDER_FRAGMENT' };

export type CREATE_RESPONDER_MUTATION_VARIABLES = Exact<{
  params: RESPONDER_PARAMS;
}>;

export type CREATE_RESPONDER_MUTATION = {
  create_responder: {
    success: boolean;
    message?: string | null;
    responder?: {
      ' $fragmentRefs'?: { CORE_RESPONDER_FRAGMENT: CORE_RESPONDER_FRAGMENT };
    } | null;
  };
};

export type UPDATE_RESPONDER_MUTATION_VARIABLES = Exact<{
  id: Scalars['Int']['input'];
  params: RESPONDER_PARAMS;
}>;

export type UPDATE_RESPONDER_MUTATION = {
  update_responder: {
    success: boolean;
    message?: string | null;
    responder?: {
      ' $fragmentRefs'?: { CORE_RESPONDER_FRAGMENT: CORE_RESPONDER_FRAGMENT };
    } | null;
  };
};

export type DELETE_RESPONDER_MUTATION_VARIABLES = Exact<{
  id: Scalars['Int']['input'];
}>;

export type DELETE_RESPONDER_MUTATION = {
  delete_responder: {
    success: boolean;
    message?: string | null;
    responder_id?: number | null;
  };
};

export type FETCH_RESPONDER_QUERY_VARIABLES = Exact<{
  id: Scalars['Int']['input'];
}>;

export type FETCH_RESPONDER_QUERY = {
  responder: {
    ' $fragmentRefs'?: { CORE_RESPONDER_FRAGMENT: CORE_RESPONDER_FRAGMENT };
  };
};

export type FETCH_RESPONDERS_QUERY_VARIABLES = Exact<{ [key: string]: never }>;

export type FETCH_RESPONDERS_QUERY = {
  responders: Array<{
    ' $fragmentRefs'?: { CORE_RESPONDER_FRAGMENT: CORE_RESPONDER_FRAGMENT };
  }>;
};

export type CORE_RESPONDER_FRAGMENT = {
  id: number;
  name: string;
  email?: string | null;
  password?: string | null;
  status: RESPONDER_STATUS;
  created_on?: string | null;
  updated_on?: string | null;
  area_ids: Array<number>;
  position?: { longitude: string; latitude: string } | null;
} & { ' $fragmentName'?: 'CORE_RESPONDER_FRAGMENT' };

export type CREATE_TECHNICIAN_MUTATION_VARIABLES = Exact<{
  params: TECHNICIAN_PARAMS;
}>;

export type CREATE_TECHNICIAN_MUTATION = { create_technician: boolean };

export type UPDATE_TECHNICIAN_MUTATION_VARIABLES = Exact<{
  id: Scalars['Int']['input'];
  params: TECHNICIAN_PARAMS;
}>;

export type UPDATE_TECHNICIAN_MUTATION = { update_technician: boolean };

export type DELETE_TECHNICIAN_MUTATION_VARIABLES = Exact<{
  id: Scalars['Int']['input'];
}>;

export type DELETE_TECHNICIAN_MUTATION = { delete_technician: boolean };

export type FETCH_TECHNICIANS_QUERY_VARIABLES = Exact<{ [key: string]: never }>;

export type FETCH_TECHNICIANS_QUERY = {
  fetch_technicians: Array<{
    ' $fragmentRefs'?: { CORE_TECHNICIAN_FRAGMENT: CORE_TECHNICIAN_FRAGMENT };
  }>;
};

export type CORE_TECHNICIAN_FRAGMENT = {
  id: number;
  active: boolean;
  available: boolean;
  name: string;
  phone_number?: string | null;
  created_at: string;
  updated_at?: string | null;
} & { ' $fragmentName'?: 'CORE_TECHNICIAN_FRAGMENT' };

export type CORE_AGENT_FRAGMENT = {
  id: number;
  username?: string | null;
  email?: string | null;
  status?: AGENT_STATUS | null;
  type?: USER_TYPE | null;
  name?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  role_id?: number | null;
} & { ' $fragmentName'?: 'CORE_AGENT_FRAGMENT' };

export type LOGIN_MUTATION_VARIABLES = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;

export type LOGIN_MUTATION = {
  login: {
    seon_auth_headers?: {
      client?: string | null;
      uid?: string | null;
      token?: string | null;
      expiry?: string | null;
      type?: string | null;
      servcraft_token?: string | null;
    } | null;
    user: {
      id: number;
      username: string;
      email: string;
      created_at?: string | null;
      updated_at?: string | null;
      status?: USER_STATUS | null;
      role: {
        id: number;
        company_id?: number | null;
        created_at?: string | null;
        discarded_at?: string | null;
        name: string;
        permissions: Array<{
          id: number;
          action: string;
          name: string;
          subject_class: string;
        }>;
      };
    };
  };
};

export type LOGOUT_MUTATION_VARIABLES = Exact<{ [key: string]: never }>;

export type LOGOUT_MUTATION = { logout: { success: boolean } };

export type ASSIGN_AGENT_AREAS_MUTATION_VARIABLES = Exact<{
  areas?: InputMaybe<
    | Array<InputMaybe<Scalars['Int']['input']>>
    | InputMaybe<Scalars['Int']['input']>
  >;
}>;

export type ASSIGN_AGENT_AREAS_MUTATION = {
  assign_agent_areas: { areas?: Array<number | null> | null; success: boolean };
};

export type UNASSIGN_AGENT_AREAS_MUTATION_VARIABLES = Exact<{
  areas?: InputMaybe<
    | Array<InputMaybe<Scalars['Int']['input']>>
    | InputMaybe<Scalars['Int']['input']>
  >;
}>;

export type UNASSIGN_AGENT_AREAS_MUTATION = {
  unassign_agent_areas: {
    areas?: Array<number | null> | null;
    success: boolean;
  };
};

export type DELETE_AGENT_MUTATION_VARIABLES = Exact<{
  agent_id: Scalars['Int']['input'];
}>;

export type DELETE_AGENT_MUTATION = {
  delete_agent: { success: boolean; message: string; agent?: string | null };
};

export type UPDATE_AGENT_MUTATION_VARIABLES = Exact<{
  id: Scalars['Int']['input'];
  params: AGENT_PARAMS;
}>;

export type UPDATE_AGENT_MUTATION = {
  update_agent: {
    success: boolean;
    message: string;
    agent: { ' $fragmentRefs'?: { CORE_AGENT_FRAGMENT: CORE_AGENT_FRAGMENT } };
  };
};

export type CREATE_AGENT_MUTATION_VARIABLES = Exact<{
  params: AGENT_PARAMS;
}>;

export type CREATE_AGENT_MUTATION = {
  create_agent: {
    success: boolean;
    message: string;
    agent: { ' $fragmentRefs'?: { CORE_AGENT_FRAGMENT: CORE_AGENT_FRAGMENT } };
  };
};

export type FETCH_AGENTS_QUERY_VARIABLES = Exact<{ [key: string]: never }>;

export type FETCH_AGENTS_QUERY = {
  agents: {
    total: number;
    success: boolean;
    agents: Array<{
      ' $fragmentRefs'?: { CORE_AGENT_FRAGMENT: CORE_AGENT_FRAGMENT };
    }>;
  };
};

export type FETCH_AREAS_STATUS_QUERY_VARIABLES = Exact<{
  [key: string]: never;
}>;

export type FETCH_AREAS_STATUS_QUERY = {
  fetch_areas_status: {
    success: boolean;
    areas: Array<{
      id: number;
      description?: string | null;
      assigned_agents_count?: number | null;
      active_alarms_count?: number | null;
    }>;
  };
};

export type LOGIN_USER_MUTATION_VARIABLES = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;

export type LOGIN_USER_MUTATION = {
  login_user: {
    seon_auth_headers: {
      client?: string | null;
      uid?: string | null;
      token?: string | null;
      expiry?: string | null;
      type?: string | null;
      servcraft_token?: string | null;
    };
    user: {
      id: number;
      username: string;
      email: string;
      created_at?: string | null;
      updated_at?: string | null;
      status?: USER_STATUS | null;
      role: {
        id: number;
        company_id?: number | null;
        created_at?: string | null;
        discarded_at?: string | null;
        name: string;
        permissions: Array<{
          id: number;
          action: string;
          name: string;
          subject_class: string;
        }>;
      };
    };
    ssp_settings: {
      ssp_id: number;
      logo_image_url: string;
      billing_enabled: boolean;
    };
  };
};

export type CORE_ALARM_FRAGMENT = {
  id: number;
  type: string;
  priority: number;
  source: ALARM_SOURCE;
  alarm_state: ALARM_STATE;
  customer?: {
    ' $fragmentRefs'?: { ALARM_CUSTOMER_FRAGMENT: ALARM_CUSTOMER_FRAGMENT };
  } | null;
  property: {
    id: number;
    name?: string | null;
    type?: PROPERTY_TYPE | null;
    password?: string | null;
    duress_password?: string | null;
    testing_enabled?: boolean | null;
    status?: PROPERTY_STATUS | null;
    images?: Array<{ url: string }> | null;
    video_feeds?: Array<{ url: string }> | null;
    geospatial?: {
      entire_address?: string | null;
      coordinates?: { longitude: string; latitude: string } | null;
      area?: { name?: string | null } | null;
    } | null;
    keyholders?: Array<{
      id: number;
      name?: string | null;
      description?: string | null;
      mobile_phone?: string | null;
      landline_phone?: string | null;
      call_order?: number | null;
      password?: string | null;
    }> | null;
    instructions?: {
      HOLIDAY?: {
        id: number;
        type: PROPERTY_INSTRUCTION_TYPE;
        note?: string | null;
      } | null;
      NOTE?: {
        id: number;
        type: PROPERTY_INSTRUCTION_TYPE;
        note?: string | null;
      } | null;
      AGENT?: {
        id: number;
        type: PROPERTY_INSTRUCTION_TYPE;
        note?: string | null;
      } | null;
      RESPONDER?: {
        id: number;
        type: PROPERTY_INSTRUCTION_TYPE;
        note?: string | null;
      } | null;
      KEY?: {
        id: number;
        type: PROPERTY_INSTRUCTION_TYPE;
        note?: string | null;
      } | null;
    } | null;
  };
  triggered_zones: Array<{
    id: number;
    time_triggered?: string | null;
    description?: string | null;
    zone_type?: string | null;
    is_overactive?: boolean | null;
    on_hold_mode: { enabled: boolean };
  }>;
  triggered_transmitter?: {
    ' $fragmentRefs'?: { CORE_TRANSMITTER_FRAGMENT: CORE_TRANSMITTER_FRAGMENT };
  } | null;
  assigned_agents: Array<{ id: number; name?: string | null }>;
  assigned_responders: Array<{
    id?: number | null;
    name?: string | null;
    offline: boolean;
  }>;
  incident_report?: {
    ' $fragmentRefs'?: {
      CORE_ALARM_INCIDENT_REPORT_FRAGMENT: CORE_ALARM_INCIDENT_REPORT_FRAGMENT;
    };
  } | null;
  procedure_timestamps: {
    updated_at?: string | null;
    created_at: string;
    agent_acknowledged_instructions_at?: string | null;
    agent_phoned_first_keyholder_at?: string | null;
    keyholder_confirmed_emergency_at?: string | null;
    responder_dispatched_at?: string | null;
    responder_enroute_at?: string | null;
    responder_arrived_at?: string | null;
    responder_saved_property_at?: string | null;
    responder_closed_report_at?: string | null;
    alarm_completed_at?: string | null;
    alarm_reopened_at?: string | null;
    keyholder_cancelled_at?: string | null;
    customer_verified_password_at?: string | null;
  };
  notes: Array<{
    id: number;
    note?: string | null;
    agent_id?: number | null;
    created_at?: string | null;
    updated_at?: string | null;
  }>;
  keyholder_logs: Array<{
    id: number;
    client_keyholder_id?: number | null;
    keyholder_name?: string | null;
    keyholder_phone?: string | null;
    password_verified?: boolean | null;
    reached?: boolean | null;
    created_at: string;
  }>;
  panel_information?: { type?: string | null; panel_id?: string | null } | null;
} & { ' $fragmentName'?: 'CORE_ALARM_FRAGMENT' };

export type ALARM_CUSTOMER_FRAGMENT = {
  id: number;
  profile_picture?: string | null;
  contact: {
    title?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    landline_phone?: string | null;
    mobile_phone?: string | null;
    other_phone?: string | null;
  };
  medical?: {
    age?: number | null;
    gender?: string | null;
    medical_conditions?: string | null;
    bloodtype?: string | null;
    insurance_name?: string | null;
    insurance_policy_id?: string | null;
  } | null;
} & { ' $fragmentName'?: 'ALARM_CUSTOMER_FRAGMENT' };

export type FETCH_ALARM_QUERY_VARIABLES = Exact<{
  id: Scalars['Int']['input'];
}>;

export type FETCH_ALARM_QUERY = {
  alarm: { ' $fragmentRefs'?: { CORE_ALARM_FRAGMENT: CORE_ALARM_FRAGMENT } };
};

export type FETCH_ALARMS_QUERY_VARIABLES = Exact<{
  alarm_stack: ALARM_STACK;
}>;

export type FETCH_ALARMS_QUERY = {
  alarms: {
    total: number;
    success: boolean;
    alarms: Array<{
      ' $fragmentRefs'?: { CORE_ALARM_FRAGMENT: CORE_ALARM_FRAGMENT };
    }>;
  };
};

export type ASSIGN_RESPONDER_MUTATION_VARIABLES = Exact<{
  alarm_id: Scalars['Int']['input'];
  alarm_source: ALARM_SOURCE;
  reassigning: Scalars['Boolean']['input'];
  responder_id?: InputMaybe<Scalars['Int']['input']>;
  offline_name?: InputMaybe<Scalars['String']['input']>;
}>;

export type ASSIGN_RESPONDER_MUTATION = { assign_responder: boolean };

export type ACKNOWLEDGE_ALARM_INSTRUCTIONS_MUTATION_VARIABLES = Exact<{
  alarm_id: Scalars['Int']['input'];
  alarm_source: ALARM_SOURCE;
}>;

export type ACKNOWLEDGE_ALARM_INSTRUCTIONS_MUTATION = {
  acknowledge_alarm_instructions: boolean;
};

export type CANCEL_ALARM_MUTATION_VARIABLES = Exact<{
  alarm_id: Scalars['Int']['input'];
  alarm_source: ALARM_SOURCE;
  cancel_reason: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
}>;

export type CANCEL_ALARM_MUTATION = { cancel_alarm: boolean };

export type CLOSE_ALARM_MUTATION_VARIABLES = Exact<{
  alarm_id: Scalars['Int']['input'];
  alarm_source: ALARM_SOURCE;
  close_reason: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
}>;

export type CLOSE_ALARM_MUTATION = { close_alarm: boolean };

export type CLOSE_ALARMS_MUTATION_VARIABLES = Exact<{
  alarm_stack: ALARM_STACK;
  alarm_type?: InputMaybe<Scalars['String']['input']>;
  close_reason: Scalars['String']['input'];
}>;

export type CLOSE_ALARMS_MUTATION = { close_alarms: boolean };

export type INCREASE_ALARM_MUTATION_VARIABLES = Exact<{
  alarm_id: Scalars['Int']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
}>;

export type INCREASE_ALARM_MUTATION = { increase_alarm: boolean };

export type HISTORY_ALARMS_QUERY_VARIABLES = Exact<{
  pagination: PAGINATION_INPUT;
  search_params?: InputMaybe<HISTORY_ALARMS_PARAMS>;
}>;

export type HISTORY_ALARMS_QUERY = {
  history_alarms: {
    success: boolean;
    alarms: Array<{
      id: number;
      alarm_type: string;
      alarm_state: ALARM_STATE;
      agent_id?: number | null;
      area_id?: number | null;
      address?: string | null;
      created_at: string;
      updated_at: string;
      enroute_at?: string | null;
      responder_assigned_at?: string | null;
      saved_at?: string | null;
      closed_at?: string | null;
      procedure_timestamps: {
        updated_at?: string | null;
        created_at: string;
        agent_acknowledged_instructions_at?: string | null;
        agent_phoned_first_keyholder_at?: string | null;
        keyholder_confirmed_emergency_at?: string | null;
        responder_dispatched_at?: string | null;
        responder_enroute_at?: string | null;
        responder_arrived_at?: string | null;
        responder_saved_property_at?: string | null;
        responder_closed_report_at?: string | null;
        alarm_completed_at?: string | null;
        alarm_reopened_at?: string | null;
        keyholder_cancelled_at?: string | null;
        customer_verified_password_at?: string | null;
      };
      customer?: {
        id: number;
        profile_picture?: string | null;
        contact: {
          title?: string | null;
          first_name?: string | null;
          last_name?: string | null;
          landline_phone?: string | null;
          mobile_phone?: string | null;
          other_phone?: string | null;
        };
        medical?: {
          bloodtype?: string | null;
          gender?: string | null;
          age?: number | null;
          insurance_name?: string | null;
          insurance_policy_id?: string | null;
          medical_conditions?: string | null;
        } | null;
      } | null;
      coordinates?: { latitude: string; longitude: string } | null;
    }>;
    pagination: { count: number; items: number; page: number };
  };
};

export type CORE_ALARM_INCIDENT_REPORT_FRAGMENT = {
  id: number;
  alarm_id?: number | null;
  home_alarm_id?: number | null;
  description?: string | null;
  false_alarm?: boolean | null;
  all_in_order?: boolean | null;
  damage?: boolean | null;
  handed_over_to_police_or_ems?: boolean | null;
  incident_report_images?: Array<string | null> | null;
  property_accessed?: boolean | null;
  vagrants_in_area?: boolean | null;
  possible_intrusion?: boolean | null;
  no_visible_intrusion?: boolean | null;
  open_door?: boolean | null;
  open_garage?: boolean | null;
  open_window?: boolean | null;
  created_at?: string | null;
  updated_at?: string | null;
} & { ' $fragmentName'?: 'CORE_ALARM_INCIDENT_REPORT_FRAGMENT' };

export type ALARM_KEYHOLDER_LOG_FRAGMENT = {
  id: number;
  client_keyholder_id?: number | null;
  keyholder_name?: string | null;
  keyholder_phone?: string | null;
  password_verified?: boolean | null;
  reached?: boolean | null;
  created_at: string;
} & { ' $fragmentName'?: 'ALARM_KEYHOLDER_LOG_FRAGMENT' };

export type LOG_KEYHOLDER_CALL_MUTATION_VARIABLES = Exact<{
  alarm_id: Scalars['Int']['input'];
  keyholder_id: Scalars['Int']['input'];
  keyholder_was_reached: Scalars['Boolean']['input'];
  password_verified: Scalars['Boolean']['input'];
}>;

export type LOG_KEYHOLDER_CALL_MUTATION = { log_keyholder_call: boolean };

export type CORE_ALARM_LOG_FRAGMENT = {
  id: number;
  alarm_id?: number | null;
  message: string;
  level?: string | null;
  agent_name?: string | null;
  panic_alarm_id?: number | null;
  created_at: string;
  updated_at?: string | null;
} & { ' $fragmentName'?: 'CORE_ALARM_LOG_FRAGMENT' };

export type FETCH_ALARM_LOGS_QUERY_VARIABLES = Exact<{
  alarm_id: Scalars['Int']['input'];
  alarm_source: ALARM_SOURCE;
}>;

export type FETCH_ALARM_LOGS_QUERY = {
  alarm_logs: Array<{
    ' $fragmentRefs'?: { CORE_ALARM_LOG_FRAGMENT: CORE_ALARM_LOG_FRAGMENT };
  }>;
};

export type UPDATE_ALARM_NOTES_MUTATION_VARIABLES = Exact<{
  alarm_id: Scalars['Int']['input'];
  alarm_source: ALARM_SOURCE;
  notes: Scalars['String']['input'];
}>;

export type UPDATE_ALARM_NOTES_MUTATION = { update_alarm_notes: boolean };

export type LOG_SECURITY_QUESTION_MUTATION_VARIABLES = Exact<{
  alarm_id: Scalars['Int']['input'];
  alarm_source: ALARM_SOURCE;
  answer: SECURITY_QUESTION_ANSWER;
}>;

export type LOG_SECURITY_QUESTION_MUTATION = { log_security_question: boolean };

export type SUBSCRIBE_ALARMS_UPDATE_SUBSCRIPTION_VARIABLES = Exact<{
  alarm_stack: ALARM_STACK;
}>;

export type SUBSCRIBE_ALARMS_UPDATE_SUBSCRIPTION = {
  alarms_updated?: boolean | null;
};

export type ACCOUNT_SUSPENSION_REASON_FRAGMENT = {
  id: number;
  reason: string;
} & { ' $fragmentName'?: 'ACCOUNT_SUSPENSION_REASON_FRAGMENT' };

export type ACCOUNT_SUSPENSION_REASONS_QUERY_VARIABLES = Exact<{
  [key: string]: never;
}>;

export type ACCOUNT_SUSPENSION_REASONS_QUERY = {
  account_suspension_reasons: Array<{
    ' $fragmentRefs'?: {
      ACCOUNT_SUSPENSION_REASON_FRAGMENT: ACCOUNT_SUSPENSION_REASON_FRAGMENT;
    };
  }>;
};

export type CUSTOMER_BILLING_PROFILE_FRAGMENT = {
  invoice_clubbing: INVOICE_CLUBBING;
  currency: CURRENCY_CODES;
  billing_address?: string | null;
  account_manager_id?: number | null;
  billing_subscriptions?: Array<{
    ' $fragmentRefs'?: {
      CUSTOMER_BILLING_SUBSCRIPTION_CONDENSED_FRAGMENT: CUSTOMER_BILLING_SUBSCRIPTION_CONDENSED_FRAGMENT;
    };
  }> | null;
  payment_options: Array<{
    ' $fragmentRefs'?: {
      SUBSCRIPTION_PAYMENT_OPTION_FRAGMENT: SUBSCRIPTION_PAYMENT_OPTION_FRAGMENT;
    };
  }>;
  invoice_templates: Array<{
    ' $fragmentRefs'?: {
      SUBSCRIPTION_INVOICE_TEMPLATE_FRAGMENT: SUBSCRIPTION_INVOICE_TEMPLATE_FRAGMENT;
    };
  }>;
  billing_department?: { id: number; name?: string | null } | null;
} & { ' $fragmentName'?: 'CUSTOMER_BILLING_PROFILE_FRAGMENT' };

export type CUSTOMER_SUBSCRIPTION_BILLING_ITEM_FRAGMENT = {
  id: number;
  type: BILLING_ITEM_TYPE;
  pricing_id: number;
  starting_price?: string | null;
  current_price: string;
  created_at?: string | null;
  updated_at?: string | null;
  template:
    | { id: number; name: string; description: string; type: BILLING_ITEM_TYPE }
    | {
        id: number;
        name: string;
        description: string;
        type: BILLING_ITEM_TYPE;
      };
  property?: { id: number; name?: string | null } | null;
} & { ' $fragmentName'?: 'CUSTOMER_SUBSCRIPTION_BILLING_ITEM_FRAGMENT' };

export type CREATE_BILLING_SUBSCRIPTION_ITEM_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  subscription_id: Scalars['Int']['input'];
  params: CREATE_BILLING_SUBSCRIPTION_ITEM_PARAMS;
}>;

export type CREATE_BILLING_SUBSCRIPTION_ITEM_MUTATION = {
  create_billing_subscription_item: {
    ' $fragmentRefs'?: {
      CUSTOMER_SUBSCRIPTION_BILLING_ITEM_FRAGMENT: CUSTOMER_SUBSCRIPTION_BILLING_ITEM_FRAGMENT;
    };
  };
};

export type UPDATE_BILLING_SUBSCRIPTION_ITEM_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  subscription_id: Scalars['Int']['input'];
  subscription_item_id: Scalars['Int']['input'];
  params: UPDATE_BILLING_SUBSCRIPTION_ITEM_PARAMS;
}>;

export type UPDATE_BILLING_SUBSCRIPTION_ITEM_MUTATION = {
  update_billing_subscription_item: {
    ' $fragmentRefs'?: {
      CUSTOMER_SUBSCRIPTION_BILLING_ITEM_FRAGMENT: CUSTOMER_SUBSCRIPTION_BILLING_ITEM_FRAGMENT;
    };
  };
};

export type DELETE_BILLING_SUBSCRIPTION_ITEM_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  subscription_id: Scalars['Int']['input'];
  subscription_item_id: Scalars['Int']['input'];
}>;

export type DELETE_BILLING_SUBSCRIPTION_ITEM_MUTATION = {
  delete_billing_subscription_item?: {
    ' $fragmentRefs'?: {
      CUSTOMER_SUBSCRIPTION_BILLING_ITEM_FRAGMENT: CUSTOMER_SUBSCRIPTION_BILLING_ITEM_FRAGMENT;
    };
  } | null;
};

export type CUSTOMER_SUBSCRIPTIONS_QUERY_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
}>;

export type CUSTOMER_SUBSCRIPTIONS_QUERY = {
  customer_billing_subscriptions?: Array<{
    ' $fragmentRefs'?: {
      CUSTOMER_BILLING_SUBSCRIPTION_EXPANDED_FRAGMENT: CUSTOMER_BILLING_SUBSCRIPTION_EXPANDED_FRAGMENT;
    };
  }> | null;
};

export type CUSTOMER_SUBSCRIPTION_QUERY_VARIABLES = Exact<{
  id: Scalars['Int']['input'];
  customer_id: Scalars['Int']['input'];
}>;

export type CUSTOMER_SUBSCRIPTION_QUERY = {
  customer_billing_subscription: {
    ' $fragmentRefs'?: {
      CUSTOMER_BILLING_SUBSCRIPTION_EXPANDED_FRAGMENT: CUSTOMER_BILLING_SUBSCRIPTION_EXPANDED_FRAGMENT;
    };
  };
};

export type CUSTOMER_BILLING_SUBSCRIPTION_CONDENSED_FRAGMENT = {
  id: number;
  title: string;
  status: SUBSCRIPTION_STATUS;
  derived_status_as_of: SUBSCRIPTION_STATUS;
  frequency: BILLING_RECURRENCE;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  initial_total_amount?: string | null;
  latest_total_amount?: string | null;
  individual_increase_rate?: string | null;
  last_invoice_generated_on?: string | null;
  next_execution_on?: string | null;
  paused_on?: string | null;
  resumed_on?: string | null;
  deactivated_on?: string | null;
  deactivation_reason?: string | null;
  billing_invoice_template_id?: number | null;
} & { ' $fragmentName'?: 'CUSTOMER_BILLING_SUBSCRIPTION_CONDENSED_FRAGMENT' };

export type CUSTOMER_BILLING_SUBSCRIPTION_EXPANDED_FRAGMENT = {
  id: number;
  title: string;
  status: SUBSCRIPTION_STATUS;
  derived_status_as_of: SUBSCRIPTION_STATUS;
  frequency: BILLING_RECURRENCE;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  initial_total_amount?: string | null;
  latest_total_amount?: string | null;
  total_tax?: string | null;
  individual_increase_rate?: string | null;
  last_invoice_generated_on?: string | null;
  next_execution_on?: string | null;
  paused_on?: string | null;
  resumed_on?: string | null;
  deactivated_on?: string | null;
  deactivation_reason?: string | null;
  billing_invoice_template?:
    | ({
        billing_payment_option?: {
          ' $fragmentRefs'?: {
            SUBSCRIPTION_PAYMENT_OPTION_FRAGMENT: SUBSCRIPTION_PAYMENT_OPTION_FRAGMENT;
          };
        } | null;
      } & {
        ' $fragmentRefs'?: {
          SUBSCRIPTION_INVOICE_TEMPLATE_FRAGMENT: SUBSCRIPTION_INVOICE_TEMPLATE_FRAGMENT;
        };
      })
    | null;
  billing_subscription_items?: Array<{
    id: number;
    type: BILLING_ITEM_TYPE;
    description?: string | null;
    quantity: number;
    pricing_id: number;
    starting_price?: string | null;
    current_price: string;
    created_at?: string | null;
    updated_at?: string | null;
    template:
      | {
          id: number;
          name: string;
          description: string;
          type: BILLING_ITEM_TYPE;
        }
      | {
          id: number;
          name: string;
          description: string;
          type: BILLING_ITEM_TYPE;
        };
    property?: { id: number; name?: string | null } | null;
  } | null> | null;
} & { ' $fragmentName'?: 'CUSTOMER_BILLING_SUBSCRIPTION_EXPANDED_FRAGMENT' };

export type CREATE_BILLING_SUBSCRIPTION_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  params: CREATE_BILLING_SUBSCRIPTION_PARAMS;
}>;

export type CREATE_BILLING_SUBSCRIPTION_MUTATION = {
  create_billing_subscription: {
    ' $fragmentRefs'?: {
      CUSTOMER_BILLING_SUBSCRIPTION_CONDENSED_FRAGMENT: CUSTOMER_BILLING_SUBSCRIPTION_CONDENSED_FRAGMENT;
    };
  };
};

export type UPDATE_BILLING_SUBSCRIPTION_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  subscription_id: Scalars['Int']['input'];
  params: UPDATE_BILLING_SUBSCRIPTION_PARAMS;
}>;

export type UPDATE_BILLING_SUBSCRIPTION_MUTATION = {
  update_billing_subscription: {
    ' $fragmentRefs'?: {
      CUSTOMER_BILLING_SUBSCRIPTION_CONDENSED_FRAGMENT: CUSTOMER_BILLING_SUBSCRIPTION_CONDENSED_FRAGMENT;
    };
  };
};

export type DELETE_BILLING_SUBSCRIPTION_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  subscription_id: Scalars['Int']['input'];
  end_date: Scalars['String']['input'];
}>;

export type DELETE_BILLING_SUBSCRIPTION_MUTATION = {
  delete_billing_subscription: {
    ' $fragmentRefs'?: {
      CUSTOMER_BILLING_SUBSCRIPTION_EXPANDED_FRAGMENT: CUSTOMER_BILLING_SUBSCRIPTION_EXPANDED_FRAGMENT;
    };
  };
};

export type SUBSCRIPTION_INVOICE_TEMPLATE_FRAGMENT = {
  id: number;
  description: string;
  legal_name: string;
  company_name?: string | null;
  company_registration_number?: string | null;
  vat_number?: string | null;
  email: string;
  cc_email?: string | null;
  billing_address: string;
  invoice_due_days?: number | null;
  collection_day_of_month?: number | null;
  payment_method?: string | null;
  billing_payment_option_id?: number | null;
  billing_payment_option?: { id: number } | null;
} & { ' $fragmentName'?: 'SUBSCRIPTION_INVOICE_TEMPLATE_FRAGMENT' };

export type CREATE_INVOICE_TEMPLATE_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  params: INVOICE_TEMPLATE_PARAMS;
}>;

export type CREATE_INVOICE_TEMPLATE_MUTATION = {
  create_invoice_template: { id: number };
};

export type UPDATE_INVOICE_TEMPLATE_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  invoice_template_id: Scalars['Int']['input'];
  params: INVOICE_TEMPLATE_PARAMS;
}>;

export type UPDATE_INVOICE_TEMPLATE_MUTATION = {
  update_invoice_template: {
    ' $fragmentRefs'?: {
      SUBSCRIPTION_INVOICE_TEMPLATE_FRAGMENT: SUBSCRIPTION_INVOICE_TEMPLATE_FRAGMENT;
    };
  };
};

export type DELETE_INVOICE_TEMPLATE_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  invoice_template_id: Scalars['Int']['input'];
}>;

export type DELETE_INVOICE_TEMPLATE_MUTATION = {
  delete_invoice_template?: {
    ' $fragmentRefs'?: {
      SUBSCRIPTION_INVOICE_TEMPLATE_FRAGMENT: SUBSCRIPTION_INVOICE_TEMPLATE_FRAGMENT;
    };
  } | null;
};

export type SUBSCRIPTION_PAYMENT_OPTION_FRAGMENT = {
  id: number;
  description: string;
  account_owner_first_name: string;
  account_owner_last_name: string;
  account_owner_phone: string;
  account_type: BILLING_ACCOUNT_TYPE;
  bank_account_type?: BANK_ACCOUNT_TYPE | null;
  bank_code?: string | null;
  card_type?: CARD_TYPE | null;
  decrypted_bank_account_number?: string | null;
  decrypted_card_number?: string | null;
  expiry_date?: string | null;
} & { ' $fragmentName'?: 'SUBSCRIPTION_PAYMENT_OPTION_FRAGMENT' };

export type CREATE_PAYMENT_OPTION_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  params: BILLING_PAYMENT_OPTION_PARAMS;
}>;

export type CREATE_PAYMENT_OPTION_MUTATION = {
  create_payment_option: { id: number };
};

export type UPDATE_PAYMENT_OPTION_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  payment_template_id: Scalars['Int']['input'];
  params: BILLING_PAYMENT_OPTION_PARAMS;
}>;

export type UPDATE_PAYMENT_OPTION_MUTATION = {
  update_payment_option: {
    ' $fragmentRefs'?: {
      SUBSCRIPTION_PAYMENT_OPTION_FRAGMENT: SUBSCRIPTION_PAYMENT_OPTION_FRAGMENT;
    };
  };
};

export type DELETE_PAYMENT_OPTION_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  payment_template_id: Scalars['Int']['input'];
}>;

export type DELETE_PAYMENT_OPTION_MUTATION = {
  delete_payment_option?: {
    ' $fragmentRefs'?: {
      SUBSCRIPTION_PAYMENT_OPTION_FRAGMENT: SUBSCRIPTION_PAYMENT_OPTION_FRAGMENT;
    };
  } | null;
};

export type PAUSE_BILLING_SUBSCRIPTION_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  subscription_id: Scalars['Int']['input'];
  pause_date: Scalars['String']['input'];
  resume_date: Scalars['String']['input'];
}>;

export type PAUSE_BILLING_SUBSCRIPTION_MUTATION = {
  pause_billing_subscription: { id: number };
};

export type GROUP_CUSTOMER_INVOICES_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  invoice_template_id: Scalars['Int']['input'];
}>;

export type GROUP_CUSTOMER_INVOICES_MUTATION = {
  group_customer_invoices: boolean;
};

export type CUSTOMER_ACCOUNT_PROFILE_FRAGMENT = {
  id: number;
  seon_account_code?: string | null;
  account_code?: string | null;
  account_description?: string | null;
  document_id_number?: string | null;
  contact: {
    ' $fragmentRefs'?: {
      CUSTOMER_ACCOUNT_CONTACT_FRAGMENT: CUSTOMER_ACCOUNT_CONTACT_FRAGMENT;
    };
  };
  system_status?: {
    status: CUSTOMER_STATUS;
    created_on?: string | null;
    suspend_date?: string | null;
    suspend_reason?: string | null;
    has_overactive_alarms?: boolean | null;
  } | null;
  properties: Array<{
    ' $fragmentRefs'?: {
      CUSTOMER_PROFILE_PROPERTY_FRAGMENT: CUSTOMER_PROFILE_PROPERTY_FRAGMENT;
    };
  }>;
  billing?: {
    ' $fragmentRefs'?: {
      CUSTOMER_BILLING_PROFILE_FRAGMENT: CUSTOMER_BILLING_PROFILE_FRAGMENT;
    };
  } | null;
  scheduled_status_changes?: {
    ' $fragmentRefs'?: {
      SCHEDULED_STATUS_CHANGES_FRAGMENT: SCHEDULED_STATUS_CHANGES_FRAGMENT;
    };
  } | null;
} & { ' $fragmentName'?: 'CUSTOMER_ACCOUNT_PROFILE_FRAGMENT' };

export type SCHEDULED_STATUS_CHANGES_FRAGMENT = {
  status?: string | null;
  change_status_at?: string | null;
  status_changed_reason?: string | null;
  status_changed_reason_id?: number | null;
  reactivation_date?: string | null;
} & { ' $fragmentName'?: 'SCHEDULED_STATUS_CHANGES_FRAGMENT' };

export type CUSTOMER_ACCOUNT_CONTACT_FRAGMENT = {
  title?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  landline_phone?: string | null;
  mobile_phone?: string | null;
  other_phone?: string | null;
  email?: string | null;
  preferred_contact_method?: PREFERRED_CUSTOMER_CONTACT_METHOD_TYPE | null;
} & { ' $fragmentName'?: 'CUSTOMER_ACCOUNT_CONTACT_FRAGMENT' };

export type FETCH_CUSTOMER_ACCOUNT_QUERY_VARIABLES = Exact<{
  id: Scalars['Int']['input'];
}>;

export type FETCH_CUSTOMER_ACCOUNT_QUERY = {
  fetch_customer_account: {
    ' $fragmentRefs'?: {
      CUSTOMER_ACCOUNT_PROFILE_FRAGMENT: CUSTOMER_ACCOUNT_PROFILE_FRAGMENT;
    };
  };
};

export type CREATE_CUSTOMER_ACCOUNT_MUTATION_VARIABLES = Exact<{
  contact_details: CUSTOMER_CONTACT_PARAMS;
  account_code?: InputMaybe<Scalars['String']['input']>;
  account_description?: InputMaybe<Scalars['String']['input']>;
  account_currency?: InputMaybe<CURRENCY_CODES>;
  account_manager_id?: InputMaybe<Scalars['Int']['input']>;
  invoice_clubbing?: InputMaybe<INVOICE_CLUBBING>;
  billing_department_id?: InputMaybe<Scalars['Int']['input']>;
  document_id_number?: InputMaybe<Scalars['String']['input']>;
}>;

export type CREATE_CUSTOMER_ACCOUNT_MUTATION = {
  create_customer_account: { customer_id: number };
};

export type UPDATE_CUSTOMER_ACCOUNT_MUTATION_VARIABLES = Exact<{
  id: Scalars['Int']['input'];
  contact_details: CUSTOMER_CONTACT_PARAMS;
  account_code?: InputMaybe<Scalars['String']['input']>;
  account_description?: InputMaybe<Scalars['String']['input']>;
  account_currency?: InputMaybe<CURRENCY_CODES>;
  account_manager_id?: InputMaybe<Scalars['Int']['input']>;
  invoice_clubbing?: InputMaybe<INVOICE_CLUBBING>;
  billing_department_id?: InputMaybe<Scalars['Int']['input']>;
  document_id_number?: InputMaybe<Scalars['String']['input']>;
}>;

export type UPDATE_CUSTOMER_ACCOUNT_MUTATION = {
  update_customer_account: boolean;
};

export type UPDATE_CUSTOMER_STATUS_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  params: UPDATE_CUSTOMER_STATUS_PARAMS;
}>;

export type UPDATE_CUSTOMER_STATUS_MUTATION = {
  update_customer_status: boolean;
};

export type DELETE_CUSTOMER_ACCOUNT_MUTATION_VARIABLES = Exact<{
  id: Scalars['Int']['input'];
}>;

export type DELETE_CUSTOMER_ACCOUNT_MUTATION = {
  delete_customer_account: boolean;
};

export type FETCH_CUSTOMERS_QUERY_VARIABLES = Exact<{
  search_params?: InputMaybe<CUSTOMERS_SEARCH_PARAMS>;
  pagination: PAGINATION_INPUT;
}>;

export type FETCH_CUSTOMERS_QUERY = {
  fetch_customers: {
    success: boolean;
    customers: Array<{
      id: number;
      seon_account_code?: string | null;
      account_code?: string | null;
      account_description?: string | null;
      account_status: CUSTOMER_STATUS;
      customer_name: string;
      customer_email?: string | null;
      title?: string | null;
      first_name?: string | null;
      last_name?: string | null;
      joined?: string | null;
      properties: Array<{
        id: number;
        address?: string | null;
        property_name?: string | null;
        property_code?: string | null;
      }>;
    }>;
    pagination: { items: number; count: number; page: number };
  };
};

export type CREATE_CUSTOMER_PROPERTY_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  customer_first_name?: InputMaybe<Scalars['String']['input']>;
  customer_last_name?: InputMaybe<Scalars['String']['input']>;
  params: UPDATE_PROPERTY_DETAILS_PARAMS;
}>;

export type CREATE_CUSTOMER_PROPERTY_MUTATION = {
  create_customer_property: { success: boolean; property: { id: number } };
};

export type UPDATE_PROPERTY_DETAILS_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  customer_first_name?: InputMaybe<Scalars['String']['input']>;
  customer_last_name?: InputMaybe<Scalars['String']['input']>;
  property_id: Scalars['Int']['input'];
  params: UPDATE_PROPERTY_DETAILS_PARAMS;
}>;

export type UPDATE_PROPERTY_DETAILS_MUTATION = {
  update_property_details: { success: boolean; message?: string | null };
};

export type MUTATION_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  property_id: Scalars['Int']['input'];
  keyholder_ids_priority:
    | Array<Scalars['Int']['input']>
    | Scalars['Int']['input'];
}>;

export type MUTATION_MUTATION = {
  update_property_keyholder_call_order: { success: boolean };
};

export type CREATE_PROPERTY_KEYHOLDER_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  property_id: Scalars['Int']['input'];
  register_app: Scalars['Boolean']['input'];
  params: PROPERTY_KEYHOLDER_PARAMS;
}>;

export type CREATE_PROPERTY_KEYHOLDER_MUTATION = {
  create_property_keyholder: {
    success: boolean;
    keyholder?: { id: number } | null;
  };
};

export type UPDATE_PROPERTY_KEYHOLDER_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  property_id: Scalars['Int']['input'];
  keyholder_id: Scalars['Int']['input'];
  register_app: Scalars['Boolean']['input'];
  params: PROPERTY_KEYHOLDER_PARAMS;
}>;

export type UPDATE_PROPERTY_KEYHOLDER_MUTATION = {
  update_property_keyholder: {
    success: boolean;
    keyholder?: { id: number } | null;
  };
};

export type DELETE_PROPERTY_KEYHOLDER_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  property_id: Scalars['Int']['input'];
  keyholder_id: Scalars['Int']['input'];
}>;

export type DELETE_PROPERTY_KEYHOLDER_MUTATION = {
  delete_property_keyholder: { success: boolean };
};

export type CUSTOMER_PROPERTY_ROUTE_QUERY_VARIABLES = Exact<{
  property_id: Scalars['Int']['input'];
}>;

export type CUSTOMER_PROPERTY_ROUTE_QUERY = {
  customer_property: {
    success: boolean;
    property: {
      ' $fragmentRefs'?: {
        CUSTOMER_PROFILE_PROPERTY_FRAGMENT: CUSTOMER_PROFILE_PROPERTY_FRAGMENT;
      };
    };
  };
};

export type CUSTOMER_PROFILE_PROPERTY_FRAGMENT = {
  __typename: 'customer_property';
  id: number;
  code?: string | null;
  name?: string | null;
  description?: string | null;
  status?: PROPERTY_STATUS | null;
  type?: PROPERTY_TYPE | null;
  password?: string | null;
  duress_password?: string | null;
  notes?: string | null;
  testing_enabled?: boolean | null;
  testing_time?: number | null;
  suspend_reason?: string | null;
  suspended_at?: string | null;
  suspended_by?: number | null;
  status_changed_at?: string | null;
  status_changed_by_agent_id?: number | null;
  status_changed_reason?: string | null;
  status_changed_reason_id?: number | null;
  images?: Array<{ id?: string | null; url: string }> | null;
  video_feeds?: Array<{ id?: string | null; url: string }> | null;
  geospatial?: {
    entire_address?: string | null;
    street?: string | null;
    zip_code?: string | null;
    city?: string | null;
    country?: string | null;
    coordinates?: { longitude: string; latitude: string } | null;
    area?: { id: number; name?: string | null } | null;
    zones?: Array<{
      ' $fragmentRefs'?: {
        PROPERTY_PROFILE_ZONE_FRAGMENT: PROPERTY_PROFILE_ZONE_FRAGMENT;
      };
    }> | null;
  } | null;
  keyholders?: Array<{
    ' $fragmentRefs'?: {
      PROPERTY_PROFILE_KEYHOLDER_FRAGMENT: PROPERTY_PROFILE_KEYHOLDER_FRAGMENT;
    };
  }> | null;
  instructions?: {
    ' $fragmentRefs'?: {
      PROPERTY_PROFILE_INSTRUCTIONS_FRAGMENT: PROPERTY_PROFILE_INSTRUCTIONS_FRAGMENT;
    };
  } | null;
  schedules?: Array<{
    ' $fragmentRefs'?: {
      PROPERTY_PROFILE_SCHEDULE_FRAGMENT: PROPERTY_PROFILE_SCHEDULE_FRAGMENT;
    };
  }> | null;
  equipment?: {
    transmitters?: Array<{
      ' $fragmentRefs'?: {
        PROPERTY_PROFILE_TRANSMITTER_FRAGMENT: PROPERTY_PROFILE_TRANSMITTER_FRAGMENT;
      };
    }> | null;
  } | null;
  scheduled_status_changes?: {
    ' $fragmentRefs'?: {
      SCHEDULED_STATUS_CHANGES_FRAGMENT: SCHEDULED_STATUS_CHANGES_FRAGMENT;
    };
  } | null;
} & { ' $fragmentName'?: 'CUSTOMER_PROFILE_PROPERTY_FRAGMENT' };

export type PROPERTY_PROFILE_KEYHOLDER_FRAGMENT = {
  id: number;
  user_app_id?: number | null;
  name?: string | null;
  description?: string | null;
  mobile_phone?: string | null;
  landline_phone?: string | null;
  call_order?: number | null;
  sms_notifications_enabled?: boolean | null;
  push_notifications_enabled?: boolean | null;
  triggered_panics_allowed?: boolean | null;
  password?: string | null;
} & { ' $fragmentName'?: 'PROPERTY_PROFILE_KEYHOLDER_FRAGMENT' };

export type PROPERTY_PROFILE_SCHEDULE_FRAGMENT = {
  id: number;
  open_start?: string | null;
  open_end?: string | null;
  close_start?: string | null;
  close_end?: string | null;
  day: DAYS_OF_THE_WEEK_TYPE;
} & { ' $fragmentName'?: 'PROPERTY_PROFILE_SCHEDULE_FRAGMENT' };

export type PROPERTY_PROFILE_INSTRUCTIONS_FRAGMENT = {
  HOLIDAY?: {
    id: number;
    note?: string | null;
    validity_start?: string | null;
    validity_end?: string | null;
  } | null;
  NOTE?: { id: number; note?: string | null } | null;
  AGENT?: { id: number; note?: string | null } | null;
  RESPONDER?: { id: number; note?: string | null } | null;
  KEY?: { id: number; note?: string | null } | null;
} & { ' $fragmentName'?: 'PROPERTY_PROFILE_INSTRUCTIONS_FRAGMENT' };

export type PROPERTY_PROFILE_EQUIPMENT_FRAGMENT = {
  transmitters?: Array<{
    ' $fragmentRefs'?: {
      PROPERTY_PROFILE_TRANSMITTER_FRAGMENT: PROPERTY_PROFILE_TRANSMITTER_FRAGMENT;
    };
  }> | null;
} & { ' $fragmentName'?: 'PROPERTY_PROFILE_EQUIPMENT_FRAGMENT' };

export type PROPERTY_PROFILE_TRANSMITTER_FRAGMENT = {
  id: number;
  number?: string | null;
  description?: string | null;
  heartbeat_interval?: number | null;
  set_name?: string | null;
  area?: { id: number; name?: string | null } | null;
  decoder?: { id: number; name?: string | null } | null;
} & { ' $fragmentName'?: 'PROPERTY_PROFILE_TRANSMITTER_FRAGMENT' };

export type ENABLE_PROPERTY_TESTING_MUTATION_VARIABLES = Exact<{
  property_id: Scalars['Int']['input'];
  keyholder_id?: InputMaybe<Scalars['Int']['input']>;
  technician_id?: InputMaybe<Scalars['Int']['input']>;
  testing_time: Scalars['String']['input'];
}>;

export type ENABLE_PROPERTY_TESTING_MUTATION = {
  enable_property_testing: boolean;
};

export type DISABLE_PROPERTY_TESTING_MUTATION_VARIABLES = Exact<{
  property_id: Scalars['Int']['input'];
}>;

export type DISABLE_PROPERTY_TESTING_MUTATION = {
  disable_property_testing: boolean;
};

export type UPDATE_PROPERTY_SCHEDULE_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  property_id: Scalars['Int']['input'];
  schedules:
    | Array<PROPERTY_TIME_SCHEDULE_PARAMS>
    | PROPERTY_TIME_SCHEDULE_PARAMS;
}>;

export type UPDATE_PROPERTY_SCHEDULE_MUTATION = {
  update_property_schedule: { success: boolean; message?: string | null };
};

export type PROPERTY_PROFILE_ZONE_FRAGMENT = {
  id: number;
  description?: string | null;
  number?: string | null;
  zone_type?: string | null;
  is_overactive?: boolean | null;
  transmitter?: { id: number; number?: string | null } | null;
  on_hold_mode: {
    enabled: boolean;
    enabled_at?: string | null;
    duration?: string | null;
  };
} & { ' $fragmentName'?: 'PROPERTY_PROFILE_ZONE_FRAGMENT' };

export type CREATE_PROPERTY_ZONE_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  property_id: Scalars['Int']['input'];
  params: PROPERTY_ZONE_PARAMS;
}>;

export type CREATE_PROPERTY_ZONE_MUTATION = {
  create_property_zone: { success: boolean; message?: string | null };
};

export type UPDATE_PROPERTY_ZONE_MUTATION_VARIABLES = Exact<{
  customer_id: Scalars['Int']['input'];
  property_id: Scalars['Int']['input'];
  zone_id: Scalars['Int']['input'];
  params: PROPERTY_ZONE_PARAMS;
}>;

export type UPDATE_PROPERTY_ZONE_MUTATION = {
  update_property_zone: { success: boolean; message?: string | null };
};

export type DELETE_PROPERTY_ZONE_MUTATION_VARIABLES = Exact<{
  zone_id: Scalars['Int']['input'];
  property_id: Scalars['Int']['input'];
}>;

export type DELETE_PROPERTY_ZONE_MUTATION = { delete_property_zone: boolean };

export type SET_ZONE_ON_HOLD_MODE_MUTATION_VARIABLES = Exact<{
  property_id: Scalars['Int']['input'];
  zone_id: Scalars['Int']['input'];
  on_hold_time: Scalars['String']['input'];
}>;

export type SET_ZONE_ON_HOLD_MODE_MUTATION = { set_zone_on_hold_mode: boolean };

export type UPDATE_PROPERTY_STATUS_MUTATION_VARIABLES = Exact<{
  property_id: Scalars['Int']['input'];
  params: UPDATE_PROPERTY_STATUS_PARAMS;
}>;

export type UPDATE_PROPERTY_STATUS_MUTATION = {
  update_property_status: {
    success: boolean;
    message?: string | null;
    property: {
      ' $fragmentRefs'?: {
        CUSTOMER_PROFILE_PROPERTY_FRAGMENT: CUSTOMER_PROFILE_PROPERTY_FRAGMENT;
      };
    };
  };
};

export const CORE_AGENTS_PERFORMANCE_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_agents_performance' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'agents_performance' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'total_alarms' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dispatch_times' } },
          { kind: 'Field', name: { kind: 'Name', value: 'save_times' } },
          { kind: 'Field', name: { kind: 'Name', value: 'acknowledge_times' } },
          { kind: 'Field', name: { kind: 'Name', value: 'call_times' } },
          { kind: 'Field', name: { kind: 'Name', value: 'late_alarms' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CORE_AGENTS_PERFORMANCE_FRAGMENT, unknown>;
export const CORE_RESPONDERS_PERFORMANCE_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_responders_performance' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'responders_performance' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'save_times' } },
          { kind: 'Field', name: { kind: 'Name', value: 'response_times' } },
          { kind: 'Field', name: { kind: 'Name', value: 'arrival_times' } },
          { kind: 'Field', name: { kind: 'Name', value: 'clear_times' } },
          { kind: 'Field', name: { kind: 'Name', value: 'late_alarms' } },
          { kind: 'Field', name: { kind: 'Name', value: 'total_alarms' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CORE_RESPONDERS_PERFORMANCE_FRAGMENT, unknown>;
export const CORE_SSP_BRANDING_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_ssp_branding' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ssp_branding' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'logo_url' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CORE_SSP_BRANDING_FRAGMENT, unknown>;
export const CORE_SSP_CONTACTS_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_ssp_contacts' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ssp_contacts' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'headquarters' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'primary_phone' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'secondary_phone' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                { kind: 'Field', name: { kind: 'Name', value: 'country' } },
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'owner' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'first_name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'last_name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'primary_phone' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mobile_phone' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'technical_contact' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'primary_phone' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'secondary_phone' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CORE_SSP_CONTACTS_FRAGMENT, unknown>;
export const BILLING_DEPARTMENT_FRAGMENT_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'billing_department_fragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_department' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BILLING_DEPARTMENT_FRAGMENT_FRAGMENT, unknown>;
export const CORE_ALARM_TYPE_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_alarm_type' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'alarm_type' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priority' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alarm_description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alarm_type_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'history' } },
          { kind: 'Field', name: { kind: 'Name', value: 'message_to_user' } },
          { kind: 'Field', name: { kind: 'Name', value: 'non_emc' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sends_push_notifications' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CORE_ALARM_TYPE_FRAGMENT, unknown>;
export const DEBIT_ORDER_ATTACHED_FILE_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'debit_order_attached_file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'debit_order_attached_file' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DEBIT_ORDER_ATTACHED_FILE_FRAGMENT, unknown>;
export const DEBIT_ORDER_EXPORT_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'debit_order_export' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'debit_order_export' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'month_of' } },
          { kind: 'Field', name: { kind: 'Name', value: 'collection_date' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'all_attached_files' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'debit_order_attached_file' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'debit_order_attached_file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'debit_order_attached_file' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DEBIT_ORDER_EXPORT_FRAGMENT, unknown>;
export const CORE_CUSTOMER_INVOICE_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_customer_invoice' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'customer_condensed_invoice' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_account_id' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'reference_number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'remarks' } },
          { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
          { kind: 'Field', name: { kind: 'Name', value: 'amount_paid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'total_amount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'issue_date' } },
          { kind: 'Field', name: { kind: 'Name', value: 'due_date' } },
          { kind: 'Field', name: { kind: 'Name', value: 'paid_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email_sent' } },
          { kind: 'Field', name: { kind: 'Name', value: 'last_email_sent' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CORE_CUSTOMER_INVOICE_FRAGMENT, unknown>;
export const SSP_CUSTOMER_INVOICE_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ssp_customer_invoice' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'customer_condensed_invoice' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_account_id' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'account_code' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_description' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'reference_number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'remarks' } },
          { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
          { kind: 'Field', name: { kind: 'Name', value: 'amount_paid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'total_amount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'outstanding_amount' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'issue_date' } },
          { kind: 'Field', name: { kind: 'Name', value: 'due_date' } },
          { kind: 'Field', name: { kind: 'Name', value: 'paid_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email_sent' } },
          { kind: 'Field', name: { kind: 'Name', value: 'last_email_sent' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SSP_CUSTOMER_INVOICE_FRAGMENT, unknown>;
export const CUSTOMER_BILLING_TRANSACTION_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_billing_transaction' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_transaction' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'transaction_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'document_type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transaction_status' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
          { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'balance' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cancelation_reference_id' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_account_id' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_invoice_ids' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CUSTOMER_BILLING_TRANSACTION_FRAGMENT, unknown>;
export const CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_customer_transactions_invoice' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'customer_transactions_invoice' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_account_id' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'reference_number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'remarks' } },
          { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
          { kind: 'Field', name: { kind: 'Name', value: 'amount_paid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'total_amount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'payable_amount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'outstanding_amount' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'tax' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_subscription_ids' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_transactions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'customer_billing_transaction' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'download_link' } },
          { kind: 'Field', name: { kind: 'Name', value: 'issue_date' } },
          { kind: 'Field', name: { kind: 'Name', value: 'due_date' } },
          { kind: 'Field', name: { kind: 'Name', value: 'paid_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'for_one_time_subscription' },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_billing_transaction' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_transaction' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'transaction_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'document_type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transaction_status' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
          { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'balance' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cancelation_reference_id' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_account_id' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_invoice_ids' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CORE_CUSTOMER_TRANSACTIONS_INVOICE_FRAGMENT,
  unknown
>;
export const DISCOUNT_PRICE_CORE_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'DISCOUNT_PRICE_CORE' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'discount_price' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'recurrence' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price_excl_tax' } },
          { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
          { kind: 'Field', name: { kind: 'Name', value: 'active' } },
          { kind: 'Field', name: { kind: 'Name', value: 'discarded_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DISCOUNT_PRICE_CORE_FRAGMENT, unknown>;
export const DISCOUNT_TEMPLATE_CORE_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'DISCOUNT_TEMPLATE_CORE' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'discount_template' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tax_percentage' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'price_matrix' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'DISCOUNT_PRICE_CORE' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'DISCOUNT_PRICE_CORE' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'discount_price' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'recurrence' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price_excl_tax' } },
          { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
          { kind: 'Field', name: { kind: 'Name', value: 'active' } },
          { kind: 'Field', name: { kind: 'Name', value: 'discarded_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DISCOUNT_TEMPLATE_CORE_FRAGMENT, unknown>;
export const PRODUCT_PRICE_CORE_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'product_price_core' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'product_price' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'recurrence' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price_excl_tax' } },
          { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
          { kind: 'Field', name: { kind: 'Name', value: 'active' } },
          { kind: 'Field', name: { kind: 'Name', value: 'discarded_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PRODUCT_PRICE_CORE_FRAGMENT, unknown>;
export const PRODUCT_TEMPLATE_CORE_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PRODUCT_TEMPLATE_CORE' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'product_template' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tax_percentage' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'price_matrix' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'product_price_core' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'product_price_core' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'product_price' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'recurrence' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price_excl_tax' } },
          { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
          { kind: 'Field', name: { kind: 'Name', value: 'active' } },
          { kind: 'Field', name: { kind: 'Name', value: 'discarded_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PRODUCT_TEMPLATE_CORE_FRAGMENT, unknown>;
export const CORE_AREA_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_area' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'area' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CORE_AREA_FRAGMENT, unknown>;
export const CORE_DECODER_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_decoder' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'decoder' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CORE_DECODER_FRAGMENT, unknown>;
export const CORE_SSP_SETTINGS_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_ssp_settings' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ssp_company_details' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'time_zone' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'reaction_test_time' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'responsetime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'timeout' } },
          { kind: 'Field', name: { kind: 'Name', value: 'billing_enabled' } },
          { kind: 'Field', name: { kind: 'Name', value: 'banking_username' } },
          { kind: 'Field', name: { kind: 'Name', value: 'abbreviated_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'trading_number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'account_number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'currencies' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'invoice_banking_details' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'invoice_footer_information' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'collection_days' } },
          { kind: 'Field', name: { kind: 'Name', value: 'invoice_due_days' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'invoice_job_last_run' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'invoice_job_status' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'web_link' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'terms_and_conditions' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CORE_SSP_SETTINGS_FRAGMENT, unknown>;
export const SYSTEM_CHANGE_EVENT_VALUE_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'system_change_event_value' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'system_change_event_value' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'old_value' } },
          { kind: 'Field', name: { kind: 'Name', value: 'new_value' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SYSTEM_CHANGE_EVENT_VALUE_FRAGMENT, unknown>;
export const SYSTEM_CHANGE_EVENT_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'system_change_event' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'system_change_event' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'log_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'event_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'changed_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'changed_date' } },
          { kind: 'Field', name: { kind: 'Name', value: 'changed_by_id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'changes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'system_change_event_value' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'system_change_event_value' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'system_change_event_value' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'old_value' } },
          { kind: 'Field', name: { kind: 'Name', value: 'new_value' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SYSTEM_CHANGE_EVENT_FRAGMENT, unknown>;
export const LIVE_RESPONDER_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'live_responder' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'responder' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'position' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_on' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LIVE_RESPONDER_FRAGMENT, unknown>;
export const CORE_RESPONDER_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_responder' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'responder' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'password' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'position' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'created_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'area_ids' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CORE_RESPONDER_FRAGMENT, unknown>;
export const CORE_TECHNICIAN_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_technician' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'technician' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'active' } },
          { kind: 'Field', name: { kind: 'Name', value: 'available' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone_number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CORE_TECHNICIAN_FRAGMENT, unknown>;
export const CORE_AGENT_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_agent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'agent' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role_id' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CORE_AGENT_FRAGMENT, unknown>;
export const ALARM_CUSTOMER_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'alarm_customer' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'customer' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contact' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'first_name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'last_name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'landline_phone' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mobile_phone' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'other_phone' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'medical' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'age' } },
                { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'medical_conditions' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'bloodtype' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'insurance_name' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'insurance_policy_id' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'profile_picture' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ALARM_CUSTOMER_FRAGMENT, unknown>;
export const CORE_TRANSMITTER_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_transmitter' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'transmitter' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'set_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'area' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decoder' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heartbeat_interval' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CORE_TRANSMITTER_FRAGMENT, unknown>;
export const CORE_ALARM_INCIDENT_REPORT_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_alarm_incident_report' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'alarm_incident_report' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alarm_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'home_alarm_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'false_alarm' } },
          { kind: 'Field', name: { kind: 'Name', value: 'all_in_order' } },
          { kind: 'Field', name: { kind: 'Name', value: 'damage' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'handed_over_to_police_or_ems' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'incident_report_images' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'property_accessed' } },
          { kind: 'Field', name: { kind: 'Name', value: 'vagrants_in_area' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'possible_intrusion' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'no_visible_intrusion' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'open_door' } },
          { kind: 'Field', name: { kind: 'Name', value: 'open_garage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'open_window' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CORE_ALARM_INCIDENT_REPORT_FRAGMENT, unknown>;
export const CORE_ALARM_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_alarm' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'alarm' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priority' } },
          { kind: 'Field', name: { kind: 'Name', value: 'source' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alarm_state' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customer' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'alarm_customer' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'property' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'images' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'video_feeds' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'geospatial' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'coordinates' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'longitude' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'latitude' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'entire_address' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'area' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'keyholders' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'mobile_phone' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'landline_phone' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'call_order' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'password' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'instructions' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'HOLIDAY' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'note' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'NOTE' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'note' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'AGENT' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'note' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'RESPONDER' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'note' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'KEY' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'note' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'password' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'duress_password' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'testing_enabled' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'triggered_zones' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'time_triggered' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'zone_type' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'is_overactive' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'on_hold_mode' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'enabled' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'triggered_transmitter' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'core_transmitter' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assigned_agents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assigned_responders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'offline' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'incident_report' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'core_alarm_incident_report' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'procedure_timestamps' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'agent_acknowledged_instructions_at',
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'agent_phoned_first_keyholder_at',
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'keyholder_confirmed_emergency_at',
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responder_dispatched_at' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responder_enroute_at' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responder_arrived_at' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responder_saved_property_at' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responder_closed_report_at' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'alarm_completed_at' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'alarm_reopened_at' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'keyholder_cancelled_at' },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'customer_verified_password_at',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'notes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
                { kind: 'Field', name: { kind: 'Name', value: 'agent_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'keyholder_logs' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'client_keyholder_id' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'keyholder_name' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'keyholder_phone' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'password_verified' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'reached' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'panel_information' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'panel_id' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'alarm_customer' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'customer' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contact' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'first_name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'last_name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'landline_phone' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mobile_phone' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'other_phone' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'medical' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'age' } },
                { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'medical_conditions' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'bloodtype' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'insurance_name' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'insurance_policy_id' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'profile_picture' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_transmitter' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'transmitter' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'set_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'area' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decoder' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heartbeat_interval' },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_alarm_incident_report' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'alarm_incident_report' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alarm_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'home_alarm_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'false_alarm' } },
          { kind: 'Field', name: { kind: 'Name', value: 'all_in_order' } },
          { kind: 'Field', name: { kind: 'Name', value: 'damage' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'handed_over_to_police_or_ems' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'incident_report_images' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'property_accessed' } },
          { kind: 'Field', name: { kind: 'Name', value: 'vagrants_in_area' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'possible_intrusion' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'no_visible_intrusion' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'open_door' } },
          { kind: 'Field', name: { kind: 'Name', value: 'open_garage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'open_window' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CORE_ALARM_FRAGMENT, unknown>;
export const ALARM_KEYHOLDER_LOG_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'alarm_keyholder_log' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'alarm_keyholder_log' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'client_keyholder_id' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'keyholder_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'keyholder_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'password_verified' } },
          { kind: 'Field', name: { kind: 'Name', value: 'reached' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ALARM_KEYHOLDER_LOG_FRAGMENT, unknown>;
export const CORE_ALARM_LOG_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_alarm_log' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'alarm_log' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alarm_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'message' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'agent_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'panic_alarm_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CORE_ALARM_LOG_FRAGMENT, unknown>;
export const ACCOUNT_SUSPENSION_REASON_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'account_suspension_reason' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'account_suspension_reason' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'reason' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ACCOUNT_SUSPENSION_REASON_FRAGMENT, unknown>;
export const CUSTOMER_SUBSCRIPTION_BILLING_ITEM_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_subscription_billing_item' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_subscription_item' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'template' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'property' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'pricing_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'starting_price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'current_price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CUSTOMER_SUBSCRIPTION_BILLING_ITEM_FRAGMENT,
  unknown
>;
export const SUBSCRIPTION_INVOICE_TEMPLATE_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'subscription_invoice_template' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_invoice_template' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'legal_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'company_name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'company_registration_number' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'vat_number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cc_email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'billing_address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'invoice_due_days' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'collection_day_of_month' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'payment_method' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_payment_option' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_payment_option_id' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SUBSCRIPTION_INVOICE_TEMPLATE_FRAGMENT, unknown>;
export const SUBSCRIPTION_PAYMENT_OPTION_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'subscription_payment_option' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_payment_option' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_first_name' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_last_name' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_phone' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'account_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bank_account_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bank_code' } },
          { kind: 'Field', name: { kind: 'Name', value: 'card_type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decrypted_bank_account_number' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decrypted_card_number' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'expiry_date' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SUBSCRIPTION_PAYMENT_OPTION_FRAGMENT, unknown>;
export const CUSTOMER_BILLING_SUBSCRIPTION_EXPANDED_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_billing_subscription_expanded' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_subscription' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'derived_status_as_of' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'frequency' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'effective_start_date' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'effective_end_date' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'initial_total_amount' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'latest_total_amount' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'total_tax' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'individual_increase_rate' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'last_invoice_generated_on' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'next_execution_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'paused_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'resumed_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'deactivated_on' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deactivation_reason' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_invoice_template' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'subscription_invoice_template',
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'billing_payment_option' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'subscription_payment_option',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_subscription_items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'template' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'property' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'pricing_id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'starting_price' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'current_price' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'subscription_invoice_template' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_invoice_template' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'legal_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'company_name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'company_registration_number' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'vat_number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cc_email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'billing_address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'invoice_due_days' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'collection_day_of_month' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'payment_method' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_payment_option' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_payment_option_id' },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'subscription_payment_option' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_payment_option' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_first_name' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_last_name' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_phone' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'account_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bank_account_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bank_code' } },
          { kind: 'Field', name: { kind: 'Name', value: 'card_type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decrypted_bank_account_number' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decrypted_card_number' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'expiry_date' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CUSTOMER_BILLING_SUBSCRIPTION_EXPANDED_FRAGMENT,
  unknown
>;
export const CUSTOMER_ACCOUNT_CONTACT_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_account_contact' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'customer_contact' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'first_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'last_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'landline_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mobile_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'other_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'preferred_contact_method' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CUSTOMER_ACCOUNT_CONTACT_FRAGMENT, unknown>;
export const PROPERTY_PROFILE_ZONE_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_ZONE' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_zone' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'zone_type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transmitter' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'number' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'is_overactive' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'on_hold_mode' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'enabled' } },
                { kind: 'Field', name: { kind: 'Name', value: 'enabled_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'duration' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PROPERTY_PROFILE_ZONE_FRAGMENT, unknown>;
export const PROPERTY_PROFILE_KEYHOLDER_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_KEYHOLDER' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_keyholder' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'user_app_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mobile_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'landline_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'call_order' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sms_notifications_enabled' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'push_notifications_enabled' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'triggered_panics_allowed' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'password' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PROPERTY_PROFILE_KEYHOLDER_FRAGMENT, unknown>;
export const PROPERTY_PROFILE_INSTRUCTIONS_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_INSTRUCTIONS' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_instructions' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'HOLIDAY' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'validity_start' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'validity_end' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'NOTE' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'AGENT' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'RESPONDER' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'KEY' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PROPERTY_PROFILE_INSTRUCTIONS_FRAGMENT, unknown>;
export const PROPERTY_PROFILE_SCHEDULE_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_SCHEDULE' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_time_schedule' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'open_start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'open_end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'close_start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'close_end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'day' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PROPERTY_PROFILE_SCHEDULE_FRAGMENT, unknown>;
export const PROPERTY_PROFILE_TRANSMITTER_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_TRANSMITTER' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'transmitter' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heartbeat_interval' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'area' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decoder' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'set_name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PROPERTY_PROFILE_TRANSMITTER_FRAGMENT, unknown>;
export const SCHEDULED_STATUS_CHANGES_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'scheduled_status_changes' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'scheduled_status_changes' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'change_status_at' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_reason' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_reason_id' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'reactivation_date' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SCHEDULED_STATUS_CHANGES_FRAGMENT, unknown>;
export const CUSTOMER_PROFILE_PROPERTY_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_profile_property' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'customer_property' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'code' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'images' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video_feeds' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'geospatial' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'coordinates' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'longitude' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'latitude' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'entire_address' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'street' } },
                { kind: 'Field', name: { kind: 'Name', value: 'zip_code' } },
                { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                { kind: 'Field', name: { kind: 'Name', value: 'country' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'area' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'zones' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PROPERTY_PROFILE_ZONE' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'keyholders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PROPERTY_PROFILE_KEYHOLDER' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'instructions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'PROPERTY_PROFILE_INSTRUCTIONS',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'schedules' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PROPERTY_PROFILE_SCHEDULE' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'equipment' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'transmitters' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'PROPERTY_PROFILE_TRANSMITTER',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'scheduled_status_changes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'scheduled_status_changes' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'password' } },
          { kind: 'Field', name: { kind: 'Name', value: 'duress_password' } },
          { kind: 'Field', name: { kind: 'Name', value: 'notes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'testing_enabled' } },
          { kind: 'Field', name: { kind: 'Name', value: 'testing_time' } },
          { kind: 'Field', name: { kind: 'Name', value: 'suspend_reason' } },
          { kind: 'Field', name: { kind: 'Name', value: 'suspended_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'suspended_by' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status_changed_at' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_by_agent_id' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_reason' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_reason_id' },
          },
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_ZONE' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_zone' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'zone_type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transmitter' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'number' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'is_overactive' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'on_hold_mode' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'enabled' } },
                { kind: 'Field', name: { kind: 'Name', value: 'enabled_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'duration' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_KEYHOLDER' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_keyholder' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'user_app_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mobile_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'landline_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'call_order' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sms_notifications_enabled' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'push_notifications_enabled' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'triggered_panics_allowed' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'password' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_INSTRUCTIONS' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_instructions' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'HOLIDAY' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'validity_start' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'validity_end' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'NOTE' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'AGENT' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'RESPONDER' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'KEY' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_SCHEDULE' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_time_schedule' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'open_start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'open_end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'close_start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'close_end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'day' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_TRANSMITTER' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'transmitter' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heartbeat_interval' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'area' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decoder' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'set_name' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'scheduled_status_changes' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'scheduled_status_changes' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'change_status_at' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_reason' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_reason_id' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'reactivation_date' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CUSTOMER_PROFILE_PROPERTY_FRAGMENT, unknown>;
export const CUSTOMER_BILLING_SUBSCRIPTION_CONDENSED_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_billing_subscription_condensed' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_subscription' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'derived_status_as_of' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'frequency' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'effective_start_date' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'effective_end_date' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'initial_total_amount' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'latest_total_amount' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'individual_increase_rate' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'last_invoice_generated_on' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'next_execution_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'paused_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'resumed_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'deactivated_on' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deactivation_reason' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_invoice_template_id' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CUSTOMER_BILLING_SUBSCRIPTION_CONDENSED_FRAGMENT,
  unknown
>;
export const CUSTOMER_BILLING_PROFILE_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CUSTOMER_BILLING_PROFILE' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'customer_billing_profile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_subscriptions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'customer_billing_subscription_condensed',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'payment_options' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'subscription_payment_option' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'invoice_templates' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'subscription_invoice_template',
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'invoice_clubbing' } },
          { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
          { kind: 'Field', name: { kind: 'Name', value: 'billing_address' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_manager_id' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_department' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_billing_subscription_condensed' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_subscription' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'derived_status_as_of' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'frequency' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'effective_start_date' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'effective_end_date' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'initial_total_amount' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'latest_total_amount' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'individual_increase_rate' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'last_invoice_generated_on' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'next_execution_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'paused_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'resumed_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'deactivated_on' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deactivation_reason' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_invoice_template_id' },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'subscription_payment_option' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_payment_option' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_first_name' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_last_name' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_phone' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'account_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bank_account_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bank_code' } },
          { kind: 'Field', name: { kind: 'Name', value: 'card_type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decrypted_bank_account_number' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decrypted_card_number' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'expiry_date' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'subscription_invoice_template' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_invoice_template' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'legal_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'company_name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'company_registration_number' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'vat_number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cc_email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'billing_address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'invoice_due_days' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'collection_day_of_month' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'payment_method' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_payment_option' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_payment_option_id' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CUSTOMER_BILLING_PROFILE_FRAGMENT, unknown>;
export const CUSTOMER_ACCOUNT_PROFILE_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_account_profile' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'customer' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'seon_account_code' } },
          { kind: 'Field', name: { kind: 'Name', value: 'account_code' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_description' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'document_id_number' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contact' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'customer_account_contact' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'system_status' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_on' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'suspend_date' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'suspend_reason' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'has_overactive_alarms' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'properties' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'customer_profile_property' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CUSTOMER_BILLING_PROFILE' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'scheduled_status_changes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'scheduled_status_changes' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_ZONE' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_zone' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'zone_type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transmitter' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'number' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'is_overactive' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'on_hold_mode' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'enabled' } },
                { kind: 'Field', name: { kind: 'Name', value: 'enabled_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'duration' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_KEYHOLDER' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_keyholder' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'user_app_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mobile_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'landline_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'call_order' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sms_notifications_enabled' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'push_notifications_enabled' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'triggered_panics_allowed' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'password' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_INSTRUCTIONS' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_instructions' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'HOLIDAY' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'validity_start' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'validity_end' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'NOTE' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'AGENT' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'RESPONDER' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'KEY' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_SCHEDULE' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_time_schedule' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'open_start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'open_end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'close_start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'close_end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'day' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_TRANSMITTER' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'transmitter' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heartbeat_interval' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'area' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decoder' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'set_name' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'scheduled_status_changes' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'scheduled_status_changes' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'change_status_at' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_reason' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_reason_id' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'reactivation_date' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_billing_subscription_condensed' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_subscription' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'derived_status_as_of' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'frequency' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'effective_start_date' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'effective_end_date' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'initial_total_amount' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'latest_total_amount' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'individual_increase_rate' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'last_invoice_generated_on' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'next_execution_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'paused_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'resumed_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'deactivated_on' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deactivation_reason' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_invoice_template_id' },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'subscription_payment_option' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_payment_option' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_first_name' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_last_name' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_phone' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'account_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bank_account_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bank_code' } },
          { kind: 'Field', name: { kind: 'Name', value: 'card_type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decrypted_bank_account_number' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decrypted_card_number' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'expiry_date' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'subscription_invoice_template' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_invoice_template' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'legal_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'company_name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'company_registration_number' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'vat_number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cc_email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'billing_address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'invoice_due_days' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'collection_day_of_month' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'payment_method' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_payment_option' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_payment_option_id' },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_account_contact' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'customer_contact' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'first_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'last_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'landline_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mobile_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'other_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'preferred_contact_method' },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_profile_property' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'customer_property' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'code' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'images' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video_feeds' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'geospatial' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'coordinates' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'longitude' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'latitude' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'entire_address' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'street' } },
                { kind: 'Field', name: { kind: 'Name', value: 'zip_code' } },
                { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                { kind: 'Field', name: { kind: 'Name', value: 'country' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'area' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'zones' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PROPERTY_PROFILE_ZONE' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'keyholders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PROPERTY_PROFILE_KEYHOLDER' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'instructions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'PROPERTY_PROFILE_INSTRUCTIONS',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'schedules' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PROPERTY_PROFILE_SCHEDULE' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'equipment' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'transmitters' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'PROPERTY_PROFILE_TRANSMITTER',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'scheduled_status_changes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'scheduled_status_changes' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'password' } },
          { kind: 'Field', name: { kind: 'Name', value: 'duress_password' } },
          { kind: 'Field', name: { kind: 'Name', value: 'notes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'testing_enabled' } },
          { kind: 'Field', name: { kind: 'Name', value: 'testing_time' } },
          { kind: 'Field', name: { kind: 'Name', value: 'suspend_reason' } },
          { kind: 'Field', name: { kind: 'Name', value: 'suspended_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'suspended_by' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status_changed_at' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_by_agent_id' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_reason' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_reason_id' },
          },
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CUSTOMER_BILLING_PROFILE' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'customer_billing_profile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_subscriptions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'customer_billing_subscription_condensed',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'payment_options' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'subscription_payment_option' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'invoice_templates' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'subscription_invoice_template',
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'invoice_clubbing' } },
          { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
          { kind: 'Field', name: { kind: 'Name', value: 'billing_address' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_manager_id' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_department' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CUSTOMER_ACCOUNT_PROFILE_FRAGMENT, unknown>;
export const PROPERTY_PROFILE_EQUIPMENT_FRAGMENT_DOC = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_EQUIPMENT' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_equipment' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transmitters' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PROPERTY_PROFILE_TRANSMITTER' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_TRANSMITTER' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'transmitter' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heartbeat_interval' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'area' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decoder' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'set_name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PROPERTY_PROFILE_EQUIPMENT_FRAGMENT, unknown>;
export const FETCH_AGENTS_STATISTICS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FETCH_AGENTS_STATISTICS' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'fetch_agents_statistics_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'agents_statistics' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'core_agents_performance' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_agents_performance' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'agents_performance' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'total_alarms' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dispatch_times' } },
          { kind: 'Field', name: { kind: 'Name', value: 'save_times' } },
          { kind: 'Field', name: { kind: 'Name', value: 'acknowledge_times' } },
          { kind: 'Field', name: { kind: 'Name', value: 'call_times' } },
          { kind: 'Field', name: { kind: 'Name', value: 'late_alarms' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_AGENTS_STATISTICS_QUERY,
  FETCH_AGENTS_STATISTICS_QUERY_VARIABLES
>;
export const FETCH_RESPONDERS_STATISTICS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FETCH_RESPONDERS_STATISTICS' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'fetch_responders_statistics_params',
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responders_statistics' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'core_responders_performance' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_responders_performance' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'responders_performance' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'save_times' } },
          { kind: 'Field', name: { kind: 'Name', value: 'response_times' } },
          { kind: 'Field', name: { kind: 'Name', value: 'arrival_times' } },
          { kind: 'Field', name: { kind: 'Name', value: 'clear_times' } },
          { kind: 'Field', name: { kind: 'Name', value: 'late_alarms' } },
          { kind: 'Field', name: { kind: 'Name', value: 'total_alarms' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_RESPONDERS_STATISTICS_QUERY,
  FETCH_RESPONDERS_STATISTICS_QUERY_VARIABLES
>;
export const FETCH_PERMISSIONS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FETCH_PERMISSIONS' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'permissions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'permissions' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'action' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'subject_class' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_PERMISSIONS_QUERY,
  FETCH_PERMISSIONS_QUERY_VARIABLES
>;
export const CREATE_ROLE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CREATE_ROLE' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'role' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'create_role_input' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'create_role' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'role' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'role' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'role' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'company_id' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'created_at' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'discarded_at' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'permissions' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'action' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'subject_class' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CREATE_ROLE_MUTATION,
  CREATE_ROLE_MUTATION_VARIABLES
>;
export const UPDATE_ROLE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UPDATE_ROLE' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'updateRoleId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'update_role_input' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_role' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'updateRoleId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'role' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'company_id' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'created_at' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'discarded_at' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'permissions' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'action' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'subject_class' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_ROLE_MUTATION,
  UPDATE_ROLE_MUTATION_VARIABLES
>;
export const FETCH_ROLES_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FETCH_ROLES' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'roles' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'roles' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'company_id' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'created_at' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'discarded_at' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'permissions' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'action' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'subject_class' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FETCH_ROLES_QUERY, FETCH_ROLES_QUERY_VARIABLES>;
export const DELETE_ROLE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DELETE_ROLE' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'deleteRoleId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'delete_role' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'deleteRoleId' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DELETE_ROLE_MUTATION,
  DELETE_ROLE_MUTATION_VARIABLES
>;
export const VOIP_START_CALL_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'VOIP_START_CALL' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'number' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'token' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pbx_url' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'extension' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'voip_start_call' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'number' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'number' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'token' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'token' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pbx_url' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pbx_url' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'extension' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'extension' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'call_id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  VOIP_START_CALL_MUTATION,
  VOIP_START_CALL_MUTATION_VARIABLES
>;
export const VOIP_END_CALL_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'VOIP_END_CALL' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'token' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pbx_url' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'channel_id' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'voip_end_call' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'token' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'token' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pbx_url' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pbx_url' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'channel_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'channel_id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  VOIP_END_CALL_MUTATION,
  VOIP_END_CALL_MUTATION_VARIABLES
>;
export const VOIP_LOG_CALL_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'VOIP_LOG_CALL' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'keyholder_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'keyholder_was_reached' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'client_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'voip_log_call' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'client_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'client_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'keyholder_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'keyholder_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'keyholder_was_reached' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'keyholder_was_reached' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  VOIP_LOG_CALL_MUTATION,
  VOIP_LOG_CALL_MUTATION_VARIABLES
>;
export const VOIP_HEARTBEAT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'VOIP_HEARTBEAT' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'token' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pbx_url' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'voip_heartbeat' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'token' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'token' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pbx_url' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pbx_url' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  VOIP_HEARTBEAT_MUTATION,
  VOIP_HEARTBEAT_MUTATION_VARIABLES
>;
export const VALIDATE_HEARTBEAT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'VALIDATE_HEARTBEAT' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'validate_heartbeat' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'authenticated' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  VALIDATE_HEARTBEAT_QUERY,
  VALIDATE_HEARTBEAT_QUERY_VARIABLES
>;
export const FETCH_BILLING_DEPARTMENTS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FETCH_BILLING_DEPARTMENTS' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_departments' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'departments' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'billing_department_fragment',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'billing_department_fragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_department' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_BILLING_DEPARTMENTS_QUERY,
  FETCH_BILLING_DEPARTMENTS_QUERY_VARIABLES
>;
export const FETCH_ALARM_TYPES_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'fetch_alarm_types' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pagination' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'pagination_input' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'alarm_types' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pagination' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'alarm_types' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'core_alarm_type' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pagination' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'items' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'page' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_alarm_type' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'alarm_type' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priority' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alarm_description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alarm_type_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'history' } },
          { kind: 'Field', name: { kind: 'Name', value: 'message_to_user' } },
          { kind: 'Field', name: { kind: 'Name', value: 'non_emc' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sends_push_notifications' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_ALARM_TYPES_QUERY,
  FETCH_ALARM_TYPES_QUERY_VARIABLES
>;
export const CREATE_ALARM_TYPE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'create_alarm_type' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'alarm_type_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'create_alarm_type' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'alarm_type' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'core_alarm_type' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_alarm_type' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'alarm_type' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priority' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alarm_description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alarm_type_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'history' } },
          { kind: 'Field', name: { kind: 'Name', value: 'message_to_user' } },
          { kind: 'Field', name: { kind: 'Name', value: 'non_emc' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sends_push_notifications' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CREATE_ALARM_TYPE_MUTATION,
  CREATE_ALARM_TYPE_MUTATION_VARIABLES
>;
export const UPDATE_ALARM_TYPE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'update_alarm_type' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'alarm_type_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_alarm_type' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'alarm_type' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'core_alarm_type' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_alarm_type' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'alarm_type' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priority' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alarm_description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alarm_type_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'history' } },
          { kind: 'Field', name: { kind: 'Name', value: 'message_to_user' } },
          { kind: 'Field', name: { kind: 'Name', value: 'non_emc' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sends_push_notifications' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_ALARM_TYPE_MUTATION,
  UPDATE_ALARM_TYPE_MUTATION_VARIABLES
>;
export const DELETE_ALARM_TYPE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'delete_alarm_type' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'delete_alarm_type' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'alarm_type_id' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DELETE_ALARM_TYPE_MUTATION,
  DELETE_ALARM_TYPE_MUTATION_VARIABLES
>;
export const FETCH_DEBIT_ORDER_EXPORTS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'fetch_debit_order_exports' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fetch_debit_order_exports' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'debit_order_export' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'debit_order_attached_file' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'debit_order_attached_file' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'debit_order_export' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'debit_order_export' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'month_of' } },
          { kind: 'Field', name: { kind: 'Name', value: 'collection_date' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'all_attached_files' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'debit_order_attached_file' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_DEBIT_ORDER_EXPORTS_QUERY,
  FETCH_DEBIT_ORDER_EXPORTS_QUERY_VARIABLES
>;
export const DEBIT_ORDER_BULK_PROCESS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'debit_order_bulk_process' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'debit_order_format_type' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'collection_day' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'collection_month' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'debit_order_bulk_process' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'debit_order_format_type' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'debit_order_format_type' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'collection_day' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'collection_day' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'collection_month' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'collection_month' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DEBIT_ORDER_BULK_PROCESS_MUTATION,
  DEBIT_ORDER_BULK_PROCESS_MUTATION_VARIABLES
>;
export const GENERATE_DEBIT_ORDER_RUN_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'generate_debit_order_run' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'debit_order_format_type' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'collection_day' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'collection_month' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generate_debit_order_run' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'debit_order_format_type' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'debit_order_format_type' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'collection_day' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'collection_day' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'collection_month' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'collection_month' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'debit_order_export' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'all_attached_files' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'url' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GENERATE_DEBIT_ORDER_RUN_MUTATION,
  GENERATE_DEBIT_ORDER_RUN_MUTATION_VARIABLES
>;
export const FETCH_CUSTOMER_INVOICE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'fetch_customer_invoice' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fetch_customer_invoice' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'core_customer_transactions_invoice',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_billing_transaction' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_transaction' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'transaction_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'document_type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transaction_status' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
          { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'balance' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cancelation_reference_id' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_account_id' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_invoice_ids' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_customer_transactions_invoice' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'customer_transactions_invoice' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_account_id' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'reference_number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'remarks' } },
          { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
          { kind: 'Field', name: { kind: 'Name', value: 'amount_paid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'total_amount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'payable_amount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'outstanding_amount' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'tax' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_subscription_ids' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_transactions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'customer_billing_transaction' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'download_link' } },
          { kind: 'Field', name: { kind: 'Name', value: 'issue_date' } },
          { kind: 'Field', name: { kind: 'Name', value: 'due_date' } },
          { kind: 'Field', name: { kind: 'Name', value: 'paid_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'for_one_time_subscription' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_CUSTOMER_INVOICE_QUERY,
  FETCH_CUSTOMER_INVOICE_QUERY_VARIABLES
>;
export const FETCH_CUSTOMER_INVOICES_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'fetch_customer_invoices' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pagination' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'pagination_input' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'search_params' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'fetch_invoices_params' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fetch_customer_invoices' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pagination' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'search_params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'invoices' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'core_customer_invoice' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pagination' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'items' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'page' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_customer_invoice' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'customer_condensed_invoice' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_account_id' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'reference_number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'remarks' } },
          { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
          { kind: 'Field', name: { kind: 'Name', value: 'amount_paid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'total_amount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'issue_date' } },
          { kind: 'Field', name: { kind: 'Name', value: 'due_date' } },
          { kind: 'Field', name: { kind: 'Name', value: 'paid_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email_sent' } },
          { kind: 'Field', name: { kind: 'Name', value: 'last_email_sent' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_CUSTOMER_INVOICES_QUERY,
  FETCH_CUSTOMER_INVOICES_QUERY_VARIABLES
>;
export const FETCH_SSP_INVOICES_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'fetch_ssp_invoices' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pagination' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'pagination_input' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'search_params' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'fetch_invoices_params' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fetch_ssp_invoices' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pagination' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'search_params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'invoices' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ssp_customer_invoice' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pagination' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'items' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'page' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ssp_customer_invoice' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'customer_condensed_invoice' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_account_id' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'account_code' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_description' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'reference_number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'remarks' } },
          { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
          { kind: 'Field', name: { kind: 'Name', value: 'amount_paid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'total_amount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'outstanding_amount' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'issue_date' } },
          { kind: 'Field', name: { kind: 'Name', value: 'due_date' } },
          { kind: 'Field', name: { kind: 'Name', value: 'paid_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email_sent' } },
          { kind: 'Field', name: { kind: 'Name', value: 'last_email_sent' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_SSP_INVOICES_QUERY,
  FETCH_SSP_INVOICES_QUERY_VARIABLES
>;
export const UPDATE_CUSTOMER_INVOICE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'update_customer_invoice' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'invoice_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'update_customer_invoice_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_customer_invoice' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'invoice_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'invoice_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_CUSTOMER_INVOICE_MUTATION,
  UPDATE_CUSTOMER_INVOICE_MUTATION_VARIABLES
>;
export const ADD_PAYMENT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'add_payment' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'add_payment_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'add_payment' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ADD_PAYMENT_MUTATION,
  ADD_PAYMENT_MUTATION_VARIABLES
>;
export const ADD_CREDIT_NOTE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'add_credit_note' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'add_credit_note_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'add_credit_note' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ADD_CREDIT_NOTE_MUTATION,
  ADD_CREDIT_NOTE_MUTATION_VARIABLES
>;
export const ADD_DEBIT_NOTE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'add_debit_note' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'add_debit_note_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'add_debit_note' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ADD_DEBIT_NOTE_MUTATION,
  ADD_DEBIT_NOTE_MUTATION_VARIABLES
>;
export const CANCEL_REFUND_INVOICE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'cancel_refund_invoice' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'invoice_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'cancel_refund_invoice_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cancel_refund_invoice' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'invoice_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'invoice_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CANCEL_REFUND_INVOICE_MUTATION,
  CANCEL_REFUND_INVOICE_MUTATION_VARIABLES
>;
export const REJECT_BILLING_TRANSACTION_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'reject_billing_transaction' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'transaction_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'invoice_id' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'reject_billing_transaction' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'invoice_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'invoice_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'transaction_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'transaction_id' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  REJECT_BILLING_TRANSACTION_MUTATION,
  REJECT_BILLING_TRANSACTION_MUTATION_VARIABLES
>;
export const TRANSFER_TRANSACTION_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'transfer_transaction' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'transfer_transaction_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transfer_transaction' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  TRANSFER_TRANSACTION_MUTATION,
  TRANSFER_TRANSACTION_MUTATION_VARIABLES
>;
export const GENERATE_CUSTOMERS_INVOICES_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'generate_customers_invoices' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'invoice_date' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'invoice_description' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'month_of' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generate_customers_invoices' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'invoice_date' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'invoice_date' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'invoice_description' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'invoice_description' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'month_of' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'month_of' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GENERATE_CUSTOMERS_INVOICES_MUTATION,
  GENERATE_CUSTOMERS_INVOICES_MUTATION_VARIABLES
>;
export const REGENERATE_CUSTOMERS_INVOICES_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'regenerate_customers_invoices' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'invoice_date' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'invoice_description' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'month_of' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'regenerate_customers_invoices' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'invoice_date' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'invoice_date' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'invoice_description' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'invoice_description' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'month_of' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'month_of' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  REGENERATE_CUSTOMERS_INVOICES_MUTATION,
  REGENERATE_CUSTOMERS_INVOICES_MUTATION_VARIABLES
>;
export const REGENERATE_ONE_TIME_INVOICE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'regenerate_one_time_invoice' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'invoice_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'regenerate_one_time_invoice' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'invoice_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'invoice_id' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  REGENERATE_ONE_TIME_INVOICE_MUTATION,
  REGENERATE_ONE_TIME_INVOICE_MUTATION_VARIABLES
>;
export const EMAIL_CUSTOMERS_INVOICES_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'email_customers_invoices' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'month_of' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'email_body_text' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'invoice_ids' },
          },
          type: {
            kind: 'ListType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'email_customers_invoices' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'month_of' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'month_of' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'email_body_text' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'email_body_text' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'invoice_ids' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'invoice_ids' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  EMAIL_CUSTOMERS_INVOICES_MUTATION,
  EMAIL_CUSTOMERS_INVOICES_MUTATION_VARIABLES
>;
export const EMAIL_CUSTOMERS_INVOICES_ADVANCED_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'email_customers_invoices_advanced' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'email_customers_invoices_advanced_params',
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'email_customers_invoices_advanced' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  EMAIL_CUSTOMERS_INVOICES_ADVANCED_MUTATION,
  EMAIL_CUSTOMERS_INVOICES_ADVANCED_MUTATION_VARIABLES
>;
export const EMAIL_CUSTOMER_TRANSACTION_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'email_customer_transaction' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'transaction_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'email_body_text' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'email_customer_transaction' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'transaction_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'transaction_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'email_body_text' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'email_body_text' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  EMAIL_CUSTOMER_TRANSACTION_MUTATION,
  EMAIL_CUSTOMER_TRANSACTION_MUTATION_VARIABLES
>;
export const FETCH_CUSTOMER_BILLING_TRANSACTIONS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'fetch_customer_billing_transactions' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pagination' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'pagination_input' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fetch_billing_transactions' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pagination' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'transactions' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'customer_billing_transaction',
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pagination' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'items' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'page' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_billing_transaction' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_transaction' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'transaction_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'document_type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transaction_status' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
          { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'balance' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cancelation_reference_id' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_account_id' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_invoice_ids' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_CUSTOMER_BILLING_TRANSACTIONS_QUERY,
  FETCH_CUSTOMER_BILLING_TRANSACTIONS_QUERY_VARIABLES
>;
export const GENERATE_CUSTOMER_STATEMENT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'generate_customer_statement' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generate_customer_statement' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GENERATE_CUSTOMER_STATEMENT_MUTATION,
  GENERATE_CUSTOMER_STATEMENT_MUTATION_VARIABLES
>;
export const FETCH_AVAILABLE_PAYMENT_METHODS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'fetch_available_payment_methods' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fetch_available_payment_methods' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_AVAILABLE_PAYMENT_METHODS_QUERY,
  FETCH_AVAILABLE_PAYMENT_METHODS_QUERY_VARIABLES
>;
export const GENERATE_SSP_MONTHLY_BILLING_REPORT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'generate_ssp_monthly_billing_report' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'billing_month' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'billing_year' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'generate_ssp_monthly_billing_report',
            },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'billing_month' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'billing_month' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'billing_year' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'billing_year' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GENERATE_SSP_MONTHLY_BILLING_REPORT_MUTATION,
  GENERATE_SSP_MONTHLY_BILLING_REPORT_MUTATION_VARIABLES
>;
export const GENERATE_SSP_BILLING_STATEMENTS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'generate_ssp_billing_statements' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generate_ssp_billing_statements' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GENERATE_SSP_BILLING_STATEMENTS_MUTATION,
  GENERATE_SSP_BILLING_STATEMENTS_MUTATION_VARIABLES
>;
export const GENERATE_REVENUE_REPORT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'generate_revenue_report' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'year' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generate_revenue_report' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'year' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'year' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'report' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'download_link' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GENERATE_REVENUE_REPORT_MUTATION,
  GENERATE_REVENUE_REPORT_MUTATION_VARIABLES
>;
export const FETCH_DISCOUNT_TEMPLATES_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'fetch_discount_templates' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'currency' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'currency_codes' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'discount_templates' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'currency' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'currency' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'discount_templates' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'DISCOUNT_TEMPLATE_CORE' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pagination' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'items' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'page' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'DISCOUNT_PRICE_CORE' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'discount_price' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'recurrence' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price_excl_tax' } },
          { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
          { kind: 'Field', name: { kind: 'Name', value: 'active' } },
          { kind: 'Field', name: { kind: 'Name', value: 'discarded_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'DISCOUNT_TEMPLATE_CORE' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'discount_template' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tax_percentage' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'price_matrix' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'DISCOUNT_PRICE_CORE' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_DISCOUNT_TEMPLATES_QUERY,
  FETCH_DISCOUNT_TEMPLATES_QUERY_VARIABLES
>;
export const CREATE_DISCOUNT_TEMPLATE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'create_discount_template' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'description' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'tax_percentage' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'discount_pricings' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'create_discount_price_input' },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'create_discount_template' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'name' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'name' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'description' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'description' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'tax_percentage' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'tax_percentage' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'discount_pricings' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'discount_pricings' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CREATE_DISCOUNT_TEMPLATE_MUTATION,
  CREATE_DISCOUNT_TEMPLATE_MUTATION_VARIABLES
>;
export const UPDATE_DISCOUNT_TEMPLATE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'update_discount_template' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'description' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'tax_percentage' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_discount_template' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'name' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'name' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'description' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'description' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'tax_percentage' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'tax_percentage' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_DISCOUNT_TEMPLATE_MUTATION,
  UPDATE_DISCOUNT_TEMPLATE_MUTATION_VARIABLES
>;
export const DELETE_DISCOUNT_TEMPLATE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'delete_discount_template' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'delete_discount_template' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DELETE_DISCOUNT_TEMPLATE_MUTATION,
  DELETE_DISCOUNT_TEMPLATE_MUTATION_VARIABLES
>;
export const CREATE_DISCOUNT_PRICE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'create_discount_price' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'discount_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'discount_price' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'create_discount_price_input' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'create_discount_price' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'discount_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'discount_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'discount_price' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'discount_price' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CREATE_DISCOUNT_PRICE_MUTATION,
  CREATE_DISCOUNT_PRICE_MUTATION_VARIABLES
>;
export const UPDATE_DISCOUNT_PRICE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'update_discount_price' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'discount_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'price_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'price_excl_tax' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_discount_price' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'discount_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'discount_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'price_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'price_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'price_excl_tax' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'price_excl_tax' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_DISCOUNT_PRICE_MUTATION,
  UPDATE_DISCOUNT_PRICE_MUTATION_VARIABLES
>;
export const DELETE_DISCOUNT_PRICE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'delete_discount_price' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'discount_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'price_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'delete_discount_price' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'discount_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'discount_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'price_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'price_id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DELETE_DISCOUNT_PRICE_MUTATION,
  DELETE_DISCOUNT_PRICE_MUTATION_VARIABLES
>;
export const FETCH_PRODUCT_TEMPLATES_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FETCH_PRODUCT_TEMPLATES' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'currency' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'currency_codes' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'product_templates' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'currency' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'currency' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'product_templates' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PRODUCT_TEMPLATE_CORE' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pagination' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'items' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'page' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'product_price_core' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'product_price' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'recurrence' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price_excl_tax' } },
          { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
          { kind: 'Field', name: { kind: 'Name', value: 'active' } },
          { kind: 'Field', name: { kind: 'Name', value: 'discarded_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PRODUCT_TEMPLATE_CORE' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'product_template' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tax_percentage' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'price_matrix' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'product_price_core' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_PRODUCT_TEMPLATES_QUERY,
  FETCH_PRODUCT_TEMPLATES_QUERY_VARIABLES
>;
export const CREATE_PRODUCT_TEMPLATE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'create_product_template' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'description' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'tax_percentage' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'product_pricings' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'create_product_price_input' },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'create_product_template' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'name' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'name' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'description' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'description' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'tax_percentage' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'tax_percentage' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'product_pricings' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'product_pricings' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CREATE_PRODUCT_TEMPLATE_MUTATION,
  CREATE_PRODUCT_TEMPLATE_MUTATION_VARIABLES
>;
export const UPDATE_PRODUCT_TEMPLATE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'update_product_template' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'description' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'tax_percentage' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_product_template' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'name' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'name' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'description' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'description' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'tax_percentage' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'tax_percentage' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_PRODUCT_TEMPLATE_MUTATION,
  UPDATE_PRODUCT_TEMPLATE_MUTATION_VARIABLES
>;
export const DELETE_PRODUCT_TEMPLATE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'delete_product_template' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'delete_product_template' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DELETE_PRODUCT_TEMPLATE_MUTATION,
  DELETE_PRODUCT_TEMPLATE_MUTATION_VARIABLES
>;
export const CREATE_PRODUCT_PRICE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'create_product_price' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'product_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'product_price' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'create_product_price_input' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'create_product_price' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'product_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'product_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'product_price' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'product_price' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CREATE_PRODUCT_PRICE_MUTATION,
  CREATE_PRODUCT_PRICE_MUTATION_VARIABLES
>;
export const UPDATE_PRODUCT_PRICE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'update_product_price' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'product_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'price_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'price_excl_tax' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_product_price' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'product_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'product_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'price_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'price_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'price_excl_tax' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'price_excl_tax' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_PRODUCT_PRICE_MUTATION,
  UPDATE_PRODUCT_PRICE_MUTATION_VARIABLES
>;
export const DELETE_PRODUCT_PRICE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'delete_product_price' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'product_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'price_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'delete_product_price' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'product_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'product_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'price_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'price_id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DELETE_PRODUCT_PRICE_MUTATION,
  DELETE_PRODUCT_PRICE_MUTATION_VARIABLES
>;
export const CREATE_SSP_AREA_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'create_ssp_area' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'create_ssp_area' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'area_name' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'name' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'area' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'core_area' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_area' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'area' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CREATE_SSP_AREA_MUTATION,
  CREATE_SSP_AREA_MUTATION_VARIABLES
>;
export const UPDATE_SSP_AREA_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'update_ssp_area' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_ssp_area' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'area_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'area_name' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'name' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'area' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'core_area' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_area' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'area' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_SSP_AREA_MUTATION,
  UPDATE_SSP_AREA_MUTATION_VARIABLES
>;
export const DISCARD_SSP_AREA_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'discard_ssp_area' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'reassign_to_area' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'discard_ssp_area' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'area_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'reassign_to_area' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'reassign_to_area' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'area' } },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DISCARD_SSP_AREA_MUTATION,
  DISCARD_SSP_AREA_MUTATION_VARIABLES
>;
export const FETCH_AREAS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'fetch_areas' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pagination' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'pagination_input' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'areas' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pagination' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'areas' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'core_area' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pagination' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'items' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'page' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_area' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'area' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FETCH_AREAS_QUERY, FETCH_AREAS_QUERY_VARIABLES>;
export const CREATE_DECODER_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CREATE_DECODER' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'create_decoder_input' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'create_decoder' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'decoder' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'core_decoder' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_decoder' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'decoder' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CREATE_DECODER_MUTATION,
  CREATE_DECODER_MUTATION_VARIABLES
>;
export const UPDATE_DECODER_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UPDATE_DECODER' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'update_decoder_input' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_decoder' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'decoder' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'core_decoder' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_decoder' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'decoder' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_DECODER_MUTATION,
  UPDATE_DECODER_MUTATION_VARIABLES
>;
export const DELETE_DECODER_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DELETE_DECODER' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'delete_decoder' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'decoder' } },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DELETE_DECODER_MUTATION,
  DELETE_DECODER_MUTATION_VARIABLES
>;
export const FETCH_DECODER_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FETCH_DECODER' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decoder' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'decoder' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'core_decoder' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_decoder' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'decoder' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_DECODER_QUERY,
  FETCH_DECODER_QUERY_VARIABLES
>;
export const FETCH_DECODERS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FETCH_DECODERS' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pagination' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'pagination_input' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decoders' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pagination' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'decoders' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'core_decoder' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pagination' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'items' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'page' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_decoder' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'decoder' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_DECODERS_QUERY,
  FETCH_DECODERS_QUERY_VARIABLES
>;
export const FETCH_SSP_SETTINGS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'fetch_ssp_settings' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ssp_company_details' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'core_ssp_settings' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_ssp_settings' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ssp_company_details' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'time_zone' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'reaction_test_time' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'responsetime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'timeout' } },
          { kind: 'Field', name: { kind: 'Name', value: 'billing_enabled' } },
          { kind: 'Field', name: { kind: 'Name', value: 'banking_username' } },
          { kind: 'Field', name: { kind: 'Name', value: 'abbreviated_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'trading_number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'account_number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'currencies' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'invoice_banking_details' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'invoice_footer_information' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'collection_days' } },
          { kind: 'Field', name: { kind: 'Name', value: 'invoice_due_days' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'invoice_job_last_run' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'invoice_job_status' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'web_link' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'terms_and_conditions' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_SSP_SETTINGS_QUERY,
  FETCH_SSP_SETTINGS_QUERY_VARIABLES
>;
export const UPDATE_SSP_SETTINGS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'update_ssp_settings' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ssp_company_details_input' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_ssp_company_details' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_SSP_SETTINGS_MUTATION,
  UPDATE_SSP_SETTINGS_MUTATION_VARIABLES
>;
export const CREATE_TRANSMITTER_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CREATE_TRANSMITTER' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'create_transmitter_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'create_transmitter' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'transmitter' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'core_transmitter' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_transmitter' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'transmitter' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'set_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'area' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decoder' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heartbeat_interval' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CREATE_TRANSMITTER_MUTATION,
  CREATE_TRANSMITTER_MUTATION_VARIABLES
>;
export const UPDATE_TRANSMITTER_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UPDATE_TRANSMITTER' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'update_transmitter_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_transmitter' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'transmitter' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'core_transmitter' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_transmitter' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'transmitter' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'set_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'area' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decoder' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heartbeat_interval' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_TRANSMITTER_MUTATION,
  UPDATE_TRANSMITTER_MUTATION_VARIABLES
>;
export const UPDATE_TRANSMITTER_STATUS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UPDATE_TRANSMITTER_STATUS' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'property_id' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'status' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'transmitter_status' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_transmitter_status' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'property_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'property_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'status' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'status' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'transmitter' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'core_transmitter' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_transmitter' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'transmitter' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'set_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'area' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decoder' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heartbeat_interval' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_TRANSMITTER_STATUS_MUTATION,
  UPDATE_TRANSMITTER_STATUS_MUTATION_VARIABLES
>;
export const FETCH_TRANSMITTERS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FETCH_TRANSMITTERS' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'search_params' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'fetch_transmitters_params' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pagination' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'pagination_input' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transmitters' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'search_params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'search_params' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pagination' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'transmitters' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'core_transmitter' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pagination' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'items' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'page' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_transmitter' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'transmitter' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'set_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'area' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decoder' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heartbeat_interval' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_TRANSMITTERS_QUERY,
  FETCH_TRANSMITTERS_QUERY_VARIABLES
>;
export const FETCH_SSP_REPORTS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'fetch_ssp_reports' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pagination' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'pagination_input' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fetch_ssp_reports' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pagination' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'reports' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'download_link' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'records_count' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'filters' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'active' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'state' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'area_id_in' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'decoder_eq' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'alarm_type_eq' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'created_at_gteq' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'created_at_lteq' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'date_from' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'date_to' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'created_at' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pagination' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'items' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'page' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_SSP_REPORTS_QUERY,
  FETCH_SSP_REPORTS_QUERY_VARIABLES
>;
export const GENERATE_FALSE_ALARMS_REPORT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'generate_false_alarms_report' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'area_ids' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_type' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'date_from' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'date_to' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generate_false_alarms_report' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'area_ids' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'area_ids' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_type' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_type' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'date_from' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'date_from' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'date_to' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'date_to' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GENERATE_FALSE_ALARMS_REPORT_QUERY,
  GENERATE_FALSE_ALARMS_REPORT_QUERY_VARIABLES
>;
export const GENERATE_OVERACTIVE_ALARMS_REPORT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'generate_overactive_alarms_report' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'area_ids' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_type' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'date_from' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'date_to' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generate_overactive_alarms_report' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'area_ids' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'area_ids' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_type' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_type' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'date_from' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'date_from' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'date_to' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'date_to' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GENERATE_OVERACTIVE_ALARMS_REPORT_QUERY,
  GENERATE_OVERACTIVE_ALARMS_REPORT_QUERY_VARIABLES
>;
export const GENERATE_HOME_ALARM_REPORT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'generate_home_alarm_report' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'area_ids' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_type' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'date_from' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'date_to' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generate_home_alarm_report' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'area_ids' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'area_ids' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_type' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_type' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'date_from' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'date_from' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'date_to' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'date_to' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GENERATE_HOME_ALARM_REPORT_QUERY,
  GENERATE_HOME_ALARM_REPORT_QUERY_VARIABLES
>;
export const GENERATE_TRANSMITTERS_STOCK_REPORT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'generate_transmitters_stock_report' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'area_ids' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'transmitter_status' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'transmitter_status' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'decoder_name' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generate_transmitters_stock_report' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'area_ids' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'area_ids' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'transmitter_status' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'transmitter_status' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'decoder_name' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'decoder_name' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GENERATE_TRANSMITTERS_STOCK_REPORT_QUERY,
  GENERATE_TRANSMITTERS_STOCK_REPORT_QUERY_VARIABLES
>;
export const GENERATE_RESPONDERS_DELEGATIONS_REPORT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'generate_responders_delegations_report' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'area_ids' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'date_from' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'date_to' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'generate_responders_delegations_report',
            },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'area_ids' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'area_ids' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'date_from' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'date_from' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'date_to' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'date_to' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GENERATE_RESPONDERS_DELEGATIONS_REPORT_QUERY,
  GENERATE_RESPONDERS_DELEGATIONS_REPORT_QUERY_VARIABLES
>;
export const GENERATE_OB_STATS_REPORT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'generate_ob_stats_report' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'area_ids' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'active' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_type' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'date_from' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'date_to' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generate_ob_stats_report' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'area_ids' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'area_ids' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'active' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'active' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_type' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_type' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'date_from' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'date_from' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'date_to' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'date_to' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GENERATE_OB_STATS_REPORT_QUERY,
  GENERATE_OB_STATS_REPORT_QUERY_VARIABLES
>;
export const GENERATE_CUSTOMERS_PROPERTIES_REPORT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'generate_customers_properties_report' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'area_ids' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'property_active' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'generate_customers_properties_report',
            },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'area_ids' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'area_ids' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'property_active' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'property_active' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GENERATE_CUSTOMERS_PROPERTIES_REPORT_QUERY,
  GENERATE_CUSTOMERS_PROPERTIES_REPORT_QUERY_VARIABLES
>;
export const GENERATE_CUSTOMERS_KEYHOLDERS_REPORT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'generate_customers_keyholders_report' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'area_ids' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'property_active' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'generate_customers_keyholders_report',
            },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'area_ids' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'area_ids' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'property_active' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'property_active' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GENERATE_CUSTOMERS_KEYHOLDERS_REPORT_QUERY,
  GENERATE_CUSTOMERS_KEYHOLDERS_REPORT_QUERY_VARIABLES
>;
export const GENERATE_WORK_SHIFT_REPORT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'generate_work_shift_report' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'day_shift_start' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'date_from' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'date_to' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'night_shift_start' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generate_work_shift_report' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'day_shift_start' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'day_shift_start' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'date_from' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'date_from' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'date_to' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'date_to' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'night_shift_start' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'night_shift_start' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GENERATE_WORK_SHIFT_REPORT_QUERY,
  GENERATE_WORK_SHIFT_REPORT_QUERY_VARIABLES
>;
export const FETCH_SYSTEM_EVENTS_AUDIT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'fetch_system_events_audit' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'search_params' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'system_events_audit_search_params' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pagination' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'pagination_input' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fetch_system_events_audit' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'search_params' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pagination' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'system_change_events' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'system_change_event' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pagination' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'items' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'page' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'system_change_event_value' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'system_change_event_value' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'old_value' } },
          { kind: 'Field', name: { kind: 'Name', value: 'new_value' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'system_change_event' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'system_change_event' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'log_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'event_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'changed_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'changed_date' } },
          { kind: 'Field', name: { kind: 'Name', value: 'changed_by_id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'changes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'system_change_event_value' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_SYSTEM_EVENTS_AUDIT_QUERY,
  FETCH_SYSTEM_EVENTS_AUDIT_QUERY_VARIABLES
>;
export const FETCH_SYSTEM_CHANGE_TYPES_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'fetch_system_change_types' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fetch_system_change_types' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_SYSTEM_CHANGE_TYPES_QUERY,
  FETCH_SYSTEM_CHANGE_TYPES_QUERY_VARIABLES
>;
export const TRACK_RESPONDERS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'track_responders' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'live_responder' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'live_responder' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'responder' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'position' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_on' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  TRACK_RESPONDERS_QUERY,
  TRACK_RESPONDERS_QUERY_VARIABLES
>;
export const CREATE_RESPONDER_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CREATE_RESPONDER' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'responder_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'create_responder' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responder' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'core_responder' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_responder' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'responder' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'password' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'position' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'created_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'area_ids' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CREATE_RESPONDER_MUTATION,
  CREATE_RESPONDER_MUTATION_VARIABLES
>;
export const UPDATE_RESPONDER_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UPDATE_RESPONDER' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'responder_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_responder' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responder' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'core_responder' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_responder' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'responder' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'password' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'position' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'created_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'area_ids' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_RESPONDER_MUTATION,
  UPDATE_RESPONDER_MUTATION_VARIABLES
>;
export const DELETE_RESPONDER_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DELETE_RESPONDER' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'delete_responder' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responder_id' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DELETE_RESPONDER_MUTATION,
  DELETE_RESPONDER_MUTATION_VARIABLES
>;
export const FETCH_RESPONDER_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FETCH_RESPONDER' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responder' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'core_responder' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_responder' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'responder' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'password' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'position' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'created_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'area_ids' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_RESPONDER_QUERY,
  FETCH_RESPONDER_QUERY_VARIABLES
>;
export const FETCH_RESPONDERS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FETCH_RESPONDERS' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'responders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'core_responder' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_responder' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'responder' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'password' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'position' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'longitude' } },
                { kind: 'Field', name: { kind: 'Name', value: 'latitude' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'created_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'area_ids' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_RESPONDERS_QUERY,
  FETCH_RESPONDERS_QUERY_VARIABLES
>;
export const CREATE_TECHNICIAN_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'create_technician' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'technician_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'create_technician' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CREATE_TECHNICIAN_MUTATION,
  CREATE_TECHNICIAN_MUTATION_VARIABLES
>;
export const UPDATE_TECHNICIAN_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'update_technician' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'technician_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_technician' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_TECHNICIAN_MUTATION,
  UPDATE_TECHNICIAN_MUTATION_VARIABLES
>;
export const DELETE_TECHNICIAN_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'delete_technician' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'delete_technician' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DELETE_TECHNICIAN_MUTATION,
  DELETE_TECHNICIAN_MUTATION_VARIABLES
>;
export const FETCH_TECHNICIANS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'fetch_technicians' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fetch_technicians' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'core_technician' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_technician' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'technician' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'active' } },
          { kind: 'Field', name: { kind: 'Name', value: 'available' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone_number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_TECHNICIANS_QUERY,
  FETCH_TECHNICIANS_QUERY_VARIABLES
>;
export const LOGIN_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'LOGIN' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'email' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'password' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'login' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'email' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'email' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'password' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'password' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'seon_auth_headers' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'client' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'token' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'expiry' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'servcraft_token' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'username' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'created_at' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updated_at' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'role' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'company_id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'created_at' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'discarded_at' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'permissions' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'action' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'subject_class',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LOGIN_MUTATION, LOGIN_MUTATION_VARIABLES>;
export const LOGOUT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'LOGOUT' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'logout' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LOGOUT_MUTATION, LOGOUT_MUTATION_VARIABLES>;
export const ASSIGN_AGENT_AREAS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ASSIGN_AGENT_AREAS' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'areas' },
          },
          type: {
            kind: 'ListType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assign_agent_areas' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'areas' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'areas' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'areas' } },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ASSIGN_AGENT_AREAS_MUTATION,
  ASSIGN_AGENT_AREAS_MUTATION_VARIABLES
>;
export const UNASSIGN_AGENT_AREAS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UNASSIGN_AGENT_AREAS' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'areas' },
          },
          type: {
            kind: 'ListType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'unassign_agent_areas' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'areas' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'areas' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'areas' } },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UNASSIGN_AGENT_AREAS_MUTATION,
  UNASSIGN_AGENT_AREAS_MUTATION_VARIABLES
>;
export const DELETE_AGENT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DELETE_AGENT' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'agent_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'delete_agent' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'agent_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'agent_id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                { kind: 'Field', name: { kind: 'Name', value: 'agent' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DELETE_AGENT_MUTATION,
  DELETE_AGENT_MUTATION_VARIABLES
>;
export const UPDATE_AGENT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UPDATE_AGENT' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'agent_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_agent' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'agent' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'core_agent' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_agent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'agent' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role_id' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_AGENT_MUTATION,
  UPDATE_AGENT_MUTATION_VARIABLES
>;
export const CREATE_AGENT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CREATE_AGENT' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'agent_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'create_agent' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'agent' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'core_agent' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_agent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'agent' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role_id' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CREATE_AGENT_MUTATION,
  CREATE_AGENT_MUTATION_VARIABLES
>;
export const FETCH_AGENTS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FETCH_AGENTS' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'agents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'agents' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'core_agent' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_agent' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'agent' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role_id' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FETCH_AGENTS_QUERY, FETCH_AGENTS_QUERY_VARIABLES>;
export const FETCH_AREAS_STATUS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FETCH_AREAS_STATUS' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fetch_areas_status' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'areas' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'assigned_agents_count' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'active_alarms_count' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_AREAS_STATUS_QUERY,
  FETCH_AREAS_STATUS_QUERY_VARIABLES
>;
export const LOGIN_USER_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'login_user' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'email' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'password' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'login_user' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'email' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'email' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'password' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'password' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'seon_auth_headers' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'client' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'token' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'expiry' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'servcraft_token' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'username' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'created_at' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updated_at' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'role' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'company_id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'created_at' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'discarded_at' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'permissions' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'action' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'subject_class',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ssp_settings' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'ssp_id' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'logo_image_url' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'billing_enabled' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  LOGIN_USER_MUTATION,
  LOGIN_USER_MUTATION_VARIABLES
>;
export const FETCH_ALARM_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'fetch_alarm' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'alarm' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'core_alarm' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'alarm_customer' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'customer' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contact' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'first_name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'last_name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'landline_phone' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mobile_phone' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'other_phone' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'medical' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'age' } },
                { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'medical_conditions' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'bloodtype' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'insurance_name' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'insurance_policy_id' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'profile_picture' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_transmitter' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'transmitter' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'set_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'area' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decoder' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heartbeat_interval' },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_alarm_incident_report' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'alarm_incident_report' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alarm_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'home_alarm_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'false_alarm' } },
          { kind: 'Field', name: { kind: 'Name', value: 'all_in_order' } },
          { kind: 'Field', name: { kind: 'Name', value: 'damage' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'handed_over_to_police_or_ems' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'incident_report_images' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'property_accessed' } },
          { kind: 'Field', name: { kind: 'Name', value: 'vagrants_in_area' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'possible_intrusion' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'no_visible_intrusion' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'open_door' } },
          { kind: 'Field', name: { kind: 'Name', value: 'open_garage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'open_window' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_alarm' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'alarm' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priority' } },
          { kind: 'Field', name: { kind: 'Name', value: 'source' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alarm_state' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customer' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'alarm_customer' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'property' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'images' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'video_feeds' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'geospatial' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'coordinates' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'longitude' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'latitude' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'entire_address' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'area' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'keyholders' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'mobile_phone' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'landline_phone' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'call_order' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'password' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'instructions' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'HOLIDAY' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'note' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'NOTE' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'note' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'AGENT' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'note' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'RESPONDER' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'note' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'KEY' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'note' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'password' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'duress_password' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'testing_enabled' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'triggered_zones' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'time_triggered' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'zone_type' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'is_overactive' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'on_hold_mode' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'enabled' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'triggered_transmitter' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'core_transmitter' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assigned_agents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assigned_responders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'offline' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'incident_report' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'core_alarm_incident_report' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'procedure_timestamps' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'agent_acknowledged_instructions_at',
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'agent_phoned_first_keyholder_at',
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'keyholder_confirmed_emergency_at',
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responder_dispatched_at' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responder_enroute_at' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responder_arrived_at' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responder_saved_property_at' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responder_closed_report_at' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'alarm_completed_at' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'alarm_reopened_at' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'keyholder_cancelled_at' },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'customer_verified_password_at',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'notes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
                { kind: 'Field', name: { kind: 'Name', value: 'agent_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'keyholder_logs' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'client_keyholder_id' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'keyholder_name' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'keyholder_phone' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'password_verified' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'reached' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'panel_information' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'panel_id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FETCH_ALARM_QUERY, FETCH_ALARM_QUERY_VARIABLES>;
export const FETCH_ALARMS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'fetch_alarms' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_stack' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'alarm_stack' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'alarms' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_stack' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_stack' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'alarms' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'core_alarm' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'alarm_customer' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'customer' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contact' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'first_name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'last_name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'landline_phone' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mobile_phone' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'other_phone' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'medical' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'age' } },
                { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'medical_conditions' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'bloodtype' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'insurance_name' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'insurance_policy_id' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'profile_picture' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_transmitter' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'transmitter' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'set_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'area' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decoder' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heartbeat_interval' },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_alarm_incident_report' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'alarm_incident_report' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alarm_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'home_alarm_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'false_alarm' } },
          { kind: 'Field', name: { kind: 'Name', value: 'all_in_order' } },
          { kind: 'Field', name: { kind: 'Name', value: 'damage' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'handed_over_to_police_or_ems' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'incident_report_images' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'property_accessed' } },
          { kind: 'Field', name: { kind: 'Name', value: 'vagrants_in_area' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'possible_intrusion' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'no_visible_intrusion' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'open_door' } },
          { kind: 'Field', name: { kind: 'Name', value: 'open_garage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'open_window' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_alarm' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'alarm' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priority' } },
          { kind: 'Field', name: { kind: 'Name', value: 'source' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alarm_state' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customer' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'alarm_customer' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'property' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'images' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'video_feeds' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'geospatial' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'coordinates' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'longitude' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'latitude' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'entire_address' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'area' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'keyholders' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'mobile_phone' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'landline_phone' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'call_order' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'password' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'instructions' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'HOLIDAY' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'note' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'NOTE' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'note' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'AGENT' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'note' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'RESPONDER' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'note' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'KEY' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'note' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'password' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'duress_password' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'testing_enabled' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'triggered_zones' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'time_triggered' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'zone_type' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'is_overactive' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'on_hold_mode' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'enabled' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'triggered_transmitter' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'core_transmitter' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assigned_agents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assigned_responders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'offline' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'incident_report' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'core_alarm_incident_report' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'procedure_timestamps' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'agent_acknowledged_instructions_at',
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'agent_phoned_first_keyholder_at',
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'keyholder_confirmed_emergency_at',
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responder_dispatched_at' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responder_enroute_at' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responder_arrived_at' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responder_saved_property_at' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responder_closed_report_at' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'alarm_completed_at' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'alarm_reopened_at' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'keyholder_cancelled_at' },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'customer_verified_password_at',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'notes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
                { kind: 'Field', name: { kind: 'Name', value: 'agent_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'keyholder_logs' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'client_keyholder_id' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'keyholder_name' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'keyholder_phone' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'password_verified' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'reached' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'panel_information' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'panel_id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FETCH_ALARMS_QUERY, FETCH_ALARMS_QUERY_VARIABLES>;
export const ASSIGN_RESPONDER_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'assign_responder' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_source' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'alarm_source' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'reassigning' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'responder_id' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'offline_name' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assign_responder' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_source' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_source' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'reassigning' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'reassigning' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'responder_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'responder_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offline_name' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'offline_name' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ASSIGN_RESPONDER_MUTATION,
  ASSIGN_RESPONDER_MUTATION_VARIABLES
>;
export const ACKNOWLEDGE_ALARM_INSTRUCTIONS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'acknowledge_alarm_instructions' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_source' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'alarm_source' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'acknowledge_alarm_instructions' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_source' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_source' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ACKNOWLEDGE_ALARM_INSTRUCTIONS_MUTATION,
  ACKNOWLEDGE_ALARM_INSTRUCTIONS_MUTATION_VARIABLES
>;
export const CANCEL_ALARM_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CANCEL_ALARM' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_source' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'alarm_source' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cancel_reason' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'notes' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cancel_alarm' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_source' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_source' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cancel_reason' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cancel_reason' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'notes' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'notes' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CANCEL_ALARM_MUTATION,
  CANCEL_ALARM_MUTATION_VARIABLES
>;
export const CLOSE_ALARM_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'close_alarm' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_source' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'alarm_source' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'close_reason' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'notes' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'close_alarm' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'close_reason' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'close_reason' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'notes' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'notes' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_source' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_source' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CLOSE_ALARM_MUTATION,
  CLOSE_ALARM_MUTATION_VARIABLES
>;
export const CLOSE_ALARMS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'close_alarms' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_stack' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'alarm_stack' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_type' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'close_reason' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'close_alarms' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_stack' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_stack' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_type' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_type' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'close_reason' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'close_reason' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CLOSE_ALARMS_MUTATION,
  CLOSE_ALARMS_MUTATION_VARIABLES
>;
export const INCREASE_ALARM_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'increase_alarm' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'notes' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'increase_alarm' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'notes' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'notes' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  INCREASE_ALARM_MUTATION,
  INCREASE_ALARM_MUTATION_VARIABLES
>;
export const HISTORY_ALARMS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'history_alarms' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pagination' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'pagination_input' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'search_params' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'history_alarms_params' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'history_alarms' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pagination' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'search_params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'search_params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'alarms' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'alarm_type' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'alarm_state' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'procedure_timestamps' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updated_at' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'created_at' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'agent_acknowledged_instructions_at',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'agent_phoned_first_keyholder_at',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'keyholder_confirmed_emergency_at',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'responder_dispatched_at',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'responder_enroute_at',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'responder_arrived_at',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'responder_saved_property_at',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'responder_closed_report_at',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'alarm_completed_at',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'alarm_reopened_at',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'keyholder_cancelled_at',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'customer_verified_password_at',
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'agent_id' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'area_id' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'customer' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'contact' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'title' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'first_name' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'last_name' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'landline_phone',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'mobile_phone',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'other_phone',
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'medical' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'bloodtype' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'gender' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'age' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'insurance_name',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'insurance_policy_id',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'medical_conditions',
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'profile_picture' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'coordinates' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'latitude' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'longitude' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'created_at' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updated_at' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'enroute_at' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'responder_assigned_at' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'saved_at' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'closed_at' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pagination' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'items' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'page' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  HISTORY_ALARMS_QUERY,
  HISTORY_ALARMS_QUERY_VARIABLES
>;
export const LOG_KEYHOLDER_CALL_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'log_keyholder_call' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'keyholder_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'keyholder_was_reached' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'password_verified' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'log_keyholder_call' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'keyholder_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'keyholder_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'keyholder_was_reached' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'keyholder_was_reached' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'password_verified' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'password_verified' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  LOG_KEYHOLDER_CALL_MUTATION,
  LOG_KEYHOLDER_CALL_MUTATION_VARIABLES
>;
export const FETCH_ALARM_LOGS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'fetch_alarm_logs' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_source' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'alarm_source' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'alarm_logs' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_source' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_source' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'core_alarm_log' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'core_alarm_log' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'alarm_log' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alarm_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'message' } },
          { kind: 'Field', name: { kind: 'Name', value: 'level' } },
          { kind: 'Field', name: { kind: 'Name', value: 'agent_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'panic_alarm_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_ALARM_LOGS_QUERY,
  FETCH_ALARM_LOGS_QUERY_VARIABLES
>;
export const UPDATE_ALARM_NOTES_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UPDATE_ALARM_NOTES' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_source' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'alarm_source' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'notes' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_alarm_notes' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_source' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_source' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'notes' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'notes' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_ALARM_NOTES_MUTATION,
  UPDATE_ALARM_NOTES_MUTATION_VARIABLES
>;
export const LOG_SECURITY_QUESTION_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'log_security_question' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_source' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'alarm_source' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'answer' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'security_question_answer' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'log_security_question' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_source' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_source' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'answer' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'answer' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  LOG_SECURITY_QUESTION_MUTATION,
  LOG_SECURITY_QUESTION_MUTATION_VARIABLES
>;
export const SUBSCRIBE_ALARMS_UPDATE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'SUBSCRIBE_ALARMS_UPDATE' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'alarm_stack' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'alarm_stack' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'alarms_updated' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'alarm_stack' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'alarm_stack' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SUBSCRIBE_ALARMS_UPDATE_SUBSCRIPTION,
  SUBSCRIBE_ALARMS_UPDATE_SUBSCRIPTION_VARIABLES
>;
export const ACCOUNT_SUSPENSION_REASONS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'account_suspension_reasons' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_suspension_reasons' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'account_suspension_reason' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'account_suspension_reason' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'account_suspension_reason' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'reason' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ACCOUNT_SUSPENSION_REASONS_QUERY,
  ACCOUNT_SUSPENSION_REASONS_QUERY_VARIABLES
>;
export const CREATE_BILLING_SUBSCRIPTION_ITEM_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'create_billing_subscription_item' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'subscription_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'create_billing_subscription_item_params',
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'create_billing_subscription_item' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'subscription_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'subscription_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'customer_subscription_billing_item',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_subscription_billing_item' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_subscription_item' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'template' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'property' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'pricing_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'starting_price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'current_price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CREATE_BILLING_SUBSCRIPTION_ITEM_MUTATION,
  CREATE_BILLING_SUBSCRIPTION_ITEM_MUTATION_VARIABLES
>;
export const UPDATE_BILLING_SUBSCRIPTION_ITEM_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'update_billing_subscription_item' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'subscription_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'subscription_item_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'update_billing_subscription_item_params',
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_billing_subscription_item' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'subscription_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'subscription_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'subscription_item_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'subscription_item_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'customer_subscription_billing_item',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_subscription_billing_item' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_subscription_item' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'template' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'property' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'pricing_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'starting_price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'current_price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_BILLING_SUBSCRIPTION_ITEM_MUTATION,
  UPDATE_BILLING_SUBSCRIPTION_ITEM_MUTATION_VARIABLES
>;
export const DELETE_BILLING_SUBSCRIPTION_ITEM_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'delete_billing_subscription_item' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'subscription_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'subscription_item_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'delete_billing_subscription_item' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'subscription_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'subscription_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'subscription_item_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'subscription_item_id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'customer_subscription_billing_item',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_subscription_billing_item' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_subscription_item' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'template' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'property' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'pricing_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'starting_price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'current_price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DELETE_BILLING_SUBSCRIPTION_ITEM_MUTATION,
  DELETE_BILLING_SUBSCRIPTION_ITEM_MUTATION_VARIABLES
>;
export const CUSTOMER_SUBSCRIPTIONS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'customer_subscriptions' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customer_billing_subscriptions' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'customer_billing_subscription_expanded',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'subscription_invoice_template' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_invoice_template' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'legal_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'company_name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'company_registration_number' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'vat_number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cc_email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'billing_address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'invoice_due_days' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'collection_day_of_month' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'payment_method' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_payment_option' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_payment_option_id' },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'subscription_payment_option' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_payment_option' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_first_name' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_last_name' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_phone' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'account_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bank_account_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bank_code' } },
          { kind: 'Field', name: { kind: 'Name', value: 'card_type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decrypted_bank_account_number' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decrypted_card_number' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'expiry_date' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_billing_subscription_expanded' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_subscription' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'derived_status_as_of' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'frequency' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'effective_start_date' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'effective_end_date' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'initial_total_amount' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'latest_total_amount' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'total_tax' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'individual_increase_rate' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'last_invoice_generated_on' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'next_execution_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'paused_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'resumed_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'deactivated_on' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deactivation_reason' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_invoice_template' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'subscription_invoice_template',
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'billing_payment_option' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'subscription_payment_option',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_subscription_items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'template' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'property' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'pricing_id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'starting_price' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'current_price' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CUSTOMER_SUBSCRIPTIONS_QUERY,
  CUSTOMER_SUBSCRIPTIONS_QUERY_VARIABLES
>;
export const CUSTOMER_SUBSCRIPTION_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'customer_subscription' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customer_billing_subscription' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'customer_billing_subscription_expanded',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'subscription_invoice_template' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_invoice_template' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'legal_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'company_name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'company_registration_number' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'vat_number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cc_email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'billing_address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'invoice_due_days' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'collection_day_of_month' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'payment_method' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_payment_option' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_payment_option_id' },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'subscription_payment_option' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_payment_option' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_first_name' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_last_name' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_phone' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'account_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bank_account_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bank_code' } },
          { kind: 'Field', name: { kind: 'Name', value: 'card_type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decrypted_bank_account_number' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decrypted_card_number' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'expiry_date' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_billing_subscription_expanded' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_subscription' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'derived_status_as_of' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'frequency' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'effective_start_date' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'effective_end_date' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'initial_total_amount' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'latest_total_amount' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'total_tax' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'individual_increase_rate' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'last_invoice_generated_on' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'next_execution_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'paused_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'resumed_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'deactivated_on' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deactivation_reason' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_invoice_template' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'subscription_invoice_template',
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'billing_payment_option' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'subscription_payment_option',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_subscription_items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'template' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'property' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'pricing_id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'starting_price' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'current_price' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CUSTOMER_SUBSCRIPTION_QUERY,
  CUSTOMER_SUBSCRIPTION_QUERY_VARIABLES
>;
export const CREATE_BILLING_SUBSCRIPTION_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'create_billing_subscription' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'create_billing_subscription_params',
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'create_billing_subscription' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'customer_billing_subscription_condensed',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_billing_subscription_condensed' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_subscription' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'derived_status_as_of' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'frequency' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'effective_start_date' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'effective_end_date' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'initial_total_amount' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'latest_total_amount' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'individual_increase_rate' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'last_invoice_generated_on' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'next_execution_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'paused_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'resumed_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'deactivated_on' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deactivation_reason' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_invoice_template_id' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CREATE_BILLING_SUBSCRIPTION_MUTATION,
  CREATE_BILLING_SUBSCRIPTION_MUTATION_VARIABLES
>;
export const UPDATE_BILLING_SUBSCRIPTION_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'update_billing_subscription' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'subscription_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'update_billing_subscription_params',
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_billing_subscription' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'subscription_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'subscription_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'customer_billing_subscription_condensed',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_billing_subscription_condensed' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_subscription' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'derived_status_as_of' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'frequency' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'effective_start_date' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'effective_end_date' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'initial_total_amount' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'latest_total_amount' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'individual_increase_rate' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'last_invoice_generated_on' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'next_execution_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'paused_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'resumed_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'deactivated_on' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deactivation_reason' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_invoice_template_id' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_BILLING_SUBSCRIPTION_MUTATION,
  UPDATE_BILLING_SUBSCRIPTION_MUTATION_VARIABLES
>;
export const DELETE_BILLING_SUBSCRIPTION_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'delete_billing_subscription' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'subscription_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'end_date' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'delete_billing_subscription' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'subscription_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'subscription_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'end_date' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'end_date' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'customer_billing_subscription_expanded',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'subscription_invoice_template' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_invoice_template' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'legal_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'company_name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'company_registration_number' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'vat_number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cc_email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'billing_address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'invoice_due_days' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'collection_day_of_month' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'payment_method' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_payment_option' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_payment_option_id' },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'subscription_payment_option' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_payment_option' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_first_name' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_last_name' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_phone' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'account_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bank_account_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bank_code' } },
          { kind: 'Field', name: { kind: 'Name', value: 'card_type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decrypted_bank_account_number' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decrypted_card_number' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'expiry_date' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_billing_subscription_expanded' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_subscription' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'derived_status_as_of' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'frequency' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'effective_start_date' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'effective_end_date' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'initial_total_amount' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'latest_total_amount' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'total_tax' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'individual_increase_rate' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'last_invoice_generated_on' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'next_execution_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'paused_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'resumed_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'deactivated_on' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deactivation_reason' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_invoice_template' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'subscription_invoice_template',
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'billing_payment_option' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'subscription_payment_option',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_subscription_items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'template' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'property' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'pricing_id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'starting_price' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'current_price' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DELETE_BILLING_SUBSCRIPTION_MUTATION,
  DELETE_BILLING_SUBSCRIPTION_MUTATION_VARIABLES
>;
export const CREATE_INVOICE_TEMPLATE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'create_invoice_template' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'invoice_template_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'create_invoice_template' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CREATE_INVOICE_TEMPLATE_MUTATION,
  CREATE_INVOICE_TEMPLATE_MUTATION_VARIABLES
>;
export const UPDATE_INVOICE_TEMPLATE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'update_invoice_template' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'invoice_template_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'invoice_template_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_invoice_template' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'invoice_template_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'invoice_template_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'subscription_invoice_template',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'subscription_invoice_template' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_invoice_template' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'legal_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'company_name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'company_registration_number' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'vat_number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cc_email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'billing_address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'invoice_due_days' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'collection_day_of_month' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'payment_method' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_payment_option' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_payment_option_id' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_INVOICE_TEMPLATE_MUTATION,
  UPDATE_INVOICE_TEMPLATE_MUTATION_VARIABLES
>;
export const DELETE_INVOICE_TEMPLATE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'delete_invoice_template' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'invoice_template_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'delete_invoice_template' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'invoice_template_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'invoice_template_id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'subscription_invoice_template',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'subscription_invoice_template' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_invoice_template' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'legal_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'company_name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'company_registration_number' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'vat_number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cc_email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'billing_address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'invoice_due_days' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'collection_day_of_month' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'payment_method' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_payment_option' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_payment_option_id' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DELETE_INVOICE_TEMPLATE_MUTATION,
  DELETE_INVOICE_TEMPLATE_MUTATION_VARIABLES
>;
export const CREATE_PAYMENT_OPTION_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'create_payment_option' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'billing_payment_option_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'create_payment_option' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CREATE_PAYMENT_OPTION_MUTATION,
  CREATE_PAYMENT_OPTION_MUTATION_VARIABLES
>;
export const UPDATE_PAYMENT_OPTION_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'update_payment_option' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'payment_template_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'billing_payment_option_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_payment_option' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'payment_option_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'payment_template_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'subscription_payment_option' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'subscription_payment_option' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_payment_option' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_first_name' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_last_name' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_phone' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'account_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bank_account_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bank_code' } },
          { kind: 'Field', name: { kind: 'Name', value: 'card_type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decrypted_bank_account_number' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decrypted_card_number' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'expiry_date' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_PAYMENT_OPTION_MUTATION,
  UPDATE_PAYMENT_OPTION_MUTATION_VARIABLES
>;
export const DELETE_PAYMENT_OPTION_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'delete_payment_option' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'payment_template_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'delete_payment_option' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'payment_option_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'payment_template_id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'subscription_payment_option' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'subscription_payment_option' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_payment_option' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_first_name' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_last_name' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_phone' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'account_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bank_account_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bank_code' } },
          { kind: 'Field', name: { kind: 'Name', value: 'card_type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decrypted_bank_account_number' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decrypted_card_number' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'expiry_date' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DELETE_PAYMENT_OPTION_MUTATION,
  DELETE_PAYMENT_OPTION_MUTATION_VARIABLES
>;
export const PAUSE_BILLING_SUBSCRIPTION_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'pause_billing_subscription' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'subscription_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pause_date' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'resume_date' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pause_billing_subscription' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'subscription_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'subscription_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pause_date' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pause_date' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'resume_date' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'resume_date' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  PAUSE_BILLING_SUBSCRIPTION_MUTATION,
  PAUSE_BILLING_SUBSCRIPTION_MUTATION_VARIABLES
>;
export const GROUP_CUSTOMER_INVOICES_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'group_customer_invoices' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'invoice_template_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'group_customer_invoices' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'invoice_template_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'invoice_template_id' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GROUP_CUSTOMER_INVOICES_MUTATION,
  GROUP_CUSTOMER_INVOICES_MUTATION_VARIABLES
>;
export const FETCH_CUSTOMER_ACCOUNT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'fetch_customer_account' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fetch_customer_account' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'customer_account_profile' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_account_contact' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'customer_contact' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'first_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'last_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'landline_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mobile_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'other_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'preferred_contact_method' },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_ZONE' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_zone' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'zone_type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transmitter' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'number' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'is_overactive' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'on_hold_mode' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'enabled' } },
                { kind: 'Field', name: { kind: 'Name', value: 'enabled_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'duration' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_KEYHOLDER' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_keyholder' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'user_app_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mobile_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'landline_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'call_order' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sms_notifications_enabled' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'push_notifications_enabled' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'triggered_panics_allowed' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'password' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_INSTRUCTIONS' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_instructions' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'HOLIDAY' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'validity_start' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'validity_end' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'NOTE' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'AGENT' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'RESPONDER' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'KEY' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_SCHEDULE' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_time_schedule' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'open_start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'open_end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'close_start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'close_end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'day' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_TRANSMITTER' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'transmitter' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heartbeat_interval' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'area' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decoder' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'set_name' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'scheduled_status_changes' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'scheduled_status_changes' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'change_status_at' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_reason' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_reason_id' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'reactivation_date' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_profile_property' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'customer_property' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'code' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'images' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video_feeds' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'geospatial' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'coordinates' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'longitude' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'latitude' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'entire_address' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'street' } },
                { kind: 'Field', name: { kind: 'Name', value: 'zip_code' } },
                { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                { kind: 'Field', name: { kind: 'Name', value: 'country' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'area' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'zones' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PROPERTY_PROFILE_ZONE' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'keyholders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PROPERTY_PROFILE_KEYHOLDER' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'instructions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'PROPERTY_PROFILE_INSTRUCTIONS',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'schedules' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PROPERTY_PROFILE_SCHEDULE' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'equipment' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'transmitters' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'PROPERTY_PROFILE_TRANSMITTER',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'scheduled_status_changes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'scheduled_status_changes' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'password' } },
          { kind: 'Field', name: { kind: 'Name', value: 'duress_password' } },
          { kind: 'Field', name: { kind: 'Name', value: 'notes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'testing_enabled' } },
          { kind: 'Field', name: { kind: 'Name', value: 'testing_time' } },
          { kind: 'Field', name: { kind: 'Name', value: 'suspend_reason' } },
          { kind: 'Field', name: { kind: 'Name', value: 'suspended_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'suspended_by' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status_changed_at' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_by_agent_id' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_reason' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_reason_id' },
          },
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_billing_subscription_condensed' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_subscription' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'derived_status_as_of' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'frequency' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'effective_start_date' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'effective_end_date' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'initial_total_amount' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'latest_total_amount' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'individual_increase_rate' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'last_invoice_generated_on' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'next_execution_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'paused_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'resumed_on' } },
          { kind: 'Field', name: { kind: 'Name', value: 'deactivated_on' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deactivation_reason' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_invoice_template_id' },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'subscription_payment_option' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_payment_option' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_first_name' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_last_name' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_owner_phone' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'account_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bank_account_type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bank_code' } },
          { kind: 'Field', name: { kind: 'Name', value: 'card_type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decrypted_bank_account_number' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decrypted_card_number' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'expiry_date' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'subscription_invoice_template' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'billing_invoice_template' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'legal_name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'company_name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'company_registration_number' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'vat_number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'cc_email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'billing_address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'invoice_due_days' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'collection_day_of_month' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'payment_method' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_payment_option' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_payment_option_id' },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CUSTOMER_BILLING_PROFILE' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'customer_billing_profile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_subscriptions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'customer_billing_subscription_condensed',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'payment_options' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'subscription_payment_option' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'invoice_templates' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'subscription_invoice_template',
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'invoice_clubbing' } },
          { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
          { kind: 'Field', name: { kind: 'Name', value: 'billing_address' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_manager_id' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing_department' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_account_profile' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'customer' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'seon_account_code' } },
          { kind: 'Field', name: { kind: 'Name', value: 'account_code' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account_description' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'document_id_number' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contact' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'customer_account_contact' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'system_status' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_on' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'suspend_date' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'suspend_reason' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'has_overactive_alarms' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'properties' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'customer_profile_property' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'billing' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CUSTOMER_BILLING_PROFILE' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'scheduled_status_changes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'scheduled_status_changes' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_CUSTOMER_ACCOUNT_QUERY,
  FETCH_CUSTOMER_ACCOUNT_QUERY_VARIABLES
>;
export const CREATE_CUSTOMER_ACCOUNT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'create_customer_account' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'contact_details' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'customer_contact_params' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'account_code' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'account_description' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'account_currency' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'currency_codes' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'account_manager_id' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'invoice_clubbing' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'invoice_clubbing' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'billing_department_id' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'document_id_number' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'create_customer_account' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'account_code' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'account_code' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'account_description' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'account_description' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'account_currency' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'account_currency' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'account_manager_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'account_manager_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'invoice_clubbing' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'invoice_clubbing' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'contact_details' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'contact_details' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'billing_department_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'billing_department_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'document_id_number' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'document_id_number' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'customer_id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CREATE_CUSTOMER_ACCOUNT_MUTATION,
  CREATE_CUSTOMER_ACCOUNT_MUTATION_VARIABLES
>;
export const UPDATE_CUSTOMER_ACCOUNT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'update_customer_account' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'contact_details' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'customer_contact_params' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'account_code' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'account_description' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'account_currency' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'currency_codes' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'account_manager_id' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'invoice_clubbing' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'invoice_clubbing' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'billing_department_id' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'document_id_number' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_customer_account' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'account_code' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'account_code' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'account_description' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'account_description' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'account_currency' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'account_currency' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'account_manager_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'account_manager_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'invoice_clubbing' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'invoice_clubbing' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'contact_details' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'contact_details' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'billing_department_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'billing_department_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'document_id_number' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'document_id_number' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_CUSTOMER_ACCOUNT_MUTATION,
  UPDATE_CUSTOMER_ACCOUNT_MUTATION_VARIABLES
>;
export const UPDATE_CUSTOMER_STATUS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'update_customer_status' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'update_customer_status_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_customer_status' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_CUSTOMER_STATUS_MUTATION,
  UPDATE_CUSTOMER_STATUS_MUTATION_VARIABLES
>;
export const DELETE_CUSTOMER_ACCOUNT_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'delete_customer_account' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'delete_customer_account' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DELETE_CUSTOMER_ACCOUNT_MUTATION,
  DELETE_CUSTOMER_ACCOUNT_MUTATION_VARIABLES
>;
export const FETCH_CUSTOMERS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'fetch_customers' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'search_params' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'customers_search_params' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pagination' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'pagination_input' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fetch_customers' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'search_params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'search_params' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pagination' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'customers' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'seon_account_code' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'account_code' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'account_description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'account_status' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'customer_name' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'customer_email' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'first_name' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'last_name' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'joined' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'properties' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'address' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'property_name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'property_code' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pagination' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'items' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'page' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FETCH_CUSTOMERS_QUERY,
  FETCH_CUSTOMERS_QUERY_VARIABLES
>;
export const CREATE_CUSTOMER_PROPERTY_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'create_customer_property' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_first_name' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_last_name' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'update_property_details_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'create_customer_property' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_first_name' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_first_name' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_last_name' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_last_name' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'property' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CREATE_CUSTOMER_PROPERTY_MUTATION,
  CREATE_CUSTOMER_PROPERTY_MUTATION_VARIABLES
>;
export const UPDATE_PROPERTY_DETAILS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'update_property_details' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_first_name' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_last_name' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'property_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'update_property_details_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_property_details' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_first_name' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_first_name' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_last_name' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_last_name' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'property_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'property_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_PROPERTY_DETAILS_MUTATION,
  UPDATE_PROPERTY_DETAILS_MUTATION_VARIABLES
>;
export const MUTATION_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Mutation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'property_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'keyholder_ids_priority' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'Int' },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'update_property_keyholder_call_order',
            },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'property_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'property_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'keyholder_ids_priority' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'keyholder_ids_priority' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MUTATION_MUTATION, MUTATION_MUTATION_VARIABLES>;
export const CREATE_PROPERTY_KEYHOLDER_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'create_property_keyholder' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'property_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'register_app' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'property_keyholder_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'create_property_keyholder' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'property_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'property_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'register_app' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'register_app' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'keyholder' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CREATE_PROPERTY_KEYHOLDER_MUTATION,
  CREATE_PROPERTY_KEYHOLDER_MUTATION_VARIABLES
>;
export const UPDATE_PROPERTY_KEYHOLDER_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'update_property_keyholder' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'property_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'keyholder_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'register_app' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'property_keyholder_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_property_keyholder' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'property_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'property_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'keyholder_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'keyholder_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'register_app' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'register_app' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'keyholder' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_PROPERTY_KEYHOLDER_MUTATION,
  UPDATE_PROPERTY_KEYHOLDER_MUTATION_VARIABLES
>;
export const DELETE_PROPERTY_KEYHOLDER_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'delete_property_keyholder' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'property_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'keyholder_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'delete_property_keyholder' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'property_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'property_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'keyholder_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'keyholder_id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DELETE_PROPERTY_KEYHOLDER_MUTATION,
  DELETE_PROPERTY_KEYHOLDER_MUTATION_VARIABLES
>;
export const CUSTOMER_PROPERTY_ROUTE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'customer_property_route' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'property_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customer_property' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'property_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'property_id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'property' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'customer_profile_property',
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_ZONE' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_zone' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'zone_type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transmitter' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'number' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'is_overactive' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'on_hold_mode' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'enabled' } },
                { kind: 'Field', name: { kind: 'Name', value: 'enabled_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'duration' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_KEYHOLDER' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_keyholder' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'user_app_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mobile_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'landline_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'call_order' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sms_notifications_enabled' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'push_notifications_enabled' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'triggered_panics_allowed' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'password' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_INSTRUCTIONS' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_instructions' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'HOLIDAY' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'validity_start' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'validity_end' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'NOTE' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'AGENT' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'RESPONDER' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'KEY' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_SCHEDULE' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_time_schedule' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'open_start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'open_end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'close_start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'close_end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'day' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_TRANSMITTER' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'transmitter' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heartbeat_interval' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'area' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decoder' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'set_name' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'scheduled_status_changes' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'scheduled_status_changes' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'change_status_at' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_reason' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_reason_id' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'reactivation_date' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_profile_property' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'customer_property' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'code' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'images' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video_feeds' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'geospatial' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'coordinates' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'longitude' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'latitude' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'entire_address' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'street' } },
                { kind: 'Field', name: { kind: 'Name', value: 'zip_code' } },
                { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                { kind: 'Field', name: { kind: 'Name', value: 'country' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'area' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'zones' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PROPERTY_PROFILE_ZONE' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'keyholders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PROPERTY_PROFILE_KEYHOLDER' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'instructions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'PROPERTY_PROFILE_INSTRUCTIONS',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'schedules' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PROPERTY_PROFILE_SCHEDULE' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'equipment' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'transmitters' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'PROPERTY_PROFILE_TRANSMITTER',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'scheduled_status_changes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'scheduled_status_changes' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'password' } },
          { kind: 'Field', name: { kind: 'Name', value: 'duress_password' } },
          { kind: 'Field', name: { kind: 'Name', value: 'notes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'testing_enabled' } },
          { kind: 'Field', name: { kind: 'Name', value: 'testing_time' } },
          { kind: 'Field', name: { kind: 'Name', value: 'suspend_reason' } },
          { kind: 'Field', name: { kind: 'Name', value: 'suspended_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'suspended_by' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status_changed_at' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_by_agent_id' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_reason' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_reason_id' },
          },
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CUSTOMER_PROPERTY_ROUTE_QUERY,
  CUSTOMER_PROPERTY_ROUTE_QUERY_VARIABLES
>;
export const ENABLE_PROPERTY_TESTING_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'enable_property_testing' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'property_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'keyholder_id' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'technician_id' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'testing_time' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'enable_property_testing' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'property_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'property_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'keyholder_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'keyholder_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'technician_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'technician_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'testing_time' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'testing_time' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ENABLE_PROPERTY_TESTING_MUTATION,
  ENABLE_PROPERTY_TESTING_MUTATION_VARIABLES
>;
export const DISABLE_PROPERTY_TESTING_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'disable_property_testing' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'property_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'disable_property_testing' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'property_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'property_id' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DISABLE_PROPERTY_TESTING_MUTATION,
  DISABLE_PROPERTY_TESTING_MUTATION_VARIABLES
>;
export const UPDATE_PROPERTY_SCHEDULE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UPDATE_PROPERTY_SCHEDULE' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'property_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'schedules' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'property_time_schedule_params',
                  },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_property_schedule' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'property_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'property_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'schedules' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'schedules' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_PROPERTY_SCHEDULE_MUTATION,
  UPDATE_PROPERTY_SCHEDULE_MUTATION_VARIABLES
>;
export const CREATE_PROPERTY_ZONE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CREATE_PROPERTY_ZONE' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'property_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'property_zone_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'create_property_zone' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'property_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'property_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CREATE_PROPERTY_ZONE_MUTATION,
  CREATE_PROPERTY_ZONE_MUTATION_VARIABLES
>;
export const UPDATE_PROPERTY_ZONE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UPDATE_PROPERTY_ZONE' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customer_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'property_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'zone_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'property_zone_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_property_zone' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'customer_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'customer_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'property_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'property_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'zone_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'zone_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_PROPERTY_ZONE_MUTATION,
  UPDATE_PROPERTY_ZONE_MUTATION_VARIABLES
>;
export const DELETE_PROPERTY_ZONE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DELETE_PROPERTY_ZONE' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'zone_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'property_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'delete_property_zone' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'zone_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'zone_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'property_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'property_id' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DELETE_PROPERTY_ZONE_MUTATION,
  DELETE_PROPERTY_ZONE_MUTATION_VARIABLES
>;
export const SET_ZONE_ON_HOLD_MODE_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SET_ZONE_ON_HOLD_MODE' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'property_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'zone_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'on_hold_time' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'set_zone_on_hold_mode' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'property_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'property_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'zone_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'zone_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'on_hold_time' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'on_hold_time' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SET_ZONE_ON_HOLD_MODE_MUTATION,
  SET_ZONE_ON_HOLD_MODE_MUTATION_VARIABLES
>;
export const UPDATE_PROPERTY_STATUS_DOCUMENT = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UPDATE_PROPERTY_STATUS' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'property_id' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'params' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'update_property_status_params' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'update_property_status' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'property_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'property_id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'params' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'params' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'property' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'customer_profile_property',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_ZONE' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_zone' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'zone_type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transmitter' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'number' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'is_overactive' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'on_hold_mode' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'enabled' } },
                { kind: 'Field', name: { kind: 'Name', value: 'enabled_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'duration' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_KEYHOLDER' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_keyholder' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'user_app_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'mobile_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'landline_phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'call_order' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sms_notifications_enabled' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'push_notifications_enabled' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'triggered_panics_allowed' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'password' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_INSTRUCTIONS' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_instructions' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'HOLIDAY' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'validity_start' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'validity_end' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'NOTE' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'AGENT' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'RESPONDER' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'KEY' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'note' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_SCHEDULE' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'property_time_schedule' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'open_start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'open_end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'close_start' } },
          { kind: 'Field', name: { kind: 'Name', value: 'close_end' } },
          { kind: 'Field', name: { kind: 'Name', value: 'day' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PROPERTY_PROFILE_TRANSMITTER' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'transmitter' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heartbeat_interval' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'area' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'decoder' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'set_name' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'scheduled_status_changes' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'scheduled_status_changes' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'change_status_at' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_reason' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_reason_id' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'reactivation_date' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'customer_profile_property' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'customer_property' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'code' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'images' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video_feeds' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'geospatial' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'coordinates' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'longitude' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'latitude' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'entire_address' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'street' } },
                { kind: 'Field', name: { kind: 'Name', value: 'zip_code' } },
                { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                { kind: 'Field', name: { kind: 'Name', value: 'country' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'area' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'zones' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PROPERTY_PROFILE_ZONE' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'keyholders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PROPERTY_PROFILE_KEYHOLDER' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'instructions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'PROPERTY_PROFILE_INSTRUCTIONS',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'schedules' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PROPERTY_PROFILE_SCHEDULE' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'equipment' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'transmitters' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'PROPERTY_PROFILE_TRANSMITTER',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'scheduled_status_changes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'scheduled_status_changes' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'password' } },
          { kind: 'Field', name: { kind: 'Name', value: 'duress_password' } },
          { kind: 'Field', name: { kind: 'Name', value: 'notes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'testing_enabled' } },
          { kind: 'Field', name: { kind: 'Name', value: 'testing_time' } },
          { kind: 'Field', name: { kind: 'Name', value: 'suspend_reason' } },
          { kind: 'Field', name: { kind: 'Name', value: 'suspended_at' } },
          { kind: 'Field', name: { kind: 'Name', value: 'suspended_by' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status_changed_at' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_by_agent_id' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_reason' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'status_changed_reason_id' },
          },
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UPDATE_PROPERTY_STATUS_MUTATION,
  UPDATE_PROPERTY_STATUS_MUTATION_VARIABLES
>;
