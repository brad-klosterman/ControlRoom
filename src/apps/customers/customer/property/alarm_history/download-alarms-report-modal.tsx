import { DateTime } from 'luxon';
import QueryString from 'qs';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { API_ROOT, MIS_ROOT } from 'src/apollo/config/endpoints';
import { AlarmTypeSelector } from 'src/apps/admin/alarm_management/types_config/selector';
import { useSSPSettingsContext } from 'src/apps/admin/company_settings/settings/provider';
import { ModalFormContent, SimpleActionModal } from 'components/ui';
import { ControlledDatePicker } from 'src/components/ui/DatePicker/controlled';
import { useResponseStatus } from 'src/hooks';
import { formatDate } from 'src/utils/date.utils/formatDate';
import { fetchReport } from 'src/utils/download_documents/fetchReport';
import {
  getEndtOfDayUtcIso,
  getStartOfDayUtcIso,
} from 'src/utils/formatDateTime';

const FORMATTED_DATE_ONE_WEEK_AGO = formatDate(
  DateTime.now().minus({ week: 1 }).toJSDate(),
);
const FORMATTED_DATE_TODAY = formatDate(new Date());

interface DownloadAlarmsReportForm {
  date_from: string | null;
  date_to: string | null;
  alarm_type: string | null;
}

interface DownloadAlarmsReportModalProps {
  property_id: number;
  is_open: boolean;
  onClose: () => unknown;
}

const DownloadAlarmsReportModal = (props: DownloadAlarmsReportModalProps) => {
  const { errorAlert, successAlert } = useResponseStatus();
  const { ssp_settings } = useSSPSettingsContext();
  const download_alarm_report_form = useForm<DownloadAlarmsReportForm>({
    mode: 'onSubmit',
    defaultValues: {
      date_from: FORMATTED_DATE_ONE_WEEK_AGO,
      date_to: FORMATTED_DATE_TODAY,
      alarm_type: null,
    },
  });

  const close = () => {
    download_alarm_report_form.reset();
    props.onClose();
  };

  const createReportUrlQueryString = (
    fields: DownloadAlarmsReportForm,
  ): string => {
    return QueryString.stringify(
      {
        query: {
          created_at_gteq:
            getStartOfDayUtcIso(fields.date_from, ssp_settings?.time_zone) ??
            undefined,
          created_at_lteq:
            getEndtOfDayUtcIso(fields.date_to, ssp_settings?.time_zone) ??
            undefined,
          alarm_type_eq: fields.alarm_type ?? undefined,
        },
      },
      { arrayFormat: 'brackets', encodeValuesOnly: true },
    );
  };

  const createFileName = (
    property_id: number,
    fields: DownloadAlarmsReportForm,
  ): string => {
    let file_name = `Alarms Activity Report (${property_id})`;

    if (fields.date_from) {
      file_name += ` ${fields.date_from}`;
    }

    if (fields.date_to) {
      file_name += ` - ${fields.date_to}`;
    }

    if (fields.alarm_type) {
      file_name += ` ${fields.alarm_type}`;
    }

    return file_name;
  };

  const onSubmit: SubmitHandler<DownloadAlarmsReportForm> = async fields => {
    const file_name = createFileName(props.property_id, fields);
    const qs_params = createReportUrlQueryString(fields);

    fetchReport({
      filename: file_name,
      link: `${API_ROOT}${MIS_ROOT}/clients/${props.property_id}/alarms-activity-report?${qs_params}`,
    })
      .then(() => {
        successAlert('Report Downloaded');
        close();
      })
      .catch(() => {
        errorAlert('Could not download Report');
      });
  };

  return (
    <SimpleActionModal
      is_open={props.is_open}
      onClose={close}
      title="DOWNLOAD ALARMS REPORT"
      actions={[
        {
          title: 'CANCEL',
          onClick: close,
          variant: 'other-secondary',
        },
        {
          title: 'DOWNLOAD',
          onClick: download_alarm_report_form.handleSubmit(onSubmit),
          variant: 'primary',
        },
      ]}
    >
      <ModalFormContent>
        <ControlledDatePicker
          label="Date From"
          name="date_from"
          control={download_alarm_report_form.control}
        />
        <ControlledDatePicker
          label="Date To"
          name="date_to"
          control={download_alarm_report_form.control}
        />
        <Controller
          control={download_alarm_report_form.control}
          name="alarm_type"
          render={({ field: { onChange, value } }) => (
            <AlarmTypeSelector
              selected={value ?? undefined}
              setSelected={v => onChange(v)}
              null_value_text="ALL ALARM TYPES"
            />
          )}
        />
      </ModalFormContent>
    </SimpleActionModal>
  );
};

export type { DownloadAlarmsReportModalProps };
export { DownloadAlarmsReportModal };
