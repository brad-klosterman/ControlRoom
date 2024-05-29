import { isValidElement, cloneElement, Children, ReactNode } from 'react';

import * as S from './styles';
import Error from '../Error';
import Field from '../Field';

const FieldGroup = ({ children }: { children: ReactNode }) => {
  const error = !!Children.toArray(children).find(
    child => isValidElement(child) && child.type === Error,
  );

  return (
    <S.Wrapper>
      {Children.map(children, child => {
        return isValidElement(child)
          ? cloneElement(child, {
              ...(child.type === Field ? { error } : {}),
            })
          : child;
      })}
    </S.Wrapper>
  );
};

export default FieldGroup;
