import { createContext, useState } from 'react';

import type { ToastProps } from 'components';

export interface ToasterContextState {
  add: (slice: ToastProps) => void;
  clear: () => void;
  dismiss: (id: string) => void;
  slices: ToastProps[];
}

const ToasterContext = createContext<ToasterContextState>({
  add: () => {},
  clear: () => {},
  dismiss: () => {},
  slices: [],
});

const ToasterProvider = ({ children }: { children: any }) => {
  const [slices, setSlices] = useState<ToastProps[]>([]);

  const add = (slice: ToastProps) => {
    setSlices(prev => {
      const isDuplicate = prev.some(prevSlice => prevSlice.id === slice.id);
      return isDuplicate ? prev : [...prev, slice];
    });
  };

  const dismiss = (id: string) => {
    setSlices(prev => prev.filter(slice => slice.id !== id));
  };

  const clear = () => setSlices([]);

  return (
    <ToasterContext.Provider value={{ add, clear, dismiss, slices }}>
      {children}
    </ToasterContext.Provider>
  );
};

export default { Context: ToasterContext, Provider: ToasterProvider };
