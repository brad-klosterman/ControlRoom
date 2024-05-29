import { useMutation } from '@apollo/client';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  CORE_DECODER_FRAGMENT,
  CREATE_DECODER_DOCUMENT,
  DELETE_DECODER_DOCUMENT,
  UPDATE_DECODER_DOCUMENT,
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

import { type DecodersFormParams } from './types';

const ExpandedContent = (props: {
  item: CORE_DECODER_FRAGMENT;
  onCancelCreating?(): void;
  refetch(): void;
}) => {
  const decoder = props.item;
  const new_template = decoder.id === -1;
  const editable = useCanUpdateAdmin();

  const toast = useResponseStatus();
  const modal = useContext(Modal.Context);

  const form = useForm<DecodersFormParams>({
    defaultValues: {
      name: decoder.name || '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const [createDecoder, { loading: create_loading }] = useMutation(
    CREATE_DECODER_DOCUMENT,
  );
  const [updateDecoder, { loading: update_loading }] = useMutation(
    UPDATE_DECODER_DOCUMENT,
  );
  const [deleteDecoder, { loading: delete_loading }] = useMutation(
    DELETE_DECODER_DOCUMENT,
  );

  const onSubmit: SubmitHandler<DecodersFormParams> = async fields => {
    try {
      if (new_template) {
        await createDecoder({
          variables: {
            params: { decoder_name: fields.name },
          },
        });

        toast.successAlert('CREATED DECODER');
        props.refetch();
      } else {
        await updateDecoder({
          variables: {
            params: { decoder_id: decoder.id, decoder_name: fields.name },
          },
        });

        toast.successAlert('UPDATED DECODER');
        props.refetch();
      }
    } catch (error: any) {
      toast.errorAlert('COULD NOT UPDATE DECODER');
    }
  };

  const onDelete = async () => {
    const decoder_name = form.getValues('name');

    modal.open({
      title: `DELETING DECODER`,
      subtitle: `Are you sure you want to delete ${decoder_name}`,
      actions: [
        { type: 'cancel' },
        { type: 'confirm_dangerous', text: 'DELETE' },
      ],
      async onConfirm() {
        try {
          await deleteDecoder({
            variables: {
              id: decoder.id,
            },
          });

          toast.successAlert('DELETED DECODER');
          props.refetch();
          modal.close();
        } catch (error) {
          toast.errorAlert('COULD NOT DELETE DECODER');
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
