import { TableColumnConfig } from 'components/table/types';
import { CORE_ALARM_TYPE_FRAGMENT } from 'src/apollo/codegen/graphql';
import { toUpperSentence } from 'utils';

import { getAlarmTypeStackAllocation } from './form.values';

export const table_columns: TableColumnConfig<CORE_ALARM_TYPE_FRAGMENT>[] = [
  {
    dataProps: item => ({
      label: item?.alarm_type_name?.toUpperCase() || '-',
    }),
    header: 'NAME',
    property: 'alarm_type_name',
  },
  {
    dataProps: item => ({
      label: item.priority?.toString() || '-',
    }),
    header: 'PRIORITY',
    property: 'priority',
  },
  {
    dataProps: item => ({
      label: toUpperSentence(getAlarmTypeStackAllocation(item)),
    }),
    header: 'STACK ALLOCATION',
    property: 'stack',
  },
  {
    dataProps: item => ({
      label: item?.description || '-',
    }),
    header: 'DESCRIPTION',
    property: 'alarm_type_name',
  },
  {
    dataProps: item => ({
      label: item?.sends_push_notifications ? 'YES' : 'NO' || '-',
    }),
    header: 'NOTIFICATION',
    property: 'sends_push_notifications',
  },
];
