import type { Meta, Story } from '@storybook/react';

import Logo from '.';
import type { LogoProps } from '.';

export const Default: Story<LogoProps> = args => (
  <div style={{ fontSize: '3rem' }}>
    <Logo {...args} />
  </div>
);

export default {
  component: Logo,
  title: 'components/Logo',
} as Meta;
