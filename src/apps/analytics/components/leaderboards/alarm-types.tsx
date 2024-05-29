import { useQuery } from '@apollo/client';
import { useMemo } from 'react';

import { BarChartProps } from 'apps/analytics/state/analytics.interfaces';
import { useAnalyticsState } from 'apps/analytics/state/analytics.provider';
import { Flex, Text } from 'components';
import { BarChart } from 'components/ui';
import { FETCH_LEADERBOARD_ALARM_STATS } from 'src/apollo/rest/analytics/analytics.apollo';
// eslint-disable-next-line import/no-named-as-default
import Colors from 'src/theme/colors/colors';

const AlarmTypes = () => {
  const {
    state: { date_range },
  } = useAnalyticsState();

  const { data } = useQuery(FETCH_LEADERBOARD_ALARM_STATS, {
    variables: {
      period_end: date_range.to,
      period_start: date_range.from,
    },
  });

  const getColor = () => Colors.Info;

  const alarm_types: BarChartProps[] = useMemo(
    () =>
      data?.alarm_leaderboard_stats?.statistics?.top_ten_alarm_types
        ? data?.alarm_leaderboard_stats?.statistics?.top_ten_alarm_types.reduce(
            (acc: BarChartProps[], cur: [string, number]) => [
              ...acc,
              {
                burger: cur[1],
                label: `${cur[0]}`,
                type: cur[0],
              },
            ],
            [],
          )
        : [],
    [data],
  ).sort(function (a: BarChartProps, b: BarChartProps) {
    return a.burger - b.burger;
  });

  return (
    <Flex fitWidth style={{ height: '36rem' }}>
      {/* {loading && <Text>Loading top 10...</Text>} */}

      {alarm_types.length < 1 ? (
        <Flex alignItems="center" fluid justifyContent="center">
          <Text>No Data Available</Text>
        </Flex>
      ) : (
        <BarChart colors={getColor} data={alarm_types} />
      )}
    </Flex>
  );
};

export default AlarmTypes;
