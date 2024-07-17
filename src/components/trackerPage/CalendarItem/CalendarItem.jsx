import css from './CalendarItem.module.css'
import clsx from 'clsx';
import { getInfoByDay } from "../../../redux/water/operations"
import { Button } from 'shared';
import { useDispatch } from 'react-redux';


const CalendarItem = ({ day, selectedDate, waterData}) => {

  const { completionRate } = waterData;
  const dispatch = useDispatch()

  console.log("CalendarItem props:", { day, selectedDate, waterData });

  const handleWaterOfDay = async (day) => {
    try {
      // if (!selectedDate) {
      //   console.error("selectedDate is undefined");
      //   return;
      // }

      const date = `${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const res = await dispatch(getInfoByDay(date)).unwrap();
    } catch (error) {
      console.error("Error fetching water data:", error);
    }
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
