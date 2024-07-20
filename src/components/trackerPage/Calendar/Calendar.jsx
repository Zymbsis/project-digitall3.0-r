import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectInfoByMonth } from '../../../redux/water/selectors';
import { getDaysArray } from 'helpers';
import CalendarItem from '../CalendarItem/CalendarItem';

import css from './Calendar.module.css';

const Calendar = ({ selectedDate }) => {
  const dispatch = useDispatch();
  const { days: waterData } = useSelector(selectInfoByMonth);
  const [displayDays, setDisplayDays] = useState([]);

  useEffect(() => {
    const daysArray = getDaysArray(selectedDate);
    setDisplayDays(daysArray);
  }, [selectedDate, dispatch]);

  return (
    <ul className={css.container}>
      {displayDays.map(day => {
        const dayData = waterData.find(
          water => water.day === day.padStart(2, '0')
        ) || { completionRate: 0 };
        return (
          <li key={day}>
            <CalendarItem
              day={day}
              waterData={dayData}
              selectedDate={selectedDate}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Calendar;
