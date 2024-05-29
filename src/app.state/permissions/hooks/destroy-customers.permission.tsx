import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import { PERMISSION } from 'codegen/graphql';
import { useAuthContext } from 'src/app.state/auth/provider';

import {
  PermissionAccess,
  PermissionAction,
  PermissionUtils,
  SubjectClass,
} from '../utils';

const SUBJECT_CLASS: SubjectClass = 'companies';
const VALID_ACTION_SET: PermissionAction[] = ['destroy', 'manage'];
const OUTLET_REDIRECT = '/control_room/alarms';

const getDestroyCustomersPermission = (
  permissions: PERMISSION[] | undefined,
): PermissionAccess => {
  return PermissionUtils.determinePermissionAccess(
    permissions,
    SUBJECT_CLASS,
    VALID_ACTION_SET,
  );
};

const useDestroyCustomersPermission = (): PermissionAccess => {
  const {
    state: { permissions },
  } = useAuthContext();
  return getDestroyCustomersPermission(permissions);
};

const useCanDestroyCustomers = (): boolean => {
  return useDestroyCustomersPermission() === 'ALLOWED';
};

const RequiresDestroyCustomersPermission = ({
  children,
}: {
  children: ReactNode;
}) => {
  return PermissionUtils.createRestrictedRender(
    useDestroyCustomersPermission(),
    children,
  );
};

const RequiresDestroyCustomersOutlet = () => {
  return PermissionUtils.createRestrictedOutlet(
    useDestroyCustomersPermission(),
    OUTLET_REDIRECT,
    useLocation(),
  );
};

export {
  getDestroyCustomersPermission,
  useDestroyCustomersPermission,
  useCanDestroyCustomers,
  RequiresDestroyCustomersPermission,
  RequiresDestroyCustomersOutlet,
};
