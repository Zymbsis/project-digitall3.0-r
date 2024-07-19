import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectInfoBySelectedDay,
  selectInfoByToday,
  selectSelectedDate,
} from '../../../redux/water/selectors';
import { getInfoBySelectedDay } from '../../../redux/water/operations';
import { parseDayForFetch } from 'helpers';
import WaterItem from '../WaterItem/WaterItem';

import css from './WaterList.module.css';

const WaterList = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(selectSelectedDate);
  const { portions: todayWaterList } = useSelector(selectInfoByToday);
  const { portions: selectedDayWaterList } = useSelector(
    selectInfoBySelectedDay
  );
  const currentDay = parseDayForFetch(new Date());
  const condition = selectedDate === null || selectedDate === currentDay;

  useEffect(() => {
    if (condition) return;
    dispatch(getInfoBySelectedDay(selectedDate));
  }, [condition, dispatch, selectedDate]);
  const currentWaterList = condition ? todayWaterList : selectedDayWaterList;

  return (
    <div className={css.waterListWrap}>
      <ul className={css.waterList}>
        {Array.isArray(currentWaterList) && currentWaterList.length === 0 && (
          <li>
            <p className={css.paragraph}>
              There are no daily water intakes here yet.
            </p>
          </li>
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
