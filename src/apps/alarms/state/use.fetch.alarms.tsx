import { useQuery, useSubscription } from '@apollo/client';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useResponseStatus } from 'hooks';
import { getFragment } from 'src/apollo/codegen';
import {
  ALARM_STACK,
  CORE_ALARM_FRAGMENT,
  CORE_ALARM_FRAGMENT_DOC,
  FETCH_ALARMS_DOCUMENT,
  SUBSCRIBE_ALARMS_UPDATE_DOCUMENT,
} from 'src/apollo/codegen/graphql';
import { Lazy, LazyState } from 'src/utils/lazy';
import { playCustomSound } from 'utils';

interface UseFetchAlarmsActions {
  refetchAlarms: () => Promise<void>;
  setAlarmToRead: (alarm_id: number) => void;
}

interface UseFetchAlarmsState {
  unread_alarm_id_set: Set<number>;
  alarms: Lazy<CORE_ALARM_FRAGMENT[]>;
  total?: number;
}

interface UseFetchAlarmsReturn {
  actions: UseFetchAlarmsActions;
  state: UseFetchAlarmsState;
}

interface UseFetchAlarmsProps {
  alarm_stack: ALARM_STACK;
}

const useFetchAlarms = ({
  alarm_stack,
}: UseFetchAlarmsProps): UseFetchAlarmsReturn => {
  const { incomingAlert } = useResponseStatus();
  const [unread_alarm_id_set, setUnreadAlarmIdSet] = useState<Set<number>>(
    new Set(),
  );

  const { data, loading, refetch } = useQuery(FETCH_ALARMS_DOCUMENT, {
    variables: { alarm_stack },
  });

  const setNewUnreadAlarms = ({
    new_alarms,
    old_alarms,
  }: {
    new_alarms: readonly CORE_ALARM_FRAGMENT[];
    old_alarms: readonly CORE_ALARM_FRAGMENT[];
  }) => {
    const new_id_array = new_alarms.map(x => x.id);
    const old_id_array = old_alarms.map(x => x.id);
    const new_unread_alarm_ids = new_id_array.filter(
      id => !old_id_array.includes(id),
    );

    const existing_unread_alarm_ids = Array.from(unread_alarm_id_set);
    const existing_unread_alarm_ids_without_cleared_alarms =
      existing_unread_alarm_ids.filter(id => new_id_array.includes(id));

    setUnreadAlarmIdSet(
      new Set([
        ...existing_unread_alarm_ids_without_cleared_alarms,
        ...new_unread_alarm_ids,
      ]),
    );
  };

  const setAlarmToRead = (alarm_id: number): void => {
    if (!unread_alarm_id_set.has(alarm_id)) {
      return;
    }

    const updated_unread_alarm_id_set = new Set(unread_alarm_id_set);
    updated_unread_alarm_id_set.delete(alarm_id);
    setUnreadAlarmIdSet(updated_unread_alarm_id_set);
  };

  useSubscription(SUBSCRIBE_ALARMS_UPDATE_DOCUMENT, {
    variables: { alarm_stack },
    onData: () => {
      const old_data = data;

      refetch().then(({ data: refetch_data }) => {
        const new_alarms = getFragment(
          CORE_ALARM_FRAGMENT_DOC,
          refetch_data.alarms.alarms,
        );
        const old_alarms =
          getFragment(CORE_ALARM_FRAGMENT_DOC, old_data?.alarms.alarms) ?? [];

        setNewUnreadAlarms({
          new_alarms,
          old_alarms,
        });

        const previous_total = old_data?.alarms.total ?? 0;
        const new_total = refetch_data.alarms.total;
        const more_alarms_then_previous = new_total > previous_total;

        if (alarm_stack === 'EMERGENCY' && more_alarms_then_previous) {
          incomingAlert('INCOMING EMERGENCY ALARM', {
            id: 'incoming_emergency_alarm' + refetch_data.alarms,
          });

          playCustomSound(
            'https://controlroomsoundsseon.s3.af-south-1.amazonaws.com/tos-redalert.mp3',
          );
        }
      });
    },
  });

  const buildLazyStateAlarms = (): Lazy<CORE_ALARM_FRAGMENT[]> => {
    const alarms = data?.alarms.alarms as CORE_ALARM_FRAGMENT[] | undefined;

    if (loading) {
      return {
        state: LazyState.LOADING,
        data: alarms,
      };
    }

    if (!alarms) {
      return {
        state: LazyState.ERROR,
      };
    }

    return {
      state: LazyState.SUCCESS,
      data: alarms,
    };
  };

  return {
    state: {
      unread_alarm_id_set: unread_alarm_id_set,
      alarms: buildLazyStateAlarms(),
      total: data?.alarms.total,
    },
    actions: {
      refetchAlarms: async () => {
        await refetch();
      },
      setAlarmToRead,
    },
  };
};

export { useFetchAlarms };
