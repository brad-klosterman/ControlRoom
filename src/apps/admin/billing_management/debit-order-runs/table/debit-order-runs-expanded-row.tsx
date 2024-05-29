import { getFragment } from 'src/apollo/codegen';
import {
  DEBIT_ORDER_ATTACHED_FILE_FRAGMENT_DOC,
  DEBIT_ORDER_EXPORT_FRAGMENT,
} from 'src/apollo/codegen/graphql';
import { Expanded } from 'src/components/table';
import styled from 'styled-components';
import { DebitOrderAttachedFileCard } from './debit-order-attached-file-card';

namespace S {
  export const Content = styled.div`
    padding: 2rem;

    > * {
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  `;
}

interface Props {
  debit_order_run: DEBIT_ORDER_EXPORT_FRAGMENT;
}

const DebitOrderRunsExpandedRow = ({ debit_order_run }: Props) => {
  const attached_files = getFragment(
    DEBIT_ORDER_ATTACHED_FILE_FRAGMENT_DOC,
    debit_order_run.all_attached_files,
  );

  return (
    <Expanded>
      <S.Content>
        {attached_files.map(attached_file => (
          <DebitOrderAttachedFileCard attached_file={attached_file} />
        ))}
      </S.Content>
    </Expanded>
  );
};

export { DebitOrderRunsExpandedRow };
