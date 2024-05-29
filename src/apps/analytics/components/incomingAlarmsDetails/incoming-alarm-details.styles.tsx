import { Flex } from 'components';
import styled, { css } from 'styled-components';

export const DataColumn = styled(Flex)(
  () => css`
    flex: 1;
    flex-direction: column;
  `,
);

export const PieContainer = styled.div`
  width: 500px;
  height: 500px;
`;

export const IconContainer = styled(Flex)(
  () => css`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
  `,
);

export const LegendContainer = styled(Flex)(
  () => css`
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
  `,
);

export const LegendItem = styled(Flex)(
  ({ theme }) => css`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: ${theme.space.xSmall};
  `,
);

export const LegendIcon = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  margin-right: 10px;
  background-color: rgb(${props => props.color});
  box-shadow: 0 0 0 5px rgba(${props => props.color}, 0.5);
`;

export const comingSoon = styled(Flex)(
  ({ theme }) => css`
    opacity: 0.8;
    position: absolute;
    background-color: ${theme.colors.grey[600]};
    z-index: 20;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
    justify-content: center;
    align-items: center;
  `,
);
