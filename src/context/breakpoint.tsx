import { createContext, useEffect, useState } from 'react';

import { useDebounce } from 'hooks';
import { DefaultTheme } from 'styled-components';
import { getBreakpoint, getServerBreakpoint } from 'utils';

const defaultState =
  typeof window === 'undefined'
    ? getServerBreakpoint()
    : getBreakpoint(window.innerWidth);

type State = keyof DefaultTheme['breakpoints'];
const BreakpointContext = createContext<State>(defaultState);

interface BreakpointProviderProps {
  children: React.ReactNode;
  value?: State;
}

const BreakpointProvider: React.FC<BreakpointProviderProps> = ({
  children,
  value = defaultState,
}) => {
  const [windowWidth, setWindowWidth] = useState<number>();
  const [breakpoint, setBreakpoint] = useState(value);

  // Store window width on resize
  useEffect(() => {
    const onWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  // Store breakpoint value after resize complete
  useDebounce(
    () => {
      if (windowWidth) {
        const newBreakpoint = getBreakpoint(windowWidth);
        setBreakpoint(newBreakpoint);
      }
    },
    300,
    [windowWidth],
  );

  return (
    <BreakpointContext.Provider value={breakpoint}>
      {children}
    </BreakpointContext.Provider>
  );
};

export default {
  Context: BreakpointContext,
  Provider: BreakpointProvider,
};
