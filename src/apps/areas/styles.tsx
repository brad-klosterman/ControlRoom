import { Flex } from 'components/ui';
import { LoginSplash } from 'images';
import styled, { css } from 'styled-components';

export const Container = styled(Flex)(
  () => css`
    position: fixed;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    background-image: url(${LoginSplash});
    background-size: auto 100%;
    // opacity: 0.9;
    z-index: 50;
  `,
);

export const Overlay = styled.div(
  () => css`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: #0a0a0a;
    opacity: 0.2;
    z-index: 1;
  `,
);

export const Elements = styled(Flex)(
  ({ theme }) => css`
    flex-direction: column;
    z-index: 2;
    width: 90rem;
    max-height: 82vh;
    padding: ${theme.space.xxxLarge};
    margin: ${theme.space.xxxLarge};
    gap: ${theme.space.xxxLarge};
    border-radius: 3px;
    background-color: ${theme.colors.bg[500]};
  `,
);

export const TableHeader = styled(Flex)(
  ({ theme }) => css`
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    padding: 0 ${theme.space.large};
  `,
);

export const Table = styled(Flex)(
  ({ theme }) => css`
    width: 100%;
    gap: ${theme.space.regular};
    flex-direction: column;
    overflow-y: auto;
    scrollbar-gutter: stable;
  `,
);

export const TableRow = styled(Flex)(
  ({ theme }) => css`
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    background-color: ${theme.colors.base[500]};
    padding: ${theme.space.regular} ${theme.space.large};
    border-radius: 3px;
  `,
);

export const TableItem = styled(Flex)(
  () => css`
    width: 30%;
    align-items: center;
    justify-content: flex-start;
  `,
);

export const Continue = styled(Flex)(
  () => css`
    width: 100%;
    justify-content: flex-end;
  `,
);
