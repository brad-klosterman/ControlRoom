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

export const ContentContainer = styled(Flex)(
  ({ theme }) => css`
    padding: ${theme.space.large};
    flex-direction: column;
    width: 50%;
    align-items: center;
    place-content: center;
    gap: 2rem;
  `,
);

export const StyledTable = styled.table(
  ({ theme }) => css`
    border-spacing: 0px;
    margin-bottom: 2rem;
    background-color: ${theme.colors.base[800]};
    > thead {
      font-weight: bold;
    }
    > tbody tr:nth-child(odd) {
      background-color: rgba(7, 6, 9, 1);
    }
    & td {
      padding: 1rem 1.5rem;
    }
  `,
);

const variants = {
  primary: 'emphasise',
  secondary: 'secondary',
};

type TextLinkProps = {
  variant?: keyof typeof variants;
};

export const TextLink = styled.a<TextLinkProps>(
  ({ theme, variant }) => css`
    color: ${theme.colors.text[variants[variant ?? 'secondary']]};
    cursor: pointer;

    &:hover {
      opacity: 0.75;
    }
  `,
);
