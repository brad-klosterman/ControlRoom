import { ReactNode, createContext, useContext, useEffect } from 'react';

import { useAuthContext } from 'src/app.state/auth/provider';
import { useLocalStorage, useTimeout } from 'src/hooks';

import { useOfflineApi, CloudBoxIps } from './useOfflineApi.hooks';
export { CloudBoxIps } from './useOfflineApi.hooks';

const POLL_IPS_INTERVAL_IN_MS = 5_000;

interface OfflineState {
  cloudBoxIps: CloudBoxIps[];
}

const OfflineContext = createContext<{
  state: OfflineState;
}>({
  state: {
    cloudBoxIps: [],
  },
});

const defaultCloudBoxIps: CloudBoxIps[] = [];

const OfflineProvider = ({ children }: { children: ReactNode }) => {
  const authContext = useAuthContext();
  const user = authContext.state.user;

  const offlineApi = useOfflineApi();

  const [cloudBoxIps, setCloudBoxIps] = useLocalStorage(
    'cloudBoxIps',
    defaultCloudBoxIps,
  );

  const fetchData = async () => {
    if (user) {
      let ips: CloudBoxIps[] = [];

      try {
        ips = await offlineApi.fetchCloudBoxIps();
      } catch (error: any) {
        if (error.networkError) {
          // console.warn(`Experienced network error - maybe offline?`);
        }
      }

      if (ips.length > 0) {
        setCloudBoxIps(ips);
      }
    }
  };

  // NOTE: Fetch and update when user logs in
  useEffect(() => {
    fetchData();
  }, [user]);

  // NOTE: Fetch regularly when user is logged in
  const { reset: rescheduletTimeout } = useTimeout(async () => {
    await fetchData();
    rescheduletTimeout();
  }, POLL_IPS_INTERVAL_IN_MS);

  const state: OfflineState = {
    cloudBoxIps,
  };

  return (
    <OfflineContext.Provider
      value={{
        state,
      }}
    >
      {children}
    </OfflineContext.Provider>
  );
};

const useOfflineContext = () => {
  return useContext(OfflineContext);
};

export { OfflineProvider, useOfflineContext };
