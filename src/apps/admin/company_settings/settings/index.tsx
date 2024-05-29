import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { AlarmTypeSelector } from 'apps/admin/alarm_management/types_config/selector';
import { useSSPSettingsContext } from 'apps/admin/company_settings/settings/provider';
import { FormGrid, RouteGrid } from 'apps/customers/customer/styles';
import { RouteWrap } from 'apps/dashboard/style';
import { CLOSE_ALARMS_DOCUMENT } from 'codegen/graphql';
import { Button, Form, Grid } from 'components';
import {
  RequiresClearAlarmStackPermission,
  useCanClearAlarmStack,
} from 'src/app.state/permissions/hooks/clear-alarm-stack.permission';
import SSPProvider from 'src/app.state/ssp/provider';
import { useResponseStatus } from 'src/hooks';
import { BasicSelect } from 'components/ui/Form/Field/Select/select.components';
import { type IOption } from 'components/ui/Form/Options';
import { isRequired } from 'components/ui/Form/validation';
import Modal from 'components/ui/Modal/provider';

import { ALARM_STACK_OPTIONS, ALARM_STACK_SELECT } from './form.options';

const AdminSettingsRoute = () => {
  const { cancel_alarm_reasons } = SSPProvider.useContext();
  const { ssp_settings } = useSSPSettingsContext();

  const is_authorized_to_clear_alarm_stack = useCanClearAlarmStack();
  const [clear_reasons, setClearReasons] = useState<IOption[]>();
  const [selected_alarm_type, setSelectedAlarmType] = useState<
    string | undefined
  >();
  const [selected_alarm_stack, setSelectedAlarmStack] =
    useState<ALARM_STACK_SELECT>({
      label: 'EMERGENCY ALARMS',
      value: 'EMERGENCY',
    });

  useEffect(() => {
    setClearReasons(
      cancel_alarm_reasons.map(current => ({
        label: current,
        value: current,
      })),
    );
  }, [cancel_alarm_reasons]);

  const form = useForm<{
    name: string | null | undefined;
    email: string | null | undefined;
    reaction_test_time: number | null | undefined;
    responsetime: number | null | undefined;
    timeout: number | null | undefined;
  }>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    if (ssp_settings)
      form.reset({
        name: ssp_settings.name,
        email: ssp_settings.email,
        reaction_test_time: ssp_settings.reaction_test_time,
        responsetime: ssp_settings.responsetime,
        timeout: ssp_settings.timeout,
      });
  }, [ssp_settings]);

  const toast = useResponseStatus();
  const modal = useContext(Modal.Context);

  const [close_alarms, { loading }] = useMutation(CLOSE_ALARMS_DOCUMENT);

  const handleClearStack = () => {
    modal.open({
      title: 'ARE YOU SURE?',
      subtitle: 'This will clear active alarms in the stack.',
      actions: [{ type: 'cancel' }, { type: 'confirm_dangerous' }],
      form: [
        {
          label: 'Select A Reasons For Cancel',
          name: 'clear_reason',
          options: clear_reasons || [],
          type: 'Select',
          required: true,
        },
      ],
      onConfirm: async (params: any) => {
        try {
          await close_alarms({
            variables: {
              alarm_stack: selected_alarm_stack.value,
              alarm_type: selected_alarm_type ? selected_alarm_type : '',
              close_reason: params.clear_reason,
            },
          });

          toast.successAlert('SUCCESSFULLY CLEARED ALARM STACK');
        } catch {
          toast.errorAlert('ERROR CLEARING ALARM STACK');
        }

        modal.close();
      },
    });
  };

  return (
    <RouteWrap>
      <RouteGrid>
        <Grid.Cell
          x={[0, is_authorized_to_clear_alarm_stack ? 6 : 12]}
          y={[0, 1]}
        >
          <FormGrid>
            <Grid.Cell x={[0, 12]} y={[0, 1]}>
              <Form.Input
                control={form.control}
                disabled
                label="Company Name"
                name="name"
              />
            </Grid.Cell>
            <Grid.Cell x={[0, 12]} y={[1, 2]}>
              <Form.Input
                control={form.control}
                disabled
                label="Email Address"
                name="email"
              />
            </Grid.Cell>
            <Grid.Cell x={[0, 6]} y={[2, 3]}>
              <Form.Input
                control={form.control}
                disabled
                label="Auto Dispatch Timeout In Seconds"
                name="reaction_test_time"
                rules={isRequired}
              />
            </Grid.Cell>
            <Grid.Cell x={[6, 12]} y={[2, 3]}>
              <Form.Input
                control={form.control}
                disabled
                label="Response Time In Seconds"
                name="responsetime"
              />
            </Grid.Cell>
            <Grid.Cell x={[0, 12]} y={[3, 4]}>
              <Form.Input
                control={form.control}
                disabled
                label="Reaction Test Time In Seconds"
                name="timeout"
              />
            </Grid.Cell>
          </FormGrid>
        </Grid.Cell>
        <RequiresClearAlarmStackPermission>
          <Grid.Cell x={[6, 12]} y={[0, 1]}>
            <FormGrid>
              <Grid.Cell x={[0, 12]} y={[0, 1]}>
                <BasicSelect<ALARM_STACK_SELECT>
                  id="alarm_stack_selector"
                  label="Alarm Stack"
                  options={ALARM_STACK_OPTIONS}
                  selected={selected_alarm_stack}
                  setSelected={value => setSelectedAlarmStack(value)}
                />
              </Grid.Cell>
              <Grid.Cell x={[0, 12]} y={[1, 2]}>
                <AlarmTypeSelector
                  selected={selected_alarm_type}
                  setSelectedLabel={selected_value =>
                    setSelectedAlarmType(selected_value)
                  }
                />
              </Grid.Cell>
              <Grid.Cell x={[0, 12]} y={[2, 3]}>
                <Button
                  fullWidth
                  isLoading={loading}
                  onClick={handleClearStack}
                  variant="cancel"
                >
                  CLEAR ALARM STACK
                </Button>
              </Grid.Cell>
            </FormGrid>
          </Grid.Cell>
        </RequiresClearAlarmStackPermission>
      </RouteGrid>
    </RouteWrap>
  );
};

export default AdminSettingsRoute;
