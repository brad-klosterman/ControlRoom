import { Flex } from 'components';
import styled, { css } from 'styled-components';

export const TransactionRow = styled(Flex)(
  ({ theme }) => css`
    width: 100%;
    border-bottom: 2px solid ${theme.colors.base[100]};
    padding: ${theme.space.large} ${theme.space.regular};
  `,
);

export const TransactionsContainer = styled(Flex)(
  ({ theme }) => css`
    flex-direction: column;
    width: 100%;
    min-height: 5.625rem;
    align-items: center;
    border-top: 2px solid ${theme.colors.base[100]};
  `,
);
