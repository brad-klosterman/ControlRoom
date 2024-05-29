import { createContext, FC, ReactNode, useEffect, useState } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import generateTheme from 'theme';
import ThemeColors from 'theme/colors/colors';

const defaultState = {
  setThemeOptions: () => {},
  themeOptions: {
    isDarkMode: true,
    primaryColor: ThemeColors.Primary as string,
    secondaryColor: ThemeColors.Secondary as string,
  },
};

const ThemeContext = createContext<{
  setThemeOptions: (themeOptions: typeof defaultState.themeOptions) => void;
  themeOptions: typeof defaultState.themeOptions;
}>(defaultState);

interface ThemeProviderProps {
  children: ReactNode;
  value?: typeof defaultState.themeOptions;
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  value = defaultState.themeOptions,
}) => {
  const [themeOptions, setThemeOptions] = useState(value);

  const [theme, setTheme] = useState(generateTheme(value.isDarkMode));

  useEffect(() => {
    const newTheme = generateTheme(themeOptions.isDarkMode);

    setTheme(newTheme);
  }, [themeOptions]);

  return (
    <ThemeContext.Provider value={{ setThemeOptions, themeOptions }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default {
  Context: ThemeContext,
  Provider: ThemeProvider,
};
