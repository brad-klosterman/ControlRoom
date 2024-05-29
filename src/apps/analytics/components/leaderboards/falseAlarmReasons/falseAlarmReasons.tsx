import { memo } from 'react';

import { FalseReasonsTableWrap } from 'apps/analytics/components/analytics.styles';
import { useAnalyticsState } from 'apps/analytics/state/analytics.provider';
import { Skeleton } from 'components/ui';
import Listing from 'components/ui/Listing';
import { TableContainer } from 'components/ui/Listing/styles';
import { useListing } from 'hooks';
import { NoticeType } from 'hooks/useListing';
import { FETCH_FALSE_ALARM_STATS } from 'src/apollo/rest/analytics/analytics.apollo';

import { table_columns } from './table.config';

interface IFalseAlarmReason {
  index: string;
  reason: string;
}

const per_page = 50;

const FalseAlarmReasonsTable = () => {
  const {
    state: { date_range },
  } = useAnalyticsState();

  const table = useListing<any, any, any>({
    document: FETCH_FALSE_ALARM_STATS,
    response_map: {
      getItems: data => {
        return (
          data?.false_alarm_stats?.statistics?.top_ten_false_alarm_reasons || []
        );
      },
      getTotal: data =>
        data?.false_alarm_stats?.statistics?.top_ten_false_alarm_reasons
          ?.length || 0,
    },
    size: per_page,
    startPage: 1,
    vars: {
      period_end: date_range.to,
      period_start: date_range.from,
    },
  });

  const sortedData = table.renderedItems.reduce(
    (acc: IFalseAlarmReason[], cur: string, currentIndex: number) => {
      return [
        ...acc,
        {
          index: currentIndex.toString(),
          reason: cur,
        },
      ];
    },
    [],
  );

  return (
    <TableContainer>
      <Listing>
        {/*<Listing.Header variant="analytics">*/}
        {/*  {table_columns.map(({ header, property, sortable, width }, index) => (*/}
        {/*    <Listing.Header.Col*/}
        {/*      align={index === 0 ? 'flex-start' : 'flex-end'}*/}
        {/*      key={property}*/}
        {/*      label={header}*/}
        {/*      onSort={sortable ? table.onSort : undefined}*/}
        {/*      property={property}*/}
        {/*      sortedBy={table.sortBy}*/}
        {/*      width={width}*/}
        {/*    />*/}
        {/*  ))}*/}
        {/*</Listing.Header>*/}
        {!table.notice ? (
          <Listing.Body
            data={sortedData}
            loadPages={table.loadPages}
            size={per_page}
            total={table.total}
          >
            {(agent: any, index) => (
              <Listing.Row key={index} variant="analytics">
                {table_columns.map(
                  ({ dataProps, property, width }, col_index) => (
                    <Listing.Col
                      align={col_index === 0 ? 'flex-start' : 'flex-end'}
                      key={property}
                      width={width}
                    >
                      {'isVirtualItem' in agent ? (
                        <Skeleton size="medium" />
                      ) : (
                        <Listing.Data data={dataProps(agent, index)} />
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

const FalseAlarmReasonsApp = () => {
  return (
    <FalseReasonsTableWrap>
      <FalseAlarmReasonsTable />
    </FalseReasonsTableWrap>
  );
};

export default memo(FalseAlarmReasonsApp);
