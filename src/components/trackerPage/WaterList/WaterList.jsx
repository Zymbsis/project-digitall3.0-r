import css from './WaterList.module.css';
import WaterItem from '../WaterItem/WaterItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectInfoBySelectedDay,
  selectInfoByToday,
  selectSelectedDate,
} from '../../../redux/water/selectors';
import { useEffect } from 'react';
import {
  getInfoBySelectedDay,
  getInfoByToday,
} from '../../../redux/water/operations';
import { TODAY } from '../../../constants';
import { store } from '../../../redux/store';

const WaterList = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(selectSelectedDate);
  const { portions: todayPortions } = useSelector(selectInfoByToday);
  const { portions: selectedDayPortions } = useSelector(
    selectInfoBySelectedDay
  );
  const condition = selectedDate === null || selectedDate === TODAY;

  useEffect(() => {
    condition
      ? dispatch(getInfoByToday(TODAY))
      : dispatch(getInfoBySelectedDay(selectedDate));
  }, [condition, dispatch, selectedDate]);

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
