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
import { useSelector } from 'react-redux';
import { selectIsError as selectIsAuthError } from '../redux/auth/selectors';
import { selectIsError as selectIsWaterError } from '../redux/water/selectors';
import { selectIsError as selectIsUserError } from '../redux/user/selectors';

const modalContext = createContext();
export const useModal = () => useContext(modalContext);

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);
  const backdropRef = useRef(null);
  const isAuthError = useSelector(selectIsAuthError);
  const isWaterError = useSelector(selectIsWaterError);
  const isUserError = useSelector(selectIsUserError);
  const closeModal = useCallback(e => {
    if (
      e.target === e.currentTarget ||
      e.code === 'Escape' ||
      e.type === 'submit'
    ) {
      document.body.style.overflow = 'visible';
      if (backdropRef.current !== null) {
        backdropRef.current.style.opacity = 0;
      }
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
        !isAuthError &&
        !isWaterError &&
        !isUserError &&
        createPortal(
          <div className={css.modalBackdrop} ref={backdropRef}>
            <Modal>{modalContent}</Modal>
          </div>,
          document.querySelector('#modal-root')
        )}
    </modalContext.Provider>
  );
};
