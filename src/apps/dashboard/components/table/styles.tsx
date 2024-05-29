import styled, { css } from 'styled-components';

export const Container = styled.div<{ flex?: boolean }>(
  ({ flex = true, theme }) => css`
    display: flex;
    ${flex &&
    css`
      flex: 1;
    `}
    flex-direction: column;
    overflow-y: scroll;
    //width: 100%;
    //height: 100%;
    background-color: ${theme.colors.bg[600]};
    //padding-bottom: 8rem;
  `,
);
