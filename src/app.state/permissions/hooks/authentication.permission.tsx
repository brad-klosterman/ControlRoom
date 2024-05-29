import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import {
  UserAuthenticationStatus,
  useAuthContext,
} from 'src/app.state/auth/provider';

import { PermissionAccess, PermissionUtils } from '../utils';

const getAuthenticationPermission = (
  auth_status: UserAuthenticationStatus,
): PermissionAccess => {
  switch (auth_status) {
    case 'LOADING':
      return 'UNKNOWN';
    case 'UN_AUTHENTICATED':
      return 'DENIED';
    case 'AUTHENTICATED':
      return 'ALLOWED';
  }
};

const useAuthenticationPermission = (): PermissionAccess => {
  const {
    state: { auth_status: authStatus },
  } = useAuthContext();
  return getAuthenticationPermission(authStatus);
};

const useIsAuthenticated = (): boolean => {
  return useAuthenticationPermission() === 'ALLOWED';
};

const RequiresAuthentication = ({ children }: { children: ReactNode }) => {
  return PermissionUtils.createRestrictedRender(
    useAuthenticationPermission(),
    children,
  );
};

const RequiresAuthenticationOutlet = () => {
  return PermissionUtils.createRestrictedOutlet(
    useAuthenticationPermission(),
    '/login',
    useLocation(),
  );
};

export {
  getAuthenticationPermission,
  useAuthenticationPermission,
  useIsAuthenticated,
  RequiresAuthentication,
  RequiresAuthenticationOutlet,
};
