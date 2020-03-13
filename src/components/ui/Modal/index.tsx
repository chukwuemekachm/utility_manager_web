import * as React from 'react';
import styled from '@emotion/styled';
import { createPortal } from 'react-dom';
interface ModalProps {
  children: React.ReactNode;
}
const { useEffect, useRef } = React;

function Modal({ children }: ModalProps): React.ReactElement<ModalProps> {
  const modalRef = useRef(null);
  if (!modalRef.current) {
    const div = document.createElement('div');
    modalRef.current = div;
  }
  useEffect(() => {
    const modalRoot = document.getElementById('__MODAL__');
    modalRoot.appendChild(modalRef.current);
    return () => modalRoot.removeChild(modalRef.current);
  }, []);
  return createPortal(<Modal.Wrapper>{children}</Modal.Wrapper>, modalRef.current);
}
Modal.Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 0 5px;
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;
export default Modal;
