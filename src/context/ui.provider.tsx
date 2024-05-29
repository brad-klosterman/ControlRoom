import { FC, ReactNode } from 'react';

import { GlobalStyles, Toaster } from 'components/ui';
import Modal from 'components/ui/Modal/Modal';
import ModalContext from 'components/ui/Modal/provider';

import ThemeContext from './theme';
import ToasterContext from './toaster';

import '../static/css/fonts.css';
import '../static/css/storybook.css';
import '../static/css/app.css';

interface AProviderProps {
  children: ReactNode;
  theme?: {
    isDarkMode: boolean;
    primaryColor: string;
    secondaryColor: string;
  };
}

const UIProvider: FC<AProviderProps> = ({ children, theme }) => {
  return (
    <ThemeContext.Provider value={theme}>
      <ToasterContext.Provider>
        <ModalContext.Provider>
          <GlobalStyles />
          {children}
          <Toaster />
          <Modal />
        </ModalContext.Provider>
      </ToasterContext.Provider>
    </ThemeContext.Provider>
  );
};

export default UIProvider;
