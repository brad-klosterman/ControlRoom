import { Property } from 'csstype';
import { CSSProperties, ReactNode } from 'react';
import { FieldValues } from 'react-hook-form';

import { SearchBarField } from 'apps/dashboard/components/table/search/types';
import { TableDataItem } from 'components/ui/Listing/Data';
import { MenuItemType } from 'components/ui/Listing/Header/menu';
import { NoticeType } from 'hooks/useListing';

export interface TableColumnConfig<TData extends Record<string, any>> {
  dataProps(datum: TData): TableDataItem;
  property: any;
  header: string;
  info?: string;
  skeletonWidth?: CSSProperties['width'];
  sortable?: boolean;
  width?: CSSProperties['width'];
  align?: Property.JustifyContent;
}

export type TableProps<
  TRowData extends Record<string, any>,
  TSearchParams extends FieldValues,
> = {
  data: readonly TRowData[];
  columns_config: TableColumnConfig<TRowData>[];
  search_params?: SearchBarField<TSearchParams>[];
  loadPages?: () => void;
  page_size?: number;
  total: number;
  expandable?: true;
  notice?: NoticeType;
  renderExpanded?: (d: TRowData) => ReactNode;
  onSelectRow?: (d: TRowData) => void;
  menu?: MenuItemType[];
  loading?: boolean;
  flex?: boolean;
};
