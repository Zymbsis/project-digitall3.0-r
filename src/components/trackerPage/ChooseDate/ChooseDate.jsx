import { useDispatch, useSelector } from 'react-redux';
import css from './ChooseDate.module.css';
import { selectSelectedDate } from '../../../redux/water/selectors';
import { useEffect } from 'react';
import { getInfoByDay } from '../../../redux/water/operations';

const ChooseDate = () => {
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
    dispatch(getInfoByDay('2024-07-01'));
  }, [dispatch]);

  return (
    <h3 className={css.chooseDateTitle}>{selectedDate ? date : 'Today'}</h3>
  );
};

export default ChooseDate;
