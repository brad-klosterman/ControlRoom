import { useQuery } from '@apollo/client';
import { useMemo } from 'react';

import { useAnalyticsState } from 'apps/analytics/state/analytics.provider';
import { Text, Flex } from 'components';
import { FETCH_FALSE_ALARM_STATS } from 'src/apollo/rest/analytics/analytics.apollo';

import { DataItem } from './analytics.leaderboards.styles';

const FalseAlarmReasons = () => {
  const {
    state: { date_range },
  } = useAnalyticsState();

  const { data } = useQuery(FETCH_FALSE_ALARM_STATS, {
    variables: {
      period_end: date_range.to,
      period_start: date_range.from,
    },
  });

  const false_alarm_reasons: [string] = useMemo(
    () =>
      data?.false_alarm_stats?.statistics?.top_ten_false_alarm_reasons
        ? data?.false_alarm_stats?.statistics?.top_ten_false_alarm_reasons
        : [],
    [data],
  );

  return (
    <Flex
      direction="column"
      fitWidth
      gap="xxxSmall"
      style={{ height: '36rem' }}
    >
      {false_alarm_reasons.length < 1 ? (
        <Flex alignItems="center" fluid justifyContent="center">
          <Text>No Data Available</Text>
        </Flex>
      ) : (
        false_alarm_reasons.map((reason: string) => (
          <DataItem alignItems="center" fitWidth>
            {reason}
          </DataItem>
        ))
      )}
    </Flex>
  );
};

export default FalseAlarmReasons;
