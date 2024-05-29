import React, { createContext, useState, type ReactNode } from 'react';
import { FieldValues } from 'react-hook-form';

import type { ModalContent, ModalState } from './types';

const Context = createContext<ModalState>({
  close: () => {},
  content: null,
  isOpen: false,
  open: () => {},
  updateContent: () => {},
});

const Provider = (props: { children: ReactNode }) => {
  const [content, setContent] = useState<ModalContent<any> | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const open = <Fields extends FieldValues>(values: ModalContent<Fields>) => {
    setContent(values);
    setIsOpen(true);
  };

  const close = () => {
    setContent(null);
    setIsOpen(false);
  };

  const updateContent = <Fields extends FieldValues>(
    values: ModalContent<Fields>,
  ) => {
    setContent(values);
  };

  return (
    <Context.Provider value={{ close, content, isOpen, open, updateContent }}>
      {props.children}
    </Context.Provider>
  );
};

function useContext(): ModalState {
  return React.useContext(Context);
}

export default { Context, Provider, useContext };
