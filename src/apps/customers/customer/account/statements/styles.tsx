import { Flex } from 'components';
import styled, { css } from 'styled-components';

export const Footer = styled(Flex)(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: ${theme.space.xLarge};
    background: ${theme.colors.base[400]};
  `,
);

export const FooterActions = styled(Flex)(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.space.xLarge};
  `,
);

export const TotalDisplay = styled(Flex)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.space.xLarge};
  `,
);

export const CreditNoteContainer = styled(Flex)(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    // padding: ${theme.space.xLarge};
    gap: ${theme.space.regular};
    //background: ${theme.colors.base[800]};
  `,
);
