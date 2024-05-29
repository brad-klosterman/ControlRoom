import {
  Children,
  ComponentProps,
  ElementType,
  KeyboardEvent,
  MouseEvent,
  ReactElement,
  ReactNode,
  SyntheticEvent,
  useCallback,
} from 'react';

import {
  AssignableRef,
  augmentElement,
  cssModule,
  DomProps,
  forwardRef,
  isNil,
  Keys,
  resolveChildren,
  useControllableState,
  useEventCallback,
  useId,
  useMergedRefs,
} from 'auxiliary';
import { Box, Flex } from 'components/ui';

import { useSlidingTransition } from './useSlidingTransition';
import { ExpanderNodeContext } from '../context/ExpanderNodeContext';

export interface InnerExpanderNodeProps extends DomProps {
  as?: ElementType;
  children: ReactNode;
  defaultOpen?: boolean;
  forwardedRef: AssignableRef<any>;
  /**
   * Called when the open state change.
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {bool} isOpen - Whether the content is visible.
   * @returns {void}
   */
  onOpenChange?: (event: SyntheticEvent, isOpen: boolean) => void;
  open?: boolean | null;
}

export function InnerExpanderNode({
  as = 'div',
  children,
  defaultOpen,
  forwardedRef,
  id,
  onOpenChange,
  open = false,
  ...rest
}: InnerExpanderNodeProps) {
  // TODO have a look at useControllableState and see if this is still needed
  const [isOpen, setIsOpen] = useControllableState<boolean>(
    open === null ? false : open,
    defaultOpen,
    false,
  );

  const contentRef = useMergedRefs(forwardedRef);

  const toggle = useCallback(
    (event: SyntheticEvent) => {
      setIsOpen(!isOpen);

      if (!isNil(onOpenChange)) {
        onOpenChange(event, !isOpen);
      }
    },
    [isOpen, setIsOpen, onOpenChange],
  );

  const close = useCallback(
    (event: SyntheticEvent) => {
      if (isOpen) {
        toggle(event);
      }
    },
    [isOpen, toggle],
  );

  const [trigger, content] = Children.toArray(
    resolveChildren(children!, { close }),
  ) as ReactElement[];

  if (isNil(trigger) || isNil(content)) {
    throw new Error(
      'An ExpanderNode component must have a trigger and a content element.',
    );
  }

  const handleClick = useEventCallback((event: MouseEvent) => {
    event.preventDefault();

    toggle(event);
  });

  const handleKeyDown = useEventCallback((event: KeyboardEvent) => {
    // eslint-disable-next-line default-case
    switch (event.key) {
      case Keys.enter:
      case Keys.space:
        event.preventDefault();
        toggle(event);
        break;
    }
  });

  const handleKeyUp = useEventCallback((event: KeyboardEvent) => {
    if (event.key === Keys.space) {
      event.preventDefault();
    }
  });

  const rootId = useId(id, 'seon-ui-expanderNode');
  const contentId = `${rootId}-content`;

  const triggerMarkup = augmentElement(trigger, {
    'aria-controls': contentId,
    'aria-expanded': isOpen,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
  });

  const contentMarkup = augmentElement(content, {
    'aria-hidden': !isOpen,
    className: 'seon-ui-expanderNode-content-inner',
    id: contentId,
  });

  const { transitionClasses, transitionProps } = useSlidingTransition(
    isOpen,
    contentRef,
  );

  return (
    <ExpanderNodeContext.Provider
      value={{
        close,
        isOpen,
      }}
    >
      <Flex direction="column" style={{ width: '100%' }}>
        {triggerMarkup}
        <Box
          {...{
            ...rest,
            as,
            className: cssModule(
              'seon-ui-expanderNode-content',
              transitionClasses,
            ),
            ref: contentRef,
            style: { width: '100%' },
            ...transitionProps,
          }}
        >
          {contentMarkup}
        </Box>
      </Flex>
    </ExpanderNodeContext.Provider>
  );
}

export const ExpanderNode = forwardRef<InnerExpanderNodeProps>((props, ref) => (
  <InnerExpanderNode {...props} forwardedRef={ref!} />
));

export type ExpanderNodeProps = ComponentProps<typeof ExpanderNode>;

ExpanderNode.displayName = 'ExpanderNode';
