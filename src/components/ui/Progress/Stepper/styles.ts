import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: ${theme.space.xxLarge};
  `,
);

export const StepElementContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${theme.space.large};
  `,
);

export const Dot = styled.div<{
  complete: boolean;
  error: boolean;
}>(
  ({ complete, error, theme }) => css`
    background: ${complete
      ? theme.colors.primary[500]
      : theme.colors.outline.default};
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    ${error &&
    complete &&
    css`
      background: ${theme.colors.error[500]};
    `}
  `,
);

export const Track = styled.div<{
  complete: boolean;
  error: boolean;
  visible: boolean;
}>(
  ({ complete, error, theme, visible }) => css`
    background: ${complete
      ? theme.colors.primary[500]
      : theme.colors.outline.default};
    flex-grow: 1;
    height: ${visible ? '0.5rem' : '0'};
    ${error &&
    complete &&
    css`
      background: ${theme.colors.error[500]};
    `}
  `,
);

export const StepInfo = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space.regular};
    justify-content: center;
    align-items: center;
  `,
);
