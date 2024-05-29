import Table from 'src/components/table';
import { alarm_history_table_columns_config } from './columns-config';
import { VirtualItem } from 'src/hooks/useVirtualItems';
import { NoticeType } from 'src/hooks/useListing';
import { FieldValues } from 'react-hook-form';
import { AlarmHistoryTableRow } from './row';
import { AlarmHistoryTableItem } from './types';
import { SearchBarProps } from 'src/components/table/search/types';
import { MenuItemType } from 'src/components/table/header/menu';

interface AlarmHistoryTableProps {
  data: Array<VirtualItem | AlarmHistoryTableItem>;
  total_items: number;
  search?: SearchBarProps<FieldValues>;
  menu?: MenuItemType[];
  table_notice?: NoticeType;
  onTableScrollEnd?: () => unknown;
}

const AlarmHistoryTable = (props: AlarmHistoryTableProps) => {
  return (
    <Table
      columns_config={alarm_history_table_columns_config}
      data={props.data}
      loadPages={props.onTableScrollEnd}
      notice={props.table_notice}
      renderExpanded={item =>
        'id' in item ? <AlarmHistoryTableRow {...{ item }} /> : null
      }
      search={props.search}
      total={props.total_items}
      expandable
      menu={props.menu}
    />
  );
};

export type { AlarmHistoryTableItem };
export { AlarmHistoryTable };
