import { memo } from 'react';

import { TableWrap } from 'apps/analytics/components/analytics.styles';
import { useAnalyticsState } from 'apps/analytics/state/analytics.provider';
import { FragmentType, getFragment } from 'codegen';
import {
  FETCH_RESPONDERS_STATISTICS_DOCUMENT,
  FETCH_RESPONDERS_STATISTICS_QUERY,
  QUERY_RESPONDERS_STATISTICS_ARGS,
  CORE_RESPONDERS_PERFORMANCE_FRAGMENT_DOC,
} from 'codegen/graphql';
import { Skeleton, Title, Icon, Flex } from 'components/ui';
import Listing from 'components/ui/Listing';
import { TableContainer } from 'components/ui/Listing/styles';
import { useListing } from 'hooks';
import { NoticeType } from 'hooks/useListing';

import { table_columns } from './table.config';
import { IconContainer } from '../../incomingAlarmsDetails/incoming-alarm-details.styles';

const per_page = 50;

const RespondersPerformanceTable = () => {
  const {
    state: { date_range },
  } = useAnalyticsState();

  const table = useListing<
    FETCH_RESPONDERS_STATISTICS_QUERY,
    QUERY_RESPONDERS_STATISTICS_ARGS,
    FragmentType<typeof CORE_RESPONDERS_PERFORMANCE_FRAGMENT_DOC>
  >({
    document: FETCH_RESPONDERS_STATISTICS_DOCUMENT,
    response_map: {
      getItems: d => {
        return d?.responders_statistics;
      },
      getTotal: data => data?.responders_statistics?.length || 0,
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

  // todo sort in microservice
  // const sortedData = table.renderedItems.sort(function (a: any, b: any) {
  //   return b.total_alarms - a.total_alarms;
  // });

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
          Responders Performance
        </Title>
      </Flex>
      <Listing>
        <Listing.Header variant="analytics">
          {table_columns.map(({ header, property, sortable, width }, index) => (
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
            {(responder, index) => (
              <Listing.Row key={index} variant="analytics">
                {table_columns.map(
                  ({ dataProps, property, width }, col_index) => (
                    <Listing.Col
                      align={'flex-start'}
                      key={property}
                      width={width}
                    >
                      {'isVirtualItem' in responder ? (
                        <Skeleton size="medium" />
                      ) : (
                        <Listing.Data
                          data={dataProps(
                            getFragment(
                              CORE_RESPONDERS_PERFORMANCE_FRAGMENT_DOC,
                              responder,
                            ),
                            index,
                          )}
                        />
                      )}
                    </Listing.Col>
                  ),
                )}
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

const RespondersPerformanceApp = () => {
  return (
    <TableWrap>
      <RespondersPerformanceTable />
    </TableWrap>
  );
};

export default memo(RespondersPerformanceApp);
