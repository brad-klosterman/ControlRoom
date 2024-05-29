import { motion } from 'framer-motion';

import styled, { css } from 'styled-components';
import type { DefaultTheme } from 'styled-components';

import type { ToastProps } from '.';

interface WrapperProps {
  theme: DefaultTheme;
  timeout?: number;
  timeoutstarted?: string;
  variant: Exclude<ToastProps['variant'], undefined>;
}

const wrapperMotion = {
  animate: 'center',
  exit: 'exit',
  initial: 'enter',
  layout: true,
  variants: {
    center: {
      opacity: 1,
      x: 0,
      zIndex: 1,
    },
    enter: {
      opacity: 0,
      x: 400,
    },
    exit: {
      opacity: 0,
      x: 400,
      zIndex: 0,
    },
  },
};

export const Wrapper = styled(motion.div).attrs(wrapperMotion)(
  ({ theme, timeout, timeoutstarted, variant }: WrapperProps) => css`
    position: relative;
    padding: ${theme.space.large};
    padding-right: ${theme.space.xxxLarge};
    overflow: hidden;
    background-color: ${theme.colors.base[700]};
    border: 2px solid
      ${{
        critical: theme.colors.error[500],
        error: theme.colors.error[500],
        info: theme.colors.base[100],
        success: theme.colors.base[100],
      }[variant]};
    border-radius: 0.5rem;
    &:nth-child(n + 2) {
      margin-top: ${theme.space.regular};
    }

    &:before,
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 5px;
      height: 100%;
      transform: scaleY(100%);
      content: '';
    }

    &:before {
      background: ${theme.colors.base[100]};
    }

    &:after {
      background-color: ${{
        critical: theme.colors.error[500],
        error: theme.colors.error[500],
        info: theme.colors.primary[500],
        success: theme.colors.success[500],
      }[variant]};
      transform: ${timeoutstarted === 'true' && 'scaleY(0)'};
      transform-origin: 50% 100%;
      transition: ${timeout && `transform ${timeout}ms linear`};
    }
  `,
);

export const Actions = styled.div(
  ({ theme }) => css`
    margin-top: ${theme.space.small};

    button:nth-child(n + 2) {
      margin-left: ${theme.space.xSmall};
    }
  `,
);

export const CloseButton = styled.span(
  ({ theme }) => css`
    position: absolute;
    top: 50%;
    right: ${theme.space.xSmall};
    transform: translateY(-50%);
  `,
);
