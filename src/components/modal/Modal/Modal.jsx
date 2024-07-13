import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useModal } from 'context';
import { Icon } from 'shared';
import css from './Modal.module.css';

const Modal = ({ children }) => {
  const { closeModal } = useModal();
  const backdropRef = useRef(null);

  const handleCloseModal = useCallback(
    e => {
      if (e.target === e.currentTarget || e.code === 'Escape') {
        backdropRef.current.style.opacity = 0;
        setTimeout(() => {
          closeModal();
        }, 1000);
      }
    },
    [closeModal]
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
    <div className={css.modalBackdrop} ref={backdropRef}>
      <div className={css.modalWrapper} onClick={handleCloseModal}>
        <div className={css.modalContainer}>
          <button
            className={css.modalButtonClose}
            onClick={handleCloseModal}
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
