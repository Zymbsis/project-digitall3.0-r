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

    Children.map(children, child => {
      if (
        child.type.name === 'UserSettingsForm' &&
        backdropRef.current !== null
      ) {
        backdropRef.current.classList.add(css.optionClass);
      }
    });
    return () => {
      window.removeEventListener('keydown', closeModal);
      clearTimeout(timer);
    };
  }, [closeModal, children]);

  return createPortal(
    <div className={css.modalBackdrop} onClick={closeModal} ref={backdropRef}>
      <div className={css.modalContainer}>
        <button className={css.modalButtonClose} onClick={closeModal}>
          <Icon iconId="icon-x" className={css.iconClose} />
        </button>
        {children}
      </div>
    </div>,
    document.querySelector('#modal-root')
  );
};

export default Modal;
