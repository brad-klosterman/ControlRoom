import { useApolloClient } from '@apollo/client';
import { useCallback } from 'react';

import { FETCH_OFFLINE_IPS } from 'src/apollo';

export interface CloudBoxIps {
  id: number;
  ip1: string | null;
  ip2: string | null;
}
interface FetchCloudBoxIpResponse {
  result: {
    cloud_boxes: CloudBoxIps[];
  };
}

export const useOfflineApi = () => {
  const apollo = useApolloClient();

  const fetchCloudBoxIps = useCallback(async (): Promise<CloudBoxIps[]> => {
    const { data } = await apollo.query<FetchCloudBoxIpResponse>({
      query: FETCH_OFFLINE_IPS,
    });

    return data?.result?.cloud_boxes || [];
  }, []);

  return {
    fetchCloudBoxIps,
  };
};
