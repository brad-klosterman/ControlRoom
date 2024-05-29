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

const SUBJECT_CLASS: SubjectClass = 'admin_section';
const VALID_ACTION_SET: PermissionAction[] = ['destroy', 'manage'];
const OUTLET_REDIRECT = '/control_room/alarms';

const getDestroyAdminPermission = (
  permissions: PERMISSION[] | undefined,
): PermissionAccess => {
  return PermissionUtils.determinePermissionAccess(
    permissions,
    SUBJECT_CLASS,
    VALID_ACTION_SET,
  );
};

const useDestroyAdminPermission = (): PermissionAccess => {
  const {
    state: { permissions },
  } = useAuthContext();
  return getDestroyAdminPermission(permissions);
};

const useCanDestroyAdmin = (): boolean => {
  return useDestroyAdminPermission() === 'ALLOWED';
};

const RequiresDestroyAdminPermission = ({
  children,
}: {
  children: ReactNode;
}) => {
  return PermissionUtils.createRestrictedRender(
    useDestroyAdminPermission(),
    children,
  );
};

const RequiresDestroyAdminOutlet = () => {
  return PermissionUtils.createRestrictedOutlet(
    useDestroyAdminPermission(),
    OUTLET_REDIRECT,
    useLocation(),
  );
};

export {
  getDestroyAdminPermission,
  useDestroyAdminPermission,
  useCanDestroyAdmin,
  RequiresDestroyAdminPermission,
  RequiresDestroyAdminOutlet,
};
