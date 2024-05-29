import { Flex } from 'components';
import styled, { css } from 'styled-components';

export const Container = styled(Flex)(
  ({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100%;
    padding: ${theme.space.xLarge};
    background: ${theme.colors.base[700]};
    gap: ${theme.space.regular};
  `,
);
export const FiltersContainer = styled(Flex)(
  ({ theme }) => css`
    display: flex;
    width: 100%;
    gap: ${theme.space.regular};
  `,
);

export const TableWrap = styled.div(
  ({ theme }) => css`
    display: flex;
    width: 100%;
    height: 27.45rem;
    padding: ${theme.space.xLarge};
    background: ${theme.colors.base[700]};
  `,
);

export const FalseReasonsTableWrap = styled.div(
  ({ theme }) => css`
    display: flex;
    width: 100%;
    height: 36rem;
    padding: ${theme.space.xLarge};
    background: ${theme.colors.base[700]};
  `,
);
