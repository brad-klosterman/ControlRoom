import type { Meta, Story } from '@storybook/react';

import Pill from '.';
import type { PillProps } from '.';

const Template: Story<PillProps> = args => <Pill {...args} />;

export const Default = Template.bind({});
Default.args = { text: 'Label' };

export default {
  component: Pill,
  title: 'components/Pill',
} as Meta;
