import React from 'react';

import { Text, Icon, IconButton, Positioner } from 'components';
import { IconButtonVariants } from 'components/ui/IconButton/types';
import styled, { css } from 'styled-components';
import { Position } from 'utils';

export const ActionLabel = styled.div(
  ({ theme }) => css`
    background: ${theme.colors.base[400]};
    border-radius: 4px;
    cursor: pointer;
    padding: 1rem;
  `,
);

export const ActionIcon = (props: {
  icon: keyof typeof Icon;
  onClick(): void;
  label: string;
  variant?: IconButtonVariants;
  disabled?: boolean;
}) => {
  const IconComponent = IconButton[props.icon];

  return (
    <Positioner
      content={({ ref }) => (
        <ActionLabel ref={ref}>
          <Text as="span" size="labelLarge">
            {props.label}
          </Text>
        </ActionLabel>
      )}
      fluid={false}
      onHover
      position={Position.TOP}
    >
      <IconComponent
        disabled={props.disabled}
        onClick={props.onClick}
        variant={props.variant}
      />
    </Positioner>
  );
};
