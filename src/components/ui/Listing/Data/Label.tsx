import { useRef } from 'react';

import { useListingMenu } from 'hooks';

import Menu from './Menu';
import Text, { TextProps } from '../../Text';

export interface ActionLabel {
  action:
    | { label: string; status?: boolean; subLabel?: string }[]
    | (() => void);
  label: string;
}

export interface LabelProps extends Pick<TextProps, 'colorKey'> {
  label: string | ActionLabel;
}

const Label: React.FC<LabelProps> = ({ colorKey, label }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const { action, hasMenu, open } = useListingMenu<HTMLSpanElement | null>(
    ref,
    typeof label === 'string' ? undefined : label.action,
  );

  return (
    <Text
      as="span"
      colorKey={colorKey}
      isUnderlined={typeof label !== 'string'}
      onClick={action}
      ref={ref}
      size="labelLarge"
    >
      {typeof label === 'string' ? (
        label
      ) : (
        <>
          {label.label}
          {hasMenu && open && Array.isArray(label.action) && (
            <Menu menu={label.action} />
          )}
        </>
      )}
    </Text>
  );
};

export default Label;
