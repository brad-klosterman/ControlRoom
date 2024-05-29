import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

import * as S from './styles';

export interface SkeletonProps extends ComponentPropsWithoutRef<'span'> {
  align?: 'left' | 'center' | 'right';
  size?:
    | 'full'
    | 'fullRandom'
    | 'large'
    | 'largeRandom'
    | 'medium'
    | 'mediumRandom'
    | 'small'
    | 'smallRandom'
    | 'random';
  variant?: 'dark' | 'light';
  width?: string;
}

const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>(
  ({ align = 'left', size = 'full', variant = 'light', ...props }, ref) => (
    <S.Wrapper
      {...props}
      align={align}
      ref={ref}
      role="presentation"
      size={size}
      variant={variant}
    >
      {/* Empty char to inherit line-height */}
      &zwnj;
    </S.Wrapper>
  ),
);

export default Skeleton;
