import { useListing } from 'hooks';
import {
  QUERY_FETCH_SYSTEM_EVENTS_AUDIT_ARGS,
  FETCH_SYSTEM_EVENTS_AUDIT_QUERY,
  SYSTEM_CHANGE_EVENT_FRAGMENT,
  FETCH_SYSTEM_EVENTS_AUDIT_DOCUMENT,
  SYSTEM_CHANGE_EVENT_FRAGMENT_DOC,
} from 'codegen/graphql';
import { getFragment } from 'codegen';
import Table from 'components/table';

import ExpandedContent from './table.item';
import config from './config';
import { useSearchParams } from './search';

const SystemEventsTable = (props: { customer_id?: number }) => {
  /** Table Data */
  const table = useListing<
    FETCH_SYSTEM_EVENTS_AUDIT_QUERY,
    QUERY_FETCH_SYSTEM_EVENTS_AUDIT_ARGS,
    SYSTEM_CHANGE_EVENT_FRAGMENT
  >({
    document: FETCH_SYSTEM_EVENTS_AUDIT_DOCUMENT,
    response_map: {
      getItems: d => {
        const items =
          getFragment(
            SYSTEM_CHANGE_EVENT_FRAGMENT_DOC,
            d?.fetch_system_events_audit.system_change_events,
          ) || [];
        return [...items];
      },
      getTotal: d => d?.fetch_system_events_audit?.pagination.count || 0,
    },
    vars: {
      customer_id: props.customer_id,
      pagination: { page: 1, per_page: 50 },
    },
  });

  /** Table Search */
  const search = useSearchParams({
    onSearchTable(params) {
      table.onSearch(params);
    },
  });

  return (
    <Table
      columns_config={config.table_columns}
      data={table.renderedItems}
      expandable
      loadPages={table.loadPages}
      renderExpanded={item =>
        'changed_type' in item ? <ExpandedContent item={item} /> : null
      }
      search={search}
      total={table.total}
    />
  );
};

export { SystemEventsTable };
