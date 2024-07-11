import React from 'react';
import css from './WaterItem.module.css';

const WaterItem = ({ water }) => {
  return (
    <div className={css.waterItem}>
      <span>{water.amount} ml</span>
      <span>{water.time}</span>
      <button type="button" className={css.editBtn}>
        <i className="fas fa-pencil-alt"></i>
      </button>
      <button type="button" className={css.deleteBtn}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default WaterItem;
