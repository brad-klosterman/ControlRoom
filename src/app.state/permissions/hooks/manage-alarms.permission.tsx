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
const VALID_ACTION_SET: PermissionAction[] = ['manage'];
const OUTLET_REDIRECT = '/control_room/alarms';

const getManageAlarmsPermission = (
  permissions: PERMISSION[] | undefined,
): PermissionAccess => {
  return PermissionUtils.determinePermissionAccess(
    permissions,
    SUBJECT_CLASS,
    VALID_ACTION_SET,
  );
};

const useManageAlarmsPermission = (): PermissionAccess => {
  const {
    state: { permissions },
  } = useAuthContext();
  return getManageAlarmsPermission(permissions);
};

const RequiresManageAlarmsPermission = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  return PermissionUtils.createRestrictedRender(
    useManageAlarmsPermission(),
    children,
  );
};

const RequiresManageAlarmsOutlet = () => {
  return PermissionUtils.createRestrictedOutlet(
    useManageAlarmsPermission(),
    OUTLET_REDIRECT,
    useLocation(),
  );
};

export {
  getManageAlarmsPermission,
  useManageAlarmsPermission,
  RequiresManageAlarmsPermission,
  RequiresManageAlarmsOutlet,
};
