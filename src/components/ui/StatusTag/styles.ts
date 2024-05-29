import styled, { css, DefaultTheme } from 'styled-components';

export type StatusTagColorVariants = Extract<
  keyof DefaultTheme['colors'],
  'success' | 'warning' | 'error' | 'info'
>;

export interface StatusTagOptions {
  variant?: StatusTagColorVariants;
}

export const StatusTagBox = styled.div<StatusTagOptions>(
  ({ theme, variant }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    gap: ${theme.space.xSmall};
    padding: 0 ${theme.space.small};
    ${!variant &&
    css`
      border: 1px solid ${theme.colors.info[400]};
    `}
    border-radius: 4px;
    background-color: ${(() => {
      if (!variant) {
        return theme.colors.base[400];
      }

      if (variant === 'success') {
        return 'rgba(40,167,69,0.17)';
      }

      if (variant === 'error') {
        return 'rgba(166,23,36,0.17)';
      }

      if (variant === 'warning') {
        return 'rgba(229,185,98,0.17)';
      }

      return theme.colors[variant][400];
    })()};
  `,
);
