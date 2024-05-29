import { MutableRefObject, useCallback, useEffect } from 'react';

export default function useClickOutside<T extends Element | null>(
  callback: (props?: any) => any,
  refs: Array<MutableRefObject<T>>,
  condition = true,
) {
  const callbackHandler = useCallback(callback, []);

  useEffect(() => {
    const handleClick = ({ target }: MouseEvent | TouchEvent) => {
      const isRef = refs.some(ref => ref.current?.contains(target as Node));
      if (!isRef) callbackHandler();
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') callbackHandler();
    };

    if (condition) {
      document.addEventListener('mousedown', handleClick);
      document.addEventListener('touchstart', handleClick);
      document.addEventListener('keydown', handleKeydown, true);
    }

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
      document.removeEventListener('keydown', handleKeydown, true);
    };
  }, [callbackHandler, condition, refs]);
}
