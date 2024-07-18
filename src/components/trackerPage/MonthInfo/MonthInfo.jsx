import css from './MonthInfo.module.css';
import CalendarPagination from "../CalendarPagination/CalendarPagination";
import Calendar from "../Calendar/Calendar";
import { useState, useEffect } from "react";

const MonthInfo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

return (
  <div>
    <CalendarPagination selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
    <Calendar selectedDate={selectedDate}/>
  </div>
  ) 
};

export default MonthInfo;
