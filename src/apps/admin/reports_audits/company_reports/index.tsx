import { useLazyQuery } from '@apollo/client';
import React, { useContext } from 'react';

import Areas from 'apps/admin/company_settings/areas/provider';
import Decoders from 'apps/admin/company_settings/decoders/provider';
import ExpandedContent from 'apps/admin/reports_audits/company_reports/expanded';
import {
  getAlarmReportFilters,
  getAnalyticsReportFilters,
  getCustomersReportFilters,
  getDelegationsReportFilters,
  getTransmittersStockFilters,
  getWorkShiftFilters,
  ReportTypeForm,
} from 'apps/admin/reports_audits/company_reports/forms';
import {
  QUERY_FETCH_SSP_REPORTS_ARGS,
  FETCH_SSP_REPORTS_QUERY,
  SSP_REPORT_EXPORT,
  FETCH_SSP_REPORTS_DOCUMENT,
  COMPANY_REPORT_TYPE,
  GENERATE_FALSE_ALARMS_REPORT_DOCUMENT,
  GENERATE_OVERACTIVE_ALARMS_REPORT_DOCUMENT,
  GENERATE_TRANSMITTERS_STOCK_REPORT_DOCUMENT,
  GENERATE_RESPONDERS_DELEGATIONS_REPORT_DOCUMENT,
  GENERATE_OB_STATS_REPORT_DOCUMENT,
  GENERATE_CUSTOMERS_KEYHOLDERS_REPORT_DOCUMENT,
  GENERATE_CUSTOMERS_PROPERTIES_REPORT_DOCUMENT,
  GENERATE_HOME_ALARM_REPORT_DOCUMENT,
  GENERATE_WORK_SHIFT_REPORT_DOCUMENT,
} from 'codegen/graphql';
import Table from 'components/table';
import Modal from 'components/ui/Modal/provider';
import { ModalFormField } from 'components/ui/Modal/types';
import { useListing } from 'hooks';
import useResponseStatus from 'hooks/use.response-status';
import { convertToUtcTimeString } from 'src/utils/formatDateTime';
import { toUpperSentence } from 'utils';

import { table_columns } from './config';
import { useSSPSettingsContext } from '../../company_settings/settings/provider';

const DEFAULT_TIME_ZONE = 'Africa/Johannesburg';

