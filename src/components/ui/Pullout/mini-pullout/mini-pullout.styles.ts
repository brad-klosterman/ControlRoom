import { motion } from 'framer-motion';

import styled, { css } from 'styled-components';

import { Wrapper as IconButton } from '../../IconButton/styles';

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
    position: absolute;
    top: 0;
    right: 0;
    z-index: 4;
    width: 50%;
    height: 100%;
    padding: 0 ${theme.space.regular};
    margin-left: auto;
    background: ${theme.colors.base[400]};
    border-left: 1px solid ${theme.colors.base[100]};

    > ${IconButton} {
      position: absolute;
      top: ${theme.space.large};
      right: ${theme.space.large};
      z-index: 3;
      display: block;
    }
  `,
);
