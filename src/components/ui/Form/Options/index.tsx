import { forwardRef, ReactNode, useEffect, useRef, useState } from 'react';

import * as S from './styles';

export interface IOption {
  label: string;
  value: string | number;
}

export interface IOptionString {
  label: string;
  value: string;
}

export interface IOptionNumber {
  label: string;
  value: number;
}

export interface OptionsProps {
  children: ReactNode;
}

const Options = forwardRef<HTMLDivElement, OptionsProps>(
  ({ children }, ref) => {
    const outerRef = useRef<HTMLDivElement>(null);
    const [direction, setDirection] = useState<'top' | 'bottom'>();

    useEffect(() => {
      if (outerRef.current && outerRef.current.parentElement) {
        const offset =
          outerRef.current.parentElement.getBoundingClientRect().bottom +
          S.INNER_HEIGHT;

        setDirection(offset >= window.innerHeight ? 'bottom' : 'top');
      }
    }, []);

    return (
      <div ref={outerRef} style={{ marginTop: '3px' }}>
        {direction && children && (
          <S.Wrapper direction={direction}>
            <S.Inner ref={ref} tabIndex={0}>
              {children}
            </S.Inner>
          </S.Wrapper>
        )}
      </div>
    );
  },
);

export default Options;
