import { memo } from 'react';
import SideNavRouter from 'apps/dashboard/navigation/sidenav';
import { ROUTER } from 'src/routes/route.plan';

const AdminRouter = <TRouter extends ROUTER>({ path, routes }: TRouter) => {
  return <SideNavRouter path={path} routes={routes} />;
};

export default memo(AdminRouter);
