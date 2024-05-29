import { Children } from 'react';
import type { ReactElement, ReactNode } from 'react';

import * as S from './styles';
import Text from '../Text';
import Title from '../Title';

const Body = ({ children }: { children: any }) => (
  <S.Body>
    {typeof children === 'string' ? <Text>{children}</Text> : children}
  </S.Body>
);

const Actions = ({ children }: { children: any }) => (
  <S.Actions>
    {Children.map(children, child => (
      <S.ActionItem>{child}</S.ActionItem>
    ))}
  </S.Actions>
);

export interface HeroNotificationProps {
  children: ReactNode;
  image?: string;
  title: string;
  titleAs?: 'h1' | 'h2' | 'h3' | 'h4';
}

export interface HeroNotificationFC {
  (props: HeroNotificationProps): ReactElement;
  Actions: typeof Actions;
  Body: typeof Body;
}

const HeroNotification: HeroNotificationFC = ({ children, image, title }) => (
  <S.Wrapper>
    {image && <S.Image alt={title} src={image} />}
    <S.TitleWrapper>
      <Title size="displayRegular">{title}</Title>
    </S.TitleWrapper>
    {children}
  </S.Wrapper>
);

HeroNotification.Body = Body;
HeroNotification.Actions = Actions;

export default HeroNotification;
