import { useQuery } from '@apollo/client';
import { memo, ReactNode, useContext, useMemo } from 'react';

import { getFragment } from 'codegen';
import {
  CORE_ALARM_TYPE_FRAGMENT_DOC,
  FETCH_ALARM_TYPES_DOCUMENT,
} from 'codegen/graphql';

import { Context } from './types';

const AlarmTypesProvider = (props: { children: ReactNode }) => {
  const { data, loading, refetch } = useQuery(FETCH_ALARM_TYPES_DOCUMENT, {
    variables: {
      pagination: {
        page: 1,
        per_page: 700,
      },
    },
  });

  const alarm_types =
    getFragment(CORE_ALARM_TYPE_FRAGMENT_DOC, data?.alarm_types.alarm_types) ||
    [];

  const alarm_types_options = useMemo(
    () =>
      alarm_types.map(type => ({
        label: type.description?.toUpperCase() ?? '-',
        value: type.id,
      })),
    [alarm_types],
  );

  const refetchAlarmTypes = async () => {
    await refetch();
  };

  return (
    <Context.Provider
      value={{
        loading,
        alarm_types,
        alarm_types_options,
        refetch: refetchAlarmTypes,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export const useAlarmTypesContext = () => {
  return useContext(Context);
};

export default memo(AlarmTypesProvider);
