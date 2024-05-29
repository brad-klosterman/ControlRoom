import {
  DEBIT_ORDER_ATTACHED_FILE_FRAGMENT_DOC,
  DEBIT_ORDER_EXPORT_FRAGMENT,
} from 'src/apollo/codegen/graphql';
import Table from 'src/components/table';
import { TableColumnConfig } from 'src/components/table/types';
import { DebitOrderRunsExpandedRow } from './debit-order-runs-expanded-row';
import { getFragment } from 'src/apollo/codegen';
import { toUpperSentence } from 'src/utils';
import { getRelativeDateString } from 'src/utils/formatDateTime';
import { StatusLight } from 'src/components/ui/Listing/Data/styles';

const generatePaymentMethodString = (
  debit_order_export: DEBIT_ORDER_EXPORT_FRAGMENT,
): string => {
  const attached_files = getFragment(
    DEBIT_ORDER_ATTACHED_FILE_FRAGMENT_DOC,
    debit_order_export.all_attached_files,
  );
  return attached_files.reduce((acc, cur) => {
    if (!cur.type) {
      return acc;
    }

    const prefix = !acc ? '' : ', ';
    return acc + prefix + toUpperSentence(cur.type);
  }, '');
};

const getLastGeneratedString = (
  debit_order_export: DEBIT_ORDER_EXPORT_FRAGMENT,
): string => {
  const attached_files = getFragment(
    DEBIT_ORDER_ATTACHED_FILE_FRAGMENT_DOC,
    debit_order_export.all_attached_files,
  );
  const most_recent_file = [...attached_files]
    .filter(x => x.type)
    .sort((a, b) => (a.created_at! > b.created_at! ? -1 : 1))[0];

  if (!most_recent_file) {
    return '-';
  }

  return getRelativeDateString(most_recent_file.created_at) ?? '-';
};

const getStatusLight = (
  debit_order: DEBIT_ORDER_EXPORT_FRAGMENT,
): StatusLight => {
  if (debit_order.status === 'idle' || debit_order.status === 'processed') {
    return 'success';
  }

  return 'warning';
};

const table_columns: TableColumnConfig<DEBIT_ORDER_EXPORT_FRAGMENT>[] = [
  {
    dataProps: debit_order_export => ({
      label: debit_order_export.month_of,
    }),
    header: 'MONTH OF',
    property: 'month_of',
    width: '15rem',
  },
  {
    dataProps: debit_order_export => ({
      label: debit_order_export.collection_date ?? '-',
    }),
    header: 'COLLECTION DAY',
    property: 'collection_date',
    width: '15rem',
  },
  {
    dataProps: debit_order_export => ({
      label: getLastGeneratedString(debit_order_export),
    }),
    header: 'LAST GENERATED',
    property: 'last_generated',
  },
  {
    dataProps: debit_order_export => ({
      label: generatePaymentMethodString(debit_order_export),
    }),
    header: 'PAYMENT METHODS',
    property: 'payment_methods',
    width: '30rem',
  },
  {
    dataProps: debit_order_export => ({
      label: debit_order_export.status
        ? toUpperSentence(debit_order_export.status)
        : '-',
      status: getStatusLight(debit_order_export),
    }),
    header: 'STATUS',
    property: 'status',
    width: '15rem',
  },
];

interface Props {
  debit_order_runs: readonly DEBIT_ORDER_EXPORT_FRAGMENT[];
  onGenerateDebitOrderRunClicked: () => unknown;
}

const DebitOrderRunsTable = ({
  debit_order_runs,
  onGenerateDebitOrderRunClicked,
}: Props) => {
  const debit_order_exports_sorted_by_month = [...debit_order_runs].sort(
    (a, b) => (a.month_of > b.month_of ? -1 : 1),
  );

  return (
    <Table
      columns_config={table_columns}
      data={debit_order_exports_sorted_by_month}
      expandable
      menu={[
        {
          icon: 'FileCloud',
          label: 'GENERATE DEBIT ORDER RUN',
          onClick: onGenerateDebitOrderRunClicked,
        },
      ]}
      renderExpanded={row =>
        'id' in row ? <DebitOrderRunsExpandedRow debit_order_run={row} /> : null
      }
      total={debit_order_exports_sorted_by_month.length}
    />
  );
};

export { DebitOrderRunsTable };
