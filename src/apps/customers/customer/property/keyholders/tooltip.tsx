import { forwardRef } from 'react';

import { Flex, Icon, Text } from 'components';
import Tooltip from 'components/ui/Tooltip';

export const PhoneTooltip = forwardRef<HTMLDivElement, { active: boolean }>(
  ({ active }, ref) => {
    if (!active) return null;
    return (
      <Tooltip ref={ref}>
        <Tooltip.Header>
          <Flex alignItems="center" gap="xSmall">
            <Icon.Warning
              colorKey="warning"
              style={{
                fontSize: '1.75rem',
                margin: '-0.25rem',
              }}
            />
            <Text isBold size="regular" style={{ lineHeight: 1 }}>
              Phone Number Can’t Be Edited
            </Text>
          </Flex>
        </Tooltip.Header>
        <Tooltip.Body>
          <Tooltip.Content>
            If the number has changed, please delete this keyholder and create a
            new one.
          </Tooltip.Content>
        </Tooltip.Body>
      </Tooltip>
    );
  },
);
