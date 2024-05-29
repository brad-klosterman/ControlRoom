import { useQuery } from '@apollo/client';
import {
  type ReactNode,
  createContext,
  memo,
  useContext as useReactContext,
  useMemo,
} from 'react';

import { getFragment } from 'codegen';
import {
  CORE_DECODER_FRAGMENT_DOC,
  FETCH_DECODERS_DOCUMENT,
} from 'codegen/graphql';
import { IOptionNumber, IOptionString } from 'components/ui/Form/Options';

import { type DecodersContext } from './types';

const Context = createContext<DecodersContext>({
  loading: true,
  decoders: [],
  decoders_select: [],
  decoders_name_select: [],
  refetch: () => null,
});

const Provider = memo((props: { children: ReactNode }) => {
  const FetchDecodersAPI = useQuery(FETCH_DECODERS_DOCUMENT, {
    variables: {
      pagination: {
        page: 1,
        per_page: 500,
      },
    },
  });

  const decoders =
    getFragment(
      CORE_DECODER_FRAGMENT_DOC,
      FetchDecodersAPI.data?.decoders.decoders,
    ) || [];

  const decoders_select: IOptionNumber[] = useMemo(
    () =>
      decoders.map(({ id, name }) => ({
        label: name || '',
        value: id,
      })),
    [decoders],
  );

  const decoders_name_select: IOptionString[] = useMemo(
    () =>
      decoders.map(({ name }) => ({
        label: name || '',
        value: name || '',
      })),
    [decoders],
  );

  return (
    <Context.Provider
      value={{
        loading: FetchDecodersAPI.loading,
        decoders,
        decoders_select,
        decoders_name_select,
        refetch: FetchDecodersAPI.refetch,
      }}
    >
      {props.children}
    </Context.Provider>
  );
});

const useContext = () => useReactContext(Context);

export default { Provider, useContext };
