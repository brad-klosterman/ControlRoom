import { Link, Navigate } from 'react-router-dom';

import { Button, Flex, Logo, Text } from 'components';

import { BackgroundImage, Container } from './styles';
import { useCanViewAdmin } from 'src/app.state/permissions/hooks/view-admin.permission';
import { useCanViewAlarms } from 'src/app.state/permissions/hooks/view-alarms.permission';
import { useCanViewCustomers } from 'src/app.state/permissions/hooks/view-customers.permission';
import { useCanViewAlarmHistory } from 'src/app.state/permissions/hooks/view-alarms-history.permission';
import { useCanViewStatistics } from 'src/app.state/permissions/hooks/view-statistics.permission';

const UnknownRoute = () => {
  const can_view_admin = useCanViewAdmin();
  const can_view_alarms = useCanViewAlarms();
  const can_view_customers = useCanViewCustomers();
  const can_view_alarm_history = useCanViewAlarmHistory();
  const can_view_statistics = useCanViewStatistics();

  const getValidRedirect = (): string | undefined => {
    if (can_view_admin) {
      return '/control_room/admin';
    } else if (can_view_alarms) {
      return '/control_room/alarms';
    } else if (can_view_customers) {
      return '/control_room/customers';
    } else if (can_view_alarm_history) {
      return '/control_room/alarm_history';
    } else if (can_view_statistics) {
      return '/control_room/analytics';
    }

    return undefined;
  };

  const redirect_path = getValidRedirect();
  if (redirect_path) {
    return <Navigate replace={true} to={redirect_path} />;
  }

  return (
    <Container>
      <BackgroundImage>
        <Logo />
        <Flex alignItems="center" justifyContent="center">
          <Text isBold size="displayXXLarge">
            PAGE NOT FOUND
          </Text>
        </Flex>
        <Link to={'/control_room'}>
          <Button>GO TO DASHBOARD</Button>
        </Link>
      </BackgroundImage>
    </Container>
  );
};

export default UnknownRoute;
