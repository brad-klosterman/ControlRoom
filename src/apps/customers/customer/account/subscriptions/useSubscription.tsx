import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useFieldArray, useForm } from 'react-hook-form';
import { getFragment } from 'codegen';
import {
  BILLING_RECURRENCE,
  //CUSTOMER_ACCOUNT_CONTACT_FRAGMENT_DOC,
  CUSTOMER_BILLING_SUBSCRIPTION_EXPANDED_FRAGMENT,
  PAUSE_BILLING_SUBSCRIPTION_DOCUMENT,
  SUBSCRIPTION_INVOICE_TEMPLATE_FRAGMENT,
  SUBSCRIPTION_PAYMENT_OPTION_FRAGMENT,
} from 'codegen/graphql';
import { stripTypename } from 'src/apollo/utils/strip-typename';
import { taxCalculator } from 'utils/currency/tax.calculator';
import { useSSPSettingsContext } from '@admin/company_settings/settings/provider';
import {
  CREATE_BILLING_SUBSCRIPTION,
  CREATE_INVOICE_TEMPLATE,
  CREATE_PAYMENT_TEMPLATE,
  // DELETE_BILLING_SUBSCRIPTION,
  // DELETE_INVOICE_TEMPLATE,
  // DELETE_PAYMENT_TEMPLATE,
  PROPERTY_PROFILE_ROUTE,
  SUBSCRIPTION_INVOICE_TEMPLATE,
  SUBSCRIPTION_PAYMENT_OPTION,
  UPDATE_BILLING_SUBSCRIPTION,
  UPDATE_INVOICE_TEMPLATE,
  UPDATE_PAYMENT_TEMPLATE,
} from '@customers/API';
import Customer from '@customers/customer';
import { useExistingInvoiceTemplates } from './forms/useExistingInvoiceTemplates';
import { useExistingPaymentTemplates } from './forms/useExistingPaymentTemplates';

import {
  Actions,
  BillingItemsForm,
  InvoiceTemplateForm,
  PaymentTemplateForm,
  ResetFormParams,
  SubscriptionForm,
  UseSubscriptionForm,
} from './types';
import { mapPaymentMethodToAccountType } from './mappers';

