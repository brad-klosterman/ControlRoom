import { FC, ReactElement, ReactNode } from 'react';

import { NAV_TYPE, ROUTE } from 'src/routes/route.plan';

import DashboardRouter from './navigation/dashboard';
import TabsRouter from './navigation/tabs';

const RouteHOC = <TRoute extends ROUTE>(route: TRoute) => {
  const ConditionalProvider = ({
    children,
  }: {
    children: ReactNode;
  }): ReactElement => {
    if (route?.provider) {
      const RouteProvider: FC<any> = route.provider;
      return <RouteProvider>{children}</RouteProvider>;
    } else {
      return <>{children}</>;
    }
  };

  let Route: FC<any> = () => null;

  if ('nav' in route) {
    if (route.nav === NAV_TYPE.dashboard) {
      Route = () => <DashboardRouter {...route} />;
    } else if (route.nav === NAV_TYPE.sidenav) {
      const NavRouter = route.router;
      Route = () => <NavRouter {...route} />;
    } else if (route.nav === NAV_TYPE.tabs) {
      Route = () => <TabsRouter {...route} />;
    }
  } else {
    const Component = route.component;
    Route = () => <Component {...route} />;
  }

  return (
    <ConditionalProvider>
      <Route {...route} />
    </ConditionalProvider>
  );
};

export default RouteHOC;
