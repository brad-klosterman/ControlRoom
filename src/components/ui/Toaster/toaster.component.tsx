import { AnimatePresence } from 'framer-motion';
import React from 'react';

import { useToasterContext } from 'hooks';

import Toast from './Toast';
import * as S from './toaster.styles';

export type { ToastProps } from './Toast';

const Toaster: React.FC = () => {
  const toaster = useToasterContext();

  return (
    <S.Wrapper>
      <AnimatePresence>
        {toaster.slices.map(slice => (
          <Toast {...slice} key={slice.id} />
        ))}
      </AnimatePresence>
    </S.Wrapper>
  );
};

export default Toaster;
