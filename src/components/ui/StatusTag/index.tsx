import { CSSProperties } from 'react';

import { useTheme } from 'styled-components';

import {
  StatusTagBox,
  StatusTagColorVariants,
  StatusTagOptions,
} from './styles';
import Text from '../Text';

interface StatusTagProps extends StatusTagOptions {
  text: string;
  className?: string;
  style?: CSSProperties;
}

const StatusTag = ({ text, variant, style, className }: StatusTagProps) => {
  const { colors } = useTheme();

  const getTextColor = (): string | undefined => {
    if (!variant) {
      return undefined;
    }

    return colors[variant][700];
  };

  return (
    <StatusTagBox style={style} className={className} variant={variant}>
      <Text
        size="labelRegular"
        style={{ color: getTextColor(), textAlign: 'center' }}
      >
        {text.toUpperCase()}
      </Text>
    </StatusTagBox>
  );
};

export type { StatusTagColorVariants, StatusTagProps };
export { StatusTag };
