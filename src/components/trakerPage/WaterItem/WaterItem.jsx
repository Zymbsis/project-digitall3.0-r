// import css from './WaterItem.module.css'

import React, { useState } from "react";


const WaterItem = ({ item, deleteWater }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const toggleDeleteModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  return (
    <div>
      <p>{item.amount} ml at {item.time}</p>
      <button type="button" onClick={toggleEditModal}>
        ✏️
      </button>
      <button type="button" onClick={toggleDeleteModal}>
        🗑️
      </button>

    </div>
  );
};

export default WaterItem;
