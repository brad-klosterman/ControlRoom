import styled, { css } from 'styled-components';

export const Scrollable = styled.div(
  () => css`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y: auto;
    scrollbar-gutter: stable;
  `,
);
