import React from 'react';

import { Icon } from 'components';

// TYPES
////////////////////////////////////////////////////////////////////////////////

const Row = (props: {
  icon: React.ComponentType<{
    className?: string;
  }>;
}) => {
  return (
    <div>
      <props.icon className="h-8 w-8" />
    </div>
  );
};

function Table() {
  return <Row icon={Icon.MapNav} />;
}

// JSX Props
////////////////////////////////////////////////////////////////////////////////
interface LayoutProps {
  nav: React.ReactNode;
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <nav>{props.nav}</nav>
      <main>{props.children}</main>
    </>
  );
};

function Route() {
  return (
    <Layout nav={<h1>My Site</h1>}>
      <div>Hello!</div>
    </Layout>
  );
}
