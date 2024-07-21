import css from './DeleteWaterModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Title } from 'shared';
import { useModal } from 'context';
import { deleteWaterIntake } from '../../../redux/water/operations';
import { selectError } from '../../../redux/water/selectors';
import toast from 'react-hot-toast';

const DeleteWaterModal = ({ id }) => {
  const dispatch = useDispatch();
  const currentError = useSelector(selectError);
  const { closeModal } = useModal();

  const handleDelete = e => {
    // dispatch(deleteWaterIntake(id));
    const promise = dispatch(deleteWaterIntake(id)).unwrap();

    toast.promise(promise, {
      pending: 'The data is deleted...',
      success: <b>Water portion successfully deleted</b>,
      error: <b>Something went wrong. ({currentError}).</b>,
    });

    closeModal(e);
  };
  const handleCancel = e => {
    closeModal(e);
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
