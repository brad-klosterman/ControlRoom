import { ComponentProps, ForwardedRef, ReactElement } from 'react';

import {
  augmentElement,
  cssModule,
  DomProps,
  forwardRef,
  useId,
  useMergedRefs,
} from 'auxiliary';
import { Flex } from 'components/ui';
import { useSlidingTransition } from 'components/ui/Expander/src/ExpanderNode/useSlidingTransition';

export interface InnerExpandMoreProps extends DomProps {
  children: ReactElement;
  forwardedRef: ForwardedRef<any>;
  open: boolean;
  collapsed_height: string;
}

// currently, hardcoded css for the instructions component,
export function InnerExpandMore({
  children,
  collapsed_height,
  forwardedRef,
  id,
  open,
  ...rest
}: InnerExpandMoreProps) {
  const content_ref = useMergedRefs(forwardedRef!);

  const root_id = useId(id, 'exp');
  const contentId = `${root_id}-content`;

  const content_markup = augmentElement(children, {
    className: 'exp-content-inner',
    expanded: !open,
    id: contentId,
  });

  const { transitionClasses, transitionProps } = useSlidingTransition(
    open,
    content_ref,
    collapsed_height,
  );

  return (
    <Flex
      {...{
        ...rest,
        className: cssModule('exp-content', transitionClasses),
        ref: content_ref,
        style: { width: '100%' },
        ...transitionProps,
      }}
    >
      {content_markup}
    </Flex>
  );
}

export const ExpandMore = forwardRef<InnerExpandMoreProps>(
  ({ children, ...props }, ref) => (
    <InnerExpandMore {...props} children={children} forwardedRef={ref} />
  ),
);

export type ExpandMoreProps = ComponentProps<typeof ExpandMore>;

ExpandMore.displayName = 'ExpandMore';
