import css from './Calendar.module.css'
import CalendarItem from '../CalendarItem/CalendarItem';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getInfoByMonth } from "../../../redux/water/operations";

const Calendar = ({ selectedDate }) => {
  const [waterData, setWaterData] = useState([]);
  const [displayDays, setDisplayDays] = useState([]);
  const dispatch = useDispatch();
  
  const year = selectedDate.getFullYear();
  const month = String(selectedDate.getMonth() + 1).padStart(2, '0');

  useEffect(() => {
    const fetchWaterData = async () => {
      try {
        const date = `${year}-${month}`;
        const res = await dispatch(getInfoByMonth(date)).unwrap();
        setWaterData(res.days)
      } catch (error) {
        console.error(error)
      }
    };
    const displayDays = () => {
      const daysInMonth = new Date(year, selectedDate.getMonth() + 1, 0).getDate();
      const days = Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString());
      setDisplayDays(days);
    };

    fetchWaterData();
    displayDays();
  }, [selectedDate, year, month, dispatch]);

  return (
    <ul className={css.container}>
    {displayDays.map(day => {
        const dayData = waterData.find(water => water.day === day.padStart(2, '0')) || { completionRate: 0 };
        return <CalendarItem key={day} day={day} waterData={dayData} selectedDate={selectedDate} />;
      })}
  </ul>
)
};

export default Calendar;
