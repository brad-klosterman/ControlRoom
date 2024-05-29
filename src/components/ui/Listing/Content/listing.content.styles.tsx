import { Flex } from 'components';
import styled, { css } from 'styled-components';

export const ContentWrap = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${theme.space.large};
    background: ${theme.colors.table.content};
    border-right: 2px solid ${theme.colors.table.border};
    border-left: 2px solid ${theme.colors.table.border};
    border-bottom: 2px solid ${theme.colors.table.border};
  `,
);

export const ContentInner = styled(Flex)(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    gap: ${theme.space.large};
    padding: ${theme.space.xLarge};
  `,
);
