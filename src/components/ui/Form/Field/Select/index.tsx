import { AnimatePresence } from 'framer-motion';
import {
  ReactNode,
  SelectHTMLAttributes,
  SyntheticEvent,
  useEffect,
} from 'react';

import { useOptions } from 'hooks';

import * as S from './styles';
import Icon from '../../../Icon';
import Keyboard from '../../../Keyboard';
import Options, { IOption } from '../../Options';

export interface SelectProps<TOption extends IOption>
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  busy?: boolean;
  children(
    options: TOption[],
    selectValue: (props: TOption) => void,
    activeIndex: number,
  ): ReactNode;
  error?: boolean;
  options?: TOption[];
  selected?: TOption;
  setSelected(value?: TOption): void;
  value?: string | number;
}

const Select = <OptionProps extends IOption>({
  busy,
  children,
  disabled,
  error,
  options = [],
  placeholder,
  selected,
  setSelected,
  value,
  ...props
}: SelectProps<OptionProps>) => {
  const preventEvent = (e: SyntheticEvent) => e.preventDefault();

  const {
    activeIndex,
    closeOptions,
    onDown,
    onEnter,
    onUp,
    optionOpen,
    optionRef,
    selectRef,
    selectValue,
    toggleOptions,
  } = useOptions<OptionProps>({
    options,
    selected,
    setSelected,
  });

  useEffect(() => {
    if (optionOpen && selectRef.current) {
      selectRef.current.focus();
    }
  }, [optionOpen, selectRef]);

  const onSelectClick = () => {
    if (disabled) {
      return;
    }

    toggleOptions();
  };

  return (
    <Keyboard
      onDown={onDown}
      onEnter={onEnter}
      onEsc={closeOptions}
      onUp={onUp}
    >
      <S.Wrapper
        disabled={disabled}
        onClick={onSelectClick}
        ref={selectRef}
        tabIndex={0}
      >
        <S.Field>
          <Keyboard onKeyDown={preventEvent}>
            <S.Control
              {...props}
              error={error}
              onChange={preventEvent}
              onMouseDown={preventEvent}
              placeholderSelected={!!placeholder && !value}
              value={value}
            >
              <option aria-hidden hidden value="">
                {placeholder}
              </option>
              {options.map((option, index) => (
                <option key={`${option.value} + ${index}`} value={option.value}>
                  {option.label}
                </option>
              ))}
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
              {children(options, selectValue, activeIndex!)}
            </Options>
          )}
        </AnimatePresence>
      </S.Wrapper>
    </Keyboard>
  );
};

Select.defaultProps = {
  value: '',
};

export default Select;
