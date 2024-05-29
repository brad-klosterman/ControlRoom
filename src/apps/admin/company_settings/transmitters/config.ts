import { CORE_TRANSMITTER_FRAGMENT } from 'codegen/graphql';
import { TableColumnConfig } from 'components/table/types';
import { toUpperSentence } from 'utils';

export const table_columns: TableColumnConfig<CORE_TRANSMITTER_FRAGMENT>[] = [
  {
    dataProps: item => ({
      label: item?.number?.toUpperCase() || '-',
    }),
    header: 'TRANSMITTER ID',
    property: 'number',
  },
  {
    dataProps: item => ({
      label: item?.description?.toUpperCase() || '-',
    }),
    header: 'DESCRIPTION',
    property: 'description',
  },
  {
    dataProps: item => ({
      label: item?.area?.name?.toUpperCase() || '-',
    }),
    header: 'AREA',
    property: 'area.name',
  },
  {
    dataProps: item => ({
      label: item?.decoder?.name?.toUpperCase() || '-',
    }),
    header: 'DECODER',
    property: 'decoder.name',
  },
  {
    dataProps: item => ({
      label: item?.set_name || '-',
    }),
    header: 'SET NAME',
    property: 'set_name',
  },
  {
    dataProps: item => ({
      label: item?.status ? toUpperSentence(item?.status) : '-',
    }),
    header: 'STATUS',
    property: 'status',
  },
];
