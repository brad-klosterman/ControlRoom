import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  ({ theme }) => css`
    max-width: 320px;
    padding: ${theme.space.regular};
    margin: 148px auto 0;
    text-align: center;
  `,
);
