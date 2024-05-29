import styled, { css } from 'styled-components';

import { Flex } from '../Layout';

export const Container = styled(Flex)(
  ({ theme }) => css`
    color: white;
    gap: ${theme.space.large};
    width: 100%;
    align-items: center;
    justify-content: center;
  `,
);

export const Index = styled(Flex)<{ active: boolean }>(
  ({ active, theme }) => css`
    color: white;
    height: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${active ? theme.colors.primary[600] : theme.colors.base[100]};
    &:hover {
      color: ${theme.colors.primary[600]};
    }
  `,
);
