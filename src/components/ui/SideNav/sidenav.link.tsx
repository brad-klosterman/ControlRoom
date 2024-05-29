import React, { forwardRef, memo } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

import { Link, IconStyle } from './styles';
import Icon from '../Icon';

export interface NavLinkProps extends ComponentPropsWithoutRef<'button'> {
  icon?: keyof typeof Icon;
  active?: boolean;
  hidden?: boolean;
  pill?: React.ReactNode;
  title: string;
  onClick: () => unknown;
}

export const NavLink = forwardRef<HTMLButtonElement, NavLinkProps>(
  ({ hidden = false, icon, title, ...props }, ref) => {
    const IconComponent = icon && Icon[icon];
    if (hidden) return null;
    return (
      <Link {...props} ref={ref}>
        {IconComponent && <IconComponent style={IconStyle} />}
        <p>{title}</p>
      </Link>
    );
  },
);

export default memo(NavLink);
