import { useDispatch, useSelector } from 'react-redux';
import css from './ChooseDate.module.css';
// import { selectSelectedDate } from '../../../redux/water/selectors';  by author

// import { selectCurrentDate } from '../../../redux/water/selectors'; // by me for waterSlice Selector

// import { selectSelectedDate } from '../../../redux/date/selectors'; // by me for dateSlice Selector

import { useEffect } from 'react';
import { selectSelectedDate } from '../../../redux/date/selectors';
import { getInfoByDay } from '../../../redux/date/operations';

// maybe need to fix
const ChooseDate = () => {
  // const selectedDate = useSelector(selectSelectedDate);  by author

  // by me
  // from waterSlice
  // const selectedDate = useSelector(selectCurrentDate)

  // from dateSlice
  const selectedDate = useSelector(selectSelectedDate);

  let date;
  if (selectedDate !== null) {
    const [year, month, day] = selectedDate.split('-');
    const queryDate = new Date(year, month - 1, day);
    const monthName = queryDate.toLocaleString('en-US', { month: 'long' });
    const dayOfMonth = queryDate.getDate();
    date = `${dayOfMonth}, ${monthName}`;
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfoByDay('2024-07-16'));
  }, [dispatch]);

  return (
    <h3 className={css.chooseDateTitle}>{selectedDate ? date : 'Today'}</h3>
  );
};

export default ChooseDate;
