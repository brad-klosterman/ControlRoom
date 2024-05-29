import { createContext } from 'react';

import { CORE_TECHNICIAN_FRAGMENT } from 'codegen/graphql';

export type ProviderContext = {
  loading: boolean;
  technicians: readonly CORE_TECHNICIAN_FRAGMENT[];
  refetch: () => void;
};

export const Context = createContext<ProviderContext>({
  loading: true,
  technicians: [],
  refetch: () => null,
});
