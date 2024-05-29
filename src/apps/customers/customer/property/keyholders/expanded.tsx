import { memo, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import {
  CREATE_KEYHOLDER,
  DELETE_KEYHOLDER,
  UPDATE_KEYHOLDER,
} from 'apps/customers/API/property/keyholders';
import {
  MUTATION_CREATE_PROPERTY_KEYHOLDER_ARGS,
  MUTATION_UPDATE_PROPERTY_KEYHOLDER_ARGS,
  PROPERTY_KEYHOLDER_PARAMS,
  PROPERTY_PROFILE_KEYHOLDER_FRAGMENT,
} from 'codegen/graphql';
import { Button, Form, FormValidation, Grid, Checkbox, Text } from 'components';
import { useResponseStatus } from 'hooks';
import { omitKeys, stripTypename } from 'src/apollo/utils/strip-typename';

import * as S from './styles';
import { Content } from './styles';
import { useCanUpdateCustomers } from '@permissions';

const ExpandedContent = ({
  closeCreateKeyholder,
  creating_keyholder,
  customer_id,
  index,
  keyholder,
  property_id,
  refetch,
}: {
  creating_keyholder: boolean;
  customer_id: number;
  property_id: number;
  index: number;
  keyholder?: PROPERTY_PROFILE_KEYHOLDER_FRAGMENT;
  closeCreateKeyholder?: () => void;
  refetch(): void;
}) => {
  /** Permissions **/
  const edit_permissions = useCanUpdateCustomers();

  const { errorAlert, successAlert } = useResponseStatus({
    id: 'property-keyholder',
  });

  const [create_keyholder, { loading: create_loading }] =
    useMutation(CREATE_KEYHOLDER);

  const [update_keyholder, { loading: update_loading }] =
    useMutation(UPDATE_KEYHOLDER);

  const [delete_keyholder, { loading: delete_loading }] =
    useMutation(DELETE_KEYHOLDER);

  const [register_app, setRegisterApp] = useState(
    Boolean(keyholder?.user_app_id),
  );

  const { control, handleSubmit } = useForm<PROPERTY_KEYHOLDER_PARAMS>({
    defaultValues: {
      ...keyholder,
      push_notifications_enabled: Boolean(
        keyholder?.push_notifications_enabled,
      ),
      sms_notifications_enabled: Boolean(keyholder?.sms_notifications_enabled),
      triggered_panics_allowed: Boolean(keyholder?.triggered_panics_allowed),
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const { isRequired } = FormValidation;

  const createPropertyKeyholder = async (
    params: MUTATION_CREATE_PROPERTY_KEYHOLDER_ARGS,
  ) => {
    await create_keyholder({
      variables: {
        property_id,
        customer_id,
        params: params.params,
        register_app: params.register_app,
      },
    })
      .then(() => {
        if (closeCreateKeyholder) closeCreateKeyholder();
        refetch();
        successAlert('CREATED KEYHOLDER');
      })
      .catch(() => errorAlert('COULD NOT CREATE KEYHOLDER'));
  };

  const updatePropertyKeyholder = (
    params: MUTATION_UPDATE_PROPERTY_KEYHOLDER_ARGS,
  ) => {
    update_keyholder({ variables: stripTypename(params) })
      .then(() => {
        refetch();
        successAlert('UPDATED KEYHOLDER');
      })
      .catch(() => errorAlert('COULD NOT UPDATE KEYHOLDER'));
  };

  const onSubmitForm: SubmitHandler<
    PROPERTY_KEYHOLDER_PARAMS
  > = async payload => {
    const call_order = index + 1;

    if (creating_keyholder) {
      await createPropertyKeyholder({
        customer_id,
        params: {
          ...payload,
          call_order,
        },
        property_id,
        register_app,
      });
    } else {
      if (keyholder?.id)
        await updatePropertyKeyholder({
          customer_id,
          keyholder_id: keyholder.id,
          params: {
            ...omitKeys(payload, ['user_app_id', 'id']),
            call_order,
          },
          property_id,
          register_app: !keyholder?.user_app_id && register_app,
        });
    }
  };

  const deleteKeyholder = (keyholder_id: number) => {
    delete_keyholder({ variables: { keyholder_id, property_id, customer_id } })
      .then(() => {
        refetch();
        successAlert('DELETED KEYHOLDER');
      })
      .catch(() => errorAlert('COULD NOT DELETE KEYHOLDER'));
  };

  return (
    <Content border={creating_keyholder}>
      <Form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmitForm)}
        style={{ display: 'flex', width: '100%' }}
      >
        <Grid spacing="regular">
          <Grid.Cell x={[0, 8]} y={[0, 1]}>
            <Form.Input
              {...{ control }}
              disabled={!edit_permissions}
              label="Keyholder Name"
              name="name"
              rules={isRequired}
            />
          </Grid.Cell>
          <Grid.Cell x={[0, 4]} y={[1, 2]}>
            <Form.Input
              {...{ control }}
              disabled={!edit_permissions}
              label="Keyholder Description"
              name="description"
            />
          </Grid.Cell>
          <Grid.Cell x={[4, 8]} y={[1, 2]}>
            <Form.Password
              {...{ control }}
              disabled={!edit_permissions}
              permissions={{ view: edit_permissions }}
              label="Password"
              name="password"
            />
          </Grid.Cell>
          <Grid.Cell x={[0, 4]} y={[2, 3]}>
            <Form.Input
              {...{ control }}
              disabled={!edit_permissions || !creating_keyholder}
              label="Mobile Phone (with country code)"
              name="mobile_phone"
              rules={isRequired}
              type="tel"
            />
          </Grid.Cell>
          <Grid.Cell x={[4, 8]} y={[2, 3]}>
            <Form.Input
              {...{ control }}
              disabled={!edit_permissions}
              label="Landline Phone (with country code) - Optional"
              name="landline_phone"
              type="tel"
            />
          </Grid.Cell>

          <Grid.Cell
            direction="column"
            spacing="large"
            style={{ paddingTop: '2.25rem', paddingLeft: '1.5rem' }}
            x={[8, 12]}
            y={[0, 3]}
          >
            <S.CheckBoxRow>
              <Checkbox
                disabled={!edit_permissions}
                onChange={() => setRegisterApp(prev => !prev)}
                value={register_app}
              />
              <Text>REGISTER FOR USER APP</Text>
            </S.CheckBoxRow>
            <S.CheckBoxRow>
              <Controller
                control={control}
                name="sms_notifications_enabled"
                render={({ field: { onChange, value } }) => (
                  <Checkbox
                    {...{ onChange }}
                    disabled={!edit_permissions}
                    value={value ?? false}
                  />
                )}
              />
              <Text>SMS NOTIFICATIONS ENABLED</Text>
            </S.CheckBoxRow>
            {register_app && (
              <S.CheckBoxRow>
                <Controller
                  control={control}
                  name="push_notifications_enabled"
                  render={({ field: { onChange, value } }) => (
                    <Checkbox
                      {...{ onChange }}
                      disabled={!edit_permissions}
                      value={value ?? false}
                    />
                  )}
                />
                <Text>PUSH NOTIFICATIONS ENABLED</Text>
              </S.CheckBoxRow>
            )}
            {register_app && (
              <S.CheckBoxRow>
                <Controller
                  control={control}
                  name="triggered_panics_allowed"
                  render={({ field: { onChange, value } }) => (
                    <Checkbox
                      {...{ onChange }}
                      disabled={!edit_permissions}
                      value={value ?? false}
                    />
                  )}
                />
                <Text>MOBILE APP ALARMS ENABLED</Text>
              </S.CheckBoxRow>
            )}
          </Grid.Cell>

          {edit_permissions && (
            <Grid.Cell
              alignItems="flex-end"
              justifyContent="flex-end"
              spacing="small"
              x={[0, 12]}
              y={[4, 5]}
            >
              {creating_keyholder && (
                <Button onClick={closeCreateKeyholder} variant="delete">
                  CANCEL CREATE
                </Button>
              )}
              {keyholder && (
                <Button
                  disabled={update_loading}
                  isLoading={delete_loading}
                  onClick={() => deleteKeyholder(keyholder.id)}
                  variant="delete"
                >
                  DELETE
                </Button>
              )}
              <Button
                disabled={delete_loading}
                isLoading={create_loading || update_loading}
                onClick={handleSubmit(onSubmitForm)}
              >
                {keyholder ? 'SAVE' : 'CREATE'}
              </Button>
            </Grid.Cell>
          )}
        </Grid>
      </Form>
    </Content>
  );
};

export default memo(ExpandedContent);
