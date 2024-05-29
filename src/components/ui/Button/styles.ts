import styled, { css, keyframes } from 'styled-components';
import type { DefaultTheme } from 'styled-components';
import { media } from 'theme/mixins';
import { transition } from 'utils';

import type { ButtonProps } from '.';

type WrapperProps = Pick<Required<ButtonProps>, 'size' | 'variant'>;

interface IButton extends WrapperProps {
  fullWidth: boolean;
}

const focusBoxShadow = (
  theme: DefaultTheme,
  variant: WrapperProps['variant'],
) => {
  const outerColor = {
    cancel: theme.colors.background[100],
    dangerous: theme.colors.error[500],
    delete: theme.colors.error[500],
    warning: theme.colors.warning[500],
    info: theme.colors.info[500],
    ['info-secondary']: theme.colors.info[500],
    other: theme.colors.secondary[500],
    ['other-secondary']: theme.colors.secondary[500],
    primary: theme.colors.secondary[200],
    secondary: theme.colors.primary[100],
    success: theme.colors.success[100],
  }[variant];

  const innerColor = {
    cancel: theme.colors.background[400],
    dangerous: theme.colors.error[100],
    delete: theme.colors.error[500],
    warning: theme.colors.warning[500],
    info: theme.colors.info[500],
    ['info-secondary']: theme.colors.info[500],
    other: theme.colors.secondary[500],
    ['other-secondary']: theme.colors.secondary[500],
    primary: theme.colors.secondary[500],
    secondary: theme.colors.primary[300],
    success: theme.colors.success[400],
  }[variant];

  return `0px 0px 0px 4px ${outerColor}, inset 0px 0px 0px 2px ${innerColor}`;
};

