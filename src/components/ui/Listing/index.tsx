import { ReactElement } from 'react';

import { DefaultTheme, StyledComponent } from 'styled-components';

import Body, { BodyProps } from './Body';
import Card from './Card';
import { Col } from './Col';
import Data from './Data';
import { Status } from './Data/styles';
import Header from './Header';
import Notice from './Notice';
import Row from './Row';
import { Wrapper } from './styles';

type Children<Elements> = ReactElement<Elements> | Array<Children<Elements>>;

interface ListingProps {
  children: Children<typeof Header | typeof Body>;
}

export interface ListingFC {
  (props: ListingProps): ReactElement<any, any>;
  Body<ItemProps extends Record<string, any>>(
    props: BodyProps<ItemProps>,
  ): ReactElement<any, any>;
  Card: typeof Card;
  Col: typeof Col;
  Data: typeof Data;
  Header: typeof Header;
  Notice: typeof Notice;
  Row: typeof Row;
  // Row status indicator
  Status: StyledComponent<'div', DefaultTheme, { status: string | boolean }>;
}

const Listing: ListingFC = ({ children }) => (
  <Wrapper role="table">{children}</Wrapper>
);

Listing.Header = Header;
Listing.Col = Col;
Listing.Body = Body;
Listing.Row = Row;
Listing.Data = Data;
Listing.Card = Card;
Listing.Status = Status;
Listing.Notice = Notice;

export default Listing;
