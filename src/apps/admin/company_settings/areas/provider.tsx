import { useQuery } from '@apollo/client';
import {
  type ReactNode,
  createContext,
  memo,
  useContext as useReactContext,
  useMemo,
} from 'react';

import { getFragment } from 'codegen';
import { CORE_AREA_FRAGMENT_DOC, FETCH_AREAS_DOCUMENT } from 'codegen/graphql';
import { IOptionNumber } from 'components/ui/Form/Options';

import { type AreasContext } from './types';

const Context = createContext<AreasContext>({
  loading: true,
  areas: [],
  areas_select: [],
  refetch: () => null,
});

const Provider = memo((props: { children: ReactNode }) => {
  const FetchAreasAPI = useQuery(FETCH_AREAS_DOCUMENT, {
    variables: {
      pagination: {
        page: 1,
        per_page: 200,
      },
    },
  });

  const areas =
    getFragment(CORE_AREA_FRAGMENT_DOC, FetchAreasAPI.data?.areas.areas) || [];

  const areas_select: IOptionNumber[] = useMemo(
    () =>
      areas.map(({ id, name }) => ({
        label: name || '',
        value: id,
      })),
    [areas],
  );

  return (
    <Context.Provider
      value={{
        loading: FetchAreasAPI.loading,
        areas,
        areas_select,
        refetch: FetchAreasAPI.refetch,
      }}
    >
      {props.children}
    </Context.Provider>
  );
});

const useContext = () => useReactContext(Context);

export default { Provider, useContext };

/*

  useQuery(FETCH_AREAS_DOCUMENT, {
    onCompleted: data => {
      const fetched_areas = data?.areas?.success;
      if (fetched_areas)
        updateState({
          payload: {
            areas: data?.areas?.areas as AREA[],
          },
          type: 'STORE_AREAS',
        });
    },
    variables: {
      pagination: {
        page: 1,
        per_page: 200,
      },
    },
  });
 */
