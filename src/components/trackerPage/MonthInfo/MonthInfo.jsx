// import css from './MonthInfo.module.css';

import Calendar from '../Calendar/Calendar';
import CalendarPagination from '../CalendarPagination/CalendarPagination';

const MonthInfo = () => {
  return (
    <div>
      <CalendarPagination />
      <Calendar />
    </div>
  );
};

export default MonthInfo;