const CompanyReportsRoute = () => {
  const { decoders_name_select: decoders_name_options } = Decoders.useContext();
  const { areas_select: area_options } = Areas.useContext();

  const { ssp_settings } = useSSPSettingsContext();
  const modal = useContext(Modal.Context);
  const toast = useResponseStatus({ id: 'invoices' });

  const table = useListing<
    FETCH_SSP_REPORTS_QUERY,
    QUERY_FETCH_SSP_REPORTS_ARGS,
    SSP_REPORT_EXPORT
  >({
    document: FETCH_SSP_REPORTS_DOCUMENT,
    response_map: {
      getItems: d => d?.fetch_ssp_reports?.reports || [],
      getTotal: d => d?.fetch_ssp_reports?.pagination.count || 0,
    },
    vars: { pagination: { page: 1, per_page: 50 } },
  });

  const [generate_false_alarms_report] = useLazyQuery(
    GENERATE_FALSE_ALARMS_REPORT_DOCUMENT,
  );
  const [generate_overactive_alarms_report] = useLazyQuery(
    GENERATE_OVERACTIVE_ALARMS_REPORT_DOCUMENT,
  );
  const [generate_home_alarm_report] = useLazyQuery(
    GENERATE_HOME_ALARM_REPORT_DOCUMENT,
  );
  const [generate_transmitters_stock_report] = useLazyQuery(
    GENERATE_TRANSMITTERS_STOCK_REPORT_DOCUMENT,
  );
  const [generate_responders_delegations_report] = useLazyQuery(
    GENERATE_RESPONDERS_DELEGATIONS_REPORT_DOCUMENT,
  );
  const [generate_ob_stats_report] = useLazyQuery(
    GENERATE_OB_STATS_REPORT_DOCUMENT,
  );
  const [generate_customers_properties_report] = useLazyQuery(
    GENERATE_CUSTOMERS_PROPERTIES_REPORT_DOCUMENT,
  );
  const [generate_customers_keyholders_report] = useLazyQuery(
    GENERATE_CUSTOMERS_KEYHOLDERS_REPORT_DOCUMENT,
  );
  const [generate_work_shift_report] = useLazyQuery(
    GENERATE_WORK_SHIFT_REPORT_DOCUMENT,
  );

  const onSelectReportType = (type: COMPANY_REPORT_TYPE) => {
    const title = `${toUpperSentence(type)} REPORT`;
    let form: ModalFormField<any>[] | undefined;
    let onConfirm: (variables: any) => Promise<boolean | undefined>;

    if (type === 'FALSE_ALARMS') {
      form = getAlarmReportFilters({ area_options });

      onConfirm = async variables =>
        generate_false_alarms_report({
          variables,
        }).then(({ data }) => data?.generate_false_alarms_report);
    }

    if (type === 'OVERACTIVE_ALARMS') {
      form = getAlarmReportFilters({ area_options });

      onConfirm = async variables =>
        generate_overactive_alarms_report({
          variables,
        }).then(({ data }) => data?.generate_overactive_alarms_report);
    }

    if (type === 'HOME_ALARM') {
      form = getAlarmReportFilters({
        area_options,
        default_values: {
          alarm_type: 'FAILED TO TEST',
        },
      });

      onConfirm = async variables =>
        generate_home_alarm_report({
          variables,
        }).then(({ data }) => data?.generate_home_alarm_report);
    }

    if (type === 'TRANSMITTERS_STOCK') {
      form = getTransmittersStockFilters({
        area_options,
        decoders_name_options,
      });

      onConfirm = async variables =>
        generate_transmitters_stock_report({
          variables,
        }).then(({ data }) => data?.generate_transmitters_stock_report);
    }

    if (type === 'RESPONDERS_DELEGATIONS') {
      form = getDelegationsReportFilters({ area_options });

      onConfirm = async variables =>
        generate_responders_delegations_report({
          variables,
        }).then(({ data }) => data?.generate_responders_delegations_report);
    }

    if (type === 'OB_STATS') {
      form = getAnalyticsReportFilters({ area_options });

      onConfirm = async variables =>
        generate_ob_stats_report({
          variables,
        }).then(({ data }) => data?.generate_ob_stats_report);
    }

    if (type === 'CUSTOMERS_PROPERTIES') {
      form = getCustomersReportFilters({ area_options });

      onConfirm = async variables =>
        generate_customers_properties_report({
          variables,
        }).then(({ data }) => data?.generate_customers_properties_report);
    }

    if (type === 'CUSTOMERS_KEYHOLDERS') {
      form = getCustomersReportFilters({ area_options });

      onConfirm = async variables =>
        generate_customers_keyholders_report({
          variables,
        }).then(({ data }) => data?.generate_customers_keyholders_report);
    }

    if (type === 'WORK_SHIFT') {
      form = getWorkShiftFilters();

      onConfirm = async (variables: {
        date_from: string;
        date_to: string;
        day_shift_start: string;
        night_shift_start: string;
      }) => {
        const day_shift_start_in_utc = convertToUtcTimeString(
          variables.day_shift_start,
          ssp_settings?.time_zone ?? DEFAULT_TIME_ZONE,
        );
        const night_shift_start_in_utc = convertToUtcTimeString(
          variables.night_shift_start,
          ssp_settings?.time_zone ?? DEFAULT_TIME_ZONE,
        );

        if (!day_shift_start_in_utc || !night_shift_start_in_utc) {
          return false;
        }

        const date_from_with_time = `${variables.date_from}T${day_shift_start_in_utc}:00Z`;
        const date_to_with_time = `${variables.date_to}T${day_shift_start_in_utc}:00Z`;

        const request_variables = {
          date_from: date_from_with_time,
          date_to: date_to_with_time,
          day_shift_start: day_shift_start_in_utc,
          night_shift_start: night_shift_start_in_utc,
        };

        return generate_work_shift_report({
          variables: request_variables,
        }).then(({ data }) => data?.generate_work_shift_report);
      };
    }

    modal.updateContent({
      title,
      form,
      onConfirm: filters =>
        onConfirm(filters).then(success => {
          if (success) {
            toast.successAlert(`GENERATED ${title}`);
            modal.close();

            setTimeout(() => {
              table.reset();
            }, 1000);
          } else {
            toast.errorAlert('ERROR GENERATING REPORT');
          }
        }),
      actions: [{ type: 'cancel' }, { type: 'confirm', text: 'GENERATE' }],
    });
  };

  const openReportTypeModal = async () => {
    modal.open({
      title: 'COMPANY REPORTS',
      actions: [{ type: 'cancel' }],
      component: () => <ReportTypeForm onSelectType={onSelectReportType} />,
    });
  };

  return (
    <Table
      columns_config={table_columns}
      data={table.renderedItems}
      expandable
      loadPages={table.loadPages}
      menu={[
        {
          icon: 'FileCloud',
          label: 'GENERATE REPORT',
          onClick: openReportTypeModal,
        },
        {
          icon: 'Refresh',
          label: 'REFRESH TABLE',
          onClick: () => table.reset(),
        },
      ]}
      renderExpanded={item =>
        'id' in item ? (
          <ExpandedContent area_options={area_options} item={item} />
        ) : null
      }
      total={table.total}
    />
  );
};

export default CompanyReportsRoute;
