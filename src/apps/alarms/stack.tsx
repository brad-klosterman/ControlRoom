import { memo, Fragment, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AlarmsContainer } from 'apps/alarms/components/display/alarms.containers';
import { useAlarmsState } from 'apps/alarms/state/provider';
import { ALARM_STACK, CORE_ALARM_FRAGMENT } from 'codegen/graphql';
import { Pagination } from 'components';
import { Icon, Text } from 'components/ui';
import { Expander } from 'components/ui/Expander';

import Alarm from './components/alarm.expander';

const ALARMS_PER_PAGE = 8;

export const calculatePaginationIndexes = (total_alarms: number) =>
  Math.ceil(total_alarms / ALARMS_PER_PAGE);

const Stack = (props: { stack: ALARM_STACK }) => {
  const Location = useLocation();

  const { state } = useAlarmsState();
  const default_expanded_key = Location.state?.alarm?.expander_key;

  const { alarms, total, unread_alarm_ids } = state[props.stack];

  const [current_page, setCurrentPage] = useState<number>(
    Location.state?.alarm.stack_index ?? 1,
  );

  const isUnreadEmergencyAlarm = (alarm: CORE_ALARM_FRAGMENT): boolean => {
    if (props.stack !== 'EMERGENCY') {
      return false;
    }

    return unread_alarm_ids.has(alarm.id);
  };

  if (total === 0) {
    return <Text size="displayRegular">WAITING FOR ALARMS</Text>;
  }

  return (
    <AlarmsContainer>
      <Expander
        defaultExpandedKeys={default_expanded_key && [default_expanded_key]}
        gap="small"
        id={props.stack}
      >
        {alarms
          .slice(
            ALARMS_PER_PAGE * (current_page - 1),
            ALARMS_PER_PAGE * current_page,
          )
          .map((alarm: CORE_ALARM_FRAGMENT, row_index) => (
            <Fragment key={alarm.id}>
              <Alarm.Row
                alarm={alarm}
                should_show_unread_banner={isUnreadEmergencyAlarm(alarm)}
              />
              <Alarm.Content
                alarm={alarm}
                alarm_stack={props.stack}
                current_page={current_page}
                row_index={row_index}
              />
            </Fragment>
          ))}
      </Expander>
      {alarms.length > ALARMS_PER_PAGE && (
        <Pagination
          current_page={current_page}
          onChangePage={setCurrentPage}
          total_pages={calculatePaginationIndexes(alarms.length || 0)}
        />
      )}
    </AlarmsContainer>
  );
};

export default memo(Stack);
