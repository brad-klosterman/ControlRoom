import styled, { css } from 'styled-components';

export const AlarmsContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${theme.space.large};
    overflow-y: auto;
    scrollbar-gutter: stable;
  `,
);
