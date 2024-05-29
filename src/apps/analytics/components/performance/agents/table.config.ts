import type { Property } from 'csstype';

import { AGENTS_PERFORMANCE } from 'codegen/graphql';
import { TableDataItem } from 'components/ui/Listing/Data';

interface ColumnConfig<ItemProps extends Record<string, any>> {
  dataProps(datum: ItemProps, index: number): TableDataItem;
  header: string;
  info?: string;
  property: any;
  skeletonWidth?: Property.Width;
  sortable?: boolean;
  width?: Property.Width;
}

const formartTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  const final_time = {
    minutes,
    seconds,
  };

  return final_time;
};

export const table_columns: ColumnConfig<AGENTS_PERFORMANCE>[] = [
  {
    dataProps: (agent, index) => ({
      label: `${index + 1}. ${agent?.name!.toUpperCase()}`,
    }),
    header: 'NAME',
    property: 'name',
  },
  {
    dataProps: agent => ({
      label: Math.round(agent.total_alarms).toString(),
    }),
    header: 'ALARMS DELEGATED',
    property: 'total_alarms',
  },
  {
    dataProps: agent => ({
      label:
        formartTime(Math.round(agent.acknowledge_times)).minutes.toString() +
        'm' +
        ' ' +
        formartTime(Math.round(agent.acknowledge_times)).seconds.toString() +
        's',
    }),
    header: 'TO ACKNOWLEDGE',
    property: 'acknowledge_times',
  },
  {
    dataProps: agent => ({
      label:
        formartTime(Math.round(agent.dispatch_times)).minutes.toString() +
        'm' +
        ' ' +
        formartTime(Math.round(agent.dispatch_times)).seconds.toString() +
        's',
    }),
    header: 'TO DISPATCH',
    property: 'dispatch_times',
  },
  {
    dataProps: agent => ({
      label:
        formartTime(Math.round(agent.call_times)).minutes.toString() +
        'm' +
        ' ' +
        formartTime(Math.round(agent.call_times)).seconds.toString() +
        's',
    }),
    header: 'TO CALL',
    property: 'call_times',
  },
  {
    dataProps: agent => ({
      label:
        formartTime(Math.round(agent.save_times)).minutes.toString() +
        'm' +
        ' ' +
        formartTime(Math.round(agent.save_times)).seconds.toString() +
        's',
    }),
    header: 'TOTAL ALARM TIME',
    property: 'save_times',
  },
  {
    dataProps: agent => ({
      label: agent.late_alarms.toString(),
    }),
    header: 'ALARMS > 10 min',
    property: 'late_alarms',
  },
];
