import { Flex } from 'components';
import styled, { css } from 'styled-components';

export const TableContainer = styled(Flex)(
  ({ theme }) => css`
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.bg[600]};
    // padding-bottom: 6rem;
  `,
);
export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
