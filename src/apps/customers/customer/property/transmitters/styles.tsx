import { Flex } from 'components';
import styled, { css } from 'styled-components';

export namespace TransmitterStyles {
  export const Page = styled.div(
    ({ theme }) => css`
      overflow: overlay;
      padding: ${theme.space.xxLarge};
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 5rem;
    `,
  );

  export const PageColumn = styled.div(
    () => css`
      flex-grow: 1;
      flex-basis: 0;
    `,
  );

  export const PageColumnHeader = styled.div(
    () => css`
      display: flex;
      justify-content: space-between;
      margin-bottom: 3rem;
      width: 100%;
    `,
  );
}

export const Row = styled(Flex)<{
  expanded: boolean | null | undefined;
  selected: boolean | null | undefined;
  on_hold?: boolean;
}>(
  ({ expanded, on_hold = false, theme }) => css`
    height: 4rem;
    width: 100%;
    align-items: center;
    cursor: pointer;
    background: ${theme.colors.bg[200]};
    border: 3px solid
      ${on_hold ? theme.colors.warning[500] : theme.colors.base[100]};
    border-bottom: 3px solid
      ${expanded
        ? 'transparent'
        : on_hold
        ? theme.colors.warning[500]
        : theme.colors.base[100]};
    border-radius: 0.5rem;
    ${expanded &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
    &:hover {
      background-color: ${theme.colors.bg[200]};
    }
  `,
);

export const RowInner = styled(Flex)(
  ({ theme }) => css`
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${theme.space.large};
  `,
);

export const ExpandedContainer = styled(Flex)<{
  on_hold?: boolean;
}>(
  ({ on_hold = false, theme }) => css`
    flex-direction: column;
    width: 100%;
    margin-top: -3px;
    padding: ${theme.space.xLarge};
    gap: ${theme.space.large};
    border: 3px solid
      ${on_hold ? theme.colors.warning[500] : theme.colors.base[100]};
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-top: 0;
  `,
);
