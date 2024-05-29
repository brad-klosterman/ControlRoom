import { motion } from 'framer-motion';

import styled, { css } from 'styled-components';

interface WrapperProps {
  direction: 'top' | 'bottom';
}

export const Wrapper = styled(motion.div).attrs<WrapperProps>(
  ({ direction, theme }) => ({
    /* stylelint-disable */
    animate: 'in',
    exit: 'out',
    initial: 'in',
    layout: true,
    transition: { duration: theme.animation.duration },
    variants: {
      in: {
        [`border${direction === 'top' ? 'Top' : 'Bottom'}Color`]:
          theme.colors.primary[500],
        [direction]: 'calc(100% - 1px)',
        opacity: 1,
        scale: 1,
      },
      out: {
        borderTopColor: theme.colors.outline.default,
        [direction]: 'calc(100% - 1px)',
        opacity: 0,
        scale: 0.95,
      },
    },
    /* stylelint-enable */
  }),
)<WrapperProps>(
  ({ theme }) => css`
    position: absolute;
    left: -1px;
    margin-top: 4px;
    z-index: 5;
    width: calc(100% + 2px);
    background: ${theme.colors.base[800]};
    border: 1px solid ${theme.colors.outline.default};
    border-radius: 0 0 3px 3px;
    transform: none !important;
    //overflow-x: hidden;
    display: flex;
    &:focus {
      outline: none;
    }
  `,
);

export const INNER_HEIGHT = 300;

export const Inner = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-height: ${INNER_HEIGHT}px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
