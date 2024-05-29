import { memo } from 'react';

import { TableWrap } from 'apps/analytics/components/analytics.styles';
import { useAnalyticsState } from 'apps/analytics/state/analytics.provider';
import { getFragment } from 'codegen';
import {
  CORE_AGENTS_PERFORMANCE_FRAGMENT_DOC,
  FETCH_AGENTS_STATISTICS_DOCUMENT,
  FETCH_AGENTS_STATISTICS_QUERY,
  QUERY_AGENTS_STATISTICS_ARGS,
  CORE_AGENTS_PERFORMANCE_FRAGMENT,
} from 'codegen/graphql';
import { Skeleton, Title, Icon, Flex } from 'components/ui';
import Listing from 'components/ui/Listing';
import { TableContainer } from 'components/ui/Listing/styles';
import { useListing } from 'hooks';
import { NoticeType } from 'hooks/useListing';

import { table_columns } from './table.config';
import { IconContainer } from '../../incomingAlarmsDetails/incoming-alarm-details.styles';

const per_page = 50;

const AgentsPerformanceTable = () => {
  const {
    state: { date_range },
  } = useAnalyticsState();

  const table = useListing<
    FETCH_AGENTS_STATISTICS_QUERY,
    QUERY_AGENTS_STATISTICS_ARGS,
    CORE_AGENTS_PERFORMANCE_FRAGMENT
  >({
    document: FETCH_AGENTS_STATISTICS_DOCUMENT,
    response_map: {
      getItems: d => {
        const agents =
          getFragment(
            CORE_AGENTS_PERFORMANCE_FRAGMENT_DOC,
            d?.agents_statistics,
          ) || [];

        return (
          [...agents].sort((a: any, b: any) =>
            a.total_alarms > b.total_alarms ? 1 : 1,
          ) || []
        );
      },
      getTotal: data => data?.agents_statistics?.length || 0,
    },
    size: per_page,
    startPage: 1,
    vars: {
      params: {
        period_end: date_range.to!.toString(),
        period_start: date_range.from!.toString(),
      },
    },
  });

  return (
    <TableContainer>
      <Flex
        alignItems="center"
        fitWidth
        gap="small"
        style={{ padding: '1rem' }}
      >
        <IconContainer
          alignItems="center"
          direction="column"
          justifyContent="center"
        >
          <Icon.BrandChart />
        </IconContainer>
        <Title colorKey="primary" size="displaySmall">
          Agents Performance
        </Title>
      </Flex>
      <Listing>
        <Listing.Header variant="analytics">
          {table_columns.map(({ header, property, sortable, width }) => (
            <Listing.Header.Col
              align={'flex-start'}
              key={property}
              label={header}
              onSort={sortable ? table.onSort : undefined}
              property={property}
              sortedBy={table.sortBy}
              width={width}
            />
          ))}
        </Listing.Header>
        {!table.notice ? (
          <Listing.Body
            data={table.renderedItems}
            loadPages={table.loadPages}
            size={per_page}
            total={table.total}
          >
            {(agent: any, index) => (
              <Listing.Row key={index} variant="analytics">
                {table_columns.map(({ dataProps, property, width }) => (
                  <Listing.Col align="flex-start" key={property} width={width}>
                    {'isVirtualItem' in agent ? (
                      <Skeleton size="medium" />
                    ) : (
                      <Listing.Data data={dataProps(agent, index)} />
                    )}
                  </Listing.Col>
                ))}
              </Listing.Row>
            )}
          </Listing.Body>
        ) : (
          (() => {
            switch (table.notice) {
              case NoticeType.noResults:
                return (
                  <Listing.Notice
                    content="We couldn’t find anything that matches your search."
                    title="No results found"
                  />
                );
              default:
                return <></>;
            }
          })()
        )}
      </Listing>
    </TableContainer>
  );
};

const AgentsPerformanceApp = () => {
  return (
    <TableWrap>
      <AgentsPerformanceTable />
    </TableWrap>
  );
};

export default memo(AgentsPerformanceApp);
