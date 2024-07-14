// import css from './LogOutModal.module.css'

// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useModal } from '../hooks/useModal';
// import axios from 'axios';

const LogOutModal = () => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleLogOut = () => {
    axios.post('/logout')
      .then((response) => {
        // Deauthorize user on client-side
        dispatch({ type: 'LOGOUT_SUCCESS' });
        // Clear Redux store and localStorage
        // ...
        // Redirect to HomePage
        window.location.href = '/home';
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <Modal onClose={handleCancel}>
      <div className="modal-content">
        <h2 className="title">Log out</h2>
        <p>Do you really want to leave?</p>
        <Button className="button" type="button" onClick={handleLogOut}>
          Log Out
        </Button>
        <Button className="button" type="button" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default LogOutModal;
