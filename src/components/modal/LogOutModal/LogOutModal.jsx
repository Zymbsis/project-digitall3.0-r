import css from './LogOutModal.module.css';

import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/operations';
import { useModal } from '../../../context';
import { Button, Title } from 'shared';

const LogOutModal = () => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleLogOut = e => {
    dispatch(logOut());
    closeModal(e);
  };

  const handleCancel = e => {
    closeModal(e);
  };

  return (
    <div className={css.modalContent}>
      <Title className={css.title}>Log out</Title>
      <p className={css.subtitle}>Do you really want to leave?</p>
      <div className={css.buttonWrapper}>
        <Button className={css.deleteButton} onClick={handleLogOut}>
          Log Out
        </Button>
        <Button className={css.cancelButton} onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default LogOutModal;
