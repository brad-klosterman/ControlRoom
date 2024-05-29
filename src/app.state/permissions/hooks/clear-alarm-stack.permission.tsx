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
const VALID_ACTION_SET: PermissionAction[] = ['clear'];
const OUTLET_REDIRECT = '/control_room/alarms';

const getClearAlarmStackPermission = (
  permissions: PERMISSION[] | undefined,
): PermissionAccess => {
  return PermissionUtils.determinePermissionAccess(
    permissions,
    SUBJECT_CLASS,
    VALID_ACTION_SET,
  );
};

const useClearAlarmStackPermission = (): PermissionAccess => {
  const {
    state: { permissions },
  } = useAuthContext();
  return getClearAlarmStackPermission(permissions);
};

const useCanClearAlarmStack = (): boolean => {
  return useClearAlarmStackPermission() === 'ALLOWED';
};

const RequiresClearAlarmStackPermission = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  return PermissionUtils.createRestrictedRender(
    useClearAlarmStackPermission(),
    children,
  );
};

const RequiresClearAlarmStackOutlet = () => {
  return PermissionUtils.createRestrictedOutlet(
    useClearAlarmStackPermission(),
    OUTLET_REDIRECT,
    useLocation(),
  );
};

export {
  getClearAlarmStackPermission,
  useClearAlarmStackPermission,
  useCanClearAlarmStack,
  RequiresClearAlarmStackPermission,
  RequiresClearAlarmStackOutlet,
};
