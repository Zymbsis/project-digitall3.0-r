import css from './Calendar.module.css'
import CalendarItem from '../CalendarItem/CalendarItem';
const Calendar = ({ selectedDate }) => {
  const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth}, (_, i) => i + 1);

  return (
  <div className={css.container}>
    {days.map(day => (
      <CalendarItem key={day} day={day} selectedDate={selectedDate}/>
    ))}
  </div>
)
};

export default Calendar;
