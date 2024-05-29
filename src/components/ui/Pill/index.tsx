import { forwardRef } from 'react';

import * as S from './styles';
import type { Variant } from './styles';

export interface PillProps {
  text: string;
  variant?: Variant;
}

const Pill = forwardRef<HTMLSpanElement, PillProps>(
  ({ text, variant = 'info' }, ref) => (
    <S.Wrapper ref={ref} variant={variant}>
      {text}
    </S.Wrapper>
  ),
);

export default Pill;
