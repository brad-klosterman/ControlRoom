import { memo, SyntheticEvent } from 'react';

import { useEventCallback } from 'auxiliary';

import { useExpanderContext } from './context/ExpanderContext';
import { ExpanderNode } from './ExpanderNode';
import {
  ExpanderBuilderHeader,
  ExpanderBuilderPanel,
} from './useExpanderItems';

interface ExpanderItemProps {
  item: {
    id: string;
    key: string;
    header: ExpanderBuilderHeader;
    panel: ExpanderBuilderPanel;
  };
  onToggleOpen?(event: SyntheticEvent, toggledKey: string): void;
}

const ExpanderItem = memo(
  ({ item: { header, id, key, panel }, ...rest }: ExpanderItemProps) => {
    const { expandedKeys, onToggle } = useExpanderContext();

    const handleOpenChange = useEventCallback((event: SyntheticEvent) => {
      onToggle?.(event, key);
      rest.onToggleOpen?.(event, key);
    });

    const {
      elementType: HeaderType,
      props: headerProps,
      ref: headerRef,
    } = header;

    const { elementType: PanelType, props: panelProps, ref: panelRef } = panel;

    return (
      <ExpanderNode
        {...{
          ...rest,
          id,
          onOpenChange: handleOpenChange,
          open: expandedKeys?.includes(key),
        }}
      >
        <HeaderType
          {...headerProps}
          expanded={expandedKeys?.includes(key)}
          header={{
            key,
          }}
          ref={headerRef}
        />
        <PanelType
          {...panelProps}
          panel={{
            key,
          }}
          ref={panelRef}
        />
      </ExpanderNode>
    );
  },
);

ExpanderItem.displayName = 'ExpanderItem';

export { ExpanderItem };
export type { ExpanderItemProps };
