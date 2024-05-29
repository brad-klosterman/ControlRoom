/* eslint-disable sort-keys-fix/sort-keys-fix */
import AlarmsRouter from 'apps/alarms/router';

import Stack from './stack';

export default {
  Router: AlarmsRouter,
  EMERGENCY: () => <Stack stack="EMERGENCY" />,
  ENROUTE: () => <Stack stack="ENROUTE" />,
  NON_EMERGENCY: () => <Stack stack="NON_EMERGENCY" />,
};
