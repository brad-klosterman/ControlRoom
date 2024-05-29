import { DateTime } from 'luxon';

import { TRANSMITTER_STATUS_OPTIONS } from 'apps/admin/company_settings/transmitters/form.values';
import {
  TypeButton,
  TypeTitle,
} from 'apps/admin/reports_audits/company_reports/style';
import { COMPANY_REPORT_TYPE, TRANSMITTER_STATUS } from 'codegen/graphql';
import { Flex } from 'components';
import { IOptionNumber, IOptionString } from 'components/ui/Form/Options';
import { ModalFormField } from 'components/ui/Modal/types';
import { formatDate } from 'utils/date.utils/formatDate';

const today = new Date();
const first_day_of_this_month = formatDate(
  new Date(today.getFullYear(), today.getMonth(), 1),
);
const yesterday = formatDate(DateTime.now().minus({ day: 1 }).toJSDate());

export const ReportTypeForm = (props: {
  onSelectType(report_type: COMPANY_REPORT_TYPE): void;
}) => {
  return (
    <Flex
      direction="column"
      fitWidth
      gap="small"
      style={{ paddingTop: '1.5rem' }}
    >
      <TypeTitle title="ALARMS" />
      <TypeButton onClick={props.onSelectType} type="FALSE_ALARMS" />
      <TypeButton onClick={props.onSelectType} type="HOME_ALARM" />
      <TypeButton onClick={props.onSelectType} type="OVERACTIVE_ALARMS" />
      <TypeButton onClick={props.onSelectType} type="RESPONDERS_DELEGATIONS" />
      <TypeTitle title="CUSTOMERS" />
      <TypeButton onClick={props.onSelectType} type="CUSTOMERS_PROPERTIES" />
      <TypeButton onClick={props.onSelectType} type="CUSTOMERS_KEYHOLDERS" />
      <TypeTitle title="EQUIPEMENT (STOCK)" />
      <TypeButton onClick={props.onSelectType} type="TRANSMITTERS_STOCK" />
      <TypeTitle title="ANALYTICS" />
      <TypeButton onClick={props.onSelectType} type="OB_STATS" />
      <TypeButton onClick={props.onSelectType} type="WORK_SHIFT" />
    </Flex>
  );
};

export const getAlarmReportFilters = ({
  area_options,
  default_values,
}: {
  area_options: IOptionNumber[];
  default_values?: {
    area_ids?: number[];
    alarm_type?: string;
    date_from?: string;
    date_to?: string;
  };
}): ModalFormField<{
  area_ids: number[] | undefined;
  alarm_type: string | undefined;
  date_from: string | undefined;
  date_to: string | undefined;
}>[] => {
  return [
    {
      label: 'Date From',
      name: 'date_from',
      type: 'DatePicker',
      default_value: default_values?.date_from ?? first_day_of_this_month,
      required: true,
    },
    {
      label: 'Date To',
      name: 'date_to',
      type: 'DatePicker',
      default_value: default_values?.date_to ?? formatDate(today),
      required: true,
    },
    {
      label: 'Areas',
      name: 'area_ids',
      type: 'MultiSelect',
      options: area_options,
      default_value: default_values?.area_ids,
    },
    {
      name: 'alarm_type',
      label: 'Alarm Type',
      type: 'AlarmTypes',
      default_value: default_values?.alarm_type,
    },
  ];
};

export const getDelegationsReportFilters = ({
  area_options,
}: {
  area_options: IOptionNumber[];
}): ModalFormField<{
  area_ids: number[] | undefined;

  date_from: string | undefined;
  date_to: string | undefined;
}>[] => {
  return [
    {
      label: 'Date From',
      name: 'date_from',
      type: 'DatePicker',
      default_value: first_day_of_this_month,
      required: true,
    },
    {
      label: 'Date To',
      name: 'date_to',
      type: 'DatePicker',
      default_value: formatDate(today),
      required: true,
    },
    {
      label: 'Areas',
      name: 'area_ids',
      type: 'MultiSelect',
      options: area_options,
    },
  ];
};

export const getAnalyticsReportFilters = ({
  area_options,
}: {
  area_options: IOptionNumber[];
}): ModalFormField<{
  area_ids: number[] | undefined;
  alarm_type: string | undefined;
  date_from: string | undefined;
  date_to: string | undefined;
  active: boolean | undefined;
}>[] => {
  return [
    {
      label: 'Date From',
      name: 'date_from',
      type: 'DatePicker',
      default_value: first_day_of_this_month,
      required: true,
    },
    {
      label: 'Date To',
      name: 'date_to',
      type: 'DatePicker',
      default_value: formatDate(today),
      required: true,
    },
    {
      label: 'Areas',
      name: 'area_ids',
      type: 'MultiSelect',
      options: area_options,
    },
    {
      name: 'alarm_type',
      label: 'Alarm Type',
      type: 'AlarmTypes',
    },
    {
      label: 'Property Status',
      name: 'active',
      type: 'Select',
      options: [
        {
          label: 'ACTIVE PROPERTY',
          value: true,
        },
        {
          label: 'INACTIVE PROPERTY',
          value: false,
        },
      ],
    },
  ];
};

export const getTransmittersStockFilters = ({
  area_options,
  decoders_name_options,
}: {
  area_options: IOptionNumber[];
  decoders_name_options: IOptionString[];
}): ModalFormField<{
  area_ids: number[] | undefined;
  transmitter_status: TRANSMITTER_STATUS | undefined;
  decoder_name: string | undefined;
}>[] => {
  return [
    {
      label: 'Areas',
      name: 'area_ids',
      type: 'MultiSelect',
      options: area_options,
    },
    {
      label: 'Transmitter Status',
      name: 'transmitter_status',
      type: 'Select',
      options: TRANSMITTER_STATUS_OPTIONS,
    },
    {
      label: 'Decoder',
      name: 'decoder_name',
      type: 'Select',
      options: decoders_name_options,
    },
  ];
};

export const getCustomersReportFilters = ({
  area_options,
}: {
  area_options: IOptionNumber[];
}): ModalFormField<{
  area_ids: number[] | undefined;
  property_active: boolean | undefined;
}>[] => {
  return [
    {
      label: 'Areas',
      name: 'area_ids',
      type: 'MultiSelect',
      options: area_options,
    },
    {
      label: 'Property Status',
      name: 'property_active',
      type: 'Select',
      options: [
        {
          label: 'ACTIVE PROPERTY',
          value: true,
        },
        {
          label: 'INACTIVE PROPERTY',
          value: false,
        },
      ],
    },
  ];
};

export const getWorkShiftFilters = (): ModalFormField<{
  date_from: string;
  date_to: string;
  day_shift_start: string;
  night_shift_start: string;
}>[] => {
  return [
    {
      label: 'Date From',
      name: 'date_from',
      type: 'DatePicker',
      default_value: yesterday,
      required: true,
    },
    {
      label: 'Date To',
      name: 'date_to',
      type: 'DatePicker',
      default_value: formatDate(today),
      required: true,
    },
    {
      label: 'Day Shift Start',
      name: 'day_shift_start',
      type: 'Time',
      required: true,
      default_value: '06:00',
    },
    {
      label: 'Night Shift Start',
      name: 'night_shift_start',
      type: 'Time',
      required: true,
      default_value: '18:00',
    },
  ];
};
