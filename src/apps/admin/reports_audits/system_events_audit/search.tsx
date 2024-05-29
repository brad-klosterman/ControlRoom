import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import {
  FETCH_SYSTEM_CHANGE_TYPES_DOCUMENT,
  FETCH_SYSTEM_CHANGE_TYPES_QUERY,
  type SYSTEM_EVENTS_AUDIT_SEARCH_PARAMS,
} from 'codegen/graphql';
import { getEndOfDay, getStartOfDay } from 'utils/formatDateTime';
import { formatDate } from 'utils/date.utils/formatDate';
import { useUsersContext } from 'apps/admin/user_management/users/provider';
import { useSSPSettingsContext } from 'apps/admin/company_settings/settings/provider';
import { SearchBarField, SearchBarProps } from 'components/table/search/types';

const todays_date = formatDate(new Date());
const last_week_date = formatDate(
  new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
);

const useSearchParams = (props: {
  onSearchTable(params?: {
    search_params: SYSTEM_EVENTS_AUDIT_SEARCH_PARAMS;
  }): void;
}): SearchBarProps<
  Omit<SYSTEM_EVENTS_AUDIT_SEARCH_PARAMS, 'changed_by_id'> & {
    changed_by_id: string | number;
  }
> => {
  const { account_manager_options } = useUsersContext();
  const { ssp_settings } = useSSPSettingsContext();

  const ChangeTypesAPI = useQuery<FETCH_SYSTEM_CHANGE_TYPES_QUERY>(
    FETCH_SYSTEM_CHANGE_TYPES_DOCUMENT,
  );

  const system_change_types =
    ChangeTypesAPI.data?.fetch_system_change_types ?? [];

  const params: SearchBarField<
    Omit<SYSTEM_EVENTS_AUDIT_SEARCH_PARAMS, 'changed_by_id'> & {
      changed_by_id: string | number;
    }
  >[] = useMemo(
    () => [
      {
        name: 'event_type',
        type: 'Select',
        label: 'Event Type',
        options: [
          { label: 'CREATE', value: 'create' },
          { label: 'UPDATE', value: 'update' },
          { label: 'DELETE', value: 'delete' },
        ],
      },
      {
        name: 'changed_type',
        type: 'Select',
        label: 'Changed Type',
        options: system_change_types.map(change_type => ({
          label: change_type.toUpperCase(),
          value: change_type,
        })),
      },
      {
        name: 'changed_by_id',
        type: 'Select',
        label: 'Changed By',
        options: [
          ...account_manager_options,
          {
            value: 'anonymous',
            label: '[SYSTEM]',
          },
        ],
      },
      {
        name: 'date_range_start',
        type: 'DatePicker',
        label: 'Date From',
        default_value: last_week_date,
      },
      {
        name: 'date_range_end',
        type: 'DatePicker',
        label: 'Date To',
        default_value: todays_date,
      },
    ],
    [system_change_types, account_manager_options.length],
  );

  return {
    params,
    onSearch(search_params) {
      const date_from =
        search_params?.date_range_start &&
        getStartOfDay(search_params?.date_range_start, ssp_settings?.time_zone);

      const date_to =
        search_params?.date_range_end &&
        getEndOfDay(search_params?.date_range_end, ssp_settings?.time_zone);

      const table_search_params = {
        ...search_params,
        date_range_start: date_from && date_from.toUTC().toISO(),
        date_range_end: date_to && date_to.toUTC().toISO(),
        changed_by_id: search_params?.changed_by_id?.toString(),
      };

      props.onSearchTable(
        search_params && {
          search_params: table_search_params,
        },
      );
    },
  };
};

export { useSearchParams };
