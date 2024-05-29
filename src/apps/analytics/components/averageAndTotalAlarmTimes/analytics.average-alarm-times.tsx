import { useQuery } from '@apollo/client';
import { useMemo } from 'react';

import { Container } from 'apps/analytics/components/analytics.styles';
import { IFetchedAverageAlarmTimes } from 'apps/analytics/state/analytics.interfaces';
import { useAnalyticsState } from 'apps/analytics/state/analytics.provider';
import { Text, Grid, Icon, Flex, Title } from 'components';
import { FETCH_AVERAGE_ALARM_STATS } from 'src/apollo/rest/analytics/analytics.apollo';
import { convertHMS } from 'src/utils';

import * as S from './analytics.average-and-total-alarm-times.styles';

const AnalyticsAverageAlarmTimes = () => {
  const {
    state: { date_range },
  } = useAnalyticsState();

  const { data } = useQuery(FETCH_AVERAGE_ALARM_STATS, {
    variables: {
      period_end: date_range.to,
      period_start: date_range.from,
    },
  });

  const average_alarm_stats: IFetchedAverageAlarmTimes = useMemo(
    () =>
      data?.average_alarm_stats?.statistics
        ? data?.average_alarm_stats?.statistics
        : {},
    [data],
  );

  return (
    <Container direction="column">
      <Flex alignItems="center" fitWidth gap="small">
        <S.IconContainer
          alignItems="center"
          direction="column"
          justifyContent="center"
        >
          <Icon.BrandChart />
        </S.IconContainer>
        <Title colorKey="primary" size="displaySmall">
          Average Times in (HH:MM:SS)
        </Title>
      </Flex>
      <Grid spacing="regular">
        <Grid.Cell justifyContent="center" x={[0, 2]} y={[0, 1]}>
          <S.AverageItemContainer>
            <S.BluePill>
              {convertHMS(
                Math.round(
                  (average_alarm_stats?.acknowledge_times + Number.EPSILON) *
                    100,
                ) / 100,
              ) || '00:00:00'}
            </S.BluePill>
            <Text size="labelSmall">To Acknowledge</Text>
          </S.AverageItemContainer>
        </Grid.Cell>
        <Grid.Cell justifyContent="center" x={[2, 4]} y={[0, 1]}>
          <S.AverageItemContainer>
            <S.BluePill>
              {convertHMS(
                Math.round(
                  (average_alarm_stats.dispatch_times + Number.EPSILON) * 100,
                ) / 100,
              ) || '00:00:00'}
            </S.BluePill>
            <Text size="labelSmall">To Dispatch</Text>
          </S.AverageItemContainer>
        </Grid.Cell>
        <Grid.Cell justifyContent="center" x={[4, 6]} y={[0, 1]}>
          <S.AverageItemContainer>
            <S.BluePill>
              {convertHMS(
                Math.round(
                  (average_alarm_stats?.call_times + Number.EPSILON) * 100,
                ) / 100,
              ) || '00:00:00'}
            </S.BluePill>
            <Text size="labelSmall">To Call</Text>
          </S.AverageItemContainer>
        </Grid.Cell>
        <Grid.Cell justifyContent="center" x={[6, 8]} y={[0, 1]}>
          <S.AverageItemContainer>
            <S.BluePill>
              {convertHMS(
                Math.round(
                  (average_alarm_stats.response_times + Number.EPSILON) * 100,
                ) / 100,
              ) || '00:00:00'}
            </S.BluePill>
            <Text size="labelSmall">To Respond</Text>
          </S.AverageItemContainer>
        </Grid.Cell>
        <Grid.Cell justifyContent="center" x={[8, 10]} y={[0, 1]}>
          <S.AverageItemContainer>
            <S.BluePill>
              {convertHMS(
                Math.round(
                  (average_alarm_stats?.arrival_times + Number.EPSILON) * 100,
                ) / 100,
              ) || '00:00:00'}
            </S.BluePill>
            <Text size="labelSmall">To Arrive</Text>
          </S.AverageItemContainer>
        </Grid.Cell>
        <Grid.Cell justifyContent="center" x={[10, 12]} y={[0, 1]}>
          <S.AverageItemContainer>
            <S.BluePill>
              {convertHMS(
                Math.round(
                  (average_alarm_stats?.clear_times + Number.EPSILON) * 100,
                ) / 100,
              ) || '00:00:00'}
            </S.BluePill>
            <Text size="labelSmall">To All Clear</Text>
          </S.AverageItemContainer>
        </Grid.Cell>
      </Grid>
    </Container>
  );
};

export default AnalyticsAverageAlarmTimes;
