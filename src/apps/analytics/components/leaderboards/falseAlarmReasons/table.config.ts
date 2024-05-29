import type { Property } from 'csstype';

import { TableDataItem } from 'components/ui/Listing/Data';

interface ColumnConfig<ItemProps extends Record<string, any>> {
  dataProps(datum: ItemProps, index: number): TableDataItem;
  header: string;
  info?: string;
  property: any;
  skeletonWidth?: Property.Width;
  sortable?: boolean;
  width?: Property.Width;
}

export const table_columns: ColumnConfig<any>[] = [
  // {
  //   dataProps: index => ({
  //     label: `${index}`,
  //   }),
  //   header: 'Index',
  //   property: 'index',
  // },
  {
    dataProps: (reason, index) => ({
      label: `${index}. ${reason?.reason}`,
    }),
    header: 'Reasons',
    property: 'reason',
  },
];
