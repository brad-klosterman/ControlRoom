import { useMutation } from '@apollo/client';
import { memo, useState, useMemo, useEffect, useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useTechniciansContext } from 'apps/admin/user_management/technicians/provider';
import { PROPERTY_PROFILE_KEYHOLDER } from 'apps/customers/API';
import { PROPERTY_TESTING_TIME_OPTIONS } from 'apps/customers/customer/property/property_details/form.values';
import { useProperty } from 'apps/customers/customer/property/provider';
import { useCustomer } from 'apps/customers/customer/provider';
import { getFragment } from 'codegen';
import {
  DISABLE_PROPERTY_TESTING_DOCUMENT,
  ENABLE_PROPERTY_TESTING_DOCUMENT,
  Maybe,
} from 'codegen/graphql';
import PasswordVerify from 'components/password-verify';
import {
  Button,
  Flex,
  ToggleActive,
  Modal,
  SimpleActionModal,
  ModalFormContent,
  Form,
} from 'components/ui';

import { Label } from 'components/ui/Form/form.elements';
import { IOptionNumber } from 'components/ui/Form/Options';
import { useResponseStatus } from 'hooks';

type FormParams = {
  testing_time: string;
  technician_id?: Maybe<number>;
  keyholder_id?: Maybe<number>;
};

const PropertyTesting = () => {
  const modal = useContext(Modal.Context);
  const toast = useResponseStatus();

  const { refetch: refetchTechnicians, technicians } = useTechniciansContext();
  const { dispatch, property } = useProperty();
  const { creating_property } = useCustomer();

  const [form_visible, setFormVisible] = useState(false);

  const [tester_type, setTesterType] = useState<'TECHNICIAN' | 'KEYHOLDER'>(
    'TECHNICIAN',
  );

  const [password_verified, setPasswordVerified] = useState(false);

  const form = useForm<FormParams>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    if (form_visible) {
      refetchTechnicians();
    }
  }, [form_visible]);

  const technicians_options = useMemo(
    () =>
      technicians.reduce<IOptionNumber[]>(
        (acc, technician) =>
          technician.available
            ? [
                ...acc,
                {
                  label: technician.name,
                  value: technician.id,
                },
              ]
            : acc,
        [],
      ),
    [technicians],
  );

  const keyholders = property?.keyholders
    ? property?.keyholders.map(k => {
        return getFragment(PROPERTY_PROFILE_KEYHOLDER, k);
      })
    : [];

  const keyholders_options = useMemo(
    () =>
      keyholders.map(keyholder => ({
        label:
          keyholder.name ||
          keyholder.description ||
          keyholder.mobile_phone ||
          '',
        value: keyholder.id,
      })),
    [keyholders],
  );

  const [enable_property_testing] = useMutation(
    ENABLE_PROPERTY_TESTING_DOCUMENT,
  );

  const [disable_property_testing] = useMutation(
    DISABLE_PROPERTY_TESTING_DOCUMENT,
  );

  const onSubmit: SubmitHandler<FormParams> = async params => {
    if (!property?.id) return;

    const variables: FormParams & { property_id: number } = {
      property_id: property.id,
      testing_time: params.testing_time,
    };

    if (params.keyholder_id) {
      variables.keyholder_id = params.keyholder_id;
    }

    if (params.technician_id) {
      variables.technician_id = params.technician_id;
    }

    try {
      await enable_property_testing({
        variables,
      });

      toast.successAlert('PROPERTY TESTING ENABLED');
    } catch (error: any) {
      toast.errorAlert('COULD NOT ENABLE PROPERTY TESTING');
    }

    await dispatch('FETCH_PROPERTY', { id: property?.id });

    if (params.technician_id) {
      refetchTechnicians();
    }

    setFormVisible(false);
  };

  const openDisablePropertyTesting = async () => {
    modal.open({
      title: 'DISABLING PROPERTY TESTING',
      subtitle: `Do you want to disable property testing?`,
      actions: [
        { type: 'cancel' },
        { type: 'confirm_dangerous', text: 'DISABLE' },
      ],
      async onConfirm() {
        if (property)
          try {
            await disable_property_testing({
              variables: { property_id: property.id },
            });

            toast.successAlert('PROPERTY TESTING DISABLED');
            modal.close();
            await dispatch('FETCH_PROPERTY', { id: property?.id });
          } catch (error) {
            toast.errorAlert('COULD NOT DISABLE PROPERTY TESTING');
          }
      },
    });
  };

  if (!form_visible)
    return property?.testing_enabled ? (
      <Button onClick={openDisablePropertyTesting} variant="warning">
        DISABLE PROPERTY TESTING
      </Button>
    ) : (
      <Button
        disabled={creating_property || property?.status !== 'active'}
        onClick={() => setFormVisible(true)}
        variant="warning"
      >
        ENABLE PROPERTY TESTING
      </Button>
    );

  return (
    <SimpleActionModal
      title="ENABLING PROPERTY TESTING"
      is_open={true}
      actions={[
        {
          title: 'CANCEL',
          variant: 'other-secondary',
          onClick: () => setFormVisible(false),
        },
        {
          title: 'DEACTIVATE',
          variant: 'dangerous',
          onClick: form.handleSubmit(onSubmit),
          disabled: !form.formState.isValid || !password_verified,
        },
      ]}
    >
      <ModalFormContent>
        <Flex direction="column" fitWidth>
          <Label>Testing is done by</Label>
          <ToggleActive<'TECHNICIAN' | 'KEYHOLDER'>
            name="boolean"
            onChange={value => setTesterType(value)}
            value={tester_type}
            values={['TECHNICIAN', 'KEYHOLDER']}
          />
        </Flex>
        {tester_type === 'TECHNICIAN' && (
          <Form.Select
            control={form.control}
            label="Available Technician"
            name="technician_id"
            options={technicians_options}
            rules={{
              required: true,
            }}
          />
        )}
        {tester_type === 'KEYHOLDER' && (
          <Form.Select
            control={form.control}
            label="Keyholder"
            name="keyholder_id"
            options={keyholders_options}
            rules={{
              required: true,
            }}
          />
        )}
        <Form.Select
          control={form.control}
          label="Testing Time"
          name="testing_time"
          options={PROPERTY_TESTING_TIME_OPTIONS}
          rules={{
            required: true,
          }}
        />
        <PasswordVerify
          isInitVerified={!property?.password}
          label="Property Password"
          onSelectOption={value => setPasswordVerified(value)}
          password={property?.password}
        />
      </ModalFormContent>
    </SimpleActionModal>
  );
};

export default memo(PropertyTesting);
