import { RESPONDER_STATUS } from 'codegen/graphql';
import { Flex } from 'components/ui';
import styled, { css } from 'styled-components';

export const Row = styled(Flex)<{ is_selected: boolean }>(
  ({ is_selected, theme }) => css`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 4rem;
    border: 3px solid
      ${is_selected ? theme.colors.primary[700] : theme.colors.base[400]};
    border-radius: 0.5rem;
    background-color: ${theme.colors.base[400]};
    padding: ${theme.space.regular};
    gap: ${theme.space.regular};
    cursor: pointer;
    &:hover {
      border-color: ${theme.colors.primary[500]};
    }
  `,
);

export const OfflineRow = styled(Flex)<{ is_selected: boolean }>(
  ({ is_selected, theme }) => css`
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    min-height: 4rem;
    border: 3px solid
      ${is_selected ? theme.colors.primary[700] : theme.colors.base[400]};
    border-radius: 0.5rem;
    background-color: ${theme.colors.base[400]};
    padding: ${theme.space.regular};
    cursor: pointer;
    &:hover {
      border-color: ${theme.colors.primary[500]};
    }
  `,
);

export const Status = styled.div<{ status: RESPONDER_STATUS }>(
  ({ status, theme }) => css`
    flex: 0 0 ${theme.space.regular};
    width: ${theme.space.regular};
    height: ${theme.space.regular};
    background-color: ${{
      AVAILABLE: theme.colors.primary[700],
      INACTIVE: theme.colors.grey[100],
      OCCUPIED: theme.colors.warning[500],
      OPERATING: theme.colors.error[500],
    }[status]};
    border-radius: 50%;
  `,
);

export const Details = styled.div(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `,
);
