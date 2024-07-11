import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useModal } from 'context';
import { Container, Icon } from 'shared';
import css from './Modal.module.css';

const Modal = ({ children }) => {
  const { setModalContent } = useModal();
  const backdropRef = useRef();

  const closeModal = useCallback(
    e => {
      if (e.target === e.currentTarget || e.code === 'Escape') {
        backdropRef.current.style.opacity = 0;
        setTimeout(() => {
          setModalContent(null);
        }, 1000);
      }
    },
    [setModalContent]
  );

  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    const timer = setTimeout(() => {
      if (backdropRef.current === null) return;
      backdropRef.current.style.opacity = 1;
    }, 0);
    return () => {
      window.removeEventListener('keydown', closeModal);
      clearTimeout(timer);
    };
  }, [closeModal]);

  return createPortal(
    <div className={css.modalBackdrop} onClick={closeModal} ref={backdropRef}>
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
