import { createContext, memo, useContext, useEffect, useState } from 'react';
import { useSubscription } from '@apollo/client';
import { HEARTBEAT_SUBSCRIPTION } from 'src/apollo/subscriptions/heartbeat';
import { useAuthContext } from 'src/app.state/auth/provider';
import { useViewAlarmsPermission } from 'src/app.state/permissions/hooks/view-alarms.permission';

import LostConnectionModal from './lost_connection';
import useFocusedPage from './useFocusedPage';
import type { ConnectionStatus, ConnectionState } from './types';

const APP_ENVIRONMENT = process.env.APP_ENVIRONMENT;
const LOST_CONNECTION_TIME_LIMIT = 15;
const LOST_FOCUS_TIME_LIMIT = 40;

const Context = createContext<{
  state: ConnectionState;
}>({
  state: {
    connection: 'starting',
  },
});

const ConnectionProvider = memo(({ children }: any) => {
  const {
    actions: { logout },
    state: { user },
  } = useAuthContext();

  const alarm_permission = useViewAlarmsPermission();

  const [connection_status, setConnectionStatus] =
    useState<ConnectionStatus>('starting');

  const [connection_timer, setConnectionTimer] = useState(
    LOST_CONNECTION_TIME_LIMIT,
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setConnectionTimer(seconds => seconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (connection_timer === 0) {
      setConnectionStatus('reconnecting');
    }
  }, [connection_timer]);

  useSubscription<{
    heartbeat: {
      success: boolean;
      authenticated: boolean;
    };
  }>(HEARTBEAT_SUBSCRIPTION, {
    onData: async ({ data: { data } }) => {
      const connected = data?.heartbeat?.success;
      const authenticated = data?.heartbeat?.authenticated;

      if (connected && !authenticated) {
        await logout('UN_AUTHENTICATED');
        return;
      }

      if (connected && authenticated) {
        setConnectionStatus('connected');
        setConnectionTimer(LOST_CONNECTION_TIME_LIMIT);
        return;
      }
    },
    onError: error => {
      console.error('HEARTBEAT_SUBSCRIPTION', error);
      setConnectionStatus('reconnecting');
    },
    shouldResubscribe: true,
    skip: !user,
  });

  useFocusedPage({
    logout: () => logout('LOST_PAGE_FOCUS'),
    time_limit: LOST_FOCUS_TIME_LIMIT,
    skip:
      alarm_permission === 'DENIED' ||
      APP_ENVIRONMENT === 'local' ||
      APP_ENVIRONMENT === 'development',
  });

  return (
    <Context.Provider
      value={{
        state: {
          connection: connection_status,
        },
      }}
    >
      <LostConnectionModal visible={connection_status === 'reconnecting'} />
      {children}
    </Context.Provider>
  );
});

const useConnectionContext = () => useContext(Context);

export { ConnectionProvider, useConnectionContext };
