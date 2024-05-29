import { ReactNode } from 'react';
import { FieldValues, Path, PathValue, SubmitHandler } from 'react-hook-form';

import { ButtonVariants } from 'components/ui/Button';

export type ModalState = {
  close: () => void;
  content: ModalContent<any> | null;
  isOpen: boolean;
  open: <Fields extends FieldValues>(content: ModalContent<Fields>) => void;
  updateContent: <Fields extends FieldValues>(
    content: ModalContent<Fields>,
  ) => void;
};

export interface ModalContent<Fields extends FieldValues> {
  title: string;
  subtitle?: string;
  info?: string | undefined;
  actions?: ModalActionButton[];
  component?: () => ReactNode;
  form?: ModalFormField<Fields>[];
  onConfirm?: SubmitHandler<Fields>;
}

export type ModalFormConfig<T extends FieldValues> = {
  title: string;
  subtitle?: string;
  actions: ModalActionButton[];
  form: ModalFormField<T>[];
};

export type ModalActionButton = {
  text?: string;
  variant?: ButtonVariants;
  handleClick?: (value?: any) => any;
  type?: 'confirm' | 'confirm_dangerous' | 'delete' | 'cancel';
};

export type ModalFormField<T> = {
  name: Path<T>;
  label: string;
  default_value?: PathValue<T, Path<T>>;
  required?: boolean;
} & (
  | {
      type:
        | 'Input'
        | 'DatePicker'
        | 'MonthPicker'
        | 'AlarmTypes'
        | 'Currency'
        | 'TextArea'
        | 'Time';
    }
  | {
      type: 'Select' | 'MultiSelect';
      options: { label: string; value: PathValue<T, Path<T>> }[];
    }
);
