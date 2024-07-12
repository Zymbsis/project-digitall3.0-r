// import css from './DeleteWaterModal.module.css'

import React, { useState } from 'eact';
import axios from 'axios';
import { useDispatch } from 'eact-redux';
import { closeModal } from '../../redux/modalSlice';
import { updateWaterData } from '../../redux/waterSlice';

const DeleteWaterModal = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      const response = await axios.delete('/api/water/delete'); // replace with your backend API endpoint
      if (response.status === 200) {
        dispatch(updateWaterData()); // update water data in Redux store
        dispatch(closeModal()); // close the modal
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCancel = () => {
    dispatch(closeModal()); // close the modal
  };

  return (
    <div className="modal-content">
      <h2>Delete Water Record</h2>
      <p>Are you sure you want to delete this water record?</p>
      {error && <div className="error-notification">{error}</div>}
      <button className="button" onClick={handleDelete}>
        Delete
      </button>
      <button className="button" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
};

export default DeleteWaterModal;
