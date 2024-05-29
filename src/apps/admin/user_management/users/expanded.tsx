import { useMutation } from '@apollo/client';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  AGENT,
  AGENT_PARAMS,
  CREATE_AGENT_DOCUMENT,
  DELETE_AGENT_DOCUMENT,
  UPDATE_AGENT_DOCUMENT,
} from 'codegen/graphql';
import useResponseStatus from 'hooks/use.response-status';
import { RequiresCreateAdminPermission } from 'src/app.state/permissions/hooks/create-admin.permission';
import { RequiresDestroyAdminPermission } from 'src/app.state/permissions/hooks/destroy-admin.permission';
import {
  RequiresUpdateAdminPermission,
  useCanUpdateAdmin,
} from 'src/app.state/permissions/hooks/update-admin.permission';
import { useRolesContext } from 'src/app.state/roles/provider';
import { LazyState } from 'utils/lazy';
import { Expanded } from 'components/table';
import { Button, Form, Grid, Modal } from 'components/ui';
import { type IOption } from 'components/ui/Form';

const ExpandedContent = (props: {
  item: AGENT;
  refetch(): void;
  onCancelCreating?(): void;
}) => {
  const user = props.item;
  const new_template = props.item.id === -1;
  const editable = useCanUpdateAdmin();

  const toast = useResponseStatus();
  const modal = Modal.useContext();

  const {
    state: { roles },
  } = useRolesContext();

  const form = useForm<AGENT_PARAMS>({
    defaultValues: user,
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const watch_password = form.watch('password');

  const [create_user, { loading: create_loading }] = useMutation(
    CREATE_AGENT_DOCUMENT,
  );
  const [update_user, { loading: update_loading }] = useMutation(
    UPDATE_AGENT_DOCUMENT,
  );
  const [delete_user, { loading: delete_loading }] = useMutation(
    DELETE_AGENT_DOCUMENT,
  );

  const onSubmitForm: SubmitHandler<AGENT_PARAMS> = async fields => {
    const params: AGENT_PARAMS = {
      username: fields.username,
      role_id: fields.role_id,
      email: fields.email,
      // password: fields.password,
      // password_confirmation: fields.password_confirmation,
    };

    if (
      fields.password?.length &&
      fields.password !== fields.password_confirmation
    ) {
      form.setError('password', {
        type: 'manual',
        message: 'Passwords do not match.',
      });

      form.setError('password_confirmation', {
        type: 'manual',
        message: 'Passwords do not match.',
      });

      return;
    } else if (fields.password?.length) {
      params.password = fields.password;
      params.password_confirmation = fields.password_confirmation;
    }

    try {
      if (new_template) {
        await create_user({
          variables: { params },
        });
      } else {
        await update_user({
          variables: { id: user.id, params },
        });
      }

      toast.successAlert(`USER ${new_template ? 'CREATED' : 'UPDATED'}`);
      props.refetch();
    } catch (error: any) {
      toast.errorAlert(`COULD NOT ${new_template ? 'CREATE' : 'UPDATE'} USER`);
    }
  };

  const onDelete = async () => {
    const user_name = form.getValues('username');

    modal.open({
      title: 'DELETING USER',
      subtitle: `Do you want to delete ${user_name}?`,
      actions: [
        { type: 'cancel' },
        { type: 'confirm_dangerous', text: 'DELETE' },
      ],
      async onConfirm() {
        try {
          await delete_user({
            variables: { agent_id: user?.id },
          });

          toast.successAlert('DELETED USER');
          props.refetch();
          modal.close();
        } catch (error) {
          toast.errorAlert('COULD NOT DELETE USER');
        }
      },
    });
  };

  const createRoleSelectionOptions = (): IOption[] => {
    if (roles.state !== LazyState.SUCCESS) return [];

    return roles.data.map(role => ({
      value: role.id,
      label: role.name,
    }));
  };

  return (
    <Expanded full_border={new_template}>
      <Expanded.Inner>
        <Grid spacing="large">
          <Grid.Cell x={[0, 4]} y={[0, 1]}>
            <Form.Input
              control={form.control}
              disabled={!editable}
              label="User Name"
              name="username"
              rules={{ required: true }}
            />
          </Grid.Cell>
          <Grid.Cell x={[4, 8]} y={[0, 1]}>
            <Form.Select
              control={form.control}
              disabled={!editable}
              label="Role"
              name="role_id"
              options={createRoleSelectionOptions()}
              rules={{ required: true }}
            />
          </Grid.Cell>
          <Grid.Cell x={[8, 12]} y={[0, 1]}>
            <Form.Input
              control={form.control}
              disabled={!editable}
              label="Email"
              name="email"
              rules={{ required: true }}
            />
          </Grid.Cell>
          <Grid.Cell x={[0, 4]} y={[1, 2]}>
            <Form.Input
              control={form.control}
              disabled={!editable}
              label="Password (min 8 char)"
              name="password"
              rules={{ required: new_template, minLength: 8 }}
              type="password"
            />
          </Grid.Cell>
          <Grid.Cell x={[4, 8]} y={[1, 2]}>
            <Form.Input
              control={form.control}
              disabled={!editable}
              label="Confirm Password"
              name="password_confirmation"
              rules={{
                required: Boolean(new_template || watch_password?.length),
              }}
            />
          </Grid.Cell>
          <Grid.Cell
            alignItems="flex-end"
            justifyContent="flex-end"
            spacing="regular"
            x={[8, 12]}
            y={[1, 2]}
          >
            {!new_template ? (
              <RequiresDestroyAdminPermission>
                <Button
                  disabled={delete_loading}
                  onClick={onDelete}
                  variant="delete"
                >
                  DELETE
                </Button>
              </RequiresDestroyAdminPermission>
            ) : (
              <Button onClick={props.onCancelCreating} variant="delete">
                CANCEL
              </Button>
            )}
            {new_template ? (
              <RequiresCreateAdminPermission>
                <Button
                  isLoading={create_loading}
                  onClick={form.handleSubmit(onSubmitForm)}
                >
                  CREATE
                </Button>
              </RequiresCreateAdminPermission>
            ) : (
              <RequiresUpdateAdminPermission>
                <Button
                  isLoading={update_loading}
                  onClick={form.handleSubmit(onSubmitForm)}
                >
                  SAVE
                </Button>
              </RequiresUpdateAdminPermission>
            )}
          </Grid.Cell>
        </Grid>
      </Expanded.Inner>
    </Expanded>
  );
};

export default ExpandedContent;
