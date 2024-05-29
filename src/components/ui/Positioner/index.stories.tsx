import type { Meta } from '@storybook/react';
import { forwardRef, useState } from 'react';

import { Position } from 'utils';

import Button from '../Button';
import Popover, { PopoverEnum } from '../Popover';
import Tooltip from '../Tooltip';

import Positioner from './index';

const PopoverComponent = forwardRef<HTMLDivElement>((_, ref) => {
  const [role, setRole] = useState('admin');
  return (
    <Popover ref={ref}>
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
});

export const WithPopover = () => {
  return (
    <>
      <div style={{ display: 'flex', height: `${100 / 3}vh` }}>
        <div style={{ flex: `${100 / 3}%` }}>
          <Positioner content={({ ref }) => <PopoverComponent ref={ref} />}>
            <Button>Click</Button>
          </Positioner>
        </div>
        <div style={{ flex: `${100 / 3}%`, textAlign: 'center' }}>
          <Positioner
            content={({ ref }) => <PopoverComponent ref={ref} />}
            position={Position.BOTTOM_RIGHT}
          >
            <Button>Click</Button>
          </Positioner>
        </div>
        <div style={{ flex: `${100 / 3}%`, textAlign: 'right' }}>
          <Positioner content={({ ref }) => <PopoverComponent ref={ref} />}>
            <Button>Click</Button>
          </Positioner>
        </div>
      </div>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          height: `${100 / 3}vh`,
        }}
      >
        <div style={{ flex: `${100 / 2}%` }}>
          <Positioner
            content={({ ref }) => <PopoverComponent ref={ref} />}
            position={Position.RIGHT}
          >
            <Button>Click</Button>
          </Positioner>
        </div>
        <div style={{ flex: `${100 / 2}%`, textAlign: 'right' }}>
          <Positioner
            content={({ ref }) => <PopoverComponent ref={ref} />}
            position={Position.LEFT}
          >
            <Button>Click</Button>
          </Positioner>
        </div>
      </div>
      <div
        style={{
          alignItems: 'flex-end',
          display: 'flex',
          height: `${100 / 3}vh`,
        }}
      >
        <div style={{ flex: `${100 / 3}%` }}>
          <Positioner content={({ ref }) => <PopoverComponent ref={ref} />}>
            <Button>Click</Button>
          </Positioner>
        </div>
        <div style={{ flex: `${100 / 3}%`, textAlign: 'center' }}>
          <Positioner content={({ ref }) => <PopoverComponent ref={ref} />}>
            <Button>Click</Button>
          </Positioner>
        </div>
        <div style={{ flex: `${100 / 3}%`, textAlign: 'right' }}>
          <Positioner content={({ ref }) => <PopoverComponent ref={ref} />}>
            <Button>Click</Button>
          </Positioner>
        </div>
      </div>
    </>
  );
};

const TooltipComponent = forwardRef<HTMLDivElement, any>(
  ({ setIsVisible }, ref) => {
    return (
      <Tooltip ref={ref}>
        <Tooltip.Header>From the knowledge base</Tooltip.Header>
        <Tooltip.Body>
          <Tooltip.Content>
            As well as directors we need to verify the identities of any
            beneficial owners. These are also sometimes referred to as persons
            with significant control.
          </Tooltip.Content>
          <Tooltip.Content isBold>
            DAVIDSON, Marie is a beneficial owner of Redfield Recruitment.
          </Tooltip.Content>
        </Tooltip.Body>
        <Tooltip.Footer>
          <Button onClick={setIsVisible && (() => setIsVisible(false))}>
            Button
          </Button>
        </Tooltip.Footer>
      </Tooltip>
    );
  },
);

export const WithToolTip = () => {
  return (
    <>
      <div style={{ display: 'flex', height: `${100 / 3}vh` }}>
        <div style={{ flex: `${100 / 3}%` }}>
          <Positioner content={({ ref }) => <TooltipComponent ref={ref} />}>
            <Button>Click</Button>
          </Positioner>
        </div>
        <div style={{ flex: `${100 / 3}%`, textAlign: 'center' }}>
          <Positioner
            content={({ ref }) => <TooltipComponent ref={ref} />}
            position={Position.BOTTOM_RIGHT}
          >
            <Button>Click</Button>
          </Positioner>
        </div>
        <div style={{ flex: `${100 / 3}%`, textAlign: 'right' }}>
          <Positioner content={({ ref }) => <TooltipComponent ref={ref} />}>
            <Button>Click</Button>
          </Positioner>
        </div>
      </div>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          height: `${100 / 3}vh`,
        }}
      >
        <div style={{ flex: `${100 / 2}%` }}>
          <Positioner
            content={({ ref }) => <TooltipComponent ref={ref} />}
            position={Position.RIGHT}
          >
            <Button>Click</Button>
          </Positioner>
        </div>
        <div style={{ flex: `${100 / 2}%`, textAlign: 'right' }}>
          <Positioner
            content={({ ref }) => <TooltipComponent ref={ref} />}
            position={Position.LEFT}
          >
            <Button>Click</Button>
          </Positioner>
        </div>
      </div>
      <div
        style={{
          alignItems: 'flex-end',
          display: 'flex',
          height: `${100 / 3}vh`,
        }}
      >
        <div style={{ flex: `${100 / 3}%` }}>
          <Positioner content={({ ref }) => <TooltipComponent ref={ref} />}>
            <Button>Click</Button>
          </Positioner>
        </div>
        <div style={{ flex: `${100 / 3}%`, textAlign: 'center' }}>
          <Positioner content={({ ref }) => <TooltipComponent ref={ref} />}>
            <Button>Click</Button>
          </Positioner>
        </div>
        <div style={{ flex: `${100 / 3}%`, textAlign: 'right' }}>
          <Positioner content={({ ref }) => <TooltipComponent ref={ref} />}>
            <Button>Click</Button>
          </Positioner>
        </div>
      </div>
    </>
  );
};

export const SingleToolTip = () => {
  return (
    <Positioner
      content={({ ref, setIsVisible }) => (
        <TooltipComponent ref={ref} setIsVisible={setIsVisible} />
      )}
      position={Position.RIGHT}
    >
      <Button>Click</Button>
    </Positioner>
  );
};

export default {
  component: Positioner,
  title: 'Components/Positioner',
} as Meta;
