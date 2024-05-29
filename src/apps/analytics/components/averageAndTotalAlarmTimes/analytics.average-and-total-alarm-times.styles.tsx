import { Flex } from 'components';
import styled, { css } from 'styled-components';

export const AverageItemContainer = styled(Flex)(
  ({ theme }) => css`
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: ${theme.space.xLarge};
    margin: ${theme.space.xxxLarge} 0px;
    width: 100%;
  `,
);

export const BluePill = styled.div(
  ({ theme }) => css`
    padding: 1rem 0px;
    border: 4px solid ${theme.colors.info[500]};
    border-radius: 8px;
    font-size: ${theme.typography.fontSize.displayRegular};
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
);
export const RedPill = styled.div(
  ({ theme }) => css`
    border: 4px solid ${theme.colors.error[500]};
    border-radius: 8px;
    background-color: ${theme.colors.error[500]};
    font-size: ${theme.typography.fontSize.displayRegular};
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0px;
  `,
);

export const IconContainer = styled(Flex)(
  () => css`
    width: 30px;
    height: 30px;
    border-radius: 100%;
  `,
);

export const AverageWrapper = styled(Flex)(
  ({ theme }) => css`
    display: flex;
    width: 100%;
    padding: ${theme.space.xLarge};
    gap: ${theme.space.regular};
  `,
);
