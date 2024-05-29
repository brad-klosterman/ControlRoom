import { FC, PropsWithChildren } from 'react';

export type ROUTE = {
  path: string;
  icon?: IconKey;
  hidden?: boolean;
  disabled?: boolean;
  outlet?: FC;
  redirect?: boolean;
  // This provider could probably just be the main component.
  // It doesn't feel like something this HOC should be responsible for
  provider?: FC<PropsWithChildren<any>>;
} & (
  | {
      nav: typeof NAV_TYPE.dashboard;
      routes: ReadonlyArray<ROUTE>;
    }
  | {
      nav: typeof NAV_TYPE.sidenav;
      router: FC<ROUTER>;
      routes: ReadonlyArray<ROUTE>;
    }
  | {
      nav: typeof NAV_TYPE.tabs;
      routes: ReadonlyArray<ROUTE>;
    }
  | {
      component: FC<any>;
    }
);

export type ROUTER = {
  path: string;
  routes: ReadonlyArray<{
    path: string;
    icon?: IconKey;
    hidden?: boolean;
    // These should be here, but they are needed for demo
    text?: string;
    color?: string;
  }>;
};

export const NAV_TYPE = {
  dashboard: 'dashboard',
  sidenav: 'sidenav',
  tabs: 'tabs',
} as const;

export type RoutePermissions = {
  dashboard: boolean;
  admin: boolean;
  admin_billing: boolean;
  customer_billing: boolean;
  customers: boolean;
  alarms: boolean;
  analytics: boolean;
  alarm_history: boolean;
};

export type NAV_ROUTE_TYPE = Extract<ROUTE, { nav: keyof typeof NAV_TYPE }>;

export type DASHBOARD_ROUTE = Extract<
  ROUTE,
  { nav: typeof NAV_TYPE.dashboard }
>;

export type SIDENAV_ROUTER = Extract<ROUTE, { nav: typeof NAV_TYPE.sidenav }>;
export type TAB_ROUTE = Extract<ROUTE, { nav: typeof NAV_TYPE.tabs }>;

export type ExtractKeysOfRoutes<T extends ReadonlyArray<ROUTE>> =
  T[number]['path'];
