import { Flex, Text } from 'components';
import styled, { css } from 'styled-components';

export const RouteWrap = styled(Flex)(
  ({ theme }) => css`
    flex: 1;
    padding: 5rem;
    background-color: ${theme.colors.bg[500]};
  `,
);

export const SubRouteWrap = styled(Flex)(
  () => css`
    flex: 1;
    padding: 3rem 3rem 0 3rem;
    overflow-y: auto;
    scrollbar-gutter: stable;
  `,
);

export const RouteName = styled(Text)(
  () => css`
    color: rgba(255, 255, 255, 0.7);
    line-height: 1;
  `,
);
