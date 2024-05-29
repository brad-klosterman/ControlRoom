import { useContext } from 'react';

import Toaster from 'context/toaster';
import type { ToasterContextState } from 'context/toaster';

export default function useToasterContext(): ToasterContextState {
  return useContext(Toaster.Context);
}
