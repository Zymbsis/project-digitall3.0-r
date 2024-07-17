// import { useSelector } from 'react-redux';
import css from './ChooseDate.module.css';
// import { selectSelectedDate } from '../../../redux/water/selectors';

const ChooseDate = () => {
  // const selectedDate = useSelector(selectSelectedDate);
  const example = '2024-17-07';
  const [year, month, day] = example.split('-');
  const queryDate = new Date(year, month - 1, day);
  const monthName = queryDate.toLocaleString('en-US', { month: 'long' });
  const dayOfMonth = queryDate.getDate();
  const date = `${dayOfMonth}, ${monthName}`;

  return <h3 className={css.chooseDateTitle}>{example ? date : 'Today'}</h3>;
};

export default ChooseDate;
