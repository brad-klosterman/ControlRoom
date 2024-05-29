import { AnimatePresence } from 'framer-motion';
import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ROUTER } from 'src/routes/route.plan';
import { toUpperSentence } from 'utils';
import { Text, Icon as Icons } from 'components/ui';

import { Container, Links, Link } from './styles';

const SideNavRouter = <TRoute extends ROUTER>({
  footer: Footer,
  header: Header,
  routes,
}: TRoute & { footer?: FC<any>; header?: FC<any> }) => {
  const getIcon = (icon: IconKey | undefined, color?: string) => {
    if (!icon) return null;
    const Icon = Icons[icon];
    return <Icon style={{ fontSize: '1.5rem', color }} />;
  };

  const links_count = routes.length;

  return (
    <>
      <AnimatePresence>
        <Container>
          {Header && <Header />}
          <Links top_align={links_count > 6}>
            {routes.map(r => (
              <NavLink
                hidden={r.hidden}
                key={r.path}
                replace={true}
                to={r.path}
              >
                {({ isActive }) => (
                  <Link active={isActive}>
                    {getIcon(r.icon, r.color)}
                    <Text
                      isTruncated
                      size="displaySmall"
                      style={{ color: r.color }}
                    >
                      {toUpperSentence(r.text ? r.text : r.path.split('/')[0])}
                    </Text>
                  </Link>
                )}
              </NavLink>
            ))}
          </Links>
          {Footer && <Footer />}
        </Container>
      </AnimatePresence>
      <Outlet />
    </>
  );
};

export default SideNavRouter;
