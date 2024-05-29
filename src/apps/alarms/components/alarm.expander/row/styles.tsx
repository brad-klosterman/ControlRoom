import { Flex } from 'components';
import styled, { DefaultTheme, css } from 'styled-components';

export type StatusBarVariant = Extract<keyof DefaultTheme['colors'], 'error'>;

const getLeftStatusBarColor = (
  theme: DefaultTheme,
  variant?: StatusBarVariant,
): string => {
  if (!variant) {
    return `${theme.colors.base[400]}`;
  }

  return `${theme.colors[variant][500]}`;
};

// TODO unassigned alarms use a flash animation
export const Container = styled(Flex)<{
  expanded: boolean;
  unassigned: boolean;
  left_status_bar_variant?: StatusBarVariant;
}>(
  ({ expanded, left_status_bar_variant, theme }) => css`
    position: relative;
    height: 6rem;
    width: 100%;
    align-items: center;
    padding: 0 ${theme.space.xLarge};
    background: ${theme.colors.base[400]};
    border: 4px solid ${theme.colors.base[400]};
    border-bottom: 4px solid
      ${expanded ? 'transparent' : theme.colors.base[400]};
    border-left: 4px solid
      ${getLeftStatusBarColor(theme, left_status_bar_variant)};
    border-radius: 0.5rem;
    ${expanded &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
    &:hover {
      background-color: ${theme.colors.base[200]};
    }
    cursor: pointer;
  `,
);

export const Overlay = styled.div<{ visible: boolean }>(
  ({ theme, visible }) => css`
    position: absolute;
    left: -3px;
    right: -3px;
    top: -3px;
    bottom: -3px;
    border-radius: 0.5rem;
    opacity: ${visible ? 0.6 : 0};
    background-color: ${theme.colors.bg[800]};
    &:hover {
      opacity: 0;
    }
  `,
);

export const LeftContent = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    height: 100%;
    gap: ${theme.space.regular};
  `,
);

export const AlarmTimes = styled(Flex)(
  () => css`
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 16rem;
  `,
);

export const AlarmType = styled.div(
  () => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    text-align: left;
  `,
);
