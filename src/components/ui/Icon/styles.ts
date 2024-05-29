import styled, { css } from 'styled-components';
import type { DefaultTheme } from 'styled-components';

export interface WrapperProps {
  colorKey?: keyof DefaultTheme['colors']['icon'];
  isFixedSize?: boolean;
}

export const Wrapper = styled.span<WrapperProps>(
  ({ colorKey, isFixedSize = false, theme }) => css`
    display: inline-flex;
    color: ${colorKey && theme.colors.icon[colorKey]};
    font-size: ${isFixedSize && '1rem'};

    svg {
      display: block;
      width: 1em;
      height: 1em;

      * {
        fill: currentColor;
      }
    }
  `,
);
