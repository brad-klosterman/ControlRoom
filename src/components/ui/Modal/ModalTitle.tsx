import React from 'react';

import Text from 'components/ui/Text';
import { ModalTitleContainer } from './styles';

const ModalTitle = (props: {
  title: string | null | undefined;
  subtitle: string | null | undefined;
  info: string | null | undefined;
}) => {
  if (!props.title) return null;

  return (
    <ModalTitleContainer layout>
      <Text isBold size="displayLarge" style={{ textAlign: 'center' }}>
        {props.title.toUpperCase()}
      </Text>
      {props.subtitle && (
        <Text
          size="displayRegular"
          style={{ textAlign: 'center', whiteSpace: 'pre-line' }}
        >
          {props.subtitle}
        </Text>
      )}
      {props.info && (
        <Text
          colorKey="warning"
          size="displaySmall"
          style={{
            marginTop: '2rem',
            textAlign: 'center',
            whiteSpace: 'pre-line',
          }}
        >
          {props.info}
        </Text>
      )}
    </ModalTitleContainer>
  );
};

export { ModalTitle };
