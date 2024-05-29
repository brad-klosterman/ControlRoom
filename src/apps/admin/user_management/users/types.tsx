import { createContext } from 'react';

import { CORE_AGENT_FRAGMENT } from 'codegen/graphql';

export type ProviderContext = {
  loading: boolean;
  agents: readonly CORE_AGENT_FRAGMENT[];
  account_manager_options: { label: string; value: number }[];
  refetch: () => Promise<void>;
};

export const Context = createContext<ProviderContext>({
  loading: true,
  agents: [],
  account_manager_options: [],
  refetch: () => new Promise(() => {}),
});
