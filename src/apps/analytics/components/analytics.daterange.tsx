// import { useState } from 'react';

import { FiltersContainer } from 'apps/analytics/components/analytics.styles';
// import { useAnalyticsState } from 'apps/analytics/state/analytics.provider';

const AnalyticsDateRange = () => {
  // const { dispatch, state } = useAnalyticsState();
  //
  // const [date, setDate] = useState({
  //   from: state.date_range.from,
  //   to: state.date_range.to,
  // });

  // const onDateRangeSelected = (value: any) => {
  //   setDate(value);
  //
  //   dispatch({
  //     payload: {
  //       from: date.from,
  //       to: date.to,
  //     },
  //     type: 'CHANGE_DATE_RANGE',
  //   });
  // };

  return (
    <FiltersContainer justifyContent="flex-end">
      {/*<Grid spacing="small">*/}
      {/*  <Grid.Cell x={[11, 12]} y={[0, 1]}>*/}
      {/*    <DateRangeApp onDateRangeSelected={onDateRangeSelected} />*/}
      {/*  </Grid.Cell>*/}
      {/*</Grid>*/}
    </FiltersContainer>
  );
};

export default AnalyticsDateRange;
