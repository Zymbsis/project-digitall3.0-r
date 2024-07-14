import css from './DeleteWaterModal.module.css';
// import { useDispatch } from 'react-redux';
// import { deleteWaterRecord } from 'redux/actions';
import { Button, Title } from 'shared';
import { useModal } from 'context';

const DeleteWaterModal = () => {
  const { closeModal } = useModal();

  const handleDelete = () => {

    dispatch(deleteWaterRecord());
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <Modal onClose={handleCancel}>
      <div className="modal-content">
        <h2 className="title">Delete entry</h2>
        <p>Are you sure you want to delete the entry?</p>
        <Button className="button" type="button" onClick={handleDelete}>
          Delete
        </Button>
        <Button className="button" type="button" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </Modal>
  );

  // const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleDelete = e => {
    // dispatch(deleteWaterRecord());
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
