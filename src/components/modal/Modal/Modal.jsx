import { useModal } from 'context';
import { Icon } from 'shared';
import css from './Modal.module.css';

const Modal = ({ children }) => {
  const { closeModal } = useModal();

  return (
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
  );
};

export default Modal;
