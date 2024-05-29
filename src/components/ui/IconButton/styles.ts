import { IconButtonVariants } from 'components/ui/IconButton/types';
import styled, { css } from 'styled-components';
import { transition } from 'utils';

export const Wrapper = styled.button<{
  variant?: IconButtonVariants;
}>(
  ({ theme, variant = 'primary' }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.125rem;
    color: ${{
      cancel: theme.colors.error[500],
      dangerous: theme.colors.text.error,
      info: theme.colors.info[500],
      primary: theme.colors.text.primary,
      secondary: theme.colors.text.secondary,
      emphasise: theme.colors.success[100],
    }[variant]};
    background-color: ${{
      cancel: theme.colors.base[600],
      dangerous: theme.colors.base[600],
      info: theme.colors.base[600],
      primary: theme.colors.base[600],
      secondary: 'transparent',
      emphasise: theme.colors.base[600],
    }[variant]};
    border: 0 solid
      ${{
        cancel: theme.colors.error[500],
        dangerous: theme.colors.text.error,
        info: theme.colors.info[500],
        primary: theme.colors.primary[500],
        secondary: theme.colors.primary[500],
        emphasise: theme.colors.success[100],
      }[variant]};
    border-radius: 50%;
    cursor: pointer;
    transition: ${transition('color', 'background-color')};
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background-color: ${{
        cancel: theme.colors.base[100],
        dangerous: theme.colors.base[100],
        info: theme.colors.base[100],
        primary: theme.colors.base[100],
        secondary: 'transparent',
        emphasise: theme.colors.base[100],
      }[variant]};

      color: ${{
        cancel: theme.colors.error[500],
        dangerous: theme.colors.text.error,
        info: theme.colors.info[500],
        primary: theme.colors.text.primary,
        secondary: theme.colors.text.primary,
        emphasise: theme.colors.success[100],
      }[variant]};
    }

    &:active {
    }

    &:disabled {
      color: ${theme.colors.secondary[300]};
      background-color: ${theme.colors.bg[200]};
      cursor: not-allowed;
    }
  `,
);
