import React from 'react';
import { getFragment } from 'codegen';
import { useMutation } from '@apollo/client';
import { Modal, Text } from 'components/ui';
import {
  CUSTOMER_BILLING_SUBSCRIPTION_CONDENSED,
  SUBSCRIPTION_INVOICE_TEMPLATE,
} from '@customers/API';
import { GROUP_CUSTOMER_INVOICES_DOCUMENT } from 'codegen/graphql';
import Customer from '@customers/customer';
import { useExistingInvoiceTemplates } from '@customers/customer/account/subscriptions/forms/useExistingInvoiceTemplates';
import { IOptionNumber } from 'components/ui/Form/Options';

/**
 * Invoice Clubbing Modal
 *
 */
const useInvoiceClubbingModal = () => {
  const modal = React.useContext(Modal.Context);

  /**
   * API
   *
   */
  const [groupCustomerInvoicesAPI] = useMutation(
    GROUP_CUSTOMER_INVOICES_DOCUMENT,
  );

  /**
   * Customer Context
   *
   */
  const CustomerContext = Customer.useContext();
  const { customer } = CustomerContext;

  const invoice_templates = getFragment(
    SUBSCRIPTION_INVOICE_TEMPLATE,
    customer?.billing?.invoice_templates,
  );

  const INVOICE_TEMPLATE_OPTIONS =
    useExistingInvoiceTemplates({
      invoice_templates,
      use_create_option: false,
    }) ?? [];

  function getActiveInvoiceTemplateIds() {
    const invoice_template_ids: number[] = [];

    customer?.billing?.billing_subscriptions?.forEach(subscription_frag => {
      const subscription = getFragment(
        CUSTOMER_BILLING_SUBSCRIPTION_CONDENSED,
        subscription_frag,
      );
      const invoice_template_id = subscription.billing_invoice_template_id;

      if (
        invoice_template_id &&
        !invoice_template_ids.includes(invoice_template_id)
      ) {
        invoice_template_ids.push(invoice_template_id);
      }
    });

    return invoice_template_ids;
  }

  const active_invoice_template_count = getActiveInvoiceTemplateIds().length;

  function getInfoText() {
    if (active_invoice_template_count === 1) {
      return 'Subscriptions will be grouped together on this invoice.';
    }

    return 'Please select the invoice template that you want to use in the future. Other templates will be deleted.';
  }

  function getConfirmText() {
    if (active_invoice_template_count === 0) {
      return 'PROCEED';
    }

    if (active_invoice_template_count === 1) {
      return 'CONFIRM';
    }

    return 'TRANSFER';
  }

  if (active_invoice_template_count === 0) {
    return {
      open(params: { onConfirm(success: boolean): Promise<void> }) {
        modal.open({
          title: 'INVOICE CLUBBING',
          subtitle: `In the future, all running subscriptions will be grouped together on
          one invoice.`,
          actions: [
            { type: 'cancel' },
            { type: 'confirm', text: getConfirmText() },
          ],
          async onConfirm() {
            await params.onConfirm(true);
            modal.close();
          },
        });
      },
    };
  }

  return {
    open(params: { onConfirm(success: boolean): Promise<void> }) {
      modal.open({
        title: 'INVOICE CLUBBING',
        subtitle: `All running subscriptions will be grouped together on
          one invoice.`,
        component: () => (
          <Text
            colorKey="warning"
            size="displaySmall"
            style={{ marginTop: '3rem' }}
          >
            {getInfoText()}
          </Text>
        ),
        form: [
          {
            label: 'Invoice Template',
            name: 'invoice_template',
            type: 'Select',
            options: INVOICE_TEMPLATE_OPTIONS as IOptionNumber[],
            default_value: INVOICE_TEMPLATE_OPTIONS[0]?.value as
              | number
              | undefined,
            required: true,
          },
        ],
        actions: [
          { type: 'cancel' },
          { type: 'confirm', text: getConfirmText() },
        ],
        async onConfirm({ invoice_template }: { invoice_template: number }) {
          if (customer?.id)
            groupCustomerInvoicesAPI({
              variables: {
                customer_id: customer.id,
                invoice_template_id: invoice_template,
              },
            }).then(async ({ data }) => {
              const success = data?.group_customer_invoices;
              await params.onConfirm(Boolean(success));

              modal.close();
            });
        },
      });
    },
  };
};

export { useInvoiceClubbingModal };
