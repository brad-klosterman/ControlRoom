import type { Meta, Story } from '@storybook/react';

import Skeleton from '.';
import type { SkeletonProps } from '.';

export const Default: Story<SkeletonProps> = args => <Skeleton {...args} />;

export default {
  component: Skeleton,
  title: 'Components/Skeleton',
} as Meta;
