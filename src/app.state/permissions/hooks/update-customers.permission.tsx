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
const VALID_ACTION_SET: PermissionAction[] = ['update', 'manage'];
const OUTLET_REDIRECT = '/control_room/alarms';

const getUpdateCustomersPermission = (
  permissions: PERMISSION[] | undefined,
): PermissionAccess => {
  return PermissionUtils.determinePermissionAccess(
    permissions,
    SUBJECT_CLASS,
    VALID_ACTION_SET,
  );
};

const useUpdateCustomersPermission = (): PermissionAccess => {
  const {
    state: { permissions },
  } = useAuthContext();
  return getUpdateCustomersPermission(permissions);
};

const useCanUpdateCustomers = (): boolean => {
  return useUpdateCustomersPermission() === 'ALLOWED';
};

const RequiresUpdateCustomersPermission = ({
  children,
}: {
  children: ReactNode;
}) => {
  return PermissionUtils.createRestrictedRender(
    useUpdateCustomersPermission(),
    children,
  );
};

const RequiresUpdateCustomersOutlet = () => {
  return PermissionUtils.createRestrictedOutlet(
    useUpdateCustomersPermission(),
    OUTLET_REDIRECT,
    useLocation(),
  );
};

export {
  getUpdateCustomersPermission,
  useUpdateCustomersPermission,
  useCanUpdateCustomers,
  RequiresUpdateCustomersPermission,
  RequiresUpdateCustomersOutlet,
};
