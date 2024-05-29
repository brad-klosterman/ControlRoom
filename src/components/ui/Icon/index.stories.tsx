import type { Meta, Story } from '@storybook/react';

import styled from 'styled-components';
import generateTheme from 'theme';

import Text from '../Text';

import Icon from '.';
import type { IconProps } from '.';

const theme = generateTheme();

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
  gap: 2rem;
  max-width: 80rem;
  text-align: center;
`;

export const Default: Story<IconProps> = args => (
  <Grid>
    {Object.entries(Icon).map(([name, Component]) => (
      <div key={name}>
        <Text margin={{ bottom: 'regular' }} size="labelSmall">
          {name}
        </Text>
        <Component {...args} />
      </div>
    ))}
  </Grid>
);

export const DynamicIcon: Story = ({ type = 'Phone' }) => {
  const RenderedIcon = Icon[type];
  return <RenderedIcon />;
};

export default {
  args: {
    isFixedSize: false,
  },
  argTypes: {
    colorKey: {
      control: {
        options: Object.keys(theme.colors.icon),
        type: 'select',
      },
    },
  },
  component: Icon.Clock,
  title: 'components/Icon',
} as Meta;
