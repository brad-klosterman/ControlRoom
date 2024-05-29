import { Flex } from 'components/ui';
import styled, { css } from 'styled-components';

export const Row = styled(Flex)<{
  is_expanded: boolean | null | undefined;
}>(
  ({ draggable, is_expanded, theme }) => css`
    width: 100%;
    height: 6rem;
    align-items: center;
    padding: 0 ${theme.space.large};
    gap: ${theme.space.large};
    background: ${theme.colors.bg[200]};
    border: 3px solid ${theme.colors.base[100]};
    border-bottom: 3px solid
      ${is_expanded ? 'transparent' : theme.colors.base[100]};
    border-radius: 3px;
    cursor: ${draggable ? 'grab' : 'pointer'};
    .seon-ui-expander-arrow {
      color: ${theme.colors.base[100]};
    }
  `,
);

export const Content = styled(Flex)<{
  border: boolean;
}>(
  ({ border, theme }) => css`
    flex-direction: column;
    width: 100%;
    margin-top: -3px;
    padding: ${theme.space.xxLarge};
    gap: ${theme.space.xLarge};
    border: 3px solid ${theme.colors.base[100]};
    border-radius: 4px;
    border-top: 0px;
    ${border &&
    css`
      margin-top: 0px;
      border-top: 3px solid ${theme.colors.base[100]};
    `}
  `,
);

export const IconWrap = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    margin-right: ${theme.space.small};
    gap: ${theme.space.xxSmall};
  `,
);

export const CheckBoxRow = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.space.small};
  `,
);

export const Divider = styled.div(
  ({ theme }) => css`
    display: flex;
    width: 100%;
    height: 4px;
    background-color: ${theme.colors.primary[500]};
  `,
);
