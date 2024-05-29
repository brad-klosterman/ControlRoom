import { useRolesContext } from 'src/app.state/roles/provider';
import { LazyState } from 'src/utils/lazy';
import styled, { css } from 'styled-components';

import { useEditRoleModal } from './use.edit-role-permissions-modal';

const StyledRow = styled.div(
  ({ theme }) => css`
    cursor: pointer;
    width: 100%;
    padding: 1rem;
    margin-bottom: 0.5rem;
    background-color: ${theme.colors.base[100]};

    &:hover {
      background-color: ${theme.colors.base[300]};
    }
  `,
);

// TODO
// Clean this up
// Ensure that:
// - If the role is attached to the user, it updates the local state and session storage
// - A success or error toast is presented on stage
// - Create role is implemented
// - Roles are updated / refreshed upon save to ensure that data is consistent
const RolesRoute = () => {
  const {
    actions,
    state: { roles },
  } = useRolesContext();

  const updateRole = async (
    role_id: number,
    permission_ids: number[],
  ): Promise<void> => {
    await actions.updateRole(role_id, {
      permission_ids,
    });
  };

  if (roles.state !== LazyState.SUCCESS) {
    return null;
  }

  const { openEditRoleModal } = useEditRoleModal({
    onSave: updateRole,
  });

  return (
    <div>
      {roles.data.map(role => (
        <StyledRow onClick={() => openEditRoleModal(role)}>
          <p>{role.name}</p>
        </StyledRow>
      ))}
    </div>
  );
};

export { RolesRoute };
