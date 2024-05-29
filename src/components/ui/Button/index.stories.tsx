import type { Meta, Story } from '@storybook/react';

import { Flex } from 'components';
import styled, { css } from 'styled-components';

import Button from '.';
import type { ButtonProps } from '.';

const Container = styled(Flex)(
  ({ theme }) => css`
    padding: ${theme.space.xxxLarge};
  `,
);

const Template: Story<ButtonProps> = args => (
  <Container>
    <Button {...args}>Button</Button>
  </Container>
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = { variant: 'secondary' };

export const Cancel = Template.bind({});
Cancel.args = { variant: 'cancel' };

export const Dangerous = Template.bind({});
Dangerous.args = { variant: 'dangerous' };

export const Success = Template.bind({});
Success.args = { variant: 'success' };

export default {
  args: {
    disabled: false,
    isLoading: false,
    isSkeleton: false,
  },
  component: Button,
  title: 'Components/Button',
} as Meta;
