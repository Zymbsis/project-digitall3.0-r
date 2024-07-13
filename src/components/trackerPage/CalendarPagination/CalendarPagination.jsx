import css from './CalendarPagination.module.css'
import { Icon } from 'shared';

const CalendarPagination = ({ selectedDate, setSelectedDate, userDate}) => {

  const handlePrevMonth = () => {
    setSelectedDate((prevDate) => {

      const prevMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
      return prevMonthDate
    })

   };
 
  const handleNextMonth = () => {
    setSelectedDate((nextDate) => {
      const nextMonthDate = new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, 1);
      return nextMonthDate
    })
  };

  const formatDate = (date) => {
    const format = { month: 'long', year: 'numeric'};
    const data = new Intl.DateTimeFormat('en-US', format).format(date)
    const [month, year] = data.split(' ');
    return `${month}, ${year}`
  };

  const isPrevDis = selectedDate.getFullYear() < userDate.getFullYear() ||
  (selectedDate.getFullYear() === userDate.getFullYear() && 
  selectedDate.getMonth() <= userDate.getMonth());
 
 
 return (
 <div className={css.container}>
  <h2 className={css.title}>Month</h2>
  <div className={css.dateBox}>
  <button className={css.IconBtn} onClick={handlePrevMonth} disabled={isPrevDis}>
      <Icon iconId="icon-chevron-left" className={css.logo}/>
  </button>
  <p className={css.date}>{formatDate(selectedDate)}</p>
  <button className={css.IconBtn} onClick={handleNextMonth}>
  <Icon iconId="icon-chevron-right" className={css.logo}/>
  </button>
  </div>
</div>
)
};

export default CalendarPagination;
