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
const VALID_ACTION_SET: PermissionAction[] = ['create', 'manage'];
const OUTLET_REDIRECT = '/control_room/alarms';

const getCreateAdminPermission = (
  permissions: PERMISSION[] | undefined,
): PermissionAccess => {
  return PermissionUtils.determinePermissionAccess(
    permissions,
    SUBJECT_CLASS,
    VALID_ACTION_SET,
  );
};

const useCreateAdminPermission = (): PermissionAccess => {
  const {
    state: { permissions },
  } = useAuthContext();
  return getCreateAdminPermission(permissions);
};

const useCanCreateAdmin = (): boolean => {
  return useCreateAdminPermission() === 'ALLOWED';
};

const RequiresCreateAdminPermission = ({
  children,
}: {
  children: ReactNode;
}) => {
  return PermissionUtils.createRestrictedRender(
    useCreateAdminPermission(),
    children,
  );
};

const RequiresCreateAdminOutlet = () => {
  return PermissionUtils.createRestrictedOutlet(
    useCreateAdminPermission(),
    OUTLET_REDIRECT,
    useLocation(),
  );
};

export {
  getCreateAdminPermission,
  useCreateAdminPermission,
  useCanCreateAdmin,
  RequiresCreateAdminPermission,
  RequiresCreateAdminOutlet,
};
