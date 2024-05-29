import { CUSTOMER_BILLING_TRANSACTION_FRAGMENT } from 'codegen/graphql';
import Table from 'components/table';
import { TableColumnConfig } from 'components/table/types';
import { NoticeType } from 'hooks/useListing';
import { formatDateTime } from 'utils';
import { withCurrency } from 'utils/currency/format.cents-currency';
import { TransactionActions } from './TransactionActions';
import styled from 'styled-components';
import { MenuItemType } from 'components/table/header/menu';

namespace S {
  export const TableWrapper = styled.div`
    display: flex;
    overflow-y: auto;
    max-height: 60vh;
  `;
}

const CustomerStatementsTable = (props: {
  refetch(): void;
  transactions:
    | readonly CUSTOMER_BILLING_TRANSACTION_FRAGMENT[]
    | null
    | undefined;
  menu?: MenuItemType[];
}) => {
  /** Table Config */
  const columns_config: TableColumnConfig<CUSTOMER_BILLING_TRANSACTION_FRAGMENT>[] =
    [
      {
        dataProps: d => ({
          component: (
            <TransactionActions refetch={props.refetch} transaction={d} />
          ),
        }),
        header: 'ACTIONS',
        width: '16rem',
      },
      {
        dataProps: d => ({
          label:
            formatDateTime({
              date: d.created_at,
              format: 'date',
              locale: 'en-ZA',
            })?.replaceAll('/', '-') || '-',
        }),
        header: 'DATE',
        property: 'date',
        width: '8rem',
      },
      {
        dataProps: d => ({
          label: d?.description?.toUpperCase() || '-',
        }),
        header: 'DESCRIPTION',
        property: 'description',
      },
      {
        dataProps: d => ({
          label: d?.cancelation_reference_id?.toUpperCase() || '-',
        }),
        header: 'REFERENCE',
        property: 'cancelation_reference_id',
      },
      {
        dataProps: d => {
          if (d?.transaction_type === 'debit' && d?.amount && d?.currency) {
            return {
              label:
                withCurrency({
                  amount: d?.amount,
                  currency: d.currency,
                }) || '',
              textAlign: 'right',
            };
          }

          return {
            label: '',
          };
        },
        header: 'DEBIT',
        property: 'debit',
        align: 'flex-end',
        width: '16rem',
      },
      {
        dataProps: d => {
          if (d?.transaction_type === 'credit' && d?.amount && d?.currency) {
            return {
              label:
                withCurrency({
                  amount: d?.amount,
                  currency: d.currency,
                }) || '',
              textAlign: 'right',
            };
          }

          return {
            label: '',
          };
        },
        header: 'CREDIT',
        property: 'credit',
        align: 'flex-end',
        width: '16rem',
      },
      {
        dataProps: d => {
          if (d?.currency && d?.balance) {
            return {
              label:
                withCurrency({
                  amount: d?.balance,
                  currency: d.currency,
                }) || '',
              textAlign: 'right',
            };
          }

          return {
            label: '',
            textAlign: 'right',
          };
        },
        header: 'BALANCE',
        property: 'balance',
        align: 'flex-end',
      },
    ];

  const table_notice =
    props.transactions?.length === 0 ? NoticeType.noResults : undefined;

  return (
    <S.TableWrapper>
      <Table
        columns_config={columns_config}
        data={props.transactions ?? []}
        notice={table_notice}
        page_size={10}
        total={props.transactions?.length ?? 0}
        menu={props.menu}
      />
    </S.TableWrapper>
  );
};

export { CustomerStatementsTable };
