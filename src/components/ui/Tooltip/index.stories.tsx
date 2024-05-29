import type { Meta } from '@storybook/react';

import Button from '../Button';

import Tooltip from '.';

export const TooltipComponent = () => (
  <Tooltip>
    <Tooltip.Header>From the knowledge base</Tooltip.Header>
    <Tooltip.Body>
      <Tooltip.Content>
        As well as directors we need to verify the identities of any beneficial
        owners. These are also sometimes referred to as persons with significant
        control.
      </Tooltip.Content>
      <Tooltip.Content isBold>
        DAVIDSON, Marie is a beneficial owner of Redfield Recruitment.
      </Tooltip.Content>
    </Tooltip.Body>
    <Tooltip.Footer>
      <Button>Button</Button>
    </Tooltip.Footer>
  </Tooltip>
);

export default {
  component: Tooltip,
  title: 'Components/Tooltip',
} as Meta;
