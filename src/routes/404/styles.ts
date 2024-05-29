import { Flex } from 'components/ui';
import { LoginSplash } from 'images';
import styled, { css } from 'styled-components';

export const Container = styled(Flex)(
  () => css`
    height: 100vh;
    width: 100vw;
  `,
);

export const BackgroundImage = styled(Flex)(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    font-size: 12rem;
    flex-direction: column;
    gap: ${theme.space.xLarge};
    align-items: center;
    justify-content: center;
    background-image: url(${LoginSplash});
    background-size: auto 100%;
    background-color: ${theme.colors.base[800]};
  `,
);
