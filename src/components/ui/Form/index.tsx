import {
  FormHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
  ReactElement,
} from 'react';
import styled from 'styled-components';

import Error from './Error';
import Field from './Field';
import { ControlledInput } from './Field/Input/controlled';
import { ControlledTextArea } from './Field/TextArea/controlled';
import FieldGroup from './FieldGroup';
import Info from './Info';
import Label from './Label';
import Legend from './Legend';
import Option from './Options/Option';
import ControlledSelect from './Field/Select/controlled';
import { ControlledPasswordInput } from './Field/Input/password.controlled';
import { ControlledMaskedInput } from './Field/MaskedInput/masked-input.controlled';
import { ReadonlyInput } from './Field/Input/readonly';
import { ControlledDatePicker } from '../DatePicker/controlled';

export type { IOption } from './Options';

const FieldSet = styled.fieldset`
  padding: 0;
  margin-bottom: ${({ theme }) => theme.space.xxLarge};
  border: none;
`;

interface FormFC {
  (
    props: PropsWithChildren<
      HTMLAttributes<HTMLFormElement> & FormHTMLAttributes<HTMLFormElement>
    >,
  ): ReactElement<any, any>;
  Error: typeof Error;
  Field: typeof Field;
  FieldGroup: typeof FieldGroup;
  FieldSet: typeof FieldSet;
  Info: typeof Info;
  Input: typeof ControlledInput;
  MaskedInput: typeof ControlledMaskedInput;
  Label: typeof Label;
  Legend: typeof Legend;
  Option: typeof Option;
  Select: typeof ControlledSelect;
  TextArea: typeof ControlledTextArea;
  Password: typeof ControlledPasswordInput;
  ReadonlyInput: typeof ReadonlyInput;
  DatePicker: typeof ControlledDatePicker;
}

const Form: FormFC = ({ children, ...props }) => {
  return (
    <form autoComplete="off" {...props}>
      {children}
    </form>
  );
};

Form.FieldGroup = FieldGroup;
Form.Label = Label;
Form.Field = Field;
Form.Info = Info;
Form.Select = ControlledSelect;
Form.Option = Option;
Form.Error = Error;
Form.Legend = Legend;
Form.FieldSet = FieldSet;
Form.Input = ControlledInput;
Form.ReadonlyInput = ReadonlyInput;
Form.MaskedInput = ControlledMaskedInput;
Form.TextArea = ControlledTextArea;
Form.Password = ControlledPasswordInput;
Form.DatePicker = ControlledDatePicker;

export default Form;
