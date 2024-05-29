import { isVisible } from '@testing-library/user-event/utils/misc/isVisible';
import { motion } from 'framer-motion';

import { Grid, Text, Title as TitleUI } from 'components';
import { Wrapper as IconButton } from 'components/ui/IconButton/styles';
import styled, { css } from 'styled-components';

export const end_left = 4;
export const start_center = 4;
export const end_center = 15;
export const start_right = end_center;
export const end_right = 20;

export const AlarmGrid = styled(Grid).attrs(() => ({
  spacing: 'xLarge',
  repeat: 20,
}))`
  width: 100%;
`;

// LEFT CONTENT
export const L1 = styled(Grid.Cell).attrs(() => ({
  x: [0, end_left],
  y: [0, 1],
}))``;

export const L2 = styled(Grid.Cell).attrs(() => ({
  x: [0, end_left],
}))``;

export const L3 = styled(Grid.Cell).attrs(() => ({
  x: [0, end_left],
  y: [2, 3],
}))<{ visible: boolean }>(
  ({ visible }) => `
    ${
      !visible &&
      css`
        display: none;
      `
    }
  `,
);

export const L4 = styled(Grid.Cell).attrs(() => ({
  x: [0, end_left],
  y: [3, 4],
}))<{ visible: boolean }>(
  ({ visible }) => css`
    display: ${visible ? 'flex' : 'none'};
  `,
);

// MIDDLE CONTENT
export const M1 = styled(Grid.Cell).attrs(() => ({
  justifyContent: 'space-between',
  alignItems: 'center',
  x: [start_center, end_center],
  y: [0, 1],
}))`
  width: 100%;
`;

export const M2 = styled(Grid.Cell).attrs(() => ({
  direction: 'column',
  spacing: 'regular',
  x: [start_center, end_center],
  y: [1, 2],
}))`
  width: 100%;
`;

export const M3 = styled(Grid.Cell).attrs(() => ({
  justifyContent: 'space-between',
  x: [start_center, end_center],
  y: [2, 3],
}))``;

export const M4 = styled(Grid.Cell).attrs(() => ({
  direction: 'column',
  spacing: 'xLarge',
  x: [start_center, end_center],
  y: [3, 4],
}))``;

export const M5 = styled(Grid.Cell).attrs(() => ({
  x: [start_center, end_center],
  y: [4, 5],
}))``;

export const M6 = styled(Grid.Cell).attrs(() => ({
  x: [start_center, end_center],
  y: [5, 6],
}))``;

export const R1 = styled(Grid.Cell).attrs(() => ({
  x: [start_right, end_right],
  y: [0, 1],
}))``;

export const R2 = styled(Grid.Cell).attrs(() => ({
  x: [start_right, end_right],
  y: [1, 2],
}))``;

export const R3 = styled(Grid.Cell).attrs(() => ({
  x: [start_right, end_right],
  y: [2, 3],
}))``;

export const Cell = {
  L1,
  L2,
  L3,
  L4,
  M1,
  M2,
  M3,
  M4,
  M5,
  M6,
  R1,
  R2,
  R3,
};

export const LinkTitle = styled(TitleUI).attrs(() => ({
  colorKey: 'emphasise',
  size: 'displaySmall',
}))`
  line-height: 1;
  cursor: pointer;
`;
