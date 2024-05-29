import { useQuery } from '@apollo/client';
import { useMemo } from 'react';

import { Container } from 'apps/analytics/components/analytics.styles';
import { IFetchedCompanyStats } from 'apps/analytics/state/analytics.interfaces';
import { useAnalyticsState } from 'apps/analytics/state/analytics.provider';
import { Text, Grid, Flex, Title, Icon } from 'components';
import { FETCH_COMPANY_STATS } from 'src/apollo/rest/analytics/analytics.apollo';

import * as S from './analytics.average-and-total-alarm-times.styles';

const AnalyticsTotalAlarmTimes = () => {
  const {
    state: { date_range },
  } = useAnalyticsState();

  const { data } = useQuery(FETCH_COMPANY_STATS, {
    variables: {
      period_end: date_range.to,
      period_start: date_range.from,
    },
  });

  const company_stats: IFetchedCompanyStats = useMemo(
    () =>
      data?.company_stats?.statistics ? data?.company_stats?.statistics : {},
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
          Total Alarms
        </Title>
      </Flex>
      <Grid spacing="regular">
        <Grid.Cell justifyContent="center" x={[0, 6]} y={[0, 1]}>
          <S.AverageItemContainer>
            <S.BluePill>
              {Math.round(
                (company_stats?.total_false_alarms + Number.EPSILON) * 100,
              ) / 100 || '0'}
            </S.BluePill>
            <Text size="labelSmall">Total False Alarms</Text>
          </S.AverageItemContainer>
        </Grid.Cell>
        <Grid.Cell justifyContent="center" x={[6, 12]} y={[0, 1]}>
          <S.AverageItemContainer>
            <S.BluePill>
              {Math.round(
                (company_stats?.total_true_alarms + Number.EPSILON) * 100,
              ) / 100 || '0'}
            </S.BluePill>
            <Text size="labelSmall">Total Positive Alarms</Text>
          </S.AverageItemContainer>
        </Grid.Cell>
      </Grid>
    </Container>
  );
};

export default AnalyticsTotalAlarmTimes;
