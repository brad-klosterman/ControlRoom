import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

import { ButtonVariants } from 'components/ui/Button';
import { IconButtonVariants } from 'components/ui/IconButton/types';

import * as S from './styles';
import Icon from '../Icon';

export interface IconButtonProps extends ComponentPropsWithoutRef<'button'> {
  label?: string;
  variant?: IconButtonVariants;
}

function withIconWrapper(WrappedIcon: (typeof Icon)[keyof typeof Icon]) {
  const WithIconWrapper = forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ label, ...props }, ref) => (
      <S.Wrapper
        {...props}
        aria-label={label}
        ref={ref}
        type={props.type || 'button'}
      >
        <WrappedIcon />
      </S.Wrapper>
    ),
  );

  WithIconWrapper.displayName = `IconButton.${WrappedIcon.displayName}`;
  return WithIconWrapper;
}

export default Object.entries(Icon).reduce(
  (accumulator, [name, IconComponent]) => ({
    ...accumulator,
    [name]: withIconWrapper(IconComponent),
  }),
  {} as {
    [key in keyof typeof Icon]: ReturnType<typeof withIconWrapper>;
  },
);
