import styled, { css } from 'styled-components';

export type Variant = 'deemphasised' | 'error' | 'info' | 'success' | 'warning';

interface WrapperProps {
  variant: Variant;
}

export const Wrapper = styled.span<WrapperProps>(
  ({ theme, variant }) => css`
    display: inline-block;
    max-width: 100%;
    padding: 0 ${theme.space.xSmall};
    color: ${{
      deemphasised: theme.colors.background[800],
      error: theme.colors.error[900],
      info: theme.colors.primary[500],
      success: theme.colors.success[900],
      warning: theme.colors.warning[900],
    }[variant]};
    font-weight: ${theme.typography.fontWeight.medium};
    font-size: ${theme.typography.fontSize.labelRegular};
    line-height: ${theme.typography.fontSize.displayRegular};
    background-color: ${{
      deemphasised: theme.colors.background[300],
      error: theme.colors.error[200],
      info: theme.colors.primary[100],
      success: theme.colors.success[200],
      warning: theme.colors.warning[200],
    }[variant]};
    border-radius: ${theme.typography.fontSize.displayRegular};
  `,
);
