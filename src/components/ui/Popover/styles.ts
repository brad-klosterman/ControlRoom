import styled, { css } from 'styled-components';
import { media } from 'theme/mixins';
import { transition } from 'utils';

export const Divider = styled.div(
  ({ theme }) => css`
    height: 1px;
    margin: ${theme.space.xxSmall} 0;
    background-color: ${theme.colors.outline.default};
  `,
);

export const Category = styled.div(
  ({ theme }) => css`
    padding: ${theme.space.small} ${theme.space.regular} ${theme.space.xxSmall};
  `,
);

export const Item = styled.div(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.space.regular};
    font-size: ${theme.typography.fontSize.displayRegular};
    align-items: center;
    min-height: 2.5rem;
    padding: ${theme.space.regular} ${theme.space.large};
    transition: ${transition('background-color')};

    ${media.hover} {
      &:hover {
        background: ${theme.colors.base[200]};
      }
    }
  `,
);

export const Wrapper = styled.div(
  ({ theme }) => css`
    min-width: 20rem;
    // padding: ${theme.space.regular};
    background: #000;
    border: 1px solid ${theme.colors.outline.default};
    border-radius: 3px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05), 0 2px 16px rgba(0, 0, 0, 0.08),
      0 2px 6px rgba(0, 0, 0, 0.08);
    cursor: pointer;
  `,
);
