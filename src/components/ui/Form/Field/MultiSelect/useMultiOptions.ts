import { useCallback, useRef, useState } from 'react';

import useClickOutside from 'hooks/useClickOutside';

import { IOption } from '../../Options';

interface UseOptions<Option> {
  closeCallback?(): void;
  options?: Array<Option>;
  setSelected(value: Array<string | number>): void;
  values: Array<string | number>;
}

export default function useOptions<Option extends IOption>({
  closeCallback,
  options = [],
  setSelected,
  values,
}: UseOptions<Option>) {
  const [optionOpen, setOptionsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | undefined>();
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

  const selectValue = (option: IOption) => {
    let newValues: Array<string | number> = [];

    if (option && values.includes(option.value)) {
      newValues = [...values].filter(v => v !== option.value);
    } else {
      newValues = [...values, option.value];
    }

    setSelected(newValues);
  };

  const setScroll = useCallback((index: number) => {
    setTimeout(() => {
      if (optionRef.current) {
        const child = optionRef.current.children[index] as HTMLElement;

        if (child) {
          optionRef.current.scrollTo({ top: child.offsetTop });
        }
      }
    }, 10);
  }, []);

  // const setOpenActive = useCallback(() => {
  //   let openIndex = 0;
  //
  //   if (values) {
  //     openIndex = options.findIndex(option => values.includes(option.value));
  //   }
  //
  //   setActiveIndex(openIndex);
  //   setScroll(openIndex);
  // }, [options, values, setScroll]);
  //
  // useEffect(() => {
  //   if (options.length > 0) {
  //     setOpenActive();
  //   }
  // }, [options, setOpenActive]);

  const onUp = useCallback(
    (event: any) => {
      event.preventDefault();
      let nextActive = activeIndex;

      if (nextActive === undefined) {
        nextActive = -1;
      } else if (typeof nextActive === 'number') {
        if (nextActive <= 0) {
          nextActive = (options?.length || 0) - 1;
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
        if (nextActive >= (options?.length || 0) - 1) {
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
      selectValue(options[activeIndex ?? 0]);
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
