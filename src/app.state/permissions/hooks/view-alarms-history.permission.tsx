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

const SUBJECT_CLASS: SubjectClass = 'alarms_history';
const VALID_ACTION_SET: PermissionAction[] = ['read', 'manage'];
const OUTLET_REDIRECT = '/control_room/alarms';

const getViewAlarmHistoryPermission = (
  permissions: PERMISSION[] | undefined,
): PermissionAccess => {
  return PermissionUtils.determinePermissionAccess(
    permissions,
    SUBJECT_CLASS,
    VALID_ACTION_SET,
  );
};

const useViewAlarmHistoryPermission = (): PermissionAccess => {
  const {
    state: { permissions },
  } = useAuthContext();
  return getViewAlarmHistoryPermission(permissions);
};

const useCanViewAlarmHistory = (): boolean => {
  return useViewAlarmHistoryPermission() === 'ALLOWED';
};

const RequiresViewAlarmHistoryPermission = ({
  children,
}: {
  children: ReactNode;
}) => {
  return PermissionUtils.createRestrictedRender(
    useViewAlarmHistoryPermission(),
    children,
  );
};

const RequiresViewAlarmHistoryOutlet = () => {
  return PermissionUtils.createRestrictedOutlet(
    useViewAlarmHistoryPermission(),
    OUTLET_REDIRECT,
    useLocation(),
  );
};

export {
  getViewAlarmHistoryPermission,
  useViewAlarmHistoryPermission,
  useCanViewAlarmHistory,
  RequiresViewAlarmHistoryPermission,
  RequiresViewAlarmHistoryOutlet,
};
