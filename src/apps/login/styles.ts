import { Link } from 'react-router-dom';

import { Flex } from 'components/ui';
import { LoginSplash } from 'images';
import styled, { css } from 'styled-components';

export const Container = styled(Flex)(
  () => css`
    height: 100vh;
    width: 100vw;
  `,
);

export const LogoContainer = styled(Flex)(
  ({ theme }) => css`
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 8rem;
    background-image: url(${LoginSplash});
    background-size: auto 100%;
    background-color: ${theme.colors.base[800]};
  `,
);

export const FormContainer = styled(Flex)(
  ({ theme }) => css`
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.bg[500]};
  `,
);

export const TextLink = styled(Link)(
  ({ theme }) => css`
    color: ${theme.colors.text.emphasise};
    cursor: pointer;

    &:hover {
      opacity: 0.75;
    }
  `,
);
