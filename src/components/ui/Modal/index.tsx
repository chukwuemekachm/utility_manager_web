import * as React from 'react';
import styled from '@emotion/styled';
import withCreatePortal from 'components/HOC/withCreatePortal';

interface ModalProps {
  children: React.ReactNode;
}

export function Modal({ children }: ModalProps): React.ReactElement<ModalProps> {
  return <Modal.Wrapper>{children}</Modal.Wrapper>;
}
Modal.Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding: 0 5px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content:

  center;
  overflow: auto;
`;
export default withCreatePortal(Modal, '__MODAL__');
