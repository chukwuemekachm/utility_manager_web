import * as React from 'react';
import { createPortal } from 'react-dom';
const { useEffect, useRef } = React;

interface ComponentProps {
  children: React.ReactNode;
}

type ModalRefProp = {
  current: Element;
};

export default function withCreatePortal(WrappedComponent, elementId: string) {
  return function(props: ComponentProps) {
    const modalRef: ModalRefProp = useRef({}) as React.MutableRefObject<Element>;
    if (!modalRef.current || !Object.keys(modalRef.current).length) {
      modalRef.current = document.createElement('div');
    }
    useEffect(() => {
      const modalRoot = document.getElementById(elementId);

      modalRoot && modalRoot.appendChild(modalRef.current);
      return (): void => {
        modalRoot && modalRef.current && modalRoot.removeChild(modalRef.current);
      };
    }, []);

    return createPortal(<WrappedComponent>{props.children}</WrappedComponent>, modalRef.current);
  };
}
