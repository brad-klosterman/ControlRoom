import { useQuery } from '@apollo/client';
import { memo, ReactNode, useContext } from 'react';

import { getFragment } from 'codegen';
import {
  CORE_TECHNICIAN_FRAGMENT_DOC,
  FETCH_TECHNICIANS_DOCUMENT,
} from 'codegen/graphql';

import { Context } from './types';

const TechniciansProvider = (props: { children: ReactNode }) => {
  const { data, loading, refetch } = useQuery(FETCH_TECHNICIANS_DOCUMENT);
  const technicians =
    getFragment(CORE_TECHNICIAN_FRAGMENT_DOC, data?.fetch_technicians) || [];

  const refetchTechnicians = async () => {
    await refetch();
  };

  return (
    <Context.Provider
      value={{
        loading,
        technicians,
        refetch: refetchTechnicians,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export const useTechniciansContext = () => {
  return useContext(Context);
};

export default memo(TechniciansProvider);
