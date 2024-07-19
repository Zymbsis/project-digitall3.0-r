import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getInfoByToday } from '../../../redux/water/operations';
import { parseDayForFetch } from 'helpers';
import { Logo } from 'shared';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';

import css from './WaterMainInfo.module.css';

const WaterMainInfo = () => {
  const dispatch = useDispatch();
  const currentDay = parseDayForFetch(new Date());

  useEffect(() => {
    dispatch(getInfoByToday(currentDay));
  }, [currentDay, dispatch]);

  return (
    <div className={css.container}>
      <Logo />
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn className="waterMainInfoStyles" />
    </div>
  );
};

export default WaterMainInfo;
