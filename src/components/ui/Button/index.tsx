import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

import * as S from './styles';
import Skeleton from '../Skeleton';

export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'cancel'
  | 'delete'
  | 'dangerous'
  | 'success'
  | 'warning'
  | 'info'
  | 'info-secondary'
  | 'other'
  | 'other-secondary';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  fullWidth?: boolean;
  isLoading?: boolean;
  isSkeleton?: boolean;
  size?: 'regular' | 'small' | 'large';
  variant?: ButtonVariants;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      disabled,
      fullWidth = false,
      isLoading = false,
      isSkeleton = false,
      size = 'regular',
      type = 'button',
      variant = 'primary',
      ...props
    },
    ref,
  ) => (
    <S.Wrapper
      {...props}
      aria-busy={isLoading || isSkeleton || undefined}
      disabled={isSkeleton || disabled}
      fullWidth={fullWidth}
      ref={ref}
      size={size}
      type={type}
      variant={variant}
    >
      {isLoading && <S.Loading />}
      {isSkeleton ? (
        <Skeleton variant="dark" width="2.5em" />
      ) : (
        <S.Text>{children}</S.Text>
      )}
    </S.Wrapper>
  ),
);

export default Button;
