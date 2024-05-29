import { useMemo } from 'react';

import { PROPERTY_PROFILE_ROUTE } from 'apps/customers/API';
import { useCustomer } from 'apps/customers/customer/provider';
import { getFragment } from 'codegen';
import { IOptionNumber } from 'components/ui/Form/Options';

export const usePropertyOptions = (): { options: IOptionNumber[] } => {
  const { customer } = useCustomer();
  if (!customer) return { options: [] };

  const properties =
    getFragment(PROPERTY_PROFILE_ROUTE, customer.properties) || [];

  const options = useMemo(
    () =>
      properties.reduce<IOptionNumber[]>((acc, cur) => {
        return [
          ...acc,
          {
            label: `${cur.name} --- ${cur.geospatial?.entire_address || ''}`,
            value: cur.id,
          } as IOptionNumber,
        ];
      }, []),
    [properties.length],
  );

  return {
    options,
  };
};
