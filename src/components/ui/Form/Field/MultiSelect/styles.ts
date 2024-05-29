import styled, { css } from 'styled-components';

export const Field = styled.div(
  ({ theme }) => css`
    position: relative;
    width: 100%;
    height: 100%;

    select {
      padding-right: ${theme.space.xLarge};
      text-overflow: ellipsis;
    }
  `,
);

interface ControlProps {
  error?: boolean;
  placeholderSelected?: boolean;
}

export const Control = styled.select<ControlProps>(
  ({ error, placeholderSelected, theme }) => {
    return placeholderSelected
      ? css`
          color: ${error
            ? theme.colors.outline.errorPrimary
            : theme.colors.background[700]};

          &:disabled {
            color: ${error
              ? theme.colors.error[400]
              : theme.colors.primary[500]};
          }
        `
      : css`
          color: #fff !important;
        `;
  },
);

export const Wrapper = styled.div<{ disabled?: boolean }>(
  ({ disabled }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    outline: none;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};

    * {
      outline: none;
    }
  `,
);
