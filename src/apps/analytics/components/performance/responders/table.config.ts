import type { Property } from 'csstype';

import { RESPONDERS_PERFORMANCE } from 'codegen/graphql';
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

export const table_columns: ColumnConfig<RESPONDERS_PERFORMANCE>[] = [
  {
    dataProps: (responder, index) => ({
      label: `${index + 1}. ${responder?.name!.toUpperCase()}`,
    }),
    header: 'NAME',
    property: 'name',
  },
  {
    dataProps: responder => ({
      label: Math.round(responder?.total_alarms).toString(),
    }),
    header: 'ALARMS RESPONDED',
    property: 'total_alarms',
  },
  {
    dataProps: responder => ({
      label:
        formartTime(Math.round(responder?.response_times)).minutes.toString() +
        'm' +
        ' ' +
        formartTime(Math.round(responder?.response_times)).seconds.toString() +
        's',
    }),
    header: 'TO RESPOND',
    property: 'response_times',
  },
  {
    dataProps: responder => ({
      label:
        formartTime(Math.round(responder?.arrival_times)).minutes.toString() +
        'm' +
        ' ' +
        formartTime(Math.round(responder?.arrival_times)).seconds.toString() +
        's',
    }),
    header: 'TO ARRIVE',
    property: 'arrival_times',
  },
  {
    dataProps: responder => ({
      label:
        formartTime(Math.round(responder?.clear_times)).minutes.toString() +
        'm' +
        ' ' +
        formartTime(Math.round(responder?.clear_times)).seconds.toString() +
        's',
    }),
    header: 'TO ALL CLEAR',
    property: 'clear_times',
  },
  {
    dataProps: responder => ({
      label:
        formartTime(Math.round(responder?.save_times)).minutes.toString() +
        'm' +
        ' ' +
        formartTime(Math.round(responder?.save_times)).seconds.toString() +
        's',
    }),
    header: 'TOTAL ALARM TIME',
    property: 'save_times',
  },
  {
    dataProps: responder => ({
      label: Math.round(responder?.late_alarms).toString(),
    }),
    header: 'ALARMS > 10 min',
    property: 'late_alarms',
  },
];
