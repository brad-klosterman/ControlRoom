import React from 'react';

import { Popover, PopoverEnum, Positioner } from 'components';
import Icon from 'components/ui/Icon';
import { Position } from 'utils';

import { MenuButton } from './styles';

export type MenuItemType = {
  type?: 'new_item';
  icon?: keyof typeof Icon;
  visible?: boolean;
  label: string;
  onClick: () => void;
  variant?: PopoverEnum;
};

const Menu = (props: { items: MenuItemType[] }) => {
  if (!props.items) return null;
  return (
    <MenuButton>
      <Positioner
        content={({ ref, setIsVisible: setMenuVisible }) => (
          <Popover ref={ref}>
            {props.items.map(
              ({ icon, label, onClick, variant, visible = true }, index) =>
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
                    {index !== props.items.length + 1 && <Popover.Divider />}
                  </React.Fragment>
                ),
            )}
          </Popover>
        )}
        position={Position.BOTTOM_RIGHT}
      >
        <Icon.Menu style={{ fontSize: '1.75rem' }} />
      </Positioner>
    </MenuButton>
  );
};

export { Menu };
