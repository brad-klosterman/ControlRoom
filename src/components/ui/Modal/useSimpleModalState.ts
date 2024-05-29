import { useState } from 'react';

interface SimpleModalState {
  is_open: boolean;
  open: () => void;
  close: () => void;
}

const useSimpleModalState = (): SimpleModalState => {
  const [is_open, setIsOpen] = useState(false);

  const open = (): void => {
    setIsOpen(true);
  };

  const close = (): void => {
    setIsOpen(false);
  };

  return {
    is_open,
    open,
    close,
  };
};

export type { SimpleModalState };
export { useSimpleModalState };
