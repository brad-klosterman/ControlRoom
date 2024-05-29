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
const VALID_ACTION_SET: PermissionAction[] = ['update', 'manage'];
const OUTLET_REDIRECT = '/control_room/alarms';

const getUpdateAdminPermission = (
  permissions: PERMISSION[] | undefined,
): PermissionAccess => {
  return PermissionUtils.determinePermissionAccess(
    permissions,
    SUBJECT_CLASS,
    VALID_ACTION_SET,
  );
};

const useUpdateAdminPermission = (): PermissionAccess => {
  const {
    state: { permissions },
  } = useAuthContext();
  return getUpdateAdminPermission(permissions);
};

const useCanUpdateAdmin = (): boolean => {
  return useUpdateAdminPermission() === 'ALLOWED';
};

const RequiresUpdateAdminPermission = ({
  children,
}: {
  children: ReactNode;
}) => {
  return PermissionUtils.createRestrictedRender(
    useUpdateAdminPermission(),
    children,
  );
};

const RequiresUpdateAdminOutlet = () => {
  return PermissionUtils.createRestrictedOutlet(
    useUpdateAdminPermission(),
    OUTLET_REDIRECT,
    useLocation(),
  );
};

export {
  getUpdateAdminPermission,
  useUpdateAdminPermission,
  useCanUpdateAdmin,
  RequiresUpdateAdminPermission,
  RequiresUpdateAdminOutlet,
};
