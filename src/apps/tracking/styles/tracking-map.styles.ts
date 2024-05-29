import { RESPONDER_STATUS } from 'codegen/graphql';
import { Flex } from 'components/ui';
import styled, { css } from 'styled-components';

export const Container = styled(Flex)(
  () => css`
    //position: absolute;
    //top: 0;
    //left: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `,
);

export const MapWrapper = styled(Flex).attrs(() => ({}))`
  height: 100%;
  margin: 0;
  padding: 0;
`;

export const ResponderName = styled(Flex).attrs(() => ({
  alignItems: 'center',
  direction: 'column',
  justifyContent: 'center',
}))<{
  status: RESPONDER_STATUS;
}>(
  ({ status, theme }) => css`
    width: 8rem;
    height: 25px;
    border: 1px solid #373737;
    box-sizing: border-box;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    text-align: center;
    background-color: ${{
      AVAILABLE: 'green',
      INACTIVE: theme.colors.grey[100],
      OCCUPIED: theme.colors.warning[500],
      OPERATING: theme.colors.error[500],
      undefined: theme.colors.error[500],
    }[status]};
  `,
);
