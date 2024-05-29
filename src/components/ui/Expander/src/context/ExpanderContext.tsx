import { createContext, SyntheticEvent, useContext } from 'react';

interface ExpanderContextType {
  expandedKeys: string[];
  onToggle?: (event: SyntheticEvent, toggledKey: string) => void;
  setExpandedKeys: (keys: Array<string>) => void;
}

const ExpanderContext = createContext<ExpanderContextType>({
  expandedKeys: [],
  setExpandedKeys: () => null,
});

function useExpanderContext() {
  return useContext(ExpanderContext);
}

export { ExpanderContext, useExpanderContext };
export type { ExpanderContextType };
