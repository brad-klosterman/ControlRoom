import { AGENT_STATUS, Maybe } from 'codegen/graphql';
import { Flex } from 'components/ui';
import styled, { css } from 'styled-components';

export const Container = styled(Flex)(
  ({ theme }) => css`
    flex-direction: column;
    width: 100%;
    max-height: 80%;
    overflow-y: auto;
    gap: ${theme.space.large};
  `,
);

export const Content = styled(Flex).attrs(() => ({
  direction: 'column',
}))`
  width: 100%;
  overflow-y: auto;
  scrollbar-gutter: stable;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.grey[300]};
`;

export const Row = styled(Flex)(
  ({ theme }) => css`
    align-items: center;
    width: 100%;
    height: 3rem;
    border: 1px solid ${theme.colors.background[300]};
    background-color: ${theme.colors.grey[300]};
    padding: ${theme.space.small};
  `,
);

export const StatusIndicator = styled.div<{
  status: Maybe<AGENT_STATUS> | undefined;
}>(
  ({ status, theme }) => css`
    flex: 0 0 ${theme.space.regular};
    width: ${theme.space.regular};
    height: ${theme.space.regular};
    margin-right: ${theme.space.small};
    background-color: ${status
      ? {
          INTERRUPTED: theme.colors.grey[100],
          OFFLINE: theme.colors.error[500],
          ONLINE: theme.colors.primary[700],
        }[status]
      : theme.colors.error[500]};

    border-radius: 50%;
  `,
);

export const AgentIconStyles = {
  bottom: '12.5rem',
  cursor: 'pointer',
  fontSize: '2rem',
  left: '2.6rem',
  position: 'fixed' as const,
  zIndex: 3,
};
