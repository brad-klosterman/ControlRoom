import { useQuery } from '@apollo/client';
import { useMemo } from 'react';

import { Container } from 'apps/analytics/components/analytics.styles';
import {
  ICallsData,
  IFetchedCompanyStats,
} from 'apps/analytics/state/analytics.interfaces';
import { useAnalyticsState } from 'apps/analytics/state/analytics.provider';
import { Flex, Text } from 'components';
import { PieChart, Icon, Title } from 'components/ui';
import { FETCH_COMPANY_STATS } from 'src/apollo/rest/analytics/analytics.apollo';

import * as S from './incoming-alarm-details.styles';

const TotalCallsMade = () => {
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

  const total_calls_data: ICallsData[] = [
    {
      color: '',
      id: 'Answered',
      label: 'Answered',
      value: company_stats.total_answered_calls,
    },
    {
      color: '',
      id: 'Not Answered',
      label: 'Not Answered',
      value: company_stats.total_unanswered_calls,
    },
    {
      color: '',
      id: 'Push Notification Sent',
      label: 'Push Notification Sent',
      value: company_stats.total_push_notifications_sent,
    },
  ];

  return (
    <Container direction="column" style={{ height: '43rem' }}>
      <Flex alignItems="center" fitWidth gap="small">
        <S.IconContainer>
          <Icon.Phone />
        </S.IconContainer>
        <Title colorKey="primary" size="displaySmall">
          Total Calls Made
        </Title>
      </Flex>
      {(company_stats.total_answered_calls ||
        company_stats.total_answered_calls ||
        company_stats.total_push_notifications_sent) && (
        <S.DataColumn>
          <S.LegendContainer>
            <S.LegendItem>
              <S.LegendIcon color={'35, 83, 235'} />
              <Text size={'labelRegular'}>Answered</Text>
            </S.LegendItem>
            <S.LegendItem>
              <S.LegendIcon color={'102, 133, 232'} />
              <Text size={'labelRegular'}>Not answered</Text>
            </S.LegendItem>
            <S.LegendItem>
              <S.LegendIcon color={'155, 166, 250'} />
              <Text size={'labelRegular'}>Push Notification Sent</Text>
            </S.LegendItem>
          </S.LegendContainer>
        </S.DataColumn>
      )}

      {(company_stats.total_answered_calls ||
        company_stats.total_answered_calls ||
        company_stats.total_push_notifications_sent) && (
        <Flex fitWidth style={{ height: '27rem' }}>
          {/* {loading && <Text>Loading total calls....</Text>} */}
          <PieChart data={total_calls_data} />
        </Flex>
      )}
      {!company_stats.total_answered_calls &&
        !company_stats.total_answered_calls &&
        !company_stats.total_push_notifications_sent && (
          <Flex alignItems="center" fluid justifyContent="center">
            <Text>No Data Available</Text>
          </Flex>
        )}
    </Container>
  );
};

export default TotalCallsMade;
