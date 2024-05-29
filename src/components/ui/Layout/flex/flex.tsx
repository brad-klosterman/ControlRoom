import styled, { css } from 'styled-components';

import { FlexProps } from './types';

export const Flex = styled.div<FlexProps>(
  ({
    alignContent,
    alignItems,
    background,
    center,
    direction,
    fitWidth = false,
    fluid,
    gap,
    height,
    justifyContent,
    overflow,
    theme,
    width,
    wrap,
  }) => css`
    display: flex;
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    align-content: ${alignContent};
    flex-direction: ${direction};
    gap: ${gap && theme.space[gap]};
    flex-wrap: ${wrap};
    background-color: ${background
      ? theme.colors.background[background]
      : 'none'};
    ${center &&
    css`
      justify-content: center;
      align-items: center;
    `}
    ${fluid &&
    css`
      width: 100%;
      height: 100%;
    `}
    ${fitWidth &&
    css`
      width: 100%;
    `}
    height: ${height};
    width: ${width};
    overflow: ${overflow};
  `,
);
