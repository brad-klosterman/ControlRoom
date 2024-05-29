import { useMutation } from '@apollo/client';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  TEST_CYCLE_FAILED_TO_TEST_OPTIONS,
  TRANSMITTER_SET_NAMES_OPTIONS,
  TRANSMITTER_STATUS_OPTIONS,
} from 'apps/admin/company_settings/transmitters/form.values';
import {
  CORE_TRANSMITTER_FRAGMENT,
  CREATE_TRANSMITTER_DOCUMENT,
  UPDATE_TRANSMITTER_DOCUMENT,
  UPDATE_TRANSMITTER_PARAMS,
} from 'codegen/graphql';
import { Button, Form, Grid } from 'components';
import { Expanded } from 'components/table';
import ControlledSelect from 'components/ui/Form/Field/Select/controlled';
import { IOptionNumber, IOptionString } from 'components/ui/Form/Options';
import Modal from 'components/ui/Modal/provider';
import useResponseStatus from 'hooks/use.response-status';
import { RequiresCreateAdminPermission } from 'src/app.state/permissions/hooks/create-admin.permission';
import { RequiresDestroyAdminPermission } from 'src/app.state/permissions/hooks/destroy-admin.permission';
import {
  RequiresUpdateAdminPermission,
  useCanUpdateAdmin,
} from 'src/app.state/permissions/hooks/update-admin.permission';

const ExpandedContent = ({
  area_selects,
  decoder_names,
  item: transmitter,
  onCancelCreating,
  refetch,
}: {
  item: CORE_TRANSMITTER_FRAGMENT;
  onCancelCreating?(): void;
  refetch(): void;
  area_selects: IOptionNumber[];
  decoder_names: IOptionString[];
}) => {
  const new_template = transmitter.id === -1;
  const editable = useCanUpdateAdmin();

  const toast = useResponseStatus();
  const modal = useContext(Modal.Context);

  const form = useForm<CORE_TRANSMITTER_FRAGMENT>({
    defaultValues: transmitter as CORE_TRANSMITTER_FRAGMENT,
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const [create_transmitter, { loading: create_loading }] = useMutation(
    CREATE_TRANSMITTER_DOCUMENT,
  );
  const [update_transmitter, { loading: update_loading }] = useMutation(
    UPDATE_TRANSMITTER_DOCUMENT,
  );
  // const [delete_transmitter, { loading: delete_loading }] = useMutation(
  //   DELETE_TRANSMITTER_DOCUMENT,
  // );

  const onSubmit: SubmitHandler<CORE_TRANSMITTER_FRAGMENT> = async fields => {
    const params: UPDATE_TRANSMITTER_PARAMS = {
      number: fields.number || '',
      description: fields.description,
      set_name: fields.set_name || '',
      area_id: fields.area?.id,
      decoder_name: fields.decoder?.name,
      heartbeat_interval: fields.heartbeat_interval,
    };

    try {
      if (new_template) {
        await create_transmitter({
          variables: {
            params: {
              ...params,
              decoder_name: params.decoder_name!,
              number: params.number!,
              set_name: params.set_name!,
            },
          },
        });

        toast.successAlert('CREATED TRANSMITTER');
        refetch();
      } else {
        await update_transmitter({
          variables: { id: transmitter.id, params },
        });

        toast.successAlert('UPDATED TRANSMITTER');
      }
    } catch (error: any) {
      toast.errorAlert('COULD NOT UPDATE TRANSMITTER');
    }
  };

  const onDelete = async () => {
    const transmitter_name = form.getValues('number');

    modal.open({
      title: 'DELETING TRANSMITTER',
      subtitle: `Do you want to delete ${transmitter_name}?`,
      actions: [
        { type: 'cancel' },
        { type: 'confirm_dangerous', text: 'DELETE' },
      ],
      async onConfirm() {
        // try {
        //   await delete_transmitter({
        //     variables: { id: transmitter?.id },
        //   });
        //
        //   toast.successAlert('DELETED TRANSMITTER');
        //   refetch();
        //   modal.close();
        // } catch (error) {
        //   toast.errorAlert('COULD NOT DELETE TRANSMITTER');
        // }
      },
    });
  };

  return (
    <Expanded full_border={new_template}>
      <Expanded.Inner>
        <Grid spacing="large">
          <Grid.Cell x={[0, 3]} y={[0, 1]}>
            <Form.Input
              control={form.control}
              disabled={!editable}
              label="Transmitter ID"
              name="number"
              rules={{ required: true }}
            />
          </Grid.Cell>
          <Grid.Cell x={[3, 9]} y={[0, 1]}>
            <Form.Input
              control={form.control}
              disabled={!editable}
              label="Description (Optional)"
              name="description"
            />
          </Grid.Cell>
          <Grid.Cell x={[9, 12]} y={[0, 1]}>
            <ControlledSelect
              control={form.control}
              disabled={!editable}
              label="Set Name"
              name="set_name"
              options={TRANSMITTER_SET_NAMES_OPTIONS}
            />
          </Grid.Cell>

          <Grid.Cell x={[0, 3]} y={[1, 2]}>
            <ControlledSelect
              control={form.control}
              disabled={true}
              label="Status"
              name="status"
              options={TRANSMITTER_STATUS_OPTIONS}
            />
          </Grid.Cell>
          <Grid.Cell x={[3, 6]} y={[1, 2]}>
            <ControlledSelect
              control={form.control}
              disabled={!editable}
              label="Area"
              name="area.id"
              options={area_selects}
            />
          </Grid.Cell>
          <Grid.Cell x={[6, 9]} y={[1, 2]}>
            <ControlledSelect
              control={form.control}
              disabled={!editable}
              label="Decoder"
              name="decoder.name"
              options={decoder_names}
            />
          </Grid.Cell>
          <Grid.Cell x={[9, 12]} y={[1, 2]}>
            <ControlledSelect
              control={form.control}
              disabled={!editable}
              label="Test Cycle (hours)"
              name="heartbeat_interval"
              options={TEST_CYCLE_FAILED_TO_TEST_OPTIONS}
            />
          </Grid.Cell>

          <Grid.Cell
            alignItems="flex-end"
            spacing="regular"
            x={[0, 6]}
            y={[2, 3]}
          >
            <Button disabled={true} variant="info-secondary">
              VIEW PROPERTY
            </Button>
          </Grid.Cell>
          <Grid.Cell
            alignItems="flex-end"
            justifyContent="flex-end"
            spacing="regular"
            x={[6, 12]}
            y={[2, 3]}
          >
            {!new_template ? (
              <RequiresDestroyAdminPermission>
                <Button
                  // disabled={delete_loading}
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
