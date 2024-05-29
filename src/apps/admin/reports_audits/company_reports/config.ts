import { SSP_REPORT_EXPORT } from 'codegen/graphql';
import { TableColumnConfig } from 'components/table/types';
import { formatDateTime, toUpperSentence } from 'utils';

export const table_columns: TableColumnConfig<SSP_REPORT_EXPORT>[] = [
  {
    dataProps: report => ({
      label: report.id.toString(),
    }),
    header: 'ID',
    property: 'id',
    width: '10rem',
  },
  {
    dataProps: report => ({
      label: report.name.toUpperCase(),
    }),
    header: 'REPORT NAME',
    property: 'name',
  },
  {
    dataProps: report => {
      const start_date = report.date_from || '';
      const end_date = report.date_to || '';
      const date_range = start_date + ' -- ' + end_date;
      return {
        label: date_range,
      };
    },
    header: 'DATE RANGE',
    property: 'date_from',
  },
  {
    dataProps: report => ({
      label: report.records_count ? report.records_count.toString() : '-',
    }),
    header: 'RECORDS COUNT',
    property: 'records_count',
  },
  {
    dataProps: report => ({
      label:
        formatDateTime({
          date: report.created_at,
          format: 'dateTime',
          locale: 'en-ZA',
        }) || '-',
    }),
    header: 'CREATED ON',
    property: 'created_at',
  },
  {
    dataProps: report => ({
      label: report.status ? toUpperSentence(report.status) : '-',
      status: report?.status === 'processed' ? 'success' : 'warning',
    }),
    header: 'STATUS',
    property: 'status',
  },
];
