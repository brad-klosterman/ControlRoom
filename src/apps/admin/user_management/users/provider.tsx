import { useQuery } from '@apollo/client';
import { memo, ReactNode, useContext, useMemo } from 'react';
import { getFragment } from 'codegen';
import {
  CORE_AGENT_FRAGMENT_DOC,
  FETCH_AGENTS_DOCUMENT,
} from 'codegen/graphql';

import { Context } from './types';

const UsersProvider = (props: { children: ReactNode }) => {
  const { data, loading, refetch } = useQuery(FETCH_AGENTS_DOCUMENT);
  const agents =
    getFragment(CORE_AGENT_FRAGMENT_DOC, data?.agents.agents) ?? [];

  const refetchUsers = async () => {
    await refetch();
  };

  // TODO rename to something more generic
  const account_manager_options = useMemo(
    () =>
      agents
        ? agents.map(({ id: value, name }) => ({
            label: name?.toUpperCase() ?? '-',
            value,
          }))
        : [],
    [agents],
  );

  return (
    <Context.Provider
      value={{
        loading,
        agents,
        account_manager_options,
        refetch: refetchUsers,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export const useUsersContext = () => {
  return useContext(Context);
};

export default memo(UsersProvider);
