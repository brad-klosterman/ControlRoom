import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  ({ theme }) => css`
    color: ${theme.colors.text.secondary};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0rem 0.5rem;
    padding-right: 0.75rem;
    background-color: ${theme.colors.background[200]};

    &:first-child {
      margin-right: 0;
      margin-left: -${theme.space.small};
      border-radius: 2px 0 0 2px;
    }

    &:last-child {
      margin-right: -${theme.space.small};
      margin-left: ${theme.space.small};
      border-radius: 0 2px 2px 0;
    }
  `,
);
