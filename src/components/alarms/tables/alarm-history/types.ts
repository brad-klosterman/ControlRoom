import { HISTORY_ALARM_CONDENSED } from 'src/apollo/codegen/graphql';

type AlarmHistoryTableItem = HISTORY_ALARM_CONDENSED & {
  area_name?: string | null;
  agent_name?: string | null;
};

export type { AlarmHistoryTableItem };
