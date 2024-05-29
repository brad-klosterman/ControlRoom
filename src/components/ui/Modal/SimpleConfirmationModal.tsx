import { ButtonProps } from '../Button';

import { SimpleModalProps } from './SimpleModal';
import { SimpleActionModal } from './SimpleActionModal';

interface SimpleConfirmationModalProps
  extends Omit<SimpleModalProps, 'children'> {
  title: string;
  subtitle?: string | undefined;
  info?: string | undefined;
  onConfirm: () => unknown;
  is_loading?: boolean;
  cancel_button?: Omit<ButtonProps, 'children'>;
  confirm_button?: Omit<ButtonProps, 'children'>;
}

const SimpleConfirmationModal = (props: SimpleConfirmationModalProps) => {
  return (
    <SimpleActionModal
      is_open={props.is_open}
      onClose={props.onClose}
      title={props.title}
      subtitle={props.subtitle}
      info={props.info}
      z_index={props.z_index}
      actions={[
        {
          title: 'CANCEL',
          variant: 'other-secondary',
          isLoading: props.is_loading,
          onClick: props.onClose,
          ...props.cancel_button,
        },
        {
          title: 'CONFIRM',
          onClick: props.onConfirm,
          variant: 'primary',
          isLoading: props.is_loading,
          ...props.confirm_button,
        },
      ]}
    />
  );
};

export type { SimpleConfirmationModalProps };
export { SimpleConfirmationModal };
