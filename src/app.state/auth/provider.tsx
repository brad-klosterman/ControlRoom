import { useLazyQuery, useMutation } from '@apollo/client';
import { createContext, memo, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  LOGIN_MUTATION_VARIABLES,
  LOGIN_USER_DOCUMENT,
  LOGOUT_DOCUMENT,
  PERMISSION,
  VALIDATE_HEARTBEAT_DOCUMENT,
} from 'codegen/graphql';
import Modal from 'components/ui/Modal/provider';
import useResponseStatus from 'hooks/use.response-status';
import { getErrorMessage } from 'src/apollo/utils/error_handeling';
import { getForcedLogoutModal } from 'src/app.state/auth/modals';
import { PermissionUtils } from 'src/app.state/permissions/utils';

import { AuthSessionStorage } from './auth.session.storage';
import {
  AuthProviderActions,
  AuthProviderState,
  ForcedLogoutType,
  UserAuthenticationStatus,
  UserStoredSession,
} from './types';

const AuthContext = createContext<{
  actions: AuthProviderActions;
  state: AuthProviderState;
}>({
  actions: {
    login: () => new Promise(() => {}),
    logout: () => new Promise(() => {}),
  },
  state: { auth_status: 'LOADING' },
});

const AuthProvider = memo(({ children }: any) => {
  const navigate = useNavigate();
  const modal = useContext(Modal.Context);
  const toast = useResponseStatus();

  const [state, setState] = useState<AuthProviderState>({
    auth_status: 'LOADING',
  });

  const [check_session_token] = useLazyQuery(VALIDATE_HEARTBEAT_DOCUMENT);
  const [login_user] = useMutation(LOGIN_USER_DOCUMENT);
  const [logout_control_room] = useMutation(LOGOUT_DOCUMENT);

  const getAuthSessionState = async (params: {
    session_user: UserStoredSession | undefined;
  }): Promise<AuthProviderState> => {
    let initial_state: AuthProviderState = { auth_status: 'UN_AUTHENTICATED' };

    if (params.session_user) {
      const { data } = await check_session_token();
      const valid_token = Boolean(data?.validate_heartbeat.authenticated);
      if (valid_token)
        initial_state = {
          auth_status: 'AUTHENTICATED',
          permissions: params.session_user.role.permissions,
          user: params.session_user,
          ssp_settings: params.session_user.ssp_settings,
        };
    }

    return initial_state;
  };

  const redirectAfterLogin = (permissions: PERMISSION[] | undefined) => {
    let initial_route = '/control_room';

    const view_alarms =
      PermissionUtils.determinePermissionAccess(permissions, 'alarms', [
        'read',
        'manage',
      ]) === 'ALLOWED';

    if (view_alarms) initial_route = '/control_room/areas';

    navigate(initial_route, { replace: true });
  };

  const onAuthSessionExpired = () => {
    AuthSessionStorage.clear();
    navigate('/login', { replace: true });
  };

  useEffect(() => {
    getAuthSessionState({ session_user: AuthSessionStorage.getUser() }).then(
      initial_auth_state => setState(initial_auth_state),
    );
  }, []);

  useEffect(() => {
    if (state.auth_status === 'UN_AUTHENTICATED') onAuthSessionExpired();
  }, [state.auth_status]);

  const openForcedLogoutModal = (logout_type: ForcedLogoutType) =>
    modal.open(getForcedLogoutModal(logout_type));

  const actions: AuthProviderActions = {
    login: async (params: LOGIN_MUTATION_VARIABLES): Promise<void> => {
      toast.dismiss('login');

      try {
        const { data } = await login_user({
          variables: params,
        });

        if (data?.login_user) {
          const { seon_auth_headers, ssp_settings, user } = data.login_user;
          const {
            role: { permissions },
          } = user;

          AuthSessionStorage.setAuthHeaders(seon_auth_headers);
          AuthSessionStorage.setUser({ ...user, ssp_settings });

          setState({
            user,
            ssp_settings,
            permissions,
            auth_status: 'AUTHENTICATED',
          });

          redirectAfterLogin(permissions);
        } else {
          toast.errorAlert('COULD NOT LOG IN', { id: 'login' });
        }
      } catch (error: any) {
        toast.errorAlert(getErrorMessage(error) || 'COULD NOT LOG IN', {
          id: 'login',
          timeout: 12000,
        });
      }
    },
    logout: async (forced?: ForcedLogoutType): Promise<void> => {
      if (forced === 'UN_AUTHENTICATED') {
        openForcedLogoutModal(forced);
      } else {
        try {
          await logout_control_room();
          if (forced) openForcedLogoutModal(forced);
        } catch (error: any) {
          console.error('COULD NOT LOG OUT');
        }
      }

      setState({
        auth_status: 'UN_AUTHENTICATED',
      });
    },
  };

  return (
    <AuthContext.Provider value={{ actions, state }}>
      {children}
    </AuthContext.Provider>
  );
});

const useAuthContext = () => {
  const { actions, state } = useContext(AuthContext);
  return { actions, state };
};

export type { UserAuthenticationStatus };
export { AuthProvider, useAuthContext };
