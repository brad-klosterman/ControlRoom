import styled, { css } from 'styled-components';

export const ImageContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    background-color: ${theme.colors.base[800]};
    // padding: ${theme.space.regular};
  `,
);

export const UserDescription = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.space.regular};
    gap: ${theme.space.regular};
  `,
);
