import { useQuery } from '@apollo/client';
import { useMemo } from 'react';

import { Container } from 'apps/analytics/components/analytics.styles';
import { IFetchedAverageAlarmTimes } from 'apps/analytics/state/analytics.interfaces';
import { useAnalyticsState } from 'apps/analytics/state/analytics.provider';
import { Text, Grid, Flex, Icon, Title } from 'components';
import { FETCH_AVERAGE_ALARM_STATS } from 'src/apollo/rest/analytics/analytics.apollo';

import * as S from './analytics.average-and-total-alarm-times.styles';

const AlarmTimeGrterTenMinutes = () => {
  const {
    state: { date_range },
  } = useAnalyticsState();

  const { data } = useQuery(FETCH_AVERAGE_ALARM_STATS, {
    variables: {
      period_end: date_range.to,
      period_start: date_range.from,
    },
  });

  const company_stats: IFetchedAverageAlarmTimes = useMemo(
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
          Late Alarms
        </Title>
      </Flex>
      <Grid spacing="small">
        <Grid.Cell x={[0, 12]} y={[0, 1]}>
          <S.AverageItemContainer>
            <S.RedPill>
              {Math.round(company_stats.late_alarms) || '0'}
            </S.RedPill>
            <Text size="labelSmall">Alarms {'>'} 10min</Text>
          </S.AverageItemContainer>
        </Grid.Cell>
      </Grid>
    </Container>
  );
};

export default AlarmTimeGrterTenMinutes;
