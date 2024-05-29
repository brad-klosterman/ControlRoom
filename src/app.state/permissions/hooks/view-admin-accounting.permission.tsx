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

const SUBJECT_CLASS: SubjectClass = 'admin_accounting';
const VALID_ACTION_SET: PermissionAction[] = ['manage'];
const OUTLET_REDIRECT = '/control_room/alarms';

const getViewAdminAccountingPermission = (
  permissions: PERMISSION[] | undefined,
): PermissionAccess => {
  return PermissionUtils.determinePermissionAccess(
    permissions,
    SUBJECT_CLASS,
    VALID_ACTION_SET,
  );
};

const useViewAdminAccountingPermission = (): PermissionAccess => {
  const {
    state: { permissions },
  } = useAuthContext();
  return getViewAdminAccountingPermission(permissions);
};

const useCanViewAdminAccounting = (): boolean => {
  return useViewAdminAccountingPermission() === 'ALLOWED';
};

const RequiresViewAdminAccountingPermission = ({
  children,
}: {
  children: ReactNode;
}) => {
  return PermissionUtils.createRestrictedRender(
    useViewAdminAccountingPermission(),
    children,
  );
};

const RequiresViewAdminAccountingOutlet = () => {
  return PermissionUtils.createRestrictedOutlet(
    useViewAdminAccountingPermission(),
    OUTLET_REDIRECT,
    useLocation(),
  );
};

export {
  getViewAdminAccountingPermission,
  useViewAdminAccountingPermission,
  useCanViewAdminAccounting,
  RequiresViewAdminAccountingPermission,
  RequiresViewAdminAccountingOutlet,
};
