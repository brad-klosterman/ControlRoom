import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  ({ theme }) => css`
    position: fixed;
    top: ${theme.space.regular};
    right: 2rem;
    z-index: ${theme.zIndex.toaster};
    width: 23rem;
    max-width: calc(100% - ${theme.space.xLarge});
    // transform: translateX(-50%);
  `,
);
