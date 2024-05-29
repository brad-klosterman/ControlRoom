import type { Meta, Story } from '@storybook/react';

import generateTheme from 'theme';

import Title from '.';
import type { TitleProps } from '.';

const theme = generateTheme();

const Template: Story<TitleProps> = args => <Title {...args}>Default</Title>;

export const Default = Template.bind({});

export default {
  args: {
    isTruncated: false,
  },
  argTypes: {
    colorKey: {
      control: {
        options: Object.keys(theme.colors.text),
        type: 'select',
      },
      name: 'colorKey',
    },
    size: {
      control: {
        options: Object.keys(theme.typography.fontSize),
        type: 'select',
      },
      name: 'size',
    },
  },
  component: Title,
  title: 'Components/Title',
} as Meta;
