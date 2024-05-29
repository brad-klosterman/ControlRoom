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
const VALID_ACTION_SET: PermissionAction[] = ['create', 'manage'];
const OUTLET_REDIRECT = '/control_room/alarms';

const getCreateCustomersPermission = (
  permissions: PERMISSION[] | undefined,
): PermissionAccess => {
  return PermissionUtils.determinePermissionAccess(
    permissions,
    SUBJECT_CLASS,
    VALID_ACTION_SET,
  );
};

const useCreateCustomersPermission = (): PermissionAccess => {
  const {
    state: { permissions },
  } = useAuthContext();
  return getCreateCustomersPermission(permissions);
};

const useCanCreateCustomers = (): boolean => {
  return useCreateCustomersPermission() === 'ALLOWED';
};

const RequiresCreateCustomersPermission = ({
  children,
}: {
  children: ReactNode;
}) => {
  return PermissionUtils.createRestrictedRender(
    useCreateCustomersPermission(),
    children,
  );
};

const RequiresCreateCustomersOutlet = () => {
  return PermissionUtils.createRestrictedOutlet(
    useCreateCustomersPermission(),
    OUTLET_REDIRECT,
    useLocation(),
  );
};

export {
  getCreateCustomersPermission,
  useCreateCustomersPermission,
  useCanCreateCustomers,
  RequiresCreateCustomersPermission,
  RequiresCreateCustomersOutlet,
};
