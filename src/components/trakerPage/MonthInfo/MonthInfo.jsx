import css from './MonthInfo.module.css';
import CalendarPagination from "../CalendarPagination/CalendarPagination";
import Calendar from "../Calendar/Calendar";
import { Section } from 'shared';
import { useState, useEffect } from "react";

const MonthInfo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log(selectedDate);
  const userDate = new Date('2024-04-01');

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

return (
  <Section className={css.container}>
    <CalendarPagination selectedDate={selectedDate} setSelectedDate={setSelectedDate} userDate={userDate}/>
    <Calendar selectedDate={selectedDate}/>
  </Section>
  ) 
};

export default MonthInfo;
