import { Flex } from 'components';
import styled, { css } from 'styled-components';

export const DataItem = styled(Flex)(
  ({ theme }) => css`
    flex-direction: row;
    font-size: 0.75rem;
    border: 1px solid ${theme.colors.info[800]};
    border-radius: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: ${theme.space.xSmall} ${theme.space.regular};
  `,
);
