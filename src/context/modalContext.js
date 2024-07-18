import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { Modal } from '../components';
import css from './modal.module.css';

const modalContext = createContext();
export const useModal = () => useContext(modalContext);

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);
  const backdropRef = useRef(null);

  const closeModal = useCallback(e => {
    if (
      e.target === e.currentTarget ||
      e.code === 'Escape' ||
      e.target.nodeName === 'FORM'
    ) {
      document.body.style.overflow = 'visible';
      backdropRef.current.style.opacity = 0;
      setTimeout(() => {
        setModalContent(null);
      }, 700);
    }
  }, []);

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

  const openModal = content => {
    document.body.style.overflow = 'hidden';
    setModalContent(content);
    setTimeout(() => {
      backdropRef.current.style.opacity = 1;
    }, 0);
  };

  return (
    <modalContext.Provider value={{ modalContent, openModal, closeModal }}>
      {children}
      {modalContent &&
        createPortal(
          <div className={css.modalBackdrop} ref={backdropRef}>
            <Modal>{modalContent}</Modal>
          </div>,
          document.querySelector('#modal-root')
        )}
    </modalContext.Provider>
  );
};
