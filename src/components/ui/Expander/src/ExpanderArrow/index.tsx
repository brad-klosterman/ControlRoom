import { ComponentProps, ForwardedRef } from 'react';

import { cssModule, forwardRef, isNil } from 'auxiliary';
import { slot } from 'src/auxiliary/src/slots';

import Icon from '../../../Icon';
import { useExpanderNodeContext } from '../context/ExpanderNodeContext';

export interface InnerExpanderArrowProps {
  forwardedRef: ForwardedRef<any>;
  open?: boolean;
}

export function InnerExpanderArrow({
  forwardedRef,
  open,
  ...rest
}: InnerExpanderArrowProps) {
  const expanderNodeContext = useExpanderNodeContext();

  const isOpen = open ?? expanderNodeContext?.isOpen;

  if (isNil(isOpen)) {
    throw new Error(
      'The expander arrow component must receive a controlled prop "open" or have a parent ExpanderNodeContext.',
    );
  }

  return (
    <Icon.ArrowDown
      {...{
        ...rest,
        className: cssModule('seon-ui-expander-arrow', isOpen ? 'up' : 'down'),
        ref: forwardedRef,
      }}
      colorKey="default"
    />
  );
}

export const ExpanderArrow = slot(
  'icon',
  forwardRef<InnerExpanderArrowProps>((props, ref) => (
    <InnerExpanderArrow {...props} forwardedRef={ref} />
  )),
);

export type ExpanderArrowProps = ComponentProps<typeof ExpanderArrow>;

ExpanderArrow.displayName = 'ExpanderArrow';
