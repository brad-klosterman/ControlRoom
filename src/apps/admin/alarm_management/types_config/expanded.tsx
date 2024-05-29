import { useMutation } from '@apollo/client';
import { useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  ALARM_TYPE_PRIORITY_OPTIONS,
  ALARM_TYPE_STACK_OPTIONS,
  getAlarmTypeStackAllocation,
} from 'apps/admin/alarm_management/types_config/form.values';
import { AlarmTypeForm } from 'apps/admin/alarm_management/types_config/types';
import {
  CORE_ALARM_TYPE_FRAGMENT,
  CREATE_ALARM_TYPE_DOCUMENT,
  DELETE_ALARM_TYPE_DOCUMENT,
  ALARM_TYPE_PARAMS,
  UPDATE_ALARM_TYPE_DOCUMENT,
} from 'codegen/graphql';
import { Button, Form, Grid } from 'components';
import { Expanded } from 'components/table';
import ControlledSelect from 'components/ui/Form/Field/Select/controlled';
import { ControlledTextArea } from 'components/ui/Form/Field/TextArea/controlled';
import { isRequired } from 'components/ui/Form/validation';
import Modal from 'components/ui/Modal/provider';
import { ControlledSwitch } from 'components/ui/Switch/controlled';
import useResponseStatus from 'hooks/use.response-status';
import { RequiresCreateAdminPermission } from 'src/app.state/permissions/hooks/create-admin.permission';
import { RequiresDestroyAdminPermission } from 'src/app.state/permissions/hooks/destroy-admin.permission';
import {
  RequiresUpdateAdminPermission,
  useCanUpdateAdmin,
} from 'src/app.state/permissions/hooks/update-admin.permission';

const ExpandedContent = ({
  item: alarm_type,
  onCancelCreating,
  refetch,
}: {
  item: CORE_ALARM_TYPE_FRAGMENT;
  refetch(): void;
  onCancelCreating?(): void;
}) => {
  const {
    alarm_description,
    alarm_type_name,
    description,
    message_to_user,
    priority,
    sends_push_notifications,
  } = alarm_type;
  const new_template = alarm_type.id === -1;
  const editable = useCanUpdateAdmin();

  const toast = useResponseStatus();
  const modal = useContext(Modal.Context);

  const form = useForm<AlarmTypeForm>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    form.reset({
      alarm_type_name,
      description,
      alarm_description,
      priority,
      stack_allocation: getAlarmTypeStackAllocation(alarm_type),
      message_to_user,
      sends_push_notifications,
    });
  }, [alarm_type]);

  const [create_alarm_type, { loading: create_loading }] = useMutation(
    CREATE_ALARM_TYPE_DOCUMENT,
  );
  const [update_alarm_type, { loading: update_loading }] = useMutation(
    UPDATE_ALARM_TYPE_DOCUMENT,
  );
  const [delete_alarm_type, { loading: delete_loading }] = useMutation(
    DELETE_ALARM_TYPE_DOCUMENT,
  );

  const onSubmit: SubmitHandler<AlarmTypeForm> = async fields => {
    const params: ALARM_TYPE_PARAMS = {
      alarm_type_name: fields.alarm_type_name,
      description: fields.description,
      alarm_description: fields.alarm_description,
      priority: fields.priority,
      message_to_user: fields.message_to_user,
      non_emc: fields.stack_allocation === 'NON_EMERGENCY',
      history: fields.stack_allocation === 'HISTORY',
      sends_push_notifications: fields.sends_push_notifications,
    };

    try {
      if (new_template) {
        await create_alarm_type({
          variables: { params },
        });

        toast.successAlert('CREATED ALARM_TYPE');
        refetch();
      } else {
        await update_alarm_type({
          variables: { id: alarm_type.id, params },
        });

        toast.successAlert('UPDATED ALARM_TYPE');
      }
    } catch (error: any) {
      toast.errorAlert('COULD NOT UPDATE ALARM_TYPE');
    }
  };

  const onDelete = async () => {
    modal.open({
      title: 'DELETING ALARM TYPE',
      subtitle: `Do you want to delete ${alarm_type_name}?`,
      actions: [
        { type: 'cancel' },
        { type: 'confirm_dangerous', text: 'DELETE' },
      ],
      async onConfirm() {
        try {
          await delete_alarm_type({
            variables: { id: alarm_type?.id },
          });

          toast.successAlert('DELETED ALARM TYPE');
          refetch();
          modal.close();
        } catch (error) {
          toast.errorAlert('COULD NOT DELETE ALARM TYPE');
        }
      },
    });
  };

  return (
    <Expanded full_border={new_template}>
      <Expanded.Inner>
        <Grid spacing="large">
          <Grid.Cell x={[0, 6]} y={[0, 1]}>
            <Form.Input
              control={form.control}
              disabled={!editable}
              label="Name"
              name="alarm_type_name"
              rules={{ required: true }}
            />
          </Grid.Cell>
          <Grid.Cell x={[0, 6]} y={[1, 2]}>
            <Form.Input
              control={form.control}
              disabled={!editable}
              label="Description"
              name="description"
              rules={{ required: true }}
            />
          </Grid.Cell>
          <Grid.Cell x={[0, 6]} y={[2, 3]}>
            <Form.Input
              control={form.control}
              disabled={!editable}
              label="Alarm Description"
              name="alarm_description"
            />
          </Grid.Cell>
          <Grid.Cell x={[0, 3]} y={[3, 4]}>
            <ControlledSelect
              control={form.control}
              disabled={!editable}
              label="Priority"
              name="priority"
              options={ALARM_TYPE_PRIORITY_OPTIONS}
              rules={isRequired}
            />
          </Grid.Cell>
          <Grid.Cell x={[3, 6]} y={[3, 4]}>
            <ControlledSelect
              control={form.control}
              disabled={!editable}
              label="Stack Allocation"
              name="stack_allocation"
              options={ALARM_TYPE_STACK_OPTIONS}
              rules={isRequired}
            />
          </Grid.Cell>
          <Grid.Cell x={[6, 12]} y={[0, 3]}>
            <ControlledTextArea
              control={form.control}
              disabled={!editable}
              label="Message to use"
              name="message_to_user"
            />
          </Grid.Cell>
          <Grid.Cell alignItems="flex-end" x={[6, 12]} y={[3, 4]}>
            <ControlledSwitch
              control={form.control}
              disabled={!editable}
              label="Sends Push Notifications"
              name="sends_push_notifications"
            />
          </Grid.Cell>
          <Grid.Cell
            alignItems="flex-end"
            justifyContent="flex-end"
            spacing="regular"
            x={[8, 12]}
            y={[5, 6]}
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
