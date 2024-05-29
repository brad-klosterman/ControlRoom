import { motion, AnimatePresence, AnimationProps } from 'framer-motion';
import * as React from 'react';
import { ReactNode } from 'react';

import { Flex } from 'components';
import {
  BackdropAnimated,
  SearchModalAnimated
} from 'components/table/search/styles';

// Default modal animation

type ModalProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
};

export const SearchModal = ({ children, setVisible, visible }: ModalProps) => {
  return (
    <AnimatePresence>
      {visible && (
        <>
          <SearchModalAnimated>{children}</SearchModalAnimated>
          <BackdropAnimated onClick={() => setVisible(false)} />
        </>
      )}
    </AnimatePresence>
  );
};
