import { Children, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useModal } from 'context';
import { Icon } from 'shared';
import css from './Modal.module.css';

const Modal = ({ children }) => {
  const { setModalContent } = useModal();
  const backdropRef = useRef(null);

  const closeModal = useCallback(
    e => {
      if (e.target === e.currentTarget || e.code === 'Escape') {
        backdropRef.current.style.opacity = 0;
        document.body.style.overflow = 'visible';
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
      document.body.style.overflow = 'hidden';
    }, 0);

    return () => {
      window.removeEventListener('keydown', closeModal);
      clearTimeout(timer);
    };
  }, [closeModal, children]);

  return createPortal(
    <div className={css.modalBackdrop} ref={backdropRef}>
      <div className={css.modalWrapper} onClick={closeModal}>
        <div className={css.modalContainer}>
          <button
            className={css.modalButtonClose}
            onClick={closeModal}
            aria-label="close-modal-window-button"
          >
            <Icon iconId="icon-x" className={css.iconClose} />
          </button>
          {children}
        </div>
      </div>
    </div>,
    document.querySelector('#modal-root')
  );
};

export default Modal;
