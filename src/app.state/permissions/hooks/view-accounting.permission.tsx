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

const SUBJECT_CLASS: SubjectClass = 'accounting';
const VALID_ACTION_SET: PermissionAction[] = ['read', 'manage'];
const OUTLET_REDIRECT = '/control_room/alarms';

const getViewAccountingPermission = (
  permissions: PERMISSION[] | undefined,
): PermissionAccess => {
  return PermissionUtils.determinePermissionAccess(
    permissions,
    SUBJECT_CLASS,
    VALID_ACTION_SET,
  );
};

const useViewAccountingPermission = (): PermissionAccess => {
  const {
    state: { permissions },
  } = useAuthContext();
  return getViewAccountingPermission(permissions);
};

const useCanViewAccounting = (): boolean => {
  return useViewAccountingPermission() === 'ALLOWED';
};

const RequiresViewAccountingPermission = ({
  children,
}: {
  children: ReactNode;
}) => {
  return PermissionUtils.createRestrictedRender(
    useViewAccountingPermission(),
    children,
  );
};

const RequiresViewAccountingOutlet = () => {
  return PermissionUtils.createRestrictedOutlet(
    useViewAccountingPermission(),
    OUTLET_REDIRECT,
    useLocation(),
  );
};

export {
  getViewAccountingPermission,
  useViewAccountingPermission,
  useCanViewAccounting,
  RequiresViewAccountingPermission,
  RequiresViewAccountingOutlet,
};
