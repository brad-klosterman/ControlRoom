import { MutableRefObject, useState, isValidElement } from 'react';

import useClickOutside from './useClickOutside';

type Action =
  | { label: string; status?: boolean; subLabel?: string }[]
  | (() => void);

export default function useListingMenu<Ref extends Element | null>(
  ref: MutableRefObject<Ref>,
  action?: Action,
) {
  const [open, setOpen] = useState(false);
  useClickOutside(() => setOpen(false), [ref], open);
  if (!action) return {};

  const toggleMenu = () => {
    setOpen(!open);
  };

  const hasMenu = Array.isArray(action) || isValidElement(action);

  return {
    action: hasMenu ? toggleMenu : (action as () => void),
    hasMenu,
    open,
  };
}
