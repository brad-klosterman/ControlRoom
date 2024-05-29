import { useMutation } from '@apollo/client';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Areas from 'apps/admin/company_settings/areas/provider';
import {
  CORE_RESPONDER_FRAGMENT,
  CREATE_RESPONDER_DOCUMENT,
  DELETE_RESPONDER_DOCUMENT,
  RESPONDER_PARAMS,
  UPDATE_RESPONDER_DOCUMENT,
} from 'codegen/graphql';
import { Button, Form, Grid } from 'components';
import { Expanded } from 'components/table';
import ControlledMultiSelect from 'components/ui/Form/Field/MultiSelect/controlled';
import Modal from 'components/ui/Modal/provider';
import useResponseStatus from 'hooks/use.response-status';
import { RequiresCreateAdminPermission } from 'src/app.state/permissions/hooks/create-admin.permission';
import { RequiresDestroyAdminPermission } from 'src/app.state/permissions/hooks/destroy-admin.permission';
import {
  RequiresUpdateAdminPermission,
  useCanUpdateAdmin,
} from 'src/app.state/permissions/hooks/update-admin.permission';

const ExpandedContent = ({
  item: responder,
  onCancelCreating,
  refetch,
}: {
  item: CORE_RESPONDER_FRAGMENT;
  refetch(): void;
  onCancelCreating?(): void;
}) => {
  const new_template = responder.id === -1;
  const editable = useCanUpdateAdmin();

  const toast = useResponseStatus();
  const modal = useContext(Modal.Context);

  const { areas_select } = Areas.useContext();

  const form = useForm<RESPONDER_PARAMS>({
    defaultValues: responder as RESPONDER_PARAMS,
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const [create_responder, { loading: create_loading }] = useMutation(
    CREATE_RESPONDER_DOCUMENT,
  );
  const [update_responder, { loading: update_loading }] = useMutation(
    UPDATE_RESPONDER_DOCUMENT,
  );
  const [delete_responder, { loading: delete_loading }] = useMutation(
    DELETE_RESPONDER_DOCUMENT,
  );

  const onSubmit: SubmitHandler<RESPONDER_PARAMS> = async fields => {
    const params = {
      email: fields.email,
      password: fields.password,
      password_confirmation: fields.password_confirmation,
      name: fields.name,
      area_ids: fields.area_ids,
    };

    try {
      if (new_template) {
        await create_responder({
          variables: { params },
        });

        toast.successAlert('CREATED RESPONDER');
        refetch();
      } else {
        await update_responder({
          variables: { id: responder.id, params },
        });

        toast.successAlert('UPDATED RESPONDER');
      }
    } catch (error: any) {
      toast.errorAlert('COULD NOT UPDATE RESPONDER');
    }
  };

  const onDelete = async () => {
    const responder_name = form.getValues('name');

    modal.open({
      title: 'DELETING RESPONDER',
      subtitle: `Do you want to delete ${responder_name}?`,
      actions: [
        { type: 'cancel' },
        { type: 'confirm_dangerous', text: 'DELETE' },
      ],
      async onConfirm() {
        try {
          await delete_responder({
            variables: { id: responder?.id },
          });

          toast.successAlert('DELETED RESPONDER');
          refetch();
          modal.close();
        } catch (error) {
          toast.errorAlert('COULD NOT DELETE RESPONDER');
        }
      },
    });
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
              name="name"
              rules={{ required: true }}
            />
          </Grid.Cell>
          <Grid.Cell x={[4, 8]} y={[0, 1]}>
            <Form.Input
              control={form.control}
              disabled={!editable}
              label="Email"
              name="email"
              rules={{ required: true }}
            />
          </Grid.Cell>
          <Grid.Cell x={[8, 12]} y={[0, 1]}>
            <ControlledMultiSelect
              control={form.control}
              disabled={!editable}
              label="Areas"
              name="area_ids"
              options={areas_select}
            />
          </Grid.Cell>
          <Grid.Cell x={[0, 4]} y={[1, 2]}>
            <Form.Input
              control={form.control}
              disabled={!editable}
              label="Password (min 8 char)"
              min={8}
              name="password"
            />
          </Grid.Cell>
          <Grid.Cell x={[4, 8]} y={[1, 2]}>
            <Form.Input
              control={form.control}
              disabled={!editable}
              label="Confirm Password (min 8 char)"
              min={8}
              name="password_confirmation"
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
              <Button onClick={onCancelCreating} variant="delete">
                CANCEL
              </Button>
            )}
            {new_template ? (
              <RequiresCreateAdminPermission>
                <Button
                  isLoading={create_loading}
                  onClick={form.handleSubmit(onSubmit)}
                >
                  CREATE
                </Button>
              </RequiresCreateAdminPermission>
            ) : (
              <RequiresUpdateAdminPermission>
                <Button
                  isLoading={update_loading}
                  onClick={form.handleSubmit(onSubmit)}
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
