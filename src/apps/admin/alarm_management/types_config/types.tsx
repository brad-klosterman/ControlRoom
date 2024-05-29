import { createContext } from 'react';

import { CORE_ALARM_TYPE_FRAGMENT } from 'codegen/graphql';
import { IOptionNumber } from 'components/ui/Form/Options';
import { IntRange } from 'utils/type.helpers/number_range';

export type ProviderContext = {
  loading: boolean;
  alarm_types: readonly CORE_ALARM_TYPE_FRAGMENT[];
  alarm_types_options: IOptionNumber[];
  refetch: () => void;
};

export const Context = createContext<ProviderContext>({
  loading: true,
  alarm_types: [],
  alarm_types_options: [],
  refetch: () => null,
});

export type AlarmTypeForm = {
  id: number;
  alarm_type_name: string | null;
  description: string | null;
  alarm_description: string | null;
  //priority: AlarmTypePriority;
  priority: number;
  stack_allocation: AlarmTypeStackAllocation;
  message_to_user: string | null;
  sends_push_notifications: boolean;
};

export type AlarmTypePriority = IntRange<1, 10>;

export type AlarmTypeStackAllocation =
  | 'EMERGENCY'
  | 'HISTORY'
  | 'NON_EMERGENCY';
