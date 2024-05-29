import { useQuery } from '@apollo/client';

import { FETCH_PERMISSIONS_DOCUMENT, PERMISSION } from 'codegen/graphql';
import { Lazy, LazyState } from 'utils/lazy';

interface UseFetchPermissionsActions {
  refetchPermissions: () => Promise<void>;
}

interface UseFetchPermissionsState {
  permissions: Lazy<PERMISSION[]>;
}

interface UseFetchPermissionsReturn {
  actions: UseFetchPermissionsActions;
  state: UseFetchPermissionsState;
}

interface UseFetchPermissionsProps {
  skip_fetch?: boolean;
}

const useFetchPermissions = (
  props?: UseFetchPermissionsProps,
): UseFetchPermissionsReturn => {
  const { data, loading, refetch } = useQuery(FETCH_PERMISSIONS_DOCUMENT, {
    skip: props?.skip_fetch,
  });

  const buildLazyStateRoles = (): Lazy<PERMISSION[]> => {
    const permissions = data?.permissions.permissions;

    if (loading) {
      return {
        state: LazyState.LOADING,
        data: permissions,
      };
    }

    if (!permissions) {
      return {
        state: LazyState.ERROR,
      };
    }

    return {
      state: LazyState.SUCCESS,
      data: permissions,
    };
  };

  return {
    state: {
      permissions: buildLazyStateRoles(),
    },
    actions: {
      refetchPermissions: async () => {
        await refetch();
      },
    },
  };
};

export { useFetchPermissions };
