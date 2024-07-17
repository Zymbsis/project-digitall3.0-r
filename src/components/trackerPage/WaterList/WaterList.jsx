import css from './WaterList.module.css';
import WaterItem from '../WaterItem/WaterItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectInfoBySelectedDay,
  selectSelectedDate,
} from '../../../redux/water/selectors';
import { useEffect } from 'react';
import {
  getInfoBySelectedDay,
  getInfoByToday,
} from '../../../redux/water/operations';

const WaterList = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(selectSelectedDate);
  const { portions: todayPortions } = useSelector(selectInfoBySelectedDay);
  const { portions: selectedDayPortions } = useSelector(
    selectInfoBySelectedDay
  );
  const today = new Date().toISOString().split('T')[0];
  const condition = selectedDate === null || selectedDate === today;

  useEffect(() => {
    condition
      ? dispatch(getInfoByToday(today))
      : dispatch(getInfoBySelectedDay(selectedDate));
  }, [condition, dispatch, today, selectedDate]);
  const waterList = condition ? todayPortions : selectedDayPortions;

  return (
    <div className={css.waterListWrap}>
      <ul className={css.waterList}>
        {Array.isArray(waterList) &&
          waterList.length !== 0 &&
          waterList.map(portion => (
            <li key={portion._id}>
              <WaterItem item={portion} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default WaterList;
