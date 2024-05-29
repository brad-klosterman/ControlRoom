import { useState } from 'react';

import { PERMISSION } from 'src/apollo/codegen/graphql';
import { Button, Checkbox, Grid } from 'src/components';
import { useTheme } from 'styled-components';

const areNumericalArrayElementsEqual = (a: number[], b: number[]): boolean => {
  const sorted_a = [...a].sort();
  const sorted_b = [...b].sort();
  return JSON.stringify(sorted_a) === JSON.stringify(sorted_b);
};

interface PermissionCheckboxRowProps {
  permission: PERMISSION;
  is_checked: boolean;
  onChange: (permission: PERMISSION, is_checked: boolean) => unknown;
  is_disabled?: boolean;
}

const PermissionCheckboxRow = ({
  is_checked,
  onChange,
  permission,
  is_disabled,
}: PermissionCheckboxRowProps) => {
  const theme = useTheme();

  const onCheckboxClicked = (value: boolean) => {
    onChange(permission, value);
  };

  const getTextColor = (): string | undefined => {
    return is_checked ? theme.colors.success[700] : undefined;
  };

  return (
    <Grid repeat={6}>
      <Grid.Cell x={[0, 5]} y={[0, 1]}>
        <p
          style={{
            color: getTextColor(),
          }}
        >
          {permission.name}
        </p>
      </Grid.Cell>
      <Grid.Cell x={[5, 6]} y={[0, 1]}>
        <Checkbox
          onChange={onCheckboxClicked}
          value={is_checked}
          disabled={is_disabled}
        />
      </Grid.Cell>
    </Grid>
  );
};

interface EditRoleProps {
  initial_permission_ids: number[];
  permissions: PERMISSION[];
  onClose: () => unknown;
  onSave: (permission_ids: number[]) => unknown;
  is_form_disabled?: boolean;
}

const RolePermissionsForm = ({
  initial_permission_ids,
  onClose,
  onSave,
  permissions,
  is_form_disabled,
}: EditRoleProps) => {
  const [selected_permission_ids, setSelectedPermissionIds] = useState<
    number[]
  >(initial_permission_ids);

  const removePermission = (permission: PERMISSION): void => {
    const permission_set = new Set(selected_permission_ids);
    permission_set.delete(permission.id);
    setSelectedPermissionIds(Array.from(permission_set));
  };

  const addPermission = (permission: PERMISSION): void => {
    setSelectedPermissionIds([...selected_permission_ids, permission.id]);
  };

  const isPermissionSelected = (permission: PERMISSION): boolean => {
    return selected_permission_ids.includes(permission.id);
  };

  const onPermissionClick = (
    permission: PERMISSION,
    is_checked: boolean,
  ): void => {
    if (is_checked) {
      addPermission(permission);
    } else {
      removePermission(permission);
    }
  };

  const hasFormChanged = () => {
    return !areNumericalArrayElementsEqual(
      initial_permission_ids,
      selected_permission_ids,
    );
  };

  return (
    <div>
      {permissions.map(permission => (
        <PermissionCheckboxRow
          is_checked={isPermissionSelected(permission)}
          key={permission.id}
          onChange={onPermissionClick}
          permission={permission}
          is_disabled={is_form_disabled}
        />
      ))}
      <div style={{ paddingTop: '1rem' }}>
        <Grid repeat={1}>
          <Grid.Cell x={[0, 1]} y={[0, 1]}>
            <Button onClick={onClose} variant="secondary">
              Close
            </Button>
          </Grid.Cell>
          {!is_form_disabled && (
            <Grid.Cell x={[1, 2]} y={[0, 1]}>
              <Button
                disabled={!hasFormChanged()}
                onClick={() => onSave(selected_permission_ids)}
                variant="success"
              >
                Save
              </Button>
            </Grid.Cell>
          )}
        </Grid>
      </div>
    </div>
  );
};

export { RolePermissionsForm as EditRoleForm };
