import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectInfoBySelectedDay,
  selectInfoByToday,
  selectSelectedDate,
} from '../../../redux/water/selectors';
import { getInfoByDay } from '../../../redux/water/operations';
import WaterItem from '../WaterItem/WaterItem';

import css from './WaterList.module.css';

const WaterList = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(selectSelectedDate);
  const { portions: todayWaterList } = useSelector(selectInfoByToday);
  const selectedDayWaterList = useSelector(selectInfoBySelectedDay);

  useEffect(() => {
    if (!selectedDate) return;
    dispatch(getInfoByDay(selectedDate));
  }, [dispatch, selectedDate]);
  const currentWaterList = selectedDate ? selectedDayWaterList : todayWaterList;

  return (
    <div className={css.waterListWrap}>
      <ul className={css.waterList}>
        {Array.isArray(currentWaterList) && currentWaterList.length === 0 && (
          <p className={css.paragraph}>
            There are no daily water intakes here yet.
          </p>
        )}
        {Array.isArray(currentWaterList) &&
          currentWaterList.length !== 0 &&
          currentWaterList.map(portion => (
            <li key={portion._id}>
              <WaterItem item={portion} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default WaterList;
