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

const SUBJECT_CLASS: SubjectClass = 'statistics';
const VALID_ACTION_SET: PermissionAction[] = ['read', 'manage'];
const OUTLET_REDIRECT = '/control_room/alarms';

const getViewStatisticsPermission = (
  permissions: PERMISSION[] | undefined,
): PermissionAccess => {
  return PermissionUtils.determinePermissionAccess(
    permissions,
    SUBJECT_CLASS,
    VALID_ACTION_SET,
  );
};

const useViewStatisticsPermission = (): PermissionAccess => {
  const {
    state: { permissions },
  } = useAuthContext();
  return getViewStatisticsPermission(permissions);
};

const useCanViewStatistics = (): boolean => {
  return useViewStatisticsPermission() === 'ALLOWED';
};

const RequiresViewStatisticsPermission = ({
  children,
}: {
  children: ReactNode;
}) => {
  return PermissionUtils.createRestrictedRender(
    useViewStatisticsPermission(),
    children,
  );
};

const RequiresViewStatisticsOutlet = () => {
  return PermissionUtils.createRestrictedOutlet(
    useViewStatisticsPermission(),
    OUTLET_REDIRECT,
    useLocation(),
  );
};

export {
  getViewStatisticsPermission,
  useViewStatisticsPermission,
  useCanViewStatistics,
  RequiresViewStatisticsPermission,
  RequiresViewStatisticsOutlet,
};
