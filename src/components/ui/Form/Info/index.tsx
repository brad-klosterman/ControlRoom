import { forwardRef } from 'react';

import type { DefaultTheme } from 'styled-components';

import Text from '../../Text';

interface InfoProps {
  children: string;
  color?: keyof DefaultTheme['colors']['text'];
}

const Info = forwardRef<HTMLSpanElement, InfoProps>(
  ({ children, color = 'secondary' }, ref) => {
    return (
      <Text
        as="span"
        colorKey={color}
        margin={{ top: 'small' }}
        ref={ref}
        size="labelLarge"
      >
        {children}
      </Text>
    );
  },
);

export default Info;