const useSubscription = ({
  current_subscription,
  invoice_templates,
  payment_templates,
}: {
  payment_templates: readonly SUBSCRIPTION_PAYMENT_OPTION_FRAGMENT[];
  invoice_templates: readonly SUBSCRIPTION_INVOICE_TEMPLATE_FRAGMENT[];
  current_subscription:
    | CUSTOMER_BILLING_SUBSCRIPTION_EXPANDED_FRAGMENT
    | null
    | undefined;
}): UseSubscriptionForm => {
  /** Context Providers */
  const SSPSettingsContext = useSSPSettingsContext();
  const CustomerContext = Customer.useContext();

  const { customer } = CustomerContext;
  const customer_id = customer?.id;
  const contact = customer?.contact;
  const clubbed_invoices = Boolean(
    customer?.billing?.invoice_clubbing === 'all_clubbed',
  );
  const properties =
    getFragment(PROPERTY_PROFILE_ROUTE, customer?.properties) || [];

  /**
   * SUBSCRIPTION FORM
   *
   */
  const initial_subscription_form = current_subscription
    ? {
        title: current_subscription.title,
        // property_id: null,
        frequency: current_subscription.frequency,
        effective_start_date: current_subscription.effective_start_date,
        effective_end_date: current_subscription.effective_end_date,
        individual_increase_rate: current_subscription.individual_increase_rate,
      }
    : {
        effective_start_date: '',
        frequency: 'monthly' as BILLING_RECURRENCE,
      };
  const subscription_form = useForm<SubscriptionForm>({
    defaultValues: initial_subscription_form,
  });
  const subscription_property_id = subscription_form.watch('property_id');

  /**
   * BILLING ITEMS FORM
   *
   */
  const billing_items_form = useForm<BillingItemsForm>();
  const billing_items_array = useFieldArray({
    control: billing_items_form.control,
    name: 'billing_items',
  });
  const billing_items = billing_items_form.watch('billing_items');

  const cost = billing_items
    ? billing_items.reduce(
        (acc, item) => {
          const item_excl_vat = Number(item.current_price) * item.quantity;

          const item_tax = taxCalculator(item_excl_vat, item.tax_percentage);

          const item_total = item_tax + item_excl_vat;

          return {
            vat: acc.vat + item_tax,
            total: acc.total + item_total,
          };
        },
        { vat: 0, total: 0 },
      )
    : { vat: 0, total: 0 };

  /**
   * INVOICE TEMPLATE FORM
   *
   */
  const getInitialInvoiceForm = () => {
    const initial_invoice_template = getFragment(
      SUBSCRIPTION_INVOICE_TEMPLATE,
      current_subscription?.billing_invoice_template,
    );

    if (initial_invoice_template) {
      return {
        ...initial_invoice_template,
        new_template: false,
      };
    } else {
      return {
        new_template: undefined,
      };
    }
  };

  const invoice_template_form = useForm<InvoiceTemplateForm>({
    mode: 'onChange',
    defaultValues: getInitialInvoiceForm(),
  });

  const invoice_template_options = useExistingInvoiceTemplates({
    invoice_templates,
  });

  /**
   * PAYMENT TEMPLATE FORM
   *
   */
  const getInitialPaymentForm = () => {
    const initial_payment_template = getFragment(
      SUBSCRIPTION_PAYMENT_OPTION,
      current_subscription?.billing_invoice_template?.billing_payment_option,
    );

    const payment_method_type =
      invoice_template_form.getValues('payment_method');

    const account_type = mapPaymentMethodToAccountType(payment_method_type);

    if (initial_payment_template) {
      return {
        ...initial_payment_template,
        account_type,
        new_template: false,
      };
    } else {
      return {
        account_type,
        new_template: undefined,
      };
    }
  };

  const payment_template_form = useForm<PaymentTemplateForm>({
    mode: 'onChange',
    defaultValues: getInitialPaymentForm(),
  });

  const payment_template_options = useExistingPaymentTemplates({
    payment_method: invoice_template_form.watch('payment_method'),
    payment_templates,
  });

  /**
   * SET FORM FIELDS
   *
   */
  const setSubscriptionFields = () => {
    if (current_subscription) {
      subscription_form.reset(initial_subscription_form);
    }
  };

  const setPaymentFields = async (params: ResetFormParams) => {
    const payment_method = invoice_template_form.getValues('payment_method');

    const account_type = mapPaymentMethodToAccountType(payment_method);

    const selected_property = properties.find(
      property => property.id === subscription_property_id,
    );

    switch (params.type) {
      case 'INITIAL': {
        payment_template_form.reset(
          {
            ...getInitialPaymentForm(),
          },
          {
            keepErrors: false,
            keepIsValid: true,
            keepDirty: false,
          },
        );

        return true;
      }
      case 'SELECTED_ID': {
        const matched_template = payment_templates.find(
          template => template.id === params.id,
        );

        payment_template_form.reset(
          { ...matched_template, new_template: false },
          {
            keepErrors: false,
            keepIsValid: true,
            keepDirty: Boolean(current_subscription),
          },
        );

        return true;
      }
      case 'NEW_AUTO_SUGGESTED': {
        payment_template_form.reset(
          {
            id: undefined,
            new_template: true,
            description: `${
              selected_property?.name
            } --- ${account_type?.toUpperCase()} PAYMENT TEMPLATE`,
            account_type: account_type,
            bank_account_type: account_type === 'bank' ? 'checking' : null,
            card_type: account_type === 'card' ? 'visa' : null,
            decrypted_bank_account_number: '',
            decrypted_card_number: '',
            bank_code: '',
            account_owner_first_name: contact?.first_name || '',
            account_owner_last_name: contact?.last_name || '',
            account_owner_phone: contact?.mobile_phone || '',
          },
          {
            keepErrors: false,
            keepIsValid: false,
          },
        );

        return true;
      }
      case 'CLEAR': {
        payment_template_form.reset(
          {
            id: undefined,
            new_template: params.new_template,
            description: '',
            account_type: account_type,
            bank_account_type: account_type === 'bank' ? 'checking' : null,
            card_type: account_type === 'card' ? 'visa' : null,
            decrypted_bank_account_number: '',
            decrypted_card_number: '',
            bank_code: '',
            account_owner_first_name: '',
            account_owner_last_name: '',
            account_owner_phone: '',
          },
          {
            keepErrors: false,
            keepIsValid: false,
            keepDirty: Boolean(current_subscription),
          },
        );

        return true;
      }
      default:
        return false;
    }
  };

  const setInvoiceFields = async (params: ResetFormParams) => {
    const selected_property = properties.find(
      property => property.id === subscription_property_id,
    );

    switch (params.type) {
      case 'INITIAL': {
        invoice_template_form.reset(
          {
            ...getInitialInvoiceForm(),
          },
          {
            keepErrors: false,
            keepDirty: false,
          },
        );

        return true;
      }
      case 'SELECTED_ID': {
        const matched_template = invoice_templates.find(
          template => template.id === params.id,
        );

        if (matched_template) {
          invoice_template_form.reset(
            { ...matched_template, new_template: false },
            {
              keepErrors: false,
              keepIsValid: true,
            },
          );

          await setPaymentFields({
            form: 'PAYMENT',
            type: 'SELECTED_ID',
            id: matched_template.billing_payment_option_id,
          });
        }

        return true;
      }
      case 'NEW_AUTO_SUGGESTED': {
        invoice_template_form.reset({
          id: undefined,
          new_template: true,
          description: `${selected_property?.name} --- INVOICING`,
          payment_method: 'bank_standard',
          collection_day_of_month: SSPSettingsContext.collection_days_options
            .length
            ? SSPSettingsContext.collection_days_options[0].value
            : undefined,
          invoice_due_days:
            SSPSettingsContext.ssp_settings?.invoice_due_days ?? undefined,
          legal_name: `${contact?.first_name || ''} ${
            contact?.last_name || ''
          }`,
          company_name: '',
          company_registration_number: '',
          billing_address: selected_property?.geospatial?.entire_address || '',
          email: contact?.email || '',
          cc_email: '',
        });

        await setPaymentFields({
          form: 'PAYMENT',
          type: 'NEW_AUTO_SUGGESTED',
        });

        return true;
      }
      case 'CLEAR': {
        invoice_template_form.reset({
          id: undefined,
          new_template: params.new_template,
          description: '',
          payment_method: 'bank_standard',
          collection_day_of_month: null,
          invoice_due_days: null,
          legal_name: '',
          company_name: '',
          company_registration_number: '',
          billing_address: '',
          email: '',
          cc_email: '',
        });

        await setPaymentFields({
          form: 'PAYMENT',
          type: 'NEW_AUTO_SUGGESTED',
        });

        return true;
      }
      default:
        return false;
    }
  };

  const initializeAllFields = async () => {
    if (current_subscription) {
      setSubscriptionFields();

      await setInvoiceFields({
        form: 'INVOICE',
        type: 'INITIAL',
      });

      await setPaymentFields({
        form: 'PAYMENT',
        type: 'INITIAL',
      });
    } else {
      if (clubbed_invoices && invoice_templates.length) {
        await setInvoiceFields({
          type: 'SELECTED_ID',
          id: invoice_templates[0].id,
          form: 'INVOICE',
        });
      }
    }
  };

  useEffect(() => {
    initializeAllFields();
  }, [current_subscription]);

  /**
   * SUBSCRIPTION API
   *
   */
  const [create_subscription, { loading }] = useMutation(
    CREATE_BILLING_SUBSCRIPTION,
  );
  const [update_subscription, { loading: update_subscription_loading }] =
    useMutation(UPDATE_BILLING_SUBSCRIPTION);
  const [pause_subscription, { loading: pause_subscription_loading }] =
    useMutation(PAUSE_BILLING_SUBSCRIPTION_DOCUMENT);
  // const [delete_subscription, { loading: delete_subscription_loading }] =
  //   useMutation(DELETE_BILLING_SUBSCRIPTION);
  const [create_payment_template] = useMutation(CREATE_PAYMENT_TEMPLATE);
  const [update_payment_template] = useMutation(UPDATE_PAYMENT_TEMPLATE);
  //const [delete_payment_template] = useMutation(DELETE_PAYMENT_TEMPLATE);
  const [create_invoice_template] = useMutation(CREATE_INVOICE_TEMPLATE);
  const [update_invoice_template] = useMutation(UPDATE_INVOICE_TEMPLATE);
  //const [delete_invoice_template] = useMutation(DELETE_INVOICE_TEMPLATE);

  /**
   * DISPATCH ACTIONS
   *
   */
  const subscription_template_dirty = subscription_form.formState.isDirty;
  const payment_template_dirty = payment_template_form.formState.isDirty;
  const invoice_template_dirty = invoice_template_form.formState.isDirty;

  const actions: Actions = {
    CREATE_SUBSCRIPTION: async () => {
      if (!customer_id) return;
      const {
        effective_end_date,
        effective_start_date,
        frequency,
        individual_increase_rate,
        title,
      } = subscription_form.getValues();

      const {
        decrypted_bank_account_number: bank_account_number,
        decrypted_card_number: card_number,
        id: payment_template_id,
        new_template: is_new_payment_template,
        ...payment_template_form_values
      } = payment_template_form.getValues();

      const {
        billing_payment_option,
        collection_day_of_month,
        id: invoice_template_id,
        new_template: is_new_invoice_template,
        payment_method,
        ...invoice_template_form_values
      } = invoice_template_form.getValues();

      let current_payment_template_id = payment_template_id;
      let current_invoice_template_id = invoice_template_id;

      try {
        if (is_new_payment_template && payment_method !== 'cash') {
          const { data } = await create_payment_template({
            variables: {
              customer_id,
              params: {
                ...payment_template_form_values,
                card_number,
                bank_account_number,
              },
            },
          });
          current_payment_template_id = data?.create_payment_option?.id;
        }

        if (is_new_invoice_template && payment_method) {
          const { data } = await create_invoice_template({
            variables: {
              customer_id,
              params: {
                ...invoice_template_form_values,
                payment_method,
                collection_day_of_month,
                billing_payment_option_id: current_payment_template_id,
              },
            },
          });
          current_invoice_template_id = data?.create_invoice_template?.id;
        }

        await create_subscription({
          variables: {
            customer_id,
            params: {
              title,
              status: 'active',
              billing_invoice_template_id: current_invoice_template_id,
              effective_end_date,
              effective_start_date,
              frequency,
              individual_increase_rate,
              billing_items: billing_items.map(
                ({ description_override, price_id, quantity }) => ({
                  billing_product_pricing_id: price_id,
                  billing_property_id: subscription_property_id,
                  quantity: Number(quantity),
                  description: description_override,
                }),
              ),
            },
          },
        });

        return true;
      } catch (error: any) {
        console.error(error);
        return;
      }
    },
    UPDATE_SUBSCRIPTION: async params => {
      if (!customer_id) return;
      const {
        effective_end_date,
        effective_start_date,
        individual_increase_rate,
        title,
      } = subscription_form.getValues();

      const {
        decrypted_bank_account_number: bank_account_number,
        decrypted_card_number: card_number,
        id: payment_template_id,
        new_template: is_new_payment_template,
        ...payment_template_form_values
      } = payment_template_form.getValues();

      const initial_payment_template = getInitialPaymentForm();

      const {
        billing_payment_option,
        id: invoice_template_id,
        new_template: is_new_invoice_template,
        payment_method,
        ...invoice_template_form_values
      } = invoice_template_form.getValues();

      const initial_invoice_template = getInitialInvoiceForm();

      let current_payment_template_id = payment_template_id;
      let current_invoice_template_id = invoice_template_id;

      let payment_template_id_changed = false;
      let invoice_template_id_changed = false;

      try {
        if (is_new_payment_template && payment_method !== 'cash') {
          // CREATED NEW PAYMENT TEMPLATE
          const { data } = await create_payment_template({
            variables: {
              customer_id,
              params: {
                ...payment_template_form_values,
                card_number,
                bank_account_number,
              },
            },
          });
          current_payment_template_id = data?.create_payment_option?.id;
          payment_template_id_changed = true;
        } else if (
          current_payment_template_id &&
          'id' in initial_payment_template &&
          current_payment_template_id !== initial_payment_template.id
        ) {
          // SELECTED NEW PAYMENT TEMPLATE
          payment_template_id_changed = true;
        } else if (payment_template_dirty && current_payment_template_id) {
          // CHANGED EXISTING PAYMENT TEMPLATE
          await update_payment_template({
            variables: {
              customer_id,
              payment_template_id: current_payment_template_id,
              params: {
                ...stripTypename(payment_template_form_values),
                card_number,
                bank_account_number,
              },
            },
          });
        }

        if (is_new_invoice_template) {
          // CREATED NEW INVOICE TEMPLATE
          if (payment_method) {
            const { data } = await create_invoice_template({
              variables: {
                customer_id,
                params: {
                  ...invoice_template_form_values,
                  payment_method,
                  billing_payment_option_id: current_payment_template_id,
                },
              },
            });
            current_invoice_template_id = data?.create_invoice_template?.id;
            invoice_template_id_changed = true;
          }
        } else if (
          current_invoice_template_id &&
          'id' in initial_invoice_template &&
          current_invoice_template_id !== initial_invoice_template.id
        ) {
          // SELECTED NEW INVOICE TEMPLATE
          invoice_template_id_changed = true;
        } else if (
          current_invoice_template_id &&
          (payment_template_id_changed || invoice_template_dirty)
        ) {
          // CHANGED EXISTING INVOICE TEMPLATE
          await update_invoice_template({
            variables: {
              invoice_template_id: current_invoice_template_id,
              customer_id,
              params: stripTypename({
                ...invoice_template_form_values,
                payment_method,
                billing_payment_option_id: current_payment_template_id,
              }),
            },
          });
        }

        if (invoice_template_id_changed || subscription_template_dirty) {
          await update_subscription({
            variables: {
              subscription_id: params.subscription_id,
              customer_id,
              params: {
                title,
                billing_invoice_template_id: current_invoice_template_id,
                effective_end_date,
                effective_start_date,
                individual_increase_rate,
              },
            },
          });
        }

        return true;
      } catch (error: any) {
        console.error(error);
        return;
      }
    },
    PAUSE_SUBSCRIPTION: async params => {
      try {
        await pause_subscription({
          variables: {
            subscription_id: params.subscription_id,
            customer_id: params.customer_id,
            pause_date: params.pause_date,
            resume_date: params.resume_date,
          },
        });

        return true;
      } catch (error: any) {
        console.error('ERROR PAUSING SUBSCRIPTION', error);
        return false;
      }
    },
    DELETE_SUBSCRIPTION: async params => {
      try {
        // if today delete or else update end date
        if (params.end_date) {
          await update_subscription({
            variables: {
              subscription_id: params.subscription_id,
              customer_id: params.customer_id,
              params: {
                effective_end_date: params.end_date,
              },
            },
          });
        }

        return true;
      } catch (error: any) {
        console.error('ERROR DELETING SUBSCRIPTION', error);
        return false;
      }
    },
    UPDATE_INVOICE_TEMPLATE: async () => {},
    DELETE_INVOICE_TEMPLATE: async () => {},
    UPDATE_PAYMENT_TEMPLATE: async () => {},
    DELETE_PAYMENT_TEMPLATE: async () => {},
    ADD_BILLING_ITEM: async params => {
      billing_items_array.append(params.billing_item);
    },
    RESET_FORM_VALUES: async params => {
      if (params.form === 'INVOICE') {
        // eslint-disable-next-line @typescript-eslint/return-await
        return await setInvoiceFields(params);
      }

      if (params.form === 'PAYMENT') {
        // eslint-disable-next-line @typescript-eslint/return-await
        return await setPaymentFields(params);
      }

      return false;
    },
    CANCEL_EDITING_SUBSCRIPTION: async () => {
      await initializeAllFields();
    },
    GENERATE_SUBSCRIPTION_NAME: async () => {
      const main_billing_item = billing_items[0];
      const main_billing_description =
        main_billing_item?.description_override ||
        main_billing_item?.template_name ||
        '';
      const selected_property = properties.find(
        property => property.id === subscription_property_id,
      );

      const frequency = subscription_form.getValues('frequency');

      const suggested_name =
        main_billing_description +
        ' --- ' +
        selected_property?.name +
        ' --- ' +
        frequency;

      subscription_form.setValue('title', suggested_name.toUpperCase());
    },
  };

  const dispatch = <
    A extends keyof Actions,
    TParams extends Actions[A] extends (p: infer P) => any ? P : undefined,
  >(
    action: A,
    params: TParams,
  ) => {
    return (actions[action] as (params: TParams) => Promise<boolean>)(params);
  };

  return {
    dispatch,
    subscription_form,
    billing_items_form,
    cost,
    payment_template_form,
    invoice_template_form,
    loading:
      loading || update_subscription_loading || pause_subscription_loading,
    invoice_template_options,
    payment_template_options,
  };
};

export default useSubscription;
