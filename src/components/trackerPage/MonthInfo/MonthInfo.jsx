import CalendarPagination from '../CalendarPagination/CalendarPagination';
import Calendar from '../Calendar/Calendar';
import { useState } from 'react';
// import css from './MonthInfo.module.css';

const MonthInfo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="tour-month-progress">
      <CalendarPagination
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <Calendar selectedDate={selectedDate} />
    </div>
  );
};

export default MonthInfo;
