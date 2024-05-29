import {
  isValidElement,
  Children,
  PropsWithChildren,
  ReactElement,
  cloneElement,
} from 'react';

import Input from './Input';
import Lookup from './Lookup';
import MaskedInput from './MaskedInput';
import Multiselect from './MultiSelect/multiselect';
import Select from './Select';
import * as S from './styles';
import TextArea from './TextArea';
import Unit from './Unit';
import IconButton from '../../IconButton';

interface FieldFC {
  (props: PropsWithChildren<S.WrapperProps>): ReactElement<any, any>;
  Input: typeof Input;
  Lookup: typeof Lookup;
  MaskedInput: typeof MaskedInput;
  MultiSelect: typeof Multiselect;
  Select: typeof Select;
  TextArea: typeof TextArea;
  Unit: typeof Unit;
}

const Field: FieldFC = ({
  busy,
  children,
  disabled,
  error,
  highlighted,
  style,
  ...props
}) => {
  return (
    <S.Wrapper
      {...props}
      aria-disabled={busy || disabled}
      busy={busy}
      disabled={disabled}
      error={error}
      highlighted={highlighted}
      style={style}
    >
      {Children.map(children, child => {
        return isValidElement(child)
          ? cloneElement(child, {
              ...(Object.keys(IconButton).some(
                component => child.type === component,
              ) || child.type === Select
                ? { error, disabled }
                : {}),
              ...(Select === child.type || child.type === Multiselect
                ? { error, disabled }
                : {}),
              ...(Multiselect === child.type ||
              Lookup === child.type ||
              MaskedInput === child.type ||
              TextArea === child.type ||
              Input === child.type
                ? { busy, disabled }
                : {}),
            })
          : child;
      })}
    </S.Wrapper>
  );
};

Field.Input = Input;
Field.TextArea = TextArea;
Field.Lookup = Lookup;
Field.MaskedInput = MaskedInput;
Field.Select = Select;
Field.MultiSelect = Multiselect;
Field.Unit = Unit;

export default Field;
