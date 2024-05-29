import { motion } from 'framer-motion';
import { ReactNode } from 'react';

import { RESPONDER_STATUS } from 'codegen/graphql';
import { Flex, Icon } from 'components';
import styled, { css } from 'styled-components';
import { LiveTrackedResponder } from 'src/apps/admin/user_management/responders/responder-tracking';

export type PulseMarkerVariant = 'emergency' | 'enroute' | 'responder';

export function centerOverlay(
  width: number,
  height: number,
): { x: number; y: number } {
  return {
    x: -(width / 2),
    y: -(height / 2),
  };
}

const Container = styled.div(
  () => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    width: 5rem;
    cursor: pointer;
  `,
);

export const MarkerInfo = styled(Flex)<{ visible: boolean }>(
  ({ theme, visible }) => css`
    display: ${visible ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    left: -12rem;
    bottom: 4rem;
    background-color: ${theme.colors.bg[700]};
    padding: ${theme.space.xLarge};
    gap: ${theme.space.large};
    border-radius: 6px;
    width: 30rem;
    opacity: 0.8;
    z-index: 1;
    cursor: pointer;
  `,
);

const Center = styled.div<{ variant: PulseMarkerVariant }>(
  ({ theme, variant }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background-color: ${variant === 'emergency'
      ? theme.colors.error[500]
      : variant === 'enroute'
      ? theme.colors.warning[500]
      : theme.colors.primary[500]};
  `,
);

export const PulseMotion = styled(motion.div).attrs<{
  variant: PulseMarkerVariant;
}>(() => ({
  animate: { opacity: [1, 0], scale: [0, 2] },
  transition: {
    duration: 2,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatDelay: 0.5,
    times: [0, 1],
  },
}))<{
  variant: PulseMarkerVariant;
}>(
  ({ theme, variant }) => css`
    position: absolute;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background-color: ${theme.colors.error[500]};
    background-color: ${{
      emergency: theme.colors.error[500],
      enroute: theme.colors.warning[500],
      responder: theme.colors.info[500],
    }[variant]};
  `,
);

export const ResponderCircle = styled.div<{
  status: RESPONDER_STATUS;
  heading: string;
}>(
  ({ heading, status, theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    transform: rotate(${heading});
    background-color: ${{
      AVAILABLE: 'rgba(40,167,69,0.15)',
      OCCUPIED: 'rgba(255,255,255,0.15)',
      OPERATING: 'rgba(229,185,98,0.15)',
      INACTIVE: theme.colors.grey[100],
    }[status]};
    color: ${{
      AVAILABLE: theme.colors.primary[700],
      OCCUPIED: theme.colors.grey[200],
      OPERATING: theme.colors.warning[700],
      INACTIVE: theme.colors.grey[100],
    }[status]};
  `,
);

export const ResponderMarker = (props: {
  responder: LiveTrackedResponder;
  onClick?: () => void;
  selected?: boolean;
  children: ReactNode;
}) => {
  return (
    <>
      <Container onClick={props.onClick}>
        <ResponderCircle
          heading={props.responder.heading || '90deg'}
          status={props.responder.status || 'INACTIVE'}
        >
          <Icon.MapNav style={{ fontSize: '1.5rem', color: 'inherit' }} />
        </ResponderCircle>
      </Container>
      <MarkerInfo onClick={props.onClick} visible={props?.selected || false}>
        {props.children}
      </MarkerInfo>
    </>
  );
};

const PulsingMarker = (props: {
  onClick?: () => void;
  variant: PulseMarkerVariant;
  selected?: boolean;
  children?: ReactNode;
}) => {
  return (
    <>
      <Container onClick={props.onClick}>
        <Center variant={props.variant} />
        <PulseMotion variant={props.variant} />
      </Container>
      <MarkerInfo onClick={props.onClick} visible={props?.selected || false}>
        {props.children}
      </MarkerInfo>
    </>
  );
};

export default PulsingMarker;
