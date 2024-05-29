import { motion } from 'framer-motion';

import styled, { css } from 'styled-components';

import { Wrapper as IconButton } from '../IconButton/styles';

export const Wrapper = styled.div`
  display: initial;
`;

export const Inner = styled(motion.div).attrs(({ theme }) => ({
  /* stylelint-disable */
  animate: 'center',
  exit: 'exit',
  initial: 'enter',
  layout: true,
  transition: { duration: theme.animation.duration, type: 'tween' },
  variants: {
    center: {
      x: 0,
    },
    enter: {
      x: 500,
    },
    exit: {
      x: 500,
    },
  },
  /* stylelint-enable */
}))(
  ({ theme }) => css`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 4;
    width: 100%;
    max-width: 600px;
    height: 100%;
    padding: 0 ${theme.space.xLarge};
    margin-left: auto;
    background: ${theme.colors.base[800]};
    border-left: 1px solid ${theme.colors.outline.default};

    > ${IconButton} {
      position: absolute;
      top: ${theme.space.large};
      right: ${theme.space.large};
      z-index: 3;
      display: block;
    }
  `,
);

export const Header = styled.header(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 0 calc(${theme.space.xxLarge} + ${theme.space.xLarge}) 0 0;
    margin: ${theme.space.xxLarge} 0;
    gap: ${theme.space.small};
  `,
);

export const Body = styled.div(
  ({ theme }) => css`
    margin: ${theme.space.xLarge} 0 ${theme.space.xLarge};
    width: 100%;
  `,
);
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.8;
`;

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
