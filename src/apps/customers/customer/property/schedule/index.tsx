import { useMutation } from '@apollo/client';
import { memo, useMemo, Fragment, useEffect } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

import { PROPERTY_PROFILE_SCHEDULE } from 'apps/customers/API';
import { useProperty } from 'apps/customers/customer/property/provider';
import { RouteWrap } from 'apps/dashboard/style';
import { getFragment } from 'codegen';
import {
  PROPERTY_TIME_SCHEDULE_PARAMS,
  UPDATE_PROPERTY_SCHEDULE_DOCUMENT,
} from 'codegen/graphql';
import { Button, Flex, Form, Grid, Text } from 'components';
import { useResponseStatus } from 'hooks';
import { omitKeys } from 'src/apollo/utils/strip-typename';
import {
  RequiresUpdateCustomersPermission,
  useCanUpdateCustomers,
} from 'src/app.state/permissions/hooks/update-customers.permission';

import { default_schedule } from './form.values';
import { InputWrap } from './styles';

const PropertyScheduleRoute = () => {
  const is_user_authorized_to_update_customer = useCanUpdateCustomers();
  const { errorAlert, successAlert } = useResponseStatus({
    id: 'property-schedule',
  });

  const { customer_id, dispatch, property } = useProperty();
  if (!property) return;

  const schedules_fragment = getFragment(
    PROPERTY_PROFILE_SCHEDULE,
    property?.schedules,
  ) as PROPERTY_TIME_SCHEDULE_PARAMS[];

  const schedules = useMemo<PROPERTY_TIME_SCHEDULE_PARAMS[]>(() => {
    if (property) {
      return default_schedule.map(default_item => {
        const found =
          schedules_fragment &&
          schedules_fragment.find(item => item.day === default_item.day);

        if (found) {
          return found;
        }

        return default_item;
      });
    }

    return default_schedule;
  }, [property.id]);

  const form = useForm<{
    schedules: PROPERTY_TIME_SCHEDULE_PARAMS[];
  }>({
    defaultValues: {
      schedules: schedules,
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    form.reset({
      schedules: schedules,
    });
  }, [property.id]);

  const { control } = form;

  const { fields } = useFieldArray({
    control,
    name: 'schedules',
  });

  const [update_property_schedule, { loading }] = useMutation(
    UPDATE_PROPERTY_SCHEDULE_DOCUMENT,
    {
      onCompleted: data => {
        const successful = data?.update_property_schedule?.success;

        if (successful) {
          dispatch('FETCH_PROPERTY', { id: property.id });
          successAlert('Successfully Updated Schedule');
        } else {
          errorAlert('Unsuccessful Updating Schedule');
        }
      },
    },
  );

  const onSubmitForm: SubmitHandler<{
    schedules: PROPERTY_TIME_SCHEDULE_PARAMS[];
  }> = async params => {
    let is_error = false;

    const filtered_schedules = [...params.schedules]
      .filter(sched => sched.open_start || sched.close_end)
      .map((sched, index) => {
        // TODO – This should not be a map function, since it's confusing, as it does
        // not map anything – it's just a look for setting errors and therefore
        // should be a standard loop as to not be confusing
        if (sched.open_start && !sched.close_end) {
          form.setError(`schedules.${index}.close_end`, {
            message: 'This field is required when there is a open start time',
            type: 'custom',
          });

          is_error = true;
        }

        if (!sched.open_start && sched.close_end) {
          form.setError(`schedules.${index}.open_start`, {
            message: 'This field is required when there is a closed end time',
            type: 'custom',
          });

          is_error = true;
        }

        return sched;
      });

    if (!is_error && customer_id) {
      await update_property_schedule({
        variables: {
          customer_id,
          property_id: property.id,
          schedules: omitKeys(filtered_schedules, ['__typename']),
        },
      });
    }
  };

  const isFormEditable = (): boolean => {
    return is_user_authorized_to_update_customer;
  };

  const is_entire_form_disabled = !isFormEditable();

  return (
    <RouteWrap>
      <Grid spacing="large">
        {fields.map((field, index) => {
          return (
            <Fragment key={field.id}>
              <Grid.Cell x={[0, 12]} y={[index, index + 1]}>
                <Flex fitWidth gap="regular">
                  <InputWrap
                    style={{
                      alignItems: 'center',
                      height: '3rem',
                      marginTop: '1.75rem',
                    }}
                  >
                    {field.day}
                  </InputWrap>
                  <InputWrap>
                    <Form.Input
                      {...{ control }}
                      disabled={is_entire_form_disabled}
                      label="Open Start"
                      name={`schedules.${index}.open_start`}
                      type="time"
                    />
                  </InputWrap>
                  <InputWrap>
                    <Form.Input
                      {...{ control }}
                      disabled={is_entire_form_disabled}
                      label="Open End"
                      name={`schedules.${index}.open_end`}
                      type="time"
                    />
                  </InputWrap>
                  <InputWrap>
                    <Form.Input
                      {...{ control }}
                      disabled={is_entire_form_disabled}
                      label="Close Start"
                      name={`schedules.${index}.close_start`}
                      type="time"
                    />
                  </InputWrap>
                  <InputWrap>
                    <Form.Input
                      {...{ control }}
                      disabled={is_entire_form_disabled}
                      label="Close End"
                      name={`schedules.${index}.close_end`}
                      type="time"
                    />
                  </InputWrap>
                </Flex>
              </Grid.Cell>
            </Fragment>
          );
        })}
        <RequiresUpdateCustomersPermission>
          <Grid.Cell justifyContent="flex-end" x={[0, 12]} y={[8, 9]}>
            <Button
              isLoading={loading}
              onClick={form.handleSubmit(onSubmitForm)}
            >
              UPDATE PROPERTY SCHEDULE
            </Button>
          </Grid.Cell>
        </RequiresUpdateCustomersPermission>
      </Grid>
    </RouteWrap>
  );
};

export default memo(PropertyScheduleRoute);
