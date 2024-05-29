import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    position: relative;
    width: 100%;
    height: 18rem;
    background: ${theme.colors.bg[100]};
    border-radius: 0.5rem;
    overflow: hidden;
  `,
);

export const Inner = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: ${theme.space.regular};
  `,
);

export const Row = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.space.xxSmall};
    width: 100%;
    b {
      color: ${theme.colors.text.primary};
      font-weight: 500;
    }
  `,
);

export const Scrollable = styled.div(
  () => css`
    position: absolute;
    left: 2rem;
    right: 0;
    top: 2rem;
    bottom: 2rem;
    overflow-y: auto;
    scrollbar-gutter: stable;
  `,
);

export const Anchor = styled.div(
  () => css`
    overflow-anchor: auto;
    height: 1px;
  `,
);

export const IncidentReport = styled.div(
  () => css`
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 0;
  `,
);

export const IncidentItem = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    flex: 0 0 33.333333%;
    width: 100%;
    padding: ${theme.space.xSmall} ${theme.space.xSmall} 0 ${theme.space.xSmall};
  `,
);
