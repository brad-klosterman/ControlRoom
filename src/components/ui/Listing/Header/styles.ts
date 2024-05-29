import styled, { css } from 'styled-components';

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

export const Sort = styled.div(
  () => css`
    position: relative;
    width: 2rem;
    height: 100%;
    padding: 0.5rem;
    font-size: 0.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.15rem;
  `
);

export const FixedMenu = styled.div(
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
