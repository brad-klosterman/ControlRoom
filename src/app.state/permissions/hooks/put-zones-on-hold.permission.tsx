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

const SUBJECT_CLASS: SubjectClass = 'zones';
const VALID_ACTION_SET: PermissionAction[] = ['on-hold', 'manage'];
const OUTLET_REDIRECT = '/control_room/alarms';

const getPutZonesOnHoldPermission = (
  permissions: PERMISSION[] | undefined,
): PermissionAccess => {
  return PermissionUtils.determinePermissionAccess(
    permissions,
    SUBJECT_CLASS,
    VALID_ACTION_SET,
  );
};

const usePutZonesOnHoldPermission = (): PermissionAccess => {
  const {
    state: { permissions },
  } = useAuthContext();
  return getPutZonesOnHoldPermission(permissions);
};

const RequiresPutZonesOnHoldPermission = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  return PermissionUtils.createRestrictedRender(
    usePutZonesOnHoldPermission(),
    children,
  );
};

const RequiresPutZonesOnHoldOutlet = () => {
  return PermissionUtils.createRestrictedOutlet(
    usePutZonesOnHoldPermission(),
    OUTLET_REDIRECT,
    useLocation(),
  );
};

export {
  getPutZonesOnHoldPermission,
  usePutZonesOnHoldPermission,
  RequiresPutZonesOnHoldPermission,
  RequiresPutZonesOnHoldOutlet,
};
