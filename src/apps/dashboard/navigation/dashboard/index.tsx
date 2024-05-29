import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Flex } from 'components';
import SideNav from 'components/ui/SideNav/sidenav.component';
import Status from 'src/app.state/connection/status';
import { ROUTER } from 'src/routes/route.plan';
import { toUpperSentence } from 'utils';

const DashboardRouter = <TRoute extends ROUTER>({ routes }: TRoute) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Flex height="100vh" overflow="hidden" width="100vw">
      <SideNav>
        {routes.map(r => {
          if (!r.icon) {
            return null;
          }

          return (
            <SideNav.Link
              active={location.pathname.includes(r.path)}
              hidden={r.hidden}
              icon={r.icon}
              key={r.path}
              onClick={() => navigate(r.path)}
              title={toUpperSentence(r.path.toString())}
            />
          );
        })}
      </SideNav>
      <Status />
      <Outlet />
    </Flex>
  );
};

export default DashboardRouter;
