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
const VALID_ACTION_SET: PermissionAction[] = ['suspend'];
const OUTLET_REDIRECT = '/control_room/alarms';

const getSuspendCustomersPermission = (
  permissions: PERMISSION[] | undefined,
): PermissionAccess => {
  return PermissionUtils.determinePermissionAccess(
    permissions,
    SUBJECT_CLASS,
    VALID_ACTION_SET,
  );
};

const useSuspendCustomersPermission = (): PermissionAccess => {
  const {
    state: { permissions },
  } = useAuthContext();
  return getSuspendCustomersPermission(permissions);
};

const useCanSuspendCustomers = (): boolean => {
  return useSuspendCustomersPermission() === 'ALLOWED';
};

const RequiresSuspendCustomersPermission = ({
  children,
}: {
  children: ReactNode;
}) => {
  return PermissionUtils.createRestrictedRender(
    useSuspendCustomersPermission(),
    children,
  );
};

const RequiresSuspendCustomersOutlet = () => {
  return PermissionUtils.createRestrictedOutlet(
    useSuspendCustomersPermission(),
    OUTLET_REDIRECT,
    useLocation(),
  );
};

export {
  getSuspendCustomersPermission,
  useSuspendCustomersPermission,
  useCanSuspendCustomers,
  RequiresSuspendCustomersPermission,
  RequiresSuspendCustomersOutlet,
};
