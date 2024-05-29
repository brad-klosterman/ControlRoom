import { forwardRef } from 'react';

import Text from '../../Text';

interface LegendProps {
  children: string;
}

const Legend = forwardRef<HTMLLegendElement, LegendProps>(
  ({ children }, ref) => {
    return (
      <Text
        as="legend"
        colorKey="emphasise"
        isBold
        margin={{ bottom: 'large' }}
        ref={ref}
        size="displaySmall"
      >
        {children}
      </Text>
    );
  },
);

export default Legend;
