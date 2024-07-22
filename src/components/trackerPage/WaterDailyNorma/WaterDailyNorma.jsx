import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../redux/user/selectors';
import { getInfoByDay } from '../../../redux/water/operations';
import { parseDayForFetch } from 'helpers';

import css from './WaterDailyNorma.module.css';

const WaterDailyNorma = () => {
  const { dailyNorma } = useSelector(selectCurrentUser);
  const dayNorma = dailyNorma ? Math.round((dailyNorma / 1000) * 100) / 100 : 0;
  const dispatch = useDispatch();
  const currentDay = parseDayForFetch(new Date());

  useEffect(() => {
    dispatch(getInfoByDay(currentDay));
  }, [currentDay, dispatch, dailyNorma]);

  return (
    <div className={css.thumb}>
      <p className={css.boldText}> {dayNorma} L </p>
      <p className={css.normalText}> My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma;
