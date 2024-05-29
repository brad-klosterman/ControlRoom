import { NavLink, Outlet } from 'react-router-dom';

import { RouteName, RouteWrap } from 'apps/dashboard/style';
import { Tabs } from 'components/ui';
import { TAB_ROUTE } from 'src/routes/route.plan';
import { toUpperSentence } from 'utils';

const TabRoute = <TRoute extends TAB_ROUTE>({ path, routes }: TRoute) => {
  return (
    <RouteWrap direction="column" gap="xLarge">
      <RouteName isBold size="displayLarge">
        {toUpperSentence(path).split('/')[0]}
      </RouteName>
      <Tabs>
        {routes.map(r => (
          <NavLink
            hidden={r.hidden}
            key={r.path}
            replace={true}
            style={{ width: '100%' }}
            to={r.path}
          >
            {({ isActive }) => (
              <Tabs.Nav
                active={isActive ? 'true' : 'false'}
                disabled={r.disabled}
                path={r.path}
                title={toUpperSentence(r.path)}
              />
            )}
          </NavLink>
        ))}
      </Tabs>
      <Outlet />
    </RouteWrap>
  );
};

export default TabRoute;
