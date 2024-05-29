import { Flex } from 'components/ui';
import styled, { css } from 'styled-components';

export const Row = styled(Flex)<{ selected: boolean }>(
  ({ selected, theme }) => css`
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 2.5rem;
    gap: 0.25rem;
    padding-left: ${theme.space.regular};
    background-color: ${theme.colors.base[800]};
    border: 2px solid ${selected ? theme.colors.primary[500] : 'transparent'};
    &:first-of-type {
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }
    &:last-of-type {
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }
    cursor: pointer;
    ${selected &&
    css`
      border-color: ${theme.colors.primary[500]};
    `}
    &:hover {
      border-color: ${theme.colors.primary[500]};
    }
  `,
);

export const PasswordStatus = styled(Flex)(
  ({ theme }) => css`
    align-items: center;
    width: 100%;
    min-height: 3rem;
    border: 0 solid ${theme.colors.base[800]};
    border-radius: 0.5rem;
    padding: ${theme.space.regular};
  `,
);
