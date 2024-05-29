import {
  InputHTMLAttributes,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from 'react';

import { useDebounce, useOptions } from 'hooks';

import * as S from './styles';
import Icon from '../../../Icon';
import Keyboard from '../../../Keyboard';
import Options, { IOption } from '../../Options';

interface LookupProps<OptionProps extends IOption>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'children'> {
  busy?: boolean;
  children(
    options: Array<OptionProps>,
    selectValue: (props: OptionProps) => void,
    activeIndex: number | undefined,
  ): ReactNode;
  debounceTimeout?: number;
  minCharacters?: number;
  onSearch(prop: string): void;
  options?: Array<OptionProps>;
  selected?: OptionProps;
  setSelected(value?: OptionProps): void;
  value?: string;
  null_value_text?: string;
}

const Lookup = <OptionProps extends IOption>({
  busy,
  children,
  debounceTimeout = 500,
  minCharacters = 3,
  name,
  onSearch,
  options = [],
  placeholder,
  selected,
  setSelected,
  null_value_text,
  ...props
}: LookupProps<OptionProps>) => {
  const [val, setVal] = useState<string | null>(null);
  const ref = useRef<HTMLInputElement>(null);

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
  } = useOptions<OptionProps>({
    options,
    selected,
    setSelected,
  });

  const runSearch = useCallback(
    (search: string) => {
      if (search?.length >= minCharacters) {
        onSearch(search);
        openOptions();
      } else {
        closeOptions();
      }
    },
    [onSearch, openOptions, minCharacters],
  );

  const { cancel } = useDebounce(() => runSearch(val ?? ''), debounceTimeout, [
    val,
  ]);

  const onChange = useCallback(
    (event: any) => {
      cancel();
      event.preventDefault();
      setVal(event.target.value);

      if (selected) {
        setSelected();
      }
    },
    [cancel],
  );

  const reset = () => {
    closeOptions();
    setSelected();
    setVal(null);
  };

  const onClickSelect = () => {
    setVal('');
    closeOptions();
  };

  const onSelectOption = (option: OptionProps): void => {
    setVal('');
    selectValue(option);
  };

  const getTextFieldValue = (): string => {
    return selected?.label ?? val ?? null_value_text ?? '';
  };

  return (
    <Keyboard onDown={onDown} onEnter={onEnter} onUp={onUp}>
      <S.Wrapper ref={selectRef}>
        <input
          autoComplete="off"
          onChange={onChange}
          ref={ref}
          {...props}
          id={name}
          onClick={onClickSelect}
          placeholder={placeholder}
          value={getTextFieldValue()}
          onBlur={() => {
            setVal(null);
          }}
        />
        {selected ? (
          <Icon.Cross
            colorKey="emphasise"
            onClick={reset}
            style={{ cursor: 'pointer' }}
          />
        ) : (
          <>
            {busy ? (
              <Icon.Loading colorKey="default" />
            ) : (
              <Icon.MagnifyingGlass colorKey="primary" />
            )}
          </>
        )}

        {optionOpen && (
          <Options ref={optionRef}>
            {children(options, onSelectOption, activeIndex)}
          </Options>
        )}
      </S.Wrapper>
    </Keyboard>
  );
};

Lookup.defaultProps = {
  busy: false,
  debounceTimeout: 500,
  minCharacters: 3,
  options: [],
  selected: undefined,
  value: '',
};

export default Lookup;
