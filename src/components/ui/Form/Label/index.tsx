import { forwardRef, HTMLAttributes, LabelHTMLAttributes } from 'react';

import Text from '../../Text';

interface LabelProps
  extends HTMLAttributes<HTMLLabelElement>,
    LabelHTMLAttributes<HTMLLabelElement> {
  children: string;
  small?: boolean;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, small = false, ...props }, ref) => {
    return (
      <Text
        {...props}
        as="label"
        colorKey="secondary"
        ref={ref}
        size={small ? 'labelLarge' : 'regular'}
      >
        {children}
      </Text>
    );
  },
);

export default Label;
