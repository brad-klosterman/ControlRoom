import { useQuery } from '@apollo/client';

import { FETCH_ROLES_DOCUMENT, USER_ROLE } from 'codegen/graphql';
import { Lazy, LazyState } from 'utils/lazy';

interface UseFetchRolesActions {
  refetchRoles: () => Promise<void>;
}

interface UseFetchRolesState {
  roles: Lazy<USER_ROLE[]>;
}

interface UseFetchRolesReturn {
  actions: UseFetchRolesActions;
  state: UseFetchRolesState;
}

interface UseFetchRolesProps {
  skip_fetch?: boolean;
}

const useFetchRoles = (props?: UseFetchRolesProps): UseFetchRolesReturn => {
  const { data, loading, refetch } = useQuery(FETCH_ROLES_DOCUMENT, {
    skip: props?.skip_fetch,
  });

  const buildLazyStateRoles = (): Lazy<USER_ROLE[]> => {
    const roles = data?.roles.roles;

    if (loading) {
      return {
        state: LazyState.LOADING,
        data: roles,
      };
    }

    if (!roles) {
      return {
        state: LazyState.ERROR,
      };
    }

    return {
      state: LazyState.SUCCESS,
      data: roles,
    };
  };

  return {
    state: {
      roles: buildLazyStateRoles(),
    },
    actions: {
      refetchRoles: async () => {
        await refetch();
      },
    },
  };
};

export { useFetchRoles };
