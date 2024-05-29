import { CSSProperties, ReactElement, ReactNode } from 'react';

import { ISpace } from 'theme/space';

export interface GridProps {
  children:
    | ReactElement<GridCellProps>[]
    | ReactElement<GridCellProps>
    | ReactNode
    | ReactNode[]
    | null
    | undefined;
  padding_vertical?: keyof ISpace;
  padding_horizontal?: keyof ISpace;
  padding?: keyof ISpace;
  spacing?: keyof ISpace;
  repeat?: number;
  style?: CSSProperties;
}

export interface GridCellProps {
  children?:
    | ReactElement
    | ReactElement[]
    | ReactNode
    | ReactNode[]
    | null
    | undefined;
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  direction?: CSSProperties['flexDirection'];
  spacing?: keyof ISpace;
  padding?: keyof ISpace;
  style?: CSSProperties;
  x: [number, number];
  y: [number, number];
}
