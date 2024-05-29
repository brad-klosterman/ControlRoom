import { useMemo } from 'react';

import { TemplateOption } from 'apps/customers/customer/account/subscriptions/types';
import { SUBSCRIPTION_PAYMENT_OPTION_FRAGMENT } from 'codegen/graphql';
import { IOptionNumber } from 'components/ui/Form/Options';
import { mapPaymentMethodToAccountType } from '../mappers';

export const useExistingPaymentTemplates = ({
  payment_method,
  payment_templates,
}: {
  payment_templates: readonly SUBSCRIPTION_PAYMENT_OPTION_FRAGMENT[];
  payment_method: string | null | undefined;
}): TemplateOption[] | null => {
  const options = useMemo(
    () =>
      payment_templates.reduce<IOptionNumber[]>((acc, cur) => {
        if (!payment_method || payment_method === 'cash') {
          return acc;
        }

        const available_account_type =
          mapPaymentMethodToAccountType(payment_method);

        if (available_account_type !== cur.account_type) {
          return acc;
        }

        return [
          ...acc,
          {
            label: cur.description,
            value: cur.id,
          } as IOptionNumber,
        ];
      }, []),
    [payment_templates, payment_method],
  );

  if (options.length === 0) {
    return null;
  }

  return [
    ...options,
    {
      label: '--- CREATE NEW TEMPLATE ---',
      value: 'new_template',
    },
  ];
};
