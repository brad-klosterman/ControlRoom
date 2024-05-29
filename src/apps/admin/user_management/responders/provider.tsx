import { useQuery } from '@apollo/client';
import { memo, ReactNode, useContext } from 'react';

import { getFragment } from 'codegen';
import {
  CORE_RESPONDER_FRAGMENT_DOC,
  FETCH_RESPONDERS_DOCUMENT,
} from 'codegen/graphql';

import { Context } from './types';

const RespondersProvider = (props: { children: ReactNode }) => {
  const { data, loading, refetch } = useQuery(FETCH_RESPONDERS_DOCUMENT);
  const responders =
    getFragment(CORE_RESPONDER_FRAGMENT_DOC, data?.responders) || [];

  const refetchResponders = async () => {
    await refetch();
  };

  return (
    <Context.Provider
      value={{
        loading,
        responders,
        refetch: refetchResponders,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export const useRespondersContext = () => {
  return useContext(Context);
};

export default memo(RespondersProvider);
