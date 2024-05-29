import { Flex, Text } from 'components';
import styled, { css } from 'styled-components';

export const Container = styled(Flex)(
  ({ theme }) => css`
    display: flex;
    width: 100%;
    border-radius: 0.5rem;
    gap: ${theme.space.regular};
  `
);

export const TimeBox = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    gap: ${theme.space.regular};
    //padding: ${theme.space.small};
    border-radius: 0.5rem;
  `
);

export const Title = styled(Text).attrs(() => ({
  //colorKey: 'secondary',
  size: 'labelLarge'
}))`
  text-align: center;
`;

export const HMSBox = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    border: 2px solid ${theme.colors.info[500]};
    border-radius: 0.5rem;
    font-size: ${theme.typography.fontSize.labelLarge};
  `
);

export const Timestamp = styled(Text).attrs(() => ({
  colorKey: 'secondary',
  size: 'labelLarge'
}))`
  text-align: center;
`;

// export const Container = styled.div(
//   ({ theme }) => css`
//     display: flex;
//     width: 100%;
//     border-radius: 0 0 0.5rem 0.5rem;
//
//     //background-color: ${theme.colors.base[400]};
//     //border: 2px solid ${theme.colors.base[400]};
//     //padding: ${theme.space.xLarge};
//   `
// );

// export const Timestamp = styled.div(
//   ({ theme }) => css`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     font-size: ${theme.typography.fontSize.labelSmall};
//   `
// );
