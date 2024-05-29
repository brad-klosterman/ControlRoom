import styled, { css } from 'styled-components';
import space from 'theme/space';

import { GridCellProps, GridProps } from './types';

export const Grid = styled.div<Omit<GridProps, 'children'>>(
  ({
    padding,
    padding_horizontal,
    padding_vertical,
    repeat = 12,
    spacing = 'none',
  }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(${repeat}, [col-start] 1fr);
    grid-gap: ${space[spacing]};
    padding: ${space[padding_vertical || padding || 'none']}
      ${space[padding_horizontal || padding || 'none']};
    grid-column-start: 0;
    grid-row-start: 0;
  `,
);

export const Cell = styled.div.attrs(
  ({
    alignItems,
    direction,
    justifyContent,
    padding = 'none',
    spacing,
    style,
    x,
    y,
  }: GridCellProps) => ({
    alignItems,
    direction,
    justifyContent,
    padding,
    spacing,
    style,
    x,
    y,
  }),
)`
  display: flex;
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  flex-direction: ${props => props.direction};
  padding: ${props => space[props.padding]};
  grid-column: col-start ${({ x }) => `${x[0] + 1} / ${x[1] + 1}`};
  grid-row: ${({ y }) => `${y[0] + 1} / ${y[1] + 1}`};
  grid-gap: ${props => (props.spacing ? space[props.spacing] : 'none')};
`;
