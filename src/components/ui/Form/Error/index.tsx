import * as React from 'react';

import Text from '../../Text';

export interface ErrorProps {
  children: string;
}

const Error: React.FC<ErrorProps> = ({ children }) => (
  <Text
    as="span"
    colorKey="error"
    margin={{ top: 'xSmall' }}
    role="alert"
    size="labelLarge"
  >
    {children}
  </Text>
);

export default Error;
