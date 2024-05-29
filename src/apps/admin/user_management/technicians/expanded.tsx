import { useMutation } from '@apollo/client';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  CORE_TECHNICIAN_FRAGMENT,
  CREATE_TECHNICIAN_DOCUMENT,
  DELETE_TECHNICIAN_DOCUMENT,
  TECHNICIAN_PARAMS,
  UPDATE_TECHNICIAN_DOCUMENT,
} from 'codegen/graphql';
import { Button, Form, Grid } from 'components';
import useResponseStatus from 'hooks/use.response-status';
import { RequiresCreateAdminPermission } from 'src/app.state/permissions/hooks/create-admin.permission';
import { RequiresDestroyAdminPermission } from 'src/app.state/permissions/hooks/destroy-admin.permission';
import {
  RequiresUpdateAdminPermission,
  useCanUpdateAdmin,
} from 'src/app.state/permissions/hooks/update-admin.permission';
import Modal from 'components/ui/Modal/provider';
import { Expanded } from 'components/table';

const ExpandedContent = ({
  item: technician,
  onCancelCreating,
  refetch,
}: {
  item: CORE_TECHNICIAN_FRAGMENT;
  refetch(): void;
  onCancelCreating?(): void;
}) => {
  const new_template = technician.id === -1;
  const editable = useCanUpdateAdmin();

  const toast = useResponseStatus();
  const modal = useContext(Modal.Context);

  const form = useForm<TECHNICIAN_PARAMS>({
    defaultValues: technician as TECHNICIAN_PARAMS,
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const [create_technician, { loading: create_loading }] = useMutation(
    CREATE_TECHNICIAN_DOCUMENT,
  );
  const [update_technician, { loading: update_loading }] = useMutation(
    UPDATE_TECHNICIAN_DOCUMENT,
  );
  const [delete_technician, { loading: delete_loading }] = useMutation(
    DELETE_TECHNICIAN_DOCUMENT,
  );

  const onSubmit: SubmitHandler<TECHNICIAN_PARAMS> = async fields => {
    const params = {
      name: fields.name,
      phone_number: fields.phone_number,
    };

    try {
      if (new_template) {
        await create_technician({
          variables: { params },
        });

        toast.successAlert('CREATED TECHNICIAN');
        refetch();
      } else {
        await update_technician({
          variables: { id: technician.id, params },
        });

        toast.successAlert('UPDATED TECHNICIAN');
      }
    } catch (error: any) {
      toast.errorAlert('COULD NOT UPDATE TECHNICIAN');
    }
  };

  const onDelete = async () => {
    const technician_name = form.getValues('name');

    modal.open({
      title: 'DELETING TECHNICIAN',
      subtitle: `Do you want to delete ${technician_name}?`,
      actions: [
        { type: 'cancel' },
        { type: 'confirm_dangerous', text: 'DELETE' },
      ],
      async onConfirm() {
        try {
          await delete_technician({
            variables: { id: technician?.id },
          });

          toast.successAlert('DELETED TECHNICIAN');
          refetch();
          modal.close();
        } catch (error) {
          toast.errorAlert('COULD NOT DELETE TECHNICIAN');
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
              label="Name"
              name="name"
              rules={{ required: true }}
            />
          </Grid.Cell>
          <Grid.Cell x={[4, 8]} y={[0, 1]}>
            <Form.Input
              control={form.control}
              disabled={!editable}
              label="Phone Number"
              name="phone_number"
              rules={{ required: true }}
            />
          </Grid.Cell>
          <Grid.Cell
            alignItems="flex-end"
            justifyContent="flex-end"
            spacing="regular"
            x={[8, 12]}
            y={[0, 1]}
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
                  disabled={!form.formState.isValid}
                  isLoading={create_loading}
                  onClick={form.handleSubmit(onSubmit)}
                >
                  CREATE
                </Button>
              </RequiresCreateAdminPermission>
            ) : (
              <RequiresUpdateAdminPermission>
                <Button
                  disabled={!form.formState.isValid}
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
