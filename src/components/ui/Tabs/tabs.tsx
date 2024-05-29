import { Children, cloneElement } from 'react';

import { Container } from './styles';
import Nav from './tab.nav';
import { TabsProps } from './types';

const Tabs = <TRoutes extends string[]>({
  active_path,
  children,
  onSelect,
}: TabsProps<TRoutes>) => {
  return (
    <Container>
      {Children.map(children, child =>
        cloneElement(child, {
          active: child.props.id === active_path ? 'true' : 'false',
          onClick: () => onSelect && onSelect(child.props.path),
          title: child.props.path,
          variant: child.props.variant,
        }),
      )}
    </Container>
  );
};

Tabs.Nav = Nav;

export default Tabs;
