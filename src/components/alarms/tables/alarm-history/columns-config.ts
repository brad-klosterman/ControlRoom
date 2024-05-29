import { TableColumnConfig } from 'src/components/table/types';
import { formatDateTime, toUpperSentence } from 'src/utils';
import { AlarmHistoryTableItem } from './types';

const alarm_history_table_columns_config: TableColumnConfig<AlarmHistoryTableItem>[] =
  [
    {
      dataProps: item => ({
        label: item?.id.toString(),
      }),
      header: 'ID',
      property: 'id',
      width: '14rem',
    },
    {
      dataProps: item => ({
        label:
          formatDateTime({
            date: item.created_at,
            format: 'dateTime',
            locale: 'en-ZA',
          }) ?? '-',
      }),
      header: 'CREATED ON',
      property: 'created_at',
    },
    {
      dataProps: item => ({
        label: toUpperSentence(item?.alarm_state),
      }),
      header: 'STATE',
      property: 'alarm_state',
    },
    {
      dataProps: item => ({
        label: item?.alarm_type?.toUpperCase() ?? '-',
      }),
      header: 'ALARM TYPE',
      property: 'alarm_type',
    },
    {
      dataProps: item => ({
        label: item?.area_name?.toUpperCase() ?? '-',
      }),
      header: 'AREA',
      property: 'area_name',
    },
    {
      dataProps: item => ({
        label:
          formatDateTime({
            date: item.responder_assigned_at,
            format: 'dateTime',
            locale: 'en-ZA',
          }) ?? '-',
      }),
      header: 'DISPATCHED AT',
      property: 'responder_assigned_at',
    },
    {
      dataProps: item => ({
        label:
          formatDateTime({
            date: item.enroute_at,
            format: 'dateTime',
            locale: 'en-ZA',
          }) ?? '-',
      }),
      header: 'ENROUTE AT',
      property: 'responder_enroute_at',
    },
    {
      dataProps: item => ({
        label:
          formatDateTime({
            date: item.saved_at,
            format: 'dateTime',
            locale: 'en-ZA',
          }) ?? '-',
      }),
      header: 'CUSTOMER SAVED AT',
      property: 'saved_at',
    },
  ];

export { alarm_history_table_columns_config };
