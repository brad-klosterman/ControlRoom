import { useMutation } from '@apollo/client';
import { ReactNode, createContext, useContext } from 'react';

import {
  CREATE_ROLE_DOCUMENT,
  CREATE_ROLE_INPUT,
  UPDATE_ROLE_DOCUMENT,
  UPDATE_ROLE_INPUT,
  USER_ROLE,
} from 'codegen/graphql';
import { useAuthenticationPermission } from 'src/app.state/permissions/hooks/authentication.permission';
import { Lazy, LazyState } from 'utils/lazy';

import { useFetchRoles } from './use.fetch.roles';

interface RolesProviderState {
  roles: Lazy<USER_ROLE[]>;
}

interface RolesProviderActions {
  createRole: (params: CREATE_ROLE_INPUT) => Promise<void>;
  updateRole: (role_id: number, params: UPDATE_ROLE_INPUT) => Promise<void>;
}

const RolesContext = createContext<{
  state: RolesProviderState;
  actions: RolesProviderActions;
}>({
  state: {
    roles: {
      state: LazyState.UN_INITIALIZED,
    },
  },
  actions: {
    createRole: () => new Promise(() => {}),
    updateRole: () => new Promise(() => {}),
  },
});

const RolesProvider = ({ children }: { children: ReactNode }) => {
  const auth_permission = useAuthenticationPermission();
  const {
    actions: { refetchRoles },
    state: { roles },
  } = useFetchRoles({
    skip_fetch: auth_permission !== 'ALLOWED',
  });

  const [createRole] = useMutation(CREATE_ROLE_DOCUMENT);
  const [updateRole] = useMutation(UPDATE_ROLE_DOCUMENT);

  const role_actions: RolesProviderActions = {
    createRole: async (params: CREATE_ROLE_INPUT): Promise<void> => {
      await createRole({
        variables: {
          role: params,
        },
      });
    },
    updateRole: async (
      role_id: number,
      params: UPDATE_ROLE_INPUT,
    ): Promise<void> => {
      await updateRole({
        variables: {
          updateRoleId: role_id,
          params,
        },
      });

      await refetchRoles();
    },
  };

  return (
    <RolesContext.Provider
      value={{
        state: {
          roles,
        },
        actions: role_actions,
      }}
    >
      {children}
    </RolesContext.Provider>
  );
};

const useRolesContext = () => {
  return useContext(RolesContext);
};

export { RolesProvider, useRolesContext };
