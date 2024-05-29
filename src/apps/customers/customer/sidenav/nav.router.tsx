import React, { memo, useMemo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import SideNavRouter from 'apps/dashboard/navigation/sidenav';
import { getFragment } from 'codegen';
import {
  CUSTOMER_PROFILE_PROPERTY_FRAGMENT,
  SCHEDULED_STATUS_CHANGES_FRAGMENT_DOC,
} from 'codegen/graphql';
import { ROUTER } from 'src/routes/route.plan';
import { useTheme } from 'styled-components';

import BackNav from './back_nav';
import SideNavFooter from './footer';
import SideNavHeader from './header';
import { PROPERTY_PROFILE_ROUTE } from '../../API';
import { useCustomer } from '../provider';

const CustomerRouter = <TRouter extends ROUTER>({ path, routes }: TRouter) => {
  const theme = useTheme();
  const { state: nav_state } = useLocation();
  const { creating_property, customer } = useCustomer();

  const fetched_properties = getFragment(
    PROPERTY_PROFILE_ROUTE,
    customer?.properties,
  );

  const getPropertyNavLinkColor = (
    property: CUSTOMER_PROFILE_PROPERTY_FRAGMENT,
  ): string | undefined => {
    if (property.status === 'inactive' || property.testing_enabled) {
      return theme.colors.text.error;
    }

    if (property.status === 'suspended') {
      return theme.colors.text.warning;
    }

    return undefined;
  };

  const getPropertyNavLinkIconKey = (
    property: CUSTOMER_PROFILE_PROPERTY_FRAGMENT,
  ): IconKey => {
    const scheduled_status_change = getFragment(
      SCHEDULED_STATUS_CHANGES_FRAGMENT_DOC,
      property.scheduled_status_changes,
    );
    if (
      scheduled_status_change?.status &&
      property.status !== scheduled_status_change?.status
    ) {
      return 'Clock';
    }

    return 'HomeWifi';
  };

  const buildPropertiesNav = (
    properties:
      | readonly CUSTOMER_PROFILE_PROPERTY_FRAGMENT[]
      | { id: number; property_name: string | null | undefined }[],
  ) => {
    const properties_routes = properties.map(p => ({
      icon: 'name' in p ? getPropertyNavLinkIconKey(p) : undefined,
      path: `property/${p.id}`,
      text:
        'name' in p
          ? p.name?.toUpperCase()
          : 'property_name' in p
          ? p.property_name?.toUpperCase()
          : 'PROPERTY',
      color: 'name' in p ? getPropertyNavLinkColor(p) : undefined,
    }));

    if (creating_property) {
      properties_routes.push({
        icon: 'HomeWifi' as IconKey,
        path: `property/new_property`,
        text: 'NEW PROPERTY',
        color: undefined,
      });
    }

    return properties_routes;
  };

  const [properties_links, setPropertiesLinks] = useState<ROUTER['routes']>(
    nav_state?.properties ? buildPropertiesNav(nav_state?.properties) : [],
  );

  useEffect(() => {
    if (fetched_properties) {
      setPropertiesLinks(buildPropertiesNav(fetched_properties));
    }
  }, [fetched_properties, fetched_properties?.length, creating_property]);

  const dynamic_routes = useMemo(
    () =>
      routes.reduce<ROUTER['routes']>((acc, cur) => {
        if (cur.path === 'property/:property_id') {
          return [...acc, ...properties_links];
        }

        return [...acc, cur];
      }, [] as ROUTER['routes']),
    [properties_links],
  );

  return (
    <>
      <BackNav />
      <SideNavRouter
        footer={SideNavFooter}
        header={SideNavHeader}
        path={path}
        routes={dynamic_routes}
      />
    </>
  );
};

export default memo(CustomerRouter);
