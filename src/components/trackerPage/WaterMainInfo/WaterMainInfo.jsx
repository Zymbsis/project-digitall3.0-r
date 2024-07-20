import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getInfoByDay } from '../../../redux/water/operations';
import { parseDayForFetch } from 'helpers';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';

import css from './WaterMainInfo.module.css';

const WaterMainInfo = () => {
  const dispatch = useDispatch();
  const currentDay = parseDayForFetch(new Date());

  useEffect(() => {
    dispatch(getInfoByDay(currentDay));
  }, [currentDay, dispatch]);

  return (
    <div className={css.container}>
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn className="waterMainInfoStyles" date={currentDay} />
    </div>
  );
};

export default WaterMainInfo;
