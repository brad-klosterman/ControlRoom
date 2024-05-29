import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space.xxSmall};
    height: 100%;
    overflow-y: auto;
    scrollbar-gutter: stable;
    // border-left: 2px solid ${theme.colors.base[400]};
    // border-right: 2px solid ${theme.colors.base[400]};
    background-color: ${theme.colors.bg[600]};
    > :nth-child(even) {
      background: rgba(29, 29, 42, 0.45);
    }
    > :nth-child(odd) {
      //background: ${theme.colors.table.even};
      background: ${theme.colors.table.odd};
    }
  `
);
