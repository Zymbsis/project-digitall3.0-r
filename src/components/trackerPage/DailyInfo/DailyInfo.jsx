import React from 'react';
import ChooseDate from '../ChooseDate/ChooseDate';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterList from '../WaterList/WaterList';
import css from './DailyInfo.module.css';

const DailyInfo = () => {
  return (
    <div className={css.dailyInfoContainer}>
      <ChooseDate />
      <AddWaterBtn />
      <WaterList />
    </div>
  );
};

export default DailyInfo;
