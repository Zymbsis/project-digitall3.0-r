import React, { useState } from 'react';
import css from './ChooseDate.module.css';

const ChooseDate = () => {
  const today = new Date().getDate();
  const month = new Date().toLocaleString('en-US', { month: 'long' });


  return(
  <h3 className={css.chooseDateTitle}>Today</h3>
  );
};

export default ChooseDate;
