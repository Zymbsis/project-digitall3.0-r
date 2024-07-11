import React, { useState } from "react";
import css from "./AddWaterBtn.module.css";

const AddWaterBtn = ({ addWater }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={css.container}>
      <button
        type="button"
        className={css["add-water-btn"]}
        onClick={toggleModal}
      >
        Add water
      </button>
    </div>
  );
};

export default AddWaterBtn;
