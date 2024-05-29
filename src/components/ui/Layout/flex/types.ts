import { CSSProperties, ReactNode } from 'react';

import { ShadeRange } from 'theme/colors/colors';
import { ISpace } from 'theme/space';

export interface FlexProps {
  center?: boolean;
  fluid?: boolean;
  fitWidth?: boolean;
  direction?: 'row' | 'column';
  alignContent?: CSSProperties['alignContent'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: keyof ISpace;
  background?: ShadeRange;
  height?: CSSProperties['height'];
  width?: CSSProperties['width'];
  overflow?: CSSProperties['overflow'];
  children: ReactNode | ReactNode[];
}
