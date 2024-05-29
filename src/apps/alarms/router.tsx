import { NavLink, Outlet, useNavigate } from 'react-router-dom';

import { useAlarmsState } from 'apps/alarms/state/provider';
import { RouteName, RouteWrap } from 'apps/dashboard/style';
import { Button, Grid, TabNavVariant, Tabs } from 'components/ui';

const AlarmsRouter = () => {
  const navigate = useNavigate();

  const {
    state: { EMERGENCY, ENROUTE, NON_EMERGENCY },
  } = useAlarmsState();

  const routeTitle = (route: string, num: number | undefined) => {
    if (typeof num !== 'number') {
      return route;
    }

    return route + ` (${num})`;
  };

  const hasUnreadEmergencyAlarms = (): boolean => {
    return EMERGENCY.unread_alarm_ids.size !== 0;
  };

  const determineEmergencyAlarmTabVariant = (): TabNavVariant | undefined => {
    if (hasUnreadEmergencyAlarms()) {
      return 'error';
    }

    return undefined;
  };

  const onCreateAlarmClick = () => {
    navigate('/control_room/create_alarm');
  };

  return (
    <RouteWrap direction="column" gap="xLarge">
      <Grid>
        <Grid.Cell x={[0, 8]} y={[0, 1]}>
          <RouteName isBold size="displayLarge">
            ALARM MONITORING
          </RouteName>
        </Grid.Cell>
        <Grid.Cell justifyContent="flex-end" x={[8, 12]} y={[0, 1]}>
          <Button onClick={onCreateAlarmClick} size="small" variant="other">
            CREATE ALARM
          </Button>
        </Grid.Cell>
      </Grid>
      <Tabs>
        <NavLink style={{ width: '100%' }} to="emergency">
          {({ isActive }) => (
            <Tabs.Nav
              active={isActive ? 'true' : 'false'}
              path="emergency"
              title={routeTitle('EMERGENCY', EMERGENCY.total)}
              variant={determineEmergencyAlarmTabVariant()}
              badge_count={EMERGENCY.unread_alarm_ids.size}
            />
          )}
        </NavLink>
        <NavLink style={{ width: '100%' }} to="enroute">
          {({ isActive }) => (
            <Tabs.Nav
              active={isActive ? 'true' : 'false'}
              path="enroute"
              title={routeTitle('ENROUTE', ENROUTE.total)}
            />
          )}
        </NavLink>
        <NavLink style={{ width: '100%' }} to="non_emergency">
          {({ isActive }) => (
            <Tabs.Nav
              active={isActive ? 'true' : 'false'}
              path="non_emergency"
              title={routeTitle('NON EMERGENCY', NON_EMERGENCY.total)}
            />
          )}
        </NavLink>
      </Tabs>
      <Outlet />
    </RouteWrap>
  );
};

export default AlarmsRouter;
