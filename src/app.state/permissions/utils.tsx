import { ReactNode } from 'react';
import { Location, Navigate, Outlet } from 'react-router-dom';

import { PERMISSION } from 'codegen/graphql';

type SubjectClass =
  | 'accounting'
  | 'admin_accounting'
  | 'admin_section'
  | 'alarms'
  | 'alarms_history'
  | 'billing_info'
  | 'companies'
  | 'statistics'
  | 'zones';

type PermissionAction =
  | 'read'
  | 'update'
  | 'destroy'
  | 'manage'
  | 'create'
  | 'clear'
  | 'suspend'
  | 'export'
  | 'on-hold';

type PermissionAccess = 'UNKNOWN' | 'ALLOWED' | 'DENIED';

/**
 * Determine if there is a matching permission
 *
 * If the user has at least on permission with a matching subject_class
 * and if at *at least one* action is present, then it will be deemed
 * that the user has permission.
 *
 * @param permissions The user to base the permission test against.
 * @param subject_class The domain of which this permission test is aimed at.
 * @param matching_actions * Array of actions need to compare against.
 * @returns True if the user has at least on matching permission. False otherwise.
 *
 * @example
   * doesUserHaveRequiredPermissions({
   *    user,
   *    subject_class: 'alarms',
   *    matching_actions: ['read', 'update', 'destroy', 'manage']
   * })

   * // This would return true even if the user only has one permission,
   * // that has a subject_class of 'alarms' and only the action of 'read'
   */
const _hasMatchingPermission = (
  permissions: PERMISSION[],
  subject_class: SubjectClass,
  matching_actions: PermissionAction[],
): boolean => {
  const actions_to_match: string[] = matching_actions;
  return permissions.some(permission => {
    if (permission.subject_class !== subject_class) {
      return false;
    }

    return actions_to_match.includes(permission.action);
  });
};

namespace PermissionUtils {
  /**
     * Determine whether the permission access based upon the list of permissions.
     *
     * If there is at least on permission with a matching subject_class
     * and if at *at least one* action is present, then it will be deemed
     * that the user has permission.
     *
     * If the user is undefined, this will always return `"UNKNOWN"`
     *
     * @param permissions The user to base the permission test against.
     * @param subject_class The domain of which this permission test is aimed at.
     * @param matching_actions * Array of actions need to compare against.
     * @returns True if the user has at least on matching permission. False otherwise.
     *
     * @example
     * doesUserHaveRequiredPermissions({
     *    [{
     *        action: "read",
     *        id: 1,
     *        name: "View all incoming alarms",
     *        subject_class: "alarms"
     *    }],
     *    subject_class: 'alarms',
     *    matching_actions: ['read', 'update', 'destroy', 'manage']
     * })

    * // The above example would return 'ALLOWED' because the permission array has
    * // one element that has a subject_class of 'alarms' and the action of 'read'
    */
  export const determinePermissionAccess = (
    permissions: PERMISSION[] | undefined,
    subject_class: SubjectClass,
    matching_actions: PermissionAction[],
  ): PermissionAccess => {
    if (!permissions) {
      return 'UNKNOWN';
    }

    const has_permission = _hasMatchingPermission(
      permissions,
      subject_class,
      matching_actions,
    );

    if (!has_permission) {
      return 'DENIED';
    }

    return 'ALLOWED';
  };

  /**
   * Deterministically restrict the render of children based upon
   * the permission access
   *
   * @param permission_access The permission access for determining if children should be rendered
   * @param children The children to render if allowed
   * @returns The react node children if allowed, or else null.
   */
  export const createRestrictedRender = (
    permission_access: PermissionAccess,
    children: ReactNode,
  ): ReactNode => {
    if (permission_access !== 'ALLOWED') {
      return null;
    }

    return children;
  };

  /**
   * Create a restricted outlet route that only allows further route
   * render if allowed.
   *
   * In cases where permissions are unknown, null will be returned.
   *
   * In cases where permission is not granted, a redirect route will
   * be rendered instead.
   *
   * @param permission_access The permission access for determining if outlet should be rendered
   * @param redirect The route to redirect to if permission is not allowed
   * @param location The location object used for proper replace navigation
   */
  export const createRestrictedOutlet = (
    permission_access: PermissionAccess,
    redirect: string,
    location: Location,
  ): JSX.Element | null => {
    switch (permission_access) {
      case 'UNKNOWN':
        return null;
      case 'DENIED':
        return <Navigate replace state={{ from: location }} to={redirect} />;
      case 'ALLOWED':
        return <Outlet />;
    }
  };
}

export type { SubjectClass, PermissionAction, PermissionAccess };
export { PermissionUtils };
