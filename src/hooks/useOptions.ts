import { useCallback, useEffect, useRef, useState } from 'react';

import useClickOutside from './useClickOutside';

interface UseOptions<Option> {
  closeCallback?(): void;
  options?: Array<Option>;
  selected?: Option;
  setSelected(value?: Option): void;
}

export default function useOptions<Option extends Record<string, any>>({
  closeCallback,
  options = [],
  selected,
  setSelected,
}: UseOptions<Option>) {
  const [optionOpen, setOptionsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<undefined | number>(0);
  const optionRef = useRef<HTMLDivElement>(null);

  const closeOptions = useCallback(() => {
    setOptionsOpen(false);

    if (closeCallback) {
      closeCallback();
    }
  }, [closeCallback]);

  const openOptions = () => setOptionsOpen(true);
  const toggleOptions = () => setOptionsOpen(!optionOpen);

  const selectRef = useRef<HTMLDivElement>(null);
  useClickOutside(closeOptions, [selectRef], optionOpen);

  const selectValue = (option: Option) => {
    setSelected(option);
    closeOptions();
  };

  const setScroll = useCallback((index: number) => {
    setTimeout(() => {
      if (optionRef.current) {
        const child = optionRef.current.children[index] as HTMLElement;
        optionRef.current.scrollTo({ top: child.offsetTop });
      }
    }, 10);
  }, []);

  const setOpenActive = useCallback(() => {
    const openIndex = options.reduce((acc, cur, index) => {
      return JSON.stringify(cur) === JSON.stringify(selected) ? index : acc;
    }, 0);

    setActiveIndex(openIndex);
    setScroll(openIndex);
  }, [options, selected, setScroll]);

  useEffect(() => {
    if (options.length > 0) {
      setOpenActive();
    }
  }, [options, setOpenActive]);

  const onUp = useCallback(
    (event: any) => {
      event.preventDefault();
      let nextActive = activeIndex;

      if (nextActive === undefined) {
        nextActive = -1;
      } else if (typeof nextActive === 'number') {
        if (nextActive <= 0) {
          nextActive = (options.length || 0) - 1;
        } else {
          nextActive -= 1;
        }
      }

      setActiveIndex(nextActive);
      setScroll(nextActive);
    },
    [activeIndex, options, setScroll],
  );

  const onDown = useCallback(
    (event: any) => {
      event.preventDefault();
      let nextActive = activeIndex;

      if (nextActive === undefined) {
        nextActive = 0;
      } else if (typeof nextActive === 'number') {
        if (nextActive >= (options.length || 0) - 1) {
          nextActive = 0;
        } else {
          nextActive += 1;
        }
      }

      setActiveIndex(nextActive);
      setScroll(nextActive);
    },
    [activeIndex, options, setScroll],
  );

  const onEnter = useCallback(
    (event: any) => {
      event.preventDefault();
      setSelected(options[activeIndex ?? 0]);
      closeOptions();
    },
    [activeIndex, closeOptions, options, setSelected],
  );

  return {
    activeIndex,
    closeOptions,
    onDown,
    onEnter,
    onUp,
    openOptions,
    optionOpen,
    optionRef,
    selectRef,
    selectValue,
    toggleOptions,
  };
}
