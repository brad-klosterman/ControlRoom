import styled, { css, keyframes } from 'styled-components';
import { media } from 'theme/mixins';
import { transition } from 'utils';

import { Wrapper as IconButtonWrapper } from '../../IconButton/styles';

const animation = keyframes`
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(500%);
  }
`;

export const Wrapper = styled.div<{
  children: any;
  is_open: boolean;
  is_error: boolean;
  isLoading?: boolean;
  variant: 'default' | 'analytics';
  highlight?: boolean;
  clickable?: boolean;
}>(
  ({ is_error, is_open, isLoading, theme, variant, clickable = true }) => css`
    display: flex;
    align-items: center;
    flex-grow: 1;
    width: 100%;
    height: 4rem;
    max-height: 4rem;
    cursor: ${clickable ? 'pointer' : 'default'};
    transition: ${transition('background-color')};
    border-top: 2px solid ${theme.colors.table.border};
    border-right: 2px solid transparent;
    border-left: 2px solid transparent;
    border-bottom: 2px solid ${theme.colors.table.border};

    ${clickable &&
    css`
      ${media.hover} {
        &:hover {
          background: ${is_error
            ? theme.colors.error[500]
            : theme.colors.primary[900]};
          ${IconButtonWrapper} {
            background: ${theme.colors.base[200]};
          }
        }
      }
    `}

    ${is_open &&
    css`
      background-color: ${theme.colors.primary[900]};
      border-top: 2px solid ${theme.colors.table.border};
      border-right: 2px solid ${theme.colors.table.border};
      border-left: 2px solid ${theme.colors.table.border};
      border-bottom: 0 solid transparent;
    `}

    ${is_open &&
    is_error &&
    css`
      background-color: ${theme.colors.error[500]};
      border-top: 2px solid ${theme.colors.error[500]};
      border-right: 2px solid ${theme.colors.error[500]};
      border-left: 2px solid ${theme.colors.error[500]};
      border-bottom: 0 solid transparent;
    `}

    ${isLoading &&
    css`
      cursor: wait;
      &:after {
        position: absolute;
        display: block;
        width: 20%;
        height: 100%;
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          ${theme.colors.base[100]} 50%,
          rgba(255, 255, 255, 0) 100%
        );
        transform: translateX(-100%);
        animation: ${animation} 2.5s ease-in-out infinite;
        animation-delay: 0.25s;
        content: '';

        @supports (mix-blend-mode: overlay) {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            ${theme.colors.background[300]} 50%,
            rgba(255, 255, 255, 0) 100%
          );
          mix-blend-mode: overlay;
        }
      }
    `}
    ${variant === 'analytics' &&
    css`
      height: 2rem;
      border: 0;
      border-radius: 4px;
    `}
  `,
);
