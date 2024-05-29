import { useMemo } from 'react';

import { TemplateOption } from 'apps/customers/customer/account/subscriptions/types';
import { SUBSCRIPTION_INVOICE_TEMPLATE_FRAGMENT } from 'codegen/graphql';
import { IOptionNumber } from 'components/ui/Form/Options';

export const useExistingInvoiceTemplates = ({
  invoice_templates,
  use_create_option = true,
}: {
  invoice_templates:
    | readonly SUBSCRIPTION_INVOICE_TEMPLATE_FRAGMENT[]
    | null
    | undefined;
  use_create_option?: boolean;
}): TemplateOption[] | null => {
  const options = useMemo(
    () =>
      invoice_templates &&
      invoice_templates.reduce<IOptionNumber[]>((acc, cur) => {
        return [
          ...acc,
          {
            label: cur.description,
            value: cur.id,
          } as IOptionNumber,
        ];
      }, []),
    [invoice_templates],
  );

  if (!options) {
    return null;
  }

  if (options.length === 0) {
    return null;
  }

  if (!use_create_option) {
    return options;
  }

  return [
    ...options,
    {
      label: '--- CREATE NEW TEMPLATE ---',
      value: 'new_template',
    },
  ];
};
