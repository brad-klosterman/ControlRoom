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
const VALID_ACTION_SET: PermissionAction[] = ['read', 'manage'];
const OUTLET_REDIRECT = '/control_room/alarms';

const getViewAdminPermission = (
  permissions: PERMISSION[] | undefined,
): PermissionAccess => {
  return PermissionUtils.determinePermissionAccess(
    permissions,
    SUBJECT_CLASS,
    VALID_ACTION_SET,
  );
};

const useViewAdminPermission = (): PermissionAccess => {
  const {
    state: { permissions },
  } = useAuthContext();
  return getViewAdminPermission(permissions);
};

const useCanViewAdmin = (): boolean => {
  return useViewAdminPermission() === 'ALLOWED';
};

const RequiresViewAdminPermission = ({ children }: { children: ReactNode }) => {
  return PermissionUtils.createRestrictedRender(
    useViewAdminPermission(),
    children,
  );
};

const RequiresViewAdminOutlet = () => {
  return PermissionUtils.createRestrictedOutlet(
    useViewAdminPermission(),
    OUTLET_REDIRECT,
    useLocation(),
  );
};

export {
  getViewAdminPermission,
  useViewAdminPermission,
  useCanViewAdmin,
  RequiresViewAdminPermission,
  RequiresViewAdminOutlet,
};
