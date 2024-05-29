import type { ReactElement } from 'react';

import Cell from './grid.cell';
import * as S from './styles';
import { GridProps } from './types';

const Grid: {
  (props: GridProps): ReactElement;
  Cell: typeof Cell;
} = ({
  children,
  padding,
  padding_horizontal,
  padding_vertical,
  repeat,
  spacing,
  style,
}) => {
  return (
    <S.Grid
      {...{
        padding,
        padding_horizontal,
        padding_vertical,
        repeat,
        spacing,
        style,
      }}
    >
      {children}
    </S.Grid>
  );
};

Grid.Cell = Cell;

export default Grid;
