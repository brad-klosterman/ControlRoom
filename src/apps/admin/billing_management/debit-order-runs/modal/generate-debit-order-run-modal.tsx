import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { GENERATE_DEBIT_ORDER_RUN_DOCUMENT } from 'src/apollo/codegen/graphql';
import { useSSPSettingsContext } from 'src/apps/admin/company_settings/settings/provider';
import { PaymentMethodOption } from 'src/apps/admin/company_settings/settings/types';
import { ControlledDatePicker } from 'src/components/ui/DatePicker/controlled';
import ControlledSelect from 'src/components/ui/Form/Field/Select/controlled';
import { SimpleActionModal, ModalFormContent } from 'components/ui';
import { useResponseStatus } from 'src/hooks';
import { extractMonth, formatDate } from 'src/utils/date.utils/formatDate';

const TODAYS_DATE = formatDate(new Date());

const findFirstBankPaymentOption = (
  payment_method_options: PaymentMethodOption[],
): PaymentMethodOption | undefined => {
  return payment_method_options.filter(payment_method_option =>
    payment_method_option.value.toLowerCase().includes('bank'),
  )[0];
};

const getDefaultDebitOrderFormat = (
  payment_method_options: PaymentMethodOption[],
): string | undefined => {
  if (!payment_method_options.length) {
    return undefined;
  }

  return (
    findFirstBankPaymentOption(payment_method_options)?.value ??
    payment_method_options[0].value
  );
};

interface GenerateDebitOrderRunFormFields {
  debit_order_format_type: string;
  collection_day: number;
  collection_month: string;
}

interface Props {
  is_open: boolean;
  onClose: () => unknown;
  onSuccess?: () => unknown;
}

const GenerateDebitOrderRunModal = ({ is_open, onClose, onSuccess }: Props) => {
  const { errorAlert, successAlert } = useResponseStatus({
    id: 'generate-debit-order-run-modal',
  });
  const { collection_days_options, payment_method_options } =
    useSSPSettingsContext();
  const [generate_debit_order_run] = useMutation(
    GENERATE_DEBIT_ORDER_RUN_DOCUMENT,
  );

  const form = useForm<GenerateDebitOrderRunFormFields>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    if (form.formState.isDirty) {
      return;
    }

    form.reset({
      collection_day: collection_days_options[0]?.value,
      debit_order_format_type: getDefaultDebitOrderFormat(
        payment_method_options,
      ),
      collection_month: TODAYS_DATE,
    });
  }, [payment_method_options, collection_days_options]);

  const onSubmit: SubmitHandler<
    GenerateDebitOrderRunFormFields
  > = async fields => {
    try {
      const { data } = await generate_debit_order_run({
        variables: {
          debit_order_format_type: fields.debit_order_format_type,
          collection_day: fields.collection_day,
          collection_month: extractMonth(fields.collection_month),
        },
      });

      if (!data) {
        throw 'Data from generate debit order run returned null!';
      }

      successAlert(data.generate_debit_order_run.message);
      onSuccess?.();
      onClose();
    } catch {
      errorAlert('COULD NOT GENERATE DEBIT ORDER RUN');
    }
  };

  return (
    <SimpleActionModal
      is_open={is_open}
      onClose={onClose}
      title="GENERATE DEBIT ORDER RUN"
      actions={[
        {
          title: 'CANCEL',
          onClick: onClose,
          variant: 'other-secondary',
        },
        {
          title: 'GENERATE',
          onClick: form.handleSubmit(onSubmit),
          variant: 'primary',
        },
      ]}
    >
      <ModalFormContent>
        <ControlledSelect
          label="Debit Order Format"
          name="debit_order_format_type"
          control={form.control}
          options={payment_method_options}
          rules={{ required: true }}
        />
        <ControlledSelect
          label="Collection Day of Month"
          name="collection_day"
          control={form.control}
          options={collection_days_options}
          rules={{ required: true }}
        />
        <ControlledDatePicker
          control={form.control}
          custom_selection_type="start_of_month"
          label="Collection Month"
          name="collection_month"
          rules={{
            required: true,
          }}
        />
      </ModalFormContent>
    </SimpleActionModal>
  );
};

export { GenerateDebitOrderRunModal };
