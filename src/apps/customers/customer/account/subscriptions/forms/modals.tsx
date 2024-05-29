import React from 'react';

import { Flex, Text } from 'components';

export const ConfirmEditTemplate = ({
  template,
  usage,
}: {
  template: 'INVOICE' | 'PAYMENT';
  usage: { subscription_id: number; subscription_name: string }[];
}) => (
  <Flex direction="column" gap="large" style={{ margin: '1rem 0' }}>
    <Text size="displayRegular" style={{ textAlign: 'center' }}>
      Editing this {template === 'INVOICE' ? 'Invoice' : 'Payment'} Template
      will update the following subscriptions:
    </Text>
    <Flex direction="column" gap="small">
      {usage.map(({ subscription_id, subscription_name }) => (
        <Text
          key={subscription_id}
          size="displayRegular"
          style={{ textAlign: 'center' }}
        >
          {subscription_name}
        </Text>
      ))}
    </Flex>
  </Flex>
);
