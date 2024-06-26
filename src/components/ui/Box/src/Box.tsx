import { ComponentProps, ElementType, ForwardedRef, ReactNode } from 'react';

import { forwardRef, omitProps } from 'auxiliary';

export interface InnerBoxProps {
  /**
   * An HTML element type or a custom React element type to render as.
   */
  as?: ElementType;
  /**
   * @ignore
   */
  children?: ReactNode;
  /**
   * @ignore
   */
  forwardedRef: ForwardedRef<any>;
  /**
   * [Slot](?path=/docs/getting-started-slots--page) to render into.
   */
  slot?: string;
}

export function InnerBox(props: InnerBoxProps) {
  const {
    as: As = 'div',
    children,
    forwardedRef,
    ...rest
  } = omitProps(props, ['slot']);

  return (
    <As {...rest} ref={forwardedRef}>
      {children}
    </As>
  );
}

export const Box = forwardRef<InnerBoxProps>((props, ref) => (
  <InnerBox {...props} forwardedRef={ref} />
));

export type BoxProps = ComponentProps<typeof Box>;

Box.displayName = 'Box';
