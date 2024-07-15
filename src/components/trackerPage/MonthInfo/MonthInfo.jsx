import css from './MonthInfo.module.css';
import CalendarPagination from "../CalendarPagination/CalendarPagination";
import Calendar from "../Calendar/Calendar";
import { useState, useEffect } from "react";

const MonthInfo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const userDate = new Date('2024-04-01');

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

return (
  <div className={css.container}>
    <CalendarPagination selectedDate={selectedDate} setSelectedDate={setSelectedDate} userDate={userDate}/>
    <Calendar selectedDate={selectedDate}/>
  </div>
  ) 
};

export default MonthInfo;
