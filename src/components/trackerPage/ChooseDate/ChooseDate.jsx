import { useDispatch, useSelector } from 'react-redux';
import css from './ChooseDate.module.css';

import { useEffect } from 'react';

import { selectSelectedDate } from '../../../redux/water/selectors';
import { getInfoBySelectedDay } from '../../../redux/water/operations';

const ChooseDate = () => {
  const selectedDate = useSelector(selectSelectedDate);
  const today = new Date().toISOString().split('T')[0];
  const condition = selectedDate === null || selectedDate === today;
  let date;

  if (!condition) {
    const [year, month, day] = selectedDate.split('-');
    const queryDate = new Date(year, month - 1, day);
    const monthName = queryDate.toLocaleString('en-US', { month: 'long' });
    const dayOfMonth = queryDate.getDate();
    date = `${dayOfMonth}, ${monthName}`;
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfoBySelectedDay('2024-07-16'));
  }, [dispatch]);

  return <h3 className={css.chooseDateTitle}>{condition ? 'Today' : date}</h3>;
};

export default ChooseDate;
