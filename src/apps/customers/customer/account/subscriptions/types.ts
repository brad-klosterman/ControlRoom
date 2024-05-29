import { UseFormReturn } from 'react-hook-form';

import {
  SUBSCRIPTION_PAYMENT_OPTION_FRAGMENT,
  SUBSCRIPTION_INVOICE_TEMPLATE_FRAGMENT,
  BILLING_RECURRENCE,
  BILLING_ITEM_TYPE,
} from 'codegen/graphql';
import { IOptionNumber } from 'components/ui/Form/Options';

export type UseSubscriptionForm = {
  dispatch: Dispatch;
  subscription_form: UseFormReturn<SubscriptionForm>;
  billing_items_form: UseFormReturn<BillingItemsForm>;
  invoice_template_form: UseFormReturn<InvoiceTemplateForm>;
  invoice_template_options: TemplateOption[] | null;
  payment_template_form: UseFormReturn<PaymentTemplateForm>;
  payment_template_options: TemplateOption[] | null;
  cost: {
    vat: number;
    total: number;
  };
  loading: boolean;
};

export type Actions = {
  CREATE_SUBSCRIPTION(): Promise<boolean | void>;
  UPDATE_SUBSCRIPTION(params: {
    subscription_id: number;
  }): Promise<boolean | void>;
  PAUSE_SUBSCRIPTION(params: {
    customer_id: number;
    subscription_id: number;
    pause_date: string;
    resume_date: string;
  }): Promise<boolean | void>;
  DELETE_SUBSCRIPTION(params: {
    customer_id: number;
    subscription_id: number;
    end_date: string | null | undefined;
  }): Promise<boolean | void>;
  UPDATE_PAYMENT_TEMPLATE(): Promise<void>;
  DELETE_PAYMENT_TEMPLATE(): Promise<void>;
  UPDATE_INVOICE_TEMPLATE(): Promise<void>;
  DELETE_INVOICE_TEMPLATE(): Promise<void>;
  ADD_BILLING_ITEM(params: { billing_item: BillingItem }): Promise<void>;
  RESET_FORM_VALUES(params: ResetFormParams): Promise<boolean>;
  CANCEL_EDITING_SUBSCRIPTION(): Promise<void>;
  GENERATE_SUBSCRIPTION_NAME(): Promise<void>;
};

export type TemplateOption =
  | IOptionNumber
  | { label: string; value: 'new_template' };

export type TemplatesUsage = {
  invoice_templates: Record<
    number,
    { subscription_id: number; subscription_name: string }[]
  >;
  payment_templates: Record<
    number,
    { subscription_id: number; subscription_name: string }[]
  >;
};

export type ResetFormParams =
  | {
      form: 'INVOICE' | 'PAYMENT';
      type: 'NEW_AUTO_SUGGESTED';
    }
  | {
      form: 'INVOICE' | 'PAYMENT';
      type: 'SELECTED_ID';
      id: number | null | undefined;
    }
  | {
      form: 'INVOICE' | 'PAYMENT';
      type: 'CLEAR';
      new_template: boolean | undefined;
    }
  | {
      form: 'INVOICE' | 'PAYMENT';
      type: 'INITIAL';
    };

export type SubscriptionForm = {
  title: string;
  property_id: number;
  frequency: BILLING_RECURRENCE;
  effective_start_date: string | null | undefined;
  effective_end_date: string | null | undefined;
  individual_increase_rate: string | null | undefined;
};

export type BillingItemsForm = {
  billing_items: BillingItem[];
};

export type BillingItem = {
  template_id: number;
  price_id: number;
  template_name: string;
  template_description: string;
  description_override?: string;
  type: BILLING_ITEM_TYPE;
  current_price: string;
  tax_percentage: string;
  quantity: number;
};

export type InvoiceTemplateForm = Omit<
  SUBSCRIPTION_INVOICE_TEMPLATE_FRAGMENT,
  'id'
> & {
  id: number | undefined;
  new_template: boolean | undefined;
};

export type PaymentTemplateForm = Omit<
  SUBSCRIPTION_PAYMENT_OPTION_FRAGMENT,
  'id'
> & {
  id: number | undefined;
  new_template: boolean | undefined;
};

type Dispatch = <
  A extends keyof Actions,
  TParams extends Actions[A] extends (p: infer P) => any ? P : undefined,
>(
  action: A,
  params: TParams,
) => Promise<boolean>;
