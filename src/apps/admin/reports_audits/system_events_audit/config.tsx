import { SYSTEM_CHANGE_EVENT_FRAGMENT } from 'codegen/graphql';
import { formatDateTime } from 'utils';
import { type TableColumnConfig } from 'components/table/types';

const table_columns: TableColumnConfig<SYSTEM_CHANGE_EVENT_FRAGMENT>[] = [
  {
    dataProps: item => ({
      label: item.changed_type?.toUpperCase(),
    }),
    header: 'CHANGED TYPE',
    property: 'changed_type',
  },
  {
    dataProps: item => ({
      label: item.event_type?.toUpperCase(),
    }),
    header: 'EVENT TYPE',
    property: 'status',
  },
  {
    dataProps: item => ({
      label: item.changed_by_id?.toUpperCase(),
    }),
    header: 'CHANGED BY',
    property: 'changed_by_id',
  },
  {
    dataProps: item => ({
      label:
        formatDateTime({
          date: item?.changed_date,
          format: 'dateTime',
          locale: 'en-ZA',
        }) || '-',
    }),
    header: 'CHANGED ON',
    property: 'changed_date',
  },
];

export default { table_columns };

/*

 const buildHistoryTypeOptions = (): IOption[] => {
    const default_options: IOption[] = [
      {
        value: '',
        label: '-',
      },
    ];
    return default_options
      .concat(
        version_types.map(version_type => ({
          value: version_type,
          label: version_type,
        })),
      )
      .sort(sortOptionLabels);
  };
{
        value: 'anonymous',
        label: '[SYSTEM]',
      },
 */
