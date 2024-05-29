import { DateTime } from 'luxon';
import { useMemo } from 'react';
import { FieldValues } from 'react-hook-form';

import Areas from 'apps/admin/company_settings/areas/provider';
import { useSSPSettingsContext } from 'apps/admin/company_settings/settings/provider';
import { useUsersContext } from 'apps/admin/user_management/users/provider';
import { RouteWrap } from 'apps/dashboard/style';
import {
  HISTORY_ALARMS_DOCUMENT,
  HISTORY_ALARMS_QUERY,
  QUERY_HISTORY_ALARMS_ARGS,
} from 'codegen/graphql';
import { SearchBarField } from 'components/table/search/types';
import { useListing } from 'hooks';
import {
  AlarmHistoryTable,
  AlarmHistoryTableItem,
} from 'src/components/alarms';
import { getLastWeeksDate } from 'utils';
import { formatDate } from 'utils/date.utils/formatDate';
import {
  formatDateTimeToUtcIso,
  getEndtOfDayUtcIso,
  getStartOfDayUtcIso,
} from 'utils/formatDateTime';

const AlarmHistoryRoute = () => {
  const { areas, areas_select } = Areas.useContext();
  const { agents } = useUsersContext();
  const { ssp_settings } = useSSPSettingsContext();

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
        date_from: getStartOfDayUtcIso(
          formatDate(getLastWeeksDate()),
          ssp_settings?.time_zone,
        ),
        date_to: formatDateTimeToUtcIso(DateTime.now()),
      },
    },
  });

  const number_of_search_columns = 4;

  const search_params_config = useMemo<SearchBarField<FieldValues>[]>(() => {
    const params: SearchBarField<FieldValues>[] = [
      {
        name: 'alarm_source',
        type: 'Select',
        label: 'Alarm Source',
        options: [
          { label: 'PROPERTY', value: 'property' },
          { label: 'MOBILE PANICS', value: 'user_app' },
        ],
        default_value: 'property',
      },
      {
        name: 'date_from',
        type: 'DatePicker',
        label: 'Date From',
        default_value: formatDate(getLastWeeksDate()),
      },
      {
        name: 'date_to',
        type: 'DatePicker',
        label: 'Date To',
        default_value: formatDate(new Date()),
      },
      {
        name: 'alarm_id',
        label: 'Alarm ID',
        type: 'Input',
      },
      {
        name: 'alarm_type',
        label: 'Alarm Type',
        type: 'AlarmTypes',
      },
      {
        name: 'area_ids',
        type: 'MultiSelect',
        label: 'Areas',
        options: areas_select,
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
    ];

    return params;
  }, [areas_select.length]);

  const onSearch = (search_params: FieldValues | undefined) => {
    table.onSearch(
      search_params && {
        search_params: {
          ...search_params,
          date_from: getStartOfDayUtcIso(
            search_params?.date_from,
            ssp_settings?.time_zone,
          ),
          date_to: getEndtOfDayUtcIso(
            search_params?.date_to,
            ssp_settings?.time_zone,
          ),
        },
      },
    );
  };

  return (
    <RouteWrap direction="column" gap="regular">
      <AlarmHistoryTable
        data={table.renderedItems}
        onTableScrollEnd={table.loadPages}
        search={{
          title: 'ALARM HISTORY',
          params: search_params_config,
          onSearch,
          use_enter_key: true,
          number_of_columns: number_of_search_columns,
        }}
        table_notice={table.notice}
        total_items={table.total}
      />
    </RouteWrap>
  );
};

export { AlarmHistoryRoute };

/*
Advanced search
{
  name: 'incident_report',
  type: 'MultiSelect',
  label: 'Incident Report',
  options: [
    { label: 'PROPERTY ACCESSED', value: 'property_accessed' },
    { label: 'PROPERTY DAMAGE', value: 'property_damage' },
  ],
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
}
 */
