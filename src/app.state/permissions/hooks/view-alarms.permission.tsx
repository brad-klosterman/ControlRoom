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

const SUBJECT_CLASS: SubjectClass = 'alarms';
const VALID_ACTION_SET: PermissionAction[] = ['read', 'manage'];
const OUTLET_REDIRECT = '/control_room/customers';

const getViewAlarmsPermission = (
  permissions: PERMISSION[] | undefined,
): PermissionAccess => {
  return PermissionUtils.determinePermissionAccess(
    permissions,
    SUBJECT_CLASS,
    VALID_ACTION_SET,
  );
};

const useViewAlarmsPermission = (): PermissionAccess => {
  const {
    state: { permissions },
  } = useAuthContext();
  return getViewAlarmsPermission(permissions);
};

const useCanViewAlarms = (): boolean => {
  return useViewAlarmsPermission() === 'ALLOWED';
};

const RequiresViewAlarmsPermission = ({
  children,
}: {
  children: ReactNode;
}) => {
  return PermissionUtils.createRestrictedRender(
    useViewAlarmsPermission(),
    children,
  );
};

const RequiresViewAlarmsOutlet = () => {
  return PermissionUtils.createRestrictedOutlet(
    useViewAlarmsPermission(),
    OUTLET_REDIRECT,
    useLocation(),
  );
};

export {
  getViewAlarmsPermission,
  useViewAlarmsPermission,
  useCanViewAlarms,
  RequiresViewAlarmsPermission,
  RequiresViewAlarmsOutlet,
};
