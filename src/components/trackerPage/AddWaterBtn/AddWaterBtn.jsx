import css from './AddWaterBtn.module.css'

// import React, { useState } from "react";


const AddWaterBtn = ({ addWater }) => {
  const handleClick = () => {
    addWater();
  };

  return (
    <div className={css.container}>
      <button type="button" className={css.addWaterBtn} onClick={handleClick}>
        Add water
      </button>
    </div>
  );
};

export default AddWaterBtn;
