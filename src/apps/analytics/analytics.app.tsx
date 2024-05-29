import AnalyticsDateRange from 'apps/analytics/components/analytics.daterange';
import AgentsPerformance from 'apps/analytics/components/performance/agents/agents.performance';
import RespondersPerformanceApp from 'apps/analytics/components/performance/responders/responders.performance';
import { AnalyticsProvider } from 'apps/analytics/state/analytics.provider';
import { Flex, Grid, Text } from 'components';

import AnalyticsAverageAlarmTimes from './components/averageAndTotalAlarmTimes/analytics.average-alarm-times';
import AlarmTimeGrterTenMinutes from './components/averageAndTotalAlarmTimes/analytics.total-alarm-time-greater-10min';
import AnalyticsTotalAlarmTimes from './components/averageAndTotalAlarmTimes/analytics.total-alarm-times';
import IncomingAlarms from './components/incomingAlarmsDetails/incoming-alarms';
import IncomingAlarmsPerStack from './components/incomingAlarmsDetails/incoming-alarms-per-stack';
import TotalCallsMade from './components/incomingAlarmsDetails/total-calls-made';
import AnalyticsLeaderboards from './components/leaderboards/analytics.leaderboards';
import styled, { css } from 'styled-components';

// TODO
// This should be done in a more elegant way, but is
// sufficient for now
export const AnalyticsRouteWRapper = styled(Flex)(
  () => css`
    flex: 1;
    padding: 5rem;
    overflow: auto;
  `,
);

const AnalyticsRoute = () => {
  return (
    <AnalyticsRouteWRapper>
      <Grid spacing="regular">
        <Grid.Cell x={[0, 12]} y={[0, 1]}>
          <Flex fitWidth justifyContent="space-between">
            <Text isBold margin={'xSmall'} size="displayLarge">
              DASHBOARD
            </Text>
            <AnalyticsDateRange />
          </Flex>
        </Grid.Cell>
        <Grid.Cell x={[0, 4]} y={[1, 2]}>
          <AnalyticsLeaderboards />
        </Grid.Cell>
        <Grid.Cell x={[4, 12]} y={[1, 2]}>
          <Grid spacing="regular">
            <Grid.Cell x={[0, 4]} y={[0, 1]}>
              <TotalCallsMade />
            </Grid.Cell>
            <Grid.Cell x={[4, 8]} y={[0, 1]}>
              <IncomingAlarms />
            </Grid.Cell>
            <Grid.Cell x={[8, 12]} y={[0, 1]}>
              <IncomingAlarmsPerStack />
            </Grid.Cell>
          </Grid>
        </Grid.Cell>
        <Grid.Cell x={[0, 7]} y={[2, 3]}>
          <AnalyticsAverageAlarmTimes />
        </Grid.Cell>
        <Grid.Cell x={[7, 10]} y={[2, 3]}>
          <AnalyticsTotalAlarmTimes />
        </Grid.Cell>
        <Grid.Cell x={[10, 12]} y={[2, 3]}>
          <AlarmTimeGrterTenMinutes />
        </Grid.Cell>
        {/* ROW  4 */}
        <Grid.Cell x={[0, 12]} y={[3, 4]}>
          <AgentsPerformance />
        </Grid.Cell>
        {/* ROW  5 */}
        <Grid.Cell x={[0, 12]} y={[4, 5]}>
          <RespondersPerformanceApp />
        </Grid.Cell>
      </Grid>
    </AnalyticsRouteWRapper>
  );
};

const AnalyticsApp = () => (
  <AnalyticsProvider>
    <AnalyticsRoute />
  </AnalyticsProvider>
);

export default AnalyticsApp;
