import css from './CalendarItem.module.css'
import clsx from 'clsx';
// import { getInfoByDay } from "../../../redux/water/operations"
import { Button } from 'shared';
import { useDispatch } from 'react-redux';
import { setSelectedDay } from '../../../redux/water/slice';


const CalendarItem = ({ day, selectedDate, waterData}) => {
  const { completionRate } = waterData;
  const dispatch = useDispatch()

  // const handleWaterOfDay = async (day) => {
  //   try {
  //     const date = `${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  //     const res = await dispatch(getInfoByDay(date)).unwrap();
  //   } catch (error) {
  //     console.error("Error fetching water data:", error);
  //   }
  // };

  const handleWaterOfDay = (day) => {
    const date = `${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}-${String(day).padStart(2, '0')}`;
   dispatch(setSelectedDay(date))
  };
  return (
  <li>

    <Button onClick={() => handleWaterOfDay(day)} className={clsx(css.button, { [css.completed]: completionRate === 1 })}>
      <span className={css.day}>{day}</span>
    </Button>
    <span className={css.percent}>{Math.round(completionRate * 100)}%</span>
  </li>
  );
};

export default CalendarItem;
