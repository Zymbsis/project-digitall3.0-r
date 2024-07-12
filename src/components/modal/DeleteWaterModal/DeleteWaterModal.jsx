// import css from './DeleteWaterModal.module.css'

const DeleteWaterModal = () => {
<<<<<<< Updated upstream
  return <div></div>;
=======
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
>>>>>>> Stashed changes
};

export default DeleteWaterModal;
