import { useQuery } from '@apollo/client';
import { useMemo } from 'react';

import { useAnalyticsState } from 'apps/analytics/state/analytics.provider';
import { FETCH_SYSTEM_STATS } from 'src/apollo/rest/analytics/analytics.apollo';
import { Flex, Text } from 'src/components';

//import * as S from './analytics.system-stats.styles';
import { IFetchedSystemStatistics } from '../../state/analytics.interfaces';
import { Container } from '../analytics.styles';

const SystemStats = () => {
  const {
    state: { date_range },
  } = useAnalyticsState();

  const { data } = useQuery(FETCH_SYSTEM_STATS, {
    variables: {
      period_end: date_range.to,
      period_start: date_range.from,
    },
  });

  const system_stats: IFetchedSystemStatistics = useMemo(
    () =>
      data?.system_stats?.system_statistics
        ? data?.system_stats?.system_statistics
        : {},
    [data],
  );

  return (
    <Container direction="column" fitWidth style={{ height: '36rem' }}>
      {/* <Flex alignItems="center" fitWidth gap="small">
        <S.IconContainer
          alignItems="center"
          direction="column"
          justifyContent="center"
        >
          <Icon.Alarm />
        </S.IconContainer>
        <Title colorKey="primary" size="displaySmall">
          System Stats
        </Title>
      </Flex> */}
      {system_stats.active_clients > 0 ? (
        <Flex direction="column" fluid gap="xLarge">
          <Flex alignItems="center" fluid justifyContent="space-between">
            <Text size="displayRegular">Operational vehicles</Text>
            <Text size="displayRegular">
              {system_stats.responders_operational}/
              {system_stats.responders_total}
            </Text>
          </Flex>
          <Flex alignItems="center" fluid justifyContent="space-between">
            <Text size="displayRegular">Control Room agents online</Text>
            <Text size="displayRegular">
              {system_stats.agents_online}/{system_stats.agents_total}
            </Text>
          </Flex>
          <Flex alignItems="center" fluid justifyContent="space-between">
            <Text size="displayRegular">Active customers</Text>
            <Text size="displayRegular">{system_stats.active_clients}</Text>
          </Flex>
          <Flex alignItems="center" fluid justifyContent="space-between">
            <Text size="displayRegular">Inactive customers</Text>
            <Text size="displayRegular">{system_stats.inactive_clients}</Text>
          </Flex>
          <Flex alignItems="center" fluid justifyContent="space-between">
            <Text size="displayRegular">User App installed</Text>
            <Text size="displayRegular">{system_stats.user_app_installed}</Text>
          </Flex>
        </Flex>
      ) : (
        <Flex alignItems="center" fluid justifyContent="center">
          <Text size="displayRegular">No Data Available</Text>
        </Flex>
      )}
    </Container>
  );
};

export default SystemStats;
