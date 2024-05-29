import type { Property } from 'csstype';
import type { ReactElement } from 'react';

import type { DefaultTheme, StyledComponent } from 'styled-components';

import * as S from './styles';

type CardContent = StyledComponent<
  'div',
  DefaultTheme,
  { textAlign?: Property.TextAlign }
>;

interface CardProps {
  children:
    | ReactElement<typeof S.Col | CardContent>
    | ReactElement<typeof S.Col | CardContent>[];
}

export interface CardFC {
  (props: CardProps): ReactElement<any, any>;
  Col: typeof S.Col;
  Content: CardContent;
}

const Card: CardFC = ({ children }) => <S.Wrapper>{children}</S.Wrapper>;

Card.Col = S.Col;
Card.Content = S.Content;

export default Card;
