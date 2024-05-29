import React, { memo } from 'react';

import Icon from 'components/ui/Icon';
import { Position } from 'utils';

import { FixedMenu } from './styles';
import Popover, { PopoverEnum } from '../../Popover';
import Positioner from '../../Positioner';

export type MenuItemType = {
  type?: 'new_item';
  icon?: keyof typeof Icon;
  visible?: boolean;
  label: string;
  onClick: () => void;
  variant?: PopoverEnum;
};

const TableMenu = ({ items }: { items: MenuItemType[] | undefined }) => {
  if (!items) return null;
  return (
    <FixedMenu>
      <Positioner
        content={({ ref, setIsVisible: setMenuVisible }) => (
          <Popover ref={ref}>
            {items.map(
              ({ icon, label, onClick, variant, visible = true }) =>
                visible && (
                  <React.Fragment key={label}>
                    <Popover.Item
                      icon={icon}
                      label={label}
                      onClick={() => {
                        onClick();
                        setMenuVisible(false);
                      }}
                      variant={variant}
                    />
                    <Popover.Divider />
                  </React.Fragment>
                ),
            )}
          </Popover>
        )}
        position={Position.BOTTOM_RIGHT}
      >
        <Icon.Menu style={{ fontSize: '1.75rem' }} />
      </Positioner>
    </FixedMenu>
  );
};

export default memo(TableMenu);
