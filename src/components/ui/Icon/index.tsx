import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

import * as Icons from './Icons';
import * as S from './styles';
import type { WrapperProps } from './styles';

export interface IconProps
  extends ComponentPropsWithoutRef<'span'>,
    WrapperProps {}

function withIconWrapper(WrappedIcon: React.ComponentType) {
  const WithIconWrapper = forwardRef<HTMLSpanElement, IconProps>(
    (props, ref) => (
      <S.Wrapper {...props} ref={ref} role="presentation">
        <WrappedIcon />
      </S.Wrapper>
    ),
  );

  WithIconWrapper.displayName = `Icon.${WrappedIcon.displayName}`;
  return WithIconWrapper;
}

export default Object.entries(Icons).reduce(
  (accumulator, [name, Icon]) => ({
    ...accumulator,
    [name]: withIconWrapper(Icon),
  }),
  {} as {
    [key in keyof typeof Icons]: ReturnType<typeof withIconWrapper>;
  },
);
