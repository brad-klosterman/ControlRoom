import type { Meta, Story } from '@storybook/react';

import styled from 'styled-components';

import Text from '../Text';

import IconButton from '.';
import type { IconButtonProps } from '.';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
  gap: 2rem;
  max-width: 80rem;
  text-align: center;
`;

export const Default: Story<IconButtonProps> = args => {
  return (
    <Grid>
      {Object.entries(IconButton).map(([name, Component]) => (
        <div key={name}>
          <Text margin={{ bottom: 'regular' }} size="labelSmall">
            {name}
          </Text>
          <Component {...args} />
        </div>
      ))}
    </Grid>
  );
};

export default {
  args: {
    disabled: false,
    isError: false,
    label: 'Label',
  },
  component: IconButton.Clock,
  title: 'components/IconButton',
} as Meta;
