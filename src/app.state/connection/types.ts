type ConnectionStatus = 'starting' | 'connected' | 'reconnecting';

type ConnectionState = {
  connection: ConnectionStatus;
};

export type { ConnectionStatus, ConnectionState };
