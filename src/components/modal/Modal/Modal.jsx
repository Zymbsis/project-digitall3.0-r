import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useModal } from 'context';
import { Container, Icon } from 'shared';
import css from './Modal.module.css';

const Modal = ({ children }) => {
  const { setModalContent } = useModal();

  const closeModal = useCallback(
    e => {
      if (e.target === e.currentTarget || e.code === 'Escape') {
        setModalContent(null);
      }
    },
    [setModalContent]
  );

  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    return () => window.removeEventListener('keydown', closeModal);
  }, [closeModal]);

  return createPortal(
    <div className={css.modalBackdrop} onClick={closeModal}>
      <Container className={css.test}>
        <div className={css.modalContainer}>
          <button className={css.modalButtonClose} onClick={closeModal}>
            <Icon iconId="icon-x" className={css.iconClose} />
          </button>
          {children}
        </div>
      </Container>
    </div>,
    document.querySelector('#modal-root')
  );
};

export default Modal;
