import { useState } from 'react';
import { PropertySubset } from '../forms';

interface CustomerSubset {
  id: number;
  title?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  properties: PropertySubset[];
}

interface CreateAlarmModalState {
  is_open: boolean;
  customer: CustomerSubset | undefined;
  open: (customer: CustomerSubset) => void;
  close: () => void;
}

const useCreateAlarmModalState = (): CreateAlarmModalState => {
  const [customer, setCustomer] = useState<CustomerSubset | undefined>();

  const open = (customer: CustomerSubset): void => {
    setCustomer(customer);
  };

  const close = (): void => {
    setCustomer(undefined);
  };

  return {
    is_open: Boolean(customer),
    customer,
    open,
    close,
  };
};

export type { CreateAlarmModalState };
export { useCreateAlarmModalState };
