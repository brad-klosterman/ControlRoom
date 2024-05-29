import type { ReactElement } from 'react';

import Menu, { MenuItemType } from './menu';
import { Sort, Wrapper } from './styles';
import Icon from '../../Icon';
import Text from '../../Text';
import { Col, ColProps } from '../Col';

interface HeaderColProps extends ColProps {
  label: string;
  onSort?(property: string): () => void;
  property: string;
  sortedBy?: string;
}

export interface HeaderColFc {
  (props: HeaderColProps): ReactElement<any, any>;
}

const HeaderCol: HeaderColFc = ({
  align = 'flex-start',
  label,
  onSort,
  property,
  sortedBy,
  width,
}) => (
  <Col
    align={align}
    onClick={onSort && onSort(property)}
    role="columnheader"
    width={width}
  >
    {align === 'flex-start' && (
      <Text as="span" isBold>
        {label}
      </Text>
    )}
    {onSort && (
      <Sort>
        <Icon.ArrowUp
          className={sortedBy === `+${property}` ? 'active' : ''}
          colorKey={sortedBy === `+${property}` ? 'emphasise' : 'secondary'}
        />
        <Icon.ArrowDown
          className={sortedBy === `-${property}` ? 'active' : ''}
          colorKey={sortedBy === `-${property}` ? 'emphasise' : 'secondary'}
        />
      </Sort>
    )}
    {align === 'flex-end' && (
      <Text as="span" isBold>
        {label}
      </Text>
    )}
  </Col>
);

type HeaderChild = ReactElement<HeaderColProps | ColProps>;

interface HeaderProps {
  children: HeaderChild | Array<HeaderChild>;
  expandable?: boolean;
  variant?: 'default' | 'analytics';
  menu?: MenuItemType[];
}

export interface HeaderFC {
  (props: HeaderProps): ReactElement<any, any>;
  Col: HeaderColFc;
}

const Header: HeaderFC = ({
  children,
  expandable = false,
  menu,
  variant = 'default',
}) => (
  <Wrapper expandable={expandable} role="row" variant={variant}>
    {menu && <Menu items={menu} />}
    {children}
  </Wrapper>
);

Header.Col = HeaderCol;

export default Header;
