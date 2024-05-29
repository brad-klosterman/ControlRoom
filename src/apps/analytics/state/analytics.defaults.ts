import moment from 'moment';

import { AnalyticsState } from './analytics.interfaces';

export const default_state: AnalyticsState = {
  date_range: {
    from: moment().subtract(30, 'days').format('YYYY-MM-DD'),
    to: moment().format('YYYY-MM-DD'),
  },
};
