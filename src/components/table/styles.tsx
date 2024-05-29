import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-y: scroll;
    //background-color: ${theme.colors.bg[600]};
  `,
);
