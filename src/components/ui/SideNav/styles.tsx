import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    width: 9rem;
    height: 100vh;
    background-color: ${theme.colors.sidebar};
    border-right: 4px solid ${theme.colors.base[400]};
    z-index: 1;
  `,
);

export const Menu = styled.div(
  ({ theme }) => css`
    position: absolute;
    top: 1.125rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: ${theme.space.xLarge};
  `,
);

export const NavLogoContainer = styled.div(
  () => css`
    position: absolute;
    top: 5rem;
    width: 6rem;
    height: 6rem;
  `,
);

export const Link = styled.button<{
  active?: boolean;
}>(
  ({ active = false, theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0;
    margin: 0;
    gap: ${theme.space.small};
    background-color: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.9);
    cursor: pointer;
    transition: 0.2s;
    font-size: 0.85rem;
    ${active
      ? css`
          color: ${theme.colors.primary[500]};
          border-color: transparent;
          background-color: transparent;
        `
      : css`
          &:hover {
            color: ${theme.colors.primary[500]};
            border-color: transparent;
            background-color: transparent;
          }
        `}
    &:disabled {
      color: ${theme.colors.text.secondary};
      background-color: transparent;
      cursor: not-allowed;
      &:hover {
        border-color: transparent;
        background-color: transparent;
      }
    }
    p {
      visibility: hidden;
    }
    &:hover p {
      visibility: visible;
    }
  `,
);

export const Divider = styled.div(
  ({ theme }) => css`
    background-color: ${theme.colors.grey[100]};
    width: 50%;
    height: 1px;
  `,
);

export const IconStyle = {
  fontSize: '2rem',
};

export const Bottom = styled.div(
  ({ theme }) => css`
    position: absolute;
    bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.space.large};
    text-align: center;
    width: 100%;
    cursor: pointer;
    p {
      &:hover {
        color: ${theme.colors.primary[500]};
      }
    }
  `,
);
