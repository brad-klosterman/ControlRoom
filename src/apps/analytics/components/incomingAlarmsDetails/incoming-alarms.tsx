import { useQuery } from '@apollo/client';
import { useMemo } from 'react';

import { Container } from 'apps/analytics/components/analytics.styles';
import {
  IFetchedAverageAlarmTimes,
  ICallsData,
} from 'apps/analytics/state/analytics.interfaces';
import { useAnalyticsState } from 'apps/analytics/state/analytics.provider';
import { Flex, Text, Icon, Title, PieChart } from 'components';
import { FETCH_AVERAGE_ALARM_STATS } from 'src/apollo/rest/analytics/analytics.apollo';

import * as S from './incoming-alarm-details.styles';

const IncomingAlarms = () => {
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

  const incoming_alarms: ICallsData[] = [
    {
      color: '',
      id: 'Emergency',
      label: 'Emergency',
      value: company_stats.total_canceled_user_app,
    },
    {
      color: '',
      id: 'Phone In',
      label: 'Phone In',
      value: company_stats.total_canceled_control_room,
    },
    // {
    //   color: '',
    //   id: 'Non Emergency',
    //   label: 'Not Answered',
    //   value: company_stats,
    // },

    // {
    //   color: '',
    //   id: 'History',
    //   label: 'History',
    //   value: company_stats.total_history_allocated,
    // },
  ];

  return (
    <Container direction="column" style={{ height: '43rem' }}>
      <Flex alignItems="center" gap="small">
        <S.IconContainer>
          <Icon.Alarm />
        </S.IconContainer>
        <Title colorKey="primary" size="displaySmall">
          Incoming Alarms
        </Title>
      </Flex>
      {(company_stats.total_canceled_control_room ||
        company_stats.total_canceled_user_app) && (
        <S.DataColumn>
          <S.LegendContainer>
            <S.LegendItem>
              <S.LegendIcon color={'35, 83, 235'} />
              <Text size={'labelRegular'}>Cancelled in User App</Text>
            </S.LegendItem>
            <S.LegendItem>
              <S.LegendIcon color={'102, 133, 232'} />
              <Text size={'labelRegular'}>Cancelled in Control Room</Text>
            </S.LegendItem>
            {/* <S.LegendItem>
            <S.LegendIcon color={'155, 166, 250'} />
            <Text size={'labelRegular'}>Dispatched (false alarms)</Text>
          </S.LegendItem>
          <S.LegendItem>
            <S.LegendIcon color={'225, 225, 225'} />
            <Text size={'labelRegular'}>Dispatched (positive alarms)</Text>
          </S.LegendItem> */}
          </S.LegendContainer>
        </S.DataColumn>
      )}

      {(company_stats.total_canceled_control_room ||
        company_stats.total_canceled_user_app) && (
        <Flex fitWidth style={{ height: '28rem' }}>
          <PieChart data={incoming_alarms} />
        </Flex>
      )}
      {!company_stats.total_canceled_control_room &&
        !company_stats.total_canceled_user_app && (
          <Flex alignItems="center" fluid justifyContent="center">
            <Text>No Data Available</Text>
          </Flex>
        )}
    </Container>
  );
};

export default IncomingAlarms;
