import { CSSProperties, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';

import { DEFAULT_MODAL_Z_INDEX } from './modal.config';
import {
  ModalOverlay,
  ModalContainer,
  ModalBoxAnimated,
  ModalInner,
  ModalCloseButton,
} from './styles';

interface SimpleModalProps {
  is_open: boolean;
  children: ReactNode;
  onClose?: () => unknown;
  show_close_button?: boolean;
  close_on_escape?: boolean;
  z_index?: number;
  box_style?: CSSProperties;
}

const SimpleModal = ({
  is_open,
  onClose,
  children,
  z_index = DEFAULT_MODAL_Z_INDEX,
  box_style,
  show_close_button = false,
  close_on_escape = false,
}: SimpleModalProps) => {
  useEffect(() => {
    if (!close_on_escape) {
      return;
    }

    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        if (onClose) onClose();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [close_on_escape]);

  if (!is_open) {
    return null;
  }

  return createPortal(
    <>
      <ModalOverlay z_index={z_index} />
      <AnimatePresence>
        <ModalContainer z_index={DEFAULT_MODAL_Z_INDEX + 1}>
          <ModalBoxAnimated style={box_style}>
            {show_close_button && (
              <ModalCloseButton z_index={z_index + 2} onClick={onClose}>
                X
              </ModalCloseButton>
            )}
            <ModalInner>{children}</ModalInner>
          </ModalBoxAnimated>
        </ModalContainer>
      </AnimatePresence>
    </>,
    document.body,
  );
};

export type { SimpleModalProps };
export { SimpleModal };
