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
const VALID_ACTION_SET: PermissionAction[] = ['manage'];
const OUTLET_REDIRECT = '/control_room/alarms';

const getManageAccountingPermission = (
  permissions: PERMISSION[] | undefined,
): PermissionAccess => {
  return PermissionUtils.determinePermissionAccess(
    permissions,
    SUBJECT_CLASS,
    VALID_ACTION_SET,
  );
};

const useManageAccountingPermission = (): PermissionAccess => {
  const {
    state: { permissions },
  } = useAuthContext();
  return getManageAccountingPermission(permissions);
};

const useCanManageAccounting = (): boolean => {
  return useManageAccountingPermission() === 'ALLOWED';
};

const RequiresManageAccountingPermission = ({
  children,
}: {
  children: ReactNode;
}) => {
  return PermissionUtils.createRestrictedRender(
    useManageAccountingPermission(),
    children,
  );
};

const RequiresManageAccountingOutlet = () => {
  return PermissionUtils.createRestrictedOutlet(
    useManageAccountingPermission(),
    OUTLET_REDIRECT,
    useLocation(),
  );
};

export {
  getManageAccountingPermission,
  useManageAccountingPermission,
  useCanManageAccounting,
  RequiresManageAccountingPermission,
  RequiresManageAccountingOutlet,
};
