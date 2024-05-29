import { useMutation } from '@apollo/client';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAlarmTypesContext } from 'apps/admin/alarm_management/types_config/provider';
import BackNav from 'apps/alarms/create_alarm/back_nav';
import CustomersTable from 'apps/customers/table';
import { CUSTOMERS_TABLE_ROW } from 'codegen/graphql';
import { IOptionNumber } from 'components/ui/Form/Options';
import Modal from 'components/ui/Modal/provider';
import useResponseStatus from 'hooks/use.response-status';
import { CREATE_PHONE_ALARM } from 'src/apollo';

const CreateAlarmRoute = () => {
  const navigate = useNavigate();
  const modal = useContext(Modal.Context);
  const { errorAlert, successAlert } = useResponseStatus();

  const [create_alarm] = useMutation(CREATE_PHONE_ALARM);

  const { alarm_types_options } = useAlarmTypesContext();

  const onSelectCustomer = (customer: CUSTOMERS_TABLE_ROW) => {
    const property_options: IOptionNumber[] = customer.properties.map(
      property => ({
        label: property.address ?? '-',
        value: property.id,
      }),
    );

    const default_alarm_type = alarm_types_options.find(
      alarm_type => alarm_type.label === 'CLIENT PHONE IN',
    )?.value;

    modal.open({
      title: 'CREATE ALARM',
      subtitle: `Creating alarm for ${customer.customer_name}.`,
      actions: [{ type: 'cancel' }, { type: 'confirm', text: 'CREATE' }],
      form: [
        {
          name: 'alarm_type_id',
          label: 'Alarm Type',
          type: 'AlarmTypes',
          default_value: default_alarm_type,
          required: true,
        },
        {
          name: 'property_id',
          label: 'Property',
          type: 'Select',
          options: property_options,
          default_value: property_options[0].value,
          required: true,
        },
      ],
      async onConfirm(fields: any) {
        const alarm_type_id = alarm_types_options.find(
          alarm_type => alarm_type.label === fields.alarm_type_id,
        )?.value;

        try {
          await create_alarm({
            variables: {
              input: {
                alarm_type_id,
                client_id: fields.property_id,
              },
            },
          });

          modal.close();

          successAlert('CREATED ALARM');
          navigate('/control_room/alarms/emergency');
        } catch (error: any) {
          errorAlert('COULD NOT CREATE ALARM');
        }
      },
    });
  };

  return (
    <>
      <BackNav />
      <CustomersTable
        onSelectCustomer={onSelectCustomer}
        variant="create_alarm"
      />
    </>
  );
};

export default CreateAlarmRoute;
