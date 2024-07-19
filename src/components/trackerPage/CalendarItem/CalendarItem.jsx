import { useDispatch } from 'react-redux';
import { setSelectedDay } from '../../../redux/water/slice';
import { parseDayForFetch } from 'helpers';
import { Button } from 'shared';

import clsx from 'clsx';
import css from './CalendarItem.module.css';

const CalendarItem = ({ day, selectedDate, waterData }) => {
  const dispatch = useDispatch();
  const { completionRate } = waterData;

  const handleWaterOfDay = day => {
    const date = `${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const currentDay = parseDayForFetch(new Date());
    dispatch(setSelectedDay(date === currentDay ? null : date));
  };
  return (
    <>
      <Button
        onClick={() => handleWaterOfDay(day)}
        className={clsx(css.button, { [css.completed]: completionRate === 1 })}
      >
        <span className={css.day}>{day}</span>
      </Button>
      <span className={css.percent}>{Math.round(completionRate * 100)}%</span>
    </>
  );
};

export default CalendarItem;
