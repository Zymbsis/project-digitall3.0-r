import React, { useState } from 'react';
import { Icon } from 'shared';
import css from './AddWaterBtn.module.css';
// import Modal from 'components/Modal/Modal.jsx';


const AddWaterBtn = ({ addWater }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.container}>
      <button type="button" className={css.addWaterBtn} onClick={handleClick}>
        <div className={css.iconPlusWrap}>
          <Icon iconId="icon-plus" className={css.iconPlus} />
        </div>
        Add water
      </button>
    </div>
  );
};

export default AddWaterBtn;

