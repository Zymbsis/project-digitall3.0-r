import CalendarPagination from '../CalendarPagination/CalendarPagination';
import Calendar from '../Calendar/Calendar';
import { useState } from 'react';
import WeekDiagram from '../WeekDiagramm/WeekDiagram';
// import css from './MonthInfo.module.css';

const MonthInfo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showStatistics, setShowStatistics] = useState(false);
  const handleClickStatisticsBtn = () => {
    setShowStatistics(!showStatistics);
  };

  return (
    <div className="tour-month-progress">
      <CalendarPagination
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        showStatistics={showStatistics}
        handleClick={handleClickStatisticsBtn}
      />

      {showStatistics ? (
        <WeekDiagram />
      ) : (
        <Calendar selectedDate={selectedDate} />
      )}
    </div>
  );
};

export default MonthInfo;
