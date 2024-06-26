import { useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalChildProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const Modal = ({ children }: { children: React.FC<ModalChildProps> }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {children({
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false)
      })}
      {createPortal(
        <div>
          <h1>Modal</h1>
        </div>,
        document.getElementById('modal-root')!
      )}
    </>
  );
};

const Parent = () => {
  return (
    <Modal>
      {props => {
        return (
          <>
            <button onClick={props.openModal}>Open Modal</button>
            <button onClick={props.closeModal}>Close Modal</button>
          </>
        );
      }}
    </Modal>
  );
};
