import React, { forwardRef } from 'react';

import { NavButton, TabNavBadge } from './styles';
import { TabNavProps } from './types';

const Nav = forwardRef<HTMLButtonElement, TabNavProps>(
  ({ hidden, ...props }, ref) => {
    if (hidden) {
      return null;
    }

    return (
      <div style={{ position: 'relative' }}>
        {props.badge_count !== undefined && props.badge_count > 0 && (
          <TabNavBadge variant={props.variant}>
            +{props.badge_count}
          </TabNavBadge>
        )}
        <NavButton {...props} ref={ref}>
          {props.title}
        </NavButton>
      </div>
    );
  },
);

export default Nav;
