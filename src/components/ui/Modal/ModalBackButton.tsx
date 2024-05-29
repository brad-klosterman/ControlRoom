import React from 'react';
import { Flex } from 'components/ui/Layout';
import Icon from 'components/ui/Icon';
import Text from 'components/ui/Text';

const ModalBackButton = (props: { visible?: boolean; onClick(): void }) => {
  if (props?.visible === false) return null;

  return (
    <Flex
      alignItems="center"
      gap="xSmall"
      justifyContent="flex-start"
      style={{ position: 'absolute', left: 0, cursor: 'pointer' }}
      onClick={props.onClick}
    >
      <Icon.ArrowLeft colorKey="emphasise" style={{ fontSize: '1.25rem' }} />
      <Text colorKey="emphasise" size="displaySmall">
        BACK
      </Text>
    </Flex>
  );
};

export { ModalBackButton };
