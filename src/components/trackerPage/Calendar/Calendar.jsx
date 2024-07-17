import css from './Calendar.module.css'
import CalendarItem from '../CalendarItem/CalendarItem';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMonthlyStats } from '../../../redux/water/selectors';
import { getInfoByMonth } from "../../../redux/water/operations";
import { selectIsLoggedIn } from '../../../redux/auth/selectors';
import { logIn  } from "../../../redux/auth/operations";
const Calendar = ({ selectedDate }) => {
  const [waterData, setWaterData] = useState([]);
  const dispatch = useDispatch();
  // const waterData = useSelector(selectMonthlyStats);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     dispatch(getInfoByMonth(`${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}`));
  //   }
  // }, [selectedDate, isLoggedIn, dispatch]);

  useEffect(() => {
    const fetchWaterData = async () => {
      try {
        const res = await fetch(`/water/month/${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}`)
        const data = await res.json();
        setWaterData(data.days)
      } catch (error) {
        console.error(error)
      }
    };
    fetchWaterData();
  }, [selectedDate]);

  
  const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
  return (
    <ul className={css.container}>
    {Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1;
      const dayData = waterData.find(water => water.day === String(day)) || { completionRate: 0};
      return <CalendarItem key={day} day={day} waterData={dayData} selectedDate={selectedDate} />;
    })}
  </ul>
)
};

export default Calendar;
