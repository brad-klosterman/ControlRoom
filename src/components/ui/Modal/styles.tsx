import { CSSProperties, ReactNode } from 'react';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { DEFAULT_MODAL_WIDTH } from './modal.config';

const ModalOverlay = styled.div(
  (props: { z_index: number }) => css`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: #0a0a0a;
    opacity: 0.9;
    z-index: ${props.z_index};
  `,
);

const ModalContainer = styled.div(
  (props: { z_index: number }) => css`
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: ${props.z_index};
  `,
);

const ModalBox = styled(motion.div)(
  ({ theme }) => css`
    background-color: ${theme.colors.base[600]};
    gap: ${theme.space.xxLarge};
    border-radius: 0.5rem;
    z-index: 92;
    align-items: center;
    justify-content: center;
  `,
);

const ModalBoxAnimated = (props: {
  children: ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <ModalBox
      animate={{
        opacity: 1,
        transition: { type: 'tween' },
        y: 0,
      }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: -400 }}
      layoutId="modal"
      style={props.style}
    >
      {props.children}
    </ModalBox>
  );
};

const ModalInner = styled(motion.div)(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${theme.space.xxLarge};
    width: 100%;
  `,
);

const ModalTitleContainer = styled(motion.div)(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.space.regular};
    width: 100%;
  `,
);

const ModalContent = styled(motion.div)(
  ({ theme }) => css`
    display: flex;
    margin-top: ${theme.space.xxLarge};
    width: 100%;
  `,
);

const ModalFormContent = styled(motion.div)(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space.regular};
    align-items: center;
    justify-content: center;
    min-width: ${DEFAULT_MODAL_WIDTH};
    width: 100%;
  `,
);

const ModalActionButtons = styled(motion.div)(
  ({ theme }) => css`
    display: flex;
    margin-top: 5rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: ${theme.space.regular};
  `,
);

const ModalCloseButton = styled.button(
  ({ z_index }: { z_index: number }) => css`
    border-radius: 50px;
    background-color: #ddd;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    font-size: 18px;
    height: 50px;
    width: 50px;
    top: -25px;
    right: -25px;
    position: absolute;
    transition: 0.1s ease-in-out;
    z-index: ${z_index};
    &:hover {
      background-color: #fff;
      box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.75);
    }
  `,
);

export {
  ModalOverlay,
  ModalContainer,
  ModalBox,
  ModalBoxAnimated,
  ModalTitleContainer,
  ModalInner,
  ModalContent,
  ModalFormContent,
  ModalActionButtons,
  ModalCloseButton,
};
