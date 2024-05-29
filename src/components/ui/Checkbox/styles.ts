import styled, { css } from 'styled-components';
import { transition } from 'utils';

export interface WrapperProps {
  checked?: boolean;
  isError?: boolean;
  size?: 'sm' | 'md';
  disabled?: boolean;
}

export const Icon = styled.svg(
  ({ theme }) => css`
    fill: none;
    stroke: ${theme.colors.outline.focusPrimary};
    stroke-width: 3px;
  `,
);

export const Checkbox = styled.div<WrapperProps>(
  ({ checked, size = 'md', disabled, theme }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${size === 'md' ? theme.space.xLarge : theme.space.large};
    height: ${size === 'md' ? theme.space.xLarge : theme.space.large};
    color: ${theme.colors.icon.default};
    background-color: ${theme.colors.base[800]};
    border: 1px solid ${theme.colors.base[200]};
    border-radius: 3px;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    transition: ${transition('color', 'border-color')};
    appearance: none;
    ${Icon} {
      visibility: ${checked ? 'visible' : 'hidden'};
    }
    ${checked &&
    css`
      border-color: ${theme.colors.outline.focusPrimary};
    `}
  `,
);
