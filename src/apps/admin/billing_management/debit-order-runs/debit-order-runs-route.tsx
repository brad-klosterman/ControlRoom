import { useQuery } from '@apollo/client';
import { getFragment } from 'src/apollo/codegen';
import {
  DEBIT_ORDER_EXPORT_FRAGMENT_DOC,
  FETCH_DEBIT_ORDER_EXPORTS_DOCUMENT,
} from 'src/apollo/codegen/graphql';
import { DebitOrderRunsTable } from './table';
import { GenerateDebitOrderRunModal } from './modal';
import { useSimpleModalState } from 'src/components';

const DebitOrderRunsRoute = () => {
  const generate_debit_order_run_modal = useSimpleModalState();
  const { data, refetch } = useQuery(FETCH_DEBIT_ORDER_EXPORTS_DOCUMENT);
  const debit_order_exports =
    getFragment(
      DEBIT_ORDER_EXPORT_FRAGMENT_DOC,
      data?.fetch_debit_order_exports,
    ) ?? [];

  const onDebitOrderRunGenerated = () => {
    refetch();
  };

  return (
    <>
      <DebitOrderRunsTable
        debit_order_runs={debit_order_exports}
        onGenerateDebitOrderRunClicked={generate_debit_order_run_modal.open}
      />
      <GenerateDebitOrderRunModal
        is_open={generate_debit_order_run_modal.is_open}
        onClose={generate_debit_order_run_modal.close}
        onSuccess={onDebitOrderRunGenerated}
      />
    </>
  );
};

export { DebitOrderRunsRoute };
