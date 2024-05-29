import { CORE_ALARM_FRAGMENT } from 'codegen/graphql';

import { AlarmData } from './types';

export const prepareAlarmData = (
  alarms: CORE_ALARM_FRAGMENT[]
): AlarmData[] => {
  if (alarms) {
    return alarms.reduce<AlarmData[]>((acc, cur) => {
      const lat = cur.property.geospatial?.coordinates?.latitude;
      const lng = cur.property.geospatial?.coordinates?.longitude;

      const position =
        lat && lng ? { lat: parseFloat(lat), lng: parseFloat(lng) } : null;

      return [
        ...acc,
        {
          id: cur.id,
          type: cur.type,
          alarm_state: cur.alarm_state,
          created_at: cur.procedure_timestamps.created_at,
          address: cur.property.geospatial?.entire_address || null,
          position
        }
      ];
    }, [] as AlarmData[]);
  }

  return [];
};
