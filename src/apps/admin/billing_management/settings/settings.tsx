import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useSSPSettingsContext } from 'apps/admin/company_settings/settings/provider';
import { SubRouteWrap } from 'apps/dashboard/style';
import {
  SSP_COMPANY_DETAILS_INPUT,
  UPDATE_SSP_SETTINGS_DOCUMENT,
} from 'codegen/graphql';
import { Button, Flex, Form, Grid } from 'components';
import { IOption } from 'components/ui/Form';
import ControlledMultiSelect from 'components/ui/Form/Field/MultiSelect/controlled';
import { FormGrid, FormGridCol } from 'components/ui/Form/form.elements';
import { useResponseStatus } from 'hooks';
import { useGetAllCurrencies } from 'hooks/currency';

const MAX_FOR_DEBIT_ORDER_RUN = 30;

const AdminBillingSettingsRoute = () => {
  const { currencies } = useGetAllCurrencies();

  const { loading, refetch, ssp_settings } = useSSPSettingsContext();

  const { errorAlert, successAlert } = useResponseStatus();

  const form = useForm<SSP_COMPANY_DETAILS_INPUT>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const [update_settings, { loading: update_loading }] = useMutation(
    UPDATE_SSP_SETTINGS_DOCUMENT,
  );

  const setFormValues = () => {
    if (ssp_settings)
      form.reset({
        trading_number: ssp_settings.trading_number,
        collection_days: ssp_settings.collection_days,
        banking_username: ssp_settings.banking_username,
        invoice_due_days: ssp_settings.invoice_due_days,
        abbreviated_name: ssp_settings.abbreviated_name,
        invoice_job_last_run: ssp_settings.invoice_job_last_run,
        account_number: ssp_settings.account_number,
        invoice_banking_details: ssp_settings.invoice_banking_details,
        invoice_footer_information: ssp_settings.invoice_footer_information,
        currencies: ssp_settings.currencies,
        web_link: ssp_settings.web_link,
      });
  };

  useEffect(() => {
    setFormValues();
  }, [ssp_settings]);

  const onSubmitForm: SubmitHandler<
    SSP_COMPANY_DETAILS_INPUT
  > = async params => {
    try {
      await update_settings({
        variables: {
          params: {
            ...params,
            invoice_due_days: params.invoice_due_days
              ? parseInt(`${params.invoice_due_days}`)
              : undefined,
          },
        },
      });

      successAlert('UPDATED COMPANY SETTINGS');
      refetch();
    } catch {
      errorAlert('COULD NOT UPDATE COMPANY SETTINGS');
    }
  };

  const createCollectionDaysOptions = (): IOption[] => {
    return Array.from({ length: MAX_FOR_DEBIT_ORDER_RUN }, (_, i) => {
      const day_value = i + 1;
      return {
        label: `${day_value}`,
        value: day_value,
      };
    });
  };

  const createCurrencyCodeOptions = (): IOption[] => {
    return currencies.map(currency => ({
      label: `${currency.code} (${currency.symbol_native})`,
      value: currency.code,
    }));
  };

  return (
    <SubRouteWrap direction="column">
      <FormGrid>
        <Grid.Cell x={[0, 6]} y={[0, 1]}>
          <FormGridCol>
            <Grid.Cell x={[0, 12]} y={[0, 1]}>
              <Form.Input
                control={form.control}
                disabled={true}
                label="Banking Name"
                name="banking_username"
              />
            </Grid.Cell>
            <Grid.Cell x={[0, 6]} y={[1, 2]}>
              <Form.Input
                control={form.control}
                label="Abbreviated Name"
                name="abbreviated_name"
              />
            </Grid.Cell>
            <Grid.Cell x={[6, 12]} y={[1, 2]}>
              <Form.Input
                control={form.control}
                disabled={true}
                label="Trading Number"
                name="trading_number"
              />
            </Grid.Cell>
            <Grid.Cell x={[0, 12]} y={[2, 3]}>
              <Form.Input
                control={form.control}
                label="Account Number"
                name="account_number"
              />
            </Grid.Cell>
            <Grid.Cell x={[0, 12]} y={[3, 4]}>
              <Form.Input
                control={form.control}
                label="Web Link"
                name="web_link"
              />
            </Grid.Cell>
            <Grid.Cell x={[0, 12]} y={[4, 5]}>
              <ControlledMultiSelect
                control={form.control}
                label="Currencies"
                name="currencies"
                options={createCurrencyCodeOptions()}
              />
            </Grid.Cell>
            <Grid.Cell x={[0, 12]} y={[5, 6]}>
              <ControlledMultiSelect
                control={form.control}
                label="Collection Days for Debit Order Run"
                name="collection_days"
                options={createCollectionDaysOptions()}
              />
            </Grid.Cell>
            <Grid.Cell x={[0, 6]} y={[6, 7]}>
              <Form.Input
                control={form.control}
                label="Due Days Default Value"
                min={0}
                name="invoice_due_days"
                type="number"
              />
            </Grid.Cell>
            <Grid.Cell x={[6, 12]} y={[6, 7]}>
              <Form.Input
                control={form.control}
                disabled={true}
                label="Invoice Job Last Run At"
                name="invoice_job_last_run"
              />
            </Grid.Cell>
          </FormGridCol>
        </Grid.Cell>
        <Grid.Cell x={[6, 12]} y={[0, 1]}>
          <FormGridCol style={{ height: '100%' }}>
            <Grid.Cell x={[0, 12]} y={[0, 1]}>
              <Form.TextArea
                control={form.control}
                label="Invoice Details"
                name="invoice_banking_details"
              />
            </Grid.Cell>
            <Grid.Cell x={[0, 12]} y={[1, 2]}>
              <Form.TextArea
                control={form.control}
                label="Invoice Footer Information"
                name="invoice_footer_information"
              />
            </Grid.Cell>
          </FormGridCol>
        </Grid.Cell>
      </FormGrid>
      <Flex
        alignItems="flex-end"
        justifyContent="flex-end"
        style={{ height: '100%' }}
      >
        <Button
          isLoading={loading || update_loading}
          onClick={form.handleSubmit(onSubmitForm)}
        >
          SAVE
        </Button>
      </Flex>
    </SubRouteWrap>
  );
};

export default AdminBillingSettingsRoute;
