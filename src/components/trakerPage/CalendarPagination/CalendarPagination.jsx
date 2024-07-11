import css from './CalendarPagination.module.css'
import { Container } from 'shared';
import { useEffect, useState } from "react";

const CalendarPagination = () => {
 const [currentDate, setCurrentDate] = useState(new Date());
 const user = 

useEffect(() => {
  setCurrentDate(new Date()); //Set new date
}, [])

  const handlePreviouslyMonth = () => {
    setCurrentDate((prevDate) => {
      const prevMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
      return prevMonthDate;
    });
   };
 
  const handleNextMonth = () => {
    setCurrentDate((nextDate) => {
      const nextMonthDate = new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, 1);
      return nextMonthDate;
    });
  }
  const formatDate = (date) => {
    const format = { month: 'long', year: 'numeric'};
    const data = new Intl.DateTimeFormat('en-US', format).format(date)
    const [month, year] = data.split(' ');
    return `${month}, ${year}`
  }
  return <Container className={css.box}>
    <h2 className={css.title}>Month</h2>
    <div className={css.dateBox}>
    <button onClick={handlePreviouslyMonth}>
        Prev
    </button>
    <p className={css.date}>{formatDate(currentDate)}</p>
    <button onClick={handleNextMonth}>
      Next
    </button>
    </div>
  </Container>;
};

export default CalendarPagination;
