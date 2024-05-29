import { useMutation } from '@apollo/client';
import { ReactNode, createContext, useContext } from 'react';

import {
  CREATE_ROLE_DOCUMENT,
  CREATE_ROLE_INPUT,
  PERMISSION,
  UPDATE_ROLE_INPUT,
} from 'codegen/graphql';
import { Lazy, LazyState } from 'utils/lazy';

import { useFetchPermissions } from './fetch.permissions';
import { useAuthenticationPermission } from './hooks/authentication.permission';

interface PermissionsProviderState {
  permissions: Lazy<PERMISSION[]>;
}

interface PermissionsProviderActions {
  createRole: (params: CREATE_ROLE_INPUT) => Promise<void>;
  updateRole: (params: UPDATE_ROLE_INPUT) => Promise<void>;
}

const PermissionsContext = createContext<{
  state: PermissionsProviderState;
  actions: PermissionsProviderActions;
}>({
  state: {
    permissions: {
      state: LazyState.UN_INITIALIZED,
    },
  },
  actions: {
    createRole: () => new Promise(() => {}),
    updateRole: () => new Promise(() => {}),
  },
});

const PermissionsProvider = ({ children }: { children: ReactNode }) => {
  const auth_permission = useAuthenticationPermission();
  const {
    state: { permissions },
  } = useFetchPermissions({
    skip_fetch: auth_permission !== 'ALLOWED',
  });

  const [createRole] = useMutation(CREATE_ROLE_DOCUMENT);

  return (
    <PermissionsContext.Provider
      value={{
        state: {
          permissions,
        },
        actions: {
          createRole: () => new Promise(() => {}),
          updateRole: () => new Promise(() => {}),
        },
      }}
    >
      {children}
    </PermissionsContext.Provider>
  );
};

const usePermissionsContext = () => {
  return useContext(PermissionsContext);
};

export { PermissionsProvider, usePermissionsContext };
