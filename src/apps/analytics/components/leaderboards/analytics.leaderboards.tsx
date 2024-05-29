import { useState } from 'react';

import { Container } from 'apps/analytics/components/analytics.styles';
import AlarmTypes from 'apps/analytics/components/leaderboards/alarm-types';
import OveractiveCustomers from 'apps/analytics/components/leaderboards/overactive-customers';

import False from './falseAlarmReasons/falseAlarmReasons';

export type TabsRoute =
  | 'alarm-types'
  | 'false-alarm-reasons'
  | 'overactive-customer';

const AnalyticsLeaderboards = () => {
  const [selected_tab, setSelectedTab] = useState<TabsRoute>('alarm-types');

  return (
    <Container direction="column">
      {/*<Tabs*/}
      {/*  active={selected_tab}*/}
      {/*  onSelect={view => setSelectedTab(view)}*/}
      {/*>*/}
      {/*  <Tabs.Nav id="alarm-types" title="Top Alarm Types" />*/}
      {/*  <Tabs.Nav id="false-alarm-reasons" title="Top False Alarm Reasons" />*/}
      {/*  <Tabs.Nav id="overactive-customer" title="System Stats" />*/}
      {/*</Tabs>*/}
      {selected_tab === 'alarm-types' && <AlarmTypes />}
      {selected_tab === 'false-alarm-reasons' && <False />}
      {selected_tab === 'overactive-customer' && <OveractiveCustomers />}
    </Container>
  );
};

export default AnalyticsLeaderboards;
