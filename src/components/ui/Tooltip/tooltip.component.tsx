import { forwardRef } from 'react';

import { Flex, Icon, Text } from 'components';

import Tooltip from './';

const TooltipComponent = forwardRef<
  HTMLDivElement,
  { content: string; is_active: boolean; is_warning?: boolean; title: string }
>(({ content, is_active, is_warning = false, title }, ref) => {
  if (!is_active) return null;
  return (
    <Tooltip ref={ref}>
      <Tooltip.Header>
        <Flex alignItems="center" gap="xSmall">
          {is_warning && (
            <Icon.Warning
              colorKey="warning"
              style={{
                fontSize: '1.75rem',
                margin: '-0.25rem',
              }}
            />
          )}
          <Text isBold size="regular" style={{ lineHeight: 1 }}>
            {title}
          </Text>
        </Flex>
      </Tooltip.Header>
      <Tooltip.Body>
        <Tooltip.Content>{content}</Tooltip.Content>
      </Tooltip.Body>
    </Tooltip>
  );
});

export default TooltipComponent;
