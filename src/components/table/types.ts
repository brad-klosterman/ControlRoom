import React, { type ReactNode } from 'react';
import { Property } from 'csstype';
import { FieldValues } from 'react-hook-form';

import { TableDataItem } from 'components/ui/Listing/Data';
import { MenuItemType } from 'components/ui/Listing/Header/menu';
import { NoticeType } from 'hooks/useListing';

import { SearchBarProps } from './search/types';

export interface TableColumnConfig<TRow extends Record<string, any>> {
  dataProps(datum: TRow): TableDataItem | TableDataItem[];
  property?: any;
  header: string;
  info?: string;
  sortable?: boolean;
  width?: React.CSSProperties['width'];
  align?: Property.JustifyContent;
}

export type TableProps<
  TRow extends Record<string, any>,
  TSearchParams extends FieldValues,
> = {
  data: readonly TRow[];
  columns_config: TableColumnConfig<TRow>[];
  loadPages?: () => void;
  page_size?: number;
  total: number;
  expandable?: true;
  notice?: NoticeType;
  renderExpanded?: (d: TRow) => ReactNode;
  onExpansionChange?: (event: React.SyntheticEvent, keys: string[]) => void;
  onSelectRow?: (d: TRow) => void;
  menu?: MenuItemType[];
  search?: SearchBarProps<TSearchParams>;
};
