import {
  cloneElement,
  ElementType,
  ReactElement,
  ReactNode,
  SyntheticEvent,
} from 'react';

import {
  DomProps,
  isNil,
  useControllableState,
  useEventCallback,
  useId,
} from 'auxiliary';
import { ISpace } from 'theme/space';

import { ExpanderContext } from './context/ExpanderContext';
import { ExpanderArrow } from './ExpanderArrow';
import { ExpanderItem } from './ExpanderItem';
import { ExpanderNode } from './ExpanderNode';
import { useExpanderItems } from './useExpanderItems';

export interface ExpanderProps extends DomProps {
  as?: ElementType;
  autoFocus?: boolean | number;
  children: ReactNode;
  defaultExpandedKeys?: string[];
  expandedKeys?: string[] | null;
  expansionMode?: 'single' | 'multiple';
  gap?: keyof ISpace;
  /**
   * Called when an accordion item is toggled.
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {String[]} keys - The keys of the expanded items.
   * @returns {void}
   */
  onExpansionChange?: (event: SyntheticEvent, keys: string[]) => void;
  variant?: 'borderless' | 'bordered';
}

export interface IExpander {
  (props: ExpanderProps): ReactElement;
  Arrow: typeof ExpanderArrow;
  Node: typeof ExpanderNode;
}

const Expander: IExpander = ({
  children,
  defaultExpandedKeys,
  expandedKeys: expandedKeysProp,
  expansionMode = 'single',
  id: expander_id,
  onExpansionChange,
}) => {
  const [expandedKeys, setExpandedKeys] = useControllableState(
    expandedKeysProp,
    defaultExpandedKeys,
    [],
  );

  const items = useExpanderItems(
    children,
    useId(expander_id, 'seon-ui-expander'),
  );

  const handleToggle = useEventCallback(
    (event: SyntheticEvent, toggledKey: string) => {
      let newKeys;

      if (!expandedKeys!.includes(toggledKey)) {
        if (expansionMode === 'multiple') {
          newKeys = [...expandedKeys!, toggledKey];
        } else {
          newKeys = [toggledKey];
        }
      } else {
        newKeys = expandedKeys!.filter(x => x !== toggledKey);
      }

      if (!isNil(onExpansionChange)) {
        onExpansionChange(event, newKeys);
      }

      setExpandedKeys(newKeys);
    },
  );

  const handleSetExpandedKeys = useEventCallback((keys: Array<string>) => {
    setExpandedKeys(keys);
  });

  return (
    <>
      <ExpanderContext.Provider
        value={{
          expandedKeys: expandedKeys!,
          onToggle: handleToggle,
          setExpandedKeys: handleSetExpandedKeys,
        }}
      >
        {items.map(({ below, ...item }) => {
          if (below) {
            return cloneElement(below, {});
          }

          return <ExpanderItem item={item} key={item.id} />;
        })}
      </ExpanderContext.Provider>
    </>
  );
};

Expander.Node = ExpanderNode;
Expander.Arrow = ExpanderArrow;

export default Expander;
