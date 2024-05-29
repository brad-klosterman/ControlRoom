import { AnimationProps, motion } from 'framer-motion';
import React from 'react';

import { cssModule } from 'auxiliary';
import { Icon, Text } from 'components';
import styled, { css } from 'styled-components';

export const Container = styled.header(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    position: relative;
    flex-grow: 1;
    width: 100%;
    background: rgba(29, 29, 42, 0.3);
    border: 2px solid ${theme.colors.base[400]};
    border-radius: 0.5rem;
    padding: 0 2rem;
    margin-bottom: 2rem;
  `,
);

export const ExpandedSearch = styled(motion.div).attrs(() => ({
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: {
        duration: 0.4,
      },
      opacity: {
        duration: 0.25,
        delay: 0.25,
      },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 0.4,
      },
      opacity: {
        duration: 0.15,
      },
    },
  },
}))(
  () => css`
    display: flex;
    width: 100%;
    gap: 2rem;
  `,
);

export const LinkPress = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.space.xSmall};
    cursor: pointer;
    &:hover {
      opacity: 0.75;
    }
  `,
);

export function AdvancedLink({
  expanded,
  onClick,
  visible = true,
}: {
  onClick(): void;
  visible?: boolean;
  expanded: boolean;
}) {
  if (!visible) return null;
  return (
    <LinkPress onClick={onClick}>
      <Icon.MagnifyingGlass
        colorKey="emphasise"
        style={{ marginTop: '-2px' }}
      />
      <Text colorKey="emphasise" isBold size="labelLarge">
        ADVANCED SEARCH
      </Text>
      <Icon.ArrowDown
        colorKey="emphasise"
        style={{ marginTop: '-2px' }}
        {...{
          className: cssModule(
            'seon-ui-expander-arrow',
            expanded ? 'up' : 'down',
          ),
        }}
      />
    </LinkPress>
  );
}

const animation: AnimationProps = {
  transition: { duration: 0.2, delay: 0.1, ease: 'easeInOut' },
  initial: { opacity: 0, scale: 0.9, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

// Default backdrop animation
const backdrop_animation: AnimationProps = {
  transition: { duration: 0.2, ease: 'easeInOut' },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const SearchModalAnimated = styled(motion.div).attrs(({ theme }) => ({
  ...animation,
}))(
  ({ theme }) => css`
    display: flex;
    position: fixed;
    flex-direction: column;
    height: fit-content;
    //width: calc(100% - 10rem);
    //margin: auto;
    top: 5rem;
    left: 14rem;
    right: 5rem;
    //inset: 15px;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: ${theme.space.xxLarge};
    background-color: rgba(11, 11, 15, 1);
    border: 2px solid ${theme.colors.base[400]};
    border-radius: 0.5rem;
    z-index: 30;
  `,
);

export const BackdropAnimated = styled(motion.div).attrs(() => ({
  ...backdrop_animation,
  key: 'backdrop',
}))(
  () => css`
    z-index: 20;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(7, 6, 9, 0.75);
    cursor: pointer;
    //opacity: 0.15;
  `,
);
