import {
  end_right,
  start_right,
} from 'apps/alarms/components/alarm.expander/grid';
import { Grid } from 'components';
import styled from 'styled-components';

export const IncidentImagesCell = styled(Grid.Cell).attrs(() => ({
  x: [start_right, end_right],
  y: [1, 4],
}))``;
