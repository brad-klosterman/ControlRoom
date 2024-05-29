import { FC } from 'react';

import * as S from './styles';
import { GridCellProps } from './types';

const Cell: FC<GridCellProps> = ({
  alignItems = 'flex-start',
  children,
  direction = 'row',
  justifyContent = 'flex-start',
  padding,
  spacing = 'none',
  style,
  x,
  y,
}) => {
  return (
    <S.Cell
      {...{
        alignItems,
        direction,
        justifyContent,
        padding,
        spacing,
        style,
        x,
        y,
      }}
    >
      {children}
    </S.Cell>
  );
};

export default Cell;
