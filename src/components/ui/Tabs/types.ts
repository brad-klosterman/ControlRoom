import {
  ReactElement,
  PropsWithChildren,
  ComponentPropsWithoutRef,
  ReactNode,
} from 'react';
import { DefaultTheme } from 'styled-components';

export type TabsProps<TRoutes extends string[]> = {
  active_path?: TRoutes[number];
  onSelect?: (path: TRoutes[number]) => void;
  readonly children: ReactElement<PropsWithChildren<TabNavProps>>[];
};

export type TabNavVariant = Extract<
  keyof DefaultTheme['colors'],
  'error' | 'success' | 'warning'
>;

export type TabNavProps = ComponentPropsWithoutRef<'button'> & {
  readonly path: string;
  readonly title: string;
  active?: 'true' | 'false';
  hidden?: boolean;
  variant?: TabNavVariant;
  badge_count?: number;
};

export type TabNavWithDisplay = TabNavProps & {
  element: ReactNode;
};

export interface TabsContentViewProps {
  url_query_param_name: string;
  tabs: TabNavWithDisplay[];
}
