// import css from './DeleteWaterModal.module.css'

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button } from 'shared';
import { useModal } from '../../context';
import { deleteWaterRecord,} from 'redux/actions';


const DeleteWaterModal = () => {
  const { closeModal } = useModal();

  const handleDelete = () => {
    // dispatch action to delete water record
    dispatch(deleteWaterRecord());
  };

  const handleCancel = () => {
    closeModal(); // close the modal
  };

  return (
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
  );
};

export default DeleteWaterModal;
