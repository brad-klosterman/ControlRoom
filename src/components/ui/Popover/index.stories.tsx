import type { Meta } from '@storybook/react';
import { useState } from 'react';

import Popover, { PopoverEnum } from '.';

export const PopoverComponent = () => {
  const [role, setRole] = useState('admin');
  return (
    <Popover>
      <Popover.Item icon="Cross" label="Remove user" />
      <Popover.Divider />
      <Popover.Item
        checked={role === 'admin'}
        label="Administrator"
        onClick={() => setRole('admin')}
      />
      <Popover.Item
        checked={role === 'editor'}
        label="Editor"
        onClick={() => setRole('editor')}
      />
      <Popover.Divider />
      <Popover.Item label="Delete user" variant={PopoverEnum.dangerous} />
      <Popover.Item
        icon="Cross"
        label="Delete user with icon"
        variant={PopoverEnum.dangerous}
      />
      <Popover.Item
        checked
        label="Delete user with check"
        variant={PopoverEnum.dangerous}
      />
    </Popover>
  );
};

export default {
  component: Popover,
  title: 'Components/Popover',
} as Meta;
