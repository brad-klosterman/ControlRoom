import { createContext, SyntheticEvent, useContext } from 'react';

interface ExpanderNodeContextType {
  close?: (event: SyntheticEvent) => void;
  isOpen: boolean;
}

const ExpanderNodeContext = createContext<ExpanderNodeContextType>({
  isOpen: false,
});

function useExpanderNodeContext() {
  return useContext(ExpanderNodeContext);
}

export type { ExpanderNodeContextType };
export { ExpanderNodeContext, useExpanderNodeContext };
