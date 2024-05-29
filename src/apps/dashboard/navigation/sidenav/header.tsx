import { PropsWithChildren, ReactNode } from 'react';

import { Flex } from 'components/ui';

export interface NavPanelHeaderProps {
  title?: string;
}

export interface NavPanelHeaderFC {
  (props: PropsWithChildren<NavPanelHeaderProps>): ReactNode;
}

const NavPanelHeader: NavPanelHeaderFC = ({ children }) => (
  <Flex>{children}</Flex>
);

export default NavPanelHeader;
