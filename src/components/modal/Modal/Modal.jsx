// import css from './Modal.module.css'

import { useCallback, useEffect } from 'react';
import { useModal } from 'context';

const Modal = ({ children }) => {
  const { setModalContent } = useModal();
  const closeModal = useCallback(
    e => {
      if (e.target === e.currentTarget || e.code === 'ESCAPE') {
        setModalContent(null);
      }
    },
    [setModalContent]
  );

  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    return () => window.removeEventListener('keydown', closeModal);
  }, [closeModal]);

  return <div></div>;
};

export default Modal;
