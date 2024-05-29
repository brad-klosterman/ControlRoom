import { CSSProperties } from 'react';

import styled, { DefaultTheme, css } from 'styled-components';

import { TabNavVariant } from './types';
import Text from '../Text';

const getTabNavBottomColor = (
  theme: DefaultTheme,
  variant?: TabNavVariant,
): string => {
  if (!variant) {
    return theme.colors.primary[500];
  }

  return theme.colors[variant][500];
};

export const Container = styled.div<{
  justify?: CSSProperties['justifyContent'];
}>(
  ({ justify = 'flex-start', theme }) => css`
    display: flex;
    justify-content: ${justify};
    box-sizing: border-box;
    width: 100%;
    gap: ${theme.space.small};
  `,
);

export const NavButton = styled.button<{
  active?: 'true' | 'false';
  variant?: TabNavVariant;
}>(
  ({ active = 'false', theme, variant }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    padding: 0 ${theme.space.regular};
    margin: 0;
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.base[400]};
    border: 3px solid ${theme.colors.base[400]};
    border-radius: 3px;
    font-size: ${theme.typography.fontSize.displaySmall};
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    a {
      width: 100%;
    }
    ${active === 'true'
      ? css`
          border: 3px solid ${theme.colors.base[600]};
          border-bottom-color: ${getTabNavBottomColor(theme, variant)};
          background-color: ${theme.colors.base[500]};
        `
      : css`
          &:hover {
            border: 3px solid ${theme.colors.base[600]};
            border-bottom-color: ${getTabNavBottomColor(theme, variant)};
            background-color: ${theme.colors.base[500]};
          }
        `}
    &:disabled {
      color: ${theme.colors.secondary[300]};
      background-color: ${theme.colors.bg[200]};
      border: 3px solid ${theme.colors.base[700]};
      cursor: not-allowed;
    }
  `,
);

const getTabNavBadgeBgColor = (
  theme: DefaultTheme,
  variant?: TabNavVariant,
): string => {
  if (!variant) {
    return theme.colors.primary[800];
  }

  return theme.colors[variant][500];
};

export const TabNavBadge = styled(Text)<{
  variant?: TabNavVariant;
}>(
  ({ theme, variant }) => css`
    background-color: ${getTabNavBadgeBgColor(theme, variant)};
    position: absolute;
    border-radius: 5rem;
    top: -1rem;
    right: -1rem;
    padding: 0.75rem;
    z-index: 1000;

    * {
      text-align: center;
    }
  `,
);
