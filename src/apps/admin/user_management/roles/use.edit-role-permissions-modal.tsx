import { useContext } from 'react';

import Modal from 'components/ui/Modal/provider';
import { USER_ROLE } from 'src/apollo/codegen/graphql';
import { useCanUpdateAdmin } from 'src/app.state/permissions/hooks/update-admin.permission';
import { usePermissionsContext } from 'src/app.state/permissions/provider';
import { LazyState } from 'src/utils/lazy';

import { EditRoleForm } from './edit.role.form';

interface UseEditRoleModalReturn {
  openEditRoleModal: (role: USER_ROLE) => void;
  closeEditRoleModal: () => void;
}

interface UserEditRoleModalParams {
  onSave: (role_id: number, permission_ids: number[]) => Promise<void>;
}

// TODO
// This whole modal is doing too much and is an anti pattern
// It would be much cleaner to have a simpler modal component
// with children that just uses CSS to put it above other elements
const useEditRoleModal = ({
  onSave,
}: UserEditRoleModalParams): UseEditRoleModalReturn => {
  const {
    state: { permissions },
  } = usePermissionsContext();
  const is_authorized_to_update_admin_section = useCanUpdateAdmin();
  const modal = useContext(Modal.Context);

  const saveAndClose = (role_id: number, permission_ids: number[]) => {
    onSave(role_id, permission_ids).then(() => {
      modal.close();
    });
  };

  const openEditRoleModal = (role: USER_ROLE) => {
    if (permissions.state !== LazyState.SUCCESS) {
      return;
    }

    modal.open({
      title: `Edit: ${role.name}`,
      component: () => (
        <EditRoleForm
          initial_permission_ids={role.permissions.map(
            permission => permission.id,
          )}
          is_form_disabled={!is_authorized_to_update_admin_section}
          onClose={modal.close}
          onSave={permission_ids => saveAndClose(role.id, permission_ids)}
          permissions={permissions.data}
        />
      ),
    });
  };

  return {
    openEditRoleModal,
    closeEditRoleModal: modal.close,
  };
};

export { useEditRoleModal };
