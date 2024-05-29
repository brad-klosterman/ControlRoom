import type { Meta, Story } from '@storybook/react';

import generateTheme from 'theme';

import Text from '.';
import type { TextProps } from '.';

const theme = generateTheme();

const Template: Story<TextProps> = args => <Text {...args}>Default</Text>;

export const Default = Template.bind({});

export default {
  args: {
    isBold: false,
    isTruncated: false,
    isUnderlined: false,
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
  component: Text,
  title: 'Components/Text',
} as Meta;
