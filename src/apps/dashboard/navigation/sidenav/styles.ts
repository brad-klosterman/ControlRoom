import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled(motion.div).attrs(({ theme }) => ({
  animate: 'center',
  exit: 'exit',
  initial: 'enter',
  layout: true,
  transition: { duration: theme.animation.duration, type: 'tween' },
  variants: {
    center: { x: 0 },
    enter: { x: -200 },
    exit: { x: 500 },
  },
}))(
  ({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 24rem;
    height: 100vh;
    background: ${theme.colors.base[800]};
  `,
);

export const Links = styled.div<{ top_align?: boolean }>(
  ({ theme, top_align }) => css`
    ${top_align
      ? css`
          position: relative;
        `
      : css`
          position: absolute;
          top: 10rem;
          bottom: 10rem;
          justify-content: center;
        `}
    display: flex;
    flex-direction: column;
    padding-left: ${theme.space.xLarge};
    gap: ${theme.space.xSmall};
    width: 100%;
    overflow-y: auto;
  `,
);

export const Link = styled.div<{ active: boolean }>(
  ({ active, theme }) => css`
    display: flex;
    align-items: center;
    height: 5rem;
    width: 100%;
    padding-left: ${theme.space.large};
    padding-right: ${theme.space.large};
    gap: ${theme.space.regular};
    background: ${active ? theme.colors.bg[600] : 'transparent'};
    &:hover {
      background: ${theme.colors.bg[500]};
    }
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    cursor: pointer;
  `,
);

export const Body = styled.div(
  ({ theme }) => css`
    margin: ${theme.space.xLarge} 0 ${theme.space.xLarge};
    width: 100%;
  `,
);

export const Footer = styled.footer(
  ({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    padding-right: ${theme.space.xLarge};
    margin: ${theme.space.xLarge} 0 ${theme.space.xLarge};
    & > * {
      margin-left: ${theme.space.xSmall};
      &:first-child {
        margin-left: 0;
      }
    }
  `,
);
