import { Flex, Grid } from 'components';
import styled, { css } from 'styled-components';

export const RouteContainer = styled.div(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.space.xxLarge};
  `,
);

export const RouteGrid = styled(Grid).attrs(() => ({
  spacing: 'xxLarge',
}))`
  width: 100%;
`;

export const FormContainer = styled(Flex)(
  () => css`
    width: 100%;
  `,
);

export const FormGrid = styled(Grid).attrs(() => ({
  spacing: 'regular',
}))`
  width: 100%;
`;
