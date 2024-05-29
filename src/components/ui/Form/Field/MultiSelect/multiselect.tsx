import { AnimatePresence } from 'framer-motion';
import {
  ReactNode,
  SelectHTMLAttributes,
  SyntheticEvent,
  useEffect,
} from 'react';

import * as S from './styles';
import useMultiOptions from './useMultiOptions';
import Icon from '../../../Icon';
import Keyboard from '../../../Keyboard';
import Options, { IOption } from '../../Options';

export interface MultiSelectProps<OptionProps extends IOption>
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  busy?: boolean;
  children(
    options: Array<OptionProps>,
    selectValue: (props: OptionProps) => void,
    activeIndex: number | undefined,
  ): ReactNode;
  error?: boolean;
  options?: Array<OptionProps>;
  selected?: OptionProps; // is this used?
  setSelected(value: Array<string | number>): void;
  values: Array<string> | Array<number>;
}

const MultiSelect = <OptionProps extends IOption>({
  busy,
  children,
  disabled,
  error,
  options = [],
  placeholder,
  setSelected,
  values = [],
}: MultiSelectProps<OptionProps>) => {
  const preventEvent = (e: SyntheticEvent) => e.preventDefault();

  const {
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
  } = useMultiOptions<OptionProps>({
    options,
    setSelected,
    values,
  });

  useEffect(() => {
    if (optionOpen && selectRef.current) {
      selectRef.current.focus();
    }
  }, [optionOpen, selectRef]);

  const renderSelected = [...values].reduce(
    (acc: string, cur: string | number): string => {
      const found = options?.find(option => option.value === cur);

      if (found) {
        if (acc) {
          return acc + '  |  ' + found.label;
        }

        return found.label;
      }

      return acc;
    },
    '',
  );

  const onSelectClick = () => {
    if (disabled) {
      return;
    }

    if (optionOpen) {
      closeOptions();
      return;
    }

    openOptions();
  };

  return (
    <Keyboard
      onDown={onDown}
      onEnter={onEnter}
      onEsc={closeOptions}
      onUp={onUp}
    >
      <S.Wrapper ref={selectRef} tabIndex={0} disabled={disabled}>
        <S.Field onClick={onSelectClick}>
          <Keyboard onKeyDown={preventEvent}>
            <S.Control
              error={error}
              onChange={preventEvent}
              onMouseDown={preventEvent}
              placeholderSelected={!!placeholder && !values}
              value={'1'}
            >
              <option aria-hidden hidden value="">
                {placeholder}
              </option>
              <option value={'1'}>{renderSelected}</option>
            </S.Control>
          </Keyboard>
        </S.Field>
        {busy ? (
          <Icon.Loading colorKey="primary" />
        ) : (
          <Icon.ArrowDown colorKey="primary" />
        )}
        <AnimatePresence>
          {optionOpen && !disabled && (
            <Options ref={optionRef}>
              {children(options, selectValue, activeIndex)}
            </Options>
          )}
        </AnimatePresence>
      </S.Wrapper>
    </Keyboard>
  );
};

MultiSelect.defaultProps = {
  value: '',
};

export default MultiSelect;
