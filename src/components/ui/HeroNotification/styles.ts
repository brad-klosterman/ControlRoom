import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
`;

export const Image = styled.img(
  ({ theme }) => css`
    display: block;
    width: 20rem;
    max-width: 75%;
    margin: 0 auto ${theme.space.xLarge};
  `,
);

export const TitleWrapper = styled.div`
  max-width: 35rem;
  margin: 0 auto;
`;

export const Body = styled.div(
  ({ theme }) => css`
    max-width: 26rem;
    margin: ${theme.space.small} auto 0;
  `,
);

export const Actions = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: ${theme.space.large};
  `,
);

export const ActionItem = styled.div(
  ({ theme }) => css`
    padding: 0 ${theme.space.xSmall};
  `,
);
