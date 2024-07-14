import css from './CalendarItem.module.css'
import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import { Button } from 'shared';
const CalendarItem = ({ day, selectedDate }) => {
  const [waterData, setWaterData] = useState(null);

  // useEffect(() => {
  //   const fetchWaterDetails = async () => {
  //     const response = await fetch(`/api/water-details?date=${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${day}`);
  //     const data = await response.json();
  //     setWaterData(data);
  //   };

  //   fetchWaterDetails();
  // }, [day, selectedDate]);

  // const consumption = waterData ? waterData.doses.reduce((acc, dose) => acc + dose.volume, 0) : 0;
  // const dailyNorma = 1.8; // Replace with the actual daily norma from user data
  // const percentage = (consumption / dailyNorma) * 100;
  // let className;

  // if (percentage >= 100) {
  //   className = css.complete;
  // } else if (percentage >= 50) {
  //   className = css.half;
  // } else {
  //   className = css.low;
  // }

  return (
    <Button className={clsx(css.button)}>
      <span className={css.day}>{day}</span>
      {/* <span className={css.percentage}>{Math.round(percentage)}</span> */}
    </Button>
  );
};

export default CalendarItem;
