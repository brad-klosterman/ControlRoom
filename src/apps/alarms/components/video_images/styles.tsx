import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    background-color: ${theme.colors.base[800]};
  `
);
