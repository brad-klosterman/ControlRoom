import { PulseMarkerVariant } from 'apps/tracking/components/markers/PulsingMarker';
import { RESPONDER_STATUS } from 'codegen/graphql';
import { Flex, Text } from 'components/ui';
import styled, { css } from 'styled-components';

export const Container = styled(Flex)(
  ({ theme }) => css`
    position: absolute;
    top: 5rem;
    right: 5rem;
    width: 22rem;
    flex-direction: column;
    background-color: rgba(4, 3, 5, 0.85);
    padding: ${theme.space.xLarge};
    gap: ${theme.space.large};
    border-radius: 3px;
  `
);

export const Section = styled(Flex)(
  ({ theme }) => css`
    flex-direction: column;
    position: relative;
    width: 100%;
    background-color: ${theme.colors.base[300]};
    border-radius: 3px;
    overflow: hidden;
    box-sizing: border-box;
  `
);

export const Scrollable = styled.div(
  () => css`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y: auto;
    scrollbar-gutter: stable;
  `
);

export const IndicatorKey = styled.div<{ variant: PulseMarkerVariant }>(
  ({ theme, variant }) => css`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${{
      emergency: theme.colors.error[500],
      enroute: theme.colors.warning[500],
      responder: theme.colors.info[500]
    }[variant]};
  `
);

export const SectionTitle = (props: {
  variant: PulseMarkerVariant;
  children: string;
}) => (
  <Flex alignItems="center" gap="small">
    <IndicatorKey variant={props.variant} />
    <Text size="displaySmall">{props.children}</Text>
  </Flex>
);

export const Row = styled(Flex)<{ selected: boolean }>(
  ({ selected, theme }) => css`
    align-items: center;
    width: 100%;
    height: 3rem;
    background-color: ${theme.colors.base[800]};
    border: 2px solid ${selected ? 'white' : theme.colors.base[400]};
    border-radius: 3px;
    box-sizing: border-box;
    padding: ${theme.space.small};
    cursor: pointer;
    &:hover {
      background-color: ${theme.colors.base[600]};
    }
  `
);

export const SectionDivider = styled.div(
  ({ theme }) => css`
    height: 1px;
    width: 100%;
    background-color: ${theme.colors.base[300]};
  `
);

export const ResponderStatus = styled.div<{ status: RESPONDER_STATUS }>(
  ({ status, theme }) => css`
    flex: 0 0 ${theme.space.regular};
    width: 1rem;
    height: 1rem;
    margin-right: ${theme.space.small};
    background-color: ${{
      AVAILABLE: theme.colors.primary[700],
      INACTIVE: theme.colors.grey[100],
      OCCUPIED: theme.colors.grey[200],
      OPERATING: theme.colors.warning[500]
    }[status]};
    border-radius: 50%;
  `
);

export const CheckBoxRow = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.space.small};
  `
);
