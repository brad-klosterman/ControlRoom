import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  ({ theme }) => css`
    width: 380px;
    color: ${theme.colors.text.inverted};
    background: ${theme.colors.text.primary};
    border-radius: 3px;
    cursor: pointer;
  `,
);

export const Body = styled.div`
  padding: ${({ theme }) => theme.space.small};
`;

export const Footer = styled(Body).attrs({ as: 'footer' })`
  border-top: 1px solid ${({ theme }) => theme.colors.background[900]};
`;

export const Header = styled(Body).attrs({ as: 'header' })`
  border-bottom: 1px solid ${({ theme }) => theme.colors.background[900]};
`;

export const Content = styled.div`
  &:nth-child(n + 2) {
    margin-top: ${({ theme }) => theme.space.small};
  }
`;
