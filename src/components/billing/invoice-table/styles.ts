import { Flex } from 'components';
import styled, { css } from 'styled-components';

export const Container = styled(Flex)(
  ({ theme }) => css`
    display: flex;
    width: 100%;
    padding: ${theme.space.xLarge};
    padding-bottom: 0;
    background: ${theme.colors.base[400]};
    .expander-arrow {
      flex-shrink: 0;
      transition: transform 0.15s linear;
    }
    .expander-arrow-up {
      transform: rotate(-180deg);
    }
  `,
);
