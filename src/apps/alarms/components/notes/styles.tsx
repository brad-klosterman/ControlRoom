import styled, { css } from 'styled-components';

export const collapsed_height = 48;

export const NotesContainer = styled.div(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    padding: 0;
    .exp-content {
      overflow: hidden;
    }
    .exp-content-collapsed {
      height: ${collapsed_height}px;
    }
    .expander-arrow {
      flex-shrink: 0;
      transition: transform 0.15s linear;
    }
    .expander-arrow-up {
      transform: rotate(-180deg);
    }
  `,
);

export const NoteSelector = styled.div(
  () => css`
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 0;
  `,
);

export const NoteOption = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    flex: 0 0 33.333333%;
    width: 100%;
    padding: ${theme.space.xSmall};
    padding-bottom: 0;
  `,
);

export const NoteButton = styled.button(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid ${theme.colors.base[100]};
    background: ${theme.colors.bg[800]};
    border-radius: 0.5rem;
    cursor: pointer;
    padding: ${theme.space.xSmall};
    &:hover {
      border-color: ${theme.colors.primary[500]};
    }
    // &.active {
    //   border-color: ${theme.colors.primary[500]};
    // }
  `,
);

export const ArrowWrap = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 46px;
    margin-top: -1px;
    border: 1px solid ${theme.colors.base[200]};
    border-radius: 0.5rem;
    &:hover {
      background-color ${theme.colors.base[100]};
    }
    cursor: pointer;
  `,
);

export const SaveWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    padding: 0 2rem;
    color: ${theme.colors.text.secondary};
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    border: 1px solid ${theme.colors.base[200]};
    border-radius: 3px;
    background-color: ${theme.colors.base[200]};
    &:hover {
      background-color ${theme.colors.base[100]};
    }
    cursor: pointer;
  `,
);
