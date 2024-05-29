import { Flex, Text } from 'components';
import styled, { css } from 'styled-components';

export const Information = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: stretch;
    width: 100%;
    gap: ${theme.space.regular};
  `,
);

export const InfoBox = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: ${theme.space.regular};
    background: ${theme.colors.base[400]};
    border-radius: 0;
    &:first-of-type {
      border-top-left-radius: 0.5rem;
    }
    &:last-of-type {
      border-top-right-radius: 0.5rem;
    }
  `,
);

export const InfoLabel = styled(Text).attrs(() => ({
  colorKey: 'secondary',
  size: 'labelRegular',
}))``;

export const InfoValue = styled(Text).attrs(() => ({
  size: 'displaySmall',
}))``;

export const InstructionsWrap = styled.div(
  ({ theme }) => css`
    position: relative;
    display: flex;
    width: 100%;
    border-radius: 0 0 0.5rem 0.5rem;
    background-color: ${theme.colors.base[400]};
    padding: ${theme.space.xLarge};
    overflow: hidden;
  `,
);

export const Instructions = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    .exp-content {
      background: ${theme.colors.base[400]};
      overflow: hidden;
    }
    .expander-arrow {
      flex-shrink: 0;
      transition: transform 0.15s linear;
    }
    .expander-arrow-up {
      transform: rotate(-180deg);
    }
  `,
);

export const FlexContent = styled(Flex)(
  ({ theme }) => css`
    flex-direction: column;
    width: 100%;
    height: 100%;
  `,
);

export const ArrowWrap = styled.div(
  () => css`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  `,
);
