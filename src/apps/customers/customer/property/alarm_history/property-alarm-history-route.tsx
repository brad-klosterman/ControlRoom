import { useMemo } from 'react';
import { FieldValues } from 'react-hook-form';

import Areas from 'apps/admin/company_settings/areas/provider';
import { useProperty } from 'apps/customers/customer/property/provider';
import {
  HISTORY_ALARMS_DOCUMENT,
  HISTORY_ALARMS_QUERY,
  QUERY_HISTORY_ALARMS_ARGS,
} from 'src/apollo/codegen/graphql';
import { useSSPSettingsContext } from 'src/apps/admin/company_settings/settings/provider';
import { useUsersContext } from 'src/apps/admin/user_management/users/provider';
import { useSimpleModalUrlQueryState } from 'src/components';
import {
  AlarmHistoryTable,
  AlarmHistoryTableItem,
} from 'src/components/alarms';
import { SearchBarField } from 'src/components/table/search/types';
import { useListing } from 'src/hooks';
import { getEndOfDay, getStartOfDay } from 'src/utils/formatDateTime';

import { DownloadAlarmsReportModal } from './download-alarms-report-modal';

interface PropertyAlarmHistoryTableProps {
  property_id: number;
}

const PropertyAlarmHistoryTable = (props: PropertyAlarmHistoryTableProps) => {
  const { areas, areas_select } = Areas.useContext();
  const { agents } = useUsersContext();
  const { ssp_settings } = useSSPSettingsContext();
  const download_report_modal_state = useSimpleModalUrlQueryState(
    'download-alarm-history-report-modal',
  );
  const table = useListing<
    HISTORY_ALARMS_QUERY,
    QUERY_HISTORY_ALARMS_ARGS,
    AlarmHistoryTableItem
  >({
    document: HISTORY_ALARMS_DOCUMENT,
    response_map: {
      getItems: d => {
        return d?.history_alarms?.alarms.map(item => {
          const area = areas.find(a => a.id === item.area_id);
          const assigned_agent = agents.find(
            agent => agent.id === item.agent_id,
          );
          const row: AlarmHistoryTableItem = {
            ...item,
            customer: item.customer?.contact
              ? {
                  ...item.customer,
                  properties: [],
                }
              : null,
            agent_name: assigned_agent?.name,
            area_name: area?.name,
          };
          return row;
        });
      },
      getTotal: d => d?.history_alarms?.pagination.count || 0,
    },
    vars: {
      pagination: { page: 1, per_page: 50 },
      search_params: {
        property_id: props.property_id.toString(),
      },
    },
  });

  const search_params_config = useMemo<SearchBarField<FieldValues>[]>(() => {
    return [
      {
        name: 'alarm_type',
        label: 'Alarm Type',
        type: 'AlarmTypes',
      },
      {
        name: 'date_from',
        type: 'DatePicker',
        label: 'Date From',
      },
      {
        name: 'date_to',
        type: 'DatePicker',
        label: 'Date To',
      },
      {
        name: 'alarm_id',
        label: 'Alarm ID',
        type: 'Input',
      },
      {
        name: 'alarm_signal',
        type: 'Select',
        label: 'Alarm Signal',
        options: [
          { label: '-', value: undefined },
          { label: 'MULTI ZONE', value: 'multi_zone' },
          { label: 'OVERACTIVE', value: 'overactive' },
          { label: 'VIDEO FEED', value: 'video_feed' },
        ],
      },
      {
        name: 'responder_delegation',
        type: 'Select',
        label: 'Responder Delegations',
        options: [
          { label: 'RESPONDER DISPATCHED', value: 'responder_dispatched' },
          {
            label: 'RESPONDER NOT DISPATCHED',
            value: 'responder_not_dispatched',
          },
        ],
      },
      {
        name: 'incident_report',
        type: 'MultiSelect',
        label: 'Incident Report',
        options: [
          { label: 'PROPERTY ACCESSED', value: 'property_accessed' },
          { label: 'PROPERTY DAMAGE', value: 'property_damage' },
        ],
      },
    ];
  }, [areas_select.length, agents.length]);

  const onSearch = (search_params: FieldValues | undefined) => {
    const date_from =
      search_params?.date_from &&
      getStartOfDay(search_params?.date_from, ssp_settings?.time_zone);

    const date_to =
      search_params?.date_to &&
      getEndOfDay(search_params?.date_to, ssp_settings?.time_zone);

    table.onSearch(
      search_params && {
        search_params: {
          ...search_params,
          date_from: date_from && date_from.toUTC().toISO(),
          date_to: date_to && date_to.toUTC().toISO(),
          property_id: props.property_id.toString(),
        },
      },
    );
  };

  return (
    <>
      <AlarmHistoryTable
        data={table.renderedItems}
        menu={[
          {
            label: 'Download Report',
            onClick: download_report_modal_state.open,
            icon: 'FileCloud',
          },
        ]}
        onTableScrollEnd={table.loadPages}
        search={{
          params: search_params_config,
          onSearch,
          use_enter_key: true,
          number_of_columns: 4,
        }}
        table_notice={table.notice}
        total_items={table.total}
      />
      <DownloadAlarmsReportModal
        is_open={download_report_modal_state.is_open}
        onClose={download_report_modal_state.close}
        property_id={props.property_id}
      />
    </>
  );
};

const PropertyAlarmHistoryRoute = () => {
  const { property } = useProperty();

  if (!property?.id) return null;

  return <PropertyAlarmHistoryTable property_id={property.id} />;
};

export { PropertyAlarmHistoryRoute };
