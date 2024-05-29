import styled, { css } from 'styled-components';

export const HeaderColumns = styled.header<{
  expandable: boolean | undefined;
}>(
  ({ expandable = false, theme }) => css`
    display: flex;
    position: relative;
    width: 100%;
    padding-right: ${expandable ? '4rem' : '0'};
    background-color: ${theme.colors.base[400]};
    //background: rgba(29, 29, 42, 0.75);
    //background: ${theme.colors.table.even};
    border: 2px solid ${theme.colors.base[400]};
    border-bottom: 0.25rem solid ${theme.colors.bg[600]};
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    min-height: 5rem;
    //padding-top: 1rem;
    //padding-bottom: 1rem;
  `
);

export const Footer = styled.div(
  ({ theme }) => css`
    display: flex;
    position: relative;
    width: 100%;
    background-color: ${theme.colors.base[400]};
    border: 2px solid ${theme.colors.base[400]};
    border-bottom: 0.25rem solid ${theme.colors.bg[600]};
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    min-height: 3rem;
  `
);

export const Wrapper = styled.header<{
  expandable: boolean;
  variant: 'default' | 'analytics';
}>(
  ({ expandable, theme, variant }) => css`
    position: sticky;
    top: 0;
    z-index: 2;
    display: flex;
    flex-grow: 1;
    width: 100%;
    height: 5rem;
    max-height: 5rem;
    background-color: ${theme.colors.base[400]};
    cursor: pointer;
    padding-right: ${expandable ? '4rem' : '0'};
    border-top: 2px solid ${theme.colors.base[400]};
    border-bottom: 0.25rem solid ${theme.colors.bg[600]};
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;

    ${variant === 'analytics' &&
    css`
      height: 4rem;
      border: 0;
      background-color: transparent;
    `}
  `
);

export const MenuButton = styled.div(
  ({ theme }) => css`
    position: absolute;
    top: 1.55rem;
    right: 2rem;
    z-index: 10;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
      color: ${theme.colors.primary[500]};
    }
  `
);
