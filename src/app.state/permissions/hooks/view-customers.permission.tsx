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
const VALID_ACTION_SET: PermissionAction[] = ['read', 'manage'];
const OUTLET_REDIRECT = '/control_room/alarms';

const getViewCustomersPermission = (
  permissions: PERMISSION[] | undefined,
): PermissionAccess => {
  return PermissionUtils.determinePermissionAccess(
    permissions,
    SUBJECT_CLASS,
    VALID_ACTION_SET,
  );
};

const useViewCustomersPermission = (): PermissionAccess => {
  const {
    state: { permissions },
  } = useAuthContext();
  return getViewCustomersPermission(permissions);
};

const useCanViewCustomers = (): boolean => {
  return useViewCustomersPermission() === 'ALLOWED';
};

const RequiresViewCustomersPermission = ({
  children,
}: {
  children: ReactNode;
}) => {
  return PermissionUtils.createRestrictedRender(
    useViewCustomersPermission(),
    children,
  );
};

const RequiresViewCustomersOutlet = () => {
  return PermissionUtils.createRestrictedOutlet(
    useViewCustomersPermission(),
    OUTLET_REDIRECT,
    useLocation(),
  );
};

export {
  getViewCustomersPermission,
  useViewCustomersPermission,
  useCanViewCustomers,
  RequiresViewCustomersPermission,
  RequiresViewCustomersOutlet,
};
