import type { ComponentPropsWithoutRef } from 'react';

import * as S from './styles';
import Icon from '../Icon';
import Text from '../Text';

export interface SwitchProps extends ComponentPropsWithoutRef<'input'> {
  error?: string | React.ReactNode;
  info?: string | React.ReactNode;
  label?: string | React.ReactNode;
  name: string;
}

const Switch = ({ error, info, label, name, ...props }: SwitchProps) => {
  return (
    <S.Wrapper>
      <S.Input {...props} id={name} name={name} type="checkbox" />
      <S.Switch>
        <S.Toggle>
          <S.IconWrapper>
            <Icon.Tick />
          </S.IconWrapper>
          <S.IconWrapper>
            <Icon.Cross />
          </S.IconWrapper>
        </S.Toggle>
      </S.Switch>
      {label && (
        <S.Content>
          <Text colorKey="primary">{label}</Text>
          {info && (
            <Text
              colorKey="secondary"
              margin={{ top: 'xxxSmall' }}
              size="labelLarge"
            >
              {info}
            </Text>
          )}
          {error && (
            <Text
              colorKey="error"
              margin={{ top: 'xxxSmall' }}
              size="labelLarge"
            >
              {error}
            </Text>
          )}
        </S.Content>
      )}
    </S.Wrapper>
  );
};

export default Switch;
