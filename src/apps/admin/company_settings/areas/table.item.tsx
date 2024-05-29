import { useMutation } from '@apollo/client';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AreaFormParams } from 'apps/admin/company_settings/areas/types';
import {
  CORE_AREA_FRAGMENT,
  CREATE_SSP_AREA_DOCUMENT,
  DISCARD_SSP_AREA_DOCUMENT,
  UPDATE_SSP_AREA_DOCUMENT,
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
import { IOptionNumber } from 'components/ui/Form/Options';
import { Expanded } from 'components/table';

const ExpandedContent = (props: {
  item: CORE_AREA_FRAGMENT;
  areas_select: IOptionNumber[];
  onCancelCreating?(): void;
  refetch(): void;
}) => {
  const area = props.item;
  const new_template = area.id === -1;
  const editable = useCanUpdateAdmin();

  const toast = useResponseStatus();
  const modal = useContext(Modal.Context);

  const form = useForm<AreaFormParams>({
    defaultValues: {
      name: area.name || '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const [createArea, { loading: create_loading }] = useMutation(
    CREATE_SSP_AREA_DOCUMENT,
  );
  const [updateArea, { loading: update_loading }] = useMutation(
    UPDATE_SSP_AREA_DOCUMENT,
  );
  const [deleteArea, { loading: delete_loading }] = useMutation(
    DISCARD_SSP_AREA_DOCUMENT,
  );

  const onSubmit: SubmitHandler<AreaFormParams> = async fields => {
    try {
      if (new_template) {
        await createArea({
          variables: {
            name: fields.name,
          },
        });

        toast.successAlert('CREATED AREA');
        props.refetch();
      } else {
        await updateArea({
          variables: { id: area.id, name: fields.name },
        });

        toast.successAlert('UPDATED AREA');
        props.refetch();
      }
    } catch (error: any) {
      toast.errorAlert('COULD NOT UPDATE AREA');
    }
  };

  const onDelete = async () => {
    const area_name = form.getValues('name');

    modal.open({
      title: `DELETING AREA (${area_name})`,
      subtitle: `Please select which area to reassign the transmitters.`,
      actions: [
        { type: 'cancel' },
        { type: 'confirm_dangerous', text: 'DELETE' },
      ],
      form: [
        {
          label: 'Reassign Transmitters to Area',
          name: 'new_area',
          options: props.areas_select,
          type: 'Select',
        },
      ],
      async onConfirm(form_params: any) {
        try {
          await deleteArea({
            variables: {
              id: area.id,
              reassign_to_area: parseInt(form_params.new_area),
            },
          });

          toast.successAlert('DELETED AREA');
          props.refetch();
          modal.close();
        } catch (error) {
          toast.errorAlert('COULD NOT DELETE AREA');
        }
      },
    });
  };

  return (
    <Expanded full_border={new_template}>
      <Expanded.Inner>
        <Grid spacing="large">
          <Grid.Cell x={[0, 8]} y={[0, 1]}>
            <Form.Input
              control={form.control}
              disabled={!editable}
              label="Name"
              name="name"
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
              <Button onClick={props.onCancelCreating} variant="delete">
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
