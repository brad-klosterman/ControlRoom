import { useMutation } from '@apollo/client';
import { memo, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { CREATE_CUSTOMER_PROPERTY } from 'apps/customers/API/property/create';
import { UPDATE_PROPERTY_DETAILS } from 'apps/customers/API/property/details';
import EnablePropertyTesting from 'apps/customers/customer/property/property_details/property_testing';
import { useProperty } from 'apps/customers/customer/property/provider';
import { useCustomer } from 'apps/customers/customer/provider';
import { SubRouteWrap } from 'apps/dashboard/style';
import { getFragment } from 'codegen';
import {
  CUSTOMER_ACCOUNT_CONTACT_FRAGMENT_DOC,
  MUTATION_CREATE_CUSTOMER_PROPERTY_ARGS,
  UPDATE_PROPERTY_DETAILS_PARAMS,
} from 'codegen/graphql';
import { Button, Grid, useSimpleModalState } from 'components';
import { FormGrid, FormGridCol } from 'components/ui/Form/form.elements';
import { useResponseStatus } from 'hooks';
import { stripTypename } from 'src/apollo/utils/strip-typename';

import {
  RequiresPutZonesOnHoldPermission,
  RequiresSuspendCustomersPermission,
  RequiresUpdateCustomersPermission,
  useCanUpdateCustomers,
} from '@permissions';

import DetailsForm from './details.form';
import { setForm } from './form.values';
import InstructionsForm from './instructions.form';
import { ActivatePropertyModal } from '../../account/details/modals/activate-property/ActivatePropertyModal';

import { DeactivatePropertyModal } from '../../account/details/modals/deactivate-property/DeactivatePropertyModal';

const PropertyDetailsRoute = () => {
  const {
    creating_property,
    customer,
    dispatch: dispatchCustomer,
  } = useCustomer();
  const activate_property_modal = useSimpleModalState();
  const deactivate_property_modal = useSimpleModalState();
  const readonly = !useCanUpdateCustomers();
  const contact = getFragment(
    CUSTOMER_ACCOUNT_CONTACT_FRAGMENT_DOC,
    customer?.contact,
  );

  const { customer_id, dispatch, property } = useProperty();

  const toast = useResponseStatus({ id: 'property_details' });

  // PROPERTY DETAILS FORM
  const form = useForm<UPDATE_PROPERTY_DETAILS_PARAMS>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    if (property) {
      form.reset(setForm(property));
    }
  }, [property?.id]);

  const [create_property, { loading: create_loading }] = useMutation(
    CREATE_CUSTOMER_PROPERTY,
  );

  const [update_property, { loading: update_loading }] = useMutation(
    UPDATE_PROPERTY_DETAILS,
  );

  const onSubmit = async (params: UPDATE_PROPERTY_DETAILS_PARAMS) => {
    if (!customer_id) return;

    const variables: MUTATION_CREATE_CUSTOMER_PROPERTY_ARGS = {
      customer_id,
      customer_first_name: contact?.first_name,
      customer_last_name: contact?.last_name,
      params,
    };

    try {
      if (creating_property) {
        const { data } = await create_property({
          variables,
        });

        const new_property_id = data?.create_customer_property.property.id;

        if (new_property_id) {
          toast.successAlert('CREATED PROPERTY');
          await dispatchCustomer('TOGGLE_NEW_PROPERTY', { new_property_id });
          await dispatch('FETCH_PROPERTY', { id: new_property_id });
        }
      } else if (property) {
        await update_property({
          variables: { ...stripTypename(variables), property_id: property.id },
        });

        toast.successAlert('CREATED PROPERTY');

        await dispatch('FETCH_PROPERTY', { id: property.id });
      }
    } catch (error: any) {
      console.error(error);
      toast.errorAlert('COULD NOT SAVE PROPERTY');
    }
  };

  const isCustomerActive = (): boolean => {
    return customer?.system_status?.status === 'active';
  };

  const showActivatePropertyButton = () => {
    if (creating_property || property?.status === 'active') {
      return false;
    }

    return isCustomerActive();
  };

  const showDeactivatePropertyButton = () => {
    if (creating_property || property?.status === 'inactive') {
      return false;
    }

    return true;
  };

  const refetchCustomer = async () => {
    dispatchCustomer('REFETCH_CUSTOMER', {});
  };

  return (
    <>
      <SubRouteWrap direction="column">
        <FormProvider {...form}>
          <FormGrid style={{ height: '100%' }}>
            <Grid.Cell x={[0, 6]} y={[0, 1]}>
              <FormGridCol>
                <DetailsForm readonly={readonly} />
              </FormGridCol>
            </Grid.Cell>
            <Grid.Cell x={[6, 12]} y={[0, 1]}>
              <FormGridCol>
                <InstructionsForm readonly={readonly} />
              </FormGridCol>
            </Grid.Cell>
            <Grid.Cell
              alignItems="flex-end"
              justifyContent="flex-end"
              spacing="regular"
              style={{ height: '100%' }}
              x={[0, 12]}
              y={[1, 2]}
            >
              <RequiresPutZonesOnHoldPermission>
                <EnablePropertyTesting />
              </RequiresPutZonesOnHoldPermission>
              <RequiresSuspendCustomersPermission>
                {showDeactivatePropertyButton() && (
                  <Button
                    onClick={deactivate_property_modal.open}
                    variant="delete"
                  >
                    DEACTIVATE PROPERTY
                  </Button>
                )}
                {showActivatePropertyButton() && (
                  <Button
                    onClick={activate_property_modal.open}
                    variant="secondary"
                  >
                    ACTIVATE PROPERTY
                  </Button>
                )}
              </RequiresSuspendCustomersPermission>
              <RequiresUpdateCustomersPermission>
                <Button
                  disabled={!form.formState.isValid}
                  isLoading={create_loading || update_loading}
                  onClick={form.handleSubmit(onSubmit)}
                >
                  {creating_property ? 'CREATE' : 'SAVE'}
                </Button>
              </RequiresUpdateCustomersPermission>
            </Grid.Cell>
          </FormGrid>
        </FormProvider>
      </SubRouteWrap>
      {property && (
        <>
          <ActivatePropertyModal
            property={property}
            is_open={activate_property_modal.is_open}
            onClose={activate_property_modal.close}
            onSuccess={refetchCustomer}
          />
          <DeactivatePropertyModal
            property={property}
            is_open={deactivate_property_modal.is_open}
            onClose={deactivate_property_modal.close}
            onSuccess={refetchCustomer}
          />
        </>
      )}
    </>
  );
};

export default memo(PropertyDetailsRoute);
