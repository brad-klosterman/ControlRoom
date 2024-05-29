import styled, { css } from 'styled-components';
import { Text } from 'components';

import { useConnectionContext } from './provider';
import { type ConnectionStatus } from './types';

const Status = () => {
  const { state } = useConnectionContext();

  return (
    <Container>
      <StatusLight status={state.connection} />
      <Text>{state.connection.toUpperCase()}</Text>
    </Container>
  );
};

const Container = styled.div(
  () => css`
    position: fixed;
    top: 0;
    right: 5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 5rem;
  `,
);

const StatusLight = styled.div<{ status: ConnectionStatus }>(
  ({ status, theme }) => css`
    flex: 0 0 ${theme.space.regular};
    width: ${theme.space.regular};
    height: ${theme.space.regular};
    margin-right: ${theme.space.small};
    background-color: ${{
      connected: theme.colors.primary[700],
      reconnecting: theme.colors.error[500],
      starting: theme.colors.error[500],
      unauthenticated: theme.colors.grey[100],
      undefined: theme.colors.error[500],
    }[status]};
    border-radius: 50%;
  `,
);

export default Status;
