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
const VALID_ACTION_SET: PermissionAction[] = ['export'];
const OUTLET_REDIRECT = '/control_room/alarms';

const getExportStatisticsPermission = (
  permissions: PERMISSION[] | undefined,
): PermissionAccess => {
  return PermissionUtils.determinePermissionAccess(
    permissions,
    SUBJECT_CLASS,
    VALID_ACTION_SET,
  );
};

const useExportStatisticsPermission = (): PermissionAccess => {
  const {
    state: { permissions },
  } = useAuthContext();
  return getExportStatisticsPermission(permissions);
};

const useCanExportStatistics = (): boolean => {
  return useExportStatisticsPermission() === 'ALLOWED';
};

const RequiresExportStatisticsPermission = ({
  children,
}: {
  children: ReactNode;
}) => {
  return PermissionUtils.createRestrictedRender(
    useExportStatisticsPermission(),
    children,
  );
};

const RequiresExportStatisticsOutlet = () => {
  return PermissionUtils.createRestrictedOutlet(
    useExportStatisticsPermission(),
    OUTLET_REDIRECT,
    useLocation(),
  );
};

export {
  getExportStatisticsPermission,
  useExportStatisticsPermission,
  useCanExportStatistics,
  RequiresExportStatisticsPermission,
  RequiresExportStatisticsOutlet,
};
