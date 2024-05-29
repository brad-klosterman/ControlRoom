import type { Story } from '@storybook/react';

import { Flex, Image } from 'components';
import { G4SLogo, ProfilePlaceholder } from 'images';

export default {
  component: Image,
  title: 'Components/Image',
};

export const Main: Story = () => (
  <Flex gap="regular">
    <Image
      alt="SpaceX launch"
      height={100}
      shape="rounded"
      src={G4SLogo}
      width={100}
    />
    <Image
      alt="SpaceX launch"
      height={100}
      shape="circular"
      src={ProfilePlaceholder}
      width={100}
    />
  </Flex>
);
