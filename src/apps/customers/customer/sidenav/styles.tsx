import { CUSTOMER_STATUS } from 'codegen/graphql';
import styled, { css } from 'styled-components';

export const HeaderContainer = styled.div(
  () => css`
    //position: absolute;
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  `,
);

export const IconContainer = styled.div(
  () => css`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 10rem;
  `,
);

export const Details = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: ${theme.space.xLarge};
    margin: ${theme.space.xLarge} 0;
  `,
);

export const HeaderContact = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.space.xSmall};
    padding: 0 ${theme.space.large};
  `,
);

export const Status = styled.div<{ status: CUSTOMER_STATUS }>(
  ({ status, theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${status === 'active'
      ? 'rgba(40,167,69,0.17)'
      : 'rgba(166,23,36,0.17)'};
    border-radius: 3px;
    width: 8rem;
    height: 2.5rem;
    padding: ${theme.space.xSmall} ${theme.space.small};
  `,
);

export const FooterContainer = styled.div(
  () => css`
    //position: absolute;
    margin-top: 2rem;
    margin-bottom: 3rem;
    display: flex;
    //align-items: flex-end;
  `,
);
