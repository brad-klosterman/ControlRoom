import {
  createContext,
  memo,
  ReactNode,
  useContext as useReactContext,
  useState,
} from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_CANCEL_ALARM_REASONS } from 'src/apollo';

const Context = createContext<{
  cancel_alarm_reasons: string[];
}>({
  cancel_alarm_reasons: [],
});

const Provider = memo((props: { children: ReactNode }) => {
  const [cancel_alarm_reasons, setCancelAlarmReasons] = useState<string[]>([]);

  useQuery(FETCH_CANCEL_ALARM_REASONS, {
    onCompleted: data => {
      setCancelAlarmReasons(data?.cancel_alarm_reasons?.alarm_close_reasons);
    },
  });

  return (
    <Context.Provider value={{ cancel_alarm_reasons }}>
      {props.children}
    </Context.Provider>
  );
});

const useContext = () => useReactContext(Context);

export default {
  Provider,
  useContext,
};
