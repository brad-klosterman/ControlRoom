import {
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState
} from 'react';

export const ExpanderContext = createContext<{
  expanded_key: string | null;
  toggleExpansion?: (expanded_key: string | null) => void;
}>({
  expanded_key: null,
  toggleExpansion: () => null
});

export interface ExpanderProps {
  id: string;
  children: ReactNode;
  onExpansion?: (expanded_key: string | null) => void;
}

const Expander: {
  (props: ExpanderProps): ReactElement;
  // Node: typeof ExpanderNode;
} = props => {
  const [expanded_key, setExpandedKey] = useState<string | null>(null);

  const toggleExpansion = () => {};

  return (
    <>
      <ExpanderContext.Provider
        value={{
          toggleExpansion,
          expanded_key
        }}
      >
        {/*{items.map(({ below, ...item }, index) => {*/}
        {/*  if (below) {*/}
        {/*    return cloneElement(below, {});*/}
        {/*  }*/}

        {/*  return <ExpanderItem item={item} key={index} />;*/}
        {/*})}*/}
      </ExpanderContext.Provider>
    </>
  );
};

export function useExpander() {
  return useContext(ExpanderContext);
}

// Expander.Node = ExpanderNode;

export default Expander;
