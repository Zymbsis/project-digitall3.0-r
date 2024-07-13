import css from './DeleteWaterModal.module.css';
// import { useDispatch } from 'react-redux';
// import { deleteWaterRecord } from 'redux/actions';
import { Button, Title } from 'shared';
import { useModal } from 'context';

const DeleteWaterModal = () => {
  // const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleDelete = () => {
    // dispatch(deleteWaterRecord());
    closeModal();
  };
  const handleCancel = () => {
    closeModal();
  };

  return (
    <div className={css.modalContent}>
      <Title className={css.title}>Delete entry</Title>
      <p className={css.subtitle}>Are you sure you want to delete the entry?</p>
      <div className={css.buttonWrapper}>
        <Button className={css.deleteButton} onClick={handleDelete}>
          Delete
        </Button>
        <Button className={css.cancelButton} onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default DeleteWaterModal;
