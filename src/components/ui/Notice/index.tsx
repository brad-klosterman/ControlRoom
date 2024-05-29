import { ComponentPropsWithoutRef, forwardRef } from 'react';

import * as S from './styles';
import { Variant } from './styles';
import Icon from '../Icon';
import Text from '../Text';

export interface NoticeProps extends ComponentPropsWithoutRef<'div'> {
  variant?: Variant;
}

const Notice = forwardRef<HTMLDivElement, NoticeProps>(
  ({ children, ...props }, ref) => (
    <S.Wrapper {...props} ref={ref}>
      <Text as="span" isBold size="labelLarge">
        <Icon.Warning />
        {children}
      </Text>
    </S.Wrapper>
  ),
);

export default Notice;
