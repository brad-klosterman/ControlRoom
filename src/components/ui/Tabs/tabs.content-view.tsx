import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Tabs from './tabs';
import { TabNavWithDisplay, TabsContentViewProps } from './types';

const TabContentView = ({
  tabs,
  url_query_param_name,
}: TabsContentViewProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!tabs.length) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw 'Tab length cannot be zero.';
  }

  const default_tab = tabs[0];

  const setActiveTabId = async (tab: string) => {
    const url_params = new URLSearchParams(location.search);
    url_params.set(url_query_param_name, tab);

    navigate(
      {
        pathname: location.pathname,
        search: url_params.toString(),
      },
      {
        replace: true,
      },
    );
  };

  const getActiveTabId = (): string | null => {
    const url_params = new URLSearchParams(location.search);
    return url_params.get(url_query_param_name);
  };

  const getActiveTab = (): TabNavWithDisplay => {
    const active_tab_id = getActiveTabId();
    const active_tab = tabs.find(tab => tab.id === active_tab_id);

    if (!active_tab) {
      setActiveTabId(default_tab.path);
      return default_tab;
    }

    return active_tab;
  };

  useEffect(() => {
    const active_tab = getActiveTab();

    if (!active_tab || active_tab.disabled) {
      setActiveTabId(default_tab.path);
    }
  }, []);

  return (
    <>
      <Tabs active_path={getActiveTabId() ?? ''} onSelect={setActiveTabId}>
        {tabs.map(tab => {
          return <Tabs.Nav {...tab} />;
        })}
      </Tabs>
      {getActiveTab().element}
    </>
  );
};

export default TabContentView;
