import { ReactNode } from 'react';
import Button, { ButtonProps } from '../Button';
import { SimpleModal, SimpleModalProps } from './SimpleModal';
import { ModalTitle } from './ModalTitle';
import { ModalActionButtons, ModalContent } from './styles';

interface ModalButton extends Omit<ButtonProps, 'children'> {
  title: string;
}

interface SimpleActionModalProps extends Omit<SimpleModalProps, 'children'> {
  title: string;
  subtitle?: string | null | undefined;
  info?: string | null | undefined;
  actions: ModalButton[];
  children?: ReactNode;
}

const SimpleActionModal = (props: SimpleActionModalProps) => {
  return (
    <SimpleModal
      is_open={props.is_open}
      onClose={props.onClose}
      show_close_button={props.show_close_button}
      z_index={props.z_index}
    >
      <ModalTitle
        title={props.title}
        subtitle={props.subtitle}
        info={props.info}
      />
      {props.children && <ModalContent layout>{props.children}</ModalContent>}
      {Boolean(props.actions.length) && (
        <ModalActionButtons layout>
          {props.actions.map(({ title, ...button_props }, index) => (
            <Button {...button_props} key={index} style={{ minWidth: '14rem' }}>
              {title}
            </Button>
          ))}
        </ModalActionButtons>
      )}
    </SimpleModal>
  );
};

export type { SimpleActionModalProps };
export { SimpleActionModal };