export const Wrapper = styled.button<IButton>(
  ({ fullWidth, size, theme, variant }) => css`
    position: relative;
    display: inline-block;
    overflow: hidden;
    padding: ${{
      large: `${theme.space.regular} ${theme.space.xxxLarge}`,
      regular: `${theme.space.small} ${theme.space.xxLarge}`,
      small: `${theme.space.xxSmall} ${theme.space.large}`,
    }[size]};
    color: ${{
      cancel: theme.colors.text.primary,
      dangerous: theme.colors.text.primary,
      delete: theme.colors.text.error,
      warning: theme.colors.text.warning,
      info: theme.colors.text.primary,
      ['info-secondary']: theme.colors.info[500],
      other: theme.colors.base[800],
      ['other-secondary']: theme.colors.text.primary,
      primary: theme.colors.base[800],
      secondary: theme.colors.outline.focusPrimary,
      success: theme.colors.success[900],
    }[variant]};
    font-weight: ${theme.typography.fontWeight.medium};
    font-size: ${{
      large: theme.typography.fontSize.regular,
      regular: theme.typography.fontSize.regular,
      small: theme.typography.fontSize.labelLarge,
    }[size]};
    background-color: ${{
      cancel: theme.colors.error[500],
      dangerous: theme.colors.error[500],
      delete: 'transparent',
      warning: 'transparent',
      info: theme.colors.info[500],
      ['info-secondary']: 'transparent',
      other: theme.colors.text.primary,
      ['other-secondary']: 'transparent',
      primary: theme.colors.primary[500],
      secondary: 'transparent',
      success: theme.colors.primary[500],
    }[variant]};
    height: ${{
      large: '4rem',
      regular: '3rem',
      small: '2.5rem',
    }[size]};
    border-radius: 3px;
    border: 2px solid
      ${{
        cancel: theme.colors.error[500],
        dangerous: theme.colors.text.error,
        delete: theme.colors.error[500],
        warning: theme.colors.warning[500],
        info: theme.colors.info[500],
        other: theme.colors.text.primary,
        ['other-secondary']: theme.colors.secondary[500],
        ['info-secondary']: theme.colors.info[500],
        primary: theme.colors.primary[500],
        secondary: theme.colors.primary[500],
        success: theme.colors.success[100],
      }[variant]};
    cursor: pointer;
    transition: ${transition('color', 'background-color')};
    -webkit-tap-highlight-color: transparent;
    width: ${fullWidth ? '100%' : 'auto'};
    ${media.hover} {
      &:hover {
        color: ${{
          cancel: theme.colors.text.primary,
          dangerous: theme.colors.text.error,
          delete: theme.colors.text.primary,
          warning: theme.colors.text.primary,
          info: theme.colors.text.primary,
          ['info-secondary']: theme.colors.text.primary,
          other: theme.colors.text.primary,
          ['other-secondary']: theme.colors.text.primary,
          primary: theme.colors.primary[500],
          secondary: theme.colors.outline.focusPrimary,
          success: theme.colors.success[900],
        }[variant]};
        background-color: ${{
          cancel: theme.colors.error[400],
          dangerous: theme.colors.base[800],
          delete: theme.colors.error[500],
          warning: theme.colors.warning[500],
          info: theme.colors.background[100],
          other: theme.colors.base[800],
          ['other-secondary']: theme.colors.secondary[500],
          ['info-secondary']: theme.colors.info[500],
          primary: theme.colors.base[800],
          secondary: theme.colors.base[800],
          success: theme.colors.success[200],
        }[variant]};
        border-color: ${{
          cancel: theme.colors.error[500],
          dangerous: theme.colors.text.error,
          delete: theme.colors.error[500],
          warning: theme.colors.warning[500],
          info: theme.colors.info[600],
          other: theme.colors.secondary[500],
          ['other-secondary']: theme.colors.secondary[500],
          ['info-secondary']: theme.colors.info[500],
          primary: theme.colors.primary[500],
          secondary: theme.colors.primary[500],
          success: theme.colors.success[100],
        }[variant]};
        box-shadow: 0 0 0 1px
          ${{
            cancel: theme.colors.error[500],
            dangerous: theme.colors.text.error,
            delete: theme.colors.error[400],
            warning: theme.colors.warning[400],
            info: theme.colors.info[600],
            ['info-secondary']: theme.colors.info[500],
            other: theme.colors.secondary[500],
            ['other-secondary']: theme.colors.secondary[500],
            primary: theme.colors.primary[400],
            secondary: theme.colors.primary[400],
            success: theme.colors.success[100],
          }[variant]};
      }
    }

    &:active {
      background-color: ${{
        cancel: theme.colors.error[600],
        dangerous: theme.colors.error[300],
        delete: theme.colors.error[500],
        warning: theme.colors.warning[500],
        info: theme.colors.secondary[300],
        other: theme.colors.secondary[500],
        ['other-secondary']: theme.colors.secondary[500],
        ['info-secondary']: theme.colors.info[500],
        primary: theme.colors.secondary[300],
        secondary: theme.colors.primary[300],
        success: theme.colors.success[300],
      }[variant]};
    }

    /* Fallback focus style for Safari and IE11 */
    &:focus {
      box-shadow: ${focusBoxShadow(theme, variant)};
    }

    @supports selector(:focus-visible) {
      &:focus {
        box-shadow: none;
      }

      &:focus-visible {
        box-shadow: ${focusBoxShadow(theme, variant)};
      }
    }

    &:disabled {
      color: ${theme.colors.secondary[300]};
      background-color: ${theme.colors.bg[200]};
      border: 3px solid ${theme.colors.base[700]};
      cursor: not-allowed;
      box-shadow: none;
    }

    &[aria-busy] {
      pointer-events: none;
    }
  `,
);

const loadingAnimation = keyframes`
  0% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(0%);
  }
`;

export const Loading = styled.span`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: url('data:image/png;base64,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')
    repeat-x;
  background-size: 25% 100%;
  transition: ${transition(['opacity', 4])};
  animation: ${loadingAnimation} 1.5s linear infinite forwards;
  animation-play-state: running;
  content: '';
`;

export const Text = styled.span`
  position: relative;
  z-index: 1;
`;
